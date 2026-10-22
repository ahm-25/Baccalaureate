<template>
  <div class="min-h-screen bg-background py-32 px-4">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-primary to-secondary text-white text-4xl shadow-xl shadow-primary/20 mb-6">
        📝
      </div>
      <h1 class="text-4xl md:text-5xl font-black text-maintext mb-4">كتاب الأداءات والتقييمات</h1>
      <p class="text-lg text-mutedtext font-bold max-w-2xl mx-auto leading-relaxed">
        جميع أسئلة كتاب الأداءات والتقييمات محلولة بالكامل — المهام الأدائية، الأداءات المنزلية، والتقييمات الأسبوعية
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="item in assessments"
        :key="item.to"
        :to="item.to"
        class="group glass-panel p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
      >
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
            {{ item.icon }}
          </div>
          <div class="flex-1 min-w-0">
            <h2 class="text-lg font-black text-maintext mb-1 group-hover:text-primary transition-colors">{{ item.title }}</h2>
            <p class="text-sm text-mutedtext font-semibold leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-end text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>فتح التقييم</span>
          <span class="mr-1">&larr;</span>
        </div>
      </NuxtLink>
    </div>

    <!-- Back to Home -->
    <div class="max-w-5xl mx-auto mt-12 text-center">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-mutedtext hover:text-primary font-bold transition-colors">
        <span>&rarr;</span>
        <span>العودة للرئيسية</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'كتاب الأداءات والتقييمات | تكنولوجيا المعلومات',
  meta: [
    { name: 'description', content: 'جميع أسئلة كتاب الأداءات والتقييمات محلولة بالكامل للصف الثاني البكالوريا' }
  ]
})

const assessments = [
  {
    to: '/unit-01/assessments/lesson-01',
    icon: '📖',
    title: 'الدرس الأول: تطور تكنولوجيا المعلومات والتحول الاجتماعي',
    description: 'المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس الأول'
  },
  {
    to: '/unit-01/assessments/lesson-02',
    icon: '🤖',
    title: 'الدرس الثاني: كيف يعمل الذكاء الاصطناعي',
    description: 'المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس الثاني'
  },
  {
    to: '/unit-01/assessments/lesson-03',
    icon: '🏭',
    title: 'الدرس الثالث: الذكاء الاصطناعي في الحياة اليومية والصناعة',
    description: 'المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس الثالث'
  },
  {
    to: '/unit-01/assessments/lesson-04',
    icon: '⚖️',
    title: 'الدرس الرابع: القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي',
    description: 'المهام الأدائية والأداءات المنزلية والتقييمات الأسبوعية للدرس الرابع'
  }
]
</script>
