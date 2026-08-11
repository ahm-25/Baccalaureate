<template>
  <section id="const" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <div class="inline-block bg-accent/10 text-accent font-mono font-bold text-3xl px-8 py-3 rounded-2xl mb-8">
        const
      </div>
      
      <p class="text-2xl text-mutedtext mb-16 max-w-2xl mx-auto leading-relaxed">
        بنستخدم <span class="font-mono text-accent font-bold">const</span> لما نكون عارفين إن القيمة المفروض <span class="text-red-400 font-bold">ما تتغيرش أبداً</span> بعد ما نحددها أول مرة.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Interactive Variable -->
        <div class="bg-surface border border-border rounded-3xl p-10 flex flex-col items-center shadow-xl">
          <div class="text-xl font-bold text-mutedtext mb-6">المتغير في الذاكرة (ثابت)</div>
          
          <div class="w-48 h-48 border-4 border-accent rounded-3xl flex flex-col items-center justify-center bg-accent/5 relative transition-all duration-300" :class="{ 'animate-shake border-red-500 bg-red-500/10': hasError }">
            <div class="absolute -top-6 bg-surface px-4 font-mono font-bold text-2xl text-accent" :class="{ 'text-red-500': hasError }">country</div>
            
            <div class="absolute -top-3 -right-3 bg-background rounded-full p-1 border-2 border-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <div class="text-4xl font-black font-mono text-accent" :class="{ 'text-red-500': hasError }">
              "Egypt"
            </div>
          </div>
          
          <button 
            @click="tryChangeValue" 
            class="mt-8 bg-background border border-border hover:border-red-500 hover:text-red-500 text-maintext font-bold px-8 py-3 rounded-full transition-all"
          >
            جرب تغيرها لـ "KSA"
          </button>
        </div>

        <!-- Code Block -->
        <div class="bg-gray-900 rounded-3xl p-8 shadow-xl text-left font-mono text-xl relative" dir="ltr">
          <div class="text-gray-500 text-sm mb-4 border-b border-gray-700 pb-2 uppercase tracking-widest">script.js</div>
          
          <div>
            <span class="text-purple-400">const</span> <span class="text-blue-300">country</span> <span class="text-white">=</span> <span class="text-green-300">"Egypt"</span>;
          </div>
          <div class="mt-2">
            <span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(country);
          </div>
          
          <div class="mt-4 opacity-50 transition-opacity duration-300" :class="{ 'opacity-100': hasError }">
            <span class="text-blue-300">country</span> <span class="text-white">=</span> <span class="text-green-300">"KSA"</span>; <span class="text-gray-500 italic">// محاولة التغيير</span>
          </div>
          
          <div class="mt-8 bg-black/50 rounded-xl p-4 border border-gray-700 transition-all duration-300" :class="{ 'border-red-500/50': hasError }">
            <div class="text-gray-500 text-xs mb-2 uppercase">Console</div>
            <div class="text-gray-300">> Egypt</div>
            <div v-if="hasError" class="text-red-400 mt-2 text-sm leading-relaxed animate-fade-in font-sans font-bold">
              Uncaught TypeError: Assignment to constant variable.
              <br>
              <span class="text-gray-400 font-normal mt-1 block">مينفعش نغير قيمة const بعد ما نعرفها.</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="hasError" class="mt-12 animate-fade-in">
        <button @click="reset" class="text-mutedtext hover:text-maintext underline font-bold transition-colors">
          إعادة
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hasError = ref(false)

const tryChangeValue = () => {
  hasError.value = true
}

const reset = () => {
  hasError.value = false
}
</script>
