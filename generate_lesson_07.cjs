const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app/components/cyber/lesson-07');
const dataDir = path.join(__dirname, 'app/data/lessons/second-baccalaureate/cyber');
const pagesDir = path.join(__dirname, 'app/pages');

// Create directories
[componentsDir, dataDir, pagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = {};

// 1. Data file: lesson-07.ts
files[path.join(dataDir, 'lesson-07.ts')] = `export const lessonData = {
  courseTitle: "تانية بكالوريا",
  lessonTitle: "2-1 تقنيات التشفير والمصادقة",
  sections: [
    { id: "hero", title: "البداية" },
    { id: "opening", title: "سؤال البداية" },
    { id: "objectives", title: "أهداف الدرس" },
    { id: "why-protect", title: "لماذا نحتاج لحماية الاتصال؟" },
    { id: "what-is-https", title: "ما هو HTTPS؟" },
    { id: "tls-handshake", title: "كيف تعمل مصافحة TLS؟" },
    { id: "public-key", title: "التشفير بالمفتاح العام" },
    { id: "symmetric-key", title: "التشفير المتماثل" },
    { id: "https-protection", title: "كيف تحمي HTTPS الاتصال؟" },
    { id: "authentication", title: "المصادقة Authentication" },
    { id: "fa2", title: "المصادقة الثنائية FA2" },
    { id: "auth-factors", title: "أنواع عوامل المصادقة" },
    { id: "digital-cert", title: "الشهادة الرقمية" },
    { id: "digital-signature", title: "التوقيع الرقمي" },
    { id: "security-comparison", title: "الفرق بين التقنيات" },
    { id: "practical-example", title: "مثال عملي: التسوق" },
    { id: "stop-think", title: "توقف وفكر" },
    { id: "solved-example", title: "مثال محلول" },
    { id: "practice-quiz", title: "اختبر فهمك" },
    { id: "think-engineer", title: "فكر كمهندس" },
    { id: "apply-learned", title: "تطبيق ما تعلمته" },
    { id: "exam-question", title: "سؤال امتحان" },
    { id: "summary", title: "الخلاصة" },
    { id: "next-lesson", title: "الدرس القادم" }
  ],
  quiz: []
};`;

// 2. Data file: lesson-07-questions.ts
files[path.join(dataDir, 'lesson-07-questions.ts')] = `export interface Question {
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const allQuestions: Question[] = [
  {
    text: "ما نوع التشفير المستخدم لحماية بيانات الجلسة بعد إنشاء مفاتيحها؟",
    options: [
      "المفتاح العام",
      "التشفير المتماثل",
      "الشهادة الرقمية",
      "التوقيع الرقمي"
    ],
    correct: 1,
    explanation: "التشفير المتماثل يستخدم مفتاحًا واحدًا ويتميز بالسرعة والكفاءة، لذا فهو مناسب لحماية كميات كبيرة من بيانات الجلسة."
  },
  {
    text: "أي تقنية تساعد المتصفح على التحقق من هوية الخادم؟",
    options: [
      "المصادقة الثنائية (FA2)",
      "التوقيع الرقمي",
      "الشهادة الرقمية",
      "التشفير المتماثل"
    ],
    correct: 2,
    explanation: "الشهادة الرقمية تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق الذي يتصل به."
  },
  {
    text: "ما التقنية المناسبة لمنع قراءة محتوى الاتصال من طرف ثالث؟",
    options: [
      "الشهادة الرقمية",
      "التوقيع الرقمي",
      "التشفير",
      "المصادقة"
    ],
    correct: 2,
    explanation: "التشفير هو الذي يمنع الأطراف غير المصرح لها من قراءة البيانات أثناء النقل."
  },
  {
    text: "ما التقنية التي تساعد على التحقق من سلامة رسالة موقعة وهوية الموقع؟",
    options: [
      "المصادقة الثنائية",
      "التوقيع الرقمي",
      "الشهادة الرقمية",
      "التشفير المتماثل"
    ],
    correct: 1,
    explanation: "التوقيع الرقمي يساعد على اكتشاف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم عدم التنصل."
  }
];`;

// 3. Page file: lesson-07.vue
files[path.join(pagesDir, 'lesson-07.vue')] = `<template>
  <div class="relative bg-slate-50 min-h-screen pb-24" dir="rtl">
    <CyberLesson07Hero />
    <CyberLesson07OpeningQuestion />
    <CyberLesson07Objectives />
    
    <CyberLesson07WhyProtect />
    <CyberLesson07WhatIsHttps />
    <CyberLesson07TlsHandshake />
    
    <CyberLesson07PublicKey />
    <CyberLesson07SymmetricKey />
    <CyberLesson07HttpsProtection />
    
    <CyberLesson07Authentication />
    <CyberLesson07Fa2 />
    <CyberLesson07AuthFactors />
    
    <CyberLesson07DigitalCert />
    <CyberLesson07DigitalSignature />
    <CyberLesson07SecurityComparison />
    
    <CyberLesson07PracticalExample />
    <CyberLesson07StopThink />
    <CyberLesson07SolvedExample />
    
    <!-- Practice Quiz Arena -->
    <QuizQuestionArena
      v-if="practiceQuiz.length > 0"
      :questions="practiceQuiz"
      section-title="🎯 اختبر فهمك"
      section-id="practice-quiz"
    />
    
    <CyberLesson07ThinkEngineer />
    <CyberLesson07ApplyLearned />
    <CyberLesson07ExamQuestion />
    <CyberLesson07Summary />
    <CyberLesson07NextLesson />

    <!-- Navigation -->
    <div class="fixed top-24 left-6 z-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 flex items-center p-2 gap-4">
      <NuxtLink to="/lesson-06" class="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-1">
        <span>&rarr;</span> السابق
      </NuxtLink>
      <div class="w-px h-4 bg-slate-300"></div>
      <button @click="toggleTeacherMode" class="text-indigo-700 font-bold hover:text-indigo-900 transition-colors flex items-center gap-2">
        <span class="text-lg">🖊️</span> وضع الشرح
      </button>
      <div class="w-px h-4 bg-slate-300"></div>
      <NuxtLink to="/lesson-08" class="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-bold flex items-center gap-1">
        التالي <span>&larr;</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useLesson } from "~/composables/useLesson";
import { useQuiz } from "~/composables/useQuiz";
import { useTeacherMode } from "~/composables/useTeacherMode";
import { lessonData } from "~/data/lessons/second-baccalaureate/cyber/lesson-07";
import { allQuestions } from "~/data/lessons/second-baccalaureate/cyber/lesson-07-questions";
import type { Question } from "~/data/lessons/second-baccalaureate/cyber/lesson-07-questions";

const { setSections, setLessonInfo, setCurrentSection, sections } = useLesson();
const { setQuestions } = useQuiz();
const { toggleTeacherMode } = useTeacherMode();

setLessonInfo(lessonData.courseTitle, lessonData.lessonTitle);
setSections(lessonData.sections);
setQuestions(lessonData.quiz);

const practiceQuiz = ref<Question[]>([]);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  practiceQuiz.value = allQuestions;

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const index = sections.value.findIndex((s: any) => s.id === id);
        if (index !== -1) {
          setCurrentSection(index);
        }
      }
    });
  }, { threshold: 0.3 });

  setTimeout(() => {
    document.querySelectorAll("section[id]").forEach((sec) => {
      if (observer) observer.observe(sec);
    });
  }, 500);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
`;

// 4. Components

files[path.join(componentsDir, 'Hero.vue')] = `<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 min-h-[90vh] flex items-center">
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 mb-8">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-200">الوحدة 2 • الأمن السيبراني • الدرس 2-1</span>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
        تقنيات <span class="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-indigo-400">التشفير والمصادقة</span>
      </h1>
      
      <p class="text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
        من HTTPS إلى المصادقة الثنائية... إزاي البيانات والحسابات بتتحمى على الإنترنت؟
      </p>
      
      <!-- Visual Educational Graphic -->
      <div class="flex justify-center items-center gap-6 mb-12 flex-wrap">
        <div class="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 flex flex-col items-center w-32">
          <div class="text-4xl mb-2">🌐</div>
          <span class="text-slate-300 text-sm font-bold">متصفح</span>
        </div>
        <div class="flex items-center gap-2 text-cyan-400">
          <span class="text-2xl">🔒</span>
          <div class="h-1 w-16 bg-gradient-to-l from-cyan-400 to-indigo-400 rounded"></div>
          <span class="text-2xl">🔑</span>
        </div>
        <div class="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 flex flex-col items-center w-32">
          <div class="text-4xl mb-2">🖥️</div>
          <span class="text-slate-300 text-sm font-bold">خادم</span>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('opening')" class="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-2xl shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2">
          <span>ابدأ الدرس</span>
        </button>
        <button @click="scrollTo('practice-quiz')" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all">
          اختبر معلوماتك
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>`;

files[path.join(componentsDir, 'OpeningQuestion.vue')] = `<template>
  <section id="opening" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 shadow-sm">
        <h2 class="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
          <span class="text-3xl">🤔</span> قبل ما نبدأ...
        </h2>
        
        <p class="text-lg text-slate-700 mb-8 leading-relaxed">
          أنت داخل على موقع بنك أو بتشتري حاجة أونلاين. <br/>
          <strong>إزاي تضمن إن البيانات اللي بتبعتها مش أي حد يقدر يقرأها؟</strong><br/>
          <strong>وإزاي تتأكد إن الموقع اللي قدامك هو فعلًا الموقع الحقيقي؟</strong>
        </p>
        
        <div class="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 class="text-lg font-bold text-slate-800 mb-4">هل كلمة المرور وحدها كافية لحماية حسابك؟</h3>
          
          <div class="space-y-3">
            <button 
              @click="answer = 'A'" 
              :class="['w-full text-right p-4 rounded-xl border transition-all', answer === 'A' ? 'bg-red-50 border-red-200 text-red-700' : 'hover:bg-slate-50 border-slate-200']"
            >
              A. نعم، دائمًا
            </button>
            <button 
              @click="answer = 'B'" 
              :class="['w-full text-right p-4 rounded-xl border transition-all', answer === 'B' ? 'bg-green-50 border-green-200 text-green-700' : 'hover:bg-slate-50 border-slate-200']"
            >
              B. لا، الأفضل استخدام طبقات حماية إضافية
            </button>
          </div>
          
          <div v-if="answer" class="mt-6 p-4 rounded-xl" :class="answer === 'B' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            <strong v-if="answer === 'B'">إجابة صحيحة! 👏</strong>
            <strong v-else>غير دقيق! 💡</strong>
            <p class="mt-2 text-sm">
              الأمان على الإنترنت لا يعتمد على تقنية واحدة، بل على الجمع بين التشفير والمصادقة والشهادات والتوقيعات عشان نحمي البيانات والحسابات بشكل كامل.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const answer = ref(null);
</script>`;

files[path.join(componentsDir, 'Objectives.vue')] = `<template>
  <section id="objectives" class="py-20 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">أهداف الدرس</h2>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6">🔐</div>
          <h3 class="text-xl font-bold text-slate-800 mb-3">فهم HTTPS وTLS</h3>
          <p class="text-slate-600">فهم كيف يتم تأمين الاتصال بين المتصفح والخادم لحماية البيانات أثناء النقل.</p>
        </div>
        
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6">🔑</div>
          <h3 class="text-xl font-bold text-slate-800 mb-3">التمييز بين تقنيات الأمان</h3>
          <p class="text-slate-600">التمييز بين التشفير والشهادة الرقمية والتوقيع الرقمي والمصادقة الثنائية وفهم دور كل منها.</p>
        </div>
        
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-6">🛡️</div>
          <h3 class="text-xl font-bold text-slate-800 mb-3">اختيار طريقة مصادقة</h3>
          <p class="text-slate-600">تقييم طرق المصادقة بناءً على الأمان وإمكانية الوصول لاختيار الأنسب للسياق.</p>
        </div>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'WhyProtect.vue')] = `<template>
  <section id="why-protect" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-8 border-r-4 border-indigo-500 pr-4">لماذا نحتاج إلى حماية الاتصال؟</h2>
      
      <p class="text-lg text-slate-700 mb-8 leading-relaxed">
        تخيل أنك أرسلت كلمة مرور حسابك عبر الإنترنت <strong>بدون حماية</strong>...
      </p>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h3 class="font-bold text-red-800 mb-4 flex items-center gap-2">
            <span>⚠️</span> بدون حماية (HTTP)
          </h3>
          <div class="flex items-center justify-between text-sm text-slate-600 mb-4 relative">
            <div class="text-center"><div class="text-2xl mb-1">👤</div>المستخدم</div>
            <div class="flex-1 flex justify-center text-red-500 animate-pulse px-2">
              <span class="text-xs absolute -top-4 text-nowrap">يمكن قراءة وتعديل البيانات!</span>
              - - - - - - - &gt;
            </div>
            <div class="text-center"><div class="text-2xl mb-1">🖥️</div>الخادم</div>
          </div>
          <p class="text-slate-700 text-sm">يمكن لطرف ثالث محاولة قراءة البيانات أو التلاعب بها أثناء انتقالها.</p>
        </div>
        
        <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h3 class="font-bold text-emerald-800 mb-4 flex items-center gap-2">
            <span>🛡️</span> مع حماية (HTTPS/TLS)
          </h3>
          <div class="flex items-center justify-between text-sm text-slate-600 mb-4 relative">
            <div class="text-center"><div class="text-2xl mb-1">👤</div>المستخدم</div>
            <div class="flex-1 flex justify-center items-center px-2">
               <div class="h-2 bg-emerald-400 w-full rounded"></div>
            </div>
            <div class="text-center"><div class="text-2xl mb-1">🖥️</div>الخادم</div>
          </div>
          <p class="text-slate-700 text-sm">يتم حماية البيانات أثناء انتقالها والتحقق من هوية الخادم لضمان الأمان.</p>
        </div>
      </div>
      
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4 items-start">
        <div class="text-2xl">💡</div>
        <p class="text-sm text-amber-900 leading-relaxed">
          <strong>ملاحظة هامة:</strong> عندما تفتح موقعًا يبدأ بـ HTTPS، فهذا يعني أن <em>الاتصال</em> نفسه محمي ومؤمّن، ولكن هذا لا يعني بالضرورة أن محتوى الموقع موثوق أو آمن 100%.
        </p>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'WhatIsHttps.vue')] = `<template>
  <section id="what-is-https" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">ما هو HTTPS؟</h2>
      
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
        <p class="text-2xl text-indigo-700 font-bold mb-4">
          HTTPS = HTTP + TLS
        </p>
        <p class="text-lg text-slate-600 leading-relaxed">
          HTTPS هو استخدام بروتوكول HTTP عبر اتصال <strong>TLS</strong> مؤمّن.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform shadow-sm cursor-default">
          <div class="text-3xl mb-3">🤫</div>
          <h4 class="font-bold text-slate-800 mb-2">السرية</h4>
          <p class="text-sm text-slate-600">سرية البيانات أثناء النقل (التشفير).</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform shadow-sm cursor-default">
          <div class="text-3xl mb-3">✅</div>
          <h4 class="font-bold text-slate-800 mb-2">السلامة</h4>
          <p class="text-sm text-slate-600">سلامة البيانات وعدم تعديلها في الطريق.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform shadow-sm cursor-default">
          <div class="text-3xl mb-3">🆔</div>
          <h4 class="font-bold text-slate-800 mb-2">التحقق من الهوية</h4>
          <p class="text-sm text-slate-600">التحقق من هوية الخادم واسم النطاق.</p>
        </div>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'TlsHandshake.vue')] = `<template>
  <section id="tls-handshake" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 border-r-4 border-indigo-500 pr-4">كيف تعمل مصافحة TLS؟</h2>
      
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Steps List -->
        <div class="md:w-1/3 flex flex-col gap-4">
          <button 
            v-for="(step, i) in steps" 
            :key="i"
            @click="activeStep = i"
            :class="['p-4 rounded-xl text-right transition-all border-2', activeStep === i ? 'bg-indigo-50 border-indigo-500 text-indigo-900 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:border-indigo-200']"
          >
            <div class="text-sm font-bold text-indigo-500 mb-1">المرحلة {{ i + 1 }}</div>
            <div class="font-bold">{{ step.title }}</div>
          </button>
        </div>
        
        <!-- Step Content & Animation -->
        <div class="md:w-2/3 bg-slate-900 rounded-3xl p-8 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
          
          <div class="text-center z-10">
            <h3 class="text-2xl font-bold text-white mb-4">{{ steps[activeStep].title }}</h3>
            <p class="text-slate-300 text-lg leading-relaxed max-w-md mx-auto">
              {{ steps[activeStep].desc }}
            </p>
          </div>
          
          <!-- Visuals -->
          <div class="mt-12 flex justify-between items-center px-4 md:px-12 relative z-10">
            <div class="text-center">
              <div class="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl border border-slate-700 mb-2">🌐</div>
              <span class="text-slate-400 text-sm">المتصفح</span>
            </div>
            
            <div class="flex-1 flex justify-center relative px-4">
               <!-- Animating Element based on step -->
               <div v-if="activeStep === 0" class="flex flex-col items-center animate-slide-right w-full">
                 <span class="text-xs text-amber-300 mb-1">&larr; شهادة رقمية</span>
                 <div class="h-1 bg-amber-500/50 w-full rounded"></div>
               </div>
               
               <div v-if="activeStep === 1" class="flex flex-col items-center w-full">
                 <div class="flex justify-between w-full mb-1">
                   <span class="text-xs text-purple-300">مفاتيح عامة &rarr;</span>
                   <span class="text-xs text-purple-300">&larr; أسرار مشتركة</span>
                 </div>
                 <div class="h-1 bg-purple-500/50 w-full rounded"></div>
               </div>
               
               <div v-if="activeStep === 2" class="flex flex-col items-center animate-pulse w-full">
                 <span class="text-xs text-emerald-300 mb-1">&harr; بيانات مشفرة &harr;</span>
                 <div class="h-2 bg-emerald-500 w-full rounded shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
               </div>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl border border-slate-700 mb-2">🖥️</div>
              <span class="text-slate-400 text-sm">الخادم</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const activeStep = ref(0);
