<template>
  <section id="book-exercises" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-accent/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[20%] right-[10%] w-[45vw] h-[45vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-5xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-12" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-accent/10 text-accent mb-6 border border-accent/20 shadow-inner">
          <BookOpen size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium leading-relaxed">{{ data.subtitle }}</p>
      </div>

      <div ref="bodyRef">
        <!-- Part tabs -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button v-for="part in data.parts" :key="part.id"
                  @click="activePart = part.id"
                  class="px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 border-2 flex items-center gap-2.5"
                  :class="activePart === part.id
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white text-mutedtext border-border hover:border-primary/40 hover:text-primary'">
            <span class="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black"
                  :class="activePart === part.id ? 'bg-white/20' : 'bg-background'">{{ part.label }}</span>
            <span class="hidden sm:inline">{{ part.title }}</span>
          </button>
        </div>

        <div class="bg-white rounded-[2.5rem] border border-border shadow-xl p-6 md:p-10 min-h-[500px]">
          <Transition name="fade" mode="out-in">
            <div :key="activePart">

              <!-- Part instruction -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6 mb-8">
                <div class="text-right">
                  <h3 class="text-2xl font-black text-maintext mb-1">{{ currentPart.label }}) {{ currentPart.title }}</h3>
                  <p class="text-mutedtext font-medium">{{ currentPart.instruction }}</p>
                </div>
                <button @click="resetPart(currentPart.id)"
                        class="shrink-0 self-start sm:self-auto text-sm bg-background border border-border text-mutedtext hover:text-primary hover:border-primary/40 font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2">
                  <RotateCcw size="15" stroke-width="2.5" /> إعادة
                </button>
              </div>

              <!-- أ) Fill in the blanks from a word bank -->
              <div v-if="activePart === 'a'">
                <div class="bg-background rounded-2xl p-5 border border-border mb-8">
                  <div class="text-xs font-black text-mutedtext/70 mb-3">بنك المصطلحات</div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="term in currentPart.bank" :key="term"
                          class="px-4 py-2 rounded-xl bg-white border border-border text-sm font-bold transition-colors"
                          :class="usedTerms.includes(term) ? 'text-mutedtext/40 line-through' : 'text-maintext'">
                      {{ term }}
                    </span>
                  </div>
                </div>

                <div class="space-y-4">
                  <div v-for="(item, i) in currentPart.items" :key="item.id"
                       class="rounded-2xl border p-5 transition-colors"
                       :class="fills[item.id] ? (fills[item.id] === item.answer ? 'border-emerald-300 bg-emerald-50/40' : 'border-red-300 bg-red-50/40') : 'border-border bg-white'">

                    <div class="flex items-start gap-3 mb-4">
                      <span class="w-7 h-7 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center text-xs font-black text-mutedtext">{{ i + 1 }}</span>
                      <p class="text-lg font-bold text-maintext leading-relaxed flex-1">
                        <template v-if="fills[item.id]">
                          <span class="px-3 py-1 rounded-lg font-black"
                                :class="fills[item.id] === item.answer ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'">
                            {{ fills[item.id] }}
                          </span>
                          {{ item.text.replace('( ......... )', '') }}
                        </template>
                        <template v-else>{{ item.text }}</template>
                      </p>
                      <component v-if="fills[item.id]" :is="fills[item.id] === item.answer ? Check : X" size="22"
                                 :class="fills[item.id] === item.answer ? 'text-emerald-600' : 'text-red-500'" stroke-width="3" />
                    </div>

                    <div v-if="!fills[item.id]" class="flex flex-wrap gap-2 pr-10">
                      <button v-for="term in currentPart.bank" :key="term"
                              @click="fills = { ...fills, [item.id]: term }"
                              :disabled="usedTerms.includes(term)"
                              class="px-4 py-2 rounded-xl border text-sm font-bold transition-all"
                              :class="usedTerms.includes(term)
                                ? 'border-border bg-background text-mutedtext/30 cursor-not-allowed'
                                : 'border-border bg-white text-maintext hover:border-primary hover:text-primary hover:-translate-y-0.5'">
                        {{ term }}
                      </button>
                    </div>

                    <p v-else-if="fills[item.id] !== item.answer" class="text-sm font-bold text-emerald-700 pr-10">
                      الإجابة الصحيحة: {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- ب / جـ) Paragraph with numbered blanks -->
              <div v-else-if="activePart === 'b' || activePart === 'c'">
                <!-- The paragraph itself -->
                <div class="bg-background rounded-[1.75rem] p-6 md:p-8 border border-border mb-8">
                  <p class="text-xl md:text-2xl font-bold text-maintext leading-[2.2] text-right">
                    <template v-for="(seg, i) in currentPart.segments" :key="i">
                      <span v-if="seg.type === 'text'">{{ seg.value }}</span>
                      <button v-else
                              @click="openBlank = openBlank === blankKey(seg.id) ? null : blankKey(seg.id)"
                              class="inline-flex items-center gap-1.5 mx-1 px-3 py-1 rounded-xl border-2 font-black transition-all align-middle"
                              :class="blankClass(seg)">
                        <span class="text-xs opacity-70">[{{ seg.id }}]</span>
                        <span>{{ blanks[blankKey(seg.id)] ? optionText(blanks[blankKey(seg.id)]) : '.........' }}</span>
                      </button>
                    </template>
                  </p>
                </div>

                <!-- Options for the open blank -->
                <div class="rounded-[1.75rem] border border-border p-6 bg-white">
                  <div class="text-sm font-black text-mutedtext mb-4">
                    {{ openBlank ? `اختار إجابة الفراغ رقم [${openBlank.split('-')[1]}]:` : 'اضغط على أي فراغ في الفقرة فوق عشان تختار إجابته.' }}
                  </div>
                  <div class="flex flex-wrap gap-2.5">
                    <button v-for="opt in currentPart.options" :key="opt.id"
                            @click="pickBlank(opt.id)"
                            :disabled="!openBlank"
                            class="px-4 py-3 rounded-xl border text-sm font-bold transition-all text-right"
                            :class="!openBlank
                              ? 'border-border bg-background text-mutedtext/40 cursor-not-allowed'
                              : 'border-border bg-white text-maintext hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-md'">
                      <span class="text-primary font-black ml-1.5">({{ opt.id }})</span>{{ opt.text }}
                    </button>
                  </div>
                </div>

                <!-- Answer key, once every blank is filled -->
                <div v-if="allBlanksFilled" class="mt-6 rounded-[1.75rem] p-6 flex items-start gap-4"
                     :class="allBlanksCorrect ? 'bg-emerald-50 border border-emerald-100' : 'bg-amber-50 border border-amber-100'">
                  <div class="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white"
                       :class="allBlanksCorrect ? 'bg-emerald-500' : 'bg-amber-500'">
                    <component :is="allBlanksCorrect ? Check : AlertCircle" size="22" stroke-width="3" />
                  </div>
                  <div>
                    <div class="font-black text-lg mb-2" :class="allBlanksCorrect ? 'text-emerald-700' : 'text-amber-700'">
                      {{ allBlanksCorrect ? 'ممتاز! كل الفراغات صح.' : 'راجع الفراغات المظللة بالأحمر.' }}
                    </div>
                    <p class="text-maintext/80 font-medium leading-relaxed">
                      الإجابات الصحيحة:
                      <span v-for="seg in blankSegments" :key="seg.id" class="font-black text-maintext">
                        [{{ seg.id }}] = {{ seg.answer }}<span v-if="seg.id !== blankSegments[blankSegments.length - 1].id"> — </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- د) One multiple choice -->
              <div v-else-if="activePart === 'd'">
                <p class="text-xl md:text-2xl font-bold text-maintext leading-relaxed mb-8 text-right">{{ currentPart.question }}</p>
                <div class="space-y-3">
                  <button v-for="opt in currentPart.options" :key="opt.id"
                          @click="mcqAnswer = mcqAnswer || opt.id"
                          :disabled="!!mcqAnswer"
                          class="w-full text-right px-6 py-5 rounded-2xl border-2 font-bold text-lg transition-all flex items-center gap-3"
                          :class="mcqClass(opt.id)">
                    <span class="w-8 h-8 shrink-0 rounded-lg bg-background/60 flex items-center justify-center text-sm font-black">{{ opt.id }}</span>
                    {{ opt.text }}
                    <component v-if="mcqAnswer && opt.id === currentPart.answer" :is="Check" size="20" stroke-width="3" class="mr-auto" />
                    <component v-else-if="mcqAnswer === opt.id" :is="X" size="20" stroke-width="3" class="mr-auto" />
                  </button>
                </div>
                <div v-if="mcqAnswer" class="mt-6 rounded-2xl p-5 bg-primary/5 border border-primary/20 flex items-start gap-4">
                  <Lightbulb size="22" class="text-primary shrink-0 mt-1" stroke-width="2" />
                  <p class="text-maintext/80 font-medium leading-relaxed">{{ currentPart.explanation }}</p>
                </div>
              </div>

              <!-- هـ) True / false with the book's justification -->
              <div v-else-if="activePart === 'e'">
                <div class="flex items-center justify-between bg-background rounded-2xl px-5 py-3 border border-border mb-6">
                  <span class="font-bold text-mutedtext">تمت الإجابة: {{ Object.keys(tfAnswers).length }} / {{ currentPart.items.length }}</span>
                  <span class="font-black text-primary">صح: {{ tfScore }}</span>
                </div>

                <div class="space-y-3">
                  <div v-for="(item, i) in currentPart.items" :key="item.id"
                       class="rounded-2xl border p-5 transition-colors"
                       :class="tfAnswers[item.id] === undefined ? 'border-border bg-white'
                         : (tfAnswers[item.id] === item.answer ? 'border-emerald-300 bg-emerald-50/40' : 'border-red-300 bg-red-50/40')">

                    <div class="flex flex-col md:flex-row md:items-center gap-4">
                      <span class="w-7 h-7 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center text-xs font-black text-mutedtext">{{ i + 1 }}</span>
                      <p class="text-lg font-bold text-maintext leading-relaxed flex-1 text-right">{{ item.text }}</p>

                      <div class="flex gap-2 shrink-0">
                        <button @click="answerTf(item.id, true)" :disabled="tfAnswers[item.id] !== undefined"
                                class="w-14 h-12 rounded-xl border-2 font-black text-xl transition-all"
                                :class="tfClass(item, true)">✓</button>
                        <button @click="answerTf(item.id, false)" :disabled="tfAnswers[item.id] !== undefined"
                                class="w-14 h-12 rounded-xl border-2 font-black text-xl transition-all"
                                :class="tfClass(item, false)">✕</button>
                      </div>
                    </div>

                    <Transition name="fade">
                      <p v-if="tfAnswers[item.id] !== undefined"
                         class="text-sm font-medium leading-relaxed mt-4 pt-4 border-t text-right"
                         :class="tfAnswers[item.id] === item.answer ? 'border-emerald-200 text-emerald-800' : 'border-red-200 text-red-800'">
                        <span class="font-black">التبرير:</span> {{ item.reason }}
                      </p>
                    </Transition>
                  </div>
                </div>
              </div>

            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { BookOpen, Check, X, RotateCcw, AlertCircle, Lightbulb } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.bookExercises

const headerRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)

const activePart = ref<string>('a')
const currentPart = computed<any>(() => data.parts.find(p => p.id === activePart.value)!)

/* أ) word bank fills */
const fills = ref<Record<string, string>>({})
const usedTerms = computed(() => Object.values(fills.value))

/* ب / جـ) paragraph blanks — keyed by part so both paragraphs keep their own answers */
const blanks = ref<Record<string, string>>({})
const openBlank = ref<string | null>(null)
const blankKey = (id: number) => `${activePart.value}-${id}`

const blankSegments = computed<any[]>(() => currentPart.value.segments?.filter((s: any) => s.type === 'blank') || [])
const allBlanksFilled = computed(() => blankSegments.value.every(s => blanks.value[blankKey(s.id)]))
const allBlanksCorrect = computed(() => blankSegments.value.every(s => blanks.value[blankKey(s.id)] === s.answer))

const optionText = (optId: string) => currentPart.value.options?.find((o: any) => o.id === optId)?.text || optId

const pickBlank = (optId: string) => {
  if (!openBlank.value) return
  blanks.value = { ...blanks.value, [openBlank.value]: optId }
  openBlank.value = null
}

const blankClass = (seg: any) => {
  const chosen = blanks.value[blankKey(seg.id)]
  if (!chosen) {
    return openBlank.value === blankKey(seg.id)
      ? 'border-primary bg-primary/10 text-primary'
      : 'border-dashed border-mutedtext/40 text-mutedtext hover:border-primary hover:text-primary'
  }
  return chosen === seg.answer
    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
    : 'border-red-500 bg-red-50 text-red-700'
}

