<template>
  <section id="heuristic" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-emerald-800 mb-8">3. التقييم الإرشادي</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">(التقييم الإرشادي - Heuristic Evaluation)</strong>... مراجعة يجريها خبراء لواجهة المستخدم (UI) استنادًا إلى قواعد أو مبادئ إرشادية عملية (heuristics).
            وهي شكل من أشكال التقييم النوعي، تُستخدم إلى جانب اختبار قابلية الاستخدام وطرق أخرى لبحث أسباب مشكلات قابلية الاستخدام.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> ثلاثة أمثلة على قواعد إرشادية نستخدمها في هذا الدرس:</p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-emerald-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">تحليلات الويب</strong> – جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التقييم الإرشادي</strong> – يفحص الخبراء واجهة المستخدم بقواعد عملية.</p>
        </div>
      </div>

      <!-- The three heuristics -->
      <div class="grid md:grid-cols-3 gap-4 mb-12">
        <div v-for="(h, i) in heuristics" :key="h.name" class="rounded-3xl border-2 p-6 bg-white" :class="h.border">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">{{ h.icon }}</span>
            <h3 class="text-xl font-bold" :class="h.text">{{ circled[i] }} {{ h.name }}</h3>
          </div>
          <p class="text-slate-600 leading-relaxed">{{ h.desc }}</p>
        </div>
      </div>

      <!-- Spot the problem -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 كن الخبير: اكتشف المشكلة</h3>
        <p class="text-slate-600 mb-6">كل شاشة من شاشات موقع المدرسة التالية فيها مشكلة. جرّبها، ثم حدد القاعدة الإرشادية التي تخالفها.</p>

        <div class="space-y-6">
          <div v-for="(s, i) in screens" :key="s.title" class="bg-white rounded-2xl border border-slate-200 p-5">
            <h4 class="font-bold text-slate-800 mb-4">الشاشة {{ i + 1 }}: {{ s.title }}</h4>

            <div class="grid md:grid-cols-2 gap-5 items-start">
              <!-- Mock UI -->
              <div class="rounded-xl border-2 border-slate-200 bg-slate-50 p-4 min-h-[150px]">
                <!-- 1: inconsistent save buttons -->
                <template v-if="s.kind === 'consistency'">
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white rounded-lg border p-3 text-sm">
                      <div class="font-bold mb-2">صفحة الواجبات</div>
                      <div class="h-2 bg-slate-200 rounded mb-1"></div><div class="h-2 bg-slate-200 rounded w-2/3 mb-3"></div>
                      <button class="w-full py-1.5 rounded-lg font-bold text-xs bg-emerald-600 text-white">💾 حفظ</button>
                    </div>
                    <div class="bg-white rounded-lg border p-3 text-sm">
                      <div class="font-bold mb-2">صفحة الملف الشخصي</div>
                      <button v-if="!fixed[i]" class="w-full py-1 rounded-full font-bold text-[10px] bg-rose-500 text-white mb-2">تخزين البيانات ✔</button>
                      <div class="h-2 bg-slate-200 rounded mb-1"></div><div class="h-2 bg-slate-200 rounded w-2/3 mb-3"></div>
                      <button v-if="fixed[i]" class="w-full py-1.5 rounded-lg font-bold text-xs bg-emerald-600 text-white">💾 حفظ</button>
                    </div>
                  </div>
                </template>

                <!-- 2: error-prone form -->
                <template v-else-if="s.kind === 'errors'">
                  <div class="bg-white rounded-lg border p-3 text-sm space-y-2">
                    <div class="font-bold">حذف واجب</div>
                    <p class="text-xs text-slate-500">واجب الرياضيات – الوحدة 2</p>
                    <div class="flex gap-2">
                      <button @click="tryDelete(i)" class="flex-1 py-1.5 rounded-lg font-bold text-xs bg-rose-600 text-white">🗑️ حذف</button>
                      <button class="flex-1 py-1.5 rounded-lg font-bold text-xs bg-emerald-600 text-white">💾 حفظ</button>
                    </div>
                    <p v-if="deleteState === 'deleted'" class="text-xs font-bold text-rose-700">✗ تم الحذف فورًا ونهائيًا — الطالب ضغط «حذف» بالخطأ بدل «حفظ»!</p>
                    <div v-if="deleteState === 'confirm'" class="text-xs bg-amber-50 border border-amber-300 rounded-lg p-2">
                      <p class="font-bold text-amber-800 mb-1">هل أنت متأكد من حذف الواجب؟</p>
                      <div class="flex gap-2">
                        <button @click="deleteState = 'idle'" class="px-2 py-1 rounded bg-white border font-bold">إلغاء</button>
                        <button @click="deleteState = 'idle'" class="px-2 py-1 rounded bg-rose-600 text-white font-bold">نعم، احذف</button>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- 3: no system status -->
                <template v-else>
                  <div class="bg-white rounded-lg border p-3 text-sm space-y-2">
                    <div class="font-bold">رفع ملف المشروع</div>
                    <div class="text-xs border border-dashed rounded p-2 text-slate-500" dir="ltr">project.pdf</div>
                    <button @click="tryUpload(i)" :disabled="uploading" class="w-full py-1.5 rounded-lg font-bold text-xs bg-emerald-600 text-white disabled:opacity-70">⬆️ رفع</button>
                    <p v-if="fixed[i] && uploading" class="text-xs font-bold text-sky-700">⏳ جارٍ الرفع… {{ progress }}%</p>
                    <p v-if="fixed[i] && uploadDone" class="text-xs font-bold text-emerald-700">✓ تم رفع الملف بنجاح.</p>
                    <p v-if="!fixed[i] && clicks > 0" class="text-xs text-slate-400">(ضغطت {{ clicks }} مرة… هل حدث شيء؟ لا توجد أي رسالة.)</p>
                  </div>
                </template>
              </div>

              <!-- Choose the heuristic -->
              <div>
                <p class="text-sm text-slate-600 mb-3">{{ s.hint }}</p>
                <div class="flex flex-wrap gap-2">
                  <button v-for="(h, j) in heuristics" :key="h.name" @click="pick(i, j)"
                          class="px-3 py-2 rounded-xl border-2 font-bold text-sm transition-colors"
                          :class="pickClass(i, j)">
                    {{ h.icon }} {{ h.name }}
                  </button>
                </div>
                <div v-if="picks[i] !== null" class="mt-3 p-3 rounded-xl text-sm leading-relaxed"
                     :class="picks[i] === s.ans ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'">
                  <strong>{{ picks[i] === s.ans ? '✓ صحيح.' : '✗ ليست هذه.' }}</strong>
                  {{ picks[i] === s.ans ? s.why : 'جرّب الشاشة مرة أخرى وفكّر: ما الذي يربك المستخدم هنا؟' }}
                  <button v-if="picks[i] === s.ans" @click="fixed[i] = !fixed[i]; resetDemo()" class="block mt-2 px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                    {{ fixed[i] ? 'أعد المشكلة' : '🔧 أصلح الشاشة' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          لتقييم موقع إلكتروني جيدًا، اجمع بين "كم" الخاصة بالبيانات الكمية (PV، معدل الارتداد، CVR) و"لماذا" الخاصة بالطرق النوعية
          (اختبارات قابلية الاستخدام، المقابلات، التقييم الإرشادي) — فالأرقام تكشف ما يحدث، والمستخدمون يكشفون الأسباب.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue'

