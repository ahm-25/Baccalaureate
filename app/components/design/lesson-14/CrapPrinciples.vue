<template>
  <section id="crap-principles" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-fuchsia-800 mb-8">3. المبادئ الأربعة للتصميم (مبادئ CRAP)</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">
        <span class="font-bold text-slate-400">(1)</span>
        تساعد المبادئ البصرية الأربعة الآتية على تنظيم الشكل وجعل الصفحة أسهل للفهم، <strong>لكنها لا تحل محل معايير قابلية الاستخدام أو إمكانية الوصول</strong>.
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[680px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/5">المبدأ</th>
              <th class="p-4 font-bold w-1/3">الوصف (الغرض)</th>
              <th class="p-4 font-bold">تقنيات وأمثلة محددة</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="p in principles" :key="p.key" class="border-t border-slate-200 align-top">
              <td class="p-4 font-bold" :class="p.text">{{ p.icon }} {{ p.name }}<div class="text-xs font-medium text-slate-400" dir="ltr">{{ p.en }}</div></td>
              <td class="p-4 text-slate-700">{{ p.desc }}</td>
              <td class="p-4 text-slate-600 text-sm leading-relaxed">
                <div v-for="ex in p.examples" :key="ex">• {{ ex }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figure 4.2.2 as a live before/after demo -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <div class="text-center mb-6">
          <span class="inline-block text-xs font-bold text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-3 py-1 rounded-full mb-2">الشكل 4.2.2 – مبادئ تصميم CRAP</span>
          <h3 class="text-xl font-bold text-slate-900">🧪 طبّق كل مبدأ على صفحة المتجر وشاهد الفرق</h3>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <button v-for="p in principles" :key="p.key" @click="on[p.key] = !on[p.key]"
                  class="text-right p-4 rounded-2xl border-2 transition-all"
                  :class="on[p.key] ? p.onClass : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold">{{ p.icon }} {{ p.name }}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-full" :class="on[p.key] ? 'bg-white/70' : 'bg-slate-100'">{{ on[p.key] ? 'مُطبَّق' : 'غير مطبَّق' }}</span>
            </div>
            <div class="text-xs opacity-80">{{ p.short }}</div>
          </button>
        </div>

        <div class="flex gap-2 justify-center mb-6">
          <button @click="setAll(false)" class="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-slate-200 hover:bg-slate-100">✕ سيئ (بدون مبادئ)</button>
          <button @click="setAll(true)" class="px-4 py-2 rounded-xl text-sm font-bold bg-fuchsia-600 text-white hover:bg-fuchsia-700">✓ جيد (كل المبادئ)</button>
        </div>

        <!-- Mock product page -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 max-w-3xl mx-auto">
          <h4 class="transition-all mb-1" :class="on.contrast ? 'text-3xl font-black text-slate-900' : 'text-base font-normal text-slate-500'">عروض الأسبوع</h4>
          <p class="text-sm text-slate-500 mb-4" :class="on.alignment ? 'text-right' : 'text-center'">أفضل الأدوات المدرسية بأسعار مخفضة</p>

          <div class="grid grid-cols-3" :class="on.proximity ? 'gap-5' : 'gap-0.5'">
            <div v-for="(item, i) in products" :key="item.name"
                 class="rounded-xl transition-all"
                 :class="[on.proximity ? 'border border-slate-200 p-3 bg-slate-50' : 'p-1', on.alignment ? 'text-right' : messyAlign[i]]">
              <div class="text-4xl" :class="on.alignment ? '' : messyIndent[i]">{{ item.icon }}</div>
              <div class="mt-1" :class="on.repetition ? 'font-bold text-slate-800 text-sm' : messyName[i]">{{ item.name }}</div>
              <div v-if="on.proximity" class="text-fuchsia-700 font-black">{{ item.price }}</div>
            </div>
          </div>

          <!-- Without proximity the prices drift away from their products -->
          <div v-if="!on.proximity" class="mt-8 text-xs text-slate-500">
            الأسعار: <span v-for="item in products" :key="item.price" class="mx-2">{{ item.price }}</span>
          </div>

          <div class="mt-5" :class="on.alignment ? 'text-right' : 'text-left'">
            <button class="px-5 py-2 rounded-xl transition-all text-sm"
                    :class="on.contrast ? 'bg-fuchsia-600 text-white font-black shadow-md' : 'bg-slate-100 text-slate-400 font-normal'">أضف إلى السلة</button>
          </div>
        </div>

        <p class="mt-6 text-center font-bold" :class="allOn ? 'text-emerald-700' : 'text-slate-600'">
          {{ allOn ? '✓ الآن الأولوية واضحة، والتصميم متسق ومنظم، وكل سعر بجوار منتجه.' : `طبّقت ${count} من 4 مبادئ.` }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'

const principles = [
  { key: 'contrast', icon: '🔆', name: 'التباين', en: 'Contrast', short: 'إبراز أهم العناصر',
    desc: 'جعل أولوية المعلومات واضحة وإبراز أهم العناصر فورًا',
    examples: ['اجعل العناوين واضحة مقارنة بالنص', 'استخدم تباينًا واضحًا للأزرار المهمة مع مراعاة سهولة القراءة وعدم الاعتماد على اللون وحده'],
    text: 'text-fuchsia-700', onClass: 'bg-fuchsia-100 border-fuchsia-500 text-fuchsia-900' },
  { key: 'repetition', icon: '🔁', name: 'التكرار', en: 'Repetition', short: 'توحيد النمط',
    desc: 'تكرار خصائص معينة لتحقيق الاتساق في التصميم ككل، مما يتيح للمستخدمين التنقل دون تشتت',
    examples: ['وحّد اللون والحجم والخط للعناوين في كل صفحة', 'طابق تصميم أيقونات النقاط'],
    text: 'text-pink-700', onClass: 'bg-pink-100 border-pink-500 text-pink-900' },
  { key: 'alignment', icon: '📏', name: 'المحاذاة', en: 'Alignment', short: 'خط أساس مشترك',
    desc: 'محاذاة موضع كل عنصر إلى خط أساس مشترك، مما يمنح الشاشة بأكملها نظامًا',
    examples: ['حاذِ العناصر حسب اتجاه اللغة وشبكة التصميم: في العربية يكون اتجاه النص الأساسي من اليمين إلى اليسار', 'استخدم قواعد محاذاة متسقة'],
    text: 'text-amber-700', onClass: 'bg-amber-100 border-amber-500 text-amber-900' },
  { key: 'proximity', icon: '🧲', name: 'التقارب', en: 'Proximity', short: 'جمع المرتبط معًا',
    desc: 'وضع المعلومات المرتبطة قريبة من بعضها حتى تُدرَك كمجموعة واحدة من أول نظرة',
    examples: ['اجمع صور المنتجات وأسماءها وأسعارها معًا', 'اترك مسافات مناسبة (هوامش) بين العناصر'],
    text: 'text-emerald-700', onClass: 'bg-emerald-100 border-emerald-500 text-emerald-900' },
]

const on = reactive({ contrast: false, repetition: false, alignment: false, proximity: false })
const count = computed(() => Object.values(on).filter(Boolean).length)
const allOn = computed(() => count.value === 4)
function setAll(v) { Object.keys(on).forEach(k => { on[k] = v }) }

const products = [
  { icon: '🎒', name: 'حقيبة مدرسية', price: '650 ج.م' },
  { icon: '✏️', name: 'طقم أقلام', price: '45 ج.م' },
  { icon: '📒', name: 'كشكول', price: '30 ج.م' },
]
// The "before" state: each card styled and aligned differently
const messyName = ['text-lg italic text-sky-600', 'text-xs font-black text-rose-500 uppercase', 'text-sm underline text-amber-700']
const messyAlign = ['text-left', 'text-center', 'text-right']
const messyIndent = ['pl-6', '', 'pr-3']
</script>
