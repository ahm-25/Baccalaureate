<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        تريد مدرسة في مدينتك تطبيق ويب يسجّل فيه الطلاب الدخول، ويعرضون جدولهم الدراسي، ويحمّلون ملف PDF. أنت تخطط لكيفية تواصل العميل والخادم.
      </p>

      <div class="space-y-6">
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-sky-900">اختر الأسلوب</h3>
          </div>
          <p class="text-slate-600 mb-4">
            لكل إجراء من الإجراءات الثلاثة، حدد ما إذا كان GET أو POST هو الأنسب، وبالنسبة للإجراء الأخير حدد ما إذا كانت واجهة برمجة تطبيقات متضمنة.
          </p>
          <div class="space-y-3">
            <div v-for="(a, i) in actions" :key="a.text" class="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3">
              <p class="flex-1 font-medium text-slate-800">{{ a.icon }} {{ a.text }}</p>
              <div class="flex gap-2 shrink-0" dir="ltr">
                <button v-for="m in ['GET', 'POST']" :key="m" @click="a.pick = m"
                        class="w-20 h-10 rounded-xl border-2 font-mono font-bold transition-colors" :class="methodClass(a, m)">{{ m }}</button>
              </div>
              <div v-if="a.api !== undefined" class="flex items-center gap-2 shrink-0 text-sm font-bold">
                <span class="text-slate-600">API؟</span>
                <button v-for="v in [true, false]" :key="String(v)" @click="a.apiPick = v"
                        class="w-14 h-10 rounded-xl border-2 transition-colors" :class="apiClass(a, v)">{{ v ? 'نعم' : 'لا' }}</button>
              </div>
            </div>
          </div>
          <button @click="checkStep1 = !checkStep1" class="mt-4 text-sky-700 font-bold bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ checkStep1 ? 'إخفاء الحل' : 'تحقق من اختيارك' }}
          </button>
          <div v-if="checkStep1" class="mt-3 space-y-2">
            <p v-for="a in actions" :key="a.text" class="p-3 rounded-xl bg-white border border-emerald-200 text-slate-700 text-sm leading-relaxed">
              <strong class="text-emerald-800">{{ a.icon }} {{ a.text }}:</strong> {{ a.why }}
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-rose-900">اختر البروتوكول</h3>
          </div>
          <p class="text-slate-600 mb-4">حدد ما إذا كان يجب أن يستخدم تسجيل الدخول HTTP أو HTTPS، واذكر السبب.</p>
          <div class="flex gap-3 mb-4" dir="ltr">
            <button v-for="p in ['HTTP', 'HTTPS']" :key="p" @click="proto = p"
                    class="px-6 h-11 rounded-xl border-2 font-mono font-bold transition-colors"
                    :class="proto === p ? (p === 'HTTPS' ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-rose-600 border-rose-600 text-white') : 'bg-white border-slate-200 text-slate-600'">{{ p }}</button>
          </div>
          <p v-if="proto" class="p-3 rounded-xl text-sm leading-relaxed" :class="proto === 'HTTPS' ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'">
            {{ proto === 'HTTPS'
              ? '✓ صحيح: تسجيل الدخول يرسل اسم المستخدم وكلمة المرور، وHTTPS يحمي محتوى الاتصال عبر TLS أثناء النقل.'
              : '✗ مع HTTP العادي تنتقل كلمة المرور دون حماية TLS، فقد يقرؤها من يتجسس على الشبكة.' }}
          </p>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بتصميم الاتصال واذكر سببين. <strong>في أزواج</strong>، قارنوا اختياراتكم للأسلوب واتفقوا معًا على الإجراء الذي يجب أن يستخدم POST.
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
            <strong>هل تواجه صعوبة؟</strong> يُستخدم GET عادةً لطلب مورد أو بيانات، وPOST لإرسال بيانات ليعالجها الخادم. ويحمي HTTPS محتوى الاتصال عبر TLS أثناء النقل.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> استخدام HTTPS والأسلوب المناسب لكل إجراء.
            <br><strong>السبب 1:</strong> تسجيل الدخول يرسل بيانات حساسة، وHTTPS يحمي سرية الاتصال وسلامته عبر TLS؛ أما HTTP العادي فيترك كلمات المرور مكشوفة.
            <br><strong>السبب 2:</strong> اختيار الأسلوب المناسب يوضح نوع العملية للخادم: GET لتحميل سجل الدرجات وطلب الجدول، وPOST لإرسال نموذج تسجيل الدخول.
            <br><strong>الإجراء الذي يجب أن يستخدم POST:</strong> إرسال نموذج تسجيل الدخول.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const actions = reactive([
  { icon: '📊', text: 'تحميل سجل درجات الطالب', fits: 'GET', pick: null,
    why: 'GET، لأنه يطلب بيانات موجودة من الخادم.' },
  { icon: '🔑', text: 'إرسال نموذج تسجيل الدخول', fits: 'POST', pick: null,
    why: 'POST، لأنه يرسل بيانات (اسم المستخدم وكلمة المرور) ليعالجها الخادم.' },
  { icon: '📅', text: 'طلب الجدول الدراسي لليوم من نظام مدرسة أخرى', fits: 'GET', pick: null, api: true, apiPick: null,
    why: 'GET، لأنه يطلب بيانات؛ ونعم، تُتضمن واجهة برمجة تطبيقات (API) لأن برنامجًا يطلب بيانات من برنامج آخر (نظام مدرسة أخرى)، وقد تعيدها بصيغة JSON.' },
])
const checkStep1 = ref(false)
function methodClass(a, m) {
  if (checkStep1.value && a.fits === m) return 'bg-emerald-500 border-emerald-500 text-white'
  if (a.pick === m) return checkStep1.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-sky-100 border-sky-500 text-sky-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}
function apiClass(a, v) {
  if (checkStep1.value && a.api === v) return 'bg-emerald-500 border-emerald-500 text-white'
  if (a.apiPick === v) return checkStep1.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-sky-100 border-sky-500 text-sky-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}

const proto = ref(null)
const choices = ['إرسال كل شيء عبر HTTP العادي', 'استخدام HTTPS والأسلوب المناسب لكل إجراء']
const choice = ref(null)
const showModel = ref(false)
</script>
