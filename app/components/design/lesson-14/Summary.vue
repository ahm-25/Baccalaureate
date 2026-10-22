<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-fuchsia-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-fuchsia-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-fuchsia-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-fuchsia-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-fuchsia-100 rounded-xl p-4">
            <strong class="text-rose-600">{{ t.name }}</strong>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">{{ t.def }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  { icon: '🧑‍🎓', text: '<strong class="text-fuchsia-700">شخصية المستخدم</strong> (مَن) ← <strong class="text-slate-800">المخطط الهيكلي</strong> (أين).' },
  { icon: '🔆', text: '<strong class="text-pink-700">CRAP</strong> (اجعله واضحًا) ← <strong class="text-emerald-700">UCD</strong> (قرّر لصالح المستخدم).' },
  { icon: '🎯', text: 'صمّم من المستخدم إلى الداخل.' },
]

const terms = [
  { name: 'شخصية المستخدم (Persona)', def: 'تمثيل لنمط من المستخدمين يستند قدر الإمكان إلى بحث أو بيانات عن أهدافهم واحتياجاتهم وسلوكهم وسياق استخدامهم.' },
  { name: 'المخطط الهيكلي', def: 'مخطط للتخطيط قبل إضافة أي لون أو زخرفة.' },
  { name: 'CRAP', def: 'التباين والتكرار والمحاذاة والتقارب.' },
  { name: 'التصميم المتمحور حول المستخدم', def: 'التصميم من منظور المستخدم.' },
  { name: 'قابلية الاستخدام', def: 'مدى سهولة استخدام المستخدمين للموقع.' },
  { name: 'إمكانية الوصول (Accessibility)', def: 'تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها، بمن فيهم ذوو الإعاقة.' },
]
</script>
