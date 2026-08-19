<template>
  <section id="important-example" class="py-24 bg-red-50 relative overflow-hidden border-y border-red-100">
    <div class="max-w-5xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center gap-3 bg-red-100 text-red-600 px-6 py-2 rounded-full font-black text-xl mb-6 shadow-sm">
          <span class="text-2xl animate-pulse">⚠️</span> ركز هنا
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-red-900 mb-6">خلي بالك من الفرق 👀</h2>
        <p class="text-2xl text-red-800/80 font-bold max-w-2xl mx-auto">
          "الفرق بين النص والرقم مهم جدًا في البرمجة."
        </p>
      </div>

      <div class="flex flex-col gap-12">
        
        <!-- Numbers Addition -->
        <div class="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-green-200 shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
          
          <div class="flex-1 w-full text-center md:text-right">
            <h3 class="text-2xl font-black text-green-700 mb-4">لو كتبنا أرقام:</h3>
            <div class="bg-gray-900 rounded-2xl p-6 text-left inline-block w-full shadow-md" dir="ltr">
              <code class="text-2xl font-mono text-white">
                <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">10</span> <span class="text-white">+</span> <span class="text-orange-400">20</span><span class="text-gray-300">);</span>
              </code>
            </div>
          </div>
          
          <div class="text-4xl text-gray-300 rotate-90 md:rotate-0 font-black">→</div>
          
          <div class="flex-1 w-full flex flex-col items-center">
            <div class="bg-green-100 text-green-700 font-mono font-black text-5xl px-12 py-6 rounded-3xl border-4 border-green-200 shadow-inner mb-4" dir="ltr">
              30
            </div>
            <p class="text-xl font-bold text-gray-700 text-center">
              10 و 20 أرقام.<br>لذلك تم <span class="text-green-600 font-black bg-green-50 px-2 rounded">جمع</span> القيمتين.
            </p>
          </div>
        </div>

        <!-- Strings Concatenation -->
        <div class="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-red-200 shadow-xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
          
          <div class="flex-1 w-full text-center md:text-right">
            <h3 class="text-2xl font-black text-red-700 mb-4">لكن لو حطينا علامات تنصيص:</h3>
            <div class="bg-gray-900 rounded-2xl p-6 text-left inline-block w-full shadow-md" dir="ltr">
              <code class="text-2xl font-mono text-white">
                <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"10"</span> <span class="text-white">+</span> <span class="text-green-400">"20"</span><span class="text-gray-300">);</span>
              </code>
            </div>
          </div>
          
          <div class="text-4xl text-gray-300 rotate-90 md:rotate-0 font-black">→</div>
          
          <div class="flex-1 w-full flex flex-col items-center">
            <div class="bg-red-100 text-red-700 font-mono font-black text-5xl px-12 py-6 rounded-3xl border-4 border-red-200 shadow-inner mb-4" dir="ltr">
              1020
            </div>
            <p class="text-xl font-bold text-gray-700 text-center leading-relaxed">
              "10" و "20" نصوص.<br>لذلك تم <span class="text-red-600 font-black bg-red-50 px-2 rounded">دمج</span> النصوص بدل جمعها!
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
