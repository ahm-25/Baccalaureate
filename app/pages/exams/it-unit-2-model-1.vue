<template>
  <AssessmentsLessonView
    title="امتحان الوحدة الثانية - النموذج الأول"
    description="نموذج امتحان على الوحدة الثانية (تقنيات التشفير والمصادقة، تصميم أمان الشبكات، الاستجابة للحوادث وإدارة المخاطر) بأسئلة من التقييمات، محلول بالكامل. الدرجة الكلية: 50 درجة. الزمن: ساعة واحدة."
    icon="📝"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="unit2Models[0]"
    :links="[
      { to: '/exams/it-unit-2', label: 'الاختبار الشامل على الوحدة الثانية' },
      { to: '/exams/it-unit-2-model-2', label: 'النموذج ⁦2⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { unit2Models } from '~/data/lessons/second-baccalaureate/it/exams/unit-2-models';

useHead({
  title: 'امتحان الوحدة الثانية - النموذج الأول | البرمجة والذكاء الاصطناعي'
});
</script>
