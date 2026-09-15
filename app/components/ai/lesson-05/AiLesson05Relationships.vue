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

        <!-- AI Visual Diagram -->
        <div class="w-full max-w-2xl mx-auto">
          <!-- AI -->
          <div class="bg-indigo-50/80 border-2 border-indigo-200 rounded-[2rem] p-4 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-indigo-200/50">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl shadow-inner">🌐</div>
              <div>
                <h3 class="text-xl sm:text-2xl font-black text-indigo-900">الذكاء الاصطناعي (AI)</h3>
              </div>
            </div>
            
            <!-- ML -->
            <div class="bg-blue-50/90 border-2 border-blue-200 rounded-[1.5rem] p-4 sm:p-6 shadow-sm mt-4 transition-all duration-300 hover:shadow-blue-200/50">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg shadow-inner">🤖</div>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold text-blue-900">التعلم الآلي (ML)</h4>
                </div>
              </div>

              <div class="flex flex-col gap-4 mt-4">
                <!-- DL -->
                <div class="bg-purple-50/90 border-2 border-purple-200 rounded-2xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-purple-200/50">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-lg shadow-inner">🧠</div>
                    <h5 class="text-base sm:text-lg font-bold text-purple-900">التعلم العميق (DL)</h5>
                  </div>
                  
                  <!-- GenAI -->
                  <div class="bg-teal-50/90 border-2 border-teal-200 rounded-xl p-4 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-teal-200/50 hover:-translate-y-1">
                    <div class="absolute -right-4 -top-4 w-20 h-20 bg-teal-200 rounded-full animate-pulse opacity-30"></div>
                    <div class="flex items-center gap-3 mb-2 relative z-10">
                      <div class="w-7 h-7 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center text-base shadow-inner">✨</div>
                      <h6 class="text-sm sm:text-base font-bold text-teal-900">الذكاء التوليدي (GenAI)</h6>
                    </div>
                    <p class="text-teal-800/80 text-xs leading-relaxed relative z-10">
                      يعتمد بشكل كبير على نماذج التعلم العميق لتوليد نصوص وصور وأصوات جديدة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Relationship section
</script>
