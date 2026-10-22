<template>
  <AssessmentsLessonView
    title="الدرس الثاني: كيف يعمل الذكاء الاصطناعي"
    description="أسئلة الدرس الثاني من كتاب الأداءات والتقييمات محلولة وفق كتاب المدرسة: الذكاء الاصطناعي، التعلم الآلي، التعلم العميق، الشبكات العصبية، الذكاء الاصطناعي التوليدي والهلوسة."
    icon="🤖"
    :blocks="assessmentBlocks"
    :links="[
      { to: '/assessments/it-lesson-01', label: 'تقييمات الدرس الأول' },
      { to: '/assessments/it-lesson-03', label: 'تقييمات الدرس الثالث' }
    ]"
  />
</template>

<script setup lang="ts">
import { assessmentBlocks } from '~/data/lessons/second-baccalaureate/it/assessments/lesson-02';

useHead({
  title: 'الدرس الثاني - كتاب الأداءات والتقييمات | تكنولوجيا المعلومات'
});
</script>
