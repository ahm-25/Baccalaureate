<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            يريد متجر إلكتروني صغير تأمين تسجيل دخول العملاء والدفع معًا. بالاستعانة بما تعلمته،
            سمِّ تقنيتي أمان يجب أن يستخدمهما وبيّن أين تساعد كل منهما، ثم حدّد تهديدًا واحدًا قد يظل قائمًا.
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
            <div class="p-4 rounded-xl bg-sky-50 border border-sky-200 text-slate-800">
              <strong class="text-sky-800">1. التشفير عبر HTTPS (TLS):</strong> يحمي كلمات المرور وبيانات الدفع أثناء انتقالها، فيمنع قراءتها أو تعديلها من قبل أطراف ثالثة، والشهادة الرقمية تتيح للعميل التأكد من هوية المتجر.
            </div>
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800">
              <strong class="text-emerald-800">2. المصادقة الثنائية (2FA):</strong> عند تسجيل الدخول أو تأكيد الدفع، تقلل احتمال الدخول غير المصرح به حتى لو تسربت كلمة مرور العميل.
            </div>
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-slate-800">
              <strong class="text-rose-800">تهديد قد يظل قائمًا:</strong> التصيّد الاحتيالي — قد يُخدع العميل بموقع مزيف أو رسالة فيعطي المحتال كلمة المرور والرمز بنفسه؛ فلا توجد تقنية تمنع الخطر منعًا مطلقًا.
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
const fields = ['التقنية الأولى وأين تساعد', 'التقنية الثانية وأين تساعد', 'تهديد قد يظل قائمًا']
</script>
