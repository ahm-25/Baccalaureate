<template>
  <section id="final-challenge" class="min-h-screen relative flex items-center justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="max-w-4xl mx-auto w-full z-10">
      
      <div class="bg-gradient-to-br from-primary to-accent rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
        
        <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/30">
          <Rocket class="w-10 h-10 text-white" />
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black mb-6 relative z-10">تحدي الحصة 🚀</h2>
        
        <p class="text-xl md:text-2xl font-bold mb-12 leading-relaxed relative z-10 max-w-2xl mx-auto text-white/90">
          اختر تقنية واحدة تستخدمها يوميًا، واشرح في 3 نقاط كيف كانت ستؤثر على حياتك لو لم تكن موجودة.
        </p>
        
        <div class="relative z-10 text-right">
          <textarea 
            v-model="answer"
            rows="5"
            placeholder="اكتب إجابتك هنا..."
            class="w-full bg-white/10 border-2 border-white/30 rounded-2xl p-6 text-white placeholder:text-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-xl font-medium resize-none shadow-inner"
          ></textarea>
        </div>
        
        <div class="mt-8 relative z-10">
          <button class="bg-white text-primary hover:bg-surface px-12 py-4 rounded-2xl font-bold text-xl shadow-xl transition-transform hover:-translate-y-1 w-full md:w-auto">
            تسليم الإجابة
          </button>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rocket } from 'lucide-vue-next'

const answer = ref('')
</script>
