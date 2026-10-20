<template>
  <AssessmentsLessonView
    title="الاختبار الشامل على الوحدة الثانية: تقنيات التشفير والمصادقة"
    description="الاختبار الشامل في مذكرة الوحدة الثانية محلولًا بالكامل: اختيار من متعدد، تصحيح ما تحته خط، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🏆"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-2-3', label: 'امتحان الدرس ⁦2-3⁩' },
      { to: '/exams/it-lesson-3-1', label: 'امتحان الدرس ⁦3-1⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/unit-2';

useHead({
  title: 'الاختبار الشامل على الوحدة الثانية: تقنيات التشفير والمصادقة | البرمجة والذكاء الاصطناعي'
});
</script>
