<template>
  <section id="mini-challenges" class="py-20 bg-surface relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
          <span>🎯</span> تحديات صغيرة
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          تحديات صغيرة
        </h2>
        
        <p class="text-xl text-mutedtext">جرب تكتب الشروط بنفسك</p>
      </div>

      <div class="flex flex-col gap-8">
        <div v-for="(challenge, index) in challenges" :key="index" class="bg-background rounded-3xl p-8 border border-border shadow-sm group hover:border-primary/30 transition-all">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
              {{ index + 1 }}
            </div>
            <div>
              <p class="text-xl font-bold text-maintext mb-2">{{ challenge.title }}</p>
            </div>
          </div>
          
          <div class="bg-[#1e1e1e] rounded-xl p-6 font-mono text-sm leading-loose border border-border overflow-x-auto text-left" dir="ltr">
            <div class="text-gray-400 mb-2">// {{ challenge.hint }}</div>
            <pre class="text-gray-300"><code>{{ challenge.starterCode }}</code></pre>
          </div>
          
          <div class="mt-6 text-left" dir="ltr">
             <button @click="toggleAnswer(index)" class="text-primary hover:text-primary/80 font-bold transition-colors">
               {{ showAnswer[index] ? 'Hide Answer' : 'Show Hint/Answer' }}
             </button>
             
             <div v-if="showAnswer[index]" class="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
               <pre class="font-mono text-green-400 text-sm"><code>{{ challenge.answer }}</code></pre>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showAnswer = ref<boolean[]>([false, false, false, false])

const toggleAnswer = (index: number) => {
  showAnswer.value[index] = !showAnswer.value[index]
}

const challenges = [
  {
    title: 'لو age أكبر من أو يساوي 18 اطبع Adult.',
    hint: 'استخدم if واكتب الشرط المناسب.',
    starterCode: 'let age = 18;\n\n// write your condition\n',
    answer: 'if (age >= 18) {\n    console.log("Adult");\n}'
  },
  {
    title: 'لو score أكبر من أو يساوي 50 اطبع Passed، غير كده اطبع Failed.',
    hint: 'استخدم if و else.',
    starterCode: 'let score = 45;\n\n// write your conditions\n',
    answer: 'if (score >= 50) {\n    console.log("Passed");\n} else {\n    console.log("Failed");\n}'
  },
  {
    title: 'لو temperature أكبر من 30 اطبع Hot، غير كده اطبع Cool.',
    hint: 'استخدم > و if / else.',
    starterCode: 'let temperature = 35;\n\n// write your conditions\n',
    answer: 'if (temperature > 30) {\n    console.log("Hot");\n} else {\n    console.log("Cool");\n}'
  },
  {
    title: 'لو password صحيحة اطبع Login successful، غير كده اطبع Wrong password.',
    hint: 'قارن باستخدام ===',
    starterCode: 'let password = "123";\n\n// write your conditions\n',
    answer: 'if (password === "123") {\n    console.log("Login successful");\n} else {\n    console.log("Wrong password");\n}'
  }
]
</script>
