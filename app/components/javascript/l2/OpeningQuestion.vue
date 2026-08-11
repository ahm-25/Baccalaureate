<template>
  <section id="opening" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <div class="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-8">
        قبل ما نبدأ...
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold text-maintext mb-12 leading-relaxed">
        لو عايز البرنامج يفتكر اسمك...<br>
        <span class="text-mutedtext text-3xl mt-4 block">هنخلي البرنامج يحتفظ بالاسم إزاي؟</span>
      </h2>
      
      <div class="max-w-md mx-auto bg-background rounded-3xl p-8 border border-border shadow-xl">
        <label for="userName" class="block text-xl font-bold text-maintext mb-6">
          اكتب اسمك:
        </label>
        
        <input 
          id="userName"
          v-model="userName"
          type="text" 
          placeholder="مثال: Ahmed"
          class="w-full bg-surface border-2 border-border rounded-xl px-6 py-4 text-center text-2xl font-bold text-maintext focus:border-primary focus:outline-none transition-colors mb-8"
          dir="auto"
        />
        
        <div 
          class="transition-all duration-500 overflow-hidden"
          :class="userName.length > 0 ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'"
        >
          <div class="bg-primary/5 border border-primary/20 rounded-2xl p-6" dir="ltr">
            <div class="flex items-center justify-center gap-4 text-2xl">
              <span class="font-mono text-mutedtext font-bold">name</span>
              <span class="text-primary font-bold">→</span>
              <span class="font-mono font-bold text-primary">"{{ userName }}"</span>
            </div>
          </div>
          
          <p class="mt-6 text-xl font-bold text-maintext">
            ممتاز! إحنا كده خزّنا الاسم في <span class="text-primary bg-primary/10 px-2 py-1 rounded">متغير</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('')
</script>