const circled = ['①', '②', '③']
const heuristics = [
  { icon: '🔁', name: 'الاتساق', desc: 'ما إذا كان التصميم والعمليات موحدة عبر الموقع.', border: 'border-emerald-200', text: 'text-emerald-700' },
  { icon: '🛑', name: 'منع الأخطاء', desc: 'ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء.', border: 'border-rose-200', text: 'text-rose-700' },
  { icon: '📡', name: 'وضوح حالة النظام', desc: 'ما إذا كانت حالة النظام موضحة بوضوح للمستخدمين (مثل مؤشرات المعالجة، ورسائل أخطاء الإدخال).', border: 'border-sky-200', text: 'text-sky-700' },
]

const screens = [
  { kind: 'consistency', ans: 0, title: 'زر الحفظ في صفحتين مختلفتين', hint: 'قارن زر الحفظ في الصفحتين: الشكل والمكان والاسم.',
    why: 'زر الحفظ يختلف في الشكل والمكان والاسم بين الصفحات، فيضطر المستخدم إلى البحث عنه في كل مرة. الحل: توحيد التصميم والعمليات عبر الموقع.' },
  { kind: 'errors', ans: 1, title: 'حذف واجب', hint: 'اضغط «حذف» وشاهد ماذا يحدث.',
    why: 'زر الحذف ملاصق لزر الحفظ ويحذف فورًا دون تأكيد، فيسهل ارتكاب خطأ لا يمكن التراجع عنه. الحل: طلب تأكيد قبل الحذف وإبعاد الزرين عن بعضهما.' },
  { kind: 'status', ans: 2, title: 'رفع ملف المشروع', hint: 'اضغط «رفع» عدة مرات. هل تعرف ما الذي يحدث؟',
    why: 'لا يظهر أي مؤشر معالجة أو رسالة نجاح، فلا يعرف المستخدم هل رُفع الملف أم لا، وقد يضغط مرات كثيرة. الحل: إظهار مؤشر تقدم ورسالة واضحة بالنتيجة.' },
]

const picks = ref([null, null, null])
const fixed = reactive([false, false, false])

function pick(i, j) { picks.value[i] = j }
function pickClass(i, j) {
  if (picks.value[i] !== j) return 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
  return j === screens[i].ans ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-rose-500 border-rose-500 text-white'
}

// Screen 2 demo
const deleteState = ref('idle')
function tryDelete(i) { deleteState.value = fixed[i] ? 'confirm' : 'deleted' }

// Screen 3 demo
const clicks = ref(0)
const uploading = ref(false)
const uploadDone = ref(false)
const progress = ref(0)
let timer = null
function tryUpload(i) {
  if (!fixed[i]) { clicks.value++; return }
  uploading.value = true
  uploadDone.value = false
  progress.value = 0
  timer = setInterval(() => {
    progress.value += 25
    if (progress.value >= 100) { clearInterval(timer); uploading.value = false; uploadDone.value = true }
  }, 400)
}
function resetDemo() {
  deleteState.value = 'idle'
  clicks.value = 0
  uploadDone.value = false
  uploading.value = false
  if (timer) clearInterval(timer)
}
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>
