<template>
  <section id="html-css-js" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-orange-800 mb-8">1. أدوار HTML وCSS وJavaScript</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <p class="lg:col-span-2 text-lg text-slate-700 leading-relaxed">
          <span class="font-bold text-slate-400">(1)</span>
          تؤدي التقنيات التالية أدوارًا مختلفة في كثير من صفحات الويب؛ وليس من الضروري أن تستخدم الصفحة الثلاث كلها معًا.
        </p>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-2">
          <h3 class="font-bold text-orange-700">مصطلحات أساسية</h3>
          <p class="text-slate-700"><strong class="text-rose-600" dir="ltr">HTML</strong> – البنية.</p>
          <p class="text-slate-700"><strong class="text-rose-600" dir="ltr">CSS</strong> – المظهر.</p>
          <p class="text-slate-700"><strong class="text-rose-600" dir="ltr">JavaScript</strong> – السلوك.</p>
        </div>
      </div>

      <!-- Roles table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[600px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/6">التقنية</th>
              <th class="p-4 font-bold">الدور</th>
              <th class="p-4 font-bold w-1/4">التشبيه</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="r in roles" :key="r.name" class="border-t border-slate-200">
              <td class="p-4 font-black" :class="r.color" dir="ltr">{{ r.name }}</td>
              <td class="p-4 text-slate-700">{{ r.role }}</td>
              <td class="p-4 text-slate-700">{{ r.icon }} {{ r.analogy }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figure 3.3.1 builder -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8">
        <div class="text-center mb-6">
          <span class="inline-block text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-2">الشكل 3.3.1 – أدوار HTML وCSS وJavaScript</span>
          <h3 class="text-xl font-bold text-slate-900">🧪 ابنِ الصفحة طبقة طبقة</h3>
          <p class="text-slate-600 mt-1">اختر الطبقات، وشاهد الصفحة تتغير. جرّب البحث وزر الإعجاب بعد إضافة JavaScript.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-6">
          <button v-for="(s, i) in stages" :key="s.label" @click="stage = i"
                  class="px-4 py-2 rounded-xl border-2 font-bold transition-colors flex items-center gap-2"
                  :class="stage === i ? s.active : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'">
            <span class="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-sm">{{ i + 1 }}</span>
            <span dir="ltr">{{ s.label }}</span>
          </button>
        </div>

        <div class="grid lg:grid-cols-5 gap-6 items-start">
          <!-- Mock browser -->
          <div class="lg:col-span-3 rounded-2xl border border-slate-300 overflow-hidden shadow-sm bg-white">
            <div class="bg-slate-200 px-3 py-2 flex items-center gap-1.5" dir="ltr">
              <span class="w-3 h-3 rounded-full bg-rose-400"></span><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span class="ml-3 text-xs text-slate-500 bg-white rounded px-3 py-0.5 flex-1">my-page.html</span>
            </div>

            <!-- Stage 1: HTML only — browser default look -->
            <div v-if="stage === 0" class="p-5 bg-white text-black" style="font-family: 'Times New Roman', serif">
              <h1 class="text-2xl font-bold mb-2">صفحتي على الويب</h1>
              <p class="mb-3">هذه صفحة بسيطة عن كتبي المفضلة.</p>
              <h2 class="text-lg font-bold mb-1">الكتب التي أحبها</h2>
              <ul class="list-disc pr-6 mb-3"><li v-for="b in books" :key="b">{{ b }}</li></ul>
              <a class="text-blue-700 underline cursor-pointer">اضغط هنا</a>
            </div>

            <!-- Stage 2 & 3: styled (+ behaviour) -->
            <div v-else class="p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <h1 class="text-2xl font-black mb-1 text-amber-300">صفحتي على الويب</h1>
              <p class="mb-4 text-slate-300 text-sm">هذه صفحة بسيطة عن كتبي المفضلة.</p>
              <div class="flex items-center justify-between mb-3">
                <span class="bg-amber-400 text-slate-900 font-bold text-sm px-3 py-1 rounded-full">الكتب التي أحبها</span>
                <span v-if="stage === 2" class="text-xs text-slate-400">{{ filtered.length }} نتيجة</span>
              </div>
              <div v-if="stage === 2" class="relative mb-3">
                <Search class="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                <input v-model="query" placeholder="ابحث عن كتاب…" class="w-full bg-white/10 border border-white/20 rounded-xl py-2 pr-9 pl-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <ul class="space-y-2 mb-4">
                <li v-for="b in (stage === 2 ? filtered : books)" :key="b" class="bg-white/10 rounded-xl px-3 py-2 flex items-center justify-between">
                  <span>📘 {{ b }}</span>
                  <span v-if="stage === 2 && b === books[0]" class="text-amber-300 text-sm">★ مميز</span>
                </li>
                <li v-if="stage === 2 && filtered.length === 0" class="text-sm text-slate-400">لا توجد نتائج.</li>
              </ul>
              <button @click="stage === 2 && likes++"
                      class="bg-amber-400 text-slate-900 font-bold px-5 py-2 rounded-xl flex items-center gap-2"
                      :class="stage === 2 ? 'hover:bg-amber-300 active:scale-95 transition' : 'cursor-default'">
                <Heart class="w-4 h-4" :class="likes > 0 && stage === 2 ? 'fill-rose-600 text-rose-600' : ''" />
                {{ stage === 2 ? `أعجبني ${likes}` : 'اضغط هنا' }}
              </button>
            </div>
          </div>

          <!-- Explanation + code -->
          <div class="lg:col-span-2 space-y-4">
            <div class="rounded-2xl p-5 border-2" :class="stages[stage].box">
              <h4 class="font-black text-lg mb-1">{{ stages[stage].title }}</h4>
              <p class="text-sm leading-relaxed">{{ stages[stage].desc }}</p>
            </div>
            <pre dir="ltr" class="bg-slate-900 text-slate-100 rounded-2xl p-4 text-xs leading-relaxed overflow-x-auto text-left"><code>{{ isolateArabic(stages[stage].code) }}</code></pre>
          </div>
        </div>

        <p class="mt-6 text-center font-bold text-slate-700">
          تُحدّد <span dir="ltr">HTML</span> الهيكل، وتُضيف <span dir="ltr">CSS</span> التنسيق، وتُضيف <span dir="ltr">JavaScript</span> السلوك — تتحد ثلاث طبقات لصنع صفحات الويب الحديثة.
        </p>
      </div>

      <p class="mt-8 text-lg text-slate-700 leading-relaxed">
        <span class="font-bold text-slate-400">(2)</span>
        يمكن أن تستخدم الصفحة HTML وحده، أو HTML مع CSS وJavaScript بحسب الوظائف التي تحتاج إليها.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, Heart } from 'lucide-vue-next'

// Wrap each Arabic run in RLI…PDI so the surrounding tags in the LTR code keep their order
const isolateArabic = (code) => code.replace(/[؀-ۿ][؀-ۿ ]*[؀-ۿ]|[؀-ۿ]/g, (run) => `⁧${run}⁩`)

const roles = [
  { name: 'HTML', role: 'يحدد بنية (هيكل) صفحة الويب. يصف عناصر مثل العناوين والفقرات والصور والروابط.', icon: '🏗️', analogy: 'هيكل مبنى', color: 'text-orange-600' },
  { name: 'CSS', role: 'يحدد مظهر صفحة الويب (الألوان، التخطيط، الحجم، الخطوط، إلخ).', icon: '🎨', analogy: 'الديكور الداخلي والخارجي لمبنى', color: 'text-sky-600' },
  { name: 'JavaScript', role: 'يضيف السلوك والتفاعلية إلى صفحة الويب. يُفعّل الاستجابات عند الضغط على الأزرار وتحديثات جزء فقط من الشاشة.', icon: '⚡', analogy: 'أنظمة الكهرباء والسباكة في مبنى', color: 'text-amber-600' },
]

const stages = [
  {
    label: 'HTML فقط', title: 'الهيكل', active: 'bg-orange-600 border-orange-600 text-white', box: 'bg-orange-50 border-orange-200 text-orange-900',
    desc: 'يحدد HTML المحتوى والهيكل: العناوين والفقرات والقائمة والرابط. بدون CSS يعرض المتصفح الصفحة بشكله الافتراضي البسيط.',
    code: `<h1>صفحتي على الويب</h1>
<p>هذه صفحة بسيطة…</p>
<h2>الكتب التي أحبها</h2>
<ul>
  <li>كتاب أ</li>
  <li>كتاب ب</li>
</ul>
<a href="#">اضغط هنا</a>`,
  },
  {
    label: 'HTML + CSS', title: '+ التنسيق', active: 'bg-sky-600 border-sky-600 text-white', box: 'bg-sky-50 border-sky-200 text-sky-900',
    desc: 'يضيف CSS التصميم البصري: الألوان والتخطيط والخطوط. المحتوى نفسه لم يتغير، لكن مظهره أصبح منسقًا.',
    code: `body {
  background: #0f172a;
  color: white;
}
h1 { color: #fcd34d; }
li {
  background: rgba(255,255,255,.1);
  border-radius: 12px;
}`,
  },
  {
    label: '+ JavaScript', title: '+ السلوك', active: 'bg-amber-500 border-amber-500 text-white', box: 'bg-amber-50 border-amber-200 text-amber-900',
    desc: 'يضيف JavaScript التفاعلية: البحث يصفّي القائمة أثناء الكتابة، وزر الإعجاب يعدّ الضغطات ويحدّث جزءًا فقط من الشاشة.',
    code: `let likes = 0;
likeButton.onclick = () => {
  likes++;
  likeButton.textContent =
    'أعجبني ' + likes;
};
search.oninput = () => {
  showBooksMatching(search.value);
};`,
  },
]

const books = ['كتاب البرمجة للمبتدئين', 'أسرار الذكاء الاصطناعي', 'رحلة في عالم الويب']
const stage = ref(0)
const query = ref('')
const likes = ref(3)
const filtered = computed(() => books.filter(b => b.includes(query.value.trim())))
</script>
