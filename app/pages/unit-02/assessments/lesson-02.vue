<template>
  <AssessmentsLessonView
    title="الوحدة الثانية - الدرس الثاني: تصميم أمان الشبكات"
    description="أسئلة الدرس الثاني من الوحدة الثانية في كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: الدفاع في العمق، جدار الحماية، الشبكة الافتراضية الخاصة (VPN)، المنطقة المعزولة (DMZ)، ونهج انعدام الثقة."
    icon="🧱"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-02/assessments/lesson-01', label: 'تقييمات الدرس الأول' },
      { to: '/unit-02/assessments/lesson-03', label: 'تقييمات الدرس الثالث' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-02/lesson-02';

useHead({
  title: 'الوحدة الثانية - الدرس الثاني - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
