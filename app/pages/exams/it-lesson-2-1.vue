<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦2-1⁩: تقنيات التشفير والمصادقة"
    description="امتحان الدرس ⁦2-1⁩ في مذكرة الوحدة الثانية محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🔐"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/assessments/it-lesson-04', label: 'تقييمات الدرس الرابع' },
      { to: '/exams/it-lesson-2-2', label: 'امتحان الدرس ⁦2-2⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-2-1';

useHead({
  title: 'امتحان الدرس ⁦2-1⁩: تقنيات التشفير والمصادقة | البرمجة والذكاء الاصطناعي'
});
</script>
