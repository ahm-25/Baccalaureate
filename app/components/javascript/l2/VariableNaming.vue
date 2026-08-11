<template>
  <section id="naming" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-6">أسمي الـ Variable إزاي؟</h2>
      
      <p class="text-xl text-mutedtext mb-12">
        اسم المتغير لازم يكون واضح ومعبر عن القيمة اللي جواه، وفي شوية قواعد لازم نمشي عليها.
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-8 mb-12 flex flex-col md:flex-row justify-around gap-8 text-left" dir="ltr">
        <!-- Bad -->
        <div class="flex-1">
          <div class="text-red-500 font-bold mb-4 text-xl text-right" dir="rtl">❌ أسماء غير صالحة أو سيئة</div>
          <div class="space-y-4">
            <div class="bg-red-500/5 border border-red-500/20 rounded-xl p-4 flex justify-between items-center text-red-400 font-mono">
              <span>let 2name = "...";</span>
              <span class="text-xs font-sans text-red-500/80 bg-red-500/10 px-2 py-1 rounded">مينفعش نبدأ برقم</span>
            </div>
            <div class="bg-red-500/5 border border-red-500/20 rounded-xl p-4 flex justify-between items-center text-red-400 font-mono">
              <span>let student-name = "...";</span>
              <span class="text-xs font-sans text-red-500/80 bg-red-500/10 px-2 py-1 rounded">الشرطة غير مسموحة</span>
            </div>
            <div class="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 flex justify-between items-center text-yellow-400 font-mono">
              <span>let x = "...";</span>
              <span class="text-xs font-sans text-yellow-500/80 bg-yellow-500/10 px-2 py-1 rounded">مش معبر عن القيمة</span>
            </div>
          </div>
        </div>
        
        <div class="hidden md:block w-px bg-border"></div>
        
        <!-- Good -->
        <div class="flex-1">
          <div class="text-green-500 font-bold mb-4 text-xl text-right" dir="rtl">✅ أسماء ممتازة</div>
          <div class="space-y-4">
            <div class="bg-green-500/5 border border-green-500/20 rounded-xl p-4 flex justify-between items-center text-green-400 font-mono">
              <span>let studentName = "...";</span>
              <span class="text-xs font-sans text-green-500/80 bg-green-500/10 px-2 py-1 rounded">Camel Case</span>
            </div>
            <div class="bg-green-500/5 border border-green-500/20 rounded-xl p-4 flex justify-between items-center text-green-400 font-mono">
              <span>let age = 17;</span>
              <span class="text-xs font-sans text-green-500/80 bg-green-500/10 px-2 py-1 rounded">قصير ومعبر</span>
            </div>
            <div class="bg-green-500/5 border border-green-500/20 rounded-xl p-4 flex justify-between items-center text-green-400 font-mono">
              <span>let totalScore = 95;</span>
              <span class="text-xs font-sans text-green-500/80 bg-green-500/10 px-2 py-1 rounded">واضح</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Challenge -->
      <div class="bg-primary/10 border border-primary/20 rounded-3xl p-8 shadow-xl">
        <h3 class="text-2xl font-bold text-maintext mb-6">تحدي التسمية</h3>
        <p class="text-mutedtext mb-8">هل الاسم ده ينفع ولا لأ؟</p>
        
        <div class="font-mono text-3xl font-bold text-maintext mb-8 tracking-widest bg-background py-4 rounded-xl border border-border" dir="ltr">
          {{ currentChallenge.name }}
        </div>
        
        <div v-if="feedback === null" class="flex items-center justify-center gap-6">
          <button @click="checkAnswer(true)" class="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            ✅ ينفع
          </button>
          <button @click="checkAnswer(false)" class="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            ❌ ما ينفعش
          </button>
        </div>
        
        <div v-else class="animate-fade-in flex flex-col items-center">
          <div class="text-2xl font-bold mb-4" :class="isCorrect ? 'text-green-500' : 'text-red-500'">
            {{ feedback }}
          </div>
          <button @click="nextChallenge" class="bg-primary text-white px-6 py-2 rounded-xl">
            التالي
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const challenges = [
  { name: 'userName', valid: true, msg: 'ممتاز! ده اسم صحيح.' },
  { name: '1stPlace', valid: false, msg: 'غلط! مينفعش الاسم يبدأ برقم.' },
  { name: 'user-name', valid: false, msg: 'غلط! مينفعش نستخدم الشرطة (-) في الاسم.' },
  { name: 'isStudent', valid: true, msg: 'ممتاز! ده اسم صحيح ومعبر.' }
]

const currentIndex = ref(0)
const feedback = ref<string | null>(null)
const isCorrect = ref(false)

const currentChallenge = computed(() => challenges[currentIndex.value])

const checkAnswer = (answer: boolean) => {
  if (answer === currentChallenge.value.valid) {
    isCorrect.value = true
    feedback.value = currentChallenge.value.msg
  } else {
    isCorrect.value = false
    feedback.value = 'إجابة خاطئة.. جرب تركز في القواعد تاني.'
  }
}

const nextChallenge = () => {
  feedback.value = null
  currentIndex.value = (currentIndex.value + 1) % challenges.length
}
</script>
