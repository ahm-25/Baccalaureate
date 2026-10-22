<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> خطوة بخطوة ما يحدث عندما يطلب المتصفح صفحة ويب ويستجيب الخادم.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 أشِر إلى:</h4>
          <div class="flex flex-wrap gap-3">
            <span v-for="h in hints" :key="h" class="px-4 py-2 rounded-xl bg-sky-100 text-sky-800 font-bold">{{ h }}</span>
          </div>
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

const hints = ['العميل', 'الطلب', 'طريقة طلب HTTP', 'الاستجابة', 'رمز حالة HTTP']

const points = [
  { label: 'العميل', cls: 'text-sky-700 bg-sky-50', marks: 'درجة', text: 'المتصفح هو العميل؛ عندما ينقر المستخدم على رابط أو يكتب عنوانًا، يرسل المتصفح طلبًا إلى الخادم عبر الشبكة.' },
  { label: 'الطلب', cls: 'text-cyan-700 bg-cyan-50', marks: 'درجة', text: 'يُرسل الطلب وفق قواعد بروتوكول HTTP (أو HTTPS إذا كان الاتصال آمنًا عبر TLS).' },
  { label: 'الطريقة', cls: 'text-indigo-700 bg-indigo-50', marks: 'درجة', text: 'يتضمن الطلب طريقة طلب HTTP توضح نوع العملية؛ ولطلب صفحة تُستخدم عادةً الطريقة GET.' },
  { label: 'الخادم', cls: 'text-amber-700 bg-amber-50', marks: 'درجة', text: 'يستقبل الخادم الطلب ويعالجه.' },
  { label: 'الاستجابة', cls: 'text-emerald-700 bg-emerald-50', marks: 'درجة', text: 'يعيد الخادم استجابة تتضمن البيانات المطلوبة ورمز حالة HTTP: 200 عند النجاح، أو 404 إذا لم يوجد المورد، أو 500 عند خطأ داخلي في الخادم.' },
  { label: 'العرض', cls: 'text-rose-700 bg-rose-50', marks: 'درجة', text: 'يستقبل المتصفح الاستجابة ويعرض الصفحة للمستخدم (أو رسالة توضح المشكلة بحسب رمز الحالة).' },
]
</script>
