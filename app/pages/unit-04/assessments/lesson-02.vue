<template>
  <AssessmentsLessonView
    title="الوحدة الرابعة - الدرس الثاني: تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية"
    description="المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس ⁦4-2⁩ محلولة بالكامل"
    icon="🧭"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/unit-04/assessments/lesson-01', label: 'تقييمات الدرس الأول' },
      { to: '/unit-04/assessments/lesson-03', label: 'تقييمات الدرس الثالث' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/unit-04/lesson-02';

useHead({ title: 'الوحدة الرابعة - الدرس الثاني - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات' });
</script>
