<template>
  <section id="media-types" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full z-10">
      
      <div class="text-center mb-20 opacity-0 translate-y-8" ref="headerRef">
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.mediaTypes.title }}</h2>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium">{{ data.mediaTypes.description }}</p>
      </div>
      
      <!-- Interactive Media Explorer -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16" ref="cardsRef">
        
        <div v-for="(cat, index) in data.mediaTypes.categories" :key="cat.id"
             class="media-card opacity-0 translate-y-12 relative bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white shadow-2xl shadow-maintext/5 flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
          
          <!-- Colored Glow Background -->
          <div class="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
               :class="index === 0 ? 'bg-primary' : index === 1 ? 'bg-accent' : 'bg-blue-500'"></div>
               
          <div class="relative z-10 mb-10">
            <h3 class="text-3xl font-black mb-4 tracking-tight"
                :class="index === 0 ? 'text-primary' : index === 1 ? 'text-accent' : 'text-blue-600'">
              {{ cat.title }}
            </h3>
            <p class="text-lg text-mutedtext font-medium leading-relaxed">{{ cat.description }}</p>
          </div>
          
          <div class="grid grid-cols-2 gap-5 mt-auto relative z-10">
            <div v-for="(ex, i) in cat.examples" :key="i"
                 @mouseenter="showTooltip(ex, cat.title, $event, index)"
                 @mouseleave="hideTooltip"
                 class="relative p-5 rounded-[1.5rem] border border-border bg-surface/50 hover:bg-white hover:border-transparent transition-all duration-300 text-center flex flex-col items-center gap-3 cursor-pointer group/item hover:shadow-xl hover:-translate-y-1"
                 :class="index === 0 ? 'hover:shadow-primary/20' : index === 1 ? 'hover:shadow-accent/20' : 'hover:shadow-blue-500/20'">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300"
                   :class="index === 0 ? 'bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white' : 
                           index === 1 ? 'bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-white' : 
                           'bg-blue-500/10 text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-white'">
                <component :is="getIconFor(ex)" size="28" stroke-width="1.5" />
              </div>
              <span class="font-bold text-maintext">{{ ex }}</span>
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Modern Tooltip -->
      <div class="fixed z-50 pointer-events-none transition-all duration-200 ease-out"
           :class="tooltip.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
           :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px', transform: 'translate(-50%, -120%)' }">
        <div class="bg-maintext text-white px-6 py-4 rounded-2xl shadow-2xl flex flex-col items-center min-w-[140px]">
          <span class="font-black text-lg mb-1">{{ tooltip.item }}</span>
          <span class="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white/90">{{ tooltip.category }}</span>
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-maintext rotate-45 rounded-sm"></div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-01'
import { Type, Image, Music, Video, Tv, Radio, Newspaper, Smartphone, Globe, FileDigit, Usb, Disc, Cloud } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData
const headerRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

const tooltip = ref({ visible: false, x: 0, y: 0, item: '', category: '', index: 0 })

const showTooltip = (item: string, category: string, event: MouseEvent, index: number) => {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  
  tooltip.value = {
    visible: true,
    x: rect.left + rect.width / 2,
    y: rect.top,
    item,
    category,
    index
  }
}

const hideTooltip = () => {
  tooltip.value.visible = false
}

const getIconFor = (name: string) => {
  const map: Record<string, any> = {
    "النص": Type, "الصور": Image, "الصوت": Music, "الفيديو": Video,
    "التلفزيون": Tv, "الراديو": Radio, "الصحف": Newspaper, "الهاتف": Smartphone, "الإنترنت": Globe,
    "الورق": FileDigit, "محركات USB": Usb, "أقراص DVD": Disc, "التخزين السحابي": Cloud
  }
  return map[name] || Globe
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
    })
  }

  if (cardsRef.value) {
    const cards = cardsRef.value.querySelectorAll('.media-card')
    gsap.to(cards, {
      scrollTrigger: { trigger: cardsRef.value, start: 'top 80%' },
      y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.2)'
    })
  }
})
</script>
