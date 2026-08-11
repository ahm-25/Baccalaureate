<template>
  <section id="variable" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-8">يعني إيه Variable؟</h2>
      
      <p class="text-2xl text-mutedtext mb-16 max-w-2xl mx-auto leading-relaxed">
        المتغير هو <span class="text-primary font-bold">مكان في البرنامج بنخزن فيه قيمة</span>، وبنقدر نستخدم القيمة دي بعدين. عامل بالظبط زي الصندوق.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Interactive Box Metaphor -->
        <div class="bg-surface border border-border rounded-3xl p-10 flex flex-col items-center shadow-xl relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
          
          <!-- Box UI -->
          <div 
            class="w-48 h-48 border-4 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all duration-500 cursor-pointer relative"
            :class="isBoxFilled ? 'border-primary bg-primary/5' : 'border-border bg-background'"
            @click="fillBox"
          >
            <!-- Label -->
            <div class="absolute -top-6 bg-surface px-4 font-mono font-bold text-2xl text-mutedtext">age</div>
            
            <!-- Content inside box -->
            <div 
              class="text-6xl font-black font-mono transition-all duration-500"
              :class="isBoxFilled ? 'text-primary scale-100 opacity-100' : 'scale-50 opacity-0'"
            >
              17
            </div>
            
            <div v-if="!isBoxFilled" class="text-mutedtext font-bold flex flex-col items-center gap-2">
              <span>اضغط هنا</span>
              <span class="text-sm">عشان تحط قيمة</span>
            </div>
          </div>
        </div>

        <!-- Code representation -->
        <div class="bg-surface border border-border rounded-3xl p-10 shadow-xl flex flex-col justify-center h-full text-left" dir="ltr">
          <div class="font-mono text-2xl leading-loose">
            <div class="opacity-50 mb-4 transition-opacity duration-500" :class="{ 'opacity-100': isBoxFilled }">
              <span class="text-purple-400">let</span> <span class="text-blue-300">age</span> <span class="text-maintext">=</span> <span class="text-orange-400">17</span>;
            </div>
            
            <div class="opacity-50 transition-opacity duration-500" :class="{ 'opacity-100': isBoxFilled }">
              <span class="text-yellow-300">console</span>.<span class="text-blue-300">log</span>(age);
            </div>
            
            <div class="mt-8 pt-4 border-t border-border flex items-center gap-4 transition-opacity duration-500" :class="{ 'opacity-100': isBoxFilled, 'opacity-0': !isBoxFilled }">
              <span class="text-gray-500">></span>
              <span class="text-green-400 font-bold">17</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12">
        <button 
          v-if="isBoxFilled"
          @click="resetBox" 
          class="text-mutedtext hover:text-maintext font-bold underline transition-colors"
        >
          جرب تاني
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isBoxFilled = ref(false)

const fillBox = () => {
  isBoxFilled.value = true
}

const resetBox = () => {
  isBoxFilled.value = false
}
</script>
