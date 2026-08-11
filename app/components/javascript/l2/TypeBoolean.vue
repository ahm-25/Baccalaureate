<template>
  <section id="type-boolean" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <div class="inline-block bg-purple-500/10 text-purple-400 font-mono font-bold text-3xl px-8 py-3 rounded-2xl mb-8">
        Boolean
      </div>
      
      <p class="text-2xl text-mutedtext mb-12 max-w-2xl mx-auto leading-relaxed">
        <span class="font-mono text-purple-400 font-bold">Boolean</span> هو نوع بيانات ملوش غير قيمتين فقط:<br>
        يا إما <span class="font-mono font-bold text-green-400">true</span> (صح) أو <span class="font-mono font-bold text-red-400">false</span> (غلط).
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-12 shadow-xl">
        
        <!-- Interactive Switch -->
        <div class="flex flex-col items-center justify-center mb-12">
          <div class="text-xl font-bold text-mutedtext mb-6">هل المستخدم متسجل دخول؟ (isLoggedIn)</div>
          
          <div 
            class="w-32 h-16 rounded-full cursor-pointer relative transition-colors duration-300 flex items-center shadow-inner"
            :class="isLoggedIn ? 'bg-green-500/20 border-2 border-green-500' : 'bg-red-500/20 border-2 border-red-500'"
            @click="isLoggedIn = !isLoggedIn"
          >
            <div 
              class="w-12 h-12 rounded-full absolute shadow-md transition-all duration-300 flex items-center justify-center text-xl"
              :class="isLoggedIn ? 'bg-green-500 left-2' : 'bg-red-500 right-2'"
            >
              {{ isLoggedIn ? '✅' : '❌' }}
            </div>
          </div>
          
          <div class="mt-8 font-mono text-4xl font-black transition-colors duration-300" :class="isLoggedIn ? 'text-green-400' : 'text-red-400'">
            {{ isLoggedIn ? 'true' : 'false' }}
          </div>
        </div>

        <!-- Code View -->
        <div class="bg-gray-900 rounded-2xl p-8 text-left font-mono text-2xl relative overflow-hidden" dir="ltr">
          <div class="absolute inset-0 bg-gradient-to-r transition-opacity duration-300" :class="isLoggedIn ? 'from-green-500/5 opacity-100' : 'from-red-500/5 opacity-100'"></div>
          
          <div class="relative z-10">
            <span class="text-purple-400">let</span> <span class="text-blue-300">isLoggedIn</span> <span class="text-white">=</span> 
            <span class="transition-colors duration-300 font-bold" :class="isLoggedIn ? 'text-green-400' : 'text-red-400'">
              {{ isLoggedIn ? 'true' : 'false' }}
            </span>;
          </div>
          
          <div class="mt-4 relative z-10">
            <span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(isLoggedIn);
          </div>
          
          <div class="mt-6 pt-4 border-t border-gray-700 flex items-center gap-4 relative z-10">
            <span class="text-gray-500">></span>
            <span class="font-bold transition-colors duration-300" :class="isLoggedIn ? 'text-green-400' : 'text-red-400'">
              {{ isLoggedIn ? 'true' : 'false' }}
            </span>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoggedIn = ref(false)
</script>
