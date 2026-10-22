<template>
  <section id="media-comparison" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-8">1. مقارنة خصائص الوسائط المختلفة</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <p class="lg:col-span-2 text-lg text-slate-700 leading-relaxed">
          <span class="font-bold text-slate-400">(1)</span>
          لكل وسيلة لنقل المعلومات خصائص مختلفة. عند التخطيط لموقع إلكتروني، من المهم فهم الاختلافات عن الوسائط الأخرى.
        </p>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-3">
          <h3 class="font-bold text-teal-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">اتجاه واحد</strong> – من المُرسِل إلى المُستقبِل فقط.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">اتجاهين</strong> – يمكن للمستخدمين الاستجابة والمشاركة.</p>
        </div>
      </div>

      <!-- Book table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[640px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/5">الوسيلة</th>
              <th class="p-4 font-bold w-1/5">المعلومات المنقولة</th>
              <th class="p-4 font-bold">الخصائص</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="m in media" :key="m.name" class="border-t border-slate-200">
              <td class="p-4 font-bold text-slate-900">{{ m.icon }} {{ m.name }}</td>
              <td class="p-4 text-slate-700">{{ m.carries }}</td>
              <td class="p-4 text-slate-600 leading-relaxed">{{ m.traits }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Explorer -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 مستكشف الوسائط: اختر وسيلة وقارن</h3>
        <p class="text-slate-600 mb-6">اختر وسيلة لترى ما تنقله، وكيف تصل، وهل يستطيع الجمهور الرد، وهل تعمل دون إنترنت.</p>

        <div class="flex flex-wrap gap-2 mb-6">
          <button v-for="(m, i) in media" :key="m.name" @click="active = i"
                  class="px-4 py-2 rounded-xl border-2 font-bold transition-colors"
                  :class="active === i ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:border-teal-300'">
            {{ m.icon }} {{ m.name }}
          </button>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-2xl border border-slate-200 p-4">
            <p class="text-xs font-bold text-slate-500 mb-2">ما تنقله</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="c in channels" :key="c.key" class="text-xs font-bold px-2 py-1 rounded-lg"
                    :class="current.has.includes(c.key) ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-300 line-through'">
                {{ c.icon }} {{ c.name }}
              </span>
            </div>
          </div>
          <div class="bg-white rounded-2xl border border-slate-200 p-4">
            <p class="text-xs font-bold text-slate-500 mb-2">الاتجاه</p>
            <p class="text-2xl font-black" :class="current.twoWay ? 'text-emerald-600' : 'text-slate-700'">{{ current.twoWay ? '⇄ اتجاهين' : '→ اتجاه واحد' }}</p>
            <p class="text-xs text-slate-500 mt-1">{{ current.directionNote }}</p>
          </div>
          <div class="bg-white rounded-2xl border border-slate-200 p-4">
            <p class="text-xs font-bold text-slate-500 mb-2">دون إنترنت؟</p>
            <p class="text-2xl font-black" :class="current.offline ? 'text-emerald-600' : 'text-rose-600'">{{ current.offline ? '✓ نعم' : '✗ غالبًا لا' }}</p>
            <p class="text-xs text-slate-500 mt-1">{{ current.offlineNote }}</p>
          </div>
          <div class="bg-white rounded-2xl border border-slate-200 p-4">
            <p class="text-xs font-bold text-slate-500 mb-2">أهم ما تُجيده</p>
            <p class="font-bold text-teal-800 leading-relaxed">{{ current.best }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const channels = [
  { key: 'text', name: 'نص', icon: '🔤' },
  { key: 'image', name: 'صور', icon: '🖼️' },
  { key: 'video', name: 'فيديو', icon: '🎬' },
  { key: 'audio', name: 'صوت', icon: '🔊' },
]

const media = [
  { icon: '📺', name: 'التلفزيون', carries: 'فيديو + صوت', has: ['video', 'audio'],
    traits: 'يمكنه الوصول إلى جمهور كبير في وقت واحد، ويجمع الصورة والصوت، وعادةً يكون الاتصال فيه من المرسل إلى المتلقي.',
    twoWay: false, directionNote: 'من المرسل إلى المتلقي عادةً.', offline: false, offlineNote: 'يحتاج إلى بث يصل إلى الجهاز.', best: 'الوصول إلى جمهور كبير في وقت واحد.' },
  { icon: '📻', name: 'الراديو', carries: 'صوت', has: ['audio'],
    traits: 'يعتمد على الصوت، ويمكن الاستماع إليه أثناء التنقل أو أداء مهام أخرى بحسب التغطية ووسيلة الاستقبال؛ وعادةً يكون الاتصال فيه باتجاه واحد.',
    twoWay: false, directionNote: 'عادةً باتجاه واحد.', offline: true, offlineNote: 'يعمل بالبث دون إنترنت بحسب التغطية.', best: 'الاستماع أثناء التنقل أو أداء مهام أخرى.' },
  { icon: '📰', name: 'الصحيفة', carries: 'نص + صور', has: ['text', 'image'],
    traits: 'تبقى موجودة ماديًا كوسيلة مطبوعة. يمكن قراءتها دون اتصال بالإنترنت. اتجاه واحد.',
    twoWay: false, directionNote: 'اتجاه واحد.', offline: true, offlineNote: 'مطبوعة؛ تُقرأ دون اتصال.', best: 'البقاء ماديًا والقراءة دون اتصال.' },
  { icon: '🌐', name: 'الموقع الإلكتروني', carries: 'نص + صور + فيديو + صوت', has: ['text', 'image', 'video', 'audio'],
    traits: 'يمكن الجمع بين معلومات متنوعة. يمكن تحديثه في أي وقت. اتجاه واحد أساسًا، لكن التفاعل ثنائي الاتجاه ممكن أيضًا من خلال النماذج والتعليقات وغيرها.',
    twoWay: true, directionNote: 'أساسًا اتجاه واحد، والتفاعل ممكن بالنماذج والتعليقات.', offline: false, offlineNote: 'تحتاج معظم وظائفه إلى اتصال بالشبكة.', best: 'تقديم معلومات تفصيلية متنوعة وتحديثها.' },
  { icon: '💬', name: 'وسائل التواصل الاجتماعي', carries: 'نص + صور + فيديو + صوت', has: ['text', 'image', 'video', 'audio'],
    traits: 'يمكنها نشر المعلومات بسرعة، وتسمح للمستخدمين بالنشر والمشاركة والتفاعل.',
    twoWay: true, directionNote: 'المستخدمون ينشرون ويشاركون ويتفاعلون.', offline: false, offlineNote: 'تحتاج إلى اتصال بالإنترنت.', best: 'النشر السريع والمشاركة والتفاعل.' },
]

const active = ref(3)
const current = computed(() => media[active.value])
</script>
