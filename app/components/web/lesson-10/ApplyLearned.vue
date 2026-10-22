<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            يتيح تطبيق طقس للمستخدمين كتابة اسم مدينة ورؤية توقعات الطقس. باستخدام نموذج الطبقات الثلاث، سمِّ أي طبقة تقوم بكل مهمة –
            أخذ اسم المدينة، والبحث عن بيانات التوقعات، وتخزين التوقعات السابقة – وحدّد مهمة واحدة لا يمكن للواجهة الأمامية القيام بها وحدها.
          </p>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div v-for="(f, i) in fields" :key="i" class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ f }}</h4>
              <textarea rows="3" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="اكتب إجابتك…"></textarea>
            </div>
          </div>

          <button @click="show = !show" class="text-teal-700 font-bold bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ show ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="show" class="mt-4 space-y-3">
            <div class="p-4 rounded-xl bg-violet-50 border border-violet-200 text-slate-800">
              <strong class="text-violet-800">أخذ اسم المدينة ← الواجهة الأمامية:</strong> تعرض مربع الإدخال وتستقبل ما يكتبه المستخدم، ثم تعرض التوقعات على الشاشة.
            </div>
            <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-slate-800">
              <strong class="text-indigo-800">البحث عن بيانات التوقعات ← الواجهة الخلفية:</strong> تعالج الطلب على الخادم وتطلب توقعات هذه المدينة من طبقة البيانات.
            </div>
            <div class="p-4 rounded-xl bg-sky-50 border border-sky-200 text-slate-800">
              <strong class="text-sky-800">تخزين التوقعات السابقة ← قاعدة البيانات:</strong> تحفظ التوقعات وتوفرها عند الحاجة.
            </div>
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-slate-800">
              <strong class="text-rose-800">مهمة لا تقوم بها الواجهة الأمامية وحدها:</strong> البحث عن بيانات التوقعات أو تخزينها؛ فالواجهة الأمامية تعرض وتجمع فقط،
              وتحتاج إلى الواجهة الخلفية وطبقة البيانات لإيجاد الإجابة.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const fields = ['أخذ اسم المدينة', 'البحث عن بيانات التوقعات', 'تخزين التوقعات السابقة', 'مهمة لا يمكن للواجهة الأمامية القيام بها وحدها']
</script>
