<template>
  <div class="playground bg-gray-900 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col font-mono text-left" dir="ltr">
    <!-- Header -->
    <div class="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div class="text-gray-400 text-sm font-bold tracking-widest uppercase">JavaScript</div>
      <div class="flex items-center gap-2">
        <button v-if="allowReset" @click="resetCode" class="text-gray-400 hover:text-white px-2 py-1 text-sm transition-colors" title="Reset">
          ↻
        </button>
        <button @click="clearConsole" class="text-gray-400 hover:text-white px-2 py-1 text-sm transition-colors" title="Clear Console">
          🗑
        </button>
      </div>
    </div>

    <!-- Editor -->
    <div class="flex-1 relative min-h-[150px]">
      <textarea v-model="internalCode" 
                class="w-full h-full bg-transparent text-gray-100 p-4 resize-none outline-none font-mono text-lg leading-relaxed focus:bg-gray-800/50 transition-colors"
                spellcheck="false"></textarea>
    </div>

    <!-- Action Bar -->
    <div class="bg-gray-800 px-4 py-3 border-y border-gray-700 flex items-center justify-between">
      <button @click="runCode" 
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
        <span>▶</span> Run
      </button>
      
      <span v-if="runSuccess" class="text-green-400 text-sm font-bold animate-pulse">Code Executed!</span>
    </div>

    <!-- Console Output -->
    <div class="bg-black/50 p-4 h-48 overflow-y-auto">
      <div class="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
        <span>Console</span>
      </div>
      <div v-if="logs.length === 0" class="text-gray-600 italic text-sm">No output yet...</div>
      <div v-for="(log, i) in logs" :key="i" class="font-mono text-sm mb-1 break-words" :class="log.type === 'error' ? 'text-red-400' : 'text-gray-200'">
        <span class="text-gray-600 mr-2">></span>{{ log.message }}
      </div>
    </div>

    <!-- Sandbox Iframe (Hidden) -->
    <iframe ref="sandboxFrame" style="display:none" sandbox="allow-scripts"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  allowReset: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'run'])

const internalCode = ref(props.modelValue)
const initialCode = props.modelValue

watch(() => props.modelValue, (newVal) => {
  if (internalCode.value !== newVal) {
    internalCode.value = newVal
  }
})

watch(internalCode, (newVal) => {
  emit('update:modelValue', newVal)
})

const logs = ref<{type: string, message: string}[]>([])
const sandboxFrame = ref<HTMLIFrameElement | null>(null)
const runSuccess = ref(false)

const resetCode = () => {
  internalCode.value = initialCode
}

const clearConsole = () => {
  logs.value = []
}

const messageListener = (event: MessageEvent) => {
  if (event.data && event.data.source === 'js-playground') {
    if (event.data.type === 'log') {
      logs.value.push({ type: 'info', message: event.data.args.join(' ') })
    } else if (event.data.type === 'error') {
      logs.value.push({ type: 'error', message: event.data.error })
    }
  }
}

onMounted(() => {
  window.addEventListener('message', messageListener)
})

onUnmounted(() => {
  window.removeEventListener('message', messageListener)
})

const runCode = () => {
  if (!sandboxFrame.value) return
  
  runSuccess.value = false
  
  const iframe = sandboxFrame.value
  
  // Safe HTML blob with overridden console
  const html = `
    <!DOCTYPE html>
    <html>
    <body>
      <script>
        const originalLog = console.log;
        console.log = function(...args) {
          window.parent.postMessage({ source: 'js-playground', type: 'log', args: args.map(String) }, '*');
        };
        
        // Prevent default errors from leaking
        window.onerror = function(msg, url, lineNo, columnNo, error) {
          window.parent.postMessage({ source: 'js-playground', type: 'error', error: msg.toString() }, '*');
          return true;
        };

        window.addEventListener('message', (e) => {
          if(e.data.type === 'execute') {
            try {
              // Wrap in IIFE to avoid global scope pollution
              const code = new Function(e.data.code);
              code();
              window.parent.postMessage({ source: 'js-playground', type: 'success' }, '*');
            } catch(err) {
              window.parent.postMessage({ source: 'js-playground', type: 'error', error: err.toString() }, '*');
            }
          }
        });
      <\/script>
    </body>
    </html>
  `
  
  const blob = new Blob([html], { type: 'text/html' })
  iframe.src = URL.createObjectURL(blob)
  
  iframe.onload = () => {
    iframe.contentWindow?.postMessage({ type: 'execute', code: internalCode.value }, '*')
    runSuccess.value = true
    setTimeout(() => {
      runSuccess.value = false
    }, 2000)
    emit('run', { code: internalCode.value, logs: logs.value })
  }
}
</script>
