<template>
  <section id="console-log" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-6">فاكر console.log()؟</h2>
      
      <p class="text-xl text-mutedtext mb-12">
        دلوقتي نقدر نستخدم <span class="font-mono text-yellow-400">console.log()</span> عشان نشوف القيمة اللي جوه المتغير.
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-8 shadow-xl max-w-3xl mx-auto font-mono text-2xl text-left" dir="ltr">
        
        <div class="mb-12 border-b border-border pb-8">
          <div><span class="text-purple-400">let</span> <span class="text-blue-300">name</span> <span class="text-white">=</span> <span class="text-green-300">"Ahmed"</span>;</div>
          <div class="mt-2"><span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(name);</div>
          <div class="mt-4 bg-black/50 p-4 rounded-xl text-gray-300 flex items-center gap-3">
            <span class="text-gray-500">></span> Ahmed
          </div>
        </div>
        
        <div class="mb-12 border-b border-border pb-8">
          <div><span class="text-purple-400">let</span> <span class="text-blue-300">age</span> <span class="text-white">=</span> <span class="text-orange-400">17</span>;</div>
          <div class="mt-2"><span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(age);</div>
          <div class="mt-4 bg-black/50 p-4 rounded-xl text-gray-300 flex items-center gap-3">
            <span class="text-gray-500">></span> 17
          </div>
        </div>
        
        <div>
          <div><span class="text-purple-400">let</span> <span class="text-blue-300">score</span> <span class="text-white">=</span> <span class="text-orange-400">95</span>;</div>
          <div class="mt-2"><span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(score);</div>
          <div class="mt-4 bg-black/50 p-4 rounded-xl text-gray-300 flex items-center gap-3">
            <span class="text-gray-500">></span> 95
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>
