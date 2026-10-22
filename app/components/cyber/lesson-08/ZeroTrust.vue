<template>
  <section id="zero-trust" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-8">5. مفهوم نهج انعدام الثقة</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">(نهج انعدام الثقة – Zero Trust)</strong>... نهج أمني لا يمنح الثقة تلقائيًا لمستخدم أو جهاز لمجرد وجوده داخل الشبكة أو ملكيته للمؤسسة.
            تُفحص <strong>الهوية والصلاحيات والسياق</strong> عند طلب الوصول إلى الموارد وفق سياسة المؤسسة.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            صُمم أمان الشبكات التقليدي بشكل أساسي حول حماية المحيط الأمني، بناءً على فرضية أن "داخل شبكة المؤسسة آمن، وخارجها خطر".
            ومع ذلك، مع انتشار الخدمات السحابية والعمل عن بُعد، أصبحت الحدود بين "الداخل" و"الخارج" غير واضحة، وأصبحت التصاميم التي تحمي المحيط الأمني فقط غير كافية.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-teal-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">نهج انعدام الثقة</strong> – التحقق من كل عملية وصول.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">المحيط الأمني</strong> – الحدود التقليدية التي تفترض أن "الداخل آمن"، والتي طمستها الخدمات السحابية والعمل عن بُعد.</p>
        </div>
      </div>

      <!-- Figure 2.2.2 comparison -->
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="rounded-3xl border-2 border-slate-300 overflow-hidden">
          <div class="bg-slate-500 text-white font-bold text-center py-3">الأمان التقليدي</div>
          <div class="p-5 space-y-3 bg-slate-50">
            <div class="rounded-2xl border-2 border-slate-300 bg-white p-4 text-center">
              <div class="font-bold text-slate-700">الخارجي <span class="text-sm font-normal">غير موثوق</span></div>
              <div class="flex justify-center gap-6 mt-2 text-2xl">👤 <span>🖥️</span></div>
            </div>
            <div class="bg-slate-700 text-white text-center text-sm font-bold rounded-lg py-1.5">🧱 جدار الحماية</div>
            <div class="rounded-2xl border-2 border-slate-400 bg-slate-200 p-4 text-center">
              <div class="font-bold text-slate-800">الداخلي <span class="text-sm font-normal">موثوق (بدون تحقق)</span></div>
              <div class="flex justify-center gap-6 mt-2 text-2xl">👤 💻 🗄️</div>
            </div>
          </div>
        </div>
        <div class="rounded-3xl border-2 border-teal-400 overflow-hidden">
          <div class="bg-teal-700 text-white font-bold text-center py-3">الثقة الصفرية (انعدام الثقة)</div>
          <div class="p-5 bg-teal-50/50 h-full">
            <div class="rounded-2xl border-2 border-dashed border-teal-400 bg-white p-4 text-center">
              <div class="font-bold text-teal-800">لا يوجد حاجز داخلي / خارجي</div>
              <div class="flex justify-center gap-4 mt-3 text-2xl">👤 👤 🖥️</div>
              <div class="flex justify-center gap-4 mt-2 text-xl">🔒 🔒 🔒</div>
              <div class="font-bold text-teal-700 mt-2">▼ تحقق من كل وصول ▼</div>
              <div class="flex justify-center gap-6 mt-2 text-2xl">📱 🗄️</div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-sm font-bold text-slate-500 -mt-8 mb-12">الشكل 2.2.2 – مع تلاشي الخط الفاصل بين "الداخلي/الخارجي" بسبب الحوسبة السحابية والعمل عن بُعد، يتم التحقق من كل وصول.</p>

      <!-- Scenario lab -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 mb-10">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 class="text-xl font-bold text-slate-900">🧪 من يحصل على الوصول؟ قارن بين النهجين</h3>
          <div class="flex bg-white border border-slate-200 rounded-2xl p-1 shrink-0">
            <button v-for="m in models" :key="m.key" @click="model = m.key"
                    class="px-4 py-2 rounded-xl font-bold text-sm transition-colors"
                    :class="model === m.key ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-slate-100'">{{ m.label }}</button>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="s in scenarios" :key="s.text" class="bg-white border border-slate-200 rounded-2xl p-4">
            <div class="flex flex-col md:flex-row md:items-center gap-3">
              <span class="text-3xl shrink-0">{{ s.icon }}</span>
              <div class="flex-1">
                <p class="font-bold text-slate-800">{{ s.text }}</p>
                <div v-if="model === 'zero'" class="flex flex-wrap gap-2 mt-2">
                  <span v-for="c in s.checks" :key="c.name" class="text-xs font-bold px-2 py-1 rounded-lg"
                        :class="c.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'">
                    {{ c.ok ? '✓' : '✗' }} {{ c.name }}
                  </span>
                </div>
                <p v-else class="text-xs text-slate-500 mt-2">{{ s.inside ? 'الطلب من داخل الشبكة ← يُعامل كموثوق دون تحقق.' : 'الطلب من خارج الشبكة ← يُعامل كغير موثوق.' }}</p>
              </div>
              <span class="shrink-0 font-bold px-3 py-1.5 rounded-xl text-sm" :class="decisionClass(s)">{{ decisionText(s) }}</span>
            </div>
            <p class="mt-3 text-sm leading-relaxed" :class="isRight(s) ? 'text-emerald-700' : 'text-rose-700'">{{ model === 'zero' ? s.zeroNote : s.tradNote }}</p>
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          يكون أمان الشبكة في أقوى حالاته عندما تُكدَّس الإجراءات في طبقات متعددة (الدفاع في العمق) ولا يُمنح أي وصول ثقة تلقائيًا (نهج انعدام الثقة)،
          بحيث يصبح من غير المرجح أن يؤدي خرق واحد إلى كشف النظام بأكمله.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const models = [
  { key: 'trad', label: 'الأمان التقليدي' },
  { key: 'zero', label: 'نهج انعدام الثقة' },
]
const model = ref('trad')

