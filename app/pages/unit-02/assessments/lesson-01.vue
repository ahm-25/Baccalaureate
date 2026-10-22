<template>
  <AssessmentsLessonView
    title="الوحدة الثانية - الدرس الأول: تقنيات التشفير والمصادقة"
    description="أسئلة الدرس الأول من الوحدة الثانية في كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: HTTPS، التشفير المتماثل وتشفير المفتاح العام، الشهادات الرقمية والتوقيع الرقمي، والمصادقة الثنائية ومتعددة العوامل."
    icon="🔐"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-01/assessments/lesson-04', label: 'تقييمات الوحدة الأولى' },
      { to: '/unit-02/assessments/lesson-02', label: 'تقييمات الدرس الثاني' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-02/lesson-01';

useHead({
  title: 'الوحدة الثانية - الدرس الأول - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
