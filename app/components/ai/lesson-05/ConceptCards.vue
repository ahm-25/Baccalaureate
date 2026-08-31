<template>
  <div class="bg-gray-50">
    <!-- AI -->
    <section id="ai-concept" class="py-16">
      <div class="container mx-auto px-6 max-w-4xl">
        <div
          class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div
            class="absolute right-0 top-0 opacity-10 text-9xl transform translate-x-1/4 -translate-y-1/4"
          >
            🤖
          </div>
          <div class="relative z-10">
            <h2 class="text-4xl font-extrabold mb-2">
              Artificial Intelligence
            </h2>
            <h3 class="text-2xl font-bold text-blue-200 mb-6">
              الذكاء الاصطناعي (AI)
            </h3>
            <p class="text-xl leading-relaxed mb-8">
              المجال الأوسع الذي يضم أنظمة قادرة على تنفيذ مهام مثل التعرف
              والتنبؤ والتعلم وتوليد المحتوى.
            </p>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm"
                >Speech Recognition</span
              >
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm"
                >Image Recognition</span
              >
              <span
                class="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm"
                >Translation</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ML -->
    <section id="ml-concept" class="py-16 bg-white">
      <div class="container mx-auto px-6 max-w-5xl">
        <h2
          class="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-3"
        >
          <span class="text-4xl text-purple-600">🤖</span> التعلم الآلي Machine
          Learning
        </h2>
        <p class="text-xl text-gray-700 leading-relaxed mb-12">
          فرع من الذكاء الاصطناعي تتعلم فيه النماذج أنماطًا من البيانات لإجراء
          تنبؤات أو تصنيفات أو دعم قرارات،
          <strong class="text-purple-700 border-b-2 border-purple-200"
            >بدلًا من برمجة كل قاعدة بشكل صريح.</strong
          >
        </p>

        <!-- Spam Filter Demo -->
        <div
          class="bg-purple-50 rounded-3xl p-8 border border-purple-100 shadow-md"
        >
          <h3 class="text-2xl font-bold text-purple-900 mb-6">
            مثال عملي: فلتر الرسائل المزعجة (Spam)
          </h3>

          <div
            class="flex flex-col md:flex-row items-center gap-8 justify-between"
          >
            <!-- Training Data -->
            <div
              class="flex-1 bg-white p-6 rounded-2xl shadow-sm w-full relative"
            >
              <h4 class="font-bold text-gray-800 mb-4 text-center">
                بيانات التدريب (Training Data)
              </h4>
              <div class="space-y-3">
                <div
                  class="flex items-center justify-between p-3 bg-red-50 rounded-xl text-sm border border-red-100"
                >
                  <span class="text-gray-700">"أنت الفائز بمليون دولار!"</span>
                  <span
                    class="font-bold text-red-600 bg-red-100 px-2 py-1 rounded"
                    >Spam</span
                  >
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-green-50 rounded-xl text-sm border border-green-100"
                >
                  <span class="text-gray-700">"موعد الاجتماع غداً"</span>
                  <span
                    class="font-bold text-green-600 bg-green-100 px-2 py-1 rounded"
                    >Not Spam</span
                  >
                </div>
                <div
                  class="flex items-center justify-between p-3 bg-red-50 rounded-xl text-sm border border-red-100"
                >
                  <span class="text-gray-700">"اشتر الآن بخصم 90%"</span>
                  <span
                    class="font-bold text-red-600 bg-red-100 px-2 py-1 rounded"
                    >Spam</span
                  >
                </div>
              </div>
            </div>

            <!-- Arrow -->
            <div
              class="hidden md:flex flex-col items-center justify-center text-purple-400"
            >
              <span class="text-4xl animate-pulse">⬅</span>
              <span class="text-xs font-bold mt-2">يتعلم الأنماط</span>
            </div>
            <div
              class="md:hidden flex flex-col items-center justify-center text-purple-400 my-4"
            >
              <span class="text-4xl animate-pulse">⬇</span>
            </div>

            <!-- Model & Prediction -->
            <div class="flex-1 w-full flex flex-col gap-6">
              <div
                class="bg-purple-600 text-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div
                  class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')] opacity-20 group-hover:scale-110 transition-transform duration-700"
                ></div>
                <span class="text-4xl mb-2 relative z-10">🧠</span>
                <h4 class="font-bold text-lg relative z-10">
                  نموذج التعلم الآلي
                </h4>
                <p class="text-purple-200 text-sm mt-1 relative z-10">
                  تعلم الكلمات والأنماط المشبوهة
                </p>
              </div>

              <div
                class="bg-white p-6 rounded-2xl shadow-sm text-center border-t-4 border-purple-400"
              >
                <h4 class="font-bold text-gray-800 mb-2">
                  رسالة جديدة (Prediction)
                </h4>
                <p class="text-gray-600 italic text-sm mb-3">
                  "عاجل: احصل على جائزتك فوراً"
                </p>
                <span
                  class="inline-block bg-red-100 text-red-700 font-bold px-4 py-2 rounded-full border border-red-200 animate-bounce"
                >
                  🚨 تم التصنيف: Spam
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DL -->
    <section
      id="dl-concept"
      class="py-16 bg-teal-50 text-gray-900 relative overflow-hidden"
    >
      <!-- Neural Network Background -->
      <div
        class="absolute inset-0 opacity-10 pointer-events-none"
        style="
          background-image: radial-gradient(#0d9488 1px, transparent 1px);
          background-size: 30px 30px;
        "
      ></div>

      <div class="container mx-auto px-6 max-w-5xl relative z-10">
        <h2
          class="text-3xl font-extrabold text-teal-800 mb-6 flex items-center gap-3"
        >
          <span class="text-4xl">🧠</span> التعلم العميق Deep Learning
        </h2>
        <p class="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl">
          أسلوب من أساليب التعلم الآلي يعتمد على
          <strong class="text-teal-600"
            >شبكات عصبية متعددة الطبقات (Neural Networks)</strong
          >
          ويمكنه تعلم تمثيلات وأنماط معقدة جداً من البيانات.
        </p>

        <div
          class="bg-white/80 backdrop-blur-md border border-teal-100 rounded-3xl p-8 shadow-xl"
        >
          <h3 class="text-xl font-bold text-teal-900 mb-8 text-center">
            الشبكات العصبية الاصطناعية (Artificial Neural Networks)
          </h3>

          <AiLesson05AnnDiagram />

          <AiLesson05ThinkQuestion
            question="ما الذي يحدث للبيانات عندما تنتقل من Input Layer إلى Output Layer؟"
            :options="[
              { text: 'A. تنتقل بدون أي معالجة' },
              { text: 'B. تمر خلال طبقات تعالج الأنماط' },
              { text: 'C. تتحول إلى ملفات فقط' },
              { text: 'D. يتم حذفها' }
            ]"
            :correct-index="1"
            explanation="البيانات لا تنتقل مباشرة، بل يتم تحليلها وتمريرها عبر الطبقات المخفية (Hidden Layers) التي تكتشف الأنماط تدريجيًا حتى تصل إلى المخرجات."
          />

          <p class="text-gray-600 text-center mb-8 mt-12 text-sm max-w-2xl mx-auto">
            هي نموذج حاسوبي مستوحى بصورة مبسطة من فكرة ترابط العصبونات في الدماغ
            البشري. اضغط على الطبقات لمعرفة دورها:
          </p>

          <!-- Interactive Neural Network -->
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-10"
          >
            <!-- Input -->
            <div
              class="flex flex-col items-center gap-4 group cursor-pointer"
              @click="activeLayer = 'input'"
            >
              <div
                class="w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-300"
                :class="
                  activeLayer === 'input'
                    ? 'border-teal-500 bg-teal-100 shadow-[0_0_20px_#99f6e4]'
                    : 'border-gray-200 bg-white hover:border-teal-300'
                "
              >
                <span class="text-3xl">📥</span>
              </div>
              <span
                class="font-bold"
                :class="
                  activeLayer === 'input' ? 'text-teal-600' : 'text-gray-500'
                "
                >Input Layer</span
              >
            </div>

            <!-- Connections -->
            <div class="hidden md:flex flex-1 items-center justify-center h-24">
              <div class="w-full h-0.5 bg-gray-200 relative">
                <div
                  class="absolute inset-0 bg-teal-400 w-full h-full origin-left"
                  style="animation: pulse-width 2s infinite"
                ></div>
              </div>
            </div>

            <!-- Hidden Layers -->
            <div
              class="flex flex-col items-center gap-4 group cursor-pointer"
              @click="activeLayer = 'hidden'"
            >
              <div class="relative w-32 h-32 flex items-center justify-center">
                <div
                  class="absolute inset-0 rounded-full border-4 border-dashed transition-all duration-300 animate-[spin_10s_linear_infinite]"
                  :class="
                    activeLayer === 'hidden'
                      ? 'border-purple-400 bg-purple-50'
                      : 'border-gray-300'
                  "
                ></div>
                <div
                  class="w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-10 bg-white"
                  :class="
                    activeLayer === 'hidden'
                      ? 'border-purple-500 shadow-[0_0_30px_#e9d5ff]'
                      : 'border-gray-200 group-hover:border-purple-300'
                  "
                >
                  <div class="grid grid-cols-2 gap-1">
                    <span
                      class="w-3 h-3 rounded-full bg-gray-300"
                      :class="
                        activeLayer === 'hidden'
                          ? 'bg-purple-500 animate-ping'
                          : ''
                      "
                    ></span>
                    <span
                      class="w-3 h-3 rounded-full bg-gray-300"
                      :class="
                        activeLayer === 'hidden'
                          ? 'bg-purple-500 animate-ping animation-delay-100'
                          : ''
                      "
                    ></span>
                    <span
                      class="w-3 h-3 rounded-full bg-gray-300"
                      :class="
                        activeLayer === 'hidden'
                          ? 'bg-purple-500 animate-ping animation-delay-200'
                          : ''
                      "
                    ></span>
                    <span
                      class="w-3 h-3 rounded-full bg-gray-300"
                      :class="
                        activeLayer === 'hidden'
                          ? 'bg-purple-500 animate-ping animation-delay-300'
                          : ''
                      "
                    ></span>
                  </div>
                </div>
              </div>
              <span
                class="font-bold"
                :class="
                  activeLayer === 'hidden' ? 'text-purple-600' : 'text-gray-500'
                "
                >Hidden Layers</span
              >
            </div>

            <!-- Connections -->
            <div class="hidden md:flex flex-1 items-center justify-center h-24">
              <div class="w-full h-0.5 bg-gray-200 relative">
                <div
                  class="absolute inset-0 bg-purple-400 w-full h-full origin-left"
                  style="
                    animation: pulse-width 2s infinite;
                    animation-delay: 1s;
                  "
                ></div>
              </div>
            </div>

            <!-- Output -->
            <div
              class="flex flex-col items-center gap-4 group cursor-pointer"
              @click="activeLayer = 'output'"
            >
              <div
                class="w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-300"
                :class="
                  activeLayer === 'output'
                    ? 'border-blue-500 bg-blue-100 shadow-[0_0_20px_#bfdbfe]'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                "
              >
                <span class="text-3xl">📤</span>
              </div>
              <span
                class="font-bold"
                :class="
                  activeLayer === 'output' ? 'text-blue-600' : 'text-gray-500'
                "
                >Output Layer</span
              >
            </div>
          </div>

          <!-- Explanation Box -->
          <div
            class="mt-12 p-6 rounded-2xl min-h-[120px] flex items-center justify-center transition-colors duration-300 shadow-sm"
            :class="
              activeLayer === 'input'
                ? 'bg-teal-50 border border-teal-200'
                : activeLayer === 'hidden'
                  ? 'bg-purple-50 border border-purple-200'
                  : activeLayer === 'output'
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-white border border-gray-200'
            "
          >
            <p
              v-if="activeLayer === 'input'"
              class="text-teal-900 text-lg text-center leading-relaxed"
            >
              <strong>طبقة الإدخال (Input Layer):</strong><br />
              تستقبل البيانات الخام. <br />مثال: بكسلات (ألوان)
              <strong>صورة قطة</strong>، أو الترددات الصوتية لكلمة
              <strong>"مرحبا"</strong>.
            </p>

            <p
              v-if="activeLayer === 'hidden'"
              class="text-purple-900 text-lg text-center leading-relaxed"
            >
              <strong>الطبقات المخفية (Hidden Layers):</strong><br />
              المكان الذي يحدث فيه "التعلم العميق". كل طبقة تحلل جزءاً من
              البيانات وتستخرج أنماطاً أكثر تعقيداً.<br />
              مثال: طبقة تتعرف على <em>الحواف</em>، وأخرى على
              <em>شكل الأذن</em>، وأخرى على <em>الفرو</em>.
            </p>

            <p
              v-if="activeLayer === 'output'"
              class="text-blue-900 text-lg text-center leading-relaxed"
            >
              <strong>طبقة الإخراج (Output Layer):</strong><br />
              تعطي النتيجة النهائية والتنبؤ بعد تحليل البيانات في الطبقات
              المخفية.<br />
              مثال: النتيجة <strong>"هذه قطة 🐱"</strong> أو
              <strong>"الكلمة هي مرحبا"</strong>.
            </p>

            <p
              v-if="activeLayer === ''"
              class="text-gray-500 text-center animate-pulse"
            >
              اضغط على أي طبقة في الأعلى لرؤية وظيفتها ومثال عملي عليها.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeLayer = ref<"" | "input" | "hidden" | "output">("");
</script>

<style scoped>
@keyframes pulse-width {
  0% {
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}
.animation-delay-100 {
  animation-delay: 100ms;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
</style>
