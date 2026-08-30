<template>
  <section id="daily-life" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 max-w-5xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          الذكاء الاصطناعي حواليك أكثر مما تتخيل!
        </h2>
        <p class="text-xl text-gray-600">هل فكرت كم مرة تستخدم فيها الذكاء الاصطناعي يومياً؟</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in timelineItems" :key="index"
             class="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-4 group">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3" :class="item.color">
            {{ item.icon }}
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const timelineItems = [
  { icon: '📱', title: 'الهاتف الذكي', desc: 'المساعد الصوتي يتعرف على صوتك وينفذ أوامرك.', color: 'bg-blue-100' },
  { icon: '📧', title: 'البريد الإلكتروني', desc: 'يصنف الرسائل المزعجة (Spam) ويبعدها عنك تلقائياً.', color: 'bg-orange-100' },
  { icon: '🎬', title: 'منصات الفيديو', desc: 'تقترح لك الفيديوهات التي قد تعجبك بناءً على مشاهداتك السابقة.', color: 'bg-red-100' },
  { icon: '🛒', title: 'المتاجر الإلكترونية', desc: 'تقترح لك منتجات مشابهة لما تبحث عنه أو تشتريه.', color: 'bg-teal-100' },
  { icon: '🌍', title: 'تطبيقات الترجمة', desc: 'تترجم النصوص وحتى الصور والصوت بلمح البصر.', color: 'bg-purple-100' },
  { icon: '🚗', title: 'تطبيقات الخرائط', desc: 'تتنبأ بالزحام المروري وتقترح لك أسرع طريق للوصول.', color: 'bg-green-100' },
]
</script>
