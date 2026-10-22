<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        متجر كتب إلكتروني صغير في مدينتك يريد معرفة ما إذا كان موقعه الإلكتروني يعمل فعلًا لصالح العملاء. أنت تخطط لكيفية تقييمه.
      </p>

      <div class="space-y-6">
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-emerald-900">اجمع البيانات</h3>
          </div>
          <p class="text-slate-600 mb-4">
            اطلب من خمسة زملاء استخدموا متجر كتب إلكترونيًا من قبل زيارة أي متجر إلكتروني، وسجّل لكل منهم رقمًا واحدًا يمكن قياسه (مثل عدد الصفحات التي شاهدوها)
            وشيئًا واحدًا قالوا إنه كان مربكًا. ضع النتائج في جدول صغير.
          </p>
          <div class="rounded-xl border border-slate-200 overflow-hidden">
            <div class="grid grid-cols-12 gap-2 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
              <span class="col-span-2">الزميل</span>
              <span class="col-span-3 text-center">📊 الصفحات المشاهدة (كمي)</span>
              <span class="col-span-7">💬 ما كان مربكًا (نوعي)</span>
            </div>
            <div v-for="(r, i) in rows" :key="i" class="grid grid-cols-12 gap-2 items-center px-3 py-2 border-t border-slate-100">
              <span class="col-span-2 font-bold text-slate-700 text-sm">{{ i + 1 }}</span>
              <div class="col-span-3 flex items-center justify-center gap-2">
                <button @click="r.pages > 0 && r.pages--" class="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-slate-600">−</button>
                <span class="w-6 text-center font-extrabold">{{ r.pages }}</span>
                <button @click="r.pages++" class="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold">+</button>
              </div>
              <input v-model="r.note" class="col-span-7 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="مثال: لم أجد زر إتمام الشراء على الهاتف" />
            </div>
          </div>
          <p class="mt-3 text-sm font-bold text-emerald-700">إجمالي الصفحات المشاهدة: {{ totalPages }} — لاحظ: الرقم لا يخبرك بسبب الإرباك، بينما العمود الثاني يخبرك.</p>
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-amber-900">حلّل الإشارات</h3>
          </div>
          <p class="text-slate-600 mb-4">
            افترض أن إجمالي المشاهدات مرتفع لكن معدل التحويل منخفض. قد يشير ذلك إلى أن مستخدمين كثيرين لا يكملون الإجراء، لكنه لا يحدد السبب وحده.
            اختر بيانات أخرى وطريقة نوعية تساعدك على التحقق، ثم اذكر صعوبة قد يواجهها مستخدم هاتف أو زائر لأول مرة ولا تظهر في إجمالي المشاهدات.
          </p>
          <CyberLesson07SingleChoice
            :options="verifyOptions"
            :ans="1"
            explanation="اختبار قابلية استخدام قصير يكشف أين يتعثر المستخدمون فعلًا (مثلًا: زر الشراء لا يظهر جيدًا على شاشة الهاتف)، وهذا ما لا يظهر في إجمالي المشاهدات."
            class="mb-4"
          />
          <textarea rows="2" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="صعوبة قد يواجهها مستخدم هاتف أو زائر لأول مرة…"></textarea>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-teal-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بطريقتي التقييم اللتين ينبغي للمتجر استخدامهما أولًا، وقدّم سببين مستمدين من الجدول الذي أعددته في الخطوة 1.
            <strong>في أزواج</strong>، قارنوا اختياراتكم واتفقوا معًا على المؤشر الأكثر فائدة لتتبعه.
          </p>
          <div class="grid sm:grid-cols-2 gap-3 mb-4">
            <button v-for="(c, i) in choices" :key="i" @click="choice = i"
                    class="text-right p-4 rounded-xl border-2 font-bold transition-colors flex items-center gap-3"
                    :class="choice === i ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'">
              <span class="w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center text-xs" :class="choice === i ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'">{{ choice === i ? '✓' : '' }}</span>
              {{ c }}
            </button>
          </div>
          <textarea rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="قدّم دليلًا على إجابتك…"></textarea>

          <div class="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900">
            <strong>هل تواجه صعوبة؟</strong> ابدأ من الفجوة في البيانات: ارتفاع PV مع انخفاض CVR يعني أن الناس يصلون لكن لا يتخذون إجراءً — إذن الأرقام تشير فقط إلى
            <em>أين</em> تنظر. اختر الطريقة النوعية (اختبار قابلية استخدام قصير أو مقابلة) التي تجيب عن السؤال الدقيق الذي أثارته أرقامك.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> استخدام الطرق الكمية والنوعية معًا — تحليلات الويب (تتبع PV ومعدل التحويل) واختبار قابلية استخدام قصير.
            <br><strong>السبب 1:</strong> أرقام الجدول (الصفحات المشاهدة) تكشف حجم الاستخدام وأين يتوقف الزوار، لكنها لا تكشف السبب.
            <br><strong>السبب 2:</strong> ملاحظات الزملاء عما كان مربكًا (مثل صعوبة إيجاد زر الشراء على الهاتف) تكشف أسبابًا لا تظهر في الأرقام.
            <br><strong>المؤشر الأكثر فائدة:</strong> معدل التحويل (مع تحديد المقام)، لأن هدف المتجر هو إتمام الشراء.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const rows = reactive([
  { pages: 6, note: '' },
  { pages: 2, note: '' },
  { pages: 8, note: '' },
  { pages: 1, note: '' },
  { pages: 4, note: '' },
])
const totalPages = computed(() => rows.reduce((s, r) => s + r.pages, 0))

const verifyOptions = [
  'زيادة عدد الإعلانات لجذب زوار أكثر.',
  'إجراء اختبار قابلية استخدام قصير: مراقبة بعض المستخدمين وهم يحاولون إتمام الشراء.',
  'إعادة عدّ PV مرة أخرى.',
  'الاكتفاء بالأرقام لأنها تفسر السبب.',
]

const choices = ['الاعتماد على رأي صاحب المتجر', 'استخدام الطرق الكمية والنوعية معًا']
const choice = ref(null)
const showModel = ref(false)
</script>
