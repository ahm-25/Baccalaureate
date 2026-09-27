<template>
  <section id="case-study" class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-500/30 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 -z-10"></div>
        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 bg-indigo-500/30 rounded-2xl flex items-center justify-center text-3xl border border-indigo-400/50">🎯</div>
          <h2 class="text-2xl md:text-3xl font-bold">حالة دراسية: نظام توظيف بالذكاء الاصطناعي</h2>
        </div>
        
        <p class="text-xl text-indigo-100 font-medium mb-8 leading-relaxed">
          شركة تستخدم نظام ذكاء اصطناعي لفرز طلبات التوظيف. بعد فترة، لوحظ أن النظام يرفض نسبة أكبر من فئة معينة من المتقدمين بشكل متكرر.
        </p>

        <div class="space-y-4">
          <div v-for="(q, index) in questions" :key="index" class="bg-white/10 rounded-2xl border border-white/10 overflow-hidden">
            <button 
              @click="toggle(index)" 
              class="w-full text-right px-6 py-4 font-bold text-lg flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
            >
              <span>{{ q.q }}</span>
              <span class="text-indigo-300 transform transition-transform" :class="{'rotate-180': open === index}">▼</span>
            </button>
            <div v-show="open === index" class="px-6 pb-4 text-indigo-100 font-medium border-t border-white/10 pt-4">
              <strong class="text-white">{{ q.a_bold }}</strong> {{ q.a_text }}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)
const toggle = (i) => {
  open.value = open.value === i ? null : i
}

const questions = [
  { q: "ما المشكلة المحتملة؟", a_bold: "تحيز خوارزمي.", a_text: "النظام يُظهر نمطًا غير عادل تجاه فئة معينة." },
  { q: "ما السبب المحتمل؟", a_bold: "بيانات التدريب،", a_text: "أو تصميم النظام، أو طريقة استخدامه." },
  { q: "ما المبدأ الأخلاقي المرتبط بهذه المشكلة؟", a_bold: "العدالة.", a_text: "لأن هناك تمييزًا غير عادل." },
  { q: "ما السؤال المتعلق بالشفافية في هذا الموقف؟", a_bold: "الشفافية تقتضي السؤال:", a_text: "هل يمكن فهم العوامل التي أدت إلى رفض هؤلاء الأشخاص؟" },
  { q: "ما دور الذكاء الاصطناعي القابل للتفسير (XAI)؟", a_bold: "المساعدة في فهم العوامل", a_text: "التي أسهمت في هذا القرار لتحديد سبب التحيز." },
  { q: "من المسؤول عن حل هذه المشكلة؟", a_bold: "المساءلة تتطلب تحديد الأدوار:", a_text: "المطور (لإصلاح النظام) والجهة المشغلة (لإيقاف استخدامه ومراجعته)." }
]
</script>
