<template>
  <section id="moores-law" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="max-w-6xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">قانون مور</h2>
        <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
          الملاحظة التجريبية القائلة إن عدد الترانزستورات في الدائرة المتكاملة يتضاعف تقريبًا كل عامين.
        </p>
      </div>

      <!-- Not a Physical Law -->
      <div class="bg-accent/10 border-2 border-accent/30 rounded-3xl p-8 max-w-3xl mx-auto mb-16 flex items-start gap-4">
        <AlertTriangle class="w-8 h-8 text-accent shrink-0 mt-1" />
        <div>
          <h3 class="text-xl font-black text-maintext mb-2">انتبه!</h3>
          <p class="text-lg font-bold text-maintext leading-relaxed">
            قانون مور هو <span class="text-primary">اتجاه تاريخي</span> وليس قانونًا فيزيائيًا ثابتًا. إنه ملاحظة لنمط تكرر عبر العقود.
          </p>
        </div>
      </div>

      <!-- Animated Graph -->
      <div class="bg-surface border border-border rounded-3xl p-8 md:p-10 shadow-lg max-w-4xl mx-auto mb-16">
        <h3 class="text-2xl font-black text-maintext mb-8 text-center">نمو عدد الترانزستورات عبر الزمن</h3>
        <div class="relative h-64 md:h-80 flex items-end justify-between gap-2 md:gap-4 px-4">
          <!-- Y-axis label -->
          <div class="absolute -right-2 top-0 text-sm font-bold text-mutedtext -rotate-90 origin-right">عدد الترانزستورات ←</div>
          
          <div v-for="(bar, i) in bars" :key="i" class="flex flex-col items-center flex-1">
            <div class="w-full rounded-t-xl transition-all duration-1000 ease-out relative group cursor-pointer"
                 :class="bar.color"
                 :style="{ height: isVisible ? bar.height : '4px' }">
              <!-- Tooltip -->
              <div class="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-20">
                {{ bar.count }}
              </div>
            </div>
            <span class="text-xs md:text-sm font-bold text-mutedtext mt-3 text-center leading-tight">{{ bar.year }}</span>
          </div>
        </div>
        <!-- X-axis label -->
        <p class="text-center text-sm font-bold text-mutedtext mt-4">← الزمن</p>
      </div>

      <!-- Why it matters -->
      <div class="max-w-4xl mx-auto">
        <h3 class="text-3xl font-black text-maintext text-center mb-10">لماذا هذا مهم؟</h3>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <div v-for="(step, i) in chain" :key="i" class="flex items-center gap-4">
            <div class="bg-surface border-2 border-border p-6 rounded-2xl text-center min-w-[160px] shadow-sm">
              <component :is="step.icon" class="w-8 h-8 mx-auto mb-3" :class="step.iconColor" />
              <p class="font-bold text-maintext text-lg">{{ step.text }}</p>
            </div>
            <ArrowLeft v-if="i < chain.length - 1" class="w-6 h-6 text-mutedtext hidden md:block" />
          </div>
        </div>
        
        <div class="bg-surface border border-border rounded-3xl p-6 mt-10 text-center">
          <p class="text-lg font-bold text-mutedtext leading-relaxed">
            ⚠️ الاستمرار في تصغير الترانزستورات يواجه تحديات هندسية وفيزيائية، مما يدفع الباحثين للبحث عن حلول جديدة.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AlertTriangle, ArrowLeft, Cpu, Zap, MonitorSmartphone, Shrink } from 'lucide-vue-next'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) isVisible.value = true
  }, { threshold: 0.3 })
  
  const el = document.getElementById('moores-law')
  if (el) observer.observe(el)
})

const bars = [
  { year: '1971', height: '8%', count: '2,300', color: 'bg-blue-300' },
  { year: '1980', height: '14%', count: '30,000', color: 'bg-blue-400' },
  { year: '1990', height: '24%', count: '1 مليون', color: 'bg-blue-500' },
  { year: '2000', height: '40%', count: '42 مليون', color: 'bg-primary/70' },
  { year: '2010', height: '60%', count: '2 مليار', color: 'bg-primary' },
  { year: '2020', height: '85%', count: '50 مليار', color: 'bg-purple-600' },
  { year: '2024', height: '95%', count: '100+ مليار', color: 'bg-purple-700' }
]

const chain = [
  { text: 'ترانزستورات أكثر', icon: Cpu, iconColor: 'text-blue-500' },
  { text: 'قدرة حوسبية أعلى', icon: Zap, iconColor: 'text-amber-500' },
  { text: 'معالجات أقوى', icon: Cpu, iconColor: 'text-purple-500' },
  { text: 'أجهزة أصغر وأكثر كفاءة', icon: MonitorSmartphone, iconColor: 'text-green-500' }
]
</script>
