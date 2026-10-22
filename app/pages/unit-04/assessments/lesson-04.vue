<template>
  <AssessmentsLessonView
    title="الوحدة الرابعة - الدرس الرابع: عملية التحسين التكراري للمواقع الإلكترونية"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦4-4⁩ محلولة بالكامل"
    icon="🔄"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-04/assessments/lesson-03', label: 'تقييمات الدرس الثالث' },
      { to: '/', label: 'الصفحة الرئيسية' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-04/lesson-04';

useHead({ title: 'الوحدة الرابعة - الدرس الرابع - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
