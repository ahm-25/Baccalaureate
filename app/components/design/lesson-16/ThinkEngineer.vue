<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        ناديك المدرسي يدير صفحة ويب لفعاليته السنوية، لكن عددًا قليلًا من الطلاب يسجلون من خلالها. أنت تقود جولة واحدة من التحسين باستخدام دورة PDCA.
      </p>

      <div class="space-y-6">
        <!-- Step 1: baseline -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-violet-900">قِس خط الأساس</h3>
          </div>
          <p class="text-slate-600 mb-4">
            حدّد رقمًا يمكنك قياسه قبل بدء الدورة، مثل عدد الزملاء الذين يجدون رابط التسجيل خلال خمس ثوانٍ من أصل عشرة، وسجّل النتيجة كنقطة بداية.
          </p>
          <p class="font-bold text-slate-700 mb-2">اضغط على كل زميل وجد الرابط خلال خمس ثوانٍ:</p>
          <div class="flex flex-wrap gap-2 mb-3">
            <button v-for="(s, i) in baseline" :key="i" @click="baseline[i] = !s"
                    class="w-12 h-12 rounded-xl border-2 text-xl transition-colors"
                    :class="s ? 'bg-emerald-100 border-emerald-500' : 'bg-slate-50 border-slate-200'">{{ s ? '✅' : '🧑‍🎓' }}</button>
          </div>
          <p class="font-bold" :class="found > 0 ? 'text-violet-700' : 'text-slate-400'">خط الأساس: {{ found }} من 10 يجدون الرابط خلال خمس ثوانٍ.</p>
        </div>

        <!-- Step 2: plan one change -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-blue-900">خطّط لتغيير واحد</h3>
          </div>
          <p class="text-slate-600 mb-4">
            من بين المستخدمين الذين راقبتهم، حدد أكبر عائق واحد (لفئة محددة، مثل طالب يفتح الصفحة على شاشة هاتف صغيرة) وخطّط لتغيير واحد لإصلاحه. اذكر الهدف كرقم.
          </p>
          <div class="grid md:grid-cols-2 gap-3 mb-4">
            <textarea rows="2" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="أكبر عائق واحد (ولأي فئة)…"></textarea>
            <textarea rows="2" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="التغيير الواحد الذي ستجربه…"></textarea>
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <span class="font-bold text-slate-700">الهدف:</span>
            <button @click="target > 1 && target--" class="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold">−</button>
            <span class="text-2xl font-black text-blue-700">{{ target }}</span>
            <button @click="target < 10 && target++" class="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold">+</button>
            <span class="text-slate-700">من 10 يجدونه خلال خمس ثوانٍ</span>
          </div>
          <p v-if="target <= found" class="mt-2 text-sm text-amber-700">الهدف يجب أن يكون أعلى من خط الأساس ({{ found }} من 10) حتى يكون تحسينًا قابلًا للقياس.</p>
        </div>

        <!-- Step 3: do / check / act & decide -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">نفّذ، تحقّق، تصرّف – وقرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            صف كيف ستنفذ التغيير وتقيس النتيجة وتحدد الخطوة التالية. ثم اختر فرقًا واضحًا بين نسختين A وB، وحدد المقياس الذي ستقارنه وتصميم توزيع المستخدمين المناسب.
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
            <strong>هل تواجه صعوبة؟</strong> ابدأ من رقمك المقاس (تحقّق)، واختر العائق الوحيد الذي يكشفه، وخطّط لإصلاح واحد (خطّط)، ثم كرّر الحلقة – لا تغيّر كل شيء دفعة واحدة.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>خط الأساس:</strong> مثلًا 3 من 10 يجدون رابط التسجيل خلال خمس ثوانٍ.
            <br><strong>خطّط:</strong> أكبر عائق لطلاب الهاتف أن رابط التسجيل يقع أسفل الصفحة؛ التغيير الواحد: نقل زر «سجّل الآن» إلى أعلى الصفحة. الهدف: 8 من 10.
            <br><strong>نفّذ:</strong> ننقل الزر فقط دون تغيير أي شيء آخر.
            <br><strong>تحقّق:</strong> نعيد القياس مع عشرة زملاء جدد ونقارن بخط الأساس والهدف.
            <br><strong>تصرّف:</strong> إن تحقق الهدف نعتمد التغيير، وإلا نراجع السبب ونخطط لتغيير آخر في حلقة جديدة.
            <br><strong>اختبار A/B:</strong> A = الزر في مكانه، B = الزر أعلى الصفحة؛ المقياس: نسبة إتمام التسجيل؛ والتوزيع: تقسيم الزوار عشوائيًا بين النسختين.
            <br><strong>القرار:</strong> التحسين عبر حلقة PDCA واحدة مقاسة؛ لأن تغييرًا واحدًا مقاسًا يوضح ما الذي أحدث الفرق، بينما إعادة تصميم كل شيء دفعة واحدة لا تكشف ذلك.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const baseline = reactive(Array(10).fill(false))
const found = computed(() => baseline.filter(Boolean).length)
const target = ref(8)

const choices = ['إعادة تصميم كل شيء دفعة واحدة', 'التحسين عبر حلقة PDCA واحدة مقاسة']
const choice = ref(null)
const showModel = ref(false)
</script>
