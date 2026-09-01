<template>
  <section id="activity" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-5xl mx-auto w-full z-10">

      <div class="text-center mb-16" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
          <Gamepad2 size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium">{{ data.subtitle }}</p>
      </div>

      <div class="relative w-full" ref="cardRef">
        <!-- Decorative Background Layer -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[3rem] transform rotate-1 opacity-20 blur-sm"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[3rem] transform -rotate-1 opacity-30"></div>

        <!-- Main Card -->
        <div class="relative bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 border border-white shadow-2xl flex flex-col min-h-[520px] overflow-hidden">

          <!-- Progress Indicator -->
          <div class="flex items-center gap-3 mb-10 justify-center" v-if="!isCompleted">
            <div v-for="i in data.scenarios.length" :key="i"
                 class="h-2 rounded-full transition-all duration-500"
                 :class="i - 1 === current ? 'w-12 bg-primary shadow-lg shadow-primary/30' : (i - 1 < current ? 'w-3 bg-primary/40' : 'w-3 bg-border')"></div>
          </div>

          <div class="flex-1 flex flex-col justify-center relative">
            <Transition name="fade-slide" mode="out-in">

              <!-- Finished -->
              <div v-if="isCompleted" key="done" class="w-full text-center py-8">
                <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border"
                     :class="score === data.scenarios.length ? 'bg-green-100 text-green-500 border-green-200' : 'bg-primary/10 text-primary border-primary/20'">
                  <Trophy size="48" stroke-width="1.5" />
                </div>
                <h3 class="text-4xl font-black text-maintext mb-4">خلصت النشاط!</h3>
                <p class="text-2xl text-mutedtext mb-2 font-bold">
                  نتيجتك: <span class="text-primary">{{ score }}</span> من {{ data.scenarios.length }}
                </p>
                <p class="text-lg text-mutedtext mb-10 max-w-xl mx-auto font-medium">
                  التصرّف الصح على النت مش قاعدة محفوظة — ده سؤال بتسأله لنفسك قبل كل خطوة.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-4">
                  <button @click="restart"
                          class="bg-white border border-border text-mutedtext hover:text-primary hover:border-primary/40 px-8 py-4 rounded-2xl font-bold text-lg transition-colors inline-flex items-center gap-2 shadow-sm">
                    <RotateCcw size="20" stroke-width="2.5" /> إعادة النشاط
                  </button>
                  <button @click="scrollToNext"
                          class="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3">
                    متابعة الدرس
                    <ArrowDown size="24" stroke-width="2.5" />
                  </button>
                </div>
              </div>

              <!-- A scenario -->
              <div v-else :key="current" class="w-full">
                <div class="text-center mb-10">
                  <span class="inline-block text-sm font-black text-mutedtext/60 mb-4">
                    الموقف {{ current + 1 }} من {{ data.scenarios.length }}
                  </span>
                  <h3 class="text-2xl md:text-4xl font-black leading-relaxed text-maintext tracking-tight text-balance">
                    "{{ scenario.text }}"
                  </h3>
                </div>

                <div class="flex flex-wrap justify-center gap-5">
                  <button @click="choose(true)" :disabled="showResult"
                          class="px-8 py-5 rounded-2xl border-2 transition-all duration-300 font-bold text-xl min-w-[220px] flex items-center justify-center gap-3"
                          :class="optionClass(true)">
                    <Check size="24" stroke-width="3" /> تصرّف سليم
                  </button>
                  <button @click="choose(false)" :disabled="showResult"
                          class="px-8 py-5 rounded-2xl border-2 transition-all duration-300 font-bold text-xl min-w-[220px] flex items-center justify-center gap-3"
                          :class="optionClass(false)">
                    <X size="24" stroke-width="3" /> تصرّف غلط
                  </button>
                </div>

                <!-- Explanation -->
                <Transition name="fade-slide-up">
                  <div v-if="showResult" class="mt-10 rounded-[2rem] p-6 md:p-8 flex items-start gap-5 text-right"
                       :class="isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'">
                    <div class="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-white"
                         :class="isCorrect ? 'bg-green-500' : 'bg-red-500'">
                      <component :is="isCorrect ? Trophy : AlertCircle" size="24" stroke-width="2.5" />
                    </div>
                    <div>
                      <div class="font-black text-xl mb-2" :class="isCorrect ? 'text-green-700' : 'text-red-700'">
                        {{ isCorrect ? 'إجابة صحيحة!' : 'إجابة غير صحيحة' }}
                      </div>
                      <p class="text-lg text-maintext/80 font-medium leading-relaxed">{{ scenario.explanation }}</p>
                    </div>
                  </div>
                </Transition>
              </div>
            </Transition>
          </div>

          <!-- Footer / Next Action -->
          <div v-if="!isCompleted" class="mt-10 h-16 flex items-center justify-between border-t border-border pt-8">
            <div class="font-bold text-mutedtext">
              صح: <span class="text-primary font-black">{{ score }}</span>
            </div>
            <Transition name="fade-slide-up">
              <button v-if="showResult" @click="next"
                      class="text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                      :class="current < data.scenarios.length - 1 ? 'bg-primary hover:shadow-primary/30' : 'bg-maintext hover:bg-maintext/90 hover:shadow-maintext/20'">
                {{ current < data.scenarios.length - 1 ? 'الموقف التالي' : 'إنهاء النشاط' }}
                <component :is="current < data.scenarios.length - 1 ? ArrowLeft : Check" size="20" stroke-width="2.5" />
              </button>
            </Transition>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { Gamepad2, Check, X, Trophy, AlertCircle, ArrowLeft, ArrowDown, RotateCcw } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.activity

const headerRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

const current = ref(0)
const score = ref(0)
const showResult = ref(false)
const picked = ref<boolean | null>(null)
const isCompleted = ref(false)

const scenario = computed(() => data.scenarios[current.value])
const isCorrect = computed(() => picked.value === scenario.value.correct)

const choose = (value: boolean) => {
  if (showResult.value) return
  picked.value = value
  showResult.value = true
  if (isCorrect.value) score.value++
}

// After answering, the right choice goes green and a wrong pick goes red.
const optionClass = (value: boolean) => {
  if (!showResult.value) {
    return 'border-border bg-white text-maintext hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10'
  }
  if (value === scenario.value.correct) return 'border-green-500 bg-green-50 text-green-700 scale-105 shadow-xl shadow-green-500/20'
  if (value === picked.value) return 'border-red-500 bg-red-50 text-red-700 opacity-70'
  return 'border-border bg-surface/50 text-mutedtext opacity-40'
}

const next = () => {
  showResult.value = false
  setTimeout(() => {
    if (current.value < data.scenarios.length - 1) {
      current.value++
      picked.value = null
    } else {
      isCompleted.value = true
    }
  }, 250)
}

const restart = () => {
  current.value = 0
  score.value = 0
  picked.value = null
  showResult.value = false
  isCompleted.value = false
}

const scrollToNext = () => {
  const section = document.getElementById('activity')
  if (section?.nextElementSibling) {
    section.nextElementSibling.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }
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
  reveal(cardRef.value, 0.1)

  ScrollTrigger.refresh()
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