// shouldAllow is the safe decision; inside drives the traditional (perimeter) decision
const scenarios = [
  {
    icon: '🦠', text: 'جهاز داخل مبنى المؤسسة أصيب ببرمجية خبيثة ويطلب الوصول إلى قاعدة البيانات',
    inside: true, shouldAllow: false,
    checks: [{ name: 'الهوية', ok: true }, { name: 'الصلاحيات', ok: true }, { name: 'السياق: الجهاز مصاب وغير محدّث', ok: false }],
    tradNote: '✗ خطر: الجهاز داخل الشبكة فيُعامل كموثوق، فتصل البرمجية الخبيثة إلى البيانات.',
    zeroNote: '✓ رغم أن الجهاز داخل الشبكة، كشف فحص السياق أنه غير آمن فرُفض الوصول.',
  },
  {
    icon: '🏠', text: 'معلمة تعمل من المنزل بجهاز المدرسة المحدّث وتطلب نظام الدرجات الذي تملك صلاحيته',
    inside: false, shouldAllow: true,
    checks: [{ name: 'الهوية (مصادقة متعددة العوامل)', ok: true }, { name: 'الصلاحيات', ok: true }, { name: 'السياق: جهاز موثوق ومحدّث', ok: true }],
    tradNote: '✗ مشكلة: تُعامل كغير موثوقة لأنها خارج الشبكة، رغم أن طلبها مشروع.',
    zeroNote: '✓ تحقق النظام من الهوية والصلاحيات والسياق، فسمح بالوصول من أي مكان.',
  },
  {
    icon: '👤', text: 'موظف داخل الشبكة يطلب ملفات قسم الرواتب دون أن يملك صلاحية لها',
    inside: true, shouldAllow: false,
    checks: [{ name: 'الهوية', ok: true }, { name: 'الصلاحيات: لا يملك صلاحية', ok: false }, { name: 'السياق', ok: true }],
    tradNote: '✗ خطر: الموظف داخل المحيط الأمني فيصل إلى ما لا يخصه.',
    zeroNote: '✓ الهوية صحيحة لكن الصلاحيات لا تسمح، فرُفض الوصول.',
  },
]

function decision(s) {
  return model.value === 'zero' ? s.checks.every(c => c.ok) : s.inside
}
function isRight(s) {
  return decision(s) === s.shouldAllow
}
function decisionText(s) {
  return decision(s) ? 'سماح ✓' : 'رفض ✗'
}
function decisionClass(s) {
  return decision(s) ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
}
</script>
