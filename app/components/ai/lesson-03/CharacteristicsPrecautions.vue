<template>
  <section id="characteristics-precautions" class="py-20 bg-gray-50 border-y border-gray-200">
    <div class="container mx-auto px-6 max-w-6xl">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-4">القسم 3</div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">⚙️</span> خصائص الذكاء الاصطناعي واحتياطات الاستخدام
        </h2>
      </div>

      <!-- Part 1 & 2: Strengths vs Cautions -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        <!-- ما يبرع فيه الذكاء الاصطناعي -->
        <div class="bg-white rounded-3xl p-8 border border-green-100 shadow-md relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
          <div class="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
            <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">💪</div>
            <h3 class="text-2xl font-bold text-green-900">ما يبرع فيه الذكاء الاصطناعي</h3>
          </div>
          
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✓</span>
              <span class="text-gray-700 font-semibold">إيجاد وتصنيف الأنماط في البيانات المعقدة مثل الصور والنصوص.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✓</span>
              <span class="text-gray-700 font-semibold">التعرف على الصور والأصوات والنصوص، وتوليد بعض أنواع المحتوى.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✓</span>
              <span class="text-gray-700 font-semibold">الاستدلال الاحتمالي والتنبؤ استنادًا إلى البيانات.</span>
            </li>
          </ul>
        </div>

        <!-- ما يتطلب الحذر -->
        <div class="bg-white rounded-3xl p-8 border border-orange-100 shadow-md relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
          <div class="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
            <div class="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl">⚠️</div>
            <h3 class="text-2xl font-bold text-orange-900">ما يتطلب الحذر عند استخدامه</h3>
          </div>
          
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="text-orange-500 mt-1">▪</span>
              <span class="text-gray-700 font-semibold">القرارات ذات البعد الأخلاقي التي قد تؤدي إلى تمييز أو تحيز.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-orange-500 mt-1">▪</span>
              <span class="text-gray-700 font-semibold">التعامل مع المعلومات الشخصية والبيانات الحساسة.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-orange-500 mt-1">▪</span>
              <span class="text-gray-700 font-semibold">القرارات عالية الأثر وتحديد المسؤولية عن نتائجها.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Stop and Think & Black Box -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        <!-- توقف وفكر -->
        <div class="bg-blue-50 rounded-3xl p-8 border border-blue-200 shadow-sm relative">
          <div class="absolute -top-6 -right-4 text-6xl opacity-20">💡</div>
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">💡</span>
            <h4 class="text-xl font-bold text-blue-900">توقف وفكر</h4>
          </div>
          <p class="text-gray-800 mb-6 font-medium leading-relaxed bg-white p-4 rounded-xl border border-blue-100">
            "غالبًا ما تستخدم خدمات الذكاء الاصطناعي بياناتك الشخصية – ما تشاهده، تشتريه، أو تقوله."
          </p>
          <div class="bg-white p-4 rounded-xl border-r-4 border-blue-500 shadow-sm">
            <p class="text-blue-800 font-bold">لماذا يثير هذا مخاوف بشأن الخصوصية، ومن ينبغي أن يقرر كيفية استخدام بياناتك؟</p>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <button @click="showPrivacyAnswer = !showPrivacyAnswer" class="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2">
                {{ showPrivacyAnswer ? 'إخفاء الإجابة المقترحة' : 'عرض إجابة مقترحة' }}
                <span class="text-lg transition-transform" :class="showPrivacyAnswer ? 'rotate-180' : ''">↓</span>
              </button>
              <p v-if="showPrivacyAnswer" class="mt-3 text-sm text-gray-600 animate-fade-in leading-relaxed">
                لأن بياناتك قد تُستخدم لتوجيه إعلانات موجهة لك، أو قد تُسرب لجهات أخرى دون علمك. ينبغي أن يكون للمستخدم الحق في اختيار الموافقة أو الرفض على استخدام بياناته وفقاً لقوانين حماية الخصوصية.
              </p>
            </div>
          </div>
        </div>

        <!-- مصطلحات أساسية: مشكلة الصندوق الأسود -->
        <div class="bg-gray-900 text-white rounded-3xl p-8 border border-gray-700 shadow-lg relative overflow-hidden group">
          <!-- Background decoration -->
          <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📖</span>
              <h4 class="text-xl font-bold text-gray-100">مصطلحات أساسية</h4>
            </div>
            
            <div class="mt-6">
              <h5 class="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span class="text-3xl">⬛</span> مشكلة الصندوق الأسود
              </h5>
              <div class="bg-gray-800 p-5 rounded-2xl border border-gray-600 text-gray-300 font-medium leading-relaxed">
                هي الحالة التي <strong class="text-white">يكون فيها من غير الواضح كيف توصل الذكاء الاصطناعي إلى حكمه.</strong>
                <br><br>
                <span class="text-sm text-gray-400">مثال: عندما يرفض النظام طلب قرض بنكي، ولا يستطيع المبرمجون أنفسهم تفسير سبب الرفض بدقة بسبب تعقيد الشبكات العصبية.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cautions List (Issues & Risks) -->
      <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">تحديات ومخاطر إضافية</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="flex gap-4 p-4 rounded-2xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🎯</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">دقة النتائج</h4>
              <p class="text-sm text-gray-600 leading-relaxed">قد تنخفض الدقة عندما تكون بيانات التدريب غير كافية، غير ممثلة، أو متحيزة.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-2xl hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100">
            <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">👻</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">الهلوسة</h4>
              <p class="text-sm text-gray-600 leading-relaxed">توليد معلومات غير صحيحة أو غير مدعومة بالواقع ولكنها تبدو مقنعة للمستخدم.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">©️</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">قضايا الحقوق</h4>
              <p class="text-sm text-gray-600 leading-relaxed">مشاكل تتعلق بالملكية الفكرية عند استخدام أعمال محمية بحقوق المؤلف كبيانات لتدريب النماذج.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
            <div class="w-12 h-12 bg-gray-200 text-gray-700 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">⬛</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">فقدان الوضوح (الصندوق الأسود)</h4>
              <p class="text-sm text-gray-600 leading-relaxed">فقدان القدرة على فهم كيفية اتخاذ النظام لحكمه أو قراره النهائي.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showPrivacyAnswer = ref(false);
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
