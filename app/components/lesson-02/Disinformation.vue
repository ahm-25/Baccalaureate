<template>
  <section id="disinformation" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[15%] left-[5%] w-[35vw] h-[35vw] bg-accent/10 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[15%] right-[5%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[110px]"></div>
    </div>

    <div class="max-w-5xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-12" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-accent/10 text-accent mb-8 border border-accent/20 shadow-inner">
          <AlertOctagon size="38" stroke-width="1.5" />
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-maintext mb-4 tracking-tight text-balance">{{ data.title }}</h2>
        <p class="text-xl font-bold text-accent">({{ data.en }})</p>
      </div>

      <!-- Textbook definition -->
      <div ref="defRef" class="bg-gradient-to-br from-accent to-[#d18f5f] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-accent/25 mb-8 relative overflow-hidden">
        <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 text-right">
          <div class="inline-block bg-white/20 text-white text-xs font-black px-4 py-1.5 rounded-full mb-5 border border-white/30">
            التعريف كما ورد في الكتاب
          </div>
          <p class="text-2xl md:text-4xl font-bold leading-[1.6] text-balance">{{ data.definition }}</p>
          <p class="text-lg md:text-xl text-white/85 font-medium leading-relaxed border-t border-white/25 mt-6 pt-6">{{ data.simple }}</p>
        </div>
      </div>

      <!-- Bridge back to lesson one -->
      <div ref="linkRef" class="bg-white rounded-[2rem] p-8 border-2 border-primary/20 shadow-sm mb-16 text-right">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
            <History size="24" stroke-width="2" />
          </div>
          <h3 class="text-2xl font-black text-maintext">{{ data.linkToLesson1.title }}</h3>
        </div>
        <ul class="space-y-3">
          <li v-for="point in data.linkToLesson1.points" :key="point"
              class="flex items-start gap-3 text-lg text-mutedtext font-medium leading-relaxed">
            <span class="w-6 h-6 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-1">
              <Check size="14" stroke-width="3" />
            </span>
            {{ point }}
          </li>
        </ul>
      </div>

      <!-- Real or rumor? -->
      <div ref="activityRef">
        <h3 class="text-3xl md:text-4xl font-black text-maintext text-center mb-4 tracking-tight">حقيقي ولا شائعة؟</h3>
        <p class="text-lg text-mutedtext text-center mb-12 max-w-2xl mx-auto font-medium">
          اقرأ كل عنوان وقرّر بنفسك، وبعدين شوف التحليل.
        </p>

        <div class="space-y-5">
          <div v-for="(item, i) in data.headlines" :key="item.id"
               class="bg-white rounded-[2rem] border shadow-sm transition-all duration-300 overflow-hidden text-right"
               :class="answers[item.id] ? (answers[item.id] === correctLabel(item) ? 'border-emerald-300' : 'border-red-300') : 'border-border'">

            <!-- Headline, dressed like a post -->
            <div class="p-6 md:p-8">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-mutedtext shrink-0">
                  <Newspaper size="18" stroke-width="2" />
                </div>
                <div>
                  <div class="font-black text-maintext text-sm">منشور رقم {{ i + 1 }}</div>
                  <div class="text-xs text-mutedtext font-medium">وصلك على الموبايل دلوقتي</div>
                </div>
              </div>

              <p class="text-xl md:text-2xl font-bold text-maintext leading-relaxed mb-7">"{{ item.text }}"</p>

              <div class="flex flex-wrap gap-3">
                <button @click="answer(item.id, 'real')"
                        :disabled="!!answers[item.id]"
                        class="flex-1 min-w-[160px] px-6 py-4 rounded-2xl border-2 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                        :class="buttonClass(item, 'real')">
                  <BadgeCheck size="20" stroke-width="2.5" /> خبر حقيقي
                </button>
                <button @click="answer(item.id, 'rumor')"
                        :disabled="!!answers[item.id]"
                        class="flex-1 min-w-[160px] px-6 py-4 rounded-2xl border-2 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                        :class="buttonClass(item, 'rumor')">
                  <AlertTriangle size="20" stroke-width="2.5" /> شائعة / معلومات مضللة
                </button>
              </div>
            </div>

            <!-- Verdict -->
            <Transition name="expand">
              <div v-if="answers[item.id]"
                   class="px-6 md:px-8 pb-8">
                <div class="rounded-2xl p-5 flex items-start gap-4"
                     :class="answers[item.id] === correctLabel(item) ? 'bg-emerald-50 border border-emerald-100' : 'bg-red-50 border border-red-100'">
                  <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                       :class="answers[item.id] === correctLabel(item) ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'">
                    <component :is="answers[item.id] === correctLabel(item) ? Check : X" size="20" stroke-width="3" />
                  </div>
                  <div>
                    <div class="font-black mb-1"
                         :class="answers[item.id] === correctLabel(item) ? 'text-emerald-700' : 'text-red-700'">
                      {{ answers[item.id] === correctLabel(item) ? 'إجابة صحيحة!' : 'إجابة غير صحيحة' }}
                    </div>
                    <p class="text-maintext/80 font-medium leading-relaxed">{{ item.explanation }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div class="text-center mt-10">
          <button @click="resetActivity"
                  class="bg-white border border-border text-mutedtext hover:text-primary hover:border-primary/40 font-bold px-8 py-3.5 rounded-2xl transition-colors inline-flex items-center gap-2 shadow-sm">
            <RotateCcw size="18" stroke-width="2.5" /> جرّب تاني
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import {
  AlertOctagon, History, Check, X, Newspaper, BadgeCheck, AlertTriangle, RotateCcw
} from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.disinformation

const headerRef = ref<HTMLElement | null>(null)
const defRef = ref<HTMLElement | null>(null)
const linkRef = ref<HTMLElement | null>(null)
const activityRef = ref<HTMLElement | null>(null)

type Verdict = 'real' | 'rumor'
const answers = ref<Record<string, Verdict | undefined>>({})

const correctLabel = (item: { isReal: boolean }): Verdict => (item.isReal ? 'real' : 'rumor')

const answer = (id: string, verdict: Verdict) => {
  if (answers.value[id]) return
  answers.value = { ...answers.value, [id]: verdict }
}

const resetActivity = () => {
  answers.value = {}
}

// Once answered, the correct choice turns green and a wrong pick turns red.
const buttonClass = (item: { id: string; isReal: boolean }, verdict: Verdict) => {
  const chosen = answers.value[item.id]
  if (!chosen) {
    return 'border-border bg-white text-maintext hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-lg'
  }
  if (verdict === correctLabel(item)) {
    return 'border-emerald-500 bg-emerald-50 text-emerald-700'
  }
  if (verdict === chosen) {
    return 'border-red-500 bg-red-50 text-red-700 opacity-70'
  }
  return 'border-border bg-surface/50 text-mutedtext opacity-40'
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
  reveal(linkRef.value, 0.15)
  reveal(activityRef.value)

  ScrollTrigger.refresh()
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>
