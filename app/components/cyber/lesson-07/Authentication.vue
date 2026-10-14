<template>
  <section id="authentication" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-8">2. استخدام المصادقة في الخدمات الفعلية</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            تستخدم <strong class="text-rose-600">المصادقة الثنائية (2FA)</strong> عاملين مختلفين لإثبات الهوية. أما
            <strong class="text-rose-600">المصادقة متعددة العوامل (MFA)</strong> فتستخدم عاملين أو أكثر من فئات مثل المعرفة والحيازة والسمات الحيوية.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            يقلل استخدام عامل مستقل ثانٍ احتمال الدخول غير المصرح به إذا كُشفت كلمة المرور. فبعد إدخال كلمة المرور، قد يُطلب رمز من تطبيق مصادقة
            أو جهاز يملكه المستخدم؛ وعندئذ لا تكفي معرفة كلمة المرور وحدها للدخول.
          </p>
        </div>

        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-sky-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">المصادقة الثنائية – 2FA</strong> <span class="text-xs text-rose-500" dir="ltr">(Two-Factor Authentication)</span>
            – استخدام عاملين مستقلين من فئتين مختلفتين لإثبات الهوية.
          </p>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">المصادقة متعددة العوامل</strong> <span class="text-xs text-rose-500" dir="ltr">(MFA – Multi-Factor Authentication)</span>
            – استخدام عاملين أو أكثر من فئات مختلفة، مثل المعرفة والحيازة والسمات الحيوية.
          </p>
        </div>
      </div>

      <!-- Factor categories -->
      <div class="grid md:grid-cols-3 gap-4 mb-10">
        <div v-for="c in categories" :key="c.key" class="bg-white rounded-2xl border-2 p-5" :class="c.border">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">{{ c.icon }}</span>
            <div>
              <h4 class="font-bold text-lg" :class="c.text">{{ c.name }}</h4>
              <span class="text-sm text-slate-500">{{ c.hint }}</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="f in factors.filter(f => f.cat === c.key)" :key="f.name" class="text-sm px-2 py-1 rounded-lg" :class="c.chip">{{ f.name }}</span>
          </div>
        </div>
      </div>

      <!-- 2FA checker -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 mb-12">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 جرّب بنفسك: هل هذه مصادقة ثنائية؟</h3>
        <p class="text-slate-600 mb-6">اختر عاملين للمصادقة، وشاهد هل يحققان شرط 2FA (فئتان مختلفتان).</p>

        <div class="flex flex-wrap gap-3 mb-6">
          <button v-for="f in factors" :key="f.name" @click="toggleFactor(f)"
                  class="px-4 py-2 rounded-xl border-2 font-medium transition-all"
                  :class="picked.includes(f) ? catOf(f).selected : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400'">
            {{ catOf(f).icon }} {{ f.name }}
          </button>
        </div>

        <div class="min-h-[72px]">
          <p v-if="picked.length < 2" class="text-slate-500 font-medium">اخترت {{ picked.length }} من 2…</p>
          <div v-else-if="picked[0].cat !== picked[1].cat" class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium">
            ✅ <strong>مصادقة ثنائية صحيحة:</strong> {{ catOf(picked[0]).name }} + {{ catOf(picked[1]).name }} — عاملان مستقلان من فئتين مختلفتين.
          </div>
          <div v-else class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 font-medium">
            ❌ <strong>ليست مصادقة ثنائية:</strong> العاملان من فئة واحدة ({{ catOf(picked[0]).name }})، فإذا عرف المهاجم أحدهما يمكنه غالبًا الحصول على الآخر بالطريقة نفسها.
          </div>
        </div>
      </div>

      <!-- Services table -->
      <p class="text-lg text-slate-700 mb-4">
        <span class="font-bold text-slate-400">(3)</span>
        توضح الأمثلة التالية استخدام عاملين من فئتين مختلفتين في خدمات متنوعة.
      </p>
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table class="w-full text-right min-w-[560px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/3">الخدمة</th>
              <th class="p-4 font-bold">أمثلة على المصادقة المستخدمة</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="s in services" :key="s.service" class="border-t border-slate-200">
              <td class="p-4 font-bold text-slate-900">{{ s.icon }} {{ s.service }}</td>
              <td class="p-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-3 py-1 rounded-lg text-sm font-medium" :class="chipFor(s.a.cat)">{{ s.a.name }} ({{ catName(s.a.cat) }})</span>
                  <span class="font-bold text-slate-400">+</span>
                  <span class="px-3 py-1 rounded-lg text-sm font-medium" :class="chipFor(s.b.cat)">{{ s.b.name }} ({{ catName(s.b.cat) }})</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const categories = [
  { key: 'know', name: 'المعرفة', hint: 'شيء تعرفه', icon: '🧠', border: 'border-sky-200', text: 'text-sky-800', chip: 'bg-sky-50 text-sky-800', selected: 'bg-sky-100 border-sky-500 text-sky-900' },
  { key: 'have', name: 'الحيازة', hint: 'شيء تملكه', icon: '📱', border: 'border-amber-200', text: 'text-amber-800', chip: 'bg-amber-50 text-amber-800', selected: 'bg-amber-100 border-amber-500 text-amber-900' },
  { key: 'bio', name: 'السمات الحيوية', hint: 'شيء يميّز جسمك', icon: '👆', border: 'border-emerald-200', text: 'text-emerald-800', chip: 'bg-emerald-50 text-emerald-800', selected: 'bg-emerald-100 border-emerald-500 text-emerald-900' },
]

const factors = [
  { name: 'كلمة المرور', cat: 'know' },
  { name: 'رمز PIN', cat: 'know' },
  { name: 'سؤال سري', cat: 'know' },
  { name: 'كلمة مرور لمرة واحدة', cat: 'have' },
  { name: 'رسالة SMS على الهاتف', cat: 'have' },
  { name: 'بطاقة دخول / بطاقة IC', cat: 'have' },
  { name: 'بصمة الإصبع', cat: 'bio' },
  { name: 'التعرف على الوجه', cat: 'bio' },
]

const services = [
  { icon: '🏦', service: 'الخدمات المصرفية عبر الإنترنت', a: { name: 'كلمة المرور', cat: 'know' }, b: { name: 'كلمة مرور لمرة واحدة', cat: 'have' } },
  { icon: '💬', service: 'تسجيل الدخول إلى وسائل التواصل الاجتماعي', a: { name: 'كلمة المرور', cat: 'know' }, b: { name: 'المصادقة عبر الرسائل القصيرة SMS', cat: 'have' } },
  { icon: '🏢', service: 'الدخول إلى مبنى مؤمَّن', a: { name: 'بطاقة دخول', cat: 'have' }, b: { name: 'بصمة إصبع', cat: 'bio' } },
  { icon: '🛒', service: 'التسوق الإلكتروني', a: { name: 'كلمة المرور', cat: 'know' }, b: { name: 'التحقق من هوية بطاقة الائتمان', cat: 'have' } },
]

const catOf = (f) => categories.find(c => c.key === f.cat)
const catName = (key) => categories.find(c => c.key === key).name
const chipFor = (key) => categories.find(c => c.key === key).chip

const picked = ref([])
function toggleFactor(f) {
  const i = picked.value.indexOf(f)
  if (i !== -1) picked.value.splice(i, 1)
  else if (picked.value.length < 2) picked.value.push(f)
  else picked.value = [picked.value[1], f]
}
</script>
