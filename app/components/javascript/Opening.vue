<template>
  <section id="opening" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-4xl mx-auto w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold mb-8">
        <span class="w-2 h-2 rounded-full bg-accent"></span>
        سؤال البداية
      </div>
      
      <h2 class="text-5xl font-black text-maintext mb-6">قبل ما نكتب أول سطر كود...</h2>
      
      <p class="text-2xl text-mutedtext mb-16 leading-relaxed max-w-2xl mx-auto">
        لما تضغط على زر في موقع... إزاي الموقع بيعرف إنك ضغطت عليه وبيستجيب ليك؟
      </p>

      <div class="relative bg-surface rounded-[2rem] border border-border shadow-2xl p-12 max-w-2xl mx-auto overflow-hidden">
        <div class="absolute inset-0 transition-colors duration-1000" :class="isClicked ? 'bg-primary/5' : 'bg-transparent'"></div>
        
        <div class="relative z-10 flex flex-col items-center justify-center min-h-[250px]">
          <Transition mode="out-in" name="fade-slide">
            <button v-if="!isClicked" @click="handleClick" class="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              اضغط هنا
            </button>
            <div v-else class="text-center">
              <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner border border-green-200">
                ✓
              </div>
              <h3 class="text-3xl font-black text-maintext mb-4">مين اللي عمل كده؟</h3>
              <p class="text-2xl font-bold text-primary bg-primary/10 px-6 py-2 rounded-full inline-block">JavaScript</p>
              <p class="text-lg text-mutedtext mt-6">
                JavaScript بتخلي صفحة الويب تستجيب لأفعال المستخدم (زي الضغط على الزر).
              </p>
              <button @click="reset" class="mt-8 text-mutedtext hover:text-primary text-sm font-bold flex items-center gap-2 mx-auto transition-colors">
                <span>إعادة التجربة</span>
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isClicked = ref(false)

const handleClick = () => {
  isClicked.value = true
}

const reset = () => {
  isClicked.value = false
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
