<template>
  <AssessmentsLessonView
    title="امتحان الدرس ⁦2-2⁩: تصميم أمان الشبكات"
    description="امتحان الدرس ⁦2-2⁩ في مذكرة الوحدة الثانية محلولًا بالكامل: اختيار من متعدد، صح وخطأ، أكمل، وأسئلة مقالية مع الإجابات النموذجية."
    icon="🛡️"
    badge="امتحانات مذكرة «عبد الناصر في البرمجة» - الصف الثاني البكالوريا"
    :show-final-quiz="false"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/exams/it-lesson-2-1', label: 'امتحان الدرس ⁦2-1⁩' },
      { to: '/exams/it-lesson-2-3', label: 'امتحان الدرس ⁦2-3⁩' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/exams/lesson-2-2';

useHead({
  title: 'امتحان الدرس ⁦2-2⁩: تصميم أمان الشبكات | البرمجة والذكاء الاصطناعي'
});
</script>