const steps = [
  { 
    title: 'التحقق من الشهادة', 
    desc: 'الخادم يرسل شهادته الرقمية. المتصفح يتحقق من صلاحيتها، سلسلة الثقة، وارتباطها باسم الموقع.' 
  },
  { 
    title: 'اشتقاق مفاتيح الجلسة', 
    desc: 'يتفق الطرفان باستخدام آليات المفتاح العام على أسرار مشتركة تُشتق منها مفاتيح الجلسة.' 
  },
  { 
    title: 'تبادل البيانات', 
    desc: 'بعد إنشاء مفاتيح الجلسة، تُحمى البيانات المتبادلة باستخدام التشفير المتماثل وآليات سلامة البيانات.' 
  }
];
</script>
<style scoped>
.animate-slide-right { animation: slideRight 2s infinite; }
@keyframes slideRight { from { transform: translateX(20px); opacity: 0; } 50% { opacity: 1; } to { transform: translateX(-20px); opacity: 0; } }
</style>
`;

files[path.join(componentsDir, 'PublicKey.vue')] = `<template>
  <section id="public-key" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">التشفير بالمفتاح العام</h2>
      <p class="text-lg text-slate-600 mb-12">
        يستخدم زوجًا من المفاتيح المرتبطة: مفتاحًا عامًا (للمشاركة) ومفتاحًا خاصًا (يظل سريًا).
      </p>
      
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <div class="bg-blue-50 p-8 rounded-3xl border border-blue-200 w-full max-w-xs transition-transform hover:scale-105">
          <div class="text-6xl mb-4">🔓</div>
          <h3 class="text-xl font-bold text-blue-900 mb-2">المفتاح العام</h3>
          <p class="text-blue-700 text-sm">يمكن مشاركته مع أي شخص. يستخدم لتشفير البيانات أو التحقق من التوقيع.</p>
        </div>
        
        <div class="text-3xl text-slate-400">➕</div>
        
        <div class="bg-red-50 p-8 rounded-3xl border border-red-200 w-full max-w-xs transition-transform hover:scale-105">
          <div class="text-6xl mb-4">🔐</div>
          <h3 class="text-xl font-bold text-red-900 mb-2">المفتاح الخاص</h3>
          <p class="text-red-700 text-sm">يجب الحفاظ عليه سريًا. يستخدم لفك التشفير أو إنشاء توقيع رقمي.</p>
        </div>
      </div>
      
      <div class="mt-12 bg-white p-6 rounded-2xl border border-slate-200 text-right">
        <h4 class="font-bold text-indigo-800 mb-2">استخدامه في مصافحة TLS:</h4>
        <p class="text-slate-600 leading-relaxed">
          يُستخدم التشفير بالمفتاح العام <strong>أثناء مصافحة TLS</strong> للمصادقة والاتفاق الآمن على مفاتيح الجلسة، لكنه لا يُستخدم لتشفير كل بيانات الجلسة لأنه أبطأ وأقل كفاءة مع الكميات الكبيرة.
        </p>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'SymmetricKey.vue')] = `<template>
  <section id="symmetric-key" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">التشفير المتماثل</h2>
      <p class="text-lg text-slate-600 text-center mb-12">
        يستخدم <strong>مفتاحًا واحدًا</strong> للتشفير وفك التشفير. يتميز بالسرعة والكفاءة، لذا يُستخدم لحماية بيانات الجلسة بعد نجاح المصافحة.
      </p>
      
      <div class="bg-slate-900 p-8 rounded-3xl overflow-hidden relative max-w-2xl mx-auto flex flex-col items-center">
        
        <div class="flex items-center gap-4 mb-8">
          <div class="bg-white p-3 rounded-xl shadow text-sm font-bold text-slate-800 w-32 text-center" :class="{'opacity-50': state > 0}">مرحباً!</div>
          <div class="text-2xl text-emerald-400 transition-opacity" :class="{'opacity-0': state !== 1}">🔑</div>
          <div class="bg-slate-800 border-2 border-dashed border-slate-600 p-3 rounded-xl w-32 text-center text-slate-400 font-mono text-xs">
            <span v-if="state >= 2">!@#$*&^%</span>
            <span v-else>...</span>
          </div>
          <div class="text-2xl text-emerald-400 transition-opacity" :class="{'opacity-0': state !== 3}">🔑</div>
          <div class="bg-white p-3 rounded-xl shadow text-sm font-bold text-slate-800 w-32 text-center transition-opacity" :class="{'opacity-100': state === 4, 'opacity-0': state < 4}">مرحباً!</div>
        </div>
        
        <button @click="playAnimation" class="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl" :disabled="isPlaying">
          شغل المحاكاة
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const state = ref(0);
const isPlaying = ref(false);

const playAnimation = () => {
  isPlaying.value = true;
  state.value = 0;
  setTimeout(() => state.value = 1, 800);
  setTimeout(() => state.value = 2, 1600);
  setTimeout(() => state.value = 3, 2400);
  setTimeout(() => { state.value = 4; isPlaying.value = false; }, 3200);
};
</script>`;

