<template>
  <section id="else-if-statement" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
          <span>🌿</span> لو عندنا أكتر من احتمال؟
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          <span class="font-mono text-blue-500 bg-blue-500/10 px-4 rounded-xl mr-2">else if</span>
        </h2>
        
        <p class="text-2xl text-mutedtext leading-relaxed">
          تسمح لنا باختبار شروط تانية لو الشرط الأول كان خطأ.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" dir="ltr">
        
        <!-- Decision Tree Visual -->
        <div class="bg-surface rounded-3xl p-8 border border-border shadow-sm flex flex-col items-center">
           <div class="text-center text-mutedtext font-bold mb-4">Score</div>
           <div class="w-1 h-6 bg-border"></div>

           <!-- Condition 1 -->
           <div class="bg-purple-500/10 border border-purple-500/30 text-purple-500 font-mono font-bold px-4 py-2 rounded-xl text-sm">
             90 or more?
           </div>
           
           <div class="flex w-full justify-between mt-4">
             <div class="flex flex-col items-center w-1/2">
                <div class="text-green-500 font-bold text-xs mb-1">YES</div>
                <div class="bg-green-500/10 border border-green-500/30 text-green-500 font-mono px-3 py-1 rounded">Excellent</div>
             </div>
             <div class="flex flex-col items-center w-1/2">
                <div class="text-red-500 font-bold text-xs mb-1">NO</div>
                <div class="w-1 h-6 bg-border"></div>
             </div>
           </div>

           <!-- Condition 2 -->
           <div class="flex w-full justify-end mt-2">
             <div class="w-1/2 flex flex-col items-center">
                <div class="bg-blue-500/10 border border-blue-500/30 text-blue-500 font-mono font-bold px-4 py-2 rounded-xl text-sm">
                  70 or more?
                </div>
                <div class="flex w-full justify-between mt-4 ml-8">
                  <div class="flex flex-col items-center">
                      <div class="text-green-500 font-bold text-xs mb-1">YES</div>
                      <div class="bg-blue-500/10 border border-blue-500/30 text-blue-500 font-mono px-3 py-1 rounded w-20 text-center">Good</div>
                  </div>
                  <div class="flex flex-col items-center -mr-8">
                      <div class="text-red-500 font-bold text-xs mb-1">NO</div>
                      <div class="w-1 h-6 bg-border mb-1"></div>
                      <div class="bg-orange-500/10 border border-orange-500/30 text-orange-500 font-mono px-3 py-1 rounded text-center w-32 text-xs">Needs improvement</div>
                  </div>
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
            <div class="p-6 font-mono text-sm leading-loose overflow-x-auto text-left" dir="ltr">
              <span class="text-purple-600">let</span> <span class="text-maintext">score</span> = <span class="text-orange-600">85</span>;<br>
              <br>
              <span class="text-primary font-bold">if</span> (<span class="text-maintext">score</span> >= <span class="text-orange-600">90</span>) {<br>
              &nbsp;&nbsp;<span class="text-blue-600">console</span>.<span class="text-amber-600">log</span>(<span class="text-green-600">"Excellent"</span>);<br>
              } <span class="text-blue-500 font-bold">else if</span> (<span class="text-maintext">score</span> >= <span class="text-orange-600">70</span>) {<br>
              &nbsp;&nbsp;<span class="text-blue-600">console</span>.<span class="text-amber-600">log</span>(<span class="text-green-600">"Good"</span>);<br>
              } <span class="text-accent font-bold">else</span> {<br>
              &nbsp;&nbsp;<span class="text-blue-600">console</span>.<span class="text-amber-600">log</span>(<span class="text-green-600">"Needs improvement"</span>);<br>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
