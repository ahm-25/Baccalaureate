<template>
  <section id="real-life" class="py-20 bg-surface relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-8">
        <span>🌍</span> في حياتنا
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        الشروط موجودة في حياتنا أصلًا
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        اختار موقف وشوف إزاي بناخد قرار فيه
      </p>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
        <button 
          v-for="(example, index) in examples" 
          :key="index"
          @click="activeExample = index"
          class="p-4 rounded-2xl border-2 transition-all font-bold text-lg"
          :class="activeExample === index ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' : 'bg-background text-maintext border-border hover:border-primary/50 hover:bg-primary/5'"
        >
          {{ example.icon }}
        </button>
      </div>

      <div class="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-xl min-h-[300px] flex items-center justify-center">
        <div class="flex flex-col items-center gap-6" v-if="currentExample">
          <!-- Condition -->
          <div class="text-2xl md:text-3xl font-bold text-maintext bg-surface px-8 py-4 rounded-2xl border border-border">
            لو {{ currentExample.condition }}
          </div>
          
          <div class="flex items-center justify-center gap-12 text-xl font-bold text-mutedtext w-full max-w-md">
            <div class="flex flex-col items-center gap-2 group w-1/2">
              <span class="text-green-500">تحقق ✅</span>
              <div class="h-12 w-0.5 bg-green-500/30"></div>
              <div class="bg-green-500/10 text-green-600 px-6 py-3 rounded-xl border border-green-500/20 text-center w-full shadow-sm">
                {{ currentExample.yesAction }}
              </div>
            </div>
            
            <div class="flex flex-col items-center gap-2 group w-1/2">
              <span class="text-red-500">لم يتحقق ❌</span>
              <div class="h-12 w-0.5 bg-red-500/30"></div>
              <div class="bg-red-500/10 text-red-600 px-6 py-3 rounded-xl border border-red-500/20 text-center w-full shadow-sm">
                {{ currentExample.noAction }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeExample = ref(0)

const examples = [
  {
    icon: '🌧️ مطر',
    condition: 'الجو ممطر',
    yesAction: 'خد شمسية',
    noAction: 'متخدش شمسية'
  },
  {
    icon: '🔋 بطارية',
    condition: 'البطارية أقل من 20%',
    yesAction: 'اشحن الموبايل',
    noAction: 'كمل استخدام عادي'
  },
  {
    icon: '🛒 شراء',
    condition: 'معاك فلوس كفاية',
    yesAction: 'اشتري المنتج',
    noAction: 'استنى شوية'
  },
  {
    icon: '🌡️ حرارة',
    condition: 'درجة الحرارة عالية',
    yesAction: 'شغل التكييف',
    noAction: 'افتح الشباك'
  },
  {
    icon: '🔒 دخول',
    condition: 'كلمة السر صحيحة',
    yesAction: 'اسمح بالدخول',
    noAction: 'امنع الدخول'
  }
]

const currentExample = computed(() => examples[activeExample.value])
</script>
