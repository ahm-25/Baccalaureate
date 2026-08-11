<template>
  <section id="challenges" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-4xl mx-auto px-6 w-full">
      <h2 class="text-4xl font-bold text-maintext mb-4 text-center">تحديات صغيرة 🎯</h2>
      <p class="text-xl text-mutedtext mb-12 text-center">حاول تحل التحديات دي في دماغك أو على ورقة قبل ما تشوف الإجابة.</p>
      
      <div class="space-y-6">
        
        <div v-for="(challenge, index) in challenges" :key="index" class="bg-background border border-border rounded-2xl p-6 shadow-sm">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div class="flex-1">
              <div class="text-primary font-bold mb-2">تحدي {{ index + 1 }}</div>
              <div class="text-xl text-maintext font-medium leading-relaxed" v-html="challenge.text"></div>
            </div>
            
            <button 
              @click="toggleAnswer(index)" 
              class="bg-surface border border-border hover:border-primary px-6 py-2 rounded-xl text-maintext transition-colors whitespace-nowrap font-bold"
            >
              {{ challenge.show ? 'إخفاء الإجابة' : 'إظهار الإجابة' }}
            </button>
          </div>
          
          <div 
            class="transition-all duration-300 overflow-hidden mt-4"
            :class="challenge.show ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="bg-black/50 border border-gray-700 rounded-xl p-4 font-mono text-green-400 text-lg" dir="ltr">
              {{ challenge.answer }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const challenges = ref([
  { 
    text: 'اعمل متغير اسمه <span class="font-mono text-blue-400">name</span> وخزن فيه اسمك.', 
    answer: 'let name = "Ahmed";', 
    show: false 
  },
  { 
    text: 'اعمل متغير للسن <span class="font-mono text-blue-400">age</span> وخزن فيه سنك.', 
    answer: 'let age = 17;', 
    show: false 
  },
  { 
    text: 'اعمل متغير اسمه <span class="font-mono text-blue-400">score</span> وقيمته <span class="font-mono text-orange-400">100</span> وبعدين اطبعه في الـ Console.', 
    answer: 'let score = 100;\nconsole.log(score);', 
    show: false 
  },
  { 
    text: 'اعمل متغيرين <span class="font-mono text-blue-400">x = 10</span> و <span class="font-mono text-blue-400">y = 20</span> واطبع مجموعهم.', 
    answer: 'let x = 10;\nlet y = 20;\nconsole.log(x + y);', 
    show: false 
  },
  { 
    text: 'اعمل متغير بيعبر عن إنك طالب <span class="font-mono text-blue-400">isStudent = true</span> واطبعه.', 
    answer: 'let isStudent = true;\nconsole.log(isStudent);', 
    show: false 
  }
])

const toggleAnswer = (index: number) => {
  challenges.value[index].show = !challenges.value[index].show
}
</script>
