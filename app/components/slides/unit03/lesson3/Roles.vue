<template>
  <!-- Roles of HTML, CSS and JavaScript. f = 0 the three roles with the building analogy,
       1..3 book figure 3.3.1: the same page built layer by layer (HTML only → + CSS → + JavaScript). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '🏢' : '🧪'" :title="f === 0 ? 'أدوار HTML وCSS وJavaScript' : 'ابنِ الصفحة طبقة طبقة'"
                 :sub="f === 0 ? 'ثلاث تقنيات… ولكل منها دور مختلف' : 'الشكل 3.3.1 – أدوار HTML وCSS وJavaScript'" />

    <!-- ───── f0: the three roles ───── -->
    <Transition name="sl-frame" mode="out-in">
      <div v-if="f === 0" key="roles" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-5">
          <div v-for="(r, i) in roles" :key="r.name" class="sl-in w-[360px] h-[325px] rounded-3xl border-2 px-6 py-5 flex flex-col items-center text-center"
               :class="r.cls" :style="{ '--d': `${0.4 + i * 1.8}s` }">
            <span class="text-[50px] leading-none">{{ r.icon }}</span>
            <span class="mt-2 text-[40px] font-black font-mono" :class="r.text" dir="ltr">{{ r.name }}</span>
            <span class="sl-badge !text-[19px] border-white/20 bg-white/10 text-white">{{ r.term }}</span>
            <p class="mt-3 text-[19px] font-bold text-slate-100 leading-snug">{{ r.role }}</p>
            <div class="mt-auto sl-pop text-[18px] font-black" :class="r.text" :style="{ '--d': `${1.2 + i * 1.8}s` }">يشبه: {{ r.analogy }}</div>
          </div>
        </div>
        <div class="absolute top-[500px] inset-x-0 flex justify-center">
          <span class="sl-in sl-badge !text-[19px] border-amber-400/60 bg-amber-600/15 text-amber-100" style="--d: 6s">
            💡 ليس من الضروري أن تستخدم الصفحة الثلاث كلها: HTML وحده، أو مع CSS وJavaScript بحسب الحاجة
          </span>
        </div>
      </div>
    </Transition>

    <!-- ───── f1..f3: build the page ───── -->
    <template v-if="f > 0">
      <!-- stage tracker (kept mounted so it only re-colours) -->
      <div class="absolute left-[680px] top-[150px] w-[540px] flex gap-2" dir="rtl">
        <div v-for="(s, i) in stages" :key="s.label" class="flex-1 h-[46px] rounded-xl border-2 flex items-center justify-center gap-2 text-[18px] font-black transition-all duration-500"
             :class="i + 1 === f ? s.on : i + 1 < f ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200' : 'border-slate-700 bg-slate-900/60 text-slate-500'">
          <span>{{ i + 1 < f ? '✓' : i + 1 }}</span><span dir="ltr">{{ s.label }}</span>
        </div>
      </div>

      <Transition name="sl-frame" mode="out-in">
        <div :key="f" class="absolute inset-0">
          <!-- mock browser -->
          <div class="sl-in absolute left-[60px] top-[150px] w-[590px] h-[420px] rounded-2xl border-2 border-white/20 overflow-hidden" style="--d: .1s">
            <div class="h-[32px] bg-slate-700 flex items-center gap-1.5 px-3">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="ml-2 w-[200px] h-[18px] rounded-md bg-slate-800 text-[11px] text-slate-400 font-mono flex items-center px-2">my-page.html</span>
            </div>

            <!-- HTML only: the browser's default look -->
            <div v-if="f === 1" class="h-[388px] bg-white text-black px-6 pt-3 page-plain" dir="rtl">
              <h1 class="text-[30px] font-bold">صفحتي على الويب</h1>
              <p class="text-[17px] mt-1">هذه صفحة بسيطة عن كتبي المفضلة.</p>
              <h2 class="text-[23px] font-bold mt-3">الكتب التي أحبها</h2>
              <ul class="list-disc pr-8 mt-1 text-[17px] leading-7">
                <li v-for="b in books" :key="b">{{ b }}</li>
              </ul>
              <a class="block mt-3 text-[17px] text-blue-700 underline">اضغط هنا</a>
            </div>

            <!-- + CSS (and + JavaScript) -->
            <div v-else class="h-[388px] bg-slate-900 px-6 pt-4" dir="rtl">
              <h1 class="sl-in text-[30px] font-black text-amber-300" style="--d: .5s">صفحتي على الويب</h1>
              <p class="text-[17px] font-bold text-slate-300 mt-1">هذه صفحة بسيطة عن كتبي المفضلة.</p>
              <div class="mt-3 flex items-center justify-between">
                <span class="text-[20px] font-black text-sky-300">الكتب التي أحبها</span>
                <span v-if="f === 3" class="relative w-[90px] h-[26px] text-[15px] font-bold text-emerald-300">
                  <span class="sl-out absolute inset-0 text-left" style="--d: 2.6s">3 نتائج</span>
                  <span class="sl-fade absolute inset-0 text-left" style="--d: 2.6s">1 نتيجة</span>
                </span>
              </div>
              <div v-if="f === 3" class="mt-2 h-[38px] rounded-xl border-2 border-sky-400/60 bg-slate-800 flex items-center gap-2 px-3 text-[17px] font-bold text-white">
                🔍 <span class="typing">ذكاء</span>
              </div>
              <ul class="mt-2 flex flex-col gap-2">
                <li v-for="(b, i) in books" :key="b" class="h-[40px] rounded-xl bg-white/10 flex items-center justify-between px-4 text-[17px] font-bold text-white"
                    :class="f === 3 && i !== 1 ? 'fade-away' : 'sl-in'" :style="{ '--d': f === 2 ? `${0.8 + i * 0.25}s` : '2.6s' }">
                  <span>📘 {{ b }}</span>
                  <span v-if="i === 0" class="text-[14px] text-amber-300">★ مميز</span>
                </li>
              </ul>
              <span class="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-rose-500 text-white text-[18px] font-black"
                    :class="{ like: f === 3 }">
                <Heart class="w-5 h-5" />
                <template v-if="f === 2">اضغط هنا</template>
                <template v-else>أعجبني
                  <span class="relative inline-block w-[22px] h-[26px]">
                    <span class="sl-out absolute inset-0" style="--d: 3.6s">3</span>
                    <span class="sl-fade absolute inset-0" style="--d: 3.6s"><span class="sl-out absolute inset-0" style="--d: 4.4s">4</span></span>
                    <span class="sl-fade absolute inset-0" style="--d: 4.4s">5</span>
                  </span>
                </template>
              </span>
              <span v-if="f === 3" class="sl-pop absolute left-[398px] top-[386px] text-[30px]" style="--d: 3.4s">👆</span>
            </div>
          </div>

          <!-- explanation + code -->
          <div class="absolute left-[680px] top-[212px] w-[540px]" dir="rtl">
            <div class="sl-in rounded-2xl border-2 px-5 py-3" :class="stages[f - 1]!.box" style="--d: .3s">
              <div class="text-[22px] font-black text-white">{{ stages[f - 1]!.title }}</div>
              <p class="text-[18px] font-bold text-slate-200 leading-snug">{{ stages[f - 1]!.desc }}</p>
            </div>
            <pre class="sl-in mt-3 rounded-2xl border-2 border-white/10 bg-black/60 px-5 py-3 font-mono text-[16px] leading-[22px] text-slate-200 whitespace-pre" style="--d: 1s" dir="ltr">{{ isolateArabic(stages[f - 1]!.code) }}</pre>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

