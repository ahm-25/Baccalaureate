<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج الرابع"
    description="نموذج امتحان على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر) بأسئلة من التقييمات، محلول بالكامل."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2Models[3]"
    :links="[
      { to: '/exams/it-unit-2-model-3', label: 'النموذج ⁦3⁩' },
      { to: '/exams/it-unit-2-model-5', label: 'النموذج ⁦5⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2Models } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج الرابع | البرمجة والذكاء الاصطناعي'
});
</script>
