<template>
  <div class="min-h-screen bg-background py-32 px-4">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-accent to-primary text-white text-4xl shadow-xl shadow-accent/20 mb-6">
        📄
      </div>
      <h1 class="text-4xl md:text-5xl font-black text-maintext mb-4">امتحانات مذكرة «عبد الناصر في البرمجة»</h1>
      <p class="text-lg text-mutedtext font-bold max-w-2xl mx-auto leading-relaxed">
        جميع الامتحانات محلولة بالكامل — اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية
      </p>
    </div>

    <!-- Unit 2 -->
    <div class="max-w-5xl mx-auto mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-lg font-black shadow-lg shadow-primary/20">٢</div>
        <h2 class="text-2xl font-black text-maintext">الوحدة الثانية: تقنيات التشفير والمصادقة</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="item in unit2Lessons"
          :key="item.to"
          :to="item.to"
          class="group glass-panel p-5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ item.icon }}</span>
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-black text-maintext group-hover:text-primary transition-colors">{{ item.title }}</h3>
            </div>
            <span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
          </div>
        </NuxtLink>
      </div>
      <!-- Unit Exam -->
      <NuxtLink
        to="/exams/it-unit-2"
        class="group mt-4 glass-panel p-5 flex items-center gap-3 border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
      >
        <span class="text-2xl">🏆</span>
        <div class="flex-1">
          <h3 class="text-base font-black text-primary">الاختبار الشامل على الوحدة الثانية</h3>
        </div>
        <span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
      </NuxtLink>
    </div>

    <!-- Unit 3 -->
    <div class="max-w-5xl mx-auto mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-lg font-black shadow-lg shadow-primary/20">٣</div>
        <h2 class="text-2xl font-black text-maintext">الوحدة الثالثة: تطبيقات الويب</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="item in unit3Lessons"
          :key="item.to"
          :to="item.to"
          class="group glass-panel p-5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ item.icon }}</span>
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-black text-maintext group-hover:text-accent transition-colors">{{ item.title }}</h3>
            </div>
            <span class="text-accent opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink
        to="/exams/it-unit-3"
        class="group mt-4 glass-panel p-5 flex items-center gap-3 border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
      >
        <span class="text-2xl">🏆</span>
        <div class="flex-1">
          <h3 class="text-base font-black text-accent">الاختبار الشامل على الوحدة الثالثة</h3>
        </div>
        <span class="text-accent opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
      </NuxtLink>
    </div>

    <!-- Unit 4 -->
    <div class="max-w-5xl mx-auto mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white text-lg font-black shadow-lg shadow-accent/20">٤</div>
        <h2 class="text-2xl font-black text-maintext">الوحدة الرابعة: تصميم المواقع الإلكترونية</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="item in unit4Lessons"
          :key="item.to"
          :to="item.to"
          class="group glass-panel p-5 hover:shadow-xl hover:shadow-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">{{ item.icon }}</span>
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-black text-maintext group-hover:text-secondary transition-colors">{{ item.title }}</h3>
            </div>
            <span class="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink
        to="/exams/it-unit-4"
        class="group mt-4 glass-panel p-5 flex items-center gap-3 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
      >
        <span class="text-2xl">🏆</span>
        <div class="flex-1">
          <h3 class="text-base font-black text-secondary">الاختبار الشامل على الوحدة الرابعة</h3>
        </div>
        <span class="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">&larr;</span>
      </NuxtLink>
    </div>

    <!-- Back to Home -->
    <div class="max-w-5xl mx-auto mt-12 text-center">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-mutedtext hover:text-primary font-bold transition-colors">
        <span>&rarr;</span>
        <span>العودة للرئيسية</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'الامتحانات | مذكرة عبد الناصر في البرمجة',
  meta: [
    { name: 'description', content: 'جميع امتحانات مذكرة عبد الناصر في البرمجة محلولة بالكامل للصف الثاني البكالوريا' }
  ]
})

const unit2Lessons = [
  { to: '/exams/it-lesson-2-1', icon: '🔐', title: 'الدرس ⁦2-1⁩: تقنيات التشفير والمصادقة' },
  { to: '/exams/it-lesson-2-2', icon: '🛡️', title: 'الدرس ⁦2-2⁩: تصميم أمان الشبكات' },
  { to: '/exams/it-lesson-2-3', icon: '🚨', title: 'الدرس ⁦2-3⁩: الاستجابة للحوادث وإدارة المخاطر' },
]

const unit3Lessons = [
  { to: '/exams/it-lesson-3-1', icon: '🌐', title: 'الدرس ⁦3-1⁩: البنية العامة لتطبيقات الويب' },
  { to: '/exams/it-lesson-3-2', icon: '🔗', title: 'الدرس ⁦3-2⁩: طرق اتصال تطبيقات الويب' },
  { to: '/exams/it-lesson-3-3', icon: '💻', title: 'الدرس ⁦3-3⁩: أساسيات تقنية الواجهة الأمامية' },
]

const unit4Lessons = [
  { to: '/exams/it-lesson-4-1', icon: '🖼️', title: 'الدرس ⁦4-1⁩: أنواع الوسائط وخصائصها' },
  { to: '/exams/it-lesson-4-2', icon: '🎨', title: 'الدرس ⁦4-2⁩: تصميم المعلومات وتجربة المستخدم' },
  { to: '/exams/it-lesson-4-3', icon: '📊', title: 'الدرس ⁦4-3⁩: طرق تقييم المواقع الإلكترونية' },
  { to: '/exams/it-lesson-4-4', icon: '🔄', title: 'الدرس ⁦4-4⁩: عملية التحسين التكراري للمواقع' },
]
</script>
