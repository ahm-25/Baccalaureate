<template>
  <section id="hero" class="min-h-screen relative flex items-center justify-center overflow-hidden py-20 px-6 sm:px-12 bg-gradient-to-b from-background to-surface">
    <!-- Premium Abstract Background -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] animate-float opacity-70"></div>
      <div class="absolute top-[30%] -left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-accent/10 rounded-full blur-[100px] animate-float" style="animation-delay: -3s"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-secondary/15 rounded-full blur-[90px] animate-float" style="animation-delay: -1s"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 relative mt-16">

      <!-- Text Content -->
      <div ref="contentRef" class="flex flex-col items-start text-right opacity-0 translate-y-12 lg:col-span-7">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/60 backdrop-blur-md text-primary text-sm font-bold mb-8 border border-white/50 shadow-sm">
          <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
            <GraduationCap size="14" />
          </div>
          {{ data.meta.grade }} • {{ data.meta.lesson }}
        </div>

        <h1 class="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.1] mb-6 text-maintext text-balance tracking-tight">
          {{ data.hero.title }}
        </h1>

        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-primary to-secondary mb-8 text-balance leading-snug">
          «{{ data.hero.subtitle }}»
        </h2>

        <p class="text-lg lg:text-2xl text-mutedtext mb-12 max-w-2xl leading-relaxed font-medium">
          {{ data.hero.description }}
        </p>

        <div class="flex flex-wrap items-center gap-6">
          <button @click="scrollToNext" class="bg-maintext hover:bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl flex items-center gap-4 group">
            ابدأ الدرس
            <div class="bg-white/20 p-1.5 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
              <ArrowDown size="20" class="group-hover:translate-y-0.5 transition-transform" stroke-width="2.5" />
            </div>
          </button>

          <div class="flex items-center gap-3 text-mutedtext font-medium px-6 py-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50">
            <Clock size="20" class="text-primary" />
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wider text-mutedtext/70">المدة المتوقعة</span>
              <span class="text-maintext font-bold text-sm">{{ data.meta.duration }}</span>
            </div>
          </div>
        </div>

        <!-- Three concept cards -->
        <div ref="cardsRef" class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 w-full">
          <div v-for="card in data.hero.cards" :key="card.id"
               class="hero-card bg-white/70 backdrop-blur-md border border-white/60 rounded-[1.75rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                 :class="cardStyles[card.id].wrap">
              <component :is="cardStyles[card.id].icon" size="24" stroke-width="1.8" />
            </div>
            <h3 class="text-xl font-black text-maintext leading-tight">
              {{ card.title }}
              <span class="block text-sm font-bold mt-1" :class="cardStyles[card.id].en">({{ card.en }})</span>
            </h3>
            <p class="text-sm text-mutedtext mt-2 font-medium leading-relaxed">{{ card.description }}</p>
          </div>
        </div>
      </div>

      <!-- Visual: the ethics / laws balance -->
      <div class="relative h-[600px] hidden lg:block lg:col-span-5" ref="visualRef">
        <div class="absolute inset-0 bg-white/30 backdrop-blur-3xl rounded-[3rem] border border-white/60 shadow-2xl shadow-primary/5"></div>

        <!-- Connecting path -->
        <svg class="absolute inset-0 w-full h-full" style="z-index: 1;">
          <path d="M 130 170 Q 250 300 130 430" fill="none" stroke="url(#l2Grad1)" stroke-width="3" stroke-dasharray="8,8" stroke-linecap="round" class="opacity-50" />
          <path d="M 320 210 Q 180 320 340 420" fill="none" stroke="url(#l2Grad2)" stroke-width="3" stroke-dasharray="8,8" stroke-linecap="round" class="opacity-50" />
          <defs>
            <linearGradient id="l2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#E8E5E0" />
              <stop offset="100%" stop-color="#A89CF2" />
            </linearGradient>
            <linearGradient id="l2Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#A89CF2" />
              <stop offset="100%" stop-color="#7C6AE6" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Node 1: Laws -->
        <div class="visual-node absolute top-16 right-12 bg-white shadow-xl shadow-maintext/5 p-6 rounded-3xl border border-white z-10 w-48 text-center transform hover:scale-105 transition-transform duration-500">
          <div class="w-16 h-16 rounded-2xl bg-background flex items-center justify-center mx-auto mb-4 text-mutedtext">
            <Scale size="32" stroke-width="1.5" />
          </div>
          <h3 class="font-bold text-lg text-maintext">قوانين (Laws)</h3>
          <p class="text-xs text-mutedtext mt-2 font-medium">ملزِمة ولها عقوبة</p>
        </div>

        <!-- Node 2: Ethics -->
        <div class="visual-node absolute top-1/2 left-8 -translate-y-1/2 bg-gradient-to-br from-primary to-[#6350d4] shadow-2xl shadow-primary/30 p-8 rounded-[2rem] border border-primary z-20 w-56 text-center transform hover:scale-105 transition-transform duration-500">
          <div class="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-5 text-white border border-white/20 shadow-inner">
            <HeartHandshake size="40" stroke-width="1.5" />
          </div>
          <h3 class="font-bold text-white text-2xl">أخلاقيات (Ethics)</h3>
          <p class="text-sm text-white/80 mt-2 font-medium">اختيار ووعي وضمير</p>
        </div>

        <!-- Node 3: Responsibility -->
        <div class="visual-node absolute bottom-12 right-6 bg-maintext shadow-2xl shadow-maintext/40 p-8 rounded-[2rem] border border-maintext z-30 w-64 text-center transform hover:scale-105 transition-transform duration-500">
          <div class="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5 text-accent border border-accent/20">
            <ShieldCheck size="48" stroke-width="1.5" />
          </div>
          <h3 class="font-bold text-white text-2xl">مسؤولية</h3>
          <p class="text-sm text-white/70 mt-2 font-medium leading-relaxed">كل تصرّف على النت ليه نتيجة</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { GraduationCap, ArrowDown, Clock, Scale, HeartHandshake, ShieldCheck } from 'lucide-vue-next'
import gsap from 'gsap'

const data = lessonData
const contentRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const visualRef = ref<HTMLElement | null>(null)

// Each hero card keeps the palette of the concept it stands for: primary for
// ethics, muted for laws, accent for responsibility.
const cardStyles: Record<string, { icon: any; wrap: string; en: string }> = {
  ethics: { icon: HeartHandshake, wrap: 'bg-primary/10 text-primary border border-primary/20', en: 'text-primary' },
  laws: { icon: Scale, wrap: 'bg-maintext/5 text-maintext border border-border', en: 'text-mutedtext' },
  responsibility: { icon: ShieldCheck, wrap: 'bg-accent/10 text-accent border border-accent/20', en: 'text-accent' }
}

const scrollToNext = () => {
  const next = document.getElementById('opening')
  if (next) next.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  if (contentRef.value) {
    gsap.to(contentRef.value, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.1
    })
  }

  if (cardsRef.value) {
    gsap.from(cardsRef.value.querySelectorAll('.hero-card'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.7
    })
  }

  if (visualRef.value) {
    const nodes = visualRef.value.querySelectorAll('.visual-node')
    gsap.from(nodes, {
      scale: 0.8,
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.2,
      ease: 'back.out(1.2)',
      delay: 0.4
    })

    // Continuous subtle floating
    gsap.to(nodes, {
      y: 'random(-12, 12)',
      x: 'random(-8, 8)',
      rotation: 'random(-3, 3)',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    })
  }
})
</script>
