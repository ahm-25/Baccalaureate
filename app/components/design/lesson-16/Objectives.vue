<template>
  <section id="objectives" class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full -z-10"></div>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl">🎯</div>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">أهداف التعلم</h2>
        </div>
        <ul class="space-y-6">
          <li v-for="(o, i) in objectives" :key="i" class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" :class="o.bg">
              <span class="font-bold" :class="o.text">{{ i + 1 }}</span>
            </div>
            <p class="text-lg text-slate-700 leading-relaxed" v-html="o.html"></p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const objectives = [
  { bg: 'bg-blue-50', text: 'text-blue-600', html: 'طبّق <span class="font-bold text-blue-700">دورة PDCA</span> لتنظيم تحسين قابل للقياس.' },
  { bg: 'bg-indigo-50', text: 'text-indigo-600', html: 'استخدم مبادئ <span class="font-bold text-indigo-700">التفكير التصميمي</span> لفهم مشكلة وتجربة حل من منظور المستخدم.' },
  { bg: 'bg-violet-50', text: 'text-violet-600', html: 'صمّم <span class="font-bold text-violet-700">اختبار A/B</span> مناسبًا باستخدام فرق واضح ومقياس محدد.' },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', html: 'استخدم نتائج التقييم لتبرير قرار تحسين وتحديد <span class="font-bold text-emerald-700">الخطوة التالية</span>.' },
]
</script>