files[path.join(componentsDir, 'HttpsProtection.vue')] = `<template>
  <section id="https-protection" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">الخلاصة: كيف تحمي HTTPS الاتصال؟</h2>
      
      <div class="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">1</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">شهادة رقمية</h4>
            <p class="text-sm text-slate-600">التحقق من هوية الخادم وارتباطه باسم النطاق.</p>
          </div>
        </div>
        
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">2</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">آليات المفتاح العام</h4>
            <p class="text-sm text-slate-600">تستخدم للمصادقة والاتفاق الآمن أثناء المصافحة.</p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">3</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">اشتقاق مفاتيح الجلسة</h4>
            <p class="text-sm text-slate-600">اشتقاق أسرار مشتركة لإنشاء مفاتيح جلسة متماثلة.</p>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">4</div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-emerald-50 shadow-sm mr-4 md:mr-0 md:group-even:ml-10 md:group-odd:mr-10">
            <h4 class="font-bold text-slate-800 mb-1 text-lg">التشفير المتماثل</h4>
            <p class="text-sm text-slate-600">حماية بيانات الجلسة بسرعة وكفاءة.</p>
          </div>
        </div>
      </div>
      
      <!-- Interactive Question -->
      <div class="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
        <h4 class="font-bold text-indigo-900 mb-4">🤔 لماذا لا نستخدم التشفير بالمفتاح العام لكل البيانات طوال الجلسة؟</h4>
        <button v-if="!showAnswer" @click="showAnswer = true" class="px-6 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold rounded-xl transition-colors">
          اعرض الإجابة
        </button>
        <p v-if="showAnswer" class="text-emerald-700 font-medium mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 leading-relaxed">
          لأن استخدامه لتبادل كميات كبيرة من البيانات أقل كفاءة، لذلك تُستخدم مفاتيح جلسة متماثلة لحماية بيانات الجلسة بسرعة.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const showAnswer = ref(false);
</script>`;

