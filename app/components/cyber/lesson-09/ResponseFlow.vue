<template>
  <section id="response-flow" class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-300 mb-8">2. تدفق الاستجابة للحوادث</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-8">
        <span class="font-bold text-slate-500">(1)</span> يعرض هذا الدرس نموذجًا تعليميًا مبسطًا للاستجابة للحوادث من ست مراحل كما يأتي.
      </p>

      <!-- Phases table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-700 mb-10">
        <table class="w-full text-right min-w-[560px]">
          <thead class="bg-slate-800 text-slate-200">
            <tr>
              <th class="p-4 font-bold w-1/3">المرحلة</th>
              <th class="p-4 font-bold">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in phases" :key="p.name" class="border-t border-slate-700 bg-slate-900/60">
              <td class="p-4 font-bold" :class="p.text">{{ p.icon }} {{ circled[i] }} {{ p.name }}</td>
              <td class="p-4 text-slate-300">{{ p.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figure 2.3.1 -->
      <div class="text-center mb-4">
        <span class="inline-block text-xs font-bold text-rose-300 bg-rose-900/50 border border-rose-700 px-3 py-1 rounded-full">الشكل 2.3.1 – نموذج تعليمي مبسط للاستجابة للحوادث من ست مراحل</span>
      </div>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
        <div v-for="(p, i) in phases" :key="p.name" class="bg-slate-800 border border-slate-700 rounded-2xl p-3 text-center">
          <div class="w-8 h-8 mx-auto rounded-full bg-white text-slate-900 font-black flex items-center justify-center mb-2">{{ i + 1 }}</div>
          <div class="font-bold text-sm" :class="p.text">{{ p.short }}</div>
          <div class="text-[11px] text-slate-400 mt-1 leading-snug">{{ p.hint }}</div>
        </div>
      </div>
      <p class="text-lg text-slate-300 leading-relaxed mb-12">
        <span class="font-bold text-slate-500">(2)</span>
        يساعد ترتيب المراحل على فهم التسلسل العام، لكن الاستجابة الفعلية قد تتضمن <strong class="text-amber-300">تداخلًا أو تكرارًا</strong> بين بعض الأنشطة.
        فمثلًا، قد يكشف الاسترداد عن بقايا للتهديد تستلزم العودة إلى الاحتواء أو إزالة التهديد.
      </p>

      <!-- Response simulator -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
        <h3 class="text-xl font-bold mb-2">🧪 أنت قائد فريق الاستجابة: هجوم فدية على شبكة المدرسة</h3>
        <p class="text-slate-400 mb-6">في كل خطوة اختر الإجراء الصحيح التالي. الاختيار الخاطئ له عواقب… شاهدها!</p>

        <!-- Progress -->
        <div class="flex gap-1.5 mb-6">
          <div v-for="(p, i) in phases" :key="p.name" class="flex-1 h-2 rounded-full transition-colors"
               :class="i < step ? 'bg-emerald-400' : i === step ? 'bg-amber-400 animate-pulse' : 'bg-slate-700'"></div>
        </div>

        <div v-if="step < scenario.length" class="grid md:grid-cols-5 gap-6">
          <div class="md:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <span class="text-xs font-bold text-amber-300">الموقف الحالي</span>
            <p class="mt-2 leading-relaxed text-slate-200">{{ scenario[step].situation }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="s in status" :key="s.label" class="text-xs font-bold px-2 py-1 rounded-lg" :class="s.cls">{{ s.label }}</span>
            </div>
          </div>
          <div class="md:col-span-3 space-y-3">
            <button v-for="(o, i) in scenario[step].options" :key="i" @click="choose(i)" :disabled="feedback?.ok"
                    class="w-full text-right p-4 rounded-xl border-2 transition-all font-medium"
                    :class="optionClass(i)">
              {{ o.text }}
            </button>
            <div v-if="feedback" class="p-4 rounded-xl text-sm leading-relaxed border"
                 :class="feedback.ok ? 'bg-emerald-950 border-emerald-600 text-emerald-100' : 'bg-rose-950 border-rose-600 text-rose-100'">
              <strong>{{ feedback.ok ? `✓ صحيح — مرحلة ${phases[step].name}` : '✗ عاقبة هذا القرار:' }}</strong> {{ feedback.text }}
              <button v-if="feedback.ok" @click="next" class="block mt-3 px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-lg">التالي ←</button>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-6">
          <div class="text-5xl mb-3">🏆</div>
          <h4 class="text-2xl font-bold text-emerald-300 mb-2">أنهيت الاستجابة بنجاح!</h4>
          <p class="text-slate-300 mb-1">عدد القرارات الخاطئة: <strong class="text-amber-300">{{ mistakes }}</strong></p>
          <p class="text-slate-400 max-w-xl mx-auto leading-relaxed mb-5">لاحظ أن كل قرار خاطئ كان يعني انتشار الضرر أو عودة الهجوم — لهذا نتبع التسلسل العام: احتوِ، ثم أزل السبب، ثم استعد، ثم تعلّم.</p>
          <button @click="restart" class="px-6 py-3 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl">إعادة المحاكاة</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const circled = ['①', '②', '③', '④', '⑤', '⑥']
const phases = [
  { icon: '📋', name: 'التحضير', short: 'التحضير', hint: 'قم بإعداد الإجراءات مسبقًا', desc: 'إنشاء إجراءات وهياكل استجابة مسبقًا، استعدادًا للحوادث', text: 'text-slate-200' },
  { icon: '🔎', name: 'الاكتشاف', short: 'الاكتشاف', hint: 'ابحث عن الحوادث وتأكد منها', desc: 'اكتشاف وتأكيد وقوع حادث', text: 'text-sky-300' },
  { icon: '🧯', name: 'الاحتواء', short: 'الاحتواء', hint: 'الحد من التأثير', desc: 'تحديد نطاق التأثير بحيث لا ينتشر الضرر أكثر', text: 'text-amber-300' },
  { icon: '🧹', name: 'إزالة التهديد (الاستئصال)', short: 'الإزالة', hint: 'إزالة السبب الجذري', desc: 'إزالة التهديد ومسبباته، مثل حذف البرمجيات الخبيثة ومعالجة الثغرة المستغلة', text: 'text-rose-300' },
  { icon: '♻️', name: 'الاستعادة', short: 'الاستعادة', hint: 'استعادة الأنظمة', desc: 'إعادة الأنظمة والخدمات إلى حالة تشغيل آمنة وطبيعية (قد تشمل الاستعادة من نسخة احتياطية سليمة)', text: 'text-emerald-300' },
  { icon: '📚', name: 'الدروس المستفادة والتحسين', short: 'الوقاية', hint: 'منع تكرار الحدث', desc: 'تحليل ما حدث، وتوثيق الدروس، وتحسين الضوابط لتقليل احتمال التكرار وأثره', text: 'text-indigo-300' },
]

// One step per phase; `ans` is the correct option, wrong options explain their consequence
const scenario = [
  {
    situation: 'المدرسة لم يقع فيها أي حادث بعد. لديك أسبوع قبل بدء العام الدراسي. ماذا تفعل الآن؟',
    ans: 1,
    options: [
      { text: 'لا شيء؛ سنتصرف عندما تقع مشكلة.', why: 'عند وقوع الهجوم لن يعرف أحد من يتصل بمن أو ماذا يفعل، فيضيع وقت ثمين ويكبر الضرر.' },
      { text: 'نكتب إجراءات الاستجابة، ونحدد أدوار الفريق، ونتأكد من وجود نسخ احتياطية سليمة.', why: 'هذه مرحلة التحضير: الاستعداد المسبق يجعل باقي المراحل أسرع.' },
      { text: 'نشتري أجهزة جديدة لكل الموظفين.', why: 'الأجهزة الجديدة لا تُعد خطة استجابة؛ ستبقى بلا إجراءات أو أدوار عند وقوع حادث.' },
    ],
  },
  {
    situation: 'صباح اليوم: معلمون يشتكون أن ملفاتهم لا تفتح وتظهر رسالة تطلب فدية. ماذا تفعل أولًا؟',
    ans: 0,
    options: [
      { text: 'نتأكد من أن ما يحدث فعلًا هجوم فدية، ونحدد الأجهزة المتأثرة.', why: 'هذه مرحلة الاكتشاف: اكتشاف وتأكيد وقوع الحادث.' },
      { text: 'نتجاهل الشكاوى لأنها قد تكون مشكلة عادية.', why: 'تجاهل العلامات يترك البرمجية الخبيثة تنتشر دون أن يلاحظ أحد.' },
      { text: 'ندفع الفدية فورًا.', why: 'دفع الفدية لا يضمن استرجاع الملفات، ولا يزيل البرمجية الخبيثة، ولا يوقف انتشارها.' },
    ],
  },
  {
    situation: 'تأكدنا: هجوم فدية بدأ من جهاز في معمل الحاسب ويحاول الانتشار عبر الشبكة.',
    ans: 2,
    options: [
      { text: 'نبدأ فورًا في البحث عن سبب الإصابة.', why: 'أثناء البحث عن السبب، تواصل البرمجية الانتشار وتشفّر ملفات أجهزة أخرى!' },
      { text: 'نستعيد الملفات من النسخة الاحتياطية الآن.', why: 'الملفات المستعادة ستُشفَّر من جديد لأن البرمجية ما زالت تعمل وتنتشر.' },
      { text: 'نفصل الأجهزة المصابة عن الشبكة لنمنع الانتشار.', why: 'هذا هو الاحتواء: الحد من انتشار الضرر قبل أي شيء آخر.' },
    ],
  },
  {
    situation: 'الأجهزة المصابة معزولة والانتشار توقف. لكن البرمجية والثغرة التي دخلت منها ما زالتا موجودتين.',
    ans: 1,
    options: [
      { text: 'نعيد توصيل الأجهزة بالشبكة ونستعيد الملفات فورًا.', why: 'البرمجية والثغرة ما زالتا موجودتين؛ فيعود الهجوم ونضطر للرجوع إلى الاحتواء وإزالة التهديد.' },
      { text: 'نحذف البرمجية الخبيثة ونسد الثغرة المستغلة (تحديث النظام).', why: 'هذه مرحلة إزالة التهديد (الاستئصال): إزالة التهديد ومسبباته.' },
      { text: 'نعلن انتهاء الحادث.', why: 'الحادث لم ينتهِ: التهديد لم يُزل، والأنظمة لم تُستعد بعد.' },
    ],
  },
  {
    situation: 'تمت إزالة البرمجية وسد الثغرة. الملفات ما زالت مشفّرة والخدمات متوقفة.',
    ans: 0,
    options: [
      { text: 'نستعيد الملفات من نسخة احتياطية سليمة ونعيد الخدمات إلى العمل بأمان.', why: 'هذه مرحلة الاستعادة: إعادة الأنظمة والخدمات إلى حالة تشغيل آمنة وطبيعية.' },
      { text: 'نترك الأجهزة مفصولة إلى الأبد.', why: 'المدرسة تحتاج خدماتها؛ الهدف إعادة التشغيل الآمن لا الإيقاف الدائم.' },
      { text: 'نعيد تثبيت كل شيء دون التأكد من سلامة النسخة الاحتياطية.', why: 'قد تكون النسخة الاحتياطية مصابة هي الأخرى؛ يجب الاستعادة من نسخة سليمة.' },
    ],
  },
  {
    situation: 'عادت الخدمات للعمل. الجميع يريد نسيان ما حدث والعودة للعمل.',
    ans: 2,
    options: [
      { text: 'ننسى الأمر؛ انتهت المشكلة.', why: 'بدون تحليل ما حدث قد تتكرر نفس الإصابة من نفس الطريق.' },
      { text: 'نعاقب الموظف الذي فتح المرفق ونكتفي بذلك.', why: 'العقاب لا يحسّن الضوابط؛ المطلوب فهم السبب وتحسين الحماية لتقليل التكرار.' },
      { text: 'نحلل ما حدث، ونوثّق الدروس، ونحسّن الضوابط (تدريب الموظفين، تحديثات منتظمة، نسخ احتياطية).', why: 'هذه مرحلة الدروس المستفادة والتحسين: تقليل احتمال التكرار وأثره.' },
    ],
  },
]

const step = ref(0)
const picked = ref(null)
const tried = ref([])
const mistakes = ref(0)

const feedback = computed(() => {
  if (picked.value === null) return null
  const s = scenario[step.value]
  return { ok: picked.value === s.ans, text: s.options[picked.value].why }
})

const status = computed(() => [
  { label: step.value >= 3 ? '🧯 الانتشار متوقف' : '🔥 الانتشار مستمر', cls: step.value >= 3 ? 'bg-emerald-900 text-emerald-200' : 'bg-rose-900 text-rose-200' },
  { label: step.value >= 4 ? '🧹 التهديد أُزيل' : '🦠 التهديد موجود', cls: step.value >= 4 ? 'bg-emerald-900 text-emerald-200' : 'bg-rose-900 text-rose-200' },
  { label: step.value >= 5 ? '♻️ الخدمات تعمل' : '⛔ الخدمات متأثرة', cls: step.value >= 5 ? 'bg-emerald-900 text-emerald-200' : 'bg-amber-900 text-amber-200' },
])

function choose(i) {
  picked.value = i
  if (!tried.value.includes(i)) {
    tried.value.push(i)
    if (i !== scenario[step.value].ans) mistakes.value++
  }
}
function next() {
  step.value++
  picked.value = null
  tried.value = []
}
function restart() {
  step.value = 0
  picked.value = null
  tried.value = []
  mistakes.value = 0
}
function optionClass(i) {
  const s = scenario[step.value]
  if (picked.value === i) return i === s.ans ? 'bg-emerald-600/30 border-emerald-400 text-white' : 'bg-rose-600/30 border-rose-400 text-white'
  if (tried.value.includes(i)) return 'bg-slate-900 border-rose-900 text-slate-500 line-through'
  return 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500'
}
</script>
