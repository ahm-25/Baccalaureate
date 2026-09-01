<template>
  <section id="challenge" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-primary/10 rounded-full blur-[130px]"></div>
    </div>

    <div class="max-w-3xl mx-auto w-full z-10" ref="wrapRef">

      <!-- Intro -->
      <div v-if="phase === 'intro'" class="text-center">
        <div class="inline-flex items-center justify-center w-24 h-24 rounded-[1.75rem] bg-accent/10 text-accent mb-8 border border-accent/20 shadow-inner">
          <Zap size="44" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl md:text-2xl text-mutedtext mb-10 font-medium">{{ data.subtitle }}</p>

        <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div class="bg-white border border-border rounded-2xl px-6 py-4 shadow-sm flex items-center gap-3">
            <ListOrdered size="20" class="text-primary" />
            <span class="font-bold text-maintext">{{ data.questions.length }} أسئلة</span>
          </div>
          <div class="bg-white border border-border rounded-2xl px-6 py-4 shadow-sm flex items-center gap-3">
            <Timer size="20" class="text-accent" />
            <span class="font-bold text-maintext">{{ data.seconds }} ثانية لكل سؤال</span>
          </div>
        </div>

        <button @click="start"
                class="bg-maintext hover:bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl inline-flex items-center gap-3">
          ابدأ التحدي
          <Play size="22" stroke-width="2.5" />
        </button>
      </div>

      <!-- Playing -->
      <div v-else-if="phase === 'playing'"
           class="bg-white rounded-[2.5rem] border border-border shadow-2xl p-8 md:p-12 relative overflow-hidden">
        <div class="absolute -top-28 -left-28 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10">
          <!-- Timer + progress -->
          <div class="flex items-center justify-between gap-4 mb-3">
            <span class="text-sm font-black text-mutedtext">سؤال {{ index + 1 }} / {{ data.questions.length }}</span>
            <span class="text-sm font-black" :class="timeLeft <= 5 ? 'text-red-500' : 'text-primary'">
              {{ timeLeft }} ثانية
            </span>
          </div>
          <div class="h-2.5 w-full rounded-full bg-border overflow-hidden mb-10">
            <div class="h-full rounded-full transition-all duration-1000 ease-linear"
                 :class="timeLeft <= 5 ? 'bg-red-500' : 'bg-primary'"
                 :style="{ width: (timeLeft / data.seconds) * 100 + '%' }"></div>
          </div>

          <h3 class="text-2xl md:text-3xl font-black text-maintext leading-relaxed mb-10 text-center text-balance min-h-[80px]">
            {{ question.text }}
          </h3>

          <div class="space-y-3">
            <button v-for="(opt, i) in question.options" :key="i"
                    @click="pick(i)" :disabled="picked !== null"
                    class="w-full text-right px-6 py-5 rounded-2xl border-2 font-bold text-lg transition-all flex items-center gap-3"
                    :class="optionClass(i)">
              <span class="w-8 h-8 shrink-0 rounded-lg bg-background/60 flex items-center justify-center text-sm font-black">{{ i + 1 }}</span>
              {{ opt }}
              <component v-if="picked !== null && i === question.correct" :is="Check" size="20" stroke-width="3" class="mr-auto" />
              <component v-else-if="picked === i" :is="X" size="20" stroke-width="3" class="mr-auto" />
            </button>
          </div>

          <div class="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <span class="font-bold text-mutedtext">صح: <span class="text-primary font-black">{{ score }}</span></span>
            <span v-if="picked === -1" class="font-black text-red-500 flex items-center gap-2">
              <AlertCircle size="18" stroke-width="2.5" /> انتهى الوقت!
            </span>
          </div>
        </div>
      </div>

      <!-- Result -->
      <div v-else class="bg-white rounded-[2.5rem] border border-border shadow-2xl p-10 md:p-14 text-center relative overflow-hidden">
        <div class="absolute -top-28 -right-28 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10">
          <div class="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 border shadow-inner"
               :class="grade.wrap">
            <component :is="grade.icon" size="52" stroke-width="1.5" />
          </div>

          <h3 class="text-4xl md:text-5xl font-black text-maintext mb-4">{{ grade.title }}</h3>
          <p class="text-2xl font-bold text-mutedtext mb-2">
            نتيجتك: <span class="text-primary">{{ score }}</span> من {{ data.questions.length }}
          </p>
          <div class="text-6xl font-black mb-8" :class="grade.text">{{ percent }}%</div>

          <div class="h-3 w-full rounded-full bg-border overflow-hidden mb-8">
            <div class="h-full rounded-full transition-all duration-1000" :class="grade.bar" :style="{ width: percent + '%' }"></div>
          </div>

          <p class="text-lg text-mutedtext font-medium mb-10 max-w-xl mx-auto leading-relaxed">{{ grade.note }}</p>

          <button @click="start"
                  class="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 inline-flex items-center gap-3">
            <RotateCcw size="22" stroke-width="2.5" /> حاول تاني
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { Zap, Timer, ListOrdered, Play, Check, X, AlertCircle, RotateCcw, Trophy, Target } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.challenge
const wrapRef = ref<HTMLElement | null>(null)

