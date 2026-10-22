<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        تقوم شركة في مدينتك بإعداد شبكة مكتبها. لديها موقع إلكتروني عام، وموظفون يعملون من المنزل، وبيانات عملاء سرية.
        أنت تقدم المشورة بشأن تصميم الأمان.
      </p>

      <div class="space-y-6">
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-teal-900">اجمع البيانات</h3>
          </div>
          <p class="text-slate-600 mb-4">اذكر أصول الشركة الثلاثة والتهديد الرئيسي لكل منها.</p>
          <div class="grid md:grid-cols-3 gap-3">
            <div v-for="a in assets" :key="a.name" class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ a.icon }} {{ a.name }}</h4>
              <textarea rows="2" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="التهديد الرئيسي…"></textarea>
            </div>
          </div>
          <button @click="showThreats = !showThreats" class="mt-4 text-teal-700 font-bold bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showThreats ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showThreats" class="mt-3 grid md:grid-cols-3 gap-3">
            <div v-for="a in assets" :key="a.name" class="p-3 rounded-xl bg-white border border-teal-200 text-sm text-slate-700">
              <strong class="text-teal-800">{{ a.name }}:</strong> {{ a.threat }}
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-rose-900">اربط وحلّل</h3>
          </div>
          <p class="text-slate-600 mb-4">اربط كل أصل وتهديده بطبقة الحماية الأكثر ارتباطًا به.</p>
          <CyberLesson07ChoiceItems :items="linkItems" :options="layerOptions" class="mb-6" />
          <p class="text-slate-600 mb-3">ثم اختر طبقة واحدة يكون فشلها شديد الأثر في هذا السيناريو، وفسّر لماذا لا تكفي وحدها.</p>
          <textarea rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="الطبقة… لأن…"></textarea>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بتصميم وقدّم سببين يوضحان لماذا يكون التكديس أكثر أمانًا من جدار حماية واحد. <strong>في أزواج</strong>، قارنا تصميميكما واتفقا معًا على أقوى سبب قبل تدوينه.
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
            <strong>تلميح:</strong> ضع الخادم العام في المنطقة المعزولة لتقليل احتمال وصول المهاجم إلى الشبكة الداخلية إذا اختُرق الخادم، ولا تعتمد على العزل وحده.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> التصميم متعدد الطبقات (جدار حماية + VPN + DMZ + حماية الأجهزة الطرفية) مع التحقق من كل عملية وصول (نهج انعدام الثقة).
            <br><strong>السبب 1:</strong> لو اختُرق الموقع العام وهو في DMZ، يمنع جدار الحماية الداخلي وصول المهاجم إلى بيانات العملاء؛ أما مع جدار حماية واحد فيصبح المهاجم داخل الشبكة.
            <br><strong>السبب 2:</strong> جدار الحماية لا يحمي اتصال الموظفين من المنزل من التنصت، ولا يحمي أجهزتهم من البرمجيات الخبيثة؛ فتغطي VPN وحماية الأجهزة الطرفية هذه الثغرات.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const assets = [
  { icon: '🌐', name: 'الموقع الإلكتروني العام', threat: 'اختراق الخادم من الإنترنت لأنه مكشوف للجمهور، ثم محاولة الانتقال منه إلى الداخل.' },
  { icon: '🏠', name: 'الموظفون عن بُعد', threat: 'التنصت على اتصالهم عبر الشبكات العامة، أو إصابة أجهزتهم ببرمجيات خبيثة.' },
  { icon: '🗄️', name: 'بيانات العملاء', threat: 'تسرب البيانات السرية بالوصول غير المصرح به إلى قاعدة البيانات.' },
]

const layerOptions = ['أ مدخل الشبكة', 'ب مسار الاتصال', 'ج وضع الخوادم', 'د الأجهزة الطرفية']
const linkItems = [
  { text: 'الموقع الإلكتروني العام المعرَّض لهجمات الإنترنت', ans: 2 },
  { text: 'اتصال الموظفين من المنزل عبر شبكات عامة', ans: 1 },
  { text: 'محاولات الوصول غير المصرح به إلى بيانات العملاء من الخارج', ans: 0 },
  { text: 'أجهزة الموظفين التي قد تصلها برمجيات خبيثة', ans: 3 },
]

const choices = [
  'جدار حماية فقط',
  'تصميم متعدد الطبقات (جدار حماية + شبكة افتراضية خاصة + المنطقة المعزولة (DMZ) + أجهزة طرفية) يتحقق أيضًا من كل عملية وصول (نهج انعدام الثقة)',
]
const choice = ref(null)
const showThreats = ref(false)
const showModel = ref(false)
</script>
