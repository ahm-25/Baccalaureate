<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
       :class="isScrolled ? 'w-[90%] md:w-auto scale-95 opacity-90' : 'w-[95%] md:w-auto scale-100'">
    <div class="bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] px-6 py-3.5 rounded-[2.5rem] flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-10 transition-all hover:border-white/60">
      
      <!-- Logo & Title -->
      <div class="flex items-center gap-4">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/25 transform hover:rotate-6 transition-transform duration-300">
          <BookOpen size="20" stroke-width="2" />
        </div>
        <div class="flex flex-col text-right">
          <span class="text-sm font-black text-gray-800 tracking-wide">{{ courseTitle }}</span>
          <span class="text-xs font-bold text-primary mt-0.5">{{ lessonTitle }}</span>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="hidden md:block w-px h-8 bg-gray-200"></div>
      
      <!-- Actions -->
      <div class="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
        <button @click="toggleWhiteboard" class="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 hover:scale-105 flex items-center justify-center transition-all text-gray-500 hover:text-primary relative group" title="السبورة (W)">
          <PenTool size="18" stroke-width="2" />
          <span class="absolute -bottom-12 bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">السبورة (W)</span>
        </button>
        
        <button @click="toggleTeacherMode" class="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 hover:scale-105 flex items-center justify-center transition-all text-gray-500 hover:text-primary relative group" title="وضع المعلم (T)">
          <Users size="18" stroke-width="2" />
          <span class="absolute -bottom-12 bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">المعلم (T)</span>
        </button>
        
        <button @click="toggleProjectorMode" class="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 hover:scale-105 flex items-center justify-center transition-all text-gray-500 hover:text-primary relative group" title="وضع العرض (P)">
          <MonitorPlay size="18" stroke-width="2" />
          <span class="absolute -bottom-12 bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">العرض (P)</span>
        </button>
        
        <button @click="toggleFullscreen" class="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 hover:scale-105 flex items-center justify-center transition-all text-gray-500 hover:text-primary relative group" title="ملء الشاشة (F)">
          <Maximize size="18" stroke-width="2" />
          <span class="absolute -bottom-12 bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">تكبير (F)</span>
        </button>
      </div>

      <!-- Personal Branding -->
      <div class="hidden xl:block w-px h-8 bg-gray-200"></div>
      
      <div class="hidden xl:flex items-center gap-3 bg-surface/50 p-1.5 pr-4 rounded-full border border-border hover:bg-surface hover:shadow-sm transition-all duration-300">
        <div class="flex flex-col text-left">
          <span class="text-[13px] font-extrabold text-maintext leading-tight tracking-wide">المهندس أحمد عبد الناصر</span>
          <a href="tel:01017865860" class="text-[12px] font-bold text-primary hover:text-primary/80 transition-colors mt-0.5" dir="ltr">010 1786 5860</a>
        </div>
        <div class="w-9 h-9 rounded-full border-[2px] border-primary/20 overflow-hidden shadow-sm bg-background">
           <img src="/my-photo.jpg" class="w-full h-full object-cover" alt="المهندس أحمد عبد الناصر" />
        </div>
      </div>
      
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { BookOpen, PenTool, Users, MonitorPlay, Maximize } from 'lucide-vue-next'
import { useWhiteboard } from '~/composables/useWhiteboard'
import { useTeacherMode } from '~/composables/useTeacherMode'
import { usePresentation } from '~/composables/usePresentation'
import { useLesson } from '~/composables/useLesson'

const { toggleWhiteboard } = useWhiteboard()
const { toggleTeacherMode } = useTeacherMode()
const { toggleProjectorMode, toggleFullscreen } = usePresentation()
const { courseTitle, lessonTitle } = useLesson()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
