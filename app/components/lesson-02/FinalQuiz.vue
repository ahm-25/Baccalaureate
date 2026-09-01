<template>
  <section id="final-quiz" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px]"></div>
    </div>

    <div class="max-w-5xl mx-auto w-full z-10">

      <div class="text-center mb-6" ref="headerRef">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-6 border border-primary/20 shadow-inner">
          <Target size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">الاختبار الشامل</h2>
        <div class="inline-block bg-primary/10 text-primary font-bold px-8 py-3 rounded-full mb-6 border border-primary/20">
          كل الدرس في 8 أسئلة
        </div>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium leading-relaxed">
          تعريفات + سيناريوهات + توصيل مصطلح بتعريفه — ده اختبار المراجعة النهائي قبل ما تقفل الدرس.
        </p>
      </div>

      <QuizQuestionSection
        :questions="questions"
        section-title="المراجعة النهائية الشاملة"
        section-id="final-quiz" />

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Target } from 'lucide-vue-next'
import { lesson02Questions } from '~/data/lessons/first-baccalaureate/lesson-02-questions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headerRef = ref<HTMLElement | null>(null)
const questions = computed(() => lesson02Questions.find(q => q.id === 'final-quiz')?.questions || [])

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (headerRef.value) {
    gsap.set(headerRef.value, { y: 40, opacity: 0 })
    gsap.to(headerRef.value, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%', once: true },
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out'
    })
  }

  ScrollTrigger.refresh()
})
</script>
