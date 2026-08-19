<template>
  <section id="type-number" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <div class="inline-block bg-orange-500/10 text-orange-400 font-mono font-bold text-3xl px-8 py-3 rounded-2xl mb-8">
        Number
      </div>
      
      <p class="text-2xl text-mutedtext mb-12 max-w-2xl mx-auto leading-relaxed">
        <span class="font-mono text-orange-600 font-bold">Number</span> يعني <span class="font-bold text-maintext">رقم</span>. بنكتب الأرقام عادي من غير علامات تنصيص. نقدر نعمل عليها كل العمليات الحسابية (جمع، طرح، ضرب، قسمة).
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- Examples -->
        <div class="bg-background border border-border rounded-3xl p-8 shadow-xl text-left font-mono text-2xl space-y-6 flex flex-col justify-center" dir="ltr">
          <div class="bg-surface border border-border rounded-2xl p-6">
            <span class="text-purple-600">let</span> <span class="text-blue-600">age</span> <span class="text-maintext">=</span> <span class="text-orange-600">17</span>;
          </div>
          <div class="bg-surface border border-border rounded-2xl p-6">
            <span class="text-purple-600">let</span> <span class="text-blue-600">score</span> <span class="text-maintext">=</span> <span class="text-orange-600">95</span>;
          </div>
          <div class="bg-surface border border-border rounded-2xl p-6">
            <span class="text-purple-600">let</span> <span class="text-blue-600">price</span> <span class="text-maintext">=</span> <span class="text-orange-600">150.5</span>;
          </div>
        </div>

        <!-- Interactive Math -->
        <div class="bg-background border border-border rounded-3xl p-8 shadow-xl flex flex-col items-center">
          <h3 class="text-2xl font-bold text-maintext mb-8">عمليات حسابية</h3>
          
          <div class="w-full flex items-center justify-between text-3xl font-mono mb-8" dir="ltr">
            <div class="flex flex-col items-center gap-2">
              <span class="text-sm font-sans text-mutedtext text-right w-full" dir="rtl">المتغير الأول (x)</span>
              <input type="number" v-model="x" class="w-24 text-center bg-surface border-2 border-orange-500/50 rounded-xl py-2 text-orange-400 focus:outline-none focus:border-orange-400">
            </div>
            
            <div class="text-mutedtext font-black">+</div>
            
            <div class="flex flex-col items-center gap-2">
              <span class="text-sm font-sans text-mutedtext text-right w-full" dir="rtl">المتغير الثاني (y)</span>
              <input type="number" v-model="y" class="w-24 text-center bg-surface border-2 border-orange-500/50 rounded-xl py-2 text-orange-400 focus:outline-none focus:border-orange-400">
            </div>
          </div>
          
          <div class="w-full bg-gray-900 rounded-xl p-6 text-left font-mono text-xl mb-6 text-gray-300" dir="ltr">
            <div class="mb-2"><span class="text-purple-400">let</span> <span class="text-blue-300">x</span> <span class="text-white">=</span> <span class="text-orange-400">{{ x }}</span>;</div>
            <div class="mb-4"><span class="text-purple-400">let</span> <span class="text-blue-300">y</span> <span class="text-white">=</span> <span class="text-orange-400">{{ y }}</span>;</div>
            <div><span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(x + y);</div>
          </div>
          
          <div class="w-full bg-black/60 border border-gray-800 rounded-xl p-4 flex items-center gap-4 text-2xl font-mono" dir="ltr">
            <span class="text-gray-500">></span>
            <span class="text-green-400 font-bold transition-all duration-300" :key="sum">{{ sum }}</span>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const x = ref(10)
const y = ref(20)

const sum = computed(() => {
  return Number(x.value) + Number(y.value)
})
</script>
