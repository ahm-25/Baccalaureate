<template>
  <section id="timeline" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <div class="max-w-7xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span class="text-lg font-bold text-primary">القسم الأول</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">1. تاريخ تكنولوجيا المعلومات (IT)</h2>
        <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
          خمس مراحل رئيسية غيّرت العالم
        </p>
      </div>

      <!-- Horizontal Timeline -->
      <div class="w-full overflow-x-auto pb-8 hide-scrollbar">
        <div class="flex items-start justify-between min-w-[900px] relative px-4">
          <!-- Line -->
          <div class="absolute top-8 left-8 right-8 h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 z-0 rounded-full"></div>
          
          <button v-for="(period, index) in periods" :key="index"
                  @click="activePeriod = index"
                  class="relative z-10 flex flex-col items-center group focus:outline-none w-44 shrink-0 transition-transform hover:-translate-y-2">
            <div class="w-16 h-16 rounded-full border-4 flex items-center justify-center bg-white transition-all duration-300 shadow-md"
                 :class="activePeriod === index ? 'border-primary scale-110 shadow-primary/30' : 'border-border group-hover:border-primary/50'">
              <component :is="period.icon" class="w-7 h-7" :class="activePeriod === index ? 'text-primary' : 'text-mutedtext'" />
            </div>
            <h3 class="mt-4 font-black text-center leading-tight transition-colors"
                :class="activePeriod === index ? 'text-primary text-lg' : 'text-maintext text-base'">{{ period.era }}</h3>
          </button>
        </div>
      </div>

      <!-- Expanded Card -->
      <div class="w-full max-w-5xl mx-auto mt-12">
        <Transition name="fade" mode="out-in">
          <div :key="activePeriod" class="bg-white rounded-3xl border border-border shadow-2xl overflow-hidden">
            <!-- Header -->
            <div class="bg-gradient-to-r from-primary to-primary/80 p-8 text-white">
              <div class="flex items-center gap-4 mb-4">
                <component :is="periods[activePeriod].icon" class="w-10 h-10" />
                <h3 class="text-3xl font-black">{{ periods[activePeriod].era }}</h3>
              </div>
            </div>
            
            <div class="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Technology -->
              <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <div class="flex items-center gap-3 mb-4">
                  <Cpu class="w-6 h-6 text-blue-600" />
                  <h4 class="font-black text-blue-800 text-xl">التكنولوجيا</h4>
                </div>
                <p class="text-lg font-bold text-blue-900 leading-relaxed">{{ periods[activePeriod].tech }}</p>
              </div>

              <!-- Social Impact -->
              <div class="bg-green-50 p-6 rounded-2xl border border-green-200">
                <div class="flex items-center gap-3 mb-4">
                  <Users class="w-6 h-6 text-green-600" />
                  <h4 class="font-black text-green-800 text-xl">التأثير على المجتمع</h4>
                </div>
                <p class="text-lg font-bold text-green-900 leading-relaxed">{{ periods[activePeriod].social }}</p>
              </div>

              <!-- Fact -->
              <div class="md:col-span-2 bg-accent/10 p-6 rounded-2xl border border-accent/30 flex items-start gap-4">
                <Info class="w-6 h-6 text-accent shrink-0 mt-1" />
                <p class="text-lg font-bold text-maintext leading-relaxed">{{ periods[activePeriod].fact }}</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Server, Monitor, Globe2, Smartphone, Cloud, Cpu, Users, Info } from 'lucide-vue-next'

const activePeriod = ref(0)

const periods = [
  {
    era: 'الأربعينيات – الستينيات',
    icon: Server,
    tech: 'ظهور الحواسيب الإلكترونية ومنها ENIAC واستخدام الصمامات المفرغة.',
    social: 'استخدمت أساسًا للأغراض العسكرية والحسابات العلمية.',
    fact: 'كانت الحواسب الأولى تملأ غرفة بأكملها وتزن عشرات الأطنان.'
  },
  {
    era: 'السبعينيات – الثمانينيات',
    icon: Monitor,
    tech: 'انتشار الحواسب الشخصية (PCs) التي أصبحت أصغر حجمًا وأقل تكلفة.',
    social: 'بداية استخدام الأفراد للحاسب في المنازل والمكاتب.',
    fact: 'تحولت الحواسب من أجهزة ضخمة تملأ الغرف إلى أجهزة تناسب المكاتب.'
  },
  {
    era: 'التسعينيات',
    icon: Globe2,
    tech: 'إتاحة الإنترنت للاستخدام التجاري وظهور الويب (WWW).',
    social: 'انتشار الوصول العالمي إلى المعلومات والبريد الإلكتروني.',
    fact: 'الإنترنت حوّل العالم إلى قرية صغيرة يمكن فيها الوصول لأي معلومة بسرعة.'
  },
  {
    era: 'العقد الأول من الألفية',
    icon: Smartphone,
    tech: 'ظهور الهواتف الذكية (آيفون وغيره) التي جمعت الكمبيوتر والهاتف والكاميرا.',
    social: 'انتشار سريع وواسع للإنترنت عبر الهواتف المحمولة.',
    fact: 'أصبح الإنترنت متاحًا في أيدي الجميع عبر أجهزة صغيرة ومحمولة.'
  },
  {
    era: 'من العقد الثاني فصاعدًا',
    icon: Cloud,
    tech: 'انتشار الحوسبة السحابية وتقديم موارد تكنولوجيا المعلومات كخدمات عبر الإنترنت.',
    social: 'تحليل البيانات الضخمة والذكاء الاصطناعي وتحول تكنولوجيا المعلومات إلى خدمة.',
    fact: 'أصبح بإمكان أي شخص استخدام قوة حوسبية ضخمة دون امتلاك أجهزة باهظة الثمن.'
  }
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
