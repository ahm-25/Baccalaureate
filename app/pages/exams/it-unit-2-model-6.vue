<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج السادس"
    description="نموذج امتحان بأسئلة جديدة على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر)، محلول بالكامل. الدرجة الكلية: 100 درجة."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2ExtraModels[0]"
    :links="[
      { to: '/exams/it-unit-2-model-5', label: 'النموذج ⁦5⁩' },
      { to: '/exams/it-unit-2-model-7', label: 'النموذج ⁦7⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2ExtraModels } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-extra-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج السادس | البرمجة والذكاء الاصطناعي'
});
</script>
