<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦4-1⁩: أنواع الوسائط وخصائصها"
    description="امتحان الدرس ⁦4-1⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="📺"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-unit-3', label: 'امتحان الوحدة الثالثة' },
      { to: '/exams/it-lesson-4-2', label: 'امتحان الدرس ⁦4-2⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-4-1';

useHead({
  title: 'امتحان الدرس ⁦4-1⁩: أنواع الوسائط وخصائصها | البرمجة والذكاء الاصطناعي'
});
</script>
