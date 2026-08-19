<template>
  <section id="opening" class="min-h-screen py-24 bg-surface relative overflow-hidden flex items-center">
    <div class="max-w-6xl mx-auto px-6 w-full z-10">
      
      <!-- Title & Question -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-8">يعني إيه برمجة؟</h2>
        <div class="bg-primary/10 border-2 border-primary/20 rounded-3xl p-8 max-w-4xl mx-auto inline-block transform hover:scale-105 transition-transform duration-300">
          <p class="text-3xl font-bold text-primary leading-relaxed">
            "لو عايزين نخلي الكمبيوتر يحسب نتيجة طالب... هنقوله يعمل إيه؟"
          </p>
        </div>
      </div>

      <!-- Real Life Example -->
      <div class="bg-background rounded-[3rem] p-10 md:p-14 shadow-2xl border border-border">
        
        <div class="flex flex-col lg:flex-row gap-12 mb-12">
          <!-- Student Data -->
          <div class="flex-1 bg-surface p-8 rounded-3xl border border-border shadow-inner relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <h3 class="text-2xl font-black text-maintext mb-6">لدينا طالب حصل على:</h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-4 text-xl font-bold text-mutedtext">
                <span class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm"><Monitor class="w-6 h-6" /></span>
                درجة البرمجة = <span class="text-maintext text-2xl font-black bg-blue-50 px-3 py-1 rounded-lg">40</span>
              </li>
              <li class="flex items-center gap-4 text-xl font-bold text-mutedtext">
                <span class="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-sm"><Bot class="w-6 h-6" /></span>
                درجة الذكاء الاصطناعي = <span class="text-maintext text-2xl font-black bg-purple-50 px-3 py-1 rounded-lg">35</span>
              </li>
            </ul>
            <p class="mt-8 text-lg font-medium text-mutedtext border-t border-border pt-6">
              * نريد أن يعرف الطالب مجموع درجاته.
            </p>
          </div>

          <!-- Program Steps -->
          <div class="flex-1">
            <h3 class="text-2xl font-black text-maintext mb-6">علشان الكمبيوتر يحسبها، بيحتاج:</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-border">
                <span class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black">1</span>
                <span class="text-xl font-bold text-maintext">يستقبل درجات الطالب.</span>
              </div>
              <div class="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-border">
                <span class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black">2</span>
                <span class="text-xl font-bold text-maintext">يجمع الدرجات.</span>
              </div>
              <div class="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-border">
                <span class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black">3</span>
                <span class="text-xl font-bold text-maintext">يحسب المجموع.</span>
              </div>
              <div class="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-border">
                <span class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black">4</span>
                <span class="text-xl font-bold text-maintext">يعرض النتيجة.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Flow -->
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12">
          <div class="bg-gray-100 px-6 py-4 rounded-2xl text-xl font-black text-gray-700 shadow-sm text-center">البيانات</div>
          <ArrowLeft class="w-8 h-8 text-gray-400" />
          <div class="bg-gray-100 px-6 py-4 rounded-2xl text-xl font-black text-gray-700 shadow-sm text-center">الخطوات</div>
          <ArrowLeft class="w-8 h-8 text-gray-400" />
          <div class="bg-gray-100 px-6 py-4 rounded-2xl text-xl font-black text-gray-700 shadow-sm text-center">التنفيذ</div>
          <ArrowLeft class="w-8 h-8 text-gray-400" />
          <div class="bg-primary text-white px-6 py-4 rounded-2xl text-xl font-black shadow-lg text-center shadow-primary/30">النتيجة</div>
        </div>

        <!-- Result Showcase -->
        <div class="flex justify-center items-center gap-8 mb-16">
          <div class="text-4xl font-black text-mutedtext tracking-widest bg-surface px-8 py-4 rounded-2xl border border-border">40 + 35</div>
          <ArrowLeft class="w-10 h-10 text-primary" />
          <div class="text-5xl font-black text-green-600 bg-green-50 px-10 py-5 rounded-3xl border-2 border-green-200 shadow-lg">75</div>
        </div>

        <!-- Conclusion -->
        <div class="text-center max-w-3xl mx-auto space-y-6">
          <p class="text-2xl font-bold text-mutedtext">
            "إحنا هنا ادينا الكمبيوتر مجموعة خطوات محددة علشان يوصل لنتيجة."
          </p>
          <div class="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
            <h4 class="text-xl text-primary font-black mb-2">إذن، ما هي البرمجة؟</h4>
            <p class="text-2xl font-black text-maintext leading-relaxed">
              البرمجة = كتابة مجموعة من التعليمات المرتبة للكمبيوتر علشان ينفذ مهمة أو يحل مشكلة.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Monitor, Bot, ArrowLeft } from 'lucide-vue-next'
</script>
