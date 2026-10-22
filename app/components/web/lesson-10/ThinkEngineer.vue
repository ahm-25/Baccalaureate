<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        تريد عيادة تطبيق ويب يحجز فيه المرضى المواعيد، ويتحققون من الأوقات المتاحة، ويطّلعون على زياراتهم السابقة. أنت تخطط لطبقاته الثلاث.
      </p>

      <div class="space-y-6">
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-violet-900">وزّع المهام</h3>
          </div>
          <p class="text-slate-600 mb-4">
            بالنسبة لثلاث ميزات – نموذج الحجز، والتحقق من الأوقات المتاحة، وتخزين الزيارات السابقة – حدد أي طبقة (الواجهة الأمامية، أو الواجهة الخلفية، أو قاعدة البيانات) ينبغي أن تتولى كل منها، ولماذا.
          </p>
          <CyberLesson07ChoiceItems :items="features" :options="layerOptions" />
          <button @click="showWhy = !showWhy" class="mt-4 text-violet-700 font-bold bg-violet-50 hover:bg-violet-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showWhy ? 'إخفاء التعليل' : 'أظهر التعليل' }}
          </button>
          <div v-if="showWhy" class="mt-3 grid md:grid-cols-3 gap-3">
            <div v-for="f in features" :key="f.text" class="p-3 rounded-xl bg-white border border-violet-200 text-sm text-slate-700">
              <strong class="text-violet-800">{{ f.text }}:</strong> {{ f.why }}
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-rose-900">شخّص العطل</h3>
          </div>
          <p class="text-slate-600 mb-4">
            تفتح صفحة الحجز، لكن لا تظهر أوقات متاحة. ما الأجزاء التي قد تكون سبب المشكلة؟ وما المعلومة التي تحتاج إليها لتتأكد؟ اضغط على كل طبقة لترى احتمالًا.
          </p>
          <div class="grid md:grid-cols-3 gap-3">
            <button v-for="(c, i) in causes" :key="c.layer" @click="cause = i"
                    class="text-right p-4 rounded-xl border-2 transition-colors"
                    :class="cause === i ? 'bg-rose-50 border-rose-400' : 'bg-slate-50 border-slate-200 hover:border-slate-400'">
              <span class="text-2xl">{{ c.icon }}</span>
              <h4 class="font-bold text-slate-800 mt-1">{{ c.layer }}</h4>
              <p v-if="cause === i" class="text-sm text-slate-700 mt-2 leading-relaxed">
                <strong>احتمال:</strong> {{ c.problem }}<br><strong>للتأكد:</strong> {{ c.check }}
              </p>
            </button>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بما إذا كان ينبغي للعيادة أن تنظّم مسؤوليات العرض والمعالجة والبيانات في طبقات واضحة، وبرّر فائدة فصل المسؤوليات بسببين.
            <strong>في أزواج</strong>، قارنوا توزيعاتكم واتفقوا معًا على أين ينتمي التحقق من الأوقات المتاحة.
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
            <strong>هل تواجه صعوبة؟</strong> الواجهة الأمامية تعرض وتجمع؛ والواجهة الخلفية تقرر وتعالج؛ وقاعدة البيانات تخزن وتسترجع.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> تنظيم مسؤوليات العرض والمعالجة والبيانات في طبقات واضحة، والتحقق من الأوقات المتاحة ينتمي إلى الواجهة الخلفية.
            <br><strong>السبب 1:</strong> عند حدوث عطل (مثل عدم ظهور الأوقات المتاحة) يسهل تحديد الطبقة المسؤولة عن المشكلة وفحصها وحدها.
            <br><strong>السبب 2:</strong> يمكن تعديل أو تطوير كل طبقة دون إرباك الطبقات الأخرى؛ فمثلًا يمكن تغيير شكل صفحة الحجز دون تغيير قواعد التحقق أو طريقة تخزين البيانات.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const layerOptions = ['أ الواجهة الأمامية', 'ب الواجهة الخلفية', 'ج قاعدة البيانات']
const features = [
  { text: 'نموذج الحجز', ans: 0, why: 'يراه المريض ويتعامل معه في المتصفح؛ يعرض الحقول ويجمع ما يختاره.' },
  { text: 'التحقق من الأوقات المتاحة', ans: 1, why: 'معالجة تطبق قواعد العيادة على الخادم؛ تقارن الطلب بالمواعيد المحجوزة.' },
  { text: 'تخزين الزيارات السابقة', ans: 2, why: 'بيانات تُحفظ وتُسترجع عند الحاجة.' },
]

const causes = [
  { icon: '🖥️', layer: 'الواجهة الأمامية', problem: 'الصفحة استقبلت الأوقات لكنها لا تعرضها بشكل صحيح.', check: 'هل وصلت بيانات الأوقات إلى المتصفح أم لا؟' },
  { icon: '⚙️', layer: 'الواجهة الخلفية', problem: 'خطأ في معالجة الطلب أو في قواعد التحقق من الأوقات.', check: 'هل يرسل الخادم استجابة صحيحة عند طلب الأوقات؟' },
  { icon: '🗄️', layer: 'قاعدة البيانات', problem: 'بيانات الأوقات غير مخزنة أو لا يمكن الوصول إليها.', check: 'هل توجد مواعيد متاحة مسجلة في طبقة البيانات؟' },
]
const cause = ref(null)

const choices = ['خلط مسؤوليات العرض والمعالجة والبيانات دون فصل واضح', 'تنظيم مسؤوليات العرض والمعالجة والبيانات في طبقات واضحة']
const choice = ref(null)
const showWhy = ref(false)
const showModel = ref(false)
</script>
