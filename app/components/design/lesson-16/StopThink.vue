<template>
  <section id="stop-think" class="py-12">
    <div class="max-w-4xl mx-auto px-4 space-y-6">
      <div v-for="(q, i) in questions" :key="i" class="bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50"></div>
        <div class="flex items-center gap-3 mb-5">
          <span class="text-3xl">💡</span>
          <h3 class="text-2xl font-bold text-amber-900">توقف وفكر</h3>
        </div>
        <p class="text-xl text-amber-950 font-medium leading-relaxed mb-6">{{ q.q }}</p>

        <button
          @click="open[i] = !open[i]"
          class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
        >
          {{ open[i] ? 'إخفاء الإجابة' : 'عرض الإجابة' }}
        </button>

        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="open[i]" class="mt-6 p-5 bg-white rounded-xl border border-amber-200 text-lg text-slate-800 leading-relaxed">
            <span class="text-2xl">{{ q.icon }}</span> {{ q.a }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const open = reactive([false, false])
const questions = [
  {
    q: 'أي خطوة من خطوات PDCA تخبرك ما إذا كان تغييرك قد نجح فعلًا؟',
    icon: '📏',
    a: 'خطوة تحقّق (Check)؛ لأننا فيها نقيس النتائج ونقارنها بخط الأساس والهدف، فنعرف هل حقق التغيير الهدف أم لا، ثم نبني على ذلك قرار خطوة تصرّف (Act).',
  },
  {
    q: 'في اختبار A/B، إذا أردت عزل أثر تغيير واحد، لماذا يُفضَّل أن يكون الفرق بين النسختين واضحًا ومحددًا؟',
    icon: '🆎',
    a: 'لأنه إذا تغيّرت عدة عناصر معًا، يقيس الاختبار أثر الحزمة كلها ولا يكشف أي عنصر هو الذي سبّب الفرق في النتيجة؛ أما الفرق الواحد الواضح فيجعلنا نعرف أن النتيجة ترجع إليه.',
  },
]
</script>
