<template>
  <section id="security-incident" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-rose-800 mb-8">1. ماهية الحادث الأمني</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">الحادث الأمني</strong>: حدث يؤثر في <strong>سرية</strong> المعلومات أو <strong>سلامتها</strong> أو <strong>توافرها</strong>،
            أو يهددها بجدية، أو يخالف سياسة أمنية.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> أمثلة نموذجية على الحوادث الأمنية:</p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-rose-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">الحادث الأمني</strong> – حدث يؤثر في سرية المعلومات أو سلامتها أو توافرها، أو يهددها بجدية، أو يخالف سياسة أمنية.
          </p>
        </div>
      </div>

      <!-- Incident types mapped to the CIA triad -->
      <div class="grid md:grid-cols-3 gap-4 mb-12">
        <div v-for="t in types" :key="t.name" class="rounded-3xl border-2 p-6 bg-white" :class="t.border">
          <div class="flex items-center justify-between mb-3">
            <span class="text-4xl">{{ t.icon }}</span>
            <span class="text-xs font-bold px-3 py-1 rounded-full" :class="t.chip">يمس {{ t.pillar }}</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{{ t.name }}</h3>
          <p class="text-slate-600 leading-relaxed">{{ t.desc }}</p>
        </div>
      </div>

      <!-- Classifier -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 جرّب بنفسك: هل هذا حادث أمني؟ وماذا يمس؟</h3>
        <p class="text-slate-600 mb-6">لكل حدث، اختر الجانب الذي يتأثر من ثلاثية أمن المعلومات، أو اختر «ليس حادثًا أمنيًا».</p>
        <CyberLesson07ChoiceItems :items="events" :options="pillarOptions" />
        <p class="mt-6 text-sm text-slate-500 leading-relaxed">
          💡 تذكّر: <strong>السرية</strong> = لا يطّلع على المعلومات إلا المصرح لهم • <strong>السلامة</strong> = المعلومات صحيحة ولم تُعدَّل دون تصريح •
          <strong>التوافر</strong> = الخدمة والمعلومات متاحة عند الحاجة.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const types = [
  { icon: '📤', name: 'تسرب المعلومات', desc: 'تسرب المعلومات الشخصية أو السرية إلى الخارج', pillar: 'السرية', border: 'border-rose-200', chip: 'bg-rose-50 text-rose-700' },
  { icon: '✏️', name: 'التلاعب بالبيانات', desc: 'تعديل البيانات داخل نظام ما دون تصريح', pillar: 'السلامة', border: 'border-amber-200', chip: 'bg-amber-50 text-amber-700' },
  { icon: '⛔', name: 'انقطاع الخدمة', desc: 'تصبح الخدمة غير متاحة بسبب هجمات على الخادم، إلخ.', pillar: 'التوافر', border: 'border-sky-200', chip: 'bg-sky-50 text-sky-700' },
]

const pillarOptions = ['السرية', 'السلامة', 'التوافر', 'ليس حادثًا أمنيًا']
const events = [
  { text: 'نُشرت قائمة بأسماء العملاء وأرقام هواتفهم على الإنترنت دون إذن.', ans: 0 },
  { text: 'غيّر شخص غير مصرح له درجات بعض الطلاب في نظام المدرسة.', ans: 1 },
  { text: 'أصبح موقع المتجر لا يفتح لساعات بسبب هجوم على الخادم.', ans: 2 },
  { text: 'تم تحديث البرنامج لإضافة ميزات جديدة.', ans: 3 },
]
</script>
