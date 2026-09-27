<template>
  <section id="privacy" class="py-16 bg-slate-50 border-y border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-slate-900 mb-4">3. حماية الخصوصية</h2>
      <p class="text-lg text-slate-600 mb-10 max-w-3xl leading-relaxed">
        استخدام الذكاء الاصطناعي قد يتطلب بيانات شخصية، وجمع واستخدام هذه البيانات يثير قضايا تتعلق بالخصوصية.
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div class="text-3xl mb-4">📷</div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">1. المراقبة عبر التعرف على الوجه</h3>
          <p class="text-slate-600">يمكن للكاميرات في الأماكن العامة التعرف على الأفراد وتتبعهم بدون إذن مباشر.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div class="text-3xl mb-4">🌐</div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">2. الجمع الجماعي للبيانات</h3>
          <p class="text-slate-600">تجمع الأنظمة وتحلل كميات كبيرة من بيانات السلوك عبر الإنترنت لبناء ملفات شخصية دقيقة.</p>
        </div>
      </div>
      
      <!-- Interactive Warning -->
      <div class="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 -z-10"></div>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl text-rose-500">⚠️</span>
          <h3 class="text-2xl font-bold">السؤال الأخلاقي</h3>
        </div>
        <p class="text-xl md:text-2xl font-medium leading-relaxed mb-8">
          "هل مجرد قدرة النظام على جمع البيانات تعني أنه ينبغي استخدام هذه البيانات؟"
        </p>
        
        <button 
          @click="showAnswer = !showAnswer" 
          class="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-colors border border-white/20"
        >
          {{ showAnswer ? 'إخفاء الإجابة' : 'عرض الإجابة' }}
        </button>
        
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="showAnswer" class="mt-6 p-5 bg-indigo-500/20 rounded-xl border border-indigo-400/30 text-lg">
            لا، القدرة التقنية لا تعني المبرر الأخلاقي. يجب احترام الخصوصية وطلب الموافقة عند التعامل مع البيانات الشخصية والحساسة.
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showAnswer = ref(false)
</script>
