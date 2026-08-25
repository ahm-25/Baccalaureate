<template>
  <section id="properties" class="min-h-screen relative flex flex-col pt-32 pb-24 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
      
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">خصائص المعلومات</h2>
        <div class="inline-block bg-accent/10 text-accent font-bold px-8 py-3 rounded-full mb-8 shadow-sm border border-accent/20">
          ليه المعلومات مختلفة عن الأشياء المادية؟
        </div>
        <p class="text-2xl text-maintext/90 leading-relaxed font-semibold">
          المعلومات ليست كالأشياء المادية، بل تتميز بخصائص تجعل التعامل معها فريداً، وأهم هذه الخصائص هي:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div v-for="item in data.characteristics.items" :key="item.id"
             class="bg-surface p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" :class="getColorClass(item.id)">
            <component :is="getIcon(item.id)" size="32" stroke-width="2" />
          </div>
          <h3 class="text-2xl font-bold text-maintext mb-4">
            {{ item.title }}
            <span class="text-sm text-mutedtext block mt-1">{{ item.sub }}</span>
          </h3>
          <p class="text-lg text-slate-700 leading-relaxed mb-6 flex-1">
            {{ item.description }}
          </p>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <strong class="text-primary block mb-2">توضيح:</strong>
            {{ item.example }}
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { History, Copy, Share2 } from 'lucide-vue-next'
import { lessonData } from '~/data/lessons/first-baccalaureate/lesson-01'

const data = lessonData

const getIcon = (id: string) => {
  if (id === 'persistence') return History
  if (id === 'reproducibility') return Copy
  return Share2
}

const getColorClass = (id: string) => {
  if (id === 'persistence') return 'bg-blue-100 text-blue-600'
  if (id === 'reproducibility') return 'bg-purple-100 text-purple-600'
  return 'bg-green-100 text-green-600'
}
</script>
