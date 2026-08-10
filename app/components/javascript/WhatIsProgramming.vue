<template>
  <section id="programming" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">يعني إيه Programming؟</h2>
        <p class="text-2xl text-mutedtext max-w-3xl mx-auto leading-relaxed">
          البرمجة هي كتابة <span class="font-bold text-primary">مجموعة من التعليمات</span> التي تجعل الكمبيوتر ينفذ مهمة معينة.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Visual Analogy -->
        <div class="bg-surface p-10 rounded-[2.5rem] border border-border shadow-xl relative overflow-hidden">
          <h3 class="text-2xl font-bold text-maintext mb-8 text-center flex items-center justify-center gap-3">
            <span>تخيل إنك بتشرح لصاحبك يعمل شاي ☕</span>
          </h3>
          
          <div class="space-y-4">
            <div v-for="(step, index) in steps" :key="index"
                 class="flex items-center gap-4 bg-background p-4 rounded-xl border border-border/50 shadow-sm transition-all duration-300"
                 :class="{ 'opacity-50 scale-95': currentStep < index, 'border-primary shadow-primary/10 scale-100': currentStep === index, 'opacity-100': currentStep > index }">
              <div class="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                {{ index + 1 }}
              </div>
              <p class="font-medium text-maintext text-lg">{{ step }}</p>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <button v-if="currentStep < steps.length" @click="nextStep" class="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md">
              الخطوة التالية
            </button>
            <button v-else @click="resetSteps" class="bg-surface text-mutedtext border border-border px-8 py-3 rounded-xl font-bold hover:bg-border transition-colors">
              إعادة
            </button>
          </div>
        </div>

        <!-- Connection to Programming -->
        <div class="space-y-8">
          <div class="bg-white p-8 rounded-3xl shadow-lg border border-border/50 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            </div>
            <h4 class="text-2xl font-black text-maintext mb-3">دي مجموعة تعليمات مرتبة</h4>
            <p class="text-lg text-mutedtext leading-relaxed">
              زي ما صاحبك محتاج خطوات مرتبة عشان يعمل شاي، الكمبيوتر محتاج خطوات مرتبة (كود) عشان ينفذ المطلوب.
            </p>
          </div>
          
          <div class="flex items-center justify-between text-2xl font-bold text-maintext px-8 py-10 bg-surface rounded-3xl border border-border shadow-inner">
            <div class="flex flex-col items-center gap-2">
              <span class="text-4xl mb-2">👤</span>
              <span>أنت</span>
            </div>
            <div class="flex-1 flex flex-col items-center">
              <span class="text-primary text-sm tracking-widest mb-1">تعليمات</span>
              <div class="w-full h-1 bg-gradient-to-l from-primary to-transparent rounded-full relative">
                <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-4xl mb-2">💻</span>
              <span>الكمبيوتر</span>
            </div>
            <div class="flex-1 flex flex-col items-center">
              <span class="text-accent text-sm tracking-widest mb-1">نتيجة</span>
              <div class="w-full h-1 bg-gradient-to-l from-accent to-transparent rounded-full relative">
                <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-2">
              <span class="text-4xl mb-2">✨</span>
              <span>النتيجة</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const steps = [
  'حط المياه.',
  'سخن المياه.',
  'حط الشاي.',
  'أضف السكر.',
  'قدم الشاي.'
]

const currentStep = ref(0)

const nextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++
  }
}

const resetSteps = () => {
  currentStep.value = 0
}
</script>
