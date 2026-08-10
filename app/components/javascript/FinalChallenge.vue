<template>
  <section id="final-challenge" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-4xl mx-auto w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold mb-8 shadow-sm border border-orange-200">
        <span class="animate-pulse">🔥</span> التحدي الأخير
      </div>
      
      <h2 class="text-5xl font-black text-maintext mb-6">هل أنت جاهز؟</h2>
      <p class="text-2xl text-mutedtext mb-12">
        المطلوب: اكتب 3 أوامر <code class="text-primary">console.log()</code> تطبع فيها 3 أشياء مختلفة تحبها أو تعلمتها.
      </p>

      <div class="bg-surface p-8 rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden text-right">
        
        <div v-if="success" class="absolute inset-0 bg-green-500/90 z-20 flex flex-col items-center justify-center text-white backdrop-blur-sm">
          <div class="text-6xl mb-6 animate-bounce">🏆</div>
          <h3 class="text-4xl font-black mb-4">ممتاز يا بطل!</h3>
          <p class="text-2xl font-bold">أنت خلصت أول تحدي JavaScript بنجاح.</p>
        </div>

        <JavascriptPlayground v-model="code" @run="checkFinalChallenge" class="h-80" />
        
        <div class="mt-6 flex flex-col gap-2">
          <div class="flex items-center gap-2" :class="hasThreeLogs ? 'text-green-500' : 'text-gray-400'">
            <span class="font-bold text-xl">{{ hasThreeLogs ? '✓' : '○' }}</span>
            <span class="font-bold">استخدام console.log() 3 مرات.</span>
          </div>
          <div class="flex items-center gap-2" :class="executedSuccessfully ? 'text-green-500' : 'text-gray-400'">
            <span class="font-bold text-xl">{{ executedSuccessfully ? '✓' : '○' }}</span>
            <span class="font-bold">الكود يشتغل بدون أخطاء.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref('console.log("My name is Ahmed");\nconsole.log("I am learning JavaScript");\n')
const success = ref(false)
const hasThreeLogs = ref(false)
const executedSuccessfully = ref(false)

const checkFinalChallenge = (result: { code: string, logs: any[] }) => {
  // Count console logs in the code
  const matches = result.code.match(/console\.log/g)
  hasThreeLogs.value = matches !== null && matches.length >= 3

  // Check if executed successfully (at least 3 outputs and no errors)
  const noErrors = !result.logs.some(l => l.type === 'error')
  const hasOutputs = result.logs.length >= 3
  
  executedSuccessfully.value = noErrors && hasOutputs

  if (hasThreeLogs.value && executedSuccessfully.value) {
    setTimeout(() => {
      success.value = true
    }, 500)
  }
}
</script>
