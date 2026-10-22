<template>
  <section id="qual-quant" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-emerald-800 mb-8">1. التقييم النوعي والكمي</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            تنقسم طرق التقييم عمومًا إلى فئتين رئيسيتين: <strong class="text-rose-600">(التقييم النوعي)</strong> و<strong class="text-rose-600">(التقييم الكمي)</strong>.
            تُستخدم طرق التقييم هذه في مجموعة واسعة من التطبيقات، لكن المفاهيم نفسها تنطبق على تقييم المواقع الإلكترونية.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-emerald-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التقييم النوعي</strong> – يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التقييم الكمي</strong> – يستخدم البيانات العددية والمقاييس المحددة لقياس السلوك والنتائج.</p>
        </div>
      </div>

      <!-- Methods table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-8">
        <table class="w-full text-right min-w-[640px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-[18%]">طريقة التقييم</th>
              <th class="p-4 font-bold w-[32%]">الوصف (الغرض)</th>
              <th class="p-4 font-bold">تقنيات محددة</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="m in methods" :key="m.name" class="border-t border-slate-200 align-top">
              <td class="p-4 font-bold" :class="m.text">{{ m.icon }} {{ m.name }}</td>
              <td class="p-4 text-slate-700">{{ m.purpose }}</td>
              <td class="p-4">
                <ul class="space-y-2">
                  <li v-for="t in m.techniques" :key="t.name" class="text-slate-700">
                    • <strong>{{ t.name }}:</strong> {{ t.desc }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-lg text-slate-700 leading-relaxed mb-10">
        <span class="font-bold text-slate-400">(2)</span>
        تُستخدم الطرق النوعية لفهم تجربة المستخدم وأسباب السلوك، والطرق الكمية لقياس السلوك والنتائج بالأرقام، وقد تجمع الدراسة الواحدة بين النوعين.
      </p>

      <!-- How many? vs Why? -->
      <div class="grid md:grid-cols-2 gap-4 mb-10">
        <div class="rounded-3xl border-2 border-emerald-300 bg-emerald-50 p-6">
          <div class="text-3xl font-black text-emerald-700 mb-2">📊 كم؟</div>
          <p class="text-slate-700 leading-relaxed">التقييم <strong>الكمي</strong> يجيب عن: كم عدد المشاهدات؟ كم نسبة من اشتروا؟ — <strong>ماذا يحدث</strong>.</p>
        </div>
        <div class="rounded-3xl border-2 border-teal-300 bg-teal-50 p-6">
          <div class="text-3xl font-black text-teal-700 mb-2">💬 لماذا؟</div>
          <p class="text-slate-700 leading-relaxed">التقييم <strong>النوعي</strong> يجيب عن: لماذا يتعثر المستخدم؟ لماذا لا يكمل الشراء؟ — <strong>الأسباب المحتملة</strong>.</p>
        </div>
      </div>

      <!-- Sorter -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 جرّب بنفسك: صنّف طرق التقييم</h3>
        <p class="text-slate-600 mb-6">لكل طريقة، اختر هل هي تقييم نوعي أم تقييم كمي.</p>
        <CyberLesson07ChoiceItems :items="sortItems" :options="sortOptions" />
      </div>
    </div>
  </section>
</template>

<script setup>
const methods = [
  {
    icon: '💬', name: 'التقييم النوعي', text: 'text-teal-700',
    purpose: 'فهم تجربة المستخدم وأسباب السلوك والمشكلات من خلال الملاحظة والمقابلات وغيرها.',
    techniques: [
      { name: 'اختبار قابلية الاستخدام', desc: 'مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها.' },
      { name: 'المقابلات', desc: 'الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم.' },
    ],
  },
  {
    icon: '📊', name: 'التقييم الكمي', text: 'text-emerald-700',
    purpose: 'قياس السلوك والنتائج باستخدام بيانات عددية ومقاييس محددة بوضوح.',
    techniques: [
      { name: 'تحليلات الويب', desc: 'تحليل مؤشرات مثل عدد PV والوقت المُستغرق.' },
      { name: 'اختبار A/B', desc: 'مقارنة خيارين للتحقق من أيهما يؤدي إلى نتائج أفضل.' },
    ],
  },
]

const sortOptions = ['التقييم النوعي', 'التقييم الكمي']
const sortItems = [
  { text: 'مراقبة طالب وهو يحاول إيجاد جدول الامتحانات في موقع المدرسة.', ans: 0 },
  { text: 'إحصاء عدد مرات مشاهدة صفحة المنتجات خلال أسبوع.', ans: 1 },
  { text: 'سؤال العملاء في مقابلة عن سبب تركهم سلة التسوق.', ans: 0 },
  { text: 'مقارنة زرين للشراء بالأرقام لمعرفة أيهما يحقق نقرات أكثر.', ans: 1 },
]
</script>
