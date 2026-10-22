<template>
  <section id="objectives" class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-bl-full -z-10"></div>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">🎯</div>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">أهداف التعلم</h2>
        </div>
        <ul class="space-y-6">
          <li class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-orange-600 font-bold">1</span>
            </div>
            <p class="text-lg text-slate-700 leading-relaxed">
              اشرح الأدوار المميزة لكل من <span class="font-bold text-orange-700">HTML</span> و<span class="font-bold text-sky-700">CSS</span> و<span class="font-bold text-amber-600">JavaScript</span> في بناء صفحة الويب.
            </p>
          </li>
          <li class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-amber-600 font-bold">2</span>
            </div>
            <div class="text-lg text-slate-700 leading-relaxed w-full">
              اشرح كيف تسهم العناصر التالية في تحسين الواجهة الأمامية الحديثة:
              <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div v-for="t in items" :key="t.name" class="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                  <span class="text-lg">{{ t.icon }}</span>
                  <span class="font-medium text-slate-800">{{ t.name }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { icon: '🏷️', name: 'لغة HTML الدلالية (Semantic HTML)' },
  { icon: '📱', name: 'التصميم المتجاوب' },
  { icon: '🧩', name: 'أطر العمل' },
]
</script>
