<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج الخامس"
    description="نموذج امتحان على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر) بأسئلة من التقييمات، محلول بالكامل. الدرجة الكلية: 100 درجة."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2Models[4]"
    :links="[
      { to: '/exams/it-unit-2-model-4', label: 'النموذج ⁦4⁩' },
      { to: '/exams', label: 'كل الامتحانات' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2Models } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج الخامس | البرمجة والذكاء الاصطناعي'
});
</script>
