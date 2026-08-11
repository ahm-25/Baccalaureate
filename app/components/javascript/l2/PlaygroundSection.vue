<template>
  <section id="playground" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-4xl mx-auto w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-6">جرّب بنفسك في الـ Playground</h2>
      <p class="text-xl text-mutedtext mb-12">
        اكتب الكود واضغط Run وشوف النتيجة في الـ Console.
      </p>

      <div class="flex flex-wrap gap-4 justify-center mb-8">
        <button 
          v-for="(example, index) in examples" 
          :key="index"
          @click="loadExample(example.code)"
          class="bg-background border border-border hover:border-primary text-maintext px-4 py-2 rounded-xl transition-colors font-mono text-sm"
          dir="ltr"
        >
          {{ example.label }}
        </button>
      </div>

      <div class="max-w-3xl mx-auto w-full shadow-2xl rounded-3xl overflow-hidden">
        <JavascriptPlayground v-model="code" :allow-reset="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref(`let name = "Ahmed";
console.log(name);`)

const examples = [
  { label: 'String Example', code: 'let name = "Ahmed";\nconsole.log(name);' },
  { label: 'Number Example', code: 'let age = 17;\nconsole.log(age);' },
  { label: 'Const Example', code: 'const country = "Egypt";\nconsole.log(country);' },
  { label: 'Math Example', code: 'let x = 10;\nlet y = 20;\nconsole.log(x + y);' }
]

const loadExample = (newCode: string) => {
  code.value = newCode
}
</script>
