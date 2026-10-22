<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            تقدم خدمة الطقس واجهة برمجة تطبيقات تعيد توقعات اليوم عندما يرسل العميل طلبًا. باستخدام ما تعلمته، اذكر طريقة طلب HTTP التي سيستخدمها العميل
            لاسترجاع التوقعات، ولماذا يجب أن تستخدم الخدمة HTTPS، ووضّح ميزة واحدة لاستقبال البيانات بصيغة JSON.
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
              <strong class="text-sky-800">1. طريقة الطلب GET:</strong> لأن العميل يطلب بيانات (توقعات اليوم) من الخادم ولا يرسل بيانات ليعالجها.
            </div>
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800">
              <strong class="text-emerald-800">2. HTTPS:</strong> لأنه يستخدم HTTP عبر اتصال TLS آمن يحمي سرية الاتصال وسلامته ويصادق الخادم،
              فلا يستطيع المتجسس قراءة البيانات أو تعديلها بسهولة أثناء النقل، ويتأكد العميل أنه يتصل بالخدمة الحقيقية.
            </div>
            <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-slate-800">
              <strong class="text-amber-800">3. ميزة JSON:</strong> صيغة نصية شائعة تمثل البيانات المهيكلة على شكل مفتاح وقيمة (مثل <code class="font-mono" dir="ltr">"temperature": 31</code>)،
              وتدعمها لغات وأدوات برمجية كثيرة، فيسهل على التطبيق قراءتها واستخدامها.
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
const fields = ['طريقة طلب HTTP وسببها', 'لماذا HTTPS؟', 'ميزة استقبال البيانات بصيغة JSON']
</script>
