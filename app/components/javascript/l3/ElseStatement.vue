<template>
  <section id="else-statement" class="py-20 bg-surface relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
          <span>🔄</span> طيب لو الشرط غلط؟
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          <span class="font-mono text-accent bg-accent/10 px-4 rounded-xl mr-2">else</span>
        </h2>
        
        <p class="text-2xl text-mutedtext leading-relaxed">
          <code class="font-mono text-accent bg-accent/10 px-2 rounded">else</code> معناها: لو الشرط مش صحيح، نفذ البديل.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" dir="ltr">
        <!-- Visualizer -->
        <div class="flex flex-col items-center justify-center bg-background rounded-3xl p-8 border border-border shadow-sm min-h-[400px]">
          
          <div class="bg-purple-500/10 border border-purple-500/30 text-purple-500 font-mono font-bold px-6 py-3 rounded-xl text-center w-full max-w-[200px] z-10 bg-background">
            Condition<br>
            <span class="text-sm opacity-80">age >= 18</span>
          </div>

          <div class="w-1 h-8 bg-border"></div>
          
          <div class="w-48 h-1 bg-border flex justify-between relative">
             <div class="w-1 h-8 bg-border absolute left-0 top-0"></div>
             <div class="w-1 h-8 bg-border absolute right-0 top-0"></div>
          </div>

          <div class="w-48 flex justify-between mt-8">
            <div class="flex flex-col items-center group w-1/2 -ml-4">
              <div class="bg-green-500/10 border border-green-500/30 text-green-500 font-bold px-4 py-1 rounded-full text-sm mb-4">
                TRUE
              </div>
              <div class="bg-surface border-2 border-green-500/30 text-maintext font-mono font-bold p-3 rounded-xl text-center w-28 shadow-sm">
                Allowed
              </div>
            </div>
            
            <div class="flex flex-col items-center group w-1/2 -mr-4">
              <div class="bg-red-500/10 border border-red-500/30 text-red-500 font-bold px-4 py-1 rounded-full text-sm mb-4">
                FALSE
              </div>
              <div class="bg-surface border-2 border-red-500/30 text-maintext font-mono font-bold p-3 rounded-xl text-center w-28 shadow-sm">
                Not allowed
              </div>
            </div>
          </div>

        </div>

        <!-- Code Example -->
        <div class="flex flex-col gap-6">
          <div class="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
            <div class="bg-surface px-4 py-3 border-b border-border flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div class="p-6 font-mono text-sm md:text-base leading-loose overflow-x-auto text-left" dir="ltr">
              <span class="text-purple-600">let</span> <span class="text-maintext">age</span> = <span class="text-orange-600">16</span>;<br>
              <br>
              <span class="text-primary font-bold">if</span> (<span class="text-maintext">age</span> >= <span class="text-orange-600">18</span>) {<br>
              &nbsp;&nbsp;<span class="text-blue-600">console</span>.<span class="text-amber-600">log</span>(<span class="text-green-600">"Allowed"</span>);<br>
              } <span class="text-accent font-bold">else</span> {<br>
              &nbsp;&nbsp;<span class="text-blue-600">console</span>.<span class="text-amber-600">log</span>(<span class="text-green-600">"Not allowed"</span>);<br>
              }
            </div>
          </div>

          <div class="bg-[#1e1e1e] rounded-2xl p-6 border border-border shadow-inner" dir="ltr">
            <div class="text-xs text-gray-400 font-mono mb-2">Console Output:</div>
            <div class="font-mono text-green-400">> Not allowed</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
