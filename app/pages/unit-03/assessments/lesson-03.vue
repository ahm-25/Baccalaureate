<template>
  <AssessmentsLessonView
    title="الوحدة الثالثة - الدرس الثالث: أساسيات تقنية الواجهة الأمامية"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦3-3⁩ محلولة بالكامل"
    icon="🎨"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-03/assessments/lesson-02', label: 'تقييمات الدرس الثاني' },
      { to: '/unit-04/assessments/lesson-01', label: 'تقييمات الوحدة الرابعة - الدرس الأول' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-03/lesson-03';

useHead({ title: 'الوحدة الثالثة - الدرس الثالث - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
