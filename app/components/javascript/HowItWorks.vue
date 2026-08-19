<template>
  <section id="how-it-works" class="py-24 bg-background relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">الكمبيوتر بيفهم إزاي؟</h2>
        <p class="text-2xl text-mutedtext max-w-2xl mx-auto leading-relaxed font-medium">
          الكمبيوتر <span class="text-red-500 font-bold">لا يفكر</span> مثل الإنسان. <br>
          هو فقط <span class="text-primary font-bold">ينفذ التعليمات</span> التي نعطيها له بدقة.
        </p>
      </div>

      <!-- Visual Diagram -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20">
        <div class="bg-surface border-2 border-border px-8 py-6 rounded-3xl text-center shadow-sm w-full md:w-auto">
          <div class="text-4xl mb-3">📝</div>
          <div class="text-xl font-black text-maintext">Instruction</div>
          <div class="text-sm text-mutedtext font-bold mt-1">(تعليمات)</div>
        </div>
        
        <span class="text-3xl text-gray-400 rotate-90 md:rotate-180 md:rotate-0">←</span>
        
        <div class="bg-primary text-white px-8 py-6 rounded-3xl text-center shadow-lg shadow-primary/20 w-full md:w-auto transform hover:scale-105 transition-transform">
          <div class="text-4xl mb-3">💻</div>
          <div class="text-xl font-black">Computer</div>
          <div class="text-sm text-white/80 font-bold mt-1">(الكمبيوتر)</div>
        </div>
        
        <span class="text-3xl text-gray-400 rotate-90 md:rotate-180 md:rotate-0">←</span>

        <div class="bg-surface border-2 border-border px-8 py-6 rounded-3xl text-center shadow-sm w-full md:w-auto">
          <div class="text-4xl mb-3">⚙️</div>
          <div class="text-xl font-black text-maintext">Execution</div>
          <div class="text-sm text-mutedtext font-bold mt-1">(تنفيذ)</div>
        </div>

        <span class="text-3xl text-gray-400 rotate-90 md:rotate-180 md:rotate-0">←</span>

        <div class="bg-green-50 border-2 border-green-200 px-8 py-6 rounded-3xl text-center shadow-sm w-full md:w-auto">
          <div class="text-4xl mb-3">✅</div>
          <div class="text-xl font-black text-green-700">Result</div>
          <div class="text-sm text-green-600/80 font-bold mt-1">(نتيجة)</div>
        </div>
      </div>

      <!-- Examples -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        
        <div class="bg-surface rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
          <div class="mb-6">
            <span class="text-sm font-bold text-mutedtext uppercase tracking-wider mb-2 block">Instruction</span>
            <div class="bg-gray-100 text-gray-800 font-bold text-lg px-4 py-3 rounded-xl border border-gray-200">
              "اعرض اسم الطالب"
            </div>
          </div>
          <div class="flex justify-center my-4">
            <span class="text-2xl text-gray-300">↓</span>
          </div>
          <div>
            <span class="text-sm font-bold text-mutedtext uppercase tracking-wider mb-2 block">Result</span>
            <div class="bg-green-50 text-green-700 font-black text-2xl px-4 py-3 rounded-xl border border-green-100 text-center">
              Ahmed
            </div>
          </div>
        </div>

        <div class="bg-surface rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
          <div class="mb-6">
            <span class="text-sm font-bold text-mutedtext uppercase tracking-wider mb-2 block">Instruction</span>
            <div class="bg-gray-100 text-gray-800 font-bold text-lg px-4 py-3 rounded-xl border border-gray-200">
              "اجمع 40 + 35"
            </div>
          </div>
          <div class="flex justify-center my-4">
            <span class="text-2xl text-gray-300">↓</span>
          </div>
          <div>
            <span class="text-sm font-bold text-mutedtext uppercase tracking-wider mb-2 block">Result</span>
            <div class="bg-green-50 text-green-700 font-black text-2xl px-4 py-3 rounded-xl border border-green-100 text-center">
              75
            </div>
          </div>
        </div>

        <div class="bg-surface rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
          <div class="mb-6">
            <span class="text-sm font-bold text-mutedtext uppercase tracking-wider mb-2 block">Instruction</span>
            <div class="bg-gray-100 text-gray-800 font-bold text-lg px-4 py-3 rounded-xl border border-gray-200">
              "اعرض النتيجة"
            </div>
          </div>
          <div class="flex justify-center my-4">
            <span class="text-2xl text-gray-300">↓</span>
          </div>
          <div>
            <span class="text-sm font-bold text-mutedtext uppercase tracking-wider mb-2 block">Result</span>
            <div class="bg-green-50 text-green-700 font-black text-2xl px-4 py-3 rounded-xl border border-green-100 text-center">
              75
            </div>
          </div>
        </div>

      </div>

      <div class="text-center">
        <div class="inline-block bg-primary/10 px-8 py-4 rounded-2xl border border-primary/20">
          <p class="text-2xl font-black text-primary">
            "الكمبيوتر ينفذ التعليمات التي نكتبها له."
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
