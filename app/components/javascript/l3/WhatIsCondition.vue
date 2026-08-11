<template>
  <section id="what-is-condition" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
        <span>❓</span> يعني إيه Condition؟
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        يعني إيه Condition؟
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        الشرط هو سؤال بنسأله للبرنامج،
        <br>
        والإجابة عليه بتكون <span class="font-mono text-green-500 font-bold bg-green-500/10 px-2 rounded">true</span> أو <span class="font-mono text-red-500 font-bold bg-red-500/10 px-2 rounded">false</span>.
      </p>

      <div class="bg-surface rounded-3xl p-8 md:p-12 border border-border shadow-xl max-w-2xl mx-auto">
        <div class="flex flex-col gap-8">
          <!-- Slider -->
          <div class="flex flex-col gap-4">
            <div class="flex justify-between items-center text-lg font-bold text-maintext">
              <span>العمر: {{ age }}</span>
              <span class="text-mutedtext text-sm">حرك المؤشر</span>
            </div>
            <input 
              type="range" 
              v-model="age" 
              min="0" 
              max="30" 
              class="w-full h-4 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div class="flex justify-between text-xs text-mutedtext font-mono font-bold px-1">
              <span>0</span>
              <span>30</span>
            </div>
          </div>

          <!-- Condition Box -->
          <div class="bg-background rounded-2xl p-6 border-2 flex flex-col items-center gap-4 transition-colors"
               :class="isTrue ? 'border-green-500/50' : 'border-red-500/50'" dir="ltr">
            <div class="text-xl text-mutedtext font-bold mb-2">الشرط (Condition)</div>
            <div class="font-mono text-3xl font-black text-maintext">
              age >= 18
            </div>
            
            <div class="mt-4 flex flex-col items-center gap-2">
              <div class="text-lg text-mutedtext">النتيجة:</div>
              <div class="text-4xl font-black font-mono transition-colors"
                   :class="isTrue ? 'text-green-500' : 'text-red-500'">
                {{ isTrue ? 'TRUE' : 'FALSE' }}
              </div>
            </div>
          </div>
          
          <!-- Explanation text -->
          <div class="text-center text-lg text-mutedtext bg-background p-4 rounded-xl border border-border">
            <span v-if="isTrue">الشرط صحيح (true) لأن العمر {{ age }} أكبر من أو يساوي 18.</span>
            <span v-else>الشرط خطأ (false) لأن العمر {{ age }} أصغر من 18.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const age = ref(15)
const isTrue = computed(() => age.value >= 18)
</script>
