<template>
  <section id="book-exercises" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <!-- Premium Ambient Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] bg-accent/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[20%] right-[10%] w-[45vw] h-[45vw] bg-primary/5 rounded-full blur-[120px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto w-full z-10">
      
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-accent/10 text-accent mb-6 border border-accent/20 shadow-inner">
          <BookOpen size="40" stroke-width="1.5" />
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-maintext mb-6 tracking-tight">تحدى معلوماتك</h2>
        <p class="text-xl text-mutedtext max-w-2xl mx-auto font-medium leading-relaxed">
          تمارين وأسئلة تفاعلية مستوحاة مباشرة من الكتاب المدرسي لقياس عمق فهمك للدرس.
        </p>
      </div>

      <!-- Quiz Arena rendering the book challenges -->
      <QuizQuestionSection 
        :questions="bookQuestions" 
        section-title="تمارين الكتاب المدرسي" 
        section-id="book-challenges" 
      />
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BookOpen } from 'lucide-vue-next'
import { lesson01Questions } from '~/data/lessons/first-baccalaureate/lesson-01-questions'

const bookQuestions = computed(() => {
  return lesson01Questions.find(q => q.id === 'book-challenges')?.questions || []
})
</script>
