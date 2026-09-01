<template>
  <section id="geotagging" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] right-[8%] w-[35vw] h-[35vw] bg-primary/10 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[10%] left-[8%] w-[35vw] h-[35vw] bg-accent/10 rounded-full blur-[110px]"></div>
    </div>

    <div class="max-w-6xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-12" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
          <MapPin size="38" stroke-width="1.5" />
        </div>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-maintext mb-4 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl font-bold text-primary">({{ data.en }})</p>
      </div>

      <!-- Textbook definition -->
      <div ref="defRef" class="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm mb-8 text-right">
        <div class="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-black px-4 py-1.5 rounded-full mb-6 border border-primary/20">
          <BookOpen size="14" stroke-width="2.5" />
          التعريف كما ورد في الكتاب
        </div>
        <p class="text-xl md:text-2xl font-bold text-maintext leading-[1.8] text-balance">{{ data.definition }}</p>
        <p class="text-lg text-mutedtext font-medium leading-relaxed border-t border-border mt-6 pt-6">{{ data.simple }}</p>
      </div>

      <!-- Interactive reveal: photo -> hidden data -> map -->
      <div ref="revealRef" class="bg-maintext rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-maintext/25 mb-12 relative overflow-hidden">
        <div class="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h3 class="text-2xl font-black text-white">إيه اللي بيتنشر معاك من غير ما تعرف؟</h3>
          <button @click="nextStage"
                  class="bg-white text-maintext hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0 self-start sm:self-auto shadow-lg">
            <component :is="stage >= 3 ? RotateCcw : Search" size="18" stroke-width="2.5" />
            {{ stageButtonLabel }}
          </button>
        </div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-5">

          <!-- Stage 1: an ordinary photo -->
          <div class="bg-white/10 border border-white/20 rounded-[1.75rem] p-6 transition-all duration-500"
               :class="stage >= 1 ? 'opacity-100' : 'opacity-40'">
            <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary/40 to-primary/30 border border-white/20 flex items-center justify-center mb-5 relative overflow-hidden">
              <!-- A stand-in for the photo itself: skyline seen from a balcony -->
              <svg viewBox="0 0 200 150" class="w-full h-full">
                <rect x="0" y="0" width="200" height="150" fill="none" />
                <circle cx="155" cy="35" r="16" fill="#E8A87C" opacity="0.9" />
                <rect x="18" y="80" width="26" height="70" fill="#292638" opacity="0.55" />
                <rect x="50" y="62" width="30" height="88" fill="#292638" opacity="0.7" />
                <rect x="86" y="92" width="24" height="58" fill="#292638" opacity="0.5" />
                <rect x="116" y="70" width="32" height="80" fill="#292638" opacity="0.65" />
                <rect x="154" y="100" width="30" height="50" fill="#292638" opacity="0.45" />
              </svg>
              <div class="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-maintext/60 to-transparent"></div>
            </div>
            <div class="flex items-center gap-2 text-white/60 text-sm font-bold mb-1">
              <ImageIcon size="16" stroke-width="2" /> الخطوة 1
            </div>
            <p class="text-white font-bold text-lg">{{ data.reveal.photoLabel }}</p>
            <p class="text-white/60 text-sm font-medium mt-1">صورة عادية خالص... مفيهاش حاجة، صح؟</p>
          </div>

          <!-- Stage 2: the EXIF payload riding along -->
          <div class="bg-white/10 border rounded-[1.75rem] p-6 transition-all duration-500"
               :class="stage >= 2 ? 'opacity-100 border-accent/50 bg-accent/10' : 'opacity-30 border-white/10'">
            <div class="flex items-center gap-2 text-white/60 text-sm font-bold mb-4">
              <FileSearch size="16" stroke-width="2" /> الخطوة 2
            </div>
            <p class="text-white font-black text-lg mb-4">{{ data.reveal.metaTitle }}</p>

            <div class="space-y-2.5" dir="ltr">
              <div v-for="(row, i) in data.reveal.meta" :key="row.key"
                   class="bg-maintext/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm transition-all duration-500"
                   :class="stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
                   :style="{ transitionDelay: stage >= 2 ? `${i * 120}ms` : '0ms' }">
                <div class="text-accent font-bold">{{ row.value }}</div>
                <div class="text-white/50 text-xs mt-0.5" dir="rtl">{{ row.key }}</div>
              </div>
            </div>
          </div>

          <!-- Stage 3: the map pin that lands on your house -->
          <div class="bg-white/10 border rounded-[1.75rem] p-6 transition-all duration-500"
               :class="stage >= 3 ? 'opacity-100 border-red-400/50 bg-red-500/10' : 'opacity-30 border-white/10'">
            <div class="flex items-center gap-2 text-white/60 text-sm font-bold mb-4">
              <Map size="16" stroke-width="2" /> الخطوة 3
            </div>
            <p class="text-white font-black text-lg mb-4">{{ data.reveal.mapLabel }}</p>

            <div class="aspect-[4/3] rounded-2xl bg-maintext/60 border border-white/10 relative overflow-hidden">
              <!-- Simplified street grid -->
              <svg viewBox="0 0 200 150" class="w-full h-full">
                <rect width="200" height="150" fill="#1f1d2b" />
                <g stroke="#ffffff" stroke-opacity="0.12" stroke-width="6">
                  <line x1="0" y1="45" x2="200" y2="45" />
                  <line x1="0" y1="105" x2="200" y2="105" />
                  <line x1="60" y1="0" x2="60" y2="150" />
                  <line x1="140" y1="0" x2="140" y2="150" />
                </g>
                <g fill="#ffffff" fill-opacity="0.06">
                  <rect x="8" y="55" width="42" height="40" rx="3" />
                  <rect x="70" y="55" width="60" height="40" rx="3" />
                  <rect x="150" y="55" width="42" height="40" rx="3" />
                  <rect x="70" y="115" width="60" height="28" rx="3" />
                </g>
              </svg>

              <!-- The pin only drops on the last stage -->
              <div class="absolute inset-0 flex items-center justify-center transition-all duration-700"
                   :class="stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'">
                <span class="absolute w-16 h-16 rounded-full bg-red-500/30 animate-ping"></span>
                <span class="relative w-11 h-11 rounded-full bg-red-500 text-white flex items-center justify-center shadow-2xl border-4 border-white/20">
                  <Home size="20" stroke-width="2.5" />
                </span>
              </div>
            </div>

            <p class="text-white font-bold mt-4 text-center transition-opacity duration-500"
               :class="stage >= 3 ? 'opacity-100' : 'opacity-0'">
              {{ data.reveal.mapResult }}
            </p>
          </div>
        </div>

        <p v-if="stage >= 3" class="relative z-10 text-white/70 text-base md:text-lg font-medium mt-8 pt-6 border-t border-white/10 leading-relaxed text-center">
          صورة واحدة كفاية إن حد يعرف إنت ساكن فين — <span class="text-accent font-bold">وده الخطر اللي الكتاب بيحذّر منه.</span>
        </p>
      </div>

      <!-- Protection tips -->
      <div ref="tipsRef">
        <h3 class="text-3xl md:text-4xl font-black text-maintext text-center mb-10 tracking-tight">إزاي تحمي نفسك؟</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div v-for="(tip, i) in data.tips" :key="tip"
               class="tip-card bg-white rounded-[1.75rem] p-6 border border-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 text-right flex gap-5 items-start">
            <div class="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 font-black">
              <ShieldCheck size="22" stroke-width="2" />
            </div>
            <div>
              <span class="text-xs font-black text-mutedtext/60 block mb-1">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="text-lg font-bold text-maintext leading-relaxed">{{ tip }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import {
  MapPin, BookOpen, Search, RotateCcw, Map, Home, ShieldCheck,
  Image as ImageIcon, FileSearch
} from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.geotagging

const headerRef = ref<HTMLElement | null>(null)
const defRef = ref<HTMLElement | null>(null)
const revealRef = ref<HTMLElement | null>(null)
const tipsRef = ref<HTMLElement | null>(null)

// stage 1 = the photo, 2 = the EXIF data, 3 = the pin on the map.
const stage = ref(1)

const stageButtonLabel = computed(() => {
  if (stage.value === 1) return 'افحص الصورة'
  if (stage.value === 2) return 'حدّد الموقع'
  return 'إعادة'
})

const nextStage = () => {
  stage.value = stage.value >= 3 ? 1 : stage.value + 1
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const reveal = (el: HTMLElement | null, delay = 0) => {
    if (!el) return
    gsap.set(el, { y: 40, opacity: 0 })
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      y: 0, opacity: 1, duration: 0.9, delay, ease: 'power3.out'
    })
  }

  reveal(headerRef.value)
  reveal(defRef.value, 0.1)
  reveal(revealRef.value)
  reveal(tipsRef.value)

  ScrollTrigger.refresh()
})
</script>
