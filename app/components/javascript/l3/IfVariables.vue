<template>
  <section id="if-variables" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-8">
        <span>🔗</span> ربط الدروس
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        فاكر الـ Variables؟
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        المتغير فيه البيانات،
        <br>
        والشرط بيستخدم البيانات علشان ياخد قرار.
      </p>

      <div class="bg-surface rounded-3xl p-8 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 mb-12" dir="ltr">
        <div class="flex-1 flex flex-col items-center justify-center w-full">
          <!-- Variable -->
          <div class="bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold px-6 py-3 rounded-xl w-64 text-center relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <span class="text-xs text-mutedtext absolute top-1 left-2">VARIABLE</span>
            let score = 95;
          </div>
          <div class="text-primary font-bold my-2 text-xl">↓</div>

          <!-- Condition -->
          <div class="bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono font-bold px-6 py-3 rounded-xl w-64 text-center relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <span class="text-xs text-mutedtext absolute top-1 left-2">CONDITION</span>
            if (score >= 90)
          </div>
          <div class="text-primary font-bold my-2 text-xl">↓</div>

          <!-- Action -->
          <div class="bg-green-500/10 border border-green-500/30 text-green-400 font-mono font-bold px-6 py-3 rounded-xl w-64 text-center relative overflow-hidden group hover:border-green-500/50 transition-colors">
            <span class="text-xs text-mutedtext absolute top-1 left-2">ACTION</span>
            console.log("Excellent")
          </div>
        </div>
      </div>
      
      <div class="bg-background rounded-2xl border border-border overflow-hidden shadow-lg text-left" dir="ltr">
        <div class="bg-surface px-4 py-3 border-b border-border flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-400"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div class="p-6 font-mono text-sm md:text-base leading-loose">
          <span class="text-purple-600">let</span> <span class="text-maintext">score</span> = <span class="text-orange-600">95</span>;<br>
          <br>
          <span class="text-primary font-bold">if</span> (<span class="text-maintext">score</span> >= <span class="text-orange-600">90</span>) {<br>
          &nbsp;&nbsp;<span class="text-blue-600">console</span>.<span class="text-amber-600">log</span>(<span class="text-green-600">"Excellent"</span>);<br>
          }
        </div>
      </div>

    </div>
  </section>
</template>
