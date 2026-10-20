<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦4-4⁩: عملية التحسين التكراري للمواقع الإلكترونية"
    description="امتحان الدرس ⁦4-4⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🔄"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-4-3', label: 'امتحان الدرس ⁦4-3⁩' },
      { to: '/exams/it-unit-4', label: 'امتحان الوحدة الرابعة' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-4-4';

useHead({
  title: 'امتحان الدرس ⁦4-4⁩: عملية التحسين التكراري للمواقع الإلكترونية | البرمجة والذكاء الاصطناعي'
});
</script>