// Wrap each Arabic run in RLI…PDI so the surrounding tags in the LTR code keep their order
const isolateArabic = (code: string) => code.replace(/[؀-ۿ][؀-ۿ ]*[؀-ۿ]|[؀-ۿ]/g, run => `⁧${run}⁩`)

const roles = [
  { name: 'HTML', term: 'البنية', icon: '🏗️', analogy: 'هيكل المبنى', cls: 'border-orange-400/70 bg-orange-950/40', text: 'text-orange-300',
    role: 'يحدد بنية (هيكل) صفحة الويب، ويصف عناصر مثل العناوين والفقرات والصور والروابط.' },
  { name: 'CSS', term: 'المظهر', icon: '🎨', analogy: 'الديكور الداخلي والخارجي للمبنى', cls: 'border-sky-400/70 bg-sky-950/45', text: 'text-sky-300',
    role: 'يحدد مظهر صفحة الويب: الألوان، والتخطيط، والحجم، والخطوط.' },
  { name: 'JavaScript', term: 'السلوك', icon: '⚡', analogy: 'الكهرباء والسباكة في المبنى', cls: 'border-yellow-400/70 bg-yellow-950/30', text: 'text-yellow-300',
    role: 'يضيف السلوك والتفاعلية: استجابات عند الضغط على الأزرار، وتحديث جزء فقط من الشاشة.' },
]

const books = ['كتاب البرمجة للمبتدئين', 'أسرار الذكاء الاصطناعي', 'رحلة في عالم الويب']

const stages = [
  {
    label: 'HTML فقط', title: '🏗️ الهيكل', on: 'border-orange-400 bg-orange-600/30 text-white', box: 'border-orange-400/60 bg-orange-950/40',
    desc: 'يحدد HTML المحتوى والهيكل. بدون CSS يعرض المتصفح الصفحة بشكله الافتراضي البسيط.',
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
    label: 'HTML + CSS', title: '🎨 + التنسيق', on: 'border-sky-400 bg-sky-600/30 text-white', box: 'border-sky-400/60 bg-sky-950/40',
    desc: 'يضيف CSS الألوان والتخطيط والخطوط. المحتوى نفسه لم يتغير، لكن مظهره أصبح منسقًا.',
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
    label: '+ JavaScript', title: '⚡ + السلوك', on: 'border-yellow-400 bg-yellow-600/30 text-white', box: 'border-yellow-400/60 bg-yellow-950/30',
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
</script>

<style scoped>
.page-plain { font-family: 'Times New Roman', serif; }
.typing { display: inline-block; clip-path: inset(0 0 0 100%); animation: type .9s steps(4) 1.4s forwards; }
@keyframes type { to { clip-path: inset(0 0 0 0) } }
.fade-away { animation: away .5s ease var(--d) forwards; }
@keyframes away { to { opacity: .12 } }
.like { animation: like .25s ease 3.6s 1, like .25s ease 4.4s 1; }
@keyframes like { 50% { transform: scale(.9); filter: brightness(1.3) } }
</style>
