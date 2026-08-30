<template>
  <section id="opening-question" class="py-16 bg-purple-50">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div class="relative z-10 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-purple-800 mb-8 flex items-center justify-center gap-3">
            <span class="text-3xl">🤔</span> قبل ما نبدأ...
          </h2>
          
          <p class="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed">
            لما الموبايل يعرف صوتك، أو يقترح عليك فيديو تحبه، أو يصنف رسالة على إنها Spam...
            <br>
            <span class="font-bold text-purple-700 mt-4 block">هل الكمبيوتر بيتبع قواعد ثابتة فقط، ولا بيتعلم من أمثلة وبيانات؟</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center" v-if="!hasAnswered">
            <button @click="answer('rules')" class="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105">
              قواعد ثابتة
            </button>
            <button @click="answer('data')" class="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
              يتعلم من البيانات
            </button>
          </div>
          
          <transition name="fade">
            <div v-if="hasAnswered" class="mt-8 p-6 rounded-2xl border text-right" :class="isCorrect ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'">
              <div class="flex items-start gap-4">
                <div class="text-4xl shrink-0">
                  {{ isCorrect ? '✨' : '💡' }}
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2" :class="isCorrect ? 'text-green-800' : 'text-blue-800'">
                    {{ isCorrect ? 'بالضبط! هذا هو جوهر الذكاء الاصطناعي.' : 'في البرمجة العادية نعم، لكن في الذكاء الاصطناعي الأمر مختلف!' }}
                  </h4>
                  <p class="text-lg text-gray-700 leading-relaxed">
                    البرمجة التقليدية بتعتمد على إن المبرمج يكتب <strong>قواعد ثابتة</strong> صريحة (لو حصل كذا، اعمل كذا). 
                    لكن الأنظمة الذكية زي التعرف على الصوت بتعتمد على <strong>التعلم من ملايين الأمثلة والبيانات</strong> لاستنتاج الأنماط بنفسها من غير ما تتبرمج خطوة بخطوة.
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hasAnswered = ref(false)
const isCorrect = ref(false)

const answer = (choice: 'rules' | 'data') => {
  hasAnswered.value = true
  isCorrect.value = choice === 'data'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
