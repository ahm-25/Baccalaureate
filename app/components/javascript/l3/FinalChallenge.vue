<template>
  <section id="final-challenge" class="min-h-screen py-24 px-6 relative flex flex-col justify-center bg-surface border-b border-border">
    <div class="max-w-5xl mx-auto w-full">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 animate-pulse">
          <span>🔥</span> التحدي الكبير
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          اكتب برنامج يحدد حالة الطالب
        </h2>
        
        <p class="text-xl text-mutedtext max-w-2xl mx-auto">
          استخدم <code class="text-primary font-mono bg-primary/10 px-1 rounded">if</code> و <code class="text-blue-500 font-mono bg-blue-500/10 px-1 rounded">else if</code> و <code class="text-accent font-mono bg-accent/10 px-1 rounded">else</code> لتحديد حالة الطالب بناءً على درجته.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Requirements -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-sm flex flex-col h-full">
          <h3 class="text-2xl font-bold text-maintext mb-6 flex items-center gap-2">
            <span>📋</span> المطلوب:
          </h3>
          
          <ul class="space-y-4 text-lg text-mutedtext flex-1">
            <li class="flex items-start gap-3">
              <span class="text-primary">←</span>
              <div>
                <span class="font-bold text-maintext">90 أو أكثر:</span>
                <br>
                <code class="text-sm font-mono text-green-500">console.log("Excellent")</code>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-primary">←</span>
              <div>
                <span class="font-bold text-maintext">70 إلى أقل من 90:</span>
                <br>
                <code class="text-sm font-mono text-blue-500">console.log("Good")</code>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-primary">←</span>
              <div>
                <span class="font-bold text-maintext">50 إلى أقل من 70:</span>
                <br>
                <code class="text-sm font-mono text-yellow-500">console.log("Passed")</code>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-primary">←</span>
              <div>
                <span class="font-bold text-maintext">أقل من 50:</span>
                <br>
                <code class="text-sm font-mono text-red-500">console.log("Failed")</code>
              </div>
            </li>
          </ul>
          
          <div class="mt-8 bg-surface p-4 rounded-xl border border-border text-sm text-center">
            البرنامج لازم يشتغل مهما غيرنا قيمة <code class="font-mono">score</code>.
          </div>
        </div>

        <!-- Playground -->
        <div class="lg:col-span-2 shadow-2xl rounded-3xl overflow-hidden border border-border">
          <JavascriptPlayground v-model="code" :allow-reset="true" class="h-full" />
        </div>
      </div>
      
      <div v-if="success" class="mt-12 text-center animate-fade-in">
        <div class="inline-block bg-green-500/10 border border-green-500/30 text-green-500 rounded-2xl p-8 shadow-xl">
           <div class="text-5xl mb-4">🔥</div>
           <h3 class="text-3xl font-black mb-2">ممتاز!</h3>
           <p class="text-xl">أنت دلوقتي خليت البرنامج ياخد قرارات بنفسه.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const code = ref(`let score = 85;

// write your conditions here
`)

const success = ref(false)

// Simple heuristic to check if they used all required statements
watch(code, (newCode) => {
  const hasIf = newCode.includes('if')
  const hasElseIf = newCode.includes('else if')
  const hasElse = newCode.includes('else')
  const hasExcellent = newCode.includes('Excellent')
  const hasGood = newCode.includes('Good')
  const hasPassed = newCode.includes('Passed')
  const hasFailed = newCode.includes('Failed')
  
  if (hasIf && hasElseIf && hasElse && hasExcellent && hasGood && hasPassed && hasFailed) {
    success.value = true
  } else {
    success.value = false
  }
})
</script>
