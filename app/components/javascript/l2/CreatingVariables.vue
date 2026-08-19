<template>
  <section id="creating-variables" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-12">إزاي أعمل Variable في JavaScript؟</h2>
      
      <p class="text-2xl text-mutedtext mb-12">
        عشان نعرف البرنامج إننا عايزين نعمل متغير جديد، بنستخدم كلمة من اتنين: <br>
        <span class="inline-block mt-4 font-mono font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg mx-2">let</span>
        أو
        <span class="inline-block mt-4 font-mono font-bold text-accent bg-accent/10 px-4 py-2 rounded-lg mx-2">const</span>
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-10 shadow-2xl relative overflow-hidden text-left" dir="ltr">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
        
        <div class="relative z-10 flex flex-col gap-12 font-mono text-3xl md:text-5xl font-black justify-center items-center">
          
          <div class="flex flex-wrap items-center justify-center gap-4 cursor-pointer" @click="animateStep">
            <!-- Keyword -->
            <div class="flex flex-col items-center gap-4 transition-all duration-500" :class="step >= 1 ? 'opacity-100 scale-100' : 'opacity-20 scale-90'">
              <span class="text-purple-600">let</span>
              <div v-if="step >= 1" class="text-sm font-sans text-mutedtext text-center border-t-2 border-purple-400/50 pt-2 animate-fade-in">Create<br>variable</div>
            </div>
            
            <!-- Name -->
            <div class="flex flex-col items-center gap-4 transition-all duration-500 delay-100" :class="step >= 2 ? 'opacity-100 scale-100' : 'opacity-20 scale-90'">
              <span class="text-blue-600">age</span>
              <div v-if="step >= 2" class="text-sm font-sans text-mutedtext text-center border-t-2 border-blue-400/50 pt-2 animate-fade-in">Variable<br>name</div>
            </div>
            
            <!-- Assignment -->
            <div class="flex flex-col items-center gap-4 transition-all duration-500 delay-200" :class="step >= 3 ? 'opacity-100 scale-100' : 'opacity-20 scale-90'">
              <span class="text-maintext">=</span>
            </div>
            
            <!-- Value -->
            <div class="flex flex-col items-center gap-4 transition-all duration-500 delay-300" :class="step >= 4 ? 'opacity-100 scale-100' : 'opacity-20 scale-90'">
              <span class="text-orange-600">17</span>
              <div v-if="step >= 4" class="text-sm font-sans text-mutedtext text-center border-t-2 border-orange-400/50 pt-2 animate-fade-in">Value</div>
            </div>
            
            <!-- Semicolon -->
            <div class="flex flex-col items-center gap-4 transition-all duration-500 delay-400" :class="step >= 5 ? 'opacity-100 scale-100' : 'opacity-20 scale-90'">
              <span class="text-maintext">;</span>
            </div>
          </div>
          
          <button v-if="step === 0" @click.stop="animateStep" class="text-lg font-sans bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full mt-4 transition-all">
            شغّل الكود
          </button>
          
          <button v-if="step === 5" @click.stop="step = 0" class="text-lg font-sans text-mutedtext hover:text-maintext underline mt-4 transition-colors">
            إعادة
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const step = ref(0)

const animateStep = () => {
  if (step.value === 5) return
  
  // Auto animate sequence
  let currentStep = 1
  step.value = currentStep
  
  const interval = setInterval(() => {
    currentStep++
    step.value = currentStep
    if (currentStep >= 5) {
      clearInterval(interval)
    }
  }, 800)
}
</script>
