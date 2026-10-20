<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦3-1⁩: البنية العامة لتطبيقات الويب"
    description="امتحان الدرس ⁦3-1⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🧱"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-unit-2', label: 'امتحان الوحدة الثانية' },
      { to: '/exams/it-lesson-3-2', label: 'امتحان الدرس ⁦3-2⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-3-1';

useHead({
  title: 'امتحان الدرس ⁦3-1⁩: البنية العامة لتطبيقات الويب | البرمجة والذكاء الاصطناعي'
});
</script>
