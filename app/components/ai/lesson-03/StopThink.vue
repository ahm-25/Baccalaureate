<template>
  <section id="stop-think" class="py-20 bg-yellow-50 border-y border-yellow-100">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-4xl">💡</span> توقف وفكر
        </h2>
      </div>

      <div class="space-y-8">
        <!-- Question 1 -->
        <div class="bg-white rounded-3xl p-8 border border-yellow-200 shadow-md">
          <p class="text-xl text-gray-800 font-bold mb-6 leading-relaxed">
            1. يفكر مستشفى في استخدام الذكاء الاصطناعي للتشخيص بالصور للكشف عن الأمراض. لماذا ينبغي أن يؤكد التشخيص النهائي طبيب بشري بدلًا من تركه للذكاء الاصطناعي وحده؟
          </p>
          <div class="text-center" v-if="!showQ1">
            <button @click="showQ1 = true" class="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl transition-colors">
              عرض الإجابة النموذجية
            </button>
          </div>
          <transition name="slide-fade">
            <div v-if="showQ1" class="bg-green-50 p-6 rounded-2xl border border-green-200 mt-4 text-green-900 text-lg">
              لأن القرار الطبي له أثر مباشر وخطير على حياة الإنسان. الذكاء الاصطناعي قد يخطئ أو يهلوس في التشخيص نتيجة لبيانات تدريب غير دقيقة أو حالة نادرة. الطبيب البشري يمتلك الخبرة الشاملة ويتحمل المسؤولية الأخلاقية والقانونية للقرار النهائي.
            </div>
          </transition>
        </div>

        <!-- Question 2 -->
        <div class="bg-white rounded-3xl p-8 border border-yellow-200 shadow-md">
          <p class="text-xl text-gray-800 font-bold mb-6 leading-relaxed">
            2. غالبًا ما تستخدم خدمات الذكاء الاصطناعي بياناتك الشخصية — ما تشاهده، تشتريه، أو تقوله. لماذا يثير هذا مخاوف بشأن الخصوصية؟
          </p>
          <div class="text-center" v-if="!showQ2">
            <button @click="showQ2 = true" class="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl transition-colors">
              عرض الإجابة النموذجية
            </button>
          </div>
          <transition name="slide-fade">
            <div v-if="showQ2" class="bg-green-50 p-6 rounded-2xl border border-green-200 mt-4 text-green-900 text-lg">
              لأن هذه الأنظمة تجمع كميات هائلة من البيانات التفصيلية عن حياتنا. إذا لم يتم حماية هذه البيانات، يمكن اختراقها، بيعها، أو استخدامها بشكل مسيء دون موافقتنا الصريحة.
            </div>
          </transition>
        </div>

        <!-- Question 3 -->
        <div class="bg-white rounded-3xl p-8 border border-yellow-200 shadow-md">
          <p class="text-xl text-gray-800 font-bold mb-6 leading-relaxed">
            3. في مجال الزراعة، اذكر ميزة واحدة لإدخال الذكاء الاصطناعي ومصدر قلق واحد.
          </p>
          <div class="text-center" v-if="!showQ3">
            <button @click="showQ3 = true" class="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-xl transition-colors">
              عرض الإجابة النموذجية
            </button>
          </div>
          <transition name="slide-fade">
            <div v-if="showQ3" class="bg-green-50 p-6 rounded-2xl border border-green-200 mt-4 text-green-900 text-lg">
              <strong class="block mb-2">الميزة:</strong> مساعدة المزارعين على اكتشاف أمراض النباتات مبكرًا والتنبؤ بمواعيد الحصاد بدقة.<br>
              <strong class="block mt-2 mb-2">مصدر القلق:</strong> الاعتماد المفرط عليه قد يؤدي لقرارات خاطئة إذا واجه النظام نوعاً جديداً من الآفات لم يتدرب عليه.
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showQ1 = ref(false);
const showQ2 = ref(false);
const showQ3 = ref(false);
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
