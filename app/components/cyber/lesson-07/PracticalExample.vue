<template>
  <section id="practical-example" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-4 text-center">مثال عملي: التسوق الإلكتروني</h2>
      <p class="text-lg text-slate-600 mb-12 text-center bg-indigo-50 py-3 px-6 rounded-full inline-block mx-auto">
        سيناريو: أنت تشتري منتجًا من متجر إلكتروني...
      </p>
      
      <div class="space-y-4 max-w-2xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:md:mx-auto before:md:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-300 before:to-transparent">
        <button v-for="(step, i) in steps" :key="i" @click="activeStep = activeStep === i ? null : i" class="w-full text-right bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md relative z-10">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-slate-800 flex items-center gap-4 text-lg">
              <span class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm shadow-md shrink-0">{{ i + 1 }}</span>
              {{ step.title }}
            </h4>
            <span class="text-slate-400 bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0" :class="{'rotate-180 bg-indigo-100 text-indigo-600': activeStep === i}">▼</span>
          </div>
          <div v-show="activeStep === i" class="mt-4 pr-14 text-slate-600 text-base leading-relaxed border-t pt-4 animate-fade-in-up">
            {{ step.desc }}
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const activeStep = ref(0);
const steps = [
  { title: "فتح الموقع عبر HTTPS", desc: "يتم إنشاء اتصال مبدئي وتوضيح الرغبة في اتصال آمن." },
  { title: "التحقق من الشهادة", desc: "المتصفح يتحقق من الشهادة الرقمية واسم النطاق لضمان هوية المتجر." },
  { title: "مصافحة TLS", desc: "TLS يستخدم آليات المفتاح العام أثناء المصافحة للمصادقة والاتفاق الآمن." },
  { title: "مفاتيح الجلسة", desc: "يتم اشتقاق مفاتيح الجلسة (سر مشترك) بينك وبين المتجر." },
  { title: "تشفير البيانات", desc: "بيانات الجلسة (مثل المنتجات وبيانات البطاقة) تحمى بالتشفير المتماثل." },
  { title: "تسجيل الدخول", desc: "عند تسجيل الدخول لحسابك، تستخدم FA2 لتقليل خطر الدخول غير المصرح به." },
  { title: "إثبات العملية", desc: "يمكن استخدام التوقيع الرقمي لإثبات التوقيع على بيانات محددة عندما يتطلب النظام ذلك." }
];
</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
