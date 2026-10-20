<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦3-2⁩: طرق اتصال تطبيقات الويب"
    description="امتحان الدرس ⁦3-2⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🔁"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-3-1', label: 'امتحان الدرس ⁦3-1⁩' },
      { to: '/exams/it-lesson-3-3', label: 'امتحان الدرس ⁦3-3⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-3-2';

useHead({
  title: 'امتحان الدرس ⁦3-2⁩: طرق اتصال تطبيقات الويب | البرمجة والذكاء الاصطناعي'
});
</script>
