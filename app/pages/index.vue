<template>
  <div class="relative">
    <LessonSectionsSectionHero />
    <LessonSectionsSectionOpeningQuestion />
    <LessonSectionsSectionInfoComparison />
    <LessonSectionsSectionVerification />
    <LessonSectionsSectionMediaExplorer />
    <LessonSectionsDikSectionDIK />
    <LessonSectionsSectionDataTransformation />
    <LessonSectionsSectionActivity />
    <QuizLessonQuiz />
    
    <!-- Placeholder for Summary & Homework -->
    <section id="summary" class="min-h-screen flex items-center justify-center bg-background py-24 relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div class="bg-white/80 backdrop-blur-xl border border-white/50 p-12 md:p-16 rounded-[3rem] text-center max-w-2xl mx-auto shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
        <div class="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-inner">
          <PartyPopper size="48" stroke-width="1.5" />
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black mb-6 text-maintext tracking-tight">نهاية الدرس الأول!</h2>
        
        <div class="inline-flex items-center gap-2 bg-accent/10 text-accent font-bold px-5 py-2.5 rounded-full mb-8 border border-accent/20">
          <Clock size="20" stroke-width="2.5" />
          <span>قريباً</span>
        </div>
        
        <p class="text-xl text-mutedtext leading-relaxed font-medium">
          أنت الآن بطل في التفرقة بين البيانات، المعلومات، والمعرفة! 🎉
          <br><br>
          <span class="text-maintext/70 text-lg">سيتم إضافة (الملخص الشامل، التحدي الأخير، والواجب) في التحديث القادم للمنصة.</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'
import { onMounted, onUnmounted } from 'vue'
import { PartyPopper, Clock } from 'lucide-vue-next'

const { setCurrentSection, sections } = useLesson()

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        const index = sections.findIndex(s => s.id === id)
        if (index !== -1) {
          setCurrentSection(index)
        }
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('section[id]').forEach(sec => {
    observer.observe(sec)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
