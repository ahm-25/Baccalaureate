<template>
  <div class="min-h-screen bg-background py-32 px-4">
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-primary to-accent text-white text-4xl shadow-xl shadow-primary/20 mb-6">
        💡
      </div>
      <h1 class="text-4xl md:text-5xl font-black text-maintext mb-4">الوحدة الأولى: تكنولوجيا المعلومات والمجتمع</h1>
      <p class="text-lg text-mutedtext font-bold max-w-2xl mx-auto leading-relaxed">
        دروس الوحدة الأولى بترتيب كتاب البرمجة والذكاء الاصطناعي — الصف الثاني البكالوريا
      </p>
    </div>

    <div class="max-w-4xl mx-auto space-y-4">
      <NuxtLink
        v-for="item in lessons"
        :key="item.to"
        :to="item.to"
        class="group glass-panel p-5 flex items-center gap-4 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        :class="{ 'mr-8 md:mr-14': item.sub }"
      >
        <span class="text-3xl">{{ item.icon }}</span>
        <div class="flex-1 min-w-0">
          <span class="text-sm font-black text-primary">{{ item.label }}</span>
          <h2 class="text-lg font-black text-maintext group-hover:text-primary transition-colors">{{ item.title }}</h2>
        </div>
        <span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
      </NuxtLink>

      <NuxtLink
        to="/unit-02"
        class="group mt-8 glass-panel p-5 flex items-center gap-4 border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <span class="text-3xl">🛡️</span>
        <h2 class="flex-1 text-lg font-black text-accent">الوحدة الثانية: الأمن السيبراني</h2>
        <span class="text-accent">&larr;</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// ⁦…⁩ keep lesson numbers such as 1-2 from flipping to 2-1 inside Arabic text
const lessons = [
  { to: '/unit-01/lesson-01', icon: '🚀', label: 'الدرس ⁦1-1⁩', title: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي' },
  { to: '/unit-01/lesson-01-questions', icon: '📝', label: 'أسئلة الدرس ⁦1-1⁩', title: 'مراجعة تفاعلية وأسئلة وتدريبات', sub: true },
  { to: '/unit-01/lesson-02', icon: '🤖', label: 'الدرس ⁦1-2⁩', title: 'كيف يعمل الذكاء الاصطناعي' },
  { to: '/unit-01/lesson-02/explanation', icon: '🧭', label: 'شرح الدرس ⁦1-2⁩', title: 'شرح المفاهيم خطوة بخطوة', sub: true },
  { to: '/unit-01/lesson-03', icon: '🏭', label: 'الدرس ⁦1-3⁩', title: 'الذكاء الاصطناعي في الحياة اليومية والصناعة' },
  { to: '/unit-01/lesson-04', icon: '⚖️', label: 'الدرس ⁦1-4⁩', title: 'القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي' },
];

// The lesson bar keeps the last visited lesson's info unless this page sets its own
const { setLessonInfo, setSections } = useLesson();
setLessonInfo('تانية بكالوريا', 'الوحدة الأولى: تكنولوجيا المعلومات والمجتمع');
setSections([]);

useHead({
  title: 'الوحدة الأولى: تكنولوجيا المعلومات والمجتمع | البرمجة والذكاء الاصطناعي'
});
</script>
