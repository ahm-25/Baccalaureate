<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            تريد مدرسة إعادة تصميم صفحة نتائجها المزدحمة حتى يتمكن أولياء الأمور من العثور على درجات أطفالهم بسرعة.
            اذكر شخصية المستخدم التي ستحددها، وقرارًا واحدًا خاصًا بالمخطط الهيكلي، ومبدأً واحدًا من CRAP ستطبقه، وبيّن ما الذي يحسّنه كل منها.
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
            <div class="p-4 rounded-xl bg-fuchsia-50 border border-fuchsia-200 text-slate-800">
              <strong class="text-fuchsia-800">1. شخصية المستخدم:</strong> ولي أمر مشغول يفتح الصفحة غالبًا من الهاتف، هدفه معرفة درجة ابنه بسرعة،
              وتحديه أن الصفحة الحالية مزدحمة. يحسّن ذلك تركيز الفريق على احتياج حقيقي بدل ذوقه الشخصي.
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
              <strong class="text-slate-800">2. قرار المخطط الهيكلي:</strong> وضع مربع البحث برقم الطالب أعلى الصفحة مباشرة، والنتيجة تحته،
              وباقي الأخبار في الشريط الجانبي. يحسّن ذلك أولوية المعلومة الأهم ومكانها.
            </div>
            <div class="p-4 rounded-xl bg-pink-50 border border-pink-200 text-slate-800">
              <strong class="text-pink-800">3. مبدأ من CRAP:</strong> التباين — عرض الدرجة الكلية بخط كبير وواضح حتى تبرز فورًا
              (أو التقارب: وضع اسم المادة ودرجتها متجاورين). يحسّن ذلك سرعة العثور على النتيجة.
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
const fields = ['شخصية المستخدم وما تحسّنه', 'قرار المخطط الهيكلي وما يحسّنه', 'مبدأ من CRAP وما يحسّنه']
</script>
