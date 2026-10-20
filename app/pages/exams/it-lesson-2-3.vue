<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦2-3⁩: الاستجابة للحوادث وإدارة المخاطر"
    description="امتحان الدرس ⁦2-3⁩ في مذكرة الوحدة الثانية محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🚨"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-2-2', label: 'امتحان الدرس ⁦2-2⁩' },
      { to: '/exams/it-unit-2', label: 'امتحان الوحدة الثانية' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-2-3';

useHead({
  title: 'امتحان الدرس ⁦2-3⁩: الاستجابة للحوادث وإدارة المخاطر | البرمجة والذكاء الاصطناعي'
});
</script>
