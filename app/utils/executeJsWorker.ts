export interface LogEntry {
  type: 'log' | 'warn' | 'error' | 'system'
  args: string[]
}

export interface ExecutionResult {
  success: boolean
  logs: LogEntry[]
  error?: string
}

export const executeJsWorker = (code: string, timeoutMs: number = 2000): Promise<ExecutionResult> => {
  return new Promise((resolve) => {
    // Dynamically create the worker script
    const workerScript = `
      self.onmessage = function(e) {
        const { code } = e.data;
        const logs = [];
        
        const serialize = (arg) => {
          try {
            if (typeof arg === 'undefined') return 'undefined';
            if (arg === null) return 'null';
            if (typeof arg === 'function') return '[Function]';
            if (arg instanceof Error) return arg.message;
            if (typeof arg === 'object') {
              // Try to serialize simple objects/arrays
              return JSON.stringify(arg, (key, value) => 
                typeof value === 'function' ? '[Function]' : value
              , 2);
            }
            return String(arg);
          } catch (err) {
            return '[Unserializable]';
          }
        };

        const captureLog = (type, args) => {
          logs.push({ type, args: args.map(serialize) });
        };

        const originalConsoleLog = console.log;
        const originalConsoleError = console.error;
        const originalConsoleWarn = console.warn;

        console.log = (...args) => captureLog('log', args);
        console.error = (...args) => captureLog('error', args);
        console.warn = (...args) => captureLog('warn', args);

        try {
          // Use new Function to execute the code in this scope
          // It doesn't have access to DOM, document, window, etc (since it's a Worker)
          const runFn = new Function(code);
          runFn();
          
          self.postMessage({ success: true, logs });
        } catch (error) {
          self.postMessage({ 
            success: false, 
            logs, 
            error: error.message || String(error)
          });
        } finally {
          console.log = originalConsoleLog;
          console.error = originalConsoleError;
          console.warn = originalConsoleWarn;
        }
      };
    `;

    // Create a blob URL for the worker
    const blob = new Blob([workerScript], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);

    let isDone = false;

    // Set a timeout to kill the worker (prevents infinite loops)
    const timeoutId = setTimeout(() => {
      if (!isDone) {
        worker.terminate();
        isDone = true;
        URL.revokeObjectURL(workerUrl);
        resolve({
          success: false,
          logs: [],
          error: "الكود أخذ وقت طويل جداً وتوقف. هل يوجد حلقة تكرار (Loop) لا تنتهي؟"
        });
      }
    }, timeoutMs);

    // Handle messages from the worker
    worker.onmessage = (e) => {
      if (!isDone) {
        isDone = true;
        clearTimeout(timeoutId);
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve(e.data as ExecutionResult);
      }
    };

    // Handle worker-level errors
    worker.onerror = (error) => {
      if (!isDone) {
        isDone = true;
        clearTimeout(timeoutId);
        worker.terminate();
        URL.revokeObjectURL(workerUrl);
        resolve({
          success: false,
          logs: [],
          error: error.message || "حدث خطأ غير متوقع أثناء تشغيل الكود."
        });
      }
    };

    // Start execution
    worker.postMessage({ code });
  });
};
