<template>
  <AssessmentsLessonView
    title="الوحدة الرابعة - الدرس الثالث: طرق تقييم المواقع الإلكترونية"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦4-3⁩ محلولة بالكامل"
    icon="📊"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-04/assessments/lesson-02', label: 'تقييمات الدرس الثاني' },
      { to: '/unit-04/assessments/lesson-04', label: 'تقييمات الدرس الرابع' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-04/lesson-03';

useHead({ title: 'الوحدة الرابعة - الدرس الثالث - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
