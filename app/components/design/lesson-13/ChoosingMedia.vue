<template>
  <section id="choosing-media" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-8">3. اختيار الوسائط وفقًا للغرض</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">
        <span class="font-bold text-slate-400">(1)</span>
        عند نقل المعلومات، من المهم اختيار الوسيلة الأنسب وفقًا للغرض والجمهور المستهدف.
      </p>

      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-8">
        <table class="w-full text-right min-w-[640px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/4">الغرض</th>
              <th class="p-4 font-bold w-1/4">أمثلة على الوسائط المناسبة</th>
              <th class="p-4 font-bold">السبب</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="p in purposes" :key="p.purpose" class="border-t border-slate-200">
              <td class="p-4 font-bold text-slate-900">{{ p.icon }} {{ p.purpose }}</td>
              <td class="p-4 text-teal-800 font-medium">{{ p.media }}</td>
              <td class="p-4 text-slate-600 leading-relaxed">{{ p.why }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-lg text-slate-700 leading-relaxed mb-10">
        <span class="font-bold text-slate-400">(2)</span>
        في الواقع العملي، غالبًا ما تُستخدم عدة وسائط معًا.
        <span class="block mt-2 text-slate-500 italic">على سبيل المثال، يوجّه إعلان تلفزيوني المشاهدين إلى موقع إلكتروني، ويشجع الموقع الإلكتروني على نشر المعلومات عبر وسائل التواصل الاجتماعي.</span>
      </p>

      <!-- Campaign planner -->
      <div class="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl mb-10">
        <h3 class="text-xl font-bold mb-2">🧪 مخطِّط الحملة: ابنِ مزيج الوسائط</h3>
        <p class="text-slate-400 mb-6">فعّل الأهداف التي تحتاجها حملتك، وشاهد الوسائط المقترحة وكيف تتصل ببعضها.</p>

        <div class="grid sm:grid-cols-2 gap-3 mb-6">
          <button v-for="(p, i) in purposes" :key="p.purpose" @click="toggle(i)"
                  class="text-right p-4 rounded-2xl border-2 transition-all flex items-center gap-3"
                  :class="goals.includes(i) ? 'bg-teal-600/30 border-teal-400' : 'bg-slate-800 border-slate-700 hover:border-slate-500'">
            <span class="w-6 h-6 shrink-0 rounded-md border-2 flex items-center justify-center text-sm font-black"
                  :class="goals.includes(i) ? 'bg-teal-400 border-teal-400 text-slate-900' : 'border-slate-500'">{{ goals.includes(i) ? '✓' : '' }}</span>
            <span class="font-bold">{{ p.icon }} {{ p.purpose }}</span>
          </button>
        </div>

        <div v-if="plan.length === 0" class="bg-slate-800 rounded-2xl p-5 text-center text-slate-400">اختر هدفًا واحدًا على الأقل.</div>
        <div v-else>
          <div class="flex flex-wrap items-center justify-center gap-2 mb-5">
            <template v-for="(step, i) in plan" :key="step.purpose">
              <div class="bg-slate-800 border border-teal-500/50 rounded-2xl px-4 py-3 text-center min-w-[9rem]">
                <div class="text-2xl">{{ step.icon }}</div>
                <div class="font-bold text-teal-200 text-sm mt-1">{{ step.short }}</div>
                <div class="text-[11px] text-slate-400 mt-1">{{ step.purpose }}</div>
              </div>
              <span v-if="i < plan.length - 1" class="text-teal-300 font-black text-xl">←</span>
            </template>
          </div>
          <p class="text-center text-sm leading-relaxed" :class="plan.length > 1 ? 'text-emerald-300' : 'text-amber-300'">
            {{ plan.length > 1
              ? '✓ كل وسيلة تقوم بما تُجيده، وتوجّه الجمهور إلى الوسيلة التالية — هذا هو الجمع بين الوسائط.'
              : 'وسيلة واحدة تحقق هدفًا واحدًا؛ أضف هدفًا آخر لترى كيف تتكامل الوسائط.' }}
          </p>
        </div>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          لا توجد وسيلة واحدة هي الأفضل لكل شيء: اختر بناءً على الغرض والجمهور، واجمع بين الوسائط – التلفزيون أو وسائل التواصل الاجتماعي لانتشار واسع،
          وموقع إلكتروني للتعمق، والبريد الإلكتروني للأفراد – بحيث تقوم كل وسيلة بما تُجيده.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Ordered the way a campaign usually flows: reach first, then depth, then sharing, then direct contact
const purposes = [
  { icon: '📢', purpose: 'إعلام عدد كبير من الناس في آنٍ واحد', media: 'التلفزيون، إعلانات وسائل التواصل الاجتماعي', why: 'انتشار واسع', short: 'التلفزيون / إعلان' },
  { icon: '📄', purpose: 'تقديم معلومات تفصيلية', media: 'الموقع الإلكتروني', why: 'يمكن للموقع تقديم كمية كبيرة من المعلومات وتنظيمها في صفحات وأقسام وتحديثها.', short: 'الموقع الإلكتروني' },
  { icon: '🔁', purpose: 'الانتشار عن طريق التناقل الشفهي', media: 'وسائل التواصل الاجتماعي', why: 'يمكن للمستخدمين مشاركة المعلومات ونشرها طوعًا', short: 'وسائل التواصل' },
  { icon: '✉️', purpose: 'إيصال المعلومات مباشرة لأشخاص محددين', media: 'البريد الإلكتروني، الرسائل المباشرة', why: 'يمكن التوصيل بشكل فردي', short: 'البريد الإلكتروني' },
]

const goals = ref([0, 1, 2])
function toggle(i) {
  goals.value = goals.value.includes(i) ? goals.value.filter((g) => g !== i) : [...goals.value, i].sort()
}
const plan = computed(() => goals.value.map((i) => purposes[i]))
</script>
