<template>
  <section id="final-challenge" class="py-24 bg-surface relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 tracking-tight">تحدي الحصة 🚀</h2>
        <p class="text-2xl text-mutedtext font-bold">
          وصلنا لنهاية الدرس... ورينا شطارتك!
        </p>
      </div>

      <div class="bg-background rounded-[3rem] p-10 md:p-14 border-2 border-primary/20 shadow-2xl relative overflow-hidden">
        <div class="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

        <h3 class="text-3xl font-black text-maintext mb-8 border-b border-border pb-6">المطلوب:</h3>
        
        <p class="text-xl text-maintext font-bold mb-8 leading-relaxed">
          "اكتب برنامج يعرض بيانات طالب ويحسب مجموع درجتين."
        </p>

        <div class="bg-surface rounded-2xl p-6 border border-border mb-12">
          <h4 class="text-lg font-bold text-mutedtext mb-4">لازم النتيجة (Output) تظهر بالشكل ده:</h4>
          <div class="bg-black border border-gray-700 rounded-xl p-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold text-lg leading-loose">Name: Ahmed
Age: 18
Grade 1: 40
Grade 2: 35
Total: 75</pre>
          </div>
        </div>

        <div class="text-center mb-8">
          <p class="text-2xl font-black text-primary animate-pulse">حاول تحلها بنفسك الأول! 🧐</p>
        </div>

        <details class="group">
          <summary class="bg-primary hover:bg-primary/90 text-white font-black text-xl px-10 py-5 rounded-2xl cursor-pointer list-none text-center shadow-xl transition-all hover:-translate-y-1 block max-w-sm mx-auto">
            إظهار الحل
          </summary>
          <div class="mt-8 bg-gray-900 rounded-3xl p-8 text-left shadow-inner border border-gray-800" dir="ltr">
            <h4 class="text-gray-400 font-bold mb-4 text-center">الحل الصحيح:</h4>
            <code class="text-xl font-mono text-white leading-loose block">
              <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Name: Ahmed"</span><span class="text-gray-300">);</span><br>
              <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Age: 18"</span><span class="text-gray-300">);</span><br>
              <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Grade 1: 40"</span><span class="text-gray-300">);</span><br>
              <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Grade 2: 35"</span><span class="text-gray-300">);</span><br>
              <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">40</span> <span class="text-white">+</span> <span class="text-orange-400">35</span><span class="text-gray-300">);</span>
            </code>
          </div>
        </details>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
