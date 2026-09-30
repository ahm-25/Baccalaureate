<template>
  <AssessmentsLessonView
    title="الدرس الأول: تطور تكنولوجيا المعلومات والتحول الاجتماعي"
    description="أسئلة الدرس الأول من كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: المهام الأدائية، الأداءات المنزلية، والتقييمات الأسبوعية."
    icon="📝"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/lesson-01', label: 'أسئلة الدرس الأول' },
      { to: '/assessments/it-lesson-02', label: 'تقييمات الدرس الثاني' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/lesson-01';

useHead({
  title: 'الدرس الأول - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
