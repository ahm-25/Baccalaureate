<template>
  <section
    id="genai-concept"
    class="py-20 bg-gradient-to-br from-orange-50 to-pink-50"
  >
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-extrabold text-orange-600 mb-4 flex items-center justify-center gap-3"
        >
          <span class="text-4xl text-yellow-500">✨</span> الذكاء الاصطناعي
          التوليدي
        </h2>
        <h3 class="text-2xl font-bold text-gray-700 mb-6">
          Generative AI (GenAI)
        </h3>
        <p
          class="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium"
        >
          أنظمة تنشئ <strong>محتوى جديدًا</strong> مثل النصوص والصور والصوت
          والبرمجيات، اعتمادًا على الأنماط التي تعلمتها من بيانات التدريب.
        </p>
      </div>

      <!-- Process Visual -->
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
      >
        <div
          class="bg-white px-6 py-4 rounded-2xl shadow border border-gray-100 font-bold text-gray-700 flex items-center gap-2"
        >
          <span>💬</span> Prompt (الموجه)
        </div>
        <div class="hidden md:block text-orange-400 text-3xl animate-pulse">⬅</div>
        <div class="md:hidden text-orange-400 text-3xl animate-pulse">⬇</div>
        <div
          class="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-5 rounded-3xl shadow-lg font-bold text-xl flex items-center gap-2 transform hover:scale-105 transition-transform"
        >
          <span>✨</span> GenAI
        </div>
        <div class="hidden md:block text-orange-400 text-3xl animate-pulse">⬅</div>
        <div class="md:hidden text-orange-400 text-3xl animate-pulse">⬇</div>
        <div class="grid grid-cols-2 gap-2">
          <div
            class="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-sm font-bold flex items-center gap-2"
          >
            <span>📝</span> Text
          </div>
          <div
            class="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-sm font-bold flex items-center gap-2"
          >
            <span>🎨</span> Image
          </div>
          <div
            class="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-sm font-bold flex items-center gap-2"
          >
            <span>🎵</span> Audio
          </div>
          <div
            class="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-sm font-bold flex items-center gap-2"
          >
            <span>💻</span> Code
          </div>
        </div>
      </div>

      <AiLesson05GenAiDiagram />

      <AiLesson05ThinkQuestion
        question="إذا أعطيت GenAI الـPrompt: &quot;اكتب قصة قصيرة عن طالب يتعلم البرمجة&quot; فما الذي يقوم به النظام؟"
        :options="[
          { text: 'A. يبحث فقط عن قصة واحدة محفوظة' },
          { text: 'B. ينشئ محتوى جديدًا بناءً على الأنماط التي تعلمها' },
          { text: 'C. يفتح المتصفح فقط' },
          { text: 'D. يحول النص إلى رقم' }
        ]"
        :correct-index="1"
        explanation="الذكاء الاصطناعي التوليدي لا يقوم بمجرد البحث والنسخ، بل ينشئ محتوى جديدًا بالكامل بناءً على الأنماط التي تعلمها مسبقًا."
      />

      <!-- Interactive Demo -->
      <div
        class="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden max-w-3xl mx-auto"
      >
        <div
          class="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-3"
        >
          <div class="w-3 h-3 rounded-full bg-red-400"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div class="w-3 h-3 rounded-full bg-green-400"></div>
          <span class="ml-4 text-sm font-bold text-gray-500"
            >محاكاة GenAI (جرب بنفسك)</span
          >
        </div>

        <div class="p-6 md:p-8">
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2"
              >اكتب طلبك (Prompt):</label
            >
            <div class="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                v-model="prompt"
                placeholder="مثال: اكتب لي قصة قصيرة عن طالب يتعلم البرمجة..."
                class="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition-shadow"
              />
              <button
                @click="generateContent"
                :disabled="isGenerating || !prompt"
                class="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span v-if="isGenerating" class="animate-spin">⏳</span>
                <span v-else>توليد</span>
              </button>
            </div>

            <div class="mt-3 flex gap-2">
              <button
                @click="setExample('اكتب لي قصة قصيرة عن طالب يتعلم البرمجة')"
                class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
              >
                مثال: قصة طالب
              </button>
              <button
                @click="
                  setExample('اكتب كود بايثون لطباعة الأرقام من 1 إلى 10')
                "
                class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
              >
                مثال: كود بايثون
              </button>
            </div>
          </div>

          <transition name="fade" mode="out-in">
            <div
              v-if="output"
              class="bg-gradient-to-r from-gray-50 to-orange-50/30 border border-orange-100 rounded-2xl p-6 relative"
            >
              <span class="absolute top-4 left-4 text-2xl opacity-20">✨</span>
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span
                  class="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center text-xs"
                  >AI</span
                >
                النتيجة:
              </h4>
              <div
                class="text-gray-700 leading-relaxed whitespace-pre-line"
                v-html="output"
              ></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const prompt = ref("");
const isGenerating = ref(false);
const output = ref("");

const setExample = (text: string) => {
  prompt.value = text;
};

const generateContent = () => {
  if (!prompt.value) return;

  isGenerating.value = true;
  output.value = "";

  setTimeout(() => {
    isGenerating.value = false;

    if (prompt.value.includes("طالب") || prompt.value.includes("قصة")) {
      output.value =
        "في مدينة صغيرة، كان هناك طالب يدعى أحمد يشعر بالفضول دائماً تجاه كيفية عمل ألعاب الفيديو. في يوم من الأيام، فتح حاسوبه وبدأ بتعلم أول لغة برمجة. كانت الأخطاء (Bugs) كثيرة في البداية، لكن مع كل سطر كود جديد كان يكتبه، كان يشعر وكأنه يمتلك قوة سحرية لصنع عوالم جديدة. وبعد شهور من المحاولة، تمكن أخيراً من إطلاق لعبته الأولى!";
    } else if (
      prompt.value.includes("كود") ||
      prompt.value.includes("بايثون")
    ) {
      output.value = `<div class="bg-gray-800 p-4 rounded-xl text-green-400 font-mono text-left direction-ltr">for i in range(1, 11):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>`;
    } else {
      output.value =
        "هذا مجرد محاكي تعليمي (Simulation) للذكاء الاصطناعي التوليدي. في الواقع، ستقوم الأنظمة الحقيقية مثل ChatGPT بتحليل نصك وتوليد إجابة مفصلة بناءً على الأنماط التي تعلمتها من مليارات النصوص السابقة.";
    }
  }, 1500);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.direction-ltr {
  direction: ltr;
}
</style>