/* د) single MCQ */
const mcqAnswer = ref<string | null>(null)
const mcqClass = (optId: string) => {
  if (!mcqAnswer.value) return 'border-border bg-white text-maintext hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-md'
  if (optId === currentPart.value.answer) return 'border-emerald-500 bg-emerald-50 text-emerald-700'
  if (optId === mcqAnswer.value) return 'border-red-500 bg-red-50 text-red-700'
  return 'border-border bg-surface/50 text-mutedtext opacity-50'
}

/* هـ) true / false */
const tfAnswers = ref<Record<string, boolean | undefined>>({})
const answerTf = (id: string, value: boolean) => {
  if (tfAnswers.value[id] !== undefined) return
  tfAnswers.value = { ...tfAnswers.value, [id]: value }
}
const tfScore = computed(() =>
  currentPart.value.items?.filter((it: any) => tfAnswers.value[it.id] === it.answer).length || 0
)
const tfClass = (item: any, value: boolean) => {
  const chosen = tfAnswers.value[item.id]
  if (chosen === undefined) return 'border-border bg-white text-mutedtext hover:border-primary hover:text-primary'
  if (value === item.answer) return 'border-emerald-500 bg-emerald-50 text-emerald-600'
  if (value === chosen) return 'border-red-500 bg-red-50 text-red-500'
  return 'border-border bg-background text-mutedtext/30'
}

const resetPart = (id: string) => {
  if (id === 'a') fills.value = {}
  else if (id === 'b' || id === 'c') {
    const kept: Record<string, string> = {}
    Object.entries(blanks.value).forEach(([k, v]) => { if (!k.startsWith(`${id}-`)) kept[k] = v })
    blanks.value = kept
    openBlank.value = null
  }
  else if (id === 'd') mcqAnswer.value = null
  else if (id === 'e') tfAnswers.value = {}
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
  reveal(bodyRef.value, 0.1)

  ScrollTrigger.refresh()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
