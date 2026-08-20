<template>
  <section id="exam-style" class="py-24 px-6 sm:px-12 bg-surface overflow-hidden relative">
    <div class="max-w-4xl mx-auto w-full z-10">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
          <FileText class="w-5 h-5 text-red-600" />
          <span class="text-lg font-bold text-red-600">سؤال على نمط الامتحان</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext">تدرب على الإجابة</h2>
      </div>

      <div class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-lg">
        <h3 class="text-2xl font-black text-maintext mb-8 leading-relaxed">
          حلّل كيف غيّر انتشار الحوسبة السحابية طريقة استخدام تكنولوجيا المعلومات.
        </h3>
        
        <p class="text-lg font-bold text-mutedtext mb-6">يجب أن تذكر في إجابتك:</p>
        <div class="flex flex-wrap gap-3 mb-8">
          <span class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold border border-blue-200">البيانات الضخمة</span>
          <span class="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold border border-purple-200">الذكاء الاصطناعي</span>
          <span class="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold border border-green-200">تكنولوجيا المعلومات كخدمة</span>
        </div>

        <textarea v-model="answer" rows="5" placeholder="اكتب إجابتك هنا..."
                  class="w-full bg-surface border-2 border-border rounded-2xl p-5 text-lg font-medium focus:outline-none focus:border-primary transition-colors resize-none mb-8"></textarea>

        <button @click="showModel = !showModel"
                class="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all shadow-lg w-full md:w-auto">
          {{ showModel ? 'إخفاء الإجابة النموذجية' : 'عرض الإجابة النموذجية' }}
        </button>

        <Transition name="fade">
          <div v-if="showModel" class="bg-green-50 border border-green-200 rounded-2xl p-8 mt-8">
            <h4 class="font-black text-green-800 text-xl mb-4">إجابة نموذجية:</h4>
            <p class="text-lg font-bold text-green-900 leading-loose">
              أدى انتشار الحوسبة السحابية إلى تحول جذري في طريقة استخدام تكنولوجيا المعلومات. فبدلاً من شراء أجهزة وبرمجيات باهظة الثمن، أصبح بالإمكان الحصول على موارد تكنولوجيا المعلومات كخدمة عبر الإنترنت (مثل التخزين والمعالجة).
              <br><br>
              كما أتاحت الحوسبة السحابية إمكانية تحليل البيانات الضخمة التي تُنتج يوميًا من ملايين المستخدمين، مما مكّن المؤسسات من اتخاذ قرارات أفضل مبنية على البيانات.
              <br><br>
              بالإضافة إلى ذلك، وفرت البنية التحتية السحابية القوة الحوسبية اللازمة لتطوير وتشغيل أنظمة الذكاء الاصطناعي التي تحتاج إلى معالجة كميات ضخمة من البيانات.
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FileText } from 'lucide-vue-next'

const answer = ref('')
const showModel = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>