files[path.join(componentsDir, 'Authentication.vue')] = `<template>
  <section id="authentication" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="text-6xl mb-6">🕵️‍♂️</div>
      <h2 class="text-3xl font-bold text-slate-800 mb-6">المصادقة (Authentication)</h2>
      
      <p class="text-xl text-slate-700 mb-6 font-medium">
        "إزاي الموقع يعرف إنك فعلًا صاحب الحساب؟"
      </p>
      
      <div class="bg-indigo-50 border-r-4 border-indigo-500 p-6 rounded-l-xl text-right inline-block max-w-2xl mb-8">
        <p class="text-lg text-slate-800 leading-relaxed">
          <strong>المصادقة</strong> هي عملية التحقق من هوية المستخدم قبل منحه حق الوصول.
        </p>
      </div>
      
      <div class="flex justify-center gap-4 text-slate-600 text-sm md:text-base font-bold">
        <div class="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200"><div class="text-xl">👤</div>اسم المستخدم</div>
        <span class="flex items-center text-xl">+</span>
        <div class="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200"><div class="text-xl">🔑</div>كلمة المرور</div>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'Fa2.vue')] = `<template>
  <section id="fa2" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-4">المصادقة الثنائية (FA2)</h2>
      <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        استخدام عاملين مستقلين من <strong>فئتين مختلفتين</strong> لإثبات الهوية، لتقليل احتمال الدخول غير المصرح به إذا تم كشف كلمة المرور.
      </p>
      
      <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-center gap-6">
        
        <div class="bg-slate-50 p-6 rounded-2xl w-full max-w-xs border border-slate-200 hover:-translate-y-1 transition-transform">
          <div class="text-5xl mb-2">🔑</div>
          <h4 class="font-bold text-slate-800">كلمة المرور</h4>
          <p class="text-xs text-slate-500">عامل 1</p>
        </div>
        
        <div class="text-3xl text-indigo-500 font-bold">+</div>
        
        <div class="bg-indigo-50 p-6 rounded-2xl w-full max-w-xs border border-indigo-200 hover:-translate-y-1 transition-transform">
          <div class="text-5xl mb-2">📱</div>
          <h4 class="font-bold text-indigo-900">هاتف محمول</h4>
          <p class="text-xs text-indigo-600">عامل 2 (مستقل)</p>
        </div>
        
        <div class="text-3xl text-emerald-500 font-bold">=</div>
        
        <div class="bg-emerald-50 p-6 rounded-2xl w-full max-w-xs border border-emerald-200 hover:-translate-y-1 transition-transform">
          <div class="text-5xl mb-2">✅</div>
          <h4 class="font-bold text-emerald-900">دخول آمن</h4>
          <p class="text-xs text-emerald-600">Access Granted</p>
        </div>

      </div>
      
      <div class="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-sm max-w-2xl mx-auto">
        <strong>💡 تذكر:</strong> إذا عرف شخص كلمة المرور فقط، فلن تكفي وحدها للدخول إذا كان العامل الثاني مطلوبًا.
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'AuthFactors.vue')] = `<template>
  <section id="auth-factors" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">أنواع عوامل المصادقة</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-sky-50 p-8 rounded-3xl border border-sky-100 hover:shadow-md transition-shadow text-center">
          <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">🧠</div>
          <h3 class="text-xl font-bold text-sky-900 mb-2">المعرفة</h3>
          <p class="text-sky-700 font-medium mb-4">شيء تعرفه</p>
          <ul class="text-sm text-sky-800 space-y-2 text-right list-disc list-inside bg-white p-4 rounded-xl">
            <li>كلمة المرور (Password)</li>
            <li>رقم التعريف الشخصي (PIN)</li>
          </ul>
        </div>

        <div class="bg-purple-50 p-8 rounded-3xl border border-purple-100 hover:shadow-md transition-shadow text-center">
          <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">📱</div>
          <h3 class="text-xl font-bold text-purple-900 mb-2">الحيازة</h3>
          <p class="text-purple-700 font-medium mb-4">شيء تملكه</p>
          <ul class="text-sm text-purple-800 space-y-2 text-right list-disc list-inside bg-white p-4 rounded-xl">
            <li>الهاتف الذكي</li>
            <li>رمز لمرة واحدة (OTP)</li>
            <li>مفتاح أمان</li>
          </ul>
        </div>

        <div class="bg-rose-50 p-8 rounded-3xl border border-rose-100 hover:shadow-md transition-shadow text-center">
          <div class="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-6">👁️</div>
          <h3 class="text-xl font-bold text-rose-900 mb-2">السمات الحيوية</h3>
          <p class="text-rose-700 font-medium mb-4">شيء يميزك</p>
          <ul class="text-sm text-rose-800 space-y-2 text-right list-disc list-inside bg-white p-4 rounded-xl">
            <li>بصمة الإصبع</li>
            <li>التعرف على الوجه</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-slate-100 p-6 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-center border border-slate-200">
        <div class="text-center md:text-right">
          <h4 class="font-bold text-indigo-700 mb-1 text-lg">المصادقة الثنائية (FA2)</h4>
          <p class="text-sm text-slate-700">عاملان من <strong>فئتين مختلفتين</strong>.</p>
        </div>
        <div class="hidden md:block w-px h-12 bg-slate-300"></div>
        <div class="text-center md:text-right">
          <h4 class="font-bold text-indigo-700 mb-1 text-lg">المصادقة متعددة العوامل (MFA)</h4>
          <p class="text-sm text-slate-700">عاملان أو أكثر من فئات مختلفة.</p>
        </div>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'DigitalCert.vue')] = `<template>
  <section id="digital-cert" class="py-20 bg-slate-50">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">الشهادة الرقمية</h2>
      <p class="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق الذي يتصل به.
      </p>
      
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-2 md:gap-4 text-2xl mb-8 font-bold">
          <span title="المتصفح" class="text-4xl">🌐</span>
          <span class="text-slate-400 text-sm hidden md:inline">----- يبحث عن -----&gt;</span>
          <button @click="showCert = !showCert" class="bg-amber-100 px-6 py-4 rounded-2xl border-2 border-amber-300 shadow-md hover:bg-amber-200 transition-colors flex flex-col items-center">
            <span class="text-4xl mb-2">📜</span>
            <span class="text-sm font-bold text-amber-900">شهادة رقمية</span>
            <span class="text-xs text-amber-700 mt-1">(اضغط هنا)</span>
          </button>
          <span class="text-slate-400 text-sm hidden md:inline">----- يمثل -----&gt;</span>
          <span title="الموقع" class="text-4xl">🖥️</span>
        </div>
        
        <div v-if="showCert" class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl text-right max-w-sm w-full animate-fade-in-up">
          <h4 class="font-bold text-slate-800 border-b pb-3 mb-4">تفاصيل الشهادة</h4>
          <ul class="space-y-3 text-sm text-slate-600">
            <li class="flex justify-between border-b border-slate-100 pb-2"><strong>الموقع:</strong> <span class="text-indigo-600">example.com</span></li>
            <li class="flex justify-between border-b border-slate-100 pb-2"><strong>الجهة المانحة:</strong> <span>جهة موثوقة (CA)</span></li>
            <li class="flex justify-between border-b border-slate-100 pb-2"><strong>الصلاحية:</strong> <span class="text-emerald-600 font-bold">سارية المفعول</span></li>
            <li class="flex justify-between"><strong>المفتاح العام:</strong> <span class="font-mono text-xs bg-slate-100 px-2 rounded">a1b2c3d4...</span></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 bg-indigo-50 border border-indigo-100 p-6 rounded-2xl inline-block text-right max-w-2xl w-full">
        <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2"><span>⚠️</span> مقارنة هامة:</h4>
        <ul class="space-y-3 text-sm text-indigo-800">
          <li class="flex items-start gap-2">
            <span class="text-lg">📜</span>
            <span><strong>الشهادة الرقمية:</strong> تساعد على التحقق من هوية الخادم.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-lg">🔒</span>
            <span><strong>التشفير:</strong> يحمي محتوى الاتصال من القراءة غير المصرح بها.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const showCert = ref(false);
