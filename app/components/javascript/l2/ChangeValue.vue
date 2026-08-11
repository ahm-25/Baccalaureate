<template>
  <section id="change-value" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-6">تدريب: غيّر القيمة</h2>
      
      <p class="text-xl text-mutedtext mb-12">
        المتغير <span class="font-mono text-blue-300">score</span> قيمته الحالية <span class="font-mono text-orange-400">50</span>. المطلوب منك تغير قيمته لـ <span class="font-mono text-orange-400 font-bold">100</span>.
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
        <div class="max-w-2xl mx-auto shadow-2xl rounded-3xl overflow-hidden mb-6 text-left">
          <JavascriptPlayground v-model="code" :allow-reset="true" @run="onRun" />
        </div>
        
        <div 
          class="transition-all duration-500 overflow-hidden mt-6"
          :class="isSuccess ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'"
        >
          <div class="bg-green-500/10 border border-green-500/20 text-green-500 font-bold text-2xl py-4 rounded-xl flex items-center justify-center gap-3">
            <span>🔥</span> ممتاز! قدرنا نغير قيمة المتغير بنجاح.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref(`let score = 50;
// اكتب الكود بتاعك تحت السطر ده
score = 

console.log(score);`)

const isSuccess = ref(false)

const onRun = (result: { code: string, logs: any[] }) => {
  // Check if the last log is 100
  const lastLog = result.logs[result.logs.length - 1]
  if (lastLog && lastLog.message === '100') {
    isSuccess.value = true
  } else {
    isSuccess.value = false
  }
}
</script>
