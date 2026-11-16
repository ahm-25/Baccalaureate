<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج الثاني"
    description="نموذج امتحان على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر) بأسئلة من التقييمات، محلول بالكامل."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2Models[1]"
    :links="[
      { to: '/exams/it-unit-2-model-1', label: 'النموذج ⁦1⁩' },
      { to: '/exams/it-unit-2-model-3', label: 'النموذج ⁦3⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2Models } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج الثاني | البرمجة والذكاء الاصطناعي'
});
</script>
