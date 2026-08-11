<template>
  <section id="playground" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface border-b border-border">
    <div class="max-w-4xl mx-auto w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
        <span>💻</span> مساحة التدريب
      </div>
      
      <h2 class="text-4xl font-black text-maintext mb-6">جرّب بنفسك في الـ Playground</h2>
      <p class="text-xl text-mutedtext mb-12">
        اكتب الكود واضغط Run وشوف النتيجة في الـ Console.
      </p>

      <div class="flex flex-wrap gap-4 justify-center mb-8">
        <button 
          v-for="(example, index) in examples" 
          :key="index"
          @click="loadExample(example.code)"
          class="bg-background border border-border hover:border-primary text-maintext px-4 py-2 rounded-xl transition-colors font-mono text-sm shadow-sm"
          dir="ltr"
        >
          {{ example.label }}
        </button>
      </div>

      <div class="max-w-3xl mx-auto w-full shadow-2xl rounded-3xl overflow-hidden border border-border">
        <JavascriptPlayground v-model="code" :allow-reset="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref(`let age = 18;

if (age >= 18) {
    console.log("Adult");
}`)

const examples = [
  { 
    label: 'Example 01 (if)', 
    code: `let score = 95;\n\nif (score >= 90) {\n    console.log("Excellent");\n}` 
  },
  { 
    label: 'Example 02 (if/else)', 
    code: `let age = 16;\n\nif (age >= 18) {\n    console.log("Allowed");\n} else {\n    console.log("Not allowed");\n}` 
  },
  { 
    label: 'Example 03 (Variables)', 
    code: `let temperature = 35;\n\nif (temperature > 30) {\n    console.log("It's hot");\n} else {\n    console.log("It's cool");\n}` 
  }
]

const loadExample = (newCode: string) => {
  code.value = newCode
}
</script>
