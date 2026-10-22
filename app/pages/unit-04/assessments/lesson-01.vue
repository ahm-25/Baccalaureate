<template>
  <AssessmentsLessonView
    title="الوحدة الرابعة - الدرس الأول: أنواع الوسائط وخصائصها"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦4-1⁩ محلولة بالكامل"
    icon="📺"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-03/assessments/lesson-03', label: 'تقييمات الوحدة الثالثة - الدرس الثالث' },
      { to: '/unit-04/assessments/lesson-02', label: 'تقييمات الدرس الثاني' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-04/lesson-01';

useHead({ title: 'الوحدة الرابعة - الدرس الأول - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
