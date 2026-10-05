<template>
  <section id="stop-think" class="py-24 bg-indigo-600 text-white relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(white 2px, transparent 2px); background-size: 30px 30px;"></div>
    
    <div class="max-w-3xl mx-auto px-6 text-center relative z-10">
      <div class="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg border-4 border-indigo-400">🤔</div>
      <h2 class="text-3xl font-bold mb-8">توقف وفكر</h2>
      
      <div class="bg-indigo-700/50 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/50 shadow-xl mb-8">
        <p class="text-2xl font-medium leading-relaxed">
          "إذا تسربت كلمة المرور، لماذا يمكن لعامل ثانٍ يُرسل إلى الهاتف أن يظل يحمي الحساب؟"
        </p>
      </div>
      
      <button v-if="!show" @click="show = true" class="px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-2xl hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
        فكرت؟ شوف الإجابة
      </button>
      
      <div v-if="show" class="bg-emerald-500 text-white p-8 rounded-3xl mt-8 shadow-xl animate-fade-in-up text-right">
        <h4 class="font-bold text-xl mb-4 border-b border-emerald-400 pb-2">الإجابة:</h4>
        <p class="text-lg leading-relaxed text-emerald-50">
          لأن العامل الثاني مستقل عن كلمة المرور (معرفة مقابل حيازة). معرفة كلمة المرور وحدها لا تكفي للدخول إذا كان النظام يطلب عاملًا ثانيًا مثل رمز من تطبيق مصادقة أو جهاز يملكه المستخدم.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const show = ref(false);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
