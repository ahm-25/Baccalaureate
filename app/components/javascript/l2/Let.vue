<template>
  <section id="let" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <div class="inline-block bg-primary/10 text-primary font-mono font-bold text-3xl px-8 py-3 rounded-2xl mb-8">
        let
      </div>
      
      <p class="text-2xl text-mutedtext mb-16 max-w-2xl mx-auto leading-relaxed">
        بنستخدم <span class="font-mono text-primary font-bold">let</span> لما نكون عارفين إن القيمة ممكن تتغير بعدين.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Interactive Variable -->
        <div class="bg-background border border-border rounded-3xl p-10 flex flex-col items-center shadow-xl">
          <div class="text-xl font-bold text-mutedtext mb-6">المتغير في الذاكرة</div>
          
          <div class="w-48 h-48 border-4 border-primary rounded-3xl flex flex-col items-center justify-center bg-primary/5 relative transition-all duration-500 overflow-hidden group">
            <div class="absolute -top-6 bg-background px-4 font-mono font-bold text-2xl text-primary">age</div>
            
            <div 
              class="text-7xl font-black font-mono text-primary transition-all duration-500"
              :class="{ 'scale-110 text-green-500': isChanged }"
            >
              {{ isChanged ? '18' : '17' }}
            </div>
            
            <!-- Confetti effect on change -->
            <div v-if="isChanged" class="absolute inset-0 bg-green-500/20 animate-ping" style="animation-iteration-count: 1"></div>
          </div>
          
          <button 
            @click="changeValue" 
            :disabled="isChanged"
            class="mt-8 bg-surface border border-border hover:border-primary hover:text-primary text-maintext font-bold px-8 py-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isChanged ? 'القيمة اتغيرت ✅' : 'غيّر القيمة لـ 18' }}
          </button>
        </div>

        <!-- Code Block -->
        <div class="bg-gray-900 rounded-3xl p-8 shadow-xl text-left font-mono text-xl" dir="ltr">
          <div class="text-gray-500 text-sm mb-4 border-b border-gray-700 pb-2 uppercase tracking-widest">script.js</div>
          
          <div>
            <span class="text-purple-400">let</span> <span class="text-blue-300">age</span> <span class="text-white">=</span> <span class="text-orange-400">17</span>;
          </div>
          <div class="mt-2">
            <span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(age);
          </div>
          
          <div class="mt-4 opacity-50 transition-opacity duration-500" :class="{ 'opacity-100': isChanged }">
            <span class="text-blue-300">age</span> <span class="text-white">=</span> <span class="text-orange-400">18</span>; <span class="text-gray-500 italic">// إعادة إسناد قيمة جديدة</span>
          </div>
          <div class="mt-2 opacity-50 transition-opacity duration-500" :class="{ 'opacity-100': isChanged }">
            <span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(age);
          </div>
          
          <div class="mt-8 bg-black/50 rounded-xl p-4 border border-gray-700">
            <div class="text-gray-500 text-xs mb-2 uppercase">Console</div>
            <div class="text-gray-300">> 17</div>
            <div v-if="isChanged" class="text-green-400 animate-fade-in">> 18</div>
          </div>
        </div>
      </div>
      
      <div v-if="isChanged" class="mt-12 animate-fade-in">
        <button @click="reset" class="text-mutedtext hover:text-maintext underline font-bold transition-colors">
          إعادة
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isChanged = ref(false)

const changeValue = () => {
  isChanged.value = true
}

const reset = () => {
  isChanged.value = false
}
</script>
