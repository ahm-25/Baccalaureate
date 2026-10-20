<template>
  <AssessmentsLessonView
    title="الاختبار الشامل على الوحدة الرابعة: تصميم المواقع الإلكترونية"
    description="الاختبار الشامل في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🏆"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-4-4', label: 'امتحان الدرس ⁦4-4⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/unit-4';

useHead({
  title: 'الاختبار الشامل على الوحدة الرابعة: تصميم المواقع الإلكترونية | البرمجة والذكاء الاصطناعي'
});
</script>
