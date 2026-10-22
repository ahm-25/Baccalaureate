<template>
  <section id="objectives" class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-bl-full -z-10"></div>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-fuchsia-100 rounded-2xl flex items-center justify-center text-2xl">🎯</div>
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
  { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', html: 'أنشئ وصفًا مناسبًا لمستخدم مستهدف استنادًا إلى احتياجات أو بيانات ذات صلة (<span class="font-bold text-fuchsia-700">شخصية المستخدم</span>).' },
  { bg: 'bg-slate-100', text: 'text-slate-600', html: 'استخدم <span class="font-bold text-slate-800">مخططًا هيكليًا</span> لتنظيم المعلومات قبل التصميم البصري النهائي.' },
  { bg: 'bg-pink-50', text: 'text-pink-600', html: 'طبّق <span class="font-bold text-pink-700">مبادئ CRAP</span> لتبرير قرارات تصميمية.' },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', html: 'قيّم قرارًا تصميميًا من منظور <span class="font-bold text-emerald-700">قابلية الاستخدام</span> و<span class="font-bold text-emerald-700">إمكانية الوصول</span>.' },
]
</script>
