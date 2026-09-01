<template>
  <section id="social-media" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[20%] right-[10%] w-[38vw] h-[38vw] bg-primary/10 rounded-full blur-[110px]"></div>
      <div class="absolute bottom-[15%] left-[10%] w-[30vw] h-[30vw] bg-secondary/15 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-5xl mx-auto w-full z-10">

      <!-- Header -->
      <div class="text-center mb-12" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-8 border border-primary/20 shadow-inner">
          <Users size="38" stroke-width="1.5" />
        </div>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-maintext mb-4 tracking-tight">{{ data.title }}</h2>
        <p class="text-xl font-bold text-primary">({{ data.en }})</p>
      </div>

      <!-- Textbook definition -->
      <div ref="defRef" class="bg-gradient-to-br from-primary to-[#6350d4] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/30 mb-8 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start text-right">
          <div class="w-16 h-16 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
            <BookOpen size="32" stroke-width="1.8" />
          </div>
          <div>
            <div class="inline-block bg-white/20 text-white text-xs font-black px-4 py-1.5 rounded-full mb-5 border border-white/30">
              التعريف كما ورد في الكتاب
            </div>
            <p class="text-xl md:text-3xl font-medium leading-[1.7] text-balance">{{ data.definition }}</p>
          </div>
        </div>
      </div>

      <!-- SNS term, the one that shows up in exams -->
      <div ref="snsRef" class="bg-white rounded-[2rem] p-8 border-2 border-primary/20 shadow-sm mb-16 flex flex-col md:flex-row items-center gap-6 text-right">
        <div class="w-14 h-14 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
          <Tag size="26" stroke-width="2" />
        </div>
        <p class="text-lg md:text-xl text-mutedtext font-medium leading-relaxed">
          خلي بالك من الاسم التاني اللي بيتسأل عليه كتير:
          <span class="text-maintext font-black">خدمة الشبكة الاجتماعية</span>
          <span class="text-primary font-black">(Social Networking Service - SNS)</span>
          — هو نفسه وسائل التواصل الاجتماعي.
        </p>
      </div>

      <!-- The balance: a useful tool that turns risky when misused -->
      <div ref="balanceRef">
        <div class="text-center mb-10">
          <h3 class="text-3xl md:text-4xl font-black text-maintext mb-4 tracking-tight">{{ data.balance.title }}</h3>
          <p class="text-lg md:text-xl text-mutedtext max-w-3xl mx-auto font-medium leading-relaxed">{{ data.balance.note }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Useful -->
          <div class="bg-white rounded-[2rem] p-8 border-2 border-emerald-200 shadow-sm hover:shadow-xl transition-shadow duration-300 text-right">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <ThumbsUp size="24" stroke-width="2" />
              </div>
              <h4 class="text-2xl font-black text-maintext">أداة مفيدة</h4>
            </div>
            <ul class="space-y-3">
              <li v-for="item in data.balance.good" :key="item"
                  class="flex items-start gap-3 text-lg text-mutedtext font-medium">
                <span class="w-6 h-6 shrink-0 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5">
                  <Check size="14" stroke-width="3" />
                </span>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Risky -->
          <div class="bg-white rounded-[2rem] p-8 border-2 border-red-200 shadow-sm hover:shadow-xl transition-shadow duration-300 text-right">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
                <AlertTriangle size="24" stroke-width="2" />
              </div>
              <h4 class="text-2xl font-black text-maintext">خطيرة لو استُخدمت غلط</h4>
            </div>
            <ul class="space-y-3">
              <li v-for="item in data.balance.bad" :key="item"
                  class="flex items-start gap-3 text-lg text-mutedtext font-medium">
                <span class="w-6 h-6 shrink-0 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mt-0.5">
                  <X size="14" stroke-width="3" />
                </span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- The exam-trap line -->
        <div class="mt-10 bg-maintext text-white rounded-[2rem] p-8 md:p-10 text-center shadow-2xl shadow-maintext/20">
          <div class="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-black px-4 py-1.5 rounded-full mb-5 border border-accent/30">
            <AlertCircle size="14" stroke-width="2.5" /> فخ امتحاني
          </div>
          <p class="text-xl md:text-3xl font-bold leading-relaxed text-balance">
            لو لقيت عبارة بتقول إن وسائل التواصل <span class="text-red-300">"ليست أكثر من أداة خطيرة"</span> — دي
            <span class="text-accent">خطأ ✗</span>، لأنها أداة مفيدة بس بتبقى خطيرة لو اتستخدمت بشكل غير صحيح.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-02'
import { Users, BookOpen, Tag, ThumbsUp, AlertTriangle, AlertCircle, Check, X } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const data = lessonData.socialMedia

const headerRef = ref<HTMLElement | null>(null)
const defRef = ref<HTMLElement | null>(null)
const snsRef = ref<HTMLElement | null>(null)
const balanceRef = ref<HTMLElement | null>(null)

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
  reveal(snsRef.value, 0.15)
  reveal(balanceRef.value)

  ScrollTrigger.refresh()
})
</script>
