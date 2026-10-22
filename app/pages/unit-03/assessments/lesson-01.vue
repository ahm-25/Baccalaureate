<template>
  <AssessmentsLessonView
    title="الوحدة الثالثة - الدرس الأول: البنية العامة لتطبيقات الويب"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦3-1⁩ محلولة بالكامل"
    icon="🧱"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-02/assessments/lesson-03', label: 'تقييمات الوحدة الثانية - الدرس الثالث' },
      { to: '/unit-03/assessments/lesson-02', label: 'تقييمات الدرس الثاني' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-03/lesson-01';

useHead({ title: 'الوحدة الثالثة - الدرس الأول - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
