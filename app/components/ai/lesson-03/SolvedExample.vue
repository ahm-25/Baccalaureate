<template>
  <section id="solved-example" class="py-20 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <span class="text-3xl">✏️</span> مثال محلول
        </h2>
      </div>

      <div class="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-md">
        <p class="text-xl font-bold text-gray-800 mb-6 text-center">
          طابق الخدمة مع التقنية المناسبة:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Services -->
          <div class="space-y-4">
            <div class="p-4 bg-white rounded-xl border border-gray-200 font-medium flex items-center gap-3">
              <span class="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
              YouTube يوصي بمقاطع تناسب تفضيلات المستخدم
            </div>
            <div class="p-4 bg-white rounded-xl border border-gray-200 font-medium flex items-center gap-3">
              <span class="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
              التحدث إلى هاتف ذكي للتحقق من الطقس
            </div>
            <div class="p-4 bg-white rounded-xl border border-gray-200 font-medium flex items-center gap-3">
              <span class="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
              ترجمة موقع إلكتروني بلغة أجنبية
            </div>
            <div class="p-4 bg-white rounded-xl border border-gray-200 font-medium flex items-center gap-3">
              <span class="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
              كاميرا الهاتف تكتشف وجه الشخص تلقائيًا
            </div>
          </div>

          <!-- Technologies -->
          <div class="space-y-4">
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 font-bold flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors" @click="check('A')">
              <span>A) نظام التوصية</span>
              <span v-if="selected['A']" class="text-green-600 text-xl">✓ 1</span>
            </div>
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 font-bold flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors" @click="check('B')">
              <span>B) المساعد الصوتي</span>
              <span v-if="selected['B']" class="text-green-600 text-xl">✓ 2</span>
            </div>
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 font-bold flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors" @click="check('C')">
              <span>C) الترجمة الآلية</span>
              <span v-if="selected['C']" class="text-green-600 text-xl">✓ 3</span>
            </div>
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200 font-bold flex justify-between items-center cursor-pointer hover:bg-blue-100 transition-colors" @click="check('D')">
              <span>D) التعرف على الوجه</span>
              <span v-if="selected['D']" class="text-green-600 text-xl">✓ 4</span>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center" v-if="allSelected">
          <div class="bg-green-100 text-green-900 p-6 rounded-2xl inline-block text-right">
            <h4 class="font-bold mb-2">تفسير الإجابات:</h4>
            <ul class="space-y-2 text-sm">
              <li><strong>1 ➔ A:</strong> يحلل YouTube بيانات مشاهداتك السابقة ليقترح فيديوهات جديدة (نظام توصية).</li>
              <li><strong>2 ➔ B:</strong> الهاتف يستخدم التعرف على الصوت وفهم اللغة الطبيعية لتنفيذ الأمر (مساعد صوتي).</li>
              <li><strong>3 ➔ C:</strong> فهم سياق الكلمات في لغة ونقلها للغة أخرى بأسلوب صحيح (ترجمة آلية).</li>
              <li><strong>4 ➔ D:</strong> معالجة الصورة لاستخراج ملامح الوجه ومطابقتها (التعرف على الوجه).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const selected = ref<Record<string, boolean>>({
  'A': false,
  'B': false,
  'C': false,
  'D': false,
});

const check = (option: string) => {
  selected.value[option] = true;
};

const allSelected = computed(() => {
  return selected.value['A'] && selected.value['B'] && selected.value['C'] && selected.value['D'];
});
</script>
