<template>
  <section id="responsive-design" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-orange-800 mb-8">3. التصميم المتجاوب</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">(التصميم المتجاوب)</strong>... مفهوم تصميمي يُضبط فيه التخطيط تلقائيًا وفقًا لأحجام الشاشات المختلفة مثل أجهزة الكمبيوتر والهواتف الذكية والأجهزة اللوحية.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> يساعد التصميم المتجاوب الصفحة على التكيف مع أحجام الشاشات المختلفة وتحسين سهولة استخدامها.</p>
          <p>
            <span class="font-bold text-slate-400">(3)</span>
            يستخدم كثير من الناس الويب عبر الهواتف، لذلك يراعي المطورون الشاشات الصغيرة منذ بداية التصميم. ويسمى ذلك أحيانًا نهج <strong class="text-orange-700">الأولوية للجوال</strong>.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-orange-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التصميم المتجاوب</strong> – يتكيف التخطيط مع حجم الشاشة.</p>
        </div>
      </div>

      <!-- Device switcher -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-slate-900">🧪 الصفحة نفسها على ثلاثة أجهزة</h3>
            <p class="text-slate-600 mt-1">بدّل الجهاز، وشاهد كيف يعيد التصميم المتجاوب تنسيق العرض ليناسب كل حجم شاشة.</p>
          </div>
          <div class="flex bg-white border border-slate-200 rounded-2xl p-1 shrink-0">
            <button v-for="d in devices" :key="d.key" @click="device = d.key"
                    class="px-3 py-2 rounded-xl font-bold text-sm transition-colors flex items-center gap-1.5"
                    :class="device === d.key ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'">
              <component :is="d.icon" class="w-4 h-4" /> {{ d.label }}
            </button>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="bg-slate-800 p-3 transition-all duration-500 shadow-xl"
               :class="current.frame" :style="{ width: current.width }">
            <div class="bg-white overflow-hidden transition-all duration-500" :class="current.screen">
              <div class="bg-orange-600 text-white px-3 py-2 flex items-center justify-between">
                <span class="font-black text-sm">📰 موقعي</span>
                <span v-if="device === 'phone'" class="text-lg leading-none">☰</span>
                <span v-else class="flex gap-3 text-xs font-bold"><span>الرئيسية</span><span>الأخبار</span><span>تواصل</span></span>
              </div>
              <div class="p-3 bg-orange-50">
                <div class="h-16 rounded-lg bg-gradient-to-l from-amber-300 to-orange-300 flex items-center justify-center font-bold text-orange-900 text-sm">صورة رئيسية</div>
              </div>
              <div class="p-3 grid gap-2 transition-all duration-500" :class="current.cols">
                <div v-for="n in 3" :key="n" class="rounded-lg border border-slate-200 p-2">
                  <div class="h-8 rounded bg-sky-100 mb-1.5"></div>
                  <div class="h-1.5 rounded bg-slate-200 mb-1"></div>
                  <div class="h-1.5 rounded bg-slate-200 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-6 text-center font-bold text-slate-700">{{ current.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Monitor, Tablet, Smartphone } from 'lucide-vue-next'

const devices = [
  { key: 'desktop', label: 'كمبيوتر', icon: Monitor, width: '100%', frame: 'rounded-xl max-w-[640px]', screen: 'rounded-md', cols: 'grid-cols-3', note: 'شاشة كبيرة: ثلاثة أعمدة، والقائمة ظاهرة بالكامل.' },
  { key: 'tablet', label: 'لوحي', icon: Tablet, width: '420px', frame: 'rounded-3xl max-w-full', screen: 'rounded-xl', cols: 'grid-cols-2', note: 'شاشة متوسطة: عمودان فقط ليبقى المحتوى مقروءًا.' },
  { key: 'phone', label: 'هاتف', icon: Smartphone, width: '240px', frame: 'rounded-[2rem]', screen: 'rounded-2xl', cols: 'grid-cols-1', note: 'شاشة صغيرة: عمود واحد، والقائمة تتحول إلى زر ☰ — هنا تظهر فائدة نهج الأولوية للجوال.' },
]
const device = ref('desktop')
const current = computed(() => devices.find(d => d.key === device.value))
</script>
