<template>
  <AssessmentsLessonView
    title="الوحدة الثالثة - الدرس الثاني: طرق اتصال تطبيقات الويب"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦3-2⁩ محلولة بالكامل"
    icon="🔁"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-03/assessments/lesson-01', label: 'تقييمات الدرس الأول' },
      { to: '/unit-03/assessments/lesson-03', label: 'تقييمات الدرس الثالث' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-03/lesson-02';

useHead({ title: 'الوحدة الثالثة - الدرس الثاني - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
