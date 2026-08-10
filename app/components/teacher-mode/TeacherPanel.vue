<template>
  <div class="fixed bottom-6 right-6 z-40 max-w-sm w-full bg-surface border border-primary/20 premium-shadow rounded-2xl overflow-hidden glass-panel">
    <!-- Header -->
    <div class="bg-softhighlight px-4 py-3 flex items-center justify-between border-b border-primary/10">
      <div class="flex items-center gap-2 text-primary font-semibold text-sm">
        <Users size="16" />
        لوحة تحكم المعلم
      </div>
      <button @click="toggleTeacherMode" class="text-mutedtext hover:text-maintext transition-colors">
        <X size="16" />
      </button>
    </div>
    
    <!-- Content -->
    <div class="p-4 space-y-4 text-sm">
      <div class="flex items-center justify-between text-xs text-mutedtext">
        <span>القسم الحالي: {{ sections[currentSectionIndex]?.title || '' }}</span>
        <span class="flex items-center gap-1"><Clock size="12" /> {{ currentNotes.time }}</span>
      </div>
      
      <div class="space-y-2">
        <div class="text-xs font-semibold text-accent uppercase tracking-wider">سؤال مقترح للنقاش</div>
        <div class="bg-background p-3 rounded-xl border border-border text-maintext">
          "{{ currentNotes.question }}"
        </div>
      </div>
      
      <div class="space-y-2">
        <div class="text-xs font-semibold text-primary uppercase tracking-wider">ملاحظة التدريس</div>
        <div class="flex gap-2 items-start text-mutedtext bg-softhighlight/50 p-3 rounded-xl">
          <Lightbulb size="16" class="shrink-0 text-primary mt-0.5" />
          <p class="leading-relaxed">{{ currentNotes.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeacherMode } from '~/composables/useTeacherMode'
import { useLesson } from '~/composables/useLesson'
import { Users, X, Clock, Lightbulb } from 'lucide-vue-next'

const { toggleTeacherMode, currentNotes } = useTeacherMode()
const { sections, currentSectionIndex } = useLesson()
</script>
