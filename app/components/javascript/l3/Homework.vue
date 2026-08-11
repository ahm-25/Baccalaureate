<template>
  <section id="homework" class="py-24 bg-surface relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
          <span>🏠</span> الواجب المنزلي
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          مهمتك قبل الدرس القادم
        </h2>
        
        <p class="text-xl text-mutedtext">
          جرب تكتب الأكواد دي في الـ Playground أو في كشكول.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div v-for="(task, index) in tasks" :key="index" 
             class="bg-background rounded-2xl p-6 border-2 border-border hover:border-primary/50 transition-colors shadow-sm flex flex-col cursor-pointer"
             @click="toggleTask(index)">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                 :class="task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-border text-transparent'">
              <svg v-if="task.completed" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-maintext">Task 0{{ index + 1 }}</h3>
          </div>
          <p class="text-mutedtext font-bold leading-relaxed mb-4 flex-1">
            {{ task.description }}
          </p>
          <div class="bg-surface rounded-xl p-4 font-mono text-sm text-left flex flex-col gap-2 border border-border" dir="ltr">
             <div v-for="(cond, cIndex) in task.conditions" :key="cIndex" class="flex flex-col gap-1">
                <span class="text-mutedtext text-xs font-bold font-sans">{{ cond.label }}:</span>
                <span class="text-primary font-bold">→ "{{ cond.output }}"</span>
             </div>
          </div>
        </div>
      </div>
      
      <!-- Progress Bar -->
      <div class="bg-background rounded-2xl p-6 border border-border shadow-sm max-w-xl mx-auto">
        <div class="flex justify-between items-center mb-4">
          <span class="font-bold text-maintext">نسبة الإنجاز</span>
          <span class="font-bold text-primary">{{ Math.round(progress) }}%</span>
        </div>
        <div class="w-full h-4 bg-surface rounded-full overflow-hidden border border-border">
          <div class="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
               :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Task {
  description: string;
  conditions: { label: string; output: string }[];
  completed: boolean;
}

const tasks = ref<Task[]>([
  {
    description: 'اكتب برنامج يتحقق من العمر.',
    conditions: [
      { label: 'إذا كان العمر 18 أو أكثر', output: 'Adult' },
      { label: 'غير ذلك', output: 'Minor' }
    ],
    completed: false
  },
  {
    description: 'اكتب برنامج يتحقق من الدرجة.',
    conditions: [
      { label: '50 أو أكثر', output: 'Passed' },
      { label: 'أقل من 50', output: 'Failed' }
    ],
    completed: false
  },
  {
    description: 'اكتب برنامج يتحقق من درجة الطالب.',
    conditions: [
      { label: '90+', output: 'Excellent' },
      { label: '70+', output: 'Good' },
      { label: '50+', output: 'Passed' },
      { label: 'Less than 50', output: 'Failed' }
    ],
    completed: false
  },
  {
    description: 'اكتب برنامج يتحقق من درجة الحرارة.',
    conditions: [
      { label: 'أكبر من 30', output: 'Hot' },
      { label: 'غير ذلك', output: 'Cool' }
    ],
    completed: false
  }
])

const toggleTask = (index: number) => {
  tasks.value[index].completed = !tasks.value[index].completed
}

const progress = computed(() => {
  const completedCount = tasks.value.filter(t => t.completed).length
  return (completedCount / tasks.value.length) * 100
})
</script>
