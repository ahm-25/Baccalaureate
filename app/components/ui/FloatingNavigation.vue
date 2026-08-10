<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
       :class="isScrolled ? 'w-[90%] md:w-auto scale-95 opacity-95' : 'w-[95%] md:w-auto scale-100'">
    <div class="bg-surface/85 backdrop-blur-xl border border-white/60 shadow-2xl shadow-maintext/5 px-8 py-4 rounded-[2.5rem] flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-12 transition-all">
      <!-- Logo & Title -->
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-[1.25rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30">
          <BookOpen size="24" stroke-width="1.5" />
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-bold text-maintext tracking-wide">{{ courseTitle }}</span>
          <span class="text-xs font-semibold text-primary/80 mt-0.5">{{ lessonTitle }}</span>
        </div>
      </div>
      
      <!-- Divider hidden on mobile -->
      <div class="hidden md:block w-[2px] h-10 bg-border/60 rounded-full"></div>
      
      <!-- Actions -->
      <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
        <button @click="toggleWhiteboard" class="w-12 h-12 rounded-2xl hover:bg-primary/10 hover:scale-105 flex items-center justify-center transition-all text-mutedtext hover:text-primary relative group" title="السبورة (W)">
          <PenTool size="22" stroke-width="1.5" />
          <span class="absolute -bottom-12 bg-maintext text-white text-[11px] font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">السبورة (W)</span>
        </button>
        <button @click="toggleTeacherMode" class="w-12 h-12 rounded-2xl hover:bg-primary/10 hover:scale-105 flex items-center justify-center transition-all text-mutedtext hover:text-primary relative group" title="وضع المعلم (T)">
          <Users size="22" stroke-width="1.5" />
          <span class="absolute -bottom-12 bg-maintext text-white text-[11px] font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">المعلم (T)</span>
        </button>
        <button @click="toggleProjectorMode" class="w-12 h-12 rounded-2xl hover:bg-primary/10 hover:scale-105 flex items-center justify-center transition-all text-mutedtext hover:text-primary relative group" title="وضع العرض (P)">
          <MonitorPlay size="22" stroke-width="1.5" />
          <span class="absolute -bottom-12 bg-maintext text-white text-[11px] font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">العرض (P)</span>
        </button>
        <button @click="toggleFullscreen" class="w-12 h-12 rounded-2xl hover:bg-primary/10 hover:scale-105 flex items-center justify-center transition-all text-mutedtext hover:text-primary relative group" title="ملء الشاشة (F)">
          <Maximize size="22" stroke-width="1.5" />
          <span class="absolute -bottom-12 bg-maintext text-white text-[11px] font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">تكبير (F)</span>
        </button>
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
