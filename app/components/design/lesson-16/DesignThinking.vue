<template>
  <section id="design-thinking" class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-2xl md:text-3xl font-bold text-indigo-300 mb-8">2. التفكير التصميمي</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <p class="lg:col-span-2 text-lg text-slate-300 leading-relaxed">
          <span class="font-bold text-slate-500">(1)</span>
          <strong class="text-rose-300">(التفكير التصميمي – Design Thinking)</strong>: طريقة مرنة لفهم المشكلة من منظور المستخدم وتجربة حلول ثم تحسينها.
          يستخدم هذا الدرس نموذجًا شائعًا من خمسة أنماط، ويمكن الرجوع بينها بدل اتباع مسار خطي صارم.
        </p>
        <div class="bg-slate-800 border border-slate-700 rounded-3xl p-6">
          <h3 class="font-bold text-indigo-300 mb-2">مصطلح أساسي</h3>
          <p class="text-slate-300 leading-relaxed"><strong class="text-rose-300">التفكير التصميمي</strong> – الحل من منظور المستخدم عبر خمس خطوات.</p>
        </div>
      </div>

      <!-- Modes table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-700 mb-6">
        <table class="w-full text-right min-w-[560px]">
          <thead class="bg-slate-800 text-slate-200">
            <tr>
              <th class="p-4 font-bold w-1/3">الخطوة</th>
              <th class="p-4 font-bold">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(m, i) in modes" :key="m.ar" class="border-t border-slate-700 bg-slate-900/60">
              <td class="p-4 font-bold" :class="m.text">{{ m.icon }} {{ circled[i] }} {{ m.ar }} <span class="text-xs text-slate-400" dir="ltr">({{ m.en }})</span></td>
              <td class="p-4 text-slate-300">{{ m.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-lg text-slate-300 leading-relaxed mb-12">
        <span class="font-bold text-slate-500">(2)</span>
        بناءً على نتائج الاختبار، قد يعود المرء إلى مرحلة التعاطف أو التعريف. <strong class="text-amber-300">يسير التحسين ذهابًا وإيابًا، لا في اتجاه واحد.</strong>
      </p>

      <!-- Journey -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
        <h3 class="text-xl font-bold mb-2">🧪 رحلة تفكير تصميمي: لماذا لا يحجز الطلاب كتبًا من موقع مكتبة المدرسة؟</h3>
        <p class="text-slate-400 mb-6">تقدّم خطوة خطوة، وعندما تظهر نتيجة الاختبار قرّر: هل انتهينا، أم نعود إلى مرحلة سابقة؟</p>

        <!-- Mode track -->
        <div class="grid grid-cols-5 gap-2 mb-6">
          <div v-for="(m, i) in modes" :key="m.ar" class="rounded-2xl border-2 p-2 text-center transition-all"
               :class="i === current ? 'bg-indigo-600 border-indigo-400 scale-105' : visited.has(i) ? 'bg-slate-700 border-slate-600' : 'bg-slate-900 border-slate-700 opacity-60'">
            <div class="text-2xl">{{ m.icon }}</div>
            <div class="text-xs font-bold mt-1">{{ m.ar }}</div>
          </div>
        </div>

        <div class="bg-slate-900 border border-slate-700 rounded-2xl p-5 min-h-[110px]">
          <span class="text-xs font-bold text-amber-300">الجولة {{ round + 1 }} • {{ modes[current].ar }}</span>
          <p class="mt-2 leading-relaxed text-slate-200">{{ story[round][current] }}</p>
        </div>

        <div class="flex flex-wrap gap-3 mt-5">
          <template v-if="current < 4">
            <button @click="advance" class="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 font-bold rounded-xl transition-colors">الخطوة التالية ←</button>
          </template>
          <template v-else-if="round === 0">
            <button @click="goBack(1)" class="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors">↩ ارجع إلى التعريف: المشكلة الحقيقية مختلفة</button>
            <button @click="goBack(0)" class="px-5 py-3 bg-slate-700 hover:bg-slate-600 font-bold rounded-xl transition-colors">↩ ارجع إلى التعاطف: نحتاج فهم المستخدم أكثر</button>
          </template>
          <template v-else>
            <span class="px-5 py-3 bg-emerald-600/30 border border-emerald-500 text-emerald-200 font-bold rounded-xl">✓ نجح النموذج في الاختبار</span>
          </template>
          <button @click="reset" class="px-5 py-3 bg-slate-900 border border-slate-600 font-bold rounded-xl hover:bg-slate-700 transition-colors">إعادة</button>
        </div>

        <!-- Path taken -->
        <div class="mt-6">
          <p class="text-sm font-bold text-slate-400 mb-2">المسار الذي سلكته:</p>
          <div class="flex flex-wrap items-center gap-1.5 text-sm">
            <template v-for="(p, i) in path" :key="i">
              <span class="px-2.5 py-1 rounded-lg font-bold" :class="p.back ? 'bg-amber-500/20 text-amber-200 border border-amber-500/50' : 'bg-slate-700 text-slate-200'">{{ p.back ? '↩ ' : '' }}{{ modes[p.mode].ar }}</span>
              <span v-if="i < path.length - 1" class="text-slate-500">←</span>
            </template>
          </div>
          <p v-if="path.some(p => p.back)" class="mt-3 text-amber-200 text-sm leading-relaxed">
            لاحظ أن المسار عاد إلى الخلف بعد الاختبار — هذا طبيعي في التفكير التصميمي؛ فنتائج الاختبار تعلّمنا شيئًا جديدًا عن المشكلة.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const circled = ['①', '②', '③', '④', '⑤']
const modes = [
  { icon: '👂', ar: 'التعاطف', en: 'Empathize', desc: 'تعرّف إلى تجربة المستخدم واحتياجاته من خلال الملاحظة والأسئلة والبحث المناسب', text: 'text-sky-300' },
  { icon: '🎯', ar: 'التعريف', en: 'Define', desc: 'بناءً على المعلومات المستخلصة من التعاطف، وضّح المشكلة المراد حلها', text: 'text-indigo-300' },
  { icon: '💡', ar: 'توليد الأفكار', en: 'Ideate', desc: 'ولّد أفكارًا كثيرة لحل المشكلة', text: 'text-amber-300' },
  { icon: '🧩', ar: 'النموذج الأولي', en: 'Prototype', desc: 'أنشئ نموذجًا أوليًا بسرعة بناءً على الأفكار', text: 'text-violet-300' },
  { icon: '🧪', ar: 'الاختبار', en: 'Test', desc: 'دع المستخدمين يجربون النموذج، ثم اجمع ملاحظاتهم وراقب ما يحدث', text: 'text-emerald-300' },
]

// story[round][mode]: round 1 ends with a failed test, round 2 restarts from the mode the student goes back to
const story = [
  [
    'نراقب خمسة طلاب يحاولون حجز كتاب من موقع المكتبة، ونسألهم عن تجربتهم. يقول أغلبهم: «لم أجد طريقة للحجز».',
    'المشكلة كما فهمناها: الطلاب لا يجدون زر الحجز في صفحة الكتاب.',
    'أفكار كثيرة: زر حجز كبير، أيقونة كتاب، رابط في القائمة، رسالة ترحيب تشرح الحجز…',
    'نرسم بسرعة صفحة كتاب فيها زر «احجز الآن» كبير وواضح.',
    'جرّب الطلاب النموذج: وجدوا الزر بسهولة، لكن كثيرين توقفوا لأن الموقع طلب منهم تسجيل الدخول من جديد وهم لا يتذكرون كلمة المرور. ماذا تفعل؟',
  ],
  [
    'نعود إلى الطلاب ونراقبهم مرة أخرى: نكتشف أن معظمهم يدخل الموقع من هاتف المدرسة المشترك ولا يحفظ كلمة مرور.',
    'المشكلة الحقيقية الآن أوضح: خطوة تسجيل الدخول تمنع الطلاب من إكمال الحجز، وليس مكان الزر فقط.',
    'أفكار جديدة: الحجز برقم الطالب فقط، رمز يُرسل لولي الأمر، حجز ثم تأكيد عند أمين المكتبة…',
    'نموذج جديد: زر «احجز الآن» يطلب رقم الطالب فقط، ثم يؤكد أمين المكتبة الحجز عند الاستلام.',
    'جرّب الطلاب النموذج الجديد: أكمل أغلبهم الحجز في أقل من دقيقة. نجح النموذج — وتعلمنا أن الاختبار كشف مشكلة لم نرها في البداية.',
  ],
]

const round = ref(0)
const current = ref(0)
const visited = reactive(new Set([0]))
const path = ref([{ mode: 0, back: false }])

function advance() {
  current.value++
  visited.add(current.value)
  path.value.push({ mode: current.value, back: false })
}
function goBack(mode) {
  round.value = 1
  current.value = mode
  path.value.push({ mode, back: true })
}
function reset() {
  round.value = 0
  current.value = 0
  visited.clear()
  visited.add(0)
  path.value = [{ mode: 0, back: false }]
}
</script>
