<template>
  <AssessmentsLessonView
    title="الوحدة الثانية - الدرس الثالث: الاستجابة للحوادث وإدارة المخاطر"
    description="أسئلة الدرس الثالث من الوحدة الثانية في كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: الحادث الأمني، المراحل الست للاستجابة للحوادث، ومصفوفة تقييم المخاطر (الخطر = التأثير × الاحتمالية)."
    icon="🚨"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-02/assessments/lesson-02', label: 'تقييمات الدرس الثاني' },
      { to: '/unit-03/assessments/lesson-01', label: 'تقييمات الوحدة الثالثة' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-02/lesson-03';

useHead({
  title: 'الوحدة الثانية - الدرس الثالث - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
