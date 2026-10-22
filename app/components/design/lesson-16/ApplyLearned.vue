<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            متجر إلكتروني يلاحظ أن نسبة النقر على زر الشراء منخفضة. صف اختبار A/B يقارن فرقًا واضحًا بين نسختين، وحدد المقياس وطريقة توزيع الزيارات،
            ثم اشرح كيف تستخدم نتائج الاختبار في دورة PDCA.
          </p>

          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div v-for="(f, i) in fields" :key="i" class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ f }}</h4>
              <textarea rows="4" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="اكتب إجابتك…"></textarea>
            </div>
          </div>

          <button @click="show = !show" class="text-teal-700 font-bold bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ show ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="show" class="mt-4 space-y-3">
            <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-slate-800">
              <strong class="text-indigo-800">1. الفرق الواضح بين النسختين:</strong> A = زر الشراء الحالي، B = الزر نفسه بلون مختلف فقط (مثل الأحمر مقابل الأزرق)؛
              فرق واحد محدد حتى نعرف أن أي تغير في النتيجة يرجع إليه.
            </div>
            <div class="p-4 rounded-xl bg-violet-50 border border-violet-200 text-slate-800">
              <strong class="text-violet-800">2. المقياس والتوزيع:</strong> المقياس المحدد مسبقًا هو نسبة النقر على زر الشراء؛ وتُوزَّع الزيارات بين النسختين بطريقة عشوائية قدر الإمكان،
              ونجمع عينة كافية قبل الحكم.
            </div>
            <div class="p-4 rounded-xl bg-sky-50 border border-sky-200 text-slate-800">
              <strong class="text-sky-800">3. النتائج في دورة PDCA:</strong> نتيجة الاختبار هي خطوة <strong>تحقّق</strong>؛ ثم في <strong>تصرّف</strong> نعتمد النسخة الأفضل إن كان الفرق واضحًا،
              أو نراجع السبب ونخطط لتغيير آخر — وتبدأ حلقة تحسين جديدة.
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
const fields = ['الفرق بين النسختين A وB', 'المقياس وطريقة توزيع الزيارات', 'استخدام النتائج في دورة PDCA']
</script>
