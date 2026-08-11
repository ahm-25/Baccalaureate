<template>
  <section id="true-false" class="py-20 bg-surface relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
        <span>✅</span> الشرط إجابته إيه؟
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        جهاز كشف الحقيقة 🕵️‍♂️
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        أي شرط في النهاية نتيجته هتكون <span class="text-green-500 font-bold font-mono">true</span> أو <span class="text-red-500 font-bold font-mono">false</span>
      </p>

      <div v-if="!gameStarted" class="bg-background rounded-3xl p-12 border border-border shadow-xl">
        <button @click="startGame" class="bg-primary hover:bg-primary/90 text-white font-bold text-2xl py-6 px-12 rounded-2xl shadow-lg shadow-primary/20 transition-transform hover:scale-105">
          ابدأ لعبة كشف الحقيقة
        </button>
      </div>

      <div v-else class="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-xl relative overflow-hidden">
        <!-- Progress -->
        <div class="absolute top-0 left-0 h-2 bg-primary transition-all duration-300" :style="{ width: `${(currentIndex / questions.length) * 100}%` }"></div>
        
        <div v-if="currentIndex < questions.length">
          <div class="text-lg font-bold text-mutedtext mb-4 text-right">السؤال {{ currentIndex + 1 }} من {{ questions.length }}</div>
          
          <div class="text-4xl md:text-6xl font-black font-mono text-maintext mb-12" dir="ltr">
            {{ questions[currentIndex].q }}
          </div>
          
          <div class="flex gap-6 justify-center">
            <button @click="checkAnswer(true)" class="flex-1 max-w-[200px] bg-green-500/10 hover:bg-green-500/20 text-green-600 border-2 border-green-500/30 font-bold font-mono text-2xl py-6 rounded-2xl transition-colors">
              TRUE
            </button>
            <button @click="checkAnswer(false)" class="flex-1 max-w-[200px] bg-red-500/10 hover:bg-red-500/20 text-red-600 border-2 border-red-500/30 font-bold font-mono text-2xl py-6 rounded-2xl transition-colors">
              FALSE
            </button>
          </div>
          
          <div v-if="feedback" class="mt-8 text-2xl font-bold animate-bounce" :class="feedback === 'صح! 🎉' ? 'text-green-500' : 'text-red-500'">
            {{ feedback }}
          </div>
        </div>
        
        <div v-else class="text-center">
          <div class="text-6xl mb-6">🏆</div>
          <h3 class="text-4xl font-black text-maintext mb-4">ممتاز!</h3>
          <p class="text-xl text-mutedtext mb-8">أنت فهمت إزاي الشروط بتتحسب.</p>
          <div class="text-2xl font-bold text-primary">النتيجة: {{ score }} / {{ questions.length }}</div>
          
          <button @click="resetGame" class="mt-8 bg-surface hover:bg-surface/80 text-maintext border border-border font-bold text-xl py-4 px-8 rounded-xl transition-colors">
            العب مرة تانية
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const gameStarted = ref(false)
const currentIndex = ref(0)
const score = ref(0)
const feedback = ref('')

const questions = [
  { q: '10 > 5', a: true },
  { q: '5 > 10', a: false },
  { q: '20 === 20', a: true },
  { q: '8 <= 4', a: false },
  { q: '100 !== 50', a: true }
]

const startGame = () => {
  gameStarted.value = true
  resetGame()
}

const resetGame = () => {
  currentIndex.value = 0
  score.value = 0
  feedback.value = ''
}

const checkAnswer = (answer: boolean) => {
  if (feedback.value) return // prevent double click
  
  if (answer === questions[currentIndex.value].a) {
    feedback.value = 'صح! 🎉'
    score.value++
  } else {
    feedback.value = 'غلط ❌'
  }
  
  setTimeout(() => {
    feedback.value = ''
    currentIndex.value++
  }, 1000)
}
</script>
