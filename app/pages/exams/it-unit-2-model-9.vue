<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج التاسع"
    description="نموذج امتحان بأسئلة جديدة على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر)، محلول بالكامل. الدرجة الكلية: 100 درجة."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2ExtraModels[3]"
    :links="[
      { to: '/exams/it-unit-2-model-8', label: 'النموذج ⁦8⁩' },
      { to: '/exams/it-unit-2-model-10', label: 'النموذج ⁦10⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2ExtraModels } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-extra-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج التاسع | البرمجة والذكاء الاصطناعي'
});
</script>
