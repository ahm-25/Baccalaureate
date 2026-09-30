<template>
  <AssessmentsLessonView
    title="الدرس الثالث: الذكاء الاصطناعي في الحياة اليومية والصناعة"
    description="أسئلة الدرس الثالث من كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: خدمات الذكاء الاصطناعي اليومية، استخدامه في الصناعة، ما يبرع فيه واحتياطات الاستخدام."
    icon="🏭"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/assessments/it-lesson-02', label: 'تقييمات الدرس الثاني' },
      { to: '/assessments/it-lesson-04', label: 'تقييمات الدرس الرابع' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/lesson-03';

useHead({
  title: 'الدرس الثالث - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
