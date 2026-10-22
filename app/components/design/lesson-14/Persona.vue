<template>
  <section id="persona" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-fuchsia-800 mb-8">1. شخصية المستخدم</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">شخصية المستخدم (Persona)</strong>: تمثيل لنوع من المستخدمين، يُبنى قدر الإمكان على بحث أو بيانات عن
            أهدافهم واحتياجاتهم وسلوكهم وسياقهم وتحدياتهم. وتُضاف معلومات مثل العمر أو المهنة فقط إذا كانت مهمة للتصميم.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            يمكن لشخصية المستخدم أن تساعد الفريق على مناقشة احتياجات نمط من المستخدمين بدل الاعتماد على الافتراضات الشخصية،
            <strong>لكنها ليست خطوة إلزامية في كل مشروع</strong>.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-fuchsia-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">شخصية المستخدم (Persona)</strong> – تمثيل لنمط من المستخدمين يستند قدر الإمكان إلى بحث أو بيانات عن أهدافهم واحتياجاتهم وسلوكهم وسياق استخدامهم.
          </p>
        </div>
      </div>

      <!-- Persona builder -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 جرّب بنفسك: ابنِ شخصية مستخدم لموقع مكتبة المدرسة</h3>
        <p class="text-slate-600 mb-6">أضف إلى البطاقة المعلومات المفيدة للتصميم فقط. المعلومات التي لا تخص المستخدم سيتم رفضها.</p>

        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Candidates -->
          <div class="space-y-2">
            <button v-for="(c, i) in candidates" :key="c.text" @click="pick(i)" :disabled="c.state !== null"
                    class="w-full text-right p-3 rounded-xl border-2 flex items-center gap-3 transition-colors"
                    :class="candidateClass(c)">
              <span class="text-xl">{{ c.icon }}</span>
              <span class="flex-1 font-medium">{{ c.text }}</span>
              <span v-if="c.state === 'ok'" class="text-xs font-bold text-emerald-700">✓ أُضيفت</span>
              <span v-else-if="c.state === 'bad'" class="text-xs font-bold text-rose-700">✗ مرفوضة</span>
            </button>
            <p v-if="lastFeedback" class="p-3 rounded-xl text-sm leading-relaxed" :class="lastFeedback.ok ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'">
              {{ lastFeedback.text }}
            </p>
          </div>

          <!-- Card -->
          <div class="bg-white rounded-3xl border-2 border-fuchsia-200 shadow-sm overflow-hidden">
            <div class="bg-gradient-to-l from-fuchsia-600 to-pink-500 text-white p-5 flex items-center gap-4">
              <div class="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl">🧑‍🎓</div>
              <div>
                <div class="text-xs font-bold opacity-80">شخصية المستخدم</div>
                <div class="text-xl font-black">«مريم» — طالبة في الصف الثاني</div>
              </div>
            </div>
            <div class="p-5 space-y-3 min-h-[200px]">
              <div v-for="field in fields" :key="field.key">
                <div class="text-xs font-bold text-fuchsia-700 mb-1">{{ field.label }}</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="c in candidates.filter(c => c.state === 'ok' && c.field === field.key)" :key="c.text"
                        class="text-sm bg-fuchsia-50 text-fuchsia-900 border border-fuchsia-200 rounded-lg px-2 py-1">{{ c.text }}</span>
                  <span v-if="!candidates.some(c => c.state === 'ok' && c.field === field.key)" class="text-sm text-slate-300">—</span>
                </div>
              </div>
            </div>
            <div class="px-5 pb-5">
              <p v-if="done" class="font-bold text-emerald-700">✓ اكتملت البطاقة: كل ما فيها يساعد الفريق على تصميم الموقع حول مريم.</p>
              <button @click="reset" class="text-sm text-fuchsia-700 underline font-bold mt-2">إعادة</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const fields = [
  { key: 'goal', label: 'الأهداف' },
  { key: 'need', label: 'الاحتياجات' },
  { key: 'context', label: 'سياق الاستخدام والسلوك' },
  { key: 'challenge', label: 'التحديات' },
]

// field === null marks information that does not describe the user
const initial = [
  { icon: '🎯', text: 'تريد حجز كتاب للمذاكرة بسرعة', field: 'goal', why: 'الهدف من استخدام الموقع معلومة أساسية في شخصية المستخدم.' },
  { icon: '🔎', text: 'تحتاج إلى بحث واضح باسم الكتاب', field: 'need', why: 'احتياج المستخدم يوجّه قرارات التصميم.' },
  { icon: '📱', text: 'تتصفح غالبًا من الهاتف في الفسحة', field: 'context', why: 'سياق الاستخدام يحدد مثلًا أهمية التصميم للشاشات الصغيرة.' },
  { icon: '⏱️', text: 'وقتها قصير وتتشتت من الصفحات المزدحمة', field: 'challenge', why: 'التحديات التي يواجهها المستخدم من عناصر شخصية المستخدم.' },
  { icon: '🖥️', text: 'أداء خادم الموقع الإلكتروني', field: null, why: 'أداء الخادم معلومة تقنية عن الموقع، لا عن المستخدم؛ فلا تُدرج في شخصية المستخدم.' },
  { icon: '🎨', text: 'لون الشعار المفضل لدى المصمم', field: null, why: 'ذوق المصمم ليس معلومة عن المستخدم؛ والهدف هو تجنب الاعتماد على الافتراضات الشخصية.' },
  { icon: '👟', text: 'مقاس حذائها', field: null, why: 'تُضاف المعلومات الشخصية فقط إذا كانت مهمة للتصميم، وهذه ليست كذلك.' },
]

const candidates = reactive(initial.map(c => ({ ...c, state: null })))
const lastFeedback = ref(null)
const done = computed(() => candidates.filter(c => c.field).every(c => c.state === 'ok'))

function pick(i) {
  const c = candidates[i]
  c.state = c.field ? 'ok' : 'bad'
  lastFeedback.value = { ok: !!c.field, text: (c.field ? '✓ ' : '✗ ') + c.why }
}
function reset() {
  candidates.forEach(c => { c.state = null })
  lastFeedback.value = null
}
function candidateClass(c) {
  if (c.state === 'ok') return 'bg-emerald-50 border-emerald-300 text-emerald-900'
  if (c.state === 'bad') return 'bg-rose-50 border-rose-300 text-rose-900 line-through'
  return 'bg-white border-slate-200 text-slate-700 hover:border-fuchsia-400'
}
</script>
