<template>
  <section id="challenges" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-4xl mx-auto w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-4">يلا نجرب بإيدينا 🚀</h2>
      <p class="text-2xl text-mutedtext mb-16">نفذ التحديات دي عشان تتأكد إنك فهمت.</p>
      
      <div class="space-y-12">
        <!-- Challenge 1 -->
        <div class="bg-white p-8 rounded-3xl border border-border shadow-md">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-maintext flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
              اكتب برنامج يطبع اسمك
            </h3>
            <span v-if="success1" class="text-green-500 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">ممتاز! 👏</span>
          </div>
          <JavascriptPlayground v-model="code1" @run="checkChallenge1" class="h-64 mb-4" />
          <div class="text-right text-sm text-mutedtext">
            * يجب أن يحتوي الكود على console.log واسمك بين علامتي التنصيص.
          </div>
        </div>

        <!-- Challenge 2 -->
        <div class="bg-white p-8 rounded-3xl border border-border shadow-md">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-maintext flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
              اطبع جملة عن نفسك
            </h3>
            <span v-if="success2" class="text-green-500 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">عمل رائع! 👏</span>
          </div>
          <JavascriptPlayground v-model="code2" @run="checkChallenge2" class="h-64 mb-4" />
          <div class="text-right text-sm text-mutedtext">
            * مثال: "I love programming"
          </div>
        </div>

        <!-- Challenge 3 -->
        <div class="bg-white p-8 rounded-3xl border border-border shadow-md">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-maintext flex items-center gap-2">
              <span class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">3</span>
              احسب 10 + 20 باستخدام JavaScript
            </h3>
            <span v-if="success3" class="text-green-500 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">عبقري! 👏</span>
          </div>
          <JavascriptPlayground v-model="code3" @run="checkChallenge3" class="h-64 mb-4" />
          <div class="text-right text-sm text-mutedtext">
            * النتيجة المتوقعة في الـ Console هي 30
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code1 = ref('console.log("");')
const success1 = ref(false)
const checkChallenge1 = (result: { code: string, logs: any[] }) => {
  if (result.logs.some(l => l.message && l.message.length > 0)) {
    // Basic check: if it printed something that is not empty
    success1.value = true
  } else {
    success1.value = false
  }
}

const code2 = ref('console.log("");')
const success2 = ref(false)
const checkChallenge2 = (result: { code: string, logs: any[] }) => {
  if (result.logs.some(l => l.message && l.message.length > 5)) {
    success2.value = true
  } else {
    success2.value = false
  }
}

const code3 = ref('console.log();')
const success3 = ref(false)
const checkChallenge3 = (result: { code: string, logs: any[] }) => {
  if (result.logs.some(l => l.message === '30')) {
    success3.value = true
  } else {
    success3.value = false
  }
}
</script>
