<template>
  <section id="ethics" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[15%] right-[10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-6xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-14 opacity-0 translate-y-8" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
          <HeartHandshake size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-maintext mb-4 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl font-bold text-primary">({{ data.en }})</p>
      </div>

      <!-- Definition card, straight from the textbook -->
      <div ref="defRef" class="opacity-0 translate-y-10 bg-gradient-to-br from-primary to-[#6350d4] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/30 mb-8 relative overflow-hidden">
        <div class="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start text-right">
          <div class="w-16 h-16 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
            <BookOpen size="32" stroke-width="1.8" />
          </div>
          <div>
            <div class="inline-block bg-white/20 text-white text-xs font-black px-4 py-1.5 rounded-full mb-5 border border-white/30 tracking-wide">
              التعريف كما ورد في الكتاب
            </div>
            <p class="text-xl md:text-3xl font-medium leading-[1.7] text-balance">
              {{ data.definition }}
            </p>
          </div>
        </div>
      </div>

      <!-- Plain-Egyptian explanation -->
      <div ref="simpleRef" class="opacity-0 translate-y-10 bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-10 shadow-lg mb-20 flex flex-col md:flex-row gap-6 items-start text-right">
        <div class="w-14 h-14 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
          <Lightbulb size="28" stroke-width="1.8" />
        </div>
        <p class="text-lg md:text-2xl text-mutedtext leading-relaxed font-medium">{{ data.simple }}</p>
      </div>

      <!-- Law vs Ethics comparison -->
      <div ref="compareRef" class="opacity-0 translate-y-12">
        <h3 class="text-3xl md:text-4xl font-black text-maintext text-center mb-4 tracking-tight">القانون في مقابل الأخلاقيات</h3>
        <p class="text-lg text-mutedtext text-center mb-14 max-w-2xl mx-auto font-medium">
          الاتنين بيوجّهوا سلوكنا، بس كل واحد بطريقة مختلفة... وفي مساحة بيتقابلوا فيها.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">

          <!-- Laws -->
          <div class="bg-white rounded-[2rem] p-8 border-2 border-border shadow-sm hover:shadow-xl transition-all duration-300 text-right">
            <div class="w-14 h-14 rounded-2xl bg-maintext/5 text-maintext flex items-center justify-center mb-6 border border-border">
              <Scale size="28" stroke-width="1.8" />
            </div>
            <h4 class="text-2xl font-black text-maintext mb-1">{{ data.comparison.law.title }}</h4>
            <p class="text-sm font-bold text-mutedtext mb-6">({{ data.comparison.law.en }})</p>
            <ul class="space-y-3">
              <li v-for="point in data.comparison.law.points" :key="point"
                  class="flex items-start gap-3 text-mutedtext font-medium text-lg">
                <span class="w-6 h-6 shrink-0 rounded-lg bg-maintext/5 text-maintext flex items-center justify-center mt-0.5">
                  <Gavel size="14" stroke-width="2" />
                </span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Shared space -->
          <div class="bg-gradient-to-br from-softhighlight to-white rounded-[2rem] p-8 border-2 border-primary/30 shadow-xl shadow-primary/10 text-right lg:-mt-6 lg:mb-6 relative overflow-hidden">
            <div class="absolute -bottom-20 -right-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/30 mx-auto">
                <Link2 size="28" stroke-width="1.8" />
              </div>
              <h4 class="text-2xl font-black text-maintext mb-2 text-center">{{ data.comparison.shared.title }}</h4>
              <p class="text-sm text-mutedtext text-center mb-6 font-medium">حاجات القانون <span class="text-primary font-bold">و</span> الأخلاق متفقين عليها</p>
              <ul class="space-y-3">
                <li v-for="point in data.comparison.shared.points" :key="point"
                    class="flex items-start gap-3 text-maintext font-bold text-lg bg-white/70 rounded-xl px-4 py-3 border border-primary/10">
                  <span class="w-6 h-6 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    <Check size="14" stroke-width="3" />
                  </span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Ethics -->
          <div class="bg-white rounded-[2rem] p-8 border-2 border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 text-right">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 border border-primary/20">
              <HeartHandshake size="28" stroke-width="1.8" />
            </div>
            <h4 class="text-2xl font-black text-maintext mb-1">{{ data.comparison.ethics.title }}</h4>
            <p class="text-sm font-bold text-primary mb-6">({{ data.comparison.ethics.en }})</p>
            <ul class="space-y-3">
              <li v-for="point in data.comparison.ethics.points" :key="point"
                  class="flex items-start gap-3 text-mutedtext font-medium text-lg">
                <span class="w-6 h-6 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                  <Heart size="14" stroke-width="2" />
                </span>
                {{ point }}
              </li>
            </ul>
          </div>

        </div>

        <!-- The takeaway line -->
        <div class="mt-12 bg-maintext text-white rounded-[2rem] p-8 md:p-10 text-center shadow-2xl shadow-maintext/20">
          <p class="text-xl md:text-3xl font-bold leading-relaxed text-balance">
            حتى لو حاجة <span class="text-accent">مش ممنوعة بالقانون</span>، لازم تمتنع عن السلوك غير اللائق.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { HeartHandshake, BookOpen, Lightbulb, Scale, Gavel, Heart, Check, Link2 } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.ethics

const headerRef = ref<HTMLElement | null>(null)
const defRef = ref<HTMLElement | null>(null)
const simpleRef = ref<HTMLElement | null>(null)
const compareRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const reveal = (el: HTMLElement | null, delay = 0) => {
    if (!el) return
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 0, opacity: 1, duration: 0.9, delay, ease: 'power3.out'
    })
  }

  reveal(headerRef.value)
  reveal(defRef.value, 0.1)
  reveal(simpleRef.value, 0.15)
  reveal(compareRef.value)

  // This section is lazy-loaded, so it can mount after the page height has
  // settled; refreshing fires any trigger the reader has already scrolled past
  // instead of leaving its content stuck at opacity 0.
  ScrollTrigger.refresh()
})
</script>
