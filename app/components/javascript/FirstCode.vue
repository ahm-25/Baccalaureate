<template>
  <section id="first-code" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-4xl mx-auto w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-6">يلا نكتب أول كود!</h2>
      <p class="text-2xl text-mutedtext mb-12">
        حان الوقت لتجربة البرمجة بنفسك. اضغط على زر التشغيل وشوف النتيجة.
      </p>

      <div class="max-w-3xl mx-auto w-full shadow-2xl rounded-3xl overflow-hidden transform hover:scale-[1.01] transition-transform">
        <JavascriptPlayground v-model="code" :allow-reset="false" />
      </div>
      
      <p class="text-lg text-maintext/70 mt-8 font-medium">
        جرب تغيّر كلمة "Hello World" واكتب اسمك أو أي رسالة تحبها!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref('console.log("Hello World");')
</script>
