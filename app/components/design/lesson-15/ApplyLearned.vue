<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            إذا أظهرت أداة التحليلات مؤشرًا يشير إلى ضعف التفاعل في موقع مدرسة، اذكر مقياسًا كميًا يساعد على ملاحظة المشكلة،
            وطريقة نوعية لفهم سببها، وحلًا محتملًا يحتاج إلى اختبار.
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
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800">
              <strong class="text-emerald-800">1. مقياس كمي:</strong> معدل الارتداد (وفق تعريف أداة التحليلات المستخدمة) أو الوقت المستغرق في الصفحة؛
              فإذا كان مرتفعًا/قصيرًا فقد يشير إلى أن الزوار يغادرون سريعًا.
            </div>
            <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-slate-800">
              <strong class="text-teal-800">2. طريقة نوعية:</strong> اختبار قابلية استخدام مع عدد من الطلاب وأولياء الأمور (مراقبتهم وهم يبحثون عن جدول الامتحانات مثلًا)،
              أو مقابلات قصيرة لسؤالهم عما أربكهم.
            </div>
            <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-slate-800">
              <strong class="text-indigo-800">3. حل محتمل يحتاج إلى اختبار:</strong> إعادة ترتيب الصفحة الرئيسية وإبراز الروابط المهمة (مثل النتائج والجداول)،
              ثم قياس المؤشر مرة أخرى للتحقق من أن الحل نجح فعلًا.
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
const fields = ['مقياس كمي يساعد على ملاحظة المشكلة', 'طريقة نوعية لفهم السبب', 'حل محتمل يحتاج إلى اختبار']
</script>
