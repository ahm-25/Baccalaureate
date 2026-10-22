<template>
  <section id="objectives" class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-indigo-50 rounded-bl-full -z-10"></div>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-2xl">🎯</div>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">أهداف التعلم</h2>
        </div>
        <ul class="space-y-6">
          <li class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-teal-600 font-bold">1</span>
            </div>
            <div class="text-lg text-slate-700 leading-relaxed w-full">
              اشرح أدوار العناصر التالية في حماية الشبكة:
              <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div v-for="t in controls" :key="t.name" class="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                  <span class="text-lg">{{ t.icon }}</span>
                  <span class="font-medium text-slate-800">{{ t.name }}</span>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-indigo-600 font-bold">2</span>
            </div>
            <p class="text-lg text-slate-700 leading-relaxed">اشرح لماذا يوفر <span class="font-bold text-indigo-700">الدفاع في العمق</span> حماية أقوى من الاعتماد على إجراء أمني واحد.</p>
          </li>
          <li class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
              <span class="text-emerald-600 font-bold">3</span>
            </div>
            <p class="text-lg text-slate-700 leading-relaxed">قيّم تصميمًا أمنيًا لشبكة، وبرّر اختيار الضوابط المناسبة وفق <span class="font-bold text-emerald-700">الأصول</span> و<span class="font-bold text-emerald-700">التهديدات</span>.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const controls = [
  { icon: '🧱', name: 'جدار الحماية' },
  { icon: '🔒', name: 'VPN' },
  { icon: '🏝️', name: 'DMZ' },
  { icon: '💻', name: 'ضوابط الأجهزة الطرفية' },
]
</script>
