<template>
  <section id="ai-relationships" class="py-16 bg-white relative font-arabic">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 shadow-sm border border-primary/20">
          <span class="text-3xl">🧩</span>
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-maintext mb-4">اربط المفاهيم معًا</h2>
        <p class="text-lg text-mutedtext max-w-2xl mx-auto">
          كيف تتداخل مجالات الذكاء الاصطناعي المختلفة؟
        </p>
      </div>

      <!-- Visual Hierarchy -->
      <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col items-center gap-4 mb-8">
        
        <!-- Note -->
        <div class="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-3 rounded-xl mb-4 flex gap-3 items-center w-full max-w-lg shadow-sm">
          <span class="text-2xl shrink-0">⚠️</span>
          <p class="text-sm font-semibold">
            هذه علاقة تعليمية مبسطة، وليست تسلسل احتواء صارم في كل الحالات.
          </p>
        </div>

        <!-- AI -->
        <div class="w-full max-w-lg bg-blue-500 text-white rounded-2xl p-4 text-center font-bold text-xl shadow-md border-b-4 border-blue-600">
          Artificial Intelligence (AI)
        </div>
        <div class="text-gray-400">↓</div>
        
        <!-- ML -->
        <div class="w-full max-w-md bg-purple-500 text-white rounded-2xl p-4 text-center font-bold text-lg shadow-md border-b-4 border-purple-600">
          Machine Learning (ML)
        </div>
        <div class="text-gray-400">↓</div>

        <!-- DL -->
        <div class="w-full max-w-sm bg-pink-500 text-white rounded-2xl p-4 text-center font-bold shadow-md border-b-4 border-pink-600">
          Deep Learning (DL)
        </div>
        <div class="text-gray-400">↓</div>

        <!-- GenAI -->
        <div class="w-full max-w-xs bg-emerald-500 text-white rounded-2xl p-4 text-center font-bold text-sm shadow-md border-b-4 border-emerald-600">
          Generative AI (GenAI)
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Relationship section
</script>
