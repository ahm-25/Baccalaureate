<template>
  <section id="daily-life" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 flex items-center justify-center gap-3">
          <span class="text-4xl">🤖</span> الذكاء الاصطناعي في حياتك اليومية
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          أصبح الذكاء الاصطناعي جزءًا من خدمات يومية كثيرة؛ فقد تقترح منصة فيديو مقاطع تناسب اهتماماتك، ويجيب مساعد صوتي عن أسئلتك، وتترجم أداة نصًا إلى لغة أخرى.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- 1. Recommendation System -->
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span class="text-3xl">🎬</span> نظام التوصية
          </h3>
          <p class="text-gray-700 mb-6 text-sm bg-white p-3 rounded-xl border border-gray-200">
            <strong>التعريف:</strong> نظام يتنبأ بالتفضيلات من بيانات السلوك السابق ويعرض التوصيات.
            <br>
            <span class="text-gray-500 text-xs">(أمثلة: YouTube, Amazon, Spotify)</span>
          </p>

          <div class="bg-white rounded-2xl p-4 border border-gray-200 text-center">
            <p class="mb-4 text-sm font-bold text-purple-800">شاهد الطالب: فيديوهات برمجة، JavaScript، AI</p>
            <p class="mb-4 text-sm text-gray-600">ما نوع الفيديو الذي قد يقترحه النظام؟</p>
            <div class="flex gap-2 justify-center" v-if="!recommendationAnswered">
              <button @click="recommendationAnswered = true; recommendationCorrect = false" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors">طبخ</button>
              <button @click="recommendationAnswered = true; recommendationCorrect = true" class="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold rounded-lg text-sm transition-colors">تطوير الويب</button>
              <button @click="recommendationAnswered = true; recommendationCorrect = false" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors">رياضة</button>
            </div>
            <div v-else class="p-3 rounded-lg" :class="recommendationCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
              {{ recommendationCorrect ? 'إجابة صحيحة! النظام يحلل اهتماماتك ليقترح محتوى مشابه.' : 'حاول مرة أخرى. النظام يقترح بناءً على ما شاهدته سابقاً.' }}
              <button v-if="!recommendationCorrect" @click="recommendationAnswered = false" class="block mx-auto mt-2 text-xs underline">إعادة</button>
            </div>
          </div>
        </div>

        <!-- 2. Voice Assistant -->
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span class="text-3xl">🎤</span> المساعد الصوتي
          </h3>
          <p class="text-gray-700 mb-6 text-sm bg-white p-3 rounded-xl border border-gray-200">
            <strong>التعريف:</strong> التعرف على الصوت، وفهم الأوامر، وتنفيذها.
            <br>
            <span class="text-gray-500 text-xs">(أمثلة: Siri, Google Assistant)</span>
          </p>

          <div class="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-2">
            <div class="flex items-center gap-2 justify-center text-sm">
              <span class="text-xl">🗣️</span> صوت المستخدم
            </div>
            <div class="text-center text-gray-400">↓</div>
            <div class="flex items-center gap-2 justify-center text-sm bg-blue-50 p-2 rounded-lg text-blue-800">
              <span class="text-xl">👂</span> التعرف على الكلام
            </div>
            <div class="text-center text-gray-400">↓</div>
            <div class="flex items-center gap-2 justify-center text-sm bg-purple-50 p-2 rounded-lg text-purple-800">
              <span class="text-xl">🧠</span> فهم الأمر
            </div>
            <div class="text-center text-gray-400">↓</div>
            <div class="flex items-center gap-2 justify-center text-sm bg-green-50 p-2 rounded-lg text-green-800 font-bold">
              <span class="text-xl">✅</span> تنفيذ الأمر
            </div>
          </div>
        </div>

        <!-- 3. Machine Translation -->
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span class="text-3xl">🌍</span> الترجمة الآلية
          </h3>
          <p class="text-gray-700 mb-6 text-sm bg-white p-3 rounded-xl border border-gray-200">
            <strong>التعريف:</strong> ترجمة النص تلقائيًا إلى لغات مختلفة بناءً على فهم السياق.
            <br>
            <span class="text-gray-500 text-xs">(أمثلة: Google Translate, DeepL)</span>
          </p>

          <div class="bg-white rounded-2xl p-4 border border-gray-200 relative overflow-hidden">
             <div class="flex flex-col gap-4">
                <div class="bg-gray-50 p-3 rounded-lg text-right border border-gray-200">
                  <span class="text-xs text-gray-500 block mb-1">العربية</span>
                  <p class="font-bold">مرحباً بك في عالم الذكاء الاصطناعي!</p>
                </div>
                
                <button @click="translateActive = !translateActive" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10">
                  ⇄
                </button>

                <div class="bg-blue-50 p-3 rounded-lg text-left border border-blue-200" style="direction: ltr;">
                  <span class="text-xs text-blue-500 block mb-1">English</span>
                  <p class="font-bold text-blue-900 transition-opacity duration-300" :class="translateActive ? 'opacity-100' : 'opacity-30 blur-sm'">
                    Welcome to the world of Artificial Intelligence!
                  </p>
                </div>
             </div>
          </div>
        </div>

        <!-- 4. Face Recognition -->
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span class="text-3xl">📷</span> التعرف على الوجه
          </h3>
          <p class="text-gray-700 mb-6 text-sm bg-white p-3 rounded-xl border border-gray-200">
            <strong>التعريف:</strong> الكشف عن وجوه الأشخاص في الصور والتعرف عليها تلقائيًا.
            <br>
            <span class="text-gray-500 text-xs">(مثال: فتح الهاتف الذكي)</span>
          </p>

          <div class="bg-gray-900 rounded-2xl p-6 border border-gray-700 flex items-center justify-center h-48 relative overflow-hidden cursor-pointer group" @click="faceDetected = !faceDetected">
            <div class="text-6xl transition-transform duration-500" :class="faceDetected ? 'scale-110' : 'scale-100'">
              👨
            </div>
            
            <!-- Scanning Line -->
            <div v-if="!faceDetected" class="absolute left-0 right-0 h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)] animate-scan"></div>
            
            <!-- Bounding Box -->
            <div v-if="faceDetected" class="absolute w-24 h-24 border-2 border-green-400 rounded-lg flex items-center justify-center transition-all duration-300 animate-pulse-fast">
              <div class="absolute -top-2 bg-green-400 text-gray-900 text-[10px] font-bold px-1 rounded">User_Identified (99%)</div>
            </div>

            <div class="absolute bottom-2 text-center w-full">
              <span class="text-xs" :class="faceDetected ? 'text-green-400' : 'text-gray-400'">
                {{ faceDetected ? 'تم التعرف! الهاتف مفتوح 🔓' : 'اضغط للتعرف على الوجه...' }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const recommendationAnswered = ref(false);
const recommendationCorrect = ref(false);

const translateActive = ref(false);
const faceDetected = ref(false);
</script>

<style scoped>
.animate-scan {
  animation: scan 2s infinite linear;
}

@keyframes scan {
  0% { top: 10%; }
  50% { top: 90%; }
  100% { top: 10%; }
}

.animate-pulse-fast {
  animation: pulseFast 1.5s infinite;
}

@keyframes pulseFast {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
</style>
