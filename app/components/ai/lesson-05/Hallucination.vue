<template>
  <div class="bg-gray-50">
    <!-- Hallucination Concept -->
    <section id="hallucination" class="py-20">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-extrabold text-red-600 mb-4 flex items-center justify-center gap-3"
          >
            <span class="text-4xl">⚠️</span> هل الذكاء الاصطناعي دائمًا على حق؟
          </h2>
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-center mb-16">
          <!-- Example -->
          <div
            class="w-full md:w-1/2 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-red-100"
          >
            <div class="bg-gray-100 p-4 rounded-xl mb-4">
              <p class="font-bold text-gray-700">
                المستخدم: ما هي عاصمة المغرب؟
              </p>
            </div>
            <div
              class="bg-blue-50 p-4 rounded-xl border border-blue-100 relative"
            >
              <span
                class="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                >AI</span
              >
              <p class="text-gray-800">
                عاصمة المغرب هي <strong class="text-red-600">القاهرة</strong>،
                وتعتبر من أكبر المدن في أفريقيا وتتميز بتاريخها العريق...
              </p>
            </div>
            <div class="mt-6 text-center">
              <span
                class="inline-block bg-red-100 text-red-800 font-bold px-4 py-2 rounded-full text-sm animate-pulse"
              >
                الإجابة تبدو طبيعية جداً... لكنها خاطئة تماماً!
              </span>
            </div>
          </div>

          <!-- Explanation -->
          <div class="w-full md:w-1/2">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              الهلوسة (Hallucination)
            </h3>
            <p class="text-xl text-gray-700 leading-relaxed">
              هي الحالة التي ينتج فيها الذكاء الاصطناعي التوليدي محتوى
              <strong>يبدو معقولاً ومقنعاً جداً</strong>، لكنه
              <strong>غير صحيح واقعياً</strong> أو لا يعتمد على حقائق فعلية.
            </p>
            <div
              class="mt-6 bg-red-50 border-r-4 border-red-500 p-4 rounded-l-xl"
            >
              <p class="text-gray-800 font-medium">
                <strong>مثال آخر:</strong> يسأل طالب عن حدث تاريخي، فيكتب الـ AI
                قصة رائعة ومفصلة مع تواريخ وأسماء كتب ومصادر... وعند البحث،
                يكتشف الطالب أن هذه الكتب غير موجودة أصلاً وأن الذكاء الاصطناعي
                "اخترعها" لتبدو إجابته مكتملة!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Verification Process -->
    <section id="verification" class="py-16 bg-white">
      <div class="container mx-auto px-6 max-w-5xl">
        <h2
          class="text-3xl font-extrabold text-teal-800 mb-12 text-center flex items-center justify-center gap-3"
        >
          <span class="text-4xl">🕵️</span> لا تصدق الإجابة لمجرد أنها تبدو ذكية
        </h2>

        <!-- Interactive Process -->
        <div class="relative max-w-4xl mx-auto mb-16">
          <div
            class="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10"
          >
            <div
              class="bg-gray-100 px-6 py-4 rounded-2xl font-bold text-center border-2 border-gray-200"
            >
              <div class="text-2xl mb-2">🤖</div>
              مخرجات AI
            </div>

            <div class="text-teal-400 rotate-90 md:rotate-0 text-2xl">➡</div>

            <div
              class="bg-teal-50 px-6 py-4 rounded-2xl font-bold text-center border-2 border-teal-200 text-teal-800"
            >
              <div class="text-2xl mb-2">❓</div>
              هل المعلومة مهمة؟
            </div>

            <div class="text-teal-400 rotate-90 md:rotate-0 text-2xl">➡</div>

            <div
              class="bg-blue-50 px-6 py-4 rounded-2xl font-bold text-center border-2 border-blue-200 text-blue-800"
            >
              <div class="text-2xl mb-2">🔍</div>
              قارن وراجع المصدر
            </div>

            <div class="text-teal-400 rotate-90 md:rotate-0 text-2xl">➡</div>

            <div
              class="bg-green-50 px-6 py-4 rounded-2xl font-bold text-center border-2 border-green-200 text-green-800"
            >
              <div class="text-2xl mb-2">✅</div>
              اعتمد الإجابة
            </div>
          </div>
        </div>

        <!-- Checklist -->
        <div
          class="max-w-2xl mx-auto bg-teal-800 text-white rounded-3xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform"
        >
          <h3 class="text-2xl font-bold mb-6 border-b border-teal-600 pb-4">
            ☑️ قائمة التحقق السريعة:
          </h3>
          <ul class="space-y-4 text-lg">
            <li
              class="flex items-center gap-3 hover:translate-x-2 transition-transform"
            >
              <span
                class="text-2xl bg-teal-700 w-10 h-10 rounded-full flex items-center justify-center"
                >1</span
              >
              <span>تحقق من المصدر الأصلي للمعلومة.</span>
            </li>
            <li
              class="flex items-center gap-3 hover:translate-x-2 transition-transform"
            >
              <span
                class="text-2xl bg-teal-700 w-10 h-10 rounded-full flex items-center justify-center"
                >2</span
              >
              <span>قارن الإجابة مع مصادر أخرى موثوقة.</span>
            </li>
            <li
              class="flex items-center gap-3 hover:translate-x-2 transition-transform"
            >
              <span
                class="text-2xl bg-teal-700 w-10 h-10 rounded-full flex items-center justify-center"
                >3</span
              >
              <span>تأكد من الأرقام، الإحصائيات، والتواريخ بشكل خاص.</span>
            </li>
            <li
              class="flex items-center gap-3 hover:translate-x-2 transition-transform"
            >
              <span
                class="text-2xl bg-red-500 w-10 h-10 rounded-full flex items-center justify-center"
                >!</span
              >
              <span class="font-bold text-red-200"
                >لا تعتمد على AI وحده كمرجع نهائي في المعلومات المهمة.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Stop and Think: Hallucination -->
    <section id="hallucination-think" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 max-w-4xl">
        <div
          class="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-200"
        >
          <h2
            class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2"
          >
            <span class="text-3xl">💡</span> توقف وفكر
          </h2>
          <p class="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
            يمكن للذكاء الاصطناعي التوليدي إنتاج نص يبدو معقولاً لكنه غير صحيح
            واقعياً.
            <br /><br />
            <strong class="text-purple-700"
              >لماذا من الخطر استخدام هذا الناتج كإجابة لتقرير مدرسي كما هو؟
              وماذا يجب أن يفعل الطالب؟</strong
            >
          </p>

          <div class="mb-6">
            <textarea
              v-model="userAnswer"
              rows="4"
              placeholder="اكتب إجابتك هنا..."
              class="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 resize-none transition-all"
              :disabled="showAnswer"
            ></textarea>
          </div>

          <div class="flex justify-center" v-if="!showAnswer">
            <button
              @click="showAnswer = true"
              class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              عرض الإجابة النموذجية
            </button>
          </div>

          <transition name="fade">
            <div
              v-if="showAnswer"
              class="mt-8 bg-purple-50 p-6 rounded-2xl border border-purple-200"
            >
              <h4
                class="font-bold text-purple-800 mb-2 flex items-center gap-2"
              >
                <span>✅</span> الإجابة النموذجية:
              </h4>
              <p class="text-lg text-gray-800 leading-relaxed">
                الخطر يكمن في تسليم
                <strong>معلومات خاطئة أو مختلقة (هلوسة)</strong> على أنها حقائق،
                مما يؤثر على مصداقية التقرير والدرجة العلمية. <br />يجب على
                الطالب
                <strong
                  >استخدام الـ AI كأداة مساعدة (للعصف الذهني أو التلخيص أو
                  الصياغة)</strong
                >، وأن يراجع ويتحقق من كل معلومة عبر مصادر موثوقة قبل اعتمادها.
              </p>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userAnswer = ref("");
const showAnswer = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