</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'DigitalSignature.vue')] = `<template>
  <section id="digital-signature" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">التوقيع الرقمي</h2>
      <p class="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        يساعد على اكتشاف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم <strong>عدم التنصل</strong>.
      </p>
      
      <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto mb-10">
        <div class="flex justify-between items-center flex-wrap gap-4">
          <div class="text-center w-full md:w-auto">
            <div class="text-5xl mb-2">📄</div>
            <div class="text-sm font-bold text-slate-700 bg-white px-3 py-1 rounded-full border shadow-sm">رسالة أصلية</div>
          </div>
          
          <div class="flex-1 px-4 relative hidden md:block">
            <div class="h-0.5 bg-slate-300 w-full absolute top-1/2 -translate-y-1/2"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xl shadow-sm border border-slate-200">✍️ توقيع</div>
          </div>
          <div class="w-full text-center md:hidden text-2xl text-slate-400">↓</div>
          
          <div class="text-center w-full md:w-auto">
            <div class="text-5xl mb-2 relative inline-block">
              📄
              <span class="absolute bottom-0 -right-2 bg-emerald-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-sm">✓</span>
            </div>
            <div class="text-sm font-bold text-slate-700 bg-white px-3 py-1 rounded-full border shadow-sm">رسالة موقعة</div>
          </div>
        </div>
        
        <div class="mt-8 bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200">
          <strong>النتيجة:</strong> المستلم يتحقق من التوقيع ✅ (الرسالة لم تتغير وهي من المرسل الحقيقي)
        </div>
      </div>
      
      <div class="bg-amber-50 rounded-2xl p-6 border border-amber-200 max-w-2xl mx-auto text-right">
        <h4 class="font-bold text-amber-900 mb-3 flex items-center gap-2"><span>❓</span> سؤال شائع:</h4>
        <p class="text-amber-800 font-bold mb-1">هل التوقيع الرقمي هدفه الأساسي إخفاء محتوى الرسالة؟</p>
        <p class="text-amber-900 text-sm leading-relaxed">
          <span class="bg-amber-200 px-2 py-0.5 rounded mr-1">لا.</span> وظيفته الأساسية هي التحقق من <strong>سلامة البيانات وهوية الموقع ودعم عدم التنصل</strong>. بينما <em>التشفير</em> هو الذي يحمي المحتوى.
        </p>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'SecurityComparison.vue')] = `<template>
  <section id="security-comparison" class="py-20 bg-slate-900">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-white mb-12 text-center">الفرق بين تقنيات الأمان</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-indigo-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">🔒</div>
            <h3 class="text-2xl font-bold text-white">التشفير</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">يمنع قراءة محتوى الاتصال من أطراف ثالثة (يحمي السرية).</p>
        </div>
        
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-amber-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">📜</div>
            <h3 class="text-2xl font-bold text-white">الشهادة الرقمية</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">تساعد المتصفح على التحقق من هوية الخادم واسم النطاق.</p>
        </div>
        
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-emerald-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">✍️</div>
            <h3 class="text-2xl font-bold text-white">التوقيع الرقمي</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">يتحقق من سلامة البيانات وهوية الموقع ويقدم دليلًا يدعم عدم التنصل.</p>
        </div>
        
        <div class="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-rose-500 transition-colors group cursor-default">
          <div class="flex items-center gap-4 mb-4">
            <div class="text-4xl group-hover:scale-110 transition-transform origin-right bg-rose-900/50 w-16 h-16 flex items-center justify-center rounded-2xl">📱</div>
            <h3 class="text-2xl font-bold text-white">المصادقة الثنائية</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">تقلل احتمال تسجيل الدخول غير المصرح به باشتراط عاملين مستقلين (FA2).</p>
        </div>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'PracticalExample.vue')] = `<template>
  <section id="practical-example" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-4 text-center">مثال عملي: التسوق الإلكتروني</h2>
      <p class="text-lg text-slate-600 mb-12 text-center bg-indigo-50 py-3 px-6 rounded-full inline-block mx-auto">
        سيناريو: أنت تشتري منتجًا من متجر إلكتروني...
      </p>
      
      <div class="space-y-4 max-w-2xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:md:mx-auto before:md:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-300 before:to-transparent">
        <button v-for="(step, i) in steps" :key="i" @click="activeStep = activeStep === i ? null : i" class="w-full text-right bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md relative z-10">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-slate-800 flex items-center gap-4 text-lg">
              <span class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm shadow-md shrink-0">{{ i + 1 }}</span>
              {{ step.title }}
            </h4>
            <span class="text-slate-400 bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0" :class="{'rotate-180 bg-indigo-100 text-indigo-600': activeStep === i}">▼</span>
          </div>
          <div v-show="activeStep === i" class="mt-4 pr-14 text-slate-600 text-base leading-relaxed border-t pt-4 animate-fade-in-up">
            {{ step.desc }}
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const activeStep = ref(0);
const steps = [
  { title: "فتح الموقع عبر HTTPS", desc: "يتم إنشاء اتصال مبدئي وتوضيح الرغبة في اتصال آمن." },
  { title: "التحقق من الشهادة", desc: "المتصفح يتحقق من الشهادة الرقمية واسم النطاق لضمان هوية المتجر." },
  { title: "مصافحة TLS", desc: "TLS يستخدم آليات المفتاح العام أثناء المصافحة للمصادقة والاتفاق الآمن." },
  { title: "مفاتيح الجلسة", desc: "يتم اشتقاق مفاتيح الجلسة (سر مشترك) بينك وبين المتجر." },
  { title: "تشفير البيانات", desc: "بيانات الجلسة (مثل المنتجات وبيانات البطاقة) تحمى بالتشفير المتماثل." },
  { title: "تسجيل الدخول", desc: "عند تسجيل الدخول لحسابك، تستخدم FA2 لتقليل خطر الدخول غير المصرح به." },
  { title: "إثبات العملية", desc: "يمكن استخدام التوقيع الرقمي لإثبات التوقيع على بيانات محددة عندما يتطلب النظام ذلك." }
];
</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'StopThink.vue')] = `<template>
  <section id="stop-think" class="py-24 bg-indigo-600 text-white relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(white 2px, transparent 2px); background-size: 30px 30px;"></div>
    
    <div class="max-w-3xl mx-auto px-6 text-center relative z-10">
      <div class="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg border-4 border-indigo-400">🤔</div>
      <h2 class="text-3xl font-bold mb-8">توقف وفكر</h2>
      
      <div class="bg-indigo-700/50 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/50 shadow-xl mb-8">
        <p class="text-2xl font-medium leading-relaxed">
          "إذا تسربت كلمة المرور، لماذا يمكن لعامل ثانٍ يُرسل إلى الهاتف أن يظل يحمي الحساب؟"
        </p>
      </div>
      
      <button v-if="!show" @click="show = true" class="px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-2xl hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
        فكرت؟ شوف الإجابة
      </button>
      
      <div v-if="show" class="bg-emerald-500 text-white p-8 rounded-3xl mt-8 shadow-xl animate-fade-in-up text-right">
        <h4 class="font-bold text-xl mb-4 border-b border-emerald-400 pb-2">الإجابة:</h4>
        <p class="text-lg leading-relaxed text-emerald-50">
          لأن العامل الثاني مستقل عن كلمة المرور (معرفة مقابل حيازة). معرفة كلمة المرور وحدها لا تكفي للدخول إذا كان النظام يطلب عاملًا ثانيًا مثل رمز من تطبيق مصادقة أو جهاز يملكه المستخدم.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const show = ref(false);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.4s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'SolvedExample.vue')] = `<template>
  <section id="solved-example" class="py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center flex items-center justify-center gap-3">
        <span class="text-4xl">📝</span> مثال محلول: حدد صح أو خطأ
      </h2>
      <div class="space-y-4">
        <div v-for="(q, i) in questions" :key="i" class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-indigo-300 hover:shadow-md transition-all group" @click="q.show = true">
          <div class="flex items-start gap-4">
            <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold shrink-0 mt-0.5">{{ i + 1 }}</span>
            <div class="flex-1">
              <p class="text-lg font-medium text-slate-800 mb-2 leading-relaxed">{{ q.text }}</p>
              
              <div v-if="q.show" class="mt-4 p-4 rounded-xl text-sm animate-fade-in-up" :class="q.ans ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-rose-50 text-rose-900 border border-rose-100'">
                <strong class="text-base flex items-center gap-2 mb-1">
                  <span v-if="q.ans" class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">✓</span>
                  <span v-else class="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">✗</span>
                  {{ q.ans ? 'عبارة صحيحة' : 'عبارة خاطئة' }}
                </strong>
                <p v-if="q.exp" class="mt-2 text-slate-700 leading-relaxed">{{ q.exp }}</p>
              </div>
              
              <div v-else class="text-sm text-indigo-500 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>اضغط لمعرفة الإجابة</span>
                <span>&larr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const questions = ref([
  { text: 'يستخدم اتصال HTTPS آليات المفتاح العام والتشفير المتماثل.', ans: true, show: false, exp: 'صحيح. يجمع HTTPS بين كلا النوعين للحصول على أقصى أمان وأداء.' },
  { text: 'يستخدم HTTPS التشفير بالمفتاح العام لجميع البيانات طوال الجلسة.', ans: false, show: false, exp: 'يستخدم التشفير المتماثل لحماية بيانات الجلسة لأن التشفير بالمفتاح العام أبطأ وأقل كفاءة لكميات البيانات الكبيرة.' },
  { text: 'المصادقة الثنائية (FA2) تستخدم عاملين مستقلين من فئتين مختلفتين.', ans: true, show: false, exp: 'صحيح. يجب أن يكونا من فئتين مختلفتين (مثال: شيء تعرفه + شيء تملكه).' },
  { text: 'كلمتا مرور مختلفتان تعتبران مصادقة ثنائية FA2.', ans: false, show: false, exp: 'كلمتا المرور كلاهما من فئة "المعرفة"، لذلك لا يمثلان عاملين من فئتين مختلفتين، وبالتالي لا يحققان FA2.' }
]);
</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'ThinkEngineer.vue')] = `<template>
  <section id="think-engineer" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full mix-blend-screen filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-amber-400 mb-2 flex items-center gap-3">
            <span class="text-4xl">⚙️</span> فكر كمهندس
          </h2>
          <p class="text-lg text-slate-300 mb-10 font-light border-b border-slate-700 pb-6 inline-block">"المهندس الجيد لا يحفظ التقنية فقط... لكنه يختار التقنية المناسبة للمشكلة."</p>
          
          <div class="bg-slate-800 p-8 rounded-3xl mb-8 border border-slate-700 shadow-inner">
            <h3 class="font-bold text-xl mb-4 text-white">السيناريو:</h3>
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
              مدرسة تريد إنشاء بوابة إلكترونية يستطيع الطلاب من خلالها معرفة درجاتهم، دفع المصروفات، وتسجيل الدخول لحساباتهم.
              <br/><br/>
              <strong class="text-rose-400 bg-rose-400/10 px-3 py-1 rounded">ملاحظة هامة:</strong> هناك طالب قد لا يملك هاتفًا ذكيًا.
            </p>
            <h3 class="font-bold text-lg mb-4 text-indigo-400">المطلوب: اختر طريقة تسجيل الدخول المناسبة مع التبرير</h3>
            
            <div class="flex flex-col gap-4">
              <button @click="ans='A'" :class="['text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg', ans==='A'?'bg-indigo-900 border-indigo-500 text-indigo-100':'border-slate-600 text-slate-300 hover:bg-slate-700']">A. كلمة مرور فقط</button>
              <button @click="ans='B'" :class="['text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg', ans==='B'?'bg-indigo-900 border-indigo-500 text-indigo-100':'border-slate-600 text-slate-300 hover:bg-slate-700']">B. كلمة مرور + عامل ثانٍ عبر تطبيق هاتف حصراً</button>
              <button @click="ans='C'" :class="['text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg', ans==='C'?'bg-emerald-900 border-emerald-500 text-emerald-100':'border-slate-600 text-slate-300 hover:bg-slate-700']">C. كلمة مرور + توفير بدائل لعامل المصادقة الثاني</button>
            </div>
          </div>
          
          <div v-if="ans" class="bg-emerald-900/40 border-2 border-emerald-500/50 p-8 rounded-3xl animate-fade-in-up">
            <h4 class="font-bold text-emerald-400 mb-4 text-xl flex items-center gap-2">
              <span class="text-2xl">⚖️</span> تبرير الاختيار (Trade-off):
            </h4>
            <p class="text-lg text-slate-200 leading-relaxed">
              الإجابة الصحيحة هي <strong>C</strong>.<br/>
              يجب الموازنة بين <strong>الأمان</strong> و <strong>إمكانية الوصول</strong>. إذا فرضنا استخدام تطبيق مصادقة على هاتف ذكي (B)، سنمنع الطالب الذي لا يملك هاتفًا من الوصول. كلمة المرور فقط (A) تفتقر للأمان الكافي لعمليات الدفع. الحل الأمثل هو استخدام FA2 مع توفير بدائل للعامل الثاني (مثل بطاقة ذكية أو كود عبر البريد الإلكتروني للمدرسة) لضمان الأمان دون التضحية بإمكانية الوصول.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const ans = ref(null);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'ApplyLearned.vue')] = `<template>
  <section id="apply-learned" class="py-20 bg-slate-50">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <div class="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold mb-6 text-sm border border-indigo-200">
        تطبيق عملي
      </div>
      <h2 class="text-3xl font-bold text-slate-800 mb-8">تطبيق ما تعلمته</h2>
      
      <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto mb-10 text-right">
        <h3 class="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">السيناريو:</h3>
        <p class="text-lg text-slate-700 leading-relaxed mb-6 font-medium bg-slate-50 p-4 rounded-xl">
          متجر إلكتروني صغير يريد تأمين تسجيل دخول العملاء والدفع معًا.
        </p>
        <div class="space-y-2 mb-8">
          <p class="font-bold text-indigo-600">المطلوب:</p>
          <ul class="list-decimal list-inside text-slate-700">
            <li>سمِّ تقنيتين للأمان.</li>
            <li>وضح أين تساعد كل تقنية.</li>
            <li>حدد تهديدًا واحدًا قد يظل قائمًا.</li>
          </ul>
        </div>
        
        <div class="text-center">
          <button v-if="!show" @click="show = true" class="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
            اعرض نموذج الإجابة
          </button>
        </div>
      </div>
      
      <div v-if="show" class="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-right max-w-3xl mx-auto animate-fade-in-up">
        <h4 class="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
          <span class="text-emerald-500">✅</span> نموذج الإجابة المقترح
        </h4>
        
        <div class="space-y-6">
          <div class="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
            <strong class="text-indigo-800 text-lg block mb-2">1. التقنيات المقترحة:</strong>
            <p class="text-slate-700">HTTPS (الذي يتضمن تشفير وشهادة رقمية) + المصادقة الثنائية (FA2).</p>
          </div>
          
          <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
            <strong class="text-emerald-800 text-lg block mb-2">2. أين تساعد؟</strong>
            <ul class="space-y-3 mt-3">
              <li class="flex items-start gap-3">
                <span class="bg-emerald-200 text-emerald-800 p-1 rounded mt-0.5">🔒</span>
                <span><strong>HTTPS:</strong> لحماية بيانات بطاقة الائتمان من الاعتراض أثناء الدفع والتأكد من هوية المتجر (أنه ليس موقعًا مزيفًا).</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-emerald-200 text-emerald-800 p-1 rounded mt-0.5">📱</span>
                <span><strong>FA2:</strong> لحماية حسابات العملاء من الاختراق إذا تم كشف أو تخمين كلمة المرور الخاصة بهم.</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-100">
            <strong class="text-rose-800 text-lg block mb-2">3. تهديد قد يظل قائمًا:</strong>
            <p class="text-slate-700">
              أساليب الهندسة الاجتماعية (خداع العميل لإعطاء كود FA2)، أو اختراق قاعدة بيانات المتجر من الداخل (تسريب بيانات محفوظة). الأمان يحمي الاتصال والمصادقة، ولكنه لا يمنع الأخطاء البشرية.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const show = ref(false);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'ExamQuestion.vue')] = `<template>
  <section id="exam-question" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="bg-amber-50 rounded-[2rem] p-8 md:p-12 border-2 border-amber-200 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-[100px] border-b-2 border-l-2 border-amber-200/50"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl md:text-3xl font-bold text-amber-900 mb-8 flex items-center gap-3">
            <span class="text-4xl bg-amber-200 p-2 rounded-2xl">🎯</span> سؤال على نمط الامتحان
          </h2>
          
          <div class="bg-white p-6 rounded-2xl border border-amber-100 mb-8 shadow-inner">
            <p class="text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
              "اشرح لماذا يستخدم TLS آليات المفتاح العام للمصادقة والاتفاق الآمن على مفاتيح الجلسة، ثم يستخدم التشفير المتماثل لحماية بيانات الجلسة."
            </p>
            <div class="mt-4 flex justify-end">
              <span class="inline-block bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-lg text-sm border border-slate-200">
                [ 6 درجات ]
              </span>
            </div>
          </div>
          
          <div class="text-center">
            <button v-if="!show" @click="show = true" class="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto">
              اعرض نموذج الإجابة
            </button>
          </div>
          
          <div v-if="show" class="mt-8 bg-white p-8 rounded-2xl border-2 border-emerald-200 shadow-xl animate-fade-in-up text-right relative">
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-md border-2 border-white">✓</div>
            <h4 class="font-bold text-emerald-800 text-xl mb-6 border-b border-emerald-100 pb-3">عناصر الإجابة النموذجية:</h4>
            
            <ul class="space-y-6 text-slate-700 text-lg">
              <li class="flex gap-4">
                <span class="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 text-sm border border-slate-200">1</span>
                <div>
                  <strong class="text-indigo-700 block mb-1">المفتاح العام (المصادقة والاتفاق):</strong>
                  <p class="leading-relaxed">يُستخدم في بداية الاتصال لأنه يسمح للأطراف بالتحقق من الهوية والاتفاق بأمان على أسرار مشتركة دون الحاجة لمشاركة مفتاح سري مسبقًا. <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">(2 درجة)</span></p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 text-sm border border-slate-200">2</span>
                <div>
                  <strong class="text-indigo-700 block mb-1">التشفير المتماثل (بيانات الجلسة):</strong>
                  <p class="leading-relaxed">بمجرد إنشاء مفتاح الجلسة، يُستخدم التشفير المتماثل لأنه <strong>أكثر كفاءة وأسرع بكثير</strong> في معالجة كميات البيانات الكبيرة المتبادلة أثناء الجلسة. <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">(2 درجة)</span></p>
                </div>
              </li>
              <li class="flex gap-4">
                <span class="bg-slate-100 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1 text-sm border border-slate-200">3</span>
                <div>
                  <strong class="text-indigo-700 block mb-1">الخلاصة (التبرير النهائي):</strong>
                  <p class="leading-relaxed">يجمع TLS بين أمان آليات المفتاح العام في البداية، وكفاءة وسرعة التشفير المتماثل للبيانات، مما يحقق توازنًا مثاليًا بين الأمان والأداء. <span class="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-2 whitespace-nowrap">(2 درجة)</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>import { ref } from 'vue'; const show = ref(false);</script>
