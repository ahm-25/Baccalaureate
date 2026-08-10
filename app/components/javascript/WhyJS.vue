<template>
  <section id="why-js" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-5xl mx-auto w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-12">ليه JavaScript مهمة؟</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Before -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-sm flex flex-col items-center">
          <div class="bg-gray-100 text-gray-500 font-bold px-4 py-1 rounded-full text-sm mb-6 border border-gray-200">
            قبل JavaScript (صفحة ثابتة)
          </div>
          
          <div class="w-full h-[300px] bg-white rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-6 p-6">
            <h3 class="text-2xl font-bold text-maintext">مرحباً بك في موقعي</h3>
            <p class="text-mutedtext">اضغط على الزر لرؤية سحر الموقع.</p>
            <button class="bg-gray-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-700 transition-colors cursor-pointer"
                    @click="showNoJsMessage">
              اضغط هنا
            </button>
            <div class="h-8">
              <span v-if="noJsMessage" class="text-red-500 font-bold text-sm">مفيش حاجة بتحصل 🤷‍♂️</span>
            </div>
          </div>
        </div>

        <!-- After -->
        <div class="bg-primary/5 p-8 rounded-3xl border border-primary/20 shadow-lg flex flex-col items-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
          
          <div class="bg-primary text-white font-bold px-4 py-1 rounded-full text-sm mb-6 shadow-md relative z-10 flex items-center gap-2">
            <span>بعد JavaScript (صفحة تفاعلية)</span>
            <span class="animate-pulse">✨</span>
          </div>
          
          <div class="w-full h-[300px] bg-white rounded-2xl border border-primary/30 shadow-inner flex flex-col items-center justify-center gap-6 p-6 relative z-10 transition-colors duration-500"
               :class="{'bg-gradient-to-br from-indigo-50 to-purple-50': isInteractive}">
            <h3 class="text-2xl font-bold transition-colors duration-500" :class="isInteractive ? 'text-primary' : 'text-maintext'">
              {{ isInteractive ? 'أهلاً بيك في عالم البرمجة! 🚀' : 'مرحباً بك في موقعي' }}
            </h3>
            <p class="text-mutedtext transition-opacity" :class="{'opacity-0': isInteractive}">
              اضغط على الزر لرؤية سحر الموقع.
            </p>
            <button class="px-8 py-3 rounded-xl font-bold transition-all duration-300 transform"
                    :class="isInteractive ? 'bg-accent text-white hover:bg-accent/90 shadow-lg scale-105' : 'bg-primary text-white hover:bg-primary/90 shadow-md'"
                    @click="triggerInteraction">
              {{ isInteractive ? 'إعادة' : 'اضغط هنا' }}
            </button>
            <div class="h-8">
              <Transition name="bounce">
                <span v-if="isInteractive" class="text-accent font-bold text-lg inline-block">
                  JavaScript دخلت اللعبة! 🎉
                </span>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-xl border border-border/50 max-w-4xl mx-auto">
        <h3 class="text-2xl font-black text-maintext mb-6">من غير JavaScript:</h3>
        <p class="text-xl text-mutedtext mb-8">
          الموقع هيكون مجرد نصوص وصور، زي الجريدة بالظبط. تقرأ بس ومفيش أي تفاعل.
        </p>
        
        <h3 class="text-2xl font-black text-primary mb-6">بفضل JavaScript تقدر:</h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-right text-lg font-medium text-maintext">
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> تتفاعل مع النقرات</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> تغير محتوى الصفحة</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> تعمل عمليات حسابية</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> تتأكد من صحة البيانات</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> تتحكم في شكل الموقع</li>
          <li class="flex items-center gap-2"><span class="text-green-500">✓</span> تصنع ألعاب وتجارب</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const noJsMessage = ref(false)
const showNoJsMessage = () => {
  noJsMessage.value = true
  setTimeout(() => {
    noJsMessage.value = false
  }, 2000)
}

const isInteractive = ref(false)
const triggerInteraction = () => {
  isInteractive.value = !isInteractive.value
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
