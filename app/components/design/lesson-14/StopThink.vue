<template>
  <section id="stop-think" class="py-12">
    <div class="max-w-4xl mx-auto px-4 space-y-6">
      <div v-for="(q, i) in questions" :key="i" class="bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50"></div>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">💡</span>
          <h3 class="text-2xl font-bold text-amber-900">توقف وفكر</h3>
        </div>
        <p class="text-xl text-amber-950 font-medium leading-relaxed mb-8">{{ q.q }}</p>

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
          <div v-if="open[i]" class="mt-6 p-5 bg-white rounded-xl border border-amber-200 text-lg text-slate-800 leading-relaxed" v-html="q.a"></div>
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
    q: 'لماذا يُحدَّد مكان المعلومات (المخطط الهيكلي) قبل اختيار الألوان والخطوط؟',
    a: '📐 لأن الفريق يركز أولًا على <strong>توزيع المعلومات ومواضعها وأولوياتها</strong>. فإذا حُددت الألوان والخطوط أولًا تميل النقاشات إلى <strong>التفضيلات الشخصية في المظهر</strong>، بينما يسهّل الاتفاق على البنية أولًا وصول أصحاب المصلحة إلى اتفاق.',
  },
  {
    q: 'أي مبدأ يجمع العناصر المرتبطة معًا، وأيها يجعل العنصر الأهم بارزًا؟',
    a: '🧲 <strong>التقارب</strong> يجمع العناصر المرتبطة معًا (مثل صورة المنتج واسمه وسعره)، و🔆 <strong>التباين</strong> يجعل العنصر الأهم بارزًا (مثل عنوان كبير وغامق أو زر مهم واضح).',
  },
]
</script>