<style scoped>
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>`;

files[path.join(componentsDir, 'Summary.vue')] = `<template>
  <section id="summary" class="py-24 bg-slate-900 text-white relative overflow-hidden">
    <!-- Grid Pattern Background -->
    <div class="absolute inset-0" style="background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 30px 30px;"></div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <h2 class="text-4xl font-bold mb-16 text-center">الخلاصة</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors">
          <div class="w-14 h-14 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🔐</div>
          <h3 class="text-xl font-bold mb-3">HTTPS</h3>
          <p class="text-slate-400 leading-relaxed">HTTP عبر اتصال TLS مؤمّن لحماية البيانات والتحقق من الخادم.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-cyan-500 transition-colors">
          <div class="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🔑</div>
          <h3 class="text-xl font-bold mb-3">المفتاح العام</h3>
          <p class="text-slate-400 leading-relaxed">يستخدم في المصادقة والاتفاق الآمن على مفاتيح الجلسة أثناء المصافحة.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors">
          <div class="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center text-3xl mb-6">⚡</div>
          <h3 class="text-xl font-bold mb-3">التشفير المتماثل</h3>
          <p class="text-slate-400 leading-relaxed">يحمي بيانات الجلسة الضخمة بسرعة وكفاءة عالية.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-colors">
          <div class="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center text-3xl mb-6">📜</div>
          <h3 class="text-xl font-bold mb-3">الشهادة الرقمية</h3>
          <p class="text-slate-400 leading-relaxed">تساعد المتصفح على التحقق من هوية الخادم واسم النطاق الخاص به.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors">
          <div class="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center text-3xl mb-6">✍️</div>
          <h3 class="text-xl font-bold mb-3">التوقيع الرقمي</h3>
          <p class="text-slate-400 leading-relaxed">يتحقق من سلامة البيانات وهوية الموقع ويدعم مبدأ عدم التنصل.</p>
        </div>
        
        <div class="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-rose-500 transition-colors">
          <div class="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🛡️</div>
          <h3 class="text-xl font-bold mb-3">المصادقة الثنائية (FA2)</h3>
          <p class="text-slate-400 leading-relaxed">تستخدم عاملين مستقلين من فئتين مختلفتين لتقليل الدخول غير المصرح به.</p>
        </div>
      </div>
      
      <div class="text-center w-full">
        <div class="bg-indigo-900/40 backdrop-blur-md border border-indigo-500/30 p-8 rounded-3xl inline-block w-full max-w-4xl shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
          <p class="text-2xl font-bold text-indigo-100 leading-relaxed">
            "الأمان الحقيقي لا يأتي من تقنية واحدة،<br/> بل من تكديس عدة طبقات من الحماية."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>`;

files[path.join(componentsDir, 'NextLesson.vue')] = `<template>
  <section id="next-lesson" class="py-24 bg-white border-t border-slate-100">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="inline-block px-5 py-2 rounded-full bg-slate-100 text-slate-600 font-bold mb-8 text-sm border border-slate-200 uppercase tracking-wider">
        الدرس القادم
      </div>
      
      <h2 class="text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">تصميم أمان الشبكات</h2>
      
      <p class="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        بعد ما عرفنا إزاي نحمي الاتصال والحسابات، هنشوف إزاي نصمم شبكة كاملة بطريقة آمنة.
      </p>
      
      <NuxtLink to="/lesson-08" class="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-2xl transition-all shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 group">
        <span>الدرس القادم</span>
        <span class="text-2xl group-hover:-translate-x-2 transition-transform">&larr;</span>
      </NuxtLink>
    </div>
  </section>
</template>`;


// Write files
Object.entries(files).forEach(([filepath, content]) => {
  fs.writeFileSync(filepath, content.trim() + '\n', 'utf8');
  console.log('Created:', filepath);
});
