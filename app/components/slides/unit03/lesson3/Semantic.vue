<template>
  <!-- Semantic HTML. f = 0 the elements that describe each part of the page, 1 what a screen reader announces
       for plain <div> boxes vs semantic elements, 2 the two benefits (accessibility, search engines). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: the elements ───── -->
      <div v-if="f === 0" key="tags" class="absolute inset-0">
        <!-- page outline -->
        <div class="sl-in absolute left-[80px] top-[150px] w-[500px] h-[410px] rounded-2xl border-2 border-white/20 bg-slate-900/80 p-4 flex flex-col gap-2.5" style="--d: .2s" dir="rtl">
          <div v-for="(p, i) in parts" :key="p.tag" class="relative rounded-xl border-2 border-dashed flex items-center justify-between px-4"
               :class="[p.h, p.cls]">
            <span class="text-[18px] font-bold text-slate-200">{{ p.content }}</span>
            <code class="sl-pop px-2.5 py-1 rounded-lg bg-black/60 font-mono text-[18px] font-black" :class="p.text" dir="ltr"
                  :style="{ '--d': `${1.2 + i * 0.9}s` }">{{ p.tag }}</code>
          </div>
        </div>
        <!-- definition + meaning of each tag -->
        <div class="absolute left-[620px] top-[150px] w-[590px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in sl-card border-orange-400/60 px-6 py-3.5 text-[21px] font-bold text-white leading-snug" style="--d: .6s">
            <span class="sl-hl-amber font-black">HTML الدلالي (Semantic HTML)</span>: استخدام عناصر توضح <span class="text-orange-300">وظيفة</span> أجزاء الصفحة.
          </div>
          <div v-for="(p, i) in parts" :key="p.tag" class="sl-in h-[62px] rounded-2xl border-2 flex items-center gap-4 px-5" :class="p.cls"
               :style="{ '--d': `${1.2 + i * 0.9}s` }">
            <code class="w-[110px] font-mono text-[20px] font-black" :class="p.text" dir="ltr">{{ p.tag }}</code>
            <span class="text-[20px] font-bold text-white">{{ p.where }}</span>
          </div>
        </div>
      </div>

      <!-- ───── f1: what the screen reader says ───── -->
      <div v-else-if="f === 1" key="reader" class="absolute inset-0">
        <div class="absolute top-[148px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(m, mi) in modes" :key="m.title" class="sl-in w-[550px] h-[422px] rounded-3xl border-2 px-6 py-4 flex flex-col" :class="m.cls"
               :style="{ '--d': `${0.3 + mi * 0.5}s` }">
            <div class="text-[23px] font-black text-white">{{ m.title }}</div>
            <pre class="mt-2 rounded-xl bg-black/60 px-4 py-2 font-mono text-[17px] leading-[22px] text-slate-200" dir="ltr">{{ m.code }}</pre>
            <div class="mt-3 text-[17px] font-black text-slate-300">🔊 قارئ الشاشة يقول:</div>
            <div class="mt-1 flex flex-col gap-1.5">
              <p v-for="(line, li) in m.lines" :key="line" class="sl-in text-[17px] font-bold leading-snug" :class="m.say"
                 :style="{ '--d': `${1.4 + mi * 3.4 + li * 0.6}s` }">« {{ line }} »</p>
            </div>
            <p class="sl-pop mt-auto rounded-xl px-3 py-2 text-[17px] font-black leading-snug" :class="m.verdictCls" :style="{ '--d': `${4.2 + mi * 3.4}s` }">{{ m.verdict }}</p>
          </div>
        </div>
      </div>

      <!-- ───── f2: benefits ───── -->
      <div v-else key="benefits" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(b, i) in benefits" :key="b.title" class="sl-in w-[540px] h-[400px] rounded-3xl border-2 px-6 py-5 flex flex-col" :class="b.cls"
               :style="{ '--d': `${0.4 + i * 2}s` }">
            <span class="text-[50px] leading-none">{{ b.icon }}</span>
            <div class="mt-2 text-[26px] font-black text-white">{{ b.title }}</div>
            <p class="mt-2 text-[20px] font-bold text-slate-100 leading-snug" v-html="b.text"></p>
            <div class="sl-in mt-auto rounded-2xl border-2 border-dashed border-white/25 bg-black/30 px-4 py-3" :style="{ '--d': `${1.4 + i * 2}s` }">
              <div class="text-[17px] font-black text-slate-300">📖 {{ b.term }}</div>
              <p class="text-[17px] font-bold text-slate-200 leading-snug">{{ b.def }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const parts = [
  { tag: '<header>', content: 'الشعار واسم الموقع', where: 'في أعلى الصفحة', h: 'h-[64px]', cls: 'border-orange-400/60 bg-orange-950/40', text: 'text-orange-300' },
  { tag: '<nav>', content: 'الرئيسية • الأخبار • تواصل', where: 'للتنقل', h: 'h-[56px]', cls: 'border-sky-400/60 bg-sky-950/45', text: 'text-sky-300' },
  { tag: '<main>', content: 'المقالات والمحتوى الرئيسي', where: 'للمحتوى الرئيس', h: 'h-[160px]', cls: 'border-emerald-400/60 bg-emerald-950/40', text: 'text-emerald-300' },
  { tag: '<footer>', content: 'حقوق النشر والتواصل', where: 'في أسفل الصفحة', h: 'h-[56px]', cls: 'border-slate-400/60 bg-slate-800/60', text: 'text-slate-200' },
]

const modes = [
  {
    title: '📦 صناديق <div> عادية', cls: 'border-rose-400/60 bg-rose-950/30', say: 'text-rose-200',
    code: '<div>…</div>\n<div>…</div>\n<div>…</div>\n<div>…</div>',
    lines: ['مجموعة: الشعار واسم الموقع', 'مجموعة: الرئيسية • الأخبار • تواصل', 'مجموعة: المقالات والمحتوى الرئيسي', 'مجموعة: حقوق النشر والتواصل'],
    verdict: '✗ لا يعرف المستخدم أين القائمة وأين المحتوى الرئيسي، فيضطر لسماع الصفحة كلها.',
    verdictCls: 'border-2 border-rose-400 bg-rose-900/60 text-rose-50',
  },
  {
    title: '🏷️ HTML الدلالية', cls: 'border-emerald-400/60 bg-emerald-950/35', say: 'text-emerald-200',
    code: '<header>…</header>\n<nav>…</nav>\n<main>…</main>\n<footer>…</footer>',
    lines: ['منطقة الرأس: الشعار واسم الموقع', 'التنقل: الرئيسية • الأخبار • تواصل', 'المحتوى الرئيسي: المقالات', 'معلومات المحتوى: حقوق النشر'],
    verdict: '✓ يعلن وظيفة كل جزء، ويستطيع المستخدم القفز مباشرة إلى «المحتوى الرئيسي» أو «التنقل».',
    verdictCls: 'border-2 border-emerald-400 bg-emerald-800/60 text-emerald-50',
  },
]

const benefits = [
  { icon: '♿', title: '① إمكانية الوصول', cls: 'border-sky-400/60 bg-sky-950/45',
    text: 'يساعد HTML الدلالي <span class="text-sky-300 font-black">قارئ الشاشة</span> على فهم بنية الصفحة والتنقل فيها، مع الحاجة إلى ممارسات وصول أخرى أيضًا.',
    term: 'إمكانية الوصول (Accessibility)', def: 'تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها، بمن فيهم ذوو الإعاقة.' },
  { icon: '🔎', title: '② فهم محركات البحث للمحتوى', cls: 'border-amber-400/60 bg-amber-950/35',
    text: 'قد يساعد HTML الدلالي محركات البحث على فهم بنية المحتوى بصورة أفضل، <span class="text-rose-300 font-black underline">لكنه لا يضمن ترتيبًا أعلى</span>.',
    term: 'SEO (تحسين محركات البحث)', def: 'ممارسات تجعل الصفحة أيسر في الفهرسة والظهور في نتائج البحث.' },
]

const head = computed(() => [
  { icon: '🏷️', title: 'HTML الدلالية', sub: 'عناصر تحمل معنى، لا مجرد صناديق' },
  { icon: '🔊', title: 'نفس الصفحة… بطريقتين', sub: 'ماذا يسمع مستخدم كفيف من قارئ الشاشة؟' },
  { icon: '⭐', title: 'فوائد HTML الدلالية', sub: '' },
][props.f]!)
</script>
