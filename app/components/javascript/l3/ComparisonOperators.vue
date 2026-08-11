<template>
  <section id="comparison-operators" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-8">
        <span>⚖️</span> إزاي نسأل البرنامج؟
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        أدوات المقارنة
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        علشان نعمل شرط (Condition)، محتاجين نقارن بين قيمتين.
      </p>

      <!-- Operators List -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16" dir="ltr">
        <div v-for="op in operators" :key="op.symbol" class="bg-surface rounded-xl p-4 border border-border flex flex-col items-center justify-center gap-2 shadow-sm hover:border-primary/50 transition-colors">
          <div class="text-3xl font-black font-mono text-primary">{{ op.symbol }}</div>
          <div class="text-sm font-bold text-mutedtext" dir="rtl">{{ op.name }}</div>
        </div>
      </div>

      <!-- Interactive Playground -->
      <div class="bg-surface rounded-3xl p-8 border border-border shadow-xl">
        <h3 class="text-2xl font-bold text-maintext mb-8 text-right">جرب بنفسك:</h3>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8" dir="ltr">
          <input 
            type="number" 
            v-model="val1" 
            class="w-24 text-center text-3xl font-black font-mono bg-background border-2 border-border rounded-xl py-2 focus:border-primary focus:outline-none"
          />
          
          <select 
            v-model="selectedOp" 
            class="text-2xl font-black font-mono bg-primary/10 text-primary border-2 border-primary/30 rounded-xl py-2 px-4 cursor-pointer focus:outline-none"
          >
            <option v-for="op in operators" :key="op.symbol" :value="op.symbol">{{ op.symbol }}</option>
          </select>
          
          <input 
            type="number" 
            v-model="val2" 
            class="w-24 text-center text-3xl font-black font-mono bg-background border-2 border-border rounded-xl py-2 focus:border-primary focus:outline-none"
          />
          
          <div class="text-4xl font-bold text-mutedtext">=</div>
          
          <div class="text-3xl font-black font-mono w-32 text-center py-2 px-4 rounded-xl transition-colors border-2"
               :class="result ? 'bg-green-500/10 text-green-500 border-green-500/30' : 'bg-red-500/10 text-red-500 border-red-500/30'">
            {{ result }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const val1 = ref(10)
const val2 = ref(5)
const selectedOp = ref('>')

const operators = [
  { symbol: '>', name: 'أكبر من' },
  { symbol: '<', name: 'أصغر من' },
  { symbol: '>=', name: 'أكبر من أو يساوي' },
  { symbol: '<=', name: 'أصغر من أو يساوي' },
  { symbol: '===', name: 'يساوي' },
  { symbol: '!==', name: 'لا يساوي' }
]

const result = computed(() => {
  const v1 = val1.value
  const v2 = val2.value
  switch (selectedOp.value) {
    case '>': return v1 > v2
    case '<': return v1 < v2
    case '>=': return v1 >= v2
    case '<=': return v1 <= v2
    case '===': return v1 === v2
    case '!==': return v1 !== v2
    default: return false
  }
})
</script>
