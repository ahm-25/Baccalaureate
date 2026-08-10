<template>
  <section id="console-log" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">يعني إيه console.log()؟</h2>
        <p class="text-2xl text-mutedtext">
          <code class="text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">console</code> هي المكان اللي بنقدر نشوف فيه نتائج تشغيل الكود.<br>
          <code class="text-accent font-bold bg-accent/10 px-3 py-1 rounded-lg mt-2 inline-block">log()</code> تُستخدم لعرض قيمة أو رسالة.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(example, index) in examples" :key="index" class="bg-white p-6 rounded-3xl border border-border shadow-md">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-maintext">مثال {{ index + 1 }}</h3>
            <span class="text-sm bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-bold">{{ example.desc }}</span>
          </div>
          
          <JavascriptPlayground v-model="example.code" :allow-reset="true" class="h-64" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const examples = ref([
  { desc: 'طباعة نص', code: 'console.log("Hello");' },
  { desc: 'طباعة اسم', code: 'console.log("Ahmed");' },
  { desc: 'طباعة رقم', code: 'console.log(10);' },
  { desc: 'عملية حسابية', code: 'console.log(10 + 20);' }
])
</script>
