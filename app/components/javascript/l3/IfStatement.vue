<template>
  <section id="if-statement" class="py-20 bg-surface relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
          <span>🎯</span> لو الشرط اتحقق
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          <span class="font-mono text-primary bg-primary/10 px-4 rounded-xl mr-2">if</span>
        </h2>
        
        <p class="text-2xl text-mutedtext leading-relaxed">
          <code class="font-mono text-primary bg-primary/10 px-2 rounded">if</code> معناها: لو الشرط صحيح، نفذ الكود.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" dir="ltr">
        <!-- Visualizer -->
        <div class="flex flex-col items-center justify-center bg-background rounded-3xl p-8 border border-border shadow-sm min-h-[400px]">
          
          <div class="bg-primary/10 border border-primary/30 text-primary font-mono font-bold px-8 py-4 rounded-xl text-2xl z-10 bg-background shadow-lg">
            if
          </div>
          
          <div class="w-1 bg-border h-8 flex items-center justify-center overflow-hidden relative">
             <div class="absolute inset-0 bg-primary animate-[slideDown_2s_ease-in-out_infinite]"></div>
          </div>
          
          <div class="bg-purple-500/10 border border-purple-500/30 text-purple-500 font-mono font-bold px-6 py-3 rounded-xl text-center w-full max-w-[200px] z-10 bg-background">
            Condition<br>
            <span class="text-sm opacity-80">(age >= 18)</span>
          </div>

          <div class="w-1 bg-border h-8 relative">
             <div class="absolute inset-0 bg-green-500 animate-[slideDown_2s_ease-in-out_infinite]" style="animation-delay: 0.5s"></div>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 text-green-500 font-bold px-4 py-2 rounded-full z-10 text-sm bg-background">
            true?
          </div>

          <div class="w-1 bg-border h-8 relative">
             <div class="absolute inset-0 bg-primary animate-[slideDown_2s_ease-in-out_infinite]" style="animation-delay: 1s"></div>
          </div>
          
          <div class="bg-surface border-2 border-primary/30 text-maintext font-mono font-bold p-4 rounded-xl text-center w-full max-w-[250px] shadow-lg z-10">
            Execute Code Inside { }
          </div>

        </div>

        <!-- Code Example -->
        <div class="flex flex-col gap-6">
          <div class="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
            <div class="bg-surface px-4 py-3 border-b border-border flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <div class="ml-4 text-sm font-mono text-mutedtext flex-1 text-center">app.js</div>
            </div>
            <div class="p-6 font-mono text-sm md:text-base leading-loose overflow-x-auto text-left" dir="ltr">
              <span class="text-purple-400">let</span> <span class="text-maintext">age</span> = <span class="text-orange-400">18</span>;<br>
              <br>
              <span class="text-primary font-bold">if</span> (<span class="text-maintext">age</span> >= <span class="text-orange-400">18</span>) {<br>
              &nbsp;&nbsp;<span class="text-blue-400">console</span>.<span class="text-yellow-200">log</span>(<span class="text-green-400">"You can enter"</span>);<br>
              }
            </div>
          </div>

          <div class="bg-[#1e1e1e] rounded-2xl p-6 border border-border shadow-inner" dir="ltr">
            <div class="text-xs text-gray-400 font-mono mb-2 mb-4">Console Output:</div>
            <div class="font-mono text-green-400">> You can enter</div>
          </div>
          
          <div class="bg-red-500/10 text-red-600 p-4 rounded-xl text-right font-bold text-lg mt-4 border border-red-500/20">
            لكن لو <span class="font-mono" dir="ltr">age = 16</span>، مش هيطبع أي حاجة لأن الشرط لم يتحقق.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes slideDown {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}
</style>
