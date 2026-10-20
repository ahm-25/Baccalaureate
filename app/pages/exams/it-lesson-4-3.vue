<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦4-3⁩: طرق تقييم المواقع الإلكترونية"
    description="امتحان الدرس ⁦4-3⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="📊"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-4-2', label: 'امتحان الدرس ⁦4-2⁩' },
      { to: '/exams/it-lesson-4-4', label: 'امتحان الدرس ⁦4-4⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-4-3';

useHead({
  title: 'امتحان الدرس ⁦4-3⁩: طرق تقييم المواقع الإلكترونية | البرمجة والذكاء الاصطناعي'
});
</script>