const phase = ref<'intro' | 'playing' | 'result'>('intro')
const index = ref(0)
const score = ref(0)
// null = not answered yet, -1 = the clock ran out, otherwise the chosen index.
const picked = ref<number | null>(null)
const timeLeft = ref(data.seconds)

let ticker: ReturnType<typeof setInterval> | null = null

const question = computed(() => data.questions[index.value])
const percent = computed(() => Math.round((score.value / data.questions.length) * 100))

const grade = computed(() => {
  if (percent.value >= 80) {
    return { title: 'ممتاز!', icon: Trophy, wrap: 'bg-green-100 text-green-600 border-green-200', text: 'text-green-600', bar: 'bg-green-500', note: 'مستواك عالي في الدرس ده. جاهز للامتحان.' }
  }
  if (percent.value >= 50) {
    return { title: 'كويس، بس فيه مساحة تتحسن', icon: Target, wrap: 'bg-amber-100 text-amber-600 border-amber-200', text: 'text-amber-600', bar: 'bg-amber-500', note: 'راجع الملخص فوق وركّز على التعريفات، وبعدين حاول تاني.' }
  }
  return { title: 'محتاج مراجعة', icon: AlertCircle, wrap: 'bg-red-100 text-red-500 border-red-200', text: 'text-red-500', bar: 'bg-red-500', note: 'ارجع للأقسام من الأول — التعريفات هي مفتاح كل الأسئلة دي.' }
})

const stopTicker = () => {
  if (ticker) { clearInterval(ticker) ; ticker = null }
}

const startTimer = () => {
  stopTicker()
  timeLeft.value = data.seconds
  ticker = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopTicker()
      // Running out of time counts as a wrong answer, then moves on.
      picked.value = -1
      setTimeout(advance, 1200)
    }
  }, 1000)
}

const start = () => {
  phase.value = 'playing'
  index.value = 0
  score.value = 0
  picked.value = null
  startTimer()
}

const pick = (i: number) => {
  if (picked.value !== null) return
  stopTicker()
  picked.value = i
  if (i === question.value.correct) score.value++
  setTimeout(advance, 1100)
}

const advance = () => {
  if (index.value < data.questions.length - 1) {
    index.value++
    picked.value = null
    startTimer()
  } else {
    phase.value = 'result'
  }
}

const optionClass = (i: number) => {
  if (picked.value === null) {
    return 'border-border bg-white text-maintext hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-md'
  }
  if (i === question.value.correct) return 'border-emerald-500 bg-emerald-50 text-emerald-700'
  if (i === picked.value) return 'border-red-500 bg-red-50 text-red-700'
  return 'border-border bg-surface/50 text-mutedtext opacity-50'
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (wrapRef.value) {
    gsap.set(wrapRef.value, { y: 40, opacity: 0 })
    gsap.to(wrapRef.value, {
      scrollTrigger: { trigger: wrapRef.value, start: 'top 85%', once: true },
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out'
    })
  }

  ScrollTrigger.refresh()
})

onUnmounted(stopTicker)
</script>
