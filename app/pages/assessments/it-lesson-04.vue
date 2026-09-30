<template>
  <AssessmentsLessonView
    title="الدرس الرابع: القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي"
    description="أسئلة الدرس الرابع من كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: التحيز الخوارزمي، الخصوصية، الذكاء الاصطناعي القابل للتفسير، المسؤولية والمساءلة، والمبادئ الأربعة لأخلاقيات الذكاء الاصطناعي."
    icon="⚖️"
    :blocks="assessmentBlocks"
    :links="[{ to: '/assessments/it-lesson-03', label: 'تقييمات الدرس الثالث' }]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/lesson-04';

useHead({
  title: 'الدرس الرابع - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
