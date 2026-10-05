<template>
  <section id="opening" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 shadow-sm">
        <h2 class="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
          <span class="text-3xl">🤔</span> قبل ما نبدأ...
        </h2>
        
        <p class="text-lg text-slate-700 mb-8 leading-relaxed">
          أنت داخل على موقع بنك أو بتشتري حاجة أونلاين. <br/>
          <strong>إزاي تضمن إن البيانات اللي بتبعتها مش أي حد يقدر يقرأها؟</strong><br/>
          <strong>وإزاي تتأكد إن الموقع اللي قدامك هو فعلًا الموقع الحقيقي؟</strong>
        </p>
        
        <div class="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 class="text-lg font-bold text-slate-800 mb-4">هل كلمة المرور وحدها كافية لحماية حسابك؟</h3>
          
          <div class="space-y-3">
            <button 
              @click="answer = 'A'" 
              :class="['w-full text-right p-4 rounded-xl border transition-all', answer === 'A' ? 'bg-red-50 border-red-200 text-red-700' : 'hover:bg-slate-50 border-slate-200']"
            >
              A. نعم، دائمًا
            </button>
            <button 
              @click="answer = 'B'" 
              :class="['w-full text-right p-4 rounded-xl border transition-all', answer === 'B' ? 'bg-green-50 border-green-200 text-green-700' : 'hover:bg-slate-50 border-slate-200']"
            >
              B. لا، الأفضل استخدام طبقات حماية إضافية
            </button>
          </div>
          
          <div v-if="answer" class="mt-6 p-4 rounded-xl" :class="answer === 'B' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            <strong v-if="answer === 'B'">إجابة صحيحة! 👏</strong>
            <strong v-else>غير دقيق! 💡</strong>
            <p class="mt-2 text-sm">
              الأمان على الإنترنت لا يعتمد على تقنية واحدة، بل على الجمع بين التشفير والمصادقة والشهادات والتوقيعات عشان نحمي البيانات والحسابات بشكل كامل.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const answer = ref(null);
</script>
