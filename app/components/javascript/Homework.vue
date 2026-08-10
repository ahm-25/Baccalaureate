<template>
  <section id="homework" class="min-h-[80vh] py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-4xl mx-auto w-full">
      <div class="bg-white p-12 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>
        
        <div class="flex flex-col items-center text-center mb-10 relative z-10">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h2 class="text-4xl font-black text-maintext mb-4">مهمتك قبل الدرس القادم</h2>
          <p class="text-xl text-mutedtext">نفذ المهام دي عشان تثبت المعلومات في دماغك.</p>
        </div>

        <div class="space-y-4 max-w-2xl mx-auto relative z-10">
          <label v-for="(task, index) in tasks" :key="index" 
                 class="flex items-center gap-4 p-5 rounded-2xl border transition-all cursor-pointer group"
                 :class="task.done ? 'bg-green-50 border-green-200' : 'bg-surface border-border hover:border-primary/50'">
            
            <div class="relative flex items-center justify-center w-8 h-8 shrink-0">
              <input type="checkbox" v-model="task.done" class="opacity-0 absolute inset-0 cursor-pointer z-10" />
              <div class="w-full h-full rounded-xl border-2 transition-colors flex items-center justify-center"
                   :class="task.done ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 group-hover:border-primary text-transparent'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            
            <span class="text-xl font-bold transition-colors" :class="task.done ? 'text-green-700 line-through opacity-70' : 'text-maintext'">
              {{ task.text }}
            </span>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  { text: 'اكتب برنامج يطبع اسمك.', done: false },
  { text: 'اكتب جملة تحبها.', done: false },
  { text: 'اطبع نتيجة 10 + 20.', done: false },
  { text: 'جرب تغيير الأرقام وشوف النتيجة.', done: false }
])
</script>
