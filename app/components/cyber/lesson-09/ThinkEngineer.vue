<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        تعرّض نظام سجلات الطلاب في إحدى المدارس لهجوم ببرمجية فدية: شُفّرت الملفات، ولم يعد الموظفون قادرين على تسجيل الدخول. أنت تقود الاستجابة.
      </p>

      <div class="space-y-6">
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-rose-900">استجب من هنا</h3>
          </div>
          <p class="text-slate-600 mb-4">
            تم للتو اكتشاف هذا الحادث — الملفات مشفرة والموظفون محظورون من الدخول. بدءًا من الموقف الذي تمر به المدرسة الآن،
            اختر المراحل التي لا يزال يتعين تنفيذها، وبيّن ماذا تعني كل منها لهذا الحادث تحديدًا.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <button v-for="p in phases" :key="p.name" @click="toggle(p)"
                    class="px-4 py-2 rounded-xl border-2 font-bold text-sm transition-colors"
                    :class="phaseClass(p)">
              {{ p.icon }} {{ p.name }}
            </button>
          </div>
          <button @click="checkPhases = !checkPhases" class="text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ checkPhases ? 'إخفاء الحل' : 'تحقق من اختيارك' }}
          </button>
          <div v-if="checkPhases" class="mt-4 space-y-2">
            <p class="text-sm text-slate-500">التحضير والاكتشاف تمّا بالفعل (الحادث اكتُشف للتو). المراحل المتبقية:</p>
            <div v-for="p in phases.filter(p => p.remaining)" :key="p.name" class="p-3 rounded-xl bg-white border border-emerald-200 text-slate-700">
              <strong class="text-emerald-800">{{ p.icon }} {{ p.name }}:</strong> {{ p.meaning }}
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-amber-900">قيّم المخاطر</h3>
          </div>
          <p class="text-slate-600 mb-4">بالنسبة لمخاطرتين تواجههما المدرسة، قدّر التأثير والاحتمالية، وبيّن أيهما ينبغي معالجته أولًا.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="r in risks" :key="r.name" class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-3">{{ r.icon }} {{ r.name }}</h4>
              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                  <span class="w-20 font-bold text-slate-600">التأثير:</span>
                  <button v-for="(l, i) in levels" :key="l" @click="r.impact = i" class="flex-1 py-1 rounded-lg border font-bold"
                          :class="r.impact === i ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-slate-200 text-slate-600'">{{ l }}</button>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-20 font-bold text-slate-600">الاحتمالية:</span>
                  <button v-for="(l, i) in levels" :key="l" @click="r.likelihood = i" class="flex-1 py-1 rounded-lg border font-bold"
                          :class="r.likelihood === i ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-slate-200 text-slate-600'">{{ l }}</button>
                </div>
              </div>
              <p v-if="r.impact !== null && r.likelihood !== null" class="mt-3 font-bold text-slate-800">
                درجة الخطر: {{ (r.impact + 1) * (r.likelihood + 1) }} ({{ matrix[r.impact][r.likelihood] }})
              </p>
            </div>
          </div>
          <p v-if="bothRated" class="mt-4 font-bold" :class="first === 0 ? 'text-emerald-700' : 'text-amber-700'">
            {{ first === 0 ? '✓ حسب تقديرك، يُعالج هجوم الفدية أولًا.' : first === 1 ? 'حسب تقديرك يُعالج انقطاع الكهرباء أولًا… راجع: أيهما أكبر ضررًا الآن؟' : 'الخطران متساويان في تقديرك؛ فكّر في السياق: أيهما يحدث الآن ويمس بيانات الطلاب؟' }}
          </p>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بأول ثلاثة إجراءات ينبغي أن تتخذها المدرسة، وقدّم سببًا واحدًا لأهمية الترتيب. <strong>في أزواج</strong>، قارنوا ترتيبيكما واتفقوا معًا على الخطوة الأولى الأهم.
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
            <strong>هل تواجه صعوبة؟</strong> إذا بدأت الاستعادة قبل إزالة التهديد، فقد تبقى البرمجية الخبيثة أو الثغرة المستغلة، وقد يلزم الرجوع إلى الاحتواء وإزالة التهديد.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> اتباع الاستجابة ذات المراحل الست بالترتيب.
            <br><strong>أول ثلاثة إجراءات:</strong> ① فصل الأجهزة والخوادم المصابة عن الشبكة (احتواء) ② حذف برمجية الفدية وسد الثغرة التي دخلت منها (استئصال) ③ استعادة السجلات من نسخة احتياطية سليمة (استعادة).
            <br><strong>سبب أهمية الترتيب:</strong> الاستعادة الفورية من النسخة الاحتياطية والبرمجية ما زالت موجودة ستؤدي إلى تشفير الملفات المستعادة من جديد.
            <br><strong>المخاطرتان:</strong> هجوم الفدية تأثيره كبير واحتماليته عالية الآن (مرتفع جدًا) فيُعالج أولًا؛ أما انقطاع الكهرباء القصير فتأثيره صغير (درجة أقل).
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const levels = ['منخفض', 'متوسط', 'مرتفع']
const matrix = [
  ['منخفض جدًا', 'منخفض', 'متوسط'],
  ['منخفض', 'متوسط', 'مرتفع'],
  ['متوسط', 'مرتفع', 'مرتفع جدًا'],
]

const phases = reactive([
  { icon: '📋', name: 'التحضير', remaining: false, picked: false },
  { icon: '🔎', name: 'الاكتشاف', remaining: false, picked: false },
  { icon: '🧯', name: 'الاحتواء', remaining: true, picked: false, meaning: 'فصل الأجهزة والخوادم المصابة عن الشبكة حتى لا يشفّر البرنامج ملفات أخرى.' },
  { icon: '🧹', name: 'الاستئصال', remaining: true, picked: false, meaning: 'حذف برمجية الفدية وسد الثغرة التي دخلت منها.' },
  { icon: '♻️', name: 'الاستعادة', remaining: true, picked: false, meaning: 'استعادة سجلات الطلاب من نسخة احتياطية سليمة وإعادة تسجيل دخول الموظفين بأمان.' },
  { icon: '📚', name: 'الدروس المستفادة والتحسين', remaining: true, picked: false, meaning: 'تحليل كيف دخلت البرمجية، وتدريب الموظفين، وتحسين التحديثات والنسخ الاحتياطية.' },
])
const checkPhases = ref(false)
function toggle(p) { p.picked = !p.picked }
function phaseClass(p) {
  if (checkPhases.value) {
    if (p.remaining) return p.picked ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-emerald-50 border-emerald-400 text-emerald-800'
    return p.picked ? 'bg-rose-100 border-rose-400 text-rose-800 line-through' : 'bg-slate-100 border-slate-200 text-slate-400'
  }
  return p.picked ? 'bg-rose-100 border-rose-500 text-rose-900' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
}

const risks = reactive([
  { icon: '🦠', name: 'هجوم آخر ببرنامج فدية', impact: null, likelihood: null },
  { icon: '🔌', name: 'انقطاع كهرباء قصير', impact: null, likelihood: null },
])
const bothRated = computed(() => risks.every(r => r.impact !== null && r.likelihood !== null))
const first = computed(() => {
  const s = risks.map(r => (r.impact + 1) * (r.likelihood + 1))
  return s[0] > s[1] ? 0 : s[1] > s[0] ? 1 : -1
})

const choices = ['الاستعادة من النسخة الاحتياطية فورًا', 'اتباع الاستجابة ذات المراحل الست بالترتيب']
const choice = ref(null)
const showModel = ref(false)
</script>
