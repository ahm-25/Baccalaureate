const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app/components/ai/lesson-06');
const dataDir = path.join(__dirname, 'app/data/lessons/second-baccalaureate/ai');
const pagesDir = path.join(__dirname, 'app/pages');

// Create directories
fs.mkdirSync(componentsDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(pagesDir, { recursive: true });

const components = [
  'Hero.vue', 'Objectives.vue', 'LessonMap.vue', 'OpeningQuestion.vue',
  'AlgorithmicBias.vue', 'StopThink.vue', 'TrainingData.vue', 'Privacy.vue',
  'Xai.vue', 'BlackBox.vue', 'Principles.vue', 'Responsibility.vue',
  'CaseStudy.vue', 'SolvedExample.vue', 'ExamQuestion.vue', 'ThinkEngineer.vue',
  'ApplyLearned.vue', 'Summary.vue', 'InteractiveReflect.vue'
];

components.forEach(comp => {
  const content = `<template>
  <section class="mb-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ${comp.replace('.vue', '')} Content -->
    </div>
  </section>
</template>

<script setup lang="ts">
// Logic here
</script>
`;
  fs.writeFileSync(path.join(componentsDir, comp), content);
});

console.log('Created components.');
