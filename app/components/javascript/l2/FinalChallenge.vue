<template>
  <section id="final-challenge" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-6">التحدي الكبير 🔥</h2>
      <p class="text-2xl text-mutedtext mb-12">خلينا نطبق كل اللي اتعلمناه في برنامج صغير!</p>
      
      <div class="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
        <div class="text-right mb-8">
          <h3 class="text-2xl font-bold text-primary mb-4">المطلوب:</h3>
          <ul class="list-disc list-inside text-lg text-mutedtext space-y-2">
            <li>اعمل متغير ثابت (const) لاسمك <span class="font-mono text-sm bg-background px-2 py-1 rounded">name</span></li>
            <li>اعمل متغير (let) لسنك <span class="font-mono text-sm bg-background px-2 py-1 rounded">age</span></li>
            <li>اعمل متغير (let) للدرجة بتاعتك <span class="font-mono text-sm bg-background px-2 py-1 rounded">score</span></li>
            <li>اعمل متغير بوليان (let) بيأكد إنك طالب <span class="font-mono text-sm bg-background px-2 py-1 rounded">isStudent = true</span></li>
            <li>اطبع كل المتغيرات دي باستخدام <span class="font-mono text-yellow-400 text-sm bg-background px-2 py-1 rounded">console.log()</span></li>
          </ul>
        </div>
        
        <div class="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl mb-8">
          <JavascriptPlayground v-model="code" :allow-reset="true" @run="onRun" />
        </div>
        
        <div 
          class="transition-all duration-500 overflow-hidden"
          :class="isSuccess ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'"
        >
          <div class="bg-primary/10 border-2 border-primary/20 p-8 rounded-2xl">
            <div class="text-4xl mb-4 animate-bounce">🏆</div>
            <h3 class="text-2xl font-bold text-primary mb-2">🔥 ممتاز جداً!</h3>
            <p class="text-lg text-maintext">أنت دلوقتي عرفت تخزن البيانات وتتعامل معاها باستخدام JavaScript.</p>
          </div>
        </div>
        
        <div class="mt-8 text-right">
          <button @click="showHint = !showHint" class="text-mutedtext hover:text-primary font-bold underline transition-colors">
            محتاج مساعدة؟
          </button>
          
          <div v-if="showHint" class="mt-4 bg-background border border-border p-6 rounded-xl animate-fade-in text-mutedtext text-sm leading-relaxed text-right">
            <strong>تلميح:</strong><br>
            - استخدم <code>const name = "أحمد";</code> للاسم.<br>
            - استخدم <code>let age = 17;</code> للسن.<br>
            - استخدم <code>console.log(name);</code> عشان تطبع.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref(`// 1. اسمك (String)
const name = "";

// 2. سنك (Number)
let age = 0;

// 3. درجاتك (Number)
let score = 0;

// 4. هل أنت طالب؟ (Boolean)
let isStudent = true;

// 5. الطباعة
`)

const isSuccess = ref(false)
const showHint = ref(false)

const onRun = (result: { code: string, logs: any[] }) => {
  // Simple check to ensure we have at least 4 logs (assuming they print the 4 variables)
  if (result.logs.length >= 4) {
    isSuccess.value = true
  }
}
</script>
