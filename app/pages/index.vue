<template>
  <div class="min-h-screen bg-background py-32 px-4">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-primary to-accent text-white text-4xl shadow-xl shadow-primary/20 mb-6">
        💻
      </div>
      <span class="block text-sm font-black text-primary mb-3">سلسلة «عبد الناصر في البرمجة»</span>
      <h1 class="text-4xl md:text-5xl font-black text-maintext mb-4 leading-tight">البرمجة والذكاء الاصطناعي</h1>
      <p class="text-lg text-mutedtext font-bold max-w-2xl mx-auto leading-relaxed">
        الصف الثاني البكالوريا — الدروس بترتيب الكتاب، مع التقييمات والامتحانات المحلولة
      </p>
    </div>

    <!-- Units -->
    <div class="max-w-5xl mx-auto space-y-10">
      <div v-for="unit in units" :key="unit.to">
        <NuxtLink
          :to="unit.to"
          class="group flex items-center gap-3 mb-5"
        >
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-lg font-black shadow-lg shadow-primary/20">{{ unit.number }}</div>
          <h2 class="text-2xl font-black text-maintext group-hover:text-primary transition-colors">{{ unit.title }}</h2>
          <span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
        </NuxtLink>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLink
            v-for="lesson in unit.lessons"
            :key="lesson.to"
            :to="lesson.to"
            class="group glass-panel p-5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ lesson.icon }}</span>
              <div class="flex-1 min-w-0">
                <span class="text-sm font-black text-primary">{{ lesson.label }}</span>
                <h3 class="text-base font-black text-maintext group-hover:text-primary transition-colors">{{ lesson.title }}</h3>
              </div>
              <span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Assessments & exams -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <NuxtLink
          v-for="item in extras"
          :key="item.to"
          :to="item.to"
          class="group glass-panel p-6 flex items-center gap-4 border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
        >
          <span class="text-3xl">{{ item.icon }}</span>
          <div class="flex-1 min-w-0">
            <h2 class="text-lg font-black text-maintext group-hover:text-accent transition-colors">{{ item.title }}</h2>
            <p class="text-sm text-mutedtext font-semibold">{{ item.description }}</p>
          </div>
          <span class="text-accent">&larr;</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLesson } from '~/composables/useLesson'

// ⁦…⁩ keep lesson numbers such as 1-2 from flipping to 2-1 inside Arabic text
const units = [
  {
    number: '١',
    to: '/unit-01',
    title: 'الوحدة الأولى: تكنولوجيا المعلومات والمجتمع',
    lessons: [
      { to: '/unit-01/lesson-01', icon: '🚀', label: 'الدرس ⁦1-1⁩', title: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي' },
      { to: '/unit-01/lesson-02', icon: '🤖', label: 'الدرس ⁦1-2⁩', title: 'كيف يعمل الذكاء الاصطناعي' },
      { to: '/unit-01/lesson-03', icon: '🏭', label: 'الدرس ⁦1-3⁩', title: 'الذكاء الاصطناعي في الحياة اليومية والصناعة' },
      { to: '/unit-01/lesson-04', icon: '⚖️', label: 'الدرس ⁦1-4⁩', title: 'القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي' },
    ],
  },
  {
    number: '٢',
    to: '/unit-02',
    title: 'الوحدة الثانية: الأمن السيبراني',
    lessons: [
      { to: '/unit-02/lesson-01', icon: '🔐', label: 'الدرس ⁦2-1⁩', title: 'تقنيات التشفير والمصادقة' },
      { to: '/unit-02/lesson-02', icon: '🧱', label: 'الدرس ⁦2-2⁩', title: 'تصميم أمان الشبكات' },
      { to: '/unit-02/lesson-03', icon: '🚨', label: 'الدرس ⁦2-3⁩', title: 'الاستجابة للحوادث وإدارة المخاطر' },
    ],
  },
  {
    number: '٣',
    to: '/unit-03',
    title: 'الوحدة الثالثة: تطبيقات الويب',
    lessons: [
      { to: '/unit-03/lesson-01', icon: '🧱', label: 'الدرس ⁦3-1⁩', title: 'البنية العامة لتطبيقات الويب' },
      { to: '/unit-03/lesson-02', icon: '🔁', label: 'الدرس ⁦3-2⁩', title: 'طرق اتصال تطبيقات الويب' },
      { to: '/unit-03/lesson-03', icon: '🎨', label: 'الدرس ⁦3-3⁩', title: 'أساسيات تقنية الواجهة الأمامية' },
    ],
  },
  {
    number: 'JS',
    to: '/second-baccalaureate/javascript/lesson-01',
    title: 'دروس JavaScript',
    lessons: [
      { to: '/second-baccalaureate/javascript/lesson-01', icon: '🟨', label: 'الدرس الأول', title: 'أساسيات البرمجة باستخدام JavaScript' },
      { to: '/second-baccalaureate/javascript/lesson-02', icon: '📦', label: 'الدرس الثاني', title: 'المتغيرات وأنواع البيانات' },
      { to: '/second-baccalaureate/javascript/lesson-03', icon: '🔀', label: 'الدرس الثالث', title: 'الشروط واتخاذ القرارات' },
    ],
  },
]

const extras = [
  { to: '/assessments', icon: '📝', title: 'كتاب الأداءات والتقييمات', description: 'أسئلة التقييمات محلولة بالكامل' },
  { to: '/exams', icon: '📄', title: 'امتحانات المذكرات', description: 'امتحانات كل درس والاختبارات الشاملة مع الحلول' },
]

// The lesson bar keeps the last visited lesson's info unless this page sets its own
const { setLessonInfo, setSections } = useLesson()
setLessonInfo('تانية بكالوريا', 'الصفحة الرئيسية')
setSections([])

useHead({
  title: 'البرمجة والذكاء الاصطناعي | الصف الثاني البكالوريا'
})
</script>
