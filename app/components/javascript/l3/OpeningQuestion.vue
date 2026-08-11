<template>
  <section id="opening" class="min-h-screen py-20 bg-surface relative flex flex-col justify-center border-y border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-8">
        <span>🤔</span> سؤال البداية
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        خلينا نفكر الأول...
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        لو الطالب جاب <span class="font-bold text-primary">90 درجة</span>...
        <br>
        هل البرنامج يقدر يقول له: ممتاز؟
      </p>

      <div class="bg-background rounded-3xl p-8 border border-border shadow-xl max-w-lg mx-auto">
        <div class="flex flex-col gap-6" dir="rtl">
          <label class="text-right text-lg font-bold text-maintext">الدرجة:</label>
          <input 
            type="number" 
            v-model="score" 
            class="bg-surface border-2 border-border rounded-xl px-4 py-4 text-center text-3xl font-bold text-maintext focus:border-primary focus:outline-none transition-colors"
            placeholder="أدخل درجة الطالب..."
          />
          <button 
            @click="checkScore"
            class="bg-primary text-white font-bold text-xl py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            تحقق
          </button>
        </div>

        <div v-if="hasChecked" class="mt-8 pt-8 border-t border-border animate-fade-in">
          <div v-if="score >= 90" class="bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl p-6">
            <div class="text-4xl mb-4">👏</div>
            <div class="text-2xl font-bold">ممتاز!</div>
          </div>
          <div v-else class="bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-xl p-6">
            <div class="text-4xl mb-4">💪</div>
            <div class="text-2xl font-bold">محتاج تكمل تدريبك</div>
          </div>
        </div>
      </div>

      <div v-if="hasChecked" class="mt-12 animate-fade-in">
        <p class="text-2xl font-bold text-primary bg-primary/10 inline-block px-8 py-4 rounded-2xl">
          إحنا كده خلينا البرنامج ياخد قرار.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const score = ref<number | null>(null)
const hasChecked = ref(false)

const checkScore = () => {
  if (score.value !== null) {
    hasChecked.value = true
  }
}
</script>
