<template>
  <section id="pdca" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-indigo-800 mb-8">1. دورة PDCA</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">(دورة PDCA)</strong>... طريقة تدفع التحسين قدمًا باستمرار من خلال تكرار الخطوات الأربع التالية.
            تُستخدم على نطاق واسع في مجالات مثل تحسين الأعمال وإدارة الجودة، وليس فقط في المواقع الإلكترونية.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-3">
          <h3 class="font-bold text-indigo-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">دورة PDCA</strong> – خطّط ← نفّذ ← تحقّق ← تصرّف، بشكل متكرر.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التحسين المستمر</strong> – التحسن قليلًا في كل مرة.</p>
        </div>
      </div>

      <!-- Steps table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[620px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/5">الخطوة</th>
              <th class="p-4 font-bold w-1/3">الوصف</th>
              <th class="p-4 font-bold">مثال في تحسين المواقع الإلكترونية</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="s in steps" :key="s.en" class="border-t border-slate-200">
              <td class="p-4 font-bold" :class="s.text">{{ s.ar }} <span dir="ltr">({{ s.en }})</span></td>
              <td class="p-4 text-slate-700">{{ s.desc }}</td>
              <td class="p-4 text-slate-700">{{ s.example }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Interactive cycle (figure 4.4.1) -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <div class="text-center mb-6">
          <span class="inline-block text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full mb-2">الشكل 4.4.1 – دورة PDCA كحلقة تحسين مستمر</span>
          <h3 class="text-xl font-bold text-slate-900">🧪 أدِر الحلقة بنفسك: نموذج التسجيل في موقع المدرسة</h3>
          <p class="text-slate-600 mt-1">اضغط «الخطوة التالية» لتنتقل عبر الخطوات الأربع، وشاهد كيف تقود النتائج إلى حلقة جديدة.</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <!-- Ring -->
          <div class="relative w-72 h-72 mx-auto">
            <div class="absolute inset-10 rounded-full border-4 border-dashed border-indigo-200"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-28 h-28 rounded-full bg-white border-2 border-indigo-200 flex flex-col items-center justify-center text-center shadow-sm">
                <span class="text-xs font-bold text-slate-500">الحلقة</span>
                <span class="text-3xl font-black text-indigo-700">{{ loop + 1 }}</span>
                <span class="text-[11px] font-bold text-slate-500">التحسين المستمر</span>
              </div>
            </div>
            <div v-for="(s, i) in steps" :key="s.en"
                 class="absolute w-24 rounded-2xl border-2 p-2 text-center transition-all duration-300"
                 :class="[s.pos, i === step ? `${s.active} scale-110 shadow-lg` : 'bg-white border-slate-200 text-slate-500']">
              <div class="text-xl font-black" dir="ltr">{{ s.en }}</div>
              <div class="text-xs font-bold">{{ s.ar }}</div>
            </div>
          </div>

          <!-- Step details -->
          <div>
            <div class="bg-white rounded-2xl border-2 p-5 min-h-[170px] transition-colors" :class="steps[step].card">
              <span class="text-xs font-bold" :class="steps[step].text">الحلقة {{ loop + 1 }} • {{ steps[step].ar }} ({{ steps[step].en }})</span>
              <p class="mt-2 text-slate-800 leading-relaxed font-medium">{{ loops[loop][step] }}</p>
            </div>

            <!-- Completion meter -->
            <div class="mt-5">
              <div class="flex justify-between text-sm font-bold text-slate-600 mb-1">
                <span>نسبة إكمال نموذج التسجيل</span>
                <span :class="rate >= goal ? 'text-emerald-700' : 'text-slate-700'">{{ rate }}%</span>
              </div>
              <div class="relative h-5 bg-slate-200 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-700" :class="rate >= goal ? 'bg-emerald-500' : 'bg-indigo-500'" :style="{ width: rate + '%' }"></div>
                <div class="absolute top-0 bottom-0 w-0.5 bg-rose-600" :style="{ right: goal + '%' }"></div>
              </div>
              <div class="flex justify-between text-xs text-slate-500 mt-1">
                <span>خط الأساس: 40%</span>
                <span class="text-rose-600 font-bold">الهدف: {{ goal }}%</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 mt-5">
              <button v-if="!finished" @click="next" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors">
                {{ step === 3 ? 'ابدأ الحلقة التالية ←' : 'الخطوة التالية ←' }}
              </button>
              <button @click="reset" class="px-5 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-colors">إعادة</button>
            </div>
            <p v-if="finished" class="mt-4 font-bold text-emerald-700 leading-relaxed">
              ✓ في الحلقة الأولى لم يتحقق الهدف، فراجعنا السبب وعدّلنا الخطة؛ وفي الحلقة الثانية تحقق الهدف فاعتمدنا التغيير. هذا هو التحسين المستمر: تعلّم من النتائج بدل افتراض أن النسخة الأولى مثالية.
            </p>
          </div>
        </div>
      </div>

      <p class="mt-10 text-lg text-slate-700 leading-relaxed">
        <span class="font-bold text-slate-400">(2)</span>
        يساعد التحسين التكراري على التعلم من النتائج بدل افتراض أن النسخة الأولى ستكون مثالية، وقد يكون التغيير صغيرًا أو كبيرًا بحسب الهدف والدليل.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const steps = [
  { en: 'Plan', ar: 'خطّط', desc: 'حدّد الأهداف وضع خطة للتحسين', example: 'حدّد هدفًا واضحًا، مثل رفع نسبة إكمال نموذج التسجيل من 40% إلى 50%، وخطّط لتغيير مناسب', pos: 'top-0 left-1/2 -translate-x-1/2', text: 'text-blue-700', active: 'bg-blue-600 border-blue-600 text-white', card: 'border-blue-300' },
  { en: 'Do', ar: 'نفّذ', desc: 'نفّذ وفقًا للخطة', example: 'غيّر تصميم الصفحة الرئيسية', pos: 'top-1/2 right-0 -translate-y-1/2', text: 'text-indigo-700', active: 'bg-indigo-600 border-indigo-600 text-white', card: 'border-indigo-300' },
  { en: 'Check', ar: 'تحقّق', desc: 'قِس النتائج وقيّم مستوى تحقيق الهدف', example: 'قِس نسبة إكمال التسجيل بعد التغيير وقارنها بخط الأساس والهدف', pos: 'bottom-0 left-1/2 -translate-x-1/2', text: 'text-violet-700', active: 'bg-violet-600 border-violet-600 text-white', card: 'border-violet-300' },
  { en: 'Act', ar: 'تصرّف', desc: 'بناءً على النتائج، اعتمد ما نجح أو غيّر الخطة وحدد الخطوة التالية', example: 'إذا حقق التغيير الهدف، يمكن اعتماده أو توسيعه؛ وإن لم يحققه، راجع السبب والخطة', pos: 'top-1/2 left-0 -translate-y-1/2', text: 'text-sky-700', active: 'bg-sky-600 border-sky-600 text-white', card: 'border-sky-300' },
]

const goal = 50
// What happens at each step of each loop; the rate after Check reflects the measured result
const loops = [
  [
    'الهدف: رفع نسبة إكمال نموذج التسجيل من 40% (خط الأساس) إلى 50%. الخطة: إعادة تصميم الصفحة الرئيسية لإبراز رابط التسجيل.',
    'نُفّذ التغيير: أصبح رابط التسجيل بارزًا في أعلى الصفحة الرئيسية.',
    'قسنا النتيجة بعد التغيير: ارتفعت نسبة الإكمال إلى 44% فقط. تحسّنت، لكنها لم تبلغ هدف 50%.',
    'الهدف لم يتحقق ← نراجع السبب: الزوار يصلون إلى النموذج لكن كثيرين يتركونه لأنه طويل. نغيّر الخطة ونحدد الخطوة التالية: تقصير النموذج.',
  ],
  [
    'الحلقة الجديدة تبدأ من النتيجة السابقة (44%). الخطة: تقليل حقول نموذج التسجيل من 10 حقول إلى 4 حقول أساسية.',
    'نُفّذ التغيير: نموذج أقصر بأربعة حقول فقط.',
    'قسنا النتيجة: بلغت نسبة الإكمال 52%، أي تحقق الهدف (50%).',
    'الهدف تحقق ← نعتمد التغيير ونوسّعه على نماذج أخرى في الموقع، ثم نختار هدف التحسين التالي.',
  ],
]
// Completion rate shown after each Check (index = loop)
const measured = [44, 52]

const loop = ref(0)
const step = ref(0)
const finished = computed(() => loop.value === 1 && step.value === 3)
const rate = computed(() => {
  if (loop.value === 0) return step.value >= 2 ? measured[0] : 40
  return step.value >= 2 ? measured[1] : measured[0]
})

function next() {
  if (step.value < 3) step.value++
  else if (loop.value < loops.length - 1) { loop.value++; step.value = 0 }
}
function reset() {
  loop.value = 0
  step.value = 0
}
</script>
