<template>
  <section id="type-string" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-4xl mx-auto px-6 w-full text-center">
      <div class="inline-block bg-blue-500/10 text-blue-400 font-mono font-bold text-3xl px-8 py-3 rounded-2xl mb-8">
        String
      </div>
      
      <p class="text-2xl text-mutedtext mb-12 max-w-2xl mx-auto leading-relaxed">
        <span class="font-mono text-blue-400 font-bold">String</span> يعني <span class="font-bold text-maintext">نص</span>. عشان نكتب نص في JavaScript لازم نحطه بين علامتين تنصيص <span class="font-mono text-white">" "</span> أو <span class="font-mono text-white">' '</span>.
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-10 shadow-xl max-w-3xl mx-auto">
        
        <div class="space-y-6 text-left font-mono text-2xl" dir="ltr">
          <div class="bg-black/40 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors text-gray-300">
            <span class="text-purple-400">let</span> <span class="text-blue-300">name</span> <span class="text-white">=</span> <span class="text-green-300">"Ahmed"</span>;
          </div>
          
          <div class="bg-black/40 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors text-gray-300">
            <span class="text-purple-400">let</span> <span class="text-blue-300">city</span> <span class="text-white">=</span> <span class="text-green-300">'Mansoura'</span>;
          </div>
          
          <div class="bg-black/40 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors text-gray-300">
            <span class="text-purple-400">let</span> <span class="text-blue-300">message</span> <span class="text-white">=</span> <span class="text-green-300">"Hello, World!"</span>;
          </div>
        </div>

        <div class="mt-12 flex flex-col items-center">
          <div class="text-xl font-bold text-mutedtext mb-4">جرّب تكتب نص بنفسك:</div>
          <div class="flex items-center gap-4 text-3xl font-mono w-full max-w-md mx-auto" dir="ltr">
            <span class="text-green-300">"</span>
            <input 
              v-model="userString" 
              type="text" 
              class="flex-1 bg-transparent border-b-2 border-blue-500/50 text-white text-center focus:outline-none focus:border-blue-400"
              placeholder="اكتب أي حاجة"
            >
            <span class="text-green-300">"</span>
          </div>
          
          <div class="mt-8">
            <span class="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg font-bold text-lg">
              ده كده بقى String!
            </span>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userString = ref('')
</script>
