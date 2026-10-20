<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦4-2⁩: تصميم المعلومات وتجربة المستخدم"
    description="امتحان الدرس ⁦4-2⁩ في مذكرة الوحدتين الثالثة والرابعة محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🧭"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-4-1', label: 'امتحان الدرس ⁦4-1⁩' },
      { to: '/exams/it-lesson-4-3', label: 'امتحان الدرس ⁦4-3⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-4-2';

useHead({
  title: 'امتحان الدرس ⁦4-2⁩: تصميم المعلومات وتجربة المستخدم | البرمجة والذكاء الاصطناعي'
});
</script>
