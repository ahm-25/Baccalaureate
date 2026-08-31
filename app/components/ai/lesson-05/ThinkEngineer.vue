<template>
  <section id="think-engineer" class="py-20 bg-green-50 font-arabic">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-200">
        <h2 class="text-3xl font-extrabold text-green-800 mb-6 flex items-center gap-3">
          <span class="text-4xl text-green-500">👨‍💻</span> فكر كمهندس
        </h2>

        <p class="text-xl text-gray-800 leading-relaxed mb-8">
          المهندس الجيد لا يحفظ فقط، بل يسأل ويبحث عن الأسباب. حاول الإجابة عن الأسئلة التالية بأسلوبك لتختبر فهمك العميق للمفاهيم التي درسناها.
        </p>

        <!-- Questions -->
        <div class="space-y-8">
          <div v-for="(q, index) in questions" :key="index" class="bg-gray-50 p-6 rounded-2xl border border-gray-200 transition-all hover:border-green-300">
            <h3 class="font-bold text-gray-900 mb-3 text-lg">
              {{ index + 1 }}. {{ q.text }}
            </h3>
            <textarea
              v-model="answers[index]"
              rows="3"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 mb-3 resize-none"
              placeholder="اكتب أفكارك هنا..."
            ></textarea>
            
            <transition name="fade">
              <div class="bg-green-100/50 p-4 rounded-xl border border-green-200" v-if="showHints">
                <span class="font-bold text-green-800 text-sm block mb-1">💡 فكرة للإجابة:</span>
                <p class="text-green-700 text-sm">{{ q.hint }}</p>
              </div>
            </transition>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <button
            @click="showHints = !showHints"
            class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-colors"
          >
            {{ showHints ? "إخفاء أفكار الإجابة" : "عرض أفكار الإجابة" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const questions = [
  { text: "لماذا قد يخطئ نظام AI في التعرف على صورة؟", hint: "تذكر جودة بيانات التدريب. إذا تدرب النظام على صور واضحة وواجه صورة مشوشة، أو إذا لم يرَ مثل هذا النمط من قبل، فقد يخطئ." },
  { text: "لماذا تحتاج نماذج التعلم العميق إلى بيانات؟", hint: "لأنها لا تمتلك قواعد مبرمجة مسبقاً، بل تتعلم الأنماط والروابط المخفية من خلال استعراض آلاف الأمثلة لتعديل أوزان شبكاتها العصبية." },
  { text: "ما الفرق بين ML وDL؟", hint: "DL هو نوع متطور من ML يستخدم شبكات عصبية متعددة الطبقات لحل مشاكل أعقد بكثير مثل تحليل الصور، بينما ML يشمل أساليب إحصائية أبسط للتعلم." },
  { text: "أعط مثالًا على استخدام AI في حياتك اليومية.", hint: "مثلاً: استخدام خرائط الهاتف لتوقع الزحام، أو فلاتر الصور، أو تصنيف الرسائل المزعجة، أو فتح الهاتف ببصمة الوجه." },
  { text: "أعط مثالًا على استخدام Generative AI.", hint: "توليد نصوص أو قصص باستخدام ChatGPT، أو إنشاء صورة جديدة لمشروع مدرسي باستخدام Midjourney، أو توليد أصوات مقلدة." },
  { text: "ما الخطر من استخدام AI في الواجبات المدرسية دون مراجعة؟", hint: "خطر 'الهلوسة' (Hallucination) حيث قد يعطيك الذكاء الاصطناعي معلومات تاريخية أو علمية خاطئة ولكنها تبدو منطقية جداً ومقنعة." },
  { text: "كيف تتحقق من معلومة أعطاها لك AI؟", hint: "من خلال البحث عن نفس المعلومة في محركات البحث ومقارنتها بالمصادر الرسمية، أو الكتب المدرسية، أو المواقع الموثوقة." },
  { text: "هل يمكن أن يكون AI مفيدًا وخطيرًا في نفس الوقت؟ وضح.", hint: "نعم، فهو يفيد في تسريع العمل واكتشاف العلاجات، ولكنه خطير إذا تم استخدامه لتوليد أخبار مزيفة أو الاعتماد عليه بدون تفكير نقدي." }
];

const answers = ref(new Array(questions.length).fill(""));
const showHints = ref(false);
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
