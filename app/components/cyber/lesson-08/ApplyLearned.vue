<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            ينقل مستشفى سجلات مرضاه إلى خدمة سحابية ويسمح للأطباء بالوصول إليها من المنزل. باستخدام نهج انعدام الثقة والدفاع في العمق،
            اقترح إجراءين ينبغي تطبيقهما وبيّن أين يساعد كل منهما، ثم حدّد خطرًا واحدًا قد يظل قائمًا.
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
            <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-slate-800">
              <strong class="text-teal-800">1. التحقق من كل عملية وصول (نهج انعدام الثقة):</strong> لا يُمنح الطبيب الوصول لمجرد أنه موظف؛ بل تُفحص هويته بمصادقة متعددة العوامل،
              وصلاحياته (يرى سجلات مرضاه فقط)، وسياق الطلب (جهاز موثوق ومحدّث). يساعد ذلك لأن الأطباء يعملون من خارج الشبكة والسجلات في السحابة، فلم يعد "الداخل" معيارًا للثقة.
            </div>
            <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-slate-800">
              <strong class="text-indigo-800">2. طبقات متعددة (الدفاع في العمق):</strong> اتصال مشفّر (VPN أو HTTPS) يحمي البيانات أثناء انتقالها من منزل الطبيب،
              مع حماية أجهزة الأطباء الطرفية بمكافحة الفيروسات والتحديث المستمر؛ فإذا فشلت طبقة تبقى الأخرى تقلل الخطر.
            </div>
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-slate-800">
              <strong class="text-rose-800">خطر قد يظل قائمًا:</strong> سرقة جهاز الطبيب أو خداعه بالتصيّد الاحتيالي ليكشف بيانات دخوله؛ فلا يوجد إجراء يمنع الخطر منعًا مطلقًا.
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
const fields = ['الإجراء الأول وأين يساعد', 'الإجراء الثاني وأين يساعد', 'خطر قد يظل قائمًا']
</script>
