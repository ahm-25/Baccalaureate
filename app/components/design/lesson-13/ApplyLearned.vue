<template>
  <section id="apply-learned" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl overflow-hidden border border-teal-200 shadow-sm">
        <div class="bg-teal-700 text-white px-6 py-4 font-bold text-xl flex items-center gap-2">🌍 طبّق ما تعلمته</div>
        <div class="p-6 md:p-8 bg-white">
          <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
            مستشفى يريد إبلاغ المرضى بمواعيد العمل الجديدة والسماح لهم بطرح الأسئلة. اذكر وسيلة واحدة للوصول إلى عدد كبير من الناس بسرعة
            ووسيلة أخرى تتيح تفاعلًا ثنائي الاتجاه، واذكر سبب مناسبة كل منهما.
          </p>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div v-for="(f, i) in fields" :key="i" class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ f }}</h4>
              <textarea rows="4" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="اكتب إجابتك…"></textarea>
            </div>
          </div>

          <button @click="show = !show" class="text-teal-700 font-bold bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ show ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="show" class="mt-4 space-y-3">
            <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-slate-800">
              <strong class="text-rose-800">للوصول السريع إلى عدد كبير:</strong> إعلانات وسائل التواصل الاجتماعي (أو التلفزيون المحلي)، لأنها تحقق انتشارًا واسعًا في وقت قصير.
            </div>
            <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-slate-800">
              <strong class="text-teal-800">للتفاعل ثنائي الاتجاه:</strong> موقع المستشفى الإلكتروني بنموذج أسئلة (أو صفحته على وسائل التواصل الاجتماعي)،
              لأنه يعرض المواعيد الجديدة بالتفصيل ويمكن تحديثه في أي وقت، ويتيح للمرضى إرسال أسئلتهم وتلقي الرد.
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
const fields = ['وسيلة للوصول إلى عدد كبير بسرعة، ولماذا', 'وسيلة تتيح تفاعلًا ثنائي الاتجاه، ولماذا']
</script>
