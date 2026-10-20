<template>
  <AssessmentsLessonView
    title="الاختبار الشامل على الوحدة الثالثة: تطبيقات الويب"
    description="الاختبار الشامل في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🏆"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-3-3', label: 'امتحان الدرس ⁦3-3⁩' },
      { to: '/exams/it-lesson-4-1', label: 'امتحان الدرس ⁦4-1⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/unit-3';

useHead({
  title: 'الاختبار الشامل على الوحدة الثالثة: تطبيقات الويب | البرمجة والذكاء الاصطناعي'
});
</script>
