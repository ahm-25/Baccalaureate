<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> أهمية التسلسل العام لمراحل الاستجابة للحوادث، مستخدمًا الاحتواء والاستئصال والاستعادة كمثال،
          ووضّح لماذا قد تحتاج الاستجابة الفعلية إلى العودة إلى مرحلة سابقة.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 استعن بـ:</h4>
          <span class="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 font-bold inline-block">ما يحدث إذا بدأت الاستعادة قبل إزالة السبب</span>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <button
          @click="showAnswer = !showAnswer"
          class="w-full bg-slate-50 hover:bg-slate-100 text-right px-6 py-4 font-bold text-lg flex justify-between items-center transition-colors focus:outline-none"
        >
          <span class="text-slate-800">عرض نموذج الإجابة وتوزيع الدرجات</span>
          <span class="text-slate-500 transform transition-transform" :class="{ 'rotate-180': showAnswer }">▼</span>
        </button>
        <div v-show="showAnswer" class="p-6 md:p-8 border-t border-slate-200 text-slate-700 leading-relaxed font-medium space-y-4">
          <p v-for="(p, i) in points" :key="i" class="flex gap-3">
            <span class="shrink-0 font-bold px-2 rounded h-fit" :class="p.cls">{{ p.label }}</span>
            <span>{{ p.text }} <span class="text-xs font-bold text-slate-400">[{{ p.marks }}]</span></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showAnswer = ref(false)

const points = [
  { label: 'الأهمية', cls: 'text-indigo-700 bg-indigo-50', marks: 'درجة', text: 'التسلسل العام ينظّم الاستجابة ويحدد ماذا نفعل أولًا تحت الضغط، فلا يضيع الوقت ولا يكبر الضرر.' },
  { label: 'الاحتواء', cls: 'text-amber-700 bg-amber-50', marks: 'درجة', text: 'يبدأ الاحتواء بإيقاف انتشار الضرر، مثل فصل الأجهزة المصابة عن الشبكة.' },
  { label: 'الاستئصال', cls: 'text-rose-700 bg-rose-50', marks: 'درجة', text: 'ثم يزيل الاستئصال التهديد ومسبباته، مثل حذف البرمجية الخبيثة وسد الثغرة المستغلة.' },
  { label: 'الاستعادة', cls: 'text-emerald-700 bg-emerald-50', marks: 'درجة', text: 'ثم تعيد الاستعادة الأنظمة والخدمات إلى حالة تشغيل آمنة، وقد تكون من نسخة احتياطية سليمة.' },
  { label: 'الترتيب', cls: 'text-slate-700 bg-slate-100', marks: 'درجة', text: 'إذا بدأت الاستعادة قبل إزالة السبب، فقد تبقى البرمجية الخبيثة أو الثغرة المستغلة، فيعود الهجوم من جديد.' },
  { label: 'العودة', cls: 'text-sky-700 bg-sky-50', marks: 'درجة', text: 'وقد تحتاج الاستجابة الفعلية إلى العودة لمرحلة سابقة إذا كشفت الاستعادة عن بقايا للتهديد، فنرجع إلى الاحتواء أو إزالة التهديد؛ لأن الأنشطة قد تتداخل أو تتكرر.' },
]
</script>
