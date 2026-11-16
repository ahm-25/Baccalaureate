<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج العاشر"
    description="نموذج امتحان بأسئلة جديدة على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر)، محلول بالكامل. الدرجة الكلية: 100 درجة."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2ExtraModels[4]"
    :links="[
      { to: '/exams/it-unit-2-model-9', label: 'النموذج ⁦9⁩' },
      { to: '/exams', label: 'كل الامتحانات' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2ExtraModels } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-extra-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج العاشر | البرمجة والذكاء الاصطناعي'
});
</script>
