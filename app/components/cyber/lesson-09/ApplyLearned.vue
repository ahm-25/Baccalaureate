<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            اكتشف متجر إلكتروني للتو أن بيانات العملاء قد <strong>تسرّبت</strong>. باستخدام مراحل الاستجابة الست وتقييم المخاطر،
            حدد المرحلتين التاليتين اللتين يجب على المتجر تنفيذهما وسبب ذلك، وحدد خطرًا واحدًا ينبغي إعطاؤه الأولوية بعد ذلك.
          </p>

          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div v-for="(f, i) in fields" :key="i" class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ f }}</h4>
              <textarea rows="4" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="اكتب إجابتك…"></textarea>
            </div>
          </div>

          <button @click="show = !show" class="text-teal-700 font-bold bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ show ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="show" class="mt-4 space-y-3">
            <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-slate-800">
              <strong class="text-amber-800">1. الاحتواء:</strong> إيقاف التسرب فورًا، مثل عزل الخادم أو الحساب المخترق وإيقاف الوصول غير المصرح به؛
              لأن الحادث اكتُشف للتو والأولوية هي ألّا تتسرب بيانات أكثر.
            </div>
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-slate-800">
              <strong class="text-rose-800">2. إزالة التهديد (الاستئصال):</strong> إزالة سبب التسرب، مثل حذف البرمجية الخبيثة أو سد الثغرة أو تغيير كلمات المرور المسرّبة؛
              لأن الاستعادة قبل إزالة السبب قد تسمح بتسرب جديد.
            </div>
            <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-slate-800">
              <strong class="text-indigo-800">خطر له الأولوية بعد ذلك:</strong> إساءة استخدام بيانات العملاء المسرّبة (مثل الاحتيال أو رسائل التصيد للعملاء):
              تأثيره كبير واحتماليته عالية بعد التسرب، فدرجته في المصفوفة «مرتفع جدًا».
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const fields = ['المرحلة التالية الأولى وسببها', 'المرحلة التالية الثانية وسببها', 'خطر يُعطى الأولوية بعد ذلك']
</script>
