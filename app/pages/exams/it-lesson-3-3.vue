<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦3-3⁩: أساسيات تقنية الواجهة الأمامية"
    description="امتحان الدرس ⁦3-3⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🎨"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-3-2', label: 'امتحان الدرس ⁦3-2⁩' },
      { to: '/exams/it-unit-3', label: 'امتحان الوحدة الثالثة' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-3-3';

useHead({
  title: 'امتحان الدرس ⁦3-3⁩: أساسيات تقنية الواجهة الأمامية | البرمجة والذكاء الاصطناعي'
});
</script>
