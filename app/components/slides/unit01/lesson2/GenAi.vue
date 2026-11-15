<template>
  <!-- Generative AI and hallucination. f = 0 GenAI definition (prompt → new content), 1 a prompt being answered,
       2 hallucination: a confident wrong answer, 3 invented sources, 4 how to verify. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: prompt → GenAI → outputs ───── -->
      <div v-if="f === 0" key="gen" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in sl-card border-fuchsia-400/60 px-8 py-4 max-w-[1140px] text-center text-[23px] font-bold text-white leading-relaxed" style="--d: .2s">
            <span class="text-fuchsia-300 font-black">الذكاء الاصطناعي التوليدي</span>: أنظمة
            <span class="sl-hl-amber">تُنشئ محتوى جديدًا</span> مثل النصوص والصور والصوت والبرمجيات، اعتمادًا على الأنماط التي تعلمتها من بيانات التدريب.
            وتعتمد غالبية أنظمته الحديثة على نماذج التعلم العميق.
          </div>
        </div>
        <!-- prompt (right) -->
        <div class="absolute left-[930px] top-[350px] w-[300px] sl-in" style="--d: 1.6s" dir="rtl">
          <div class="text-[18px] font-black text-sky-200 mb-2">💬 Prompt (الموجه)</div>
          <div class="rounded-2xl border-2 border-sky-400/60 bg-slate-900/90 px-4 py-3 text-[18px] font-bold text-white">اكتب قصة قصيرة عن طالب يتعلم البرمجة</div>
        </div>
        <div class="flow-dot" style="--d: 2.4s"></div>
        <div class="absolute left-[800px] top-[400px] text-5xl text-slate-500 sl-fade" style="--d: 2.2s">←</div>
        <!-- GenAI -->
        <div class="absolute left-[560px] top-[352px] w-[170px] h-[150px] rounded-[2rem] border-4 border-fuchsia-400 bg-fuchsia-950/70 flex flex-col items-center justify-center sl-pop gen-core" style="--d: 2s">
          <span class="text-[56px] leading-none">✨</span>
          <span class="text-[24px] font-black text-white mt-1">GenAI</span>
        </div>
        <!-- outputs (left) -->
        <div class="absolute left-[60px] top-[330px] w-[420px] grid grid-cols-2 gap-3" dir="rtl">
          <div v-for="(o, i) in outputs" :key="o.name" class="sl-pop h-[84px] rounded-2xl border-2 border-white/15 bg-slate-900/90 flex items-center justify-center gap-3"
               :style="{ '--d': `${3.4 + i * 0.35}s` }">
            <span class="text-4xl">{{ o.icon }}</span>
            <span class="text-[21px] font-black text-white">{{ o.name }}</span>
          </div>
        </div>
        <div class="absolute left-[490px] top-[410px] text-4xl text-slate-500 sl-fade" style="--d: 3.2s">←</div>
      </div>

      <!-- ───── f1: a prompt being answered ───── -->
      <div v-else-if="f === 1" key="demo" class="absolute top-[150px] inset-x-0 flex justify-center" dir="rtl">
        <div class="w-[1000px] rounded-3xl border-2 border-white/10 bg-slate-900/85 px-7 py-5">
          <div class="flex justify-start mb-4">
            <div class="sl-in max-w-[640px] rounded-2xl rounded-tr-sm bg-sky-600 px-5 py-3 text-[21px] font-bold text-white" style="--d: .3s">
              اكتب لي قصة قصيرة عن طالب يتعلم البرمجة
            </div>
          </div>
          <div class="flex justify-end gap-3">
            <div class="relative rounded-2xl rounded-tl-sm bg-slate-800 border border-fuchsia-400/40 px-5 py-4 w-[820px] h-[230px] overflow-hidden">
              <div class="text-[16px] font-black text-fuchsia-300 mb-1">✨ GenAI</div>
              <p class="story text-[20px] font-bold text-slate-100 leading-[1.75]">{{ story }}</p>
            </div>
            <span class="w-11 h-11 rounded-full bg-fuchsia-600 flex items-center justify-center text-2xl shrink-0">✨</span>
          </div>
          <div class="sl-in mt-4 text-center text-[20px] font-black text-amber-200" style="--d: 7s">
            لم يبحث عن قصة محفوظة وينسخها، بل أنشأ محتوى جديدًا بناءً على الأنماط التي تعلمها
          </div>
        </div>
      </div>

      <!-- ───── f2, f3: hallucination chats ───── -->
      <div v-else-if="f <= 3" :key="`hal-${f}`" class="absolute inset-0" dir="rtl">
        <div class="absolute left-[150px] top-[150px] w-[980px] rounded-3xl border-2 border-white/10 bg-slate-900/85 px-7 py-5">
          <div class="flex justify-start mb-4">
            <div class="sl-in rounded-2xl rounded-tr-sm bg-sky-600 px-5 py-3 text-[21px] font-bold text-white" style="--d: .3s">{{ chats[f - 2]!.q }}</div>
          </div>
          <div class="flex justify-end gap-3">
            <div class="relative rounded-2xl rounded-tl-sm bg-slate-800 border border-white/15 px-5 py-4 w-[800px]">
              <p class="type-ans text-[21px] font-bold text-slate-100 leading-[1.7]" style="--d: 1s" v-html="chats[f - 2]!.a"></p>
              <!-- f3: the 'sources' get checked one by one -->
              <div v-if="f === 3" class="mt-3 flex flex-col gap-2">
                <div v-for="(s, i) in fakeSources" :key="s" class="sl-in flex items-center gap-3 rounded-xl bg-slate-900/80 border border-white/10 px-4 py-2"
                     :style="{ '--d': `${2.6 + i * 0.4}s` }">
                  <span class="text-xl">📖</span>
                  <span class="flex-1 text-[17px] font-bold text-slate-200">{{ s }}</span>
                  <span class="sl-pop px-2.5 py-0.5 rounded-lg bg-rose-600/80 text-white text-[15px] font-black whitespace-nowrap" :style="{ '--d': `${4.6 + i * 0.6}s` }">🔍 غير موجود!</span>
                </div>
              </div>
            </div>
            <span class="w-11 h-11 rounded-full bg-slate-600 flex items-center justify-center text-2xl shrink-0">🤖</span>
          </div>
          <div v-if="f === 2" class="mt-4 flex justify-center">
            <span class="stamp sl-pop px-6 py-2 rounded-2xl border-4 border-rose-400 bg-rose-950/80 text-[26px] font-black text-rose-200" style="--d: 4.2s">
              ✗ تبدو طبيعية جدًا… لكنها خاطئة تمامًا! (العاصمة هي الرباط)
            </span>
          </div>
        </div>
        <div class="absolute top-[490px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/60 px-7 py-3 max-w-[1100px] text-center text-[21px] font-bold text-white" :style="{ '--d': f === 2 ? '5.4s' : '7s' }">
            <template v-if="f === 2">
              <span class="text-amber-300 font-black">الهلوسة (Hallucination)</span>: ينتج الذكاء الاصطناعي التوليدي محتوى
              <span class="sl-hl-amber">يبدو معقولًا ومقنعًا جدًا</span>، لكنه غير صحيح واقعيًا أو لا يعتمد على حقائق فعلية.
            </template>
            <template v-else>
              الذكاء الاصطناعي «اخترع» المصادر لتبدو إجابته مكتملة 🕵️ لا تصدق الإجابة لمجرد أنها تبدو ذكية
            </template>
          </div>
        </div>
      </div>

      <!-- ───── f4: verify ───── -->
      <div v-else key="verify" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[160px] inset-x-0 flex justify-center items-center gap-3">
          <template v-for="(s, i) in flow" :key="s.text">
            <div class="sl-in w-[230px] h-[130px] rounded-3xl border-2 flex flex-col items-center justify-center gap-2" :class="s.cls"
                 :style="{ '--d': `${0.3 + i * 0.7}s` }">
              <span class="text-5xl">{{ s.icon }}</span>
              <span class="text-[20px] font-black text-white text-center leading-tight">{{ s.text }}</span>
            </div>
            <span v-if="i < flow.length - 1" class="sl-fade text-4xl text-slate-500" :style="{ '--d': `${0.6 + i * 0.7}s` }">←</span>
          </template>
        </div>
        <div class="absolute top-[330px] inset-x-0 flex justify-center">
          <div class="w-[900px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-8 py-4">
            <div class="sl-in text-[22px] font-black text-emerald-200 mb-2" style="--d: 3.2s">☑️ قائمة التحقق السريعة</div>
            <div v-for="(c, i) in checklist" :key="c" class="sl-in flex items-center gap-3 text-[20px] font-bold mb-1.5"
                 :class="i === 3 ? 'text-amber-200' : 'text-white'" :style="{ '--d': `${3.6 + i * 0.6}s` }">
              <span class="text-emerald-300">✓</span> {{ c }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { icon: '✨', title: 'الذكاء الاصطناعي التوليدي', sub: 'Generative AI · أمثلة: ChatGPT وأدوات توليد الصور' },
  { icon: '✨', title: 'جرّب: ماذا يفعل GenAI بالـ Prompt؟', sub: 'محاكاة تعليمية' },
  { icon: '⚠️', title: 'هل الذكاء الاصطناعي دائمًا على حق؟', sub: 'الهلوسة' },
  { icon: '⚠️', title: 'مثال آخر على الهلوسة', sub: 'مصادر تبدو حقيقية… لكنها غير موجودة' },
  { icon: '🕵️', title: 'كيف تتحقق من مخرجات AI؟', sub: 'لا تعتمد على AI وحده كمرجع نهائي' },
]
const outputs = [
  { icon: '📝', name: 'نص' }, { icon: '🎨', name: 'صورة' },
  { icon: '🎵', name: 'صوت' }, { icon: '💻', name: 'كود' },
]
const story = 'في مدينة صغيرة، كان هناك طالب يدعى أحمد يشعر بالفضول دائمًا تجاه كيفية عمل ألعاب الفيديو. في يوم من الأيام، فتح حاسوبه وبدأ بتعلم أول لغة برمجة. كانت الأخطاء كثيرة في البداية، لكن مع كل سطر جديد كان يشعر وكأنه يمتلك قوة سحرية لصنع عوالم جديدة… وبعد شهور تمكن من إطلاق لعبته الأولى!'
const chats = [
  { q: 'ما هي عاصمة المغرب؟', a: 'عاصمة المغرب هي <span class="text-rose-300 font-black">القاهرة</span>، وتعتبر من أكبر المدن في أفريقيا وتتميز بتاريخها العريق…' },
  { q: 'اكتب لي عن حدث تاريخي مع ذكر المصادر', a: 'وقع هذا الحدث عام 1352 وغيّر مجرى التاريخ في المنطقة… ويمكنك الرجوع إلى المصادر التالية:' },
]
const fakeSources = ['كتاب «أسرار القرن الرابع عشر» — د. سامي النجار، 1998', 'كتاب «تاريخ الممالك المنسية» — طبعة 2005']
const flow = [
  { icon: '🤖', text: 'مخرجات AI', cls: 'border-slate-400/60 bg-slate-800/80' },
  { icon: '❓', text: 'هل المعلومة مهمة؟', cls: 'border-amber-400/60 bg-amber-950/40' },
  { icon: '🔍', text: 'قارن وراجع المصدر', cls: 'border-sky-400/60 bg-sky-950/50' },
  { icon: '✅', text: 'اعتمد الإجابة', cls: 'border-emerald-400/60 bg-emerald-950/50' },
]
const checklist = [
  'تحقق من المصدر الأصلي للمعلومة.',
  'قارن الإجابة مع مصادر أخرى موثوقة.',
  'تأكد من الأرقام والإحصائيات والتواريخ بشكل خاص.',
  'لا تعتمد على AI وحده كمرجع نهائي في المعلومات المهمة.',
]
</script>

<style scoped>
.flow-dot {
  position: absolute; top: 418px; left: 920px; width: 22px; height: 22px; border-radius: 9999px; background: #38bdf8;
  box-shadow: 0 0 16px #38bdf8; opacity: 0; animation: flow 1s ease-in var(--d) forwards;
}
@keyframes flow { 0% { left: 920px; opacity: 0 } 20% { opacity: 1 } 100% { left: 740px; opacity: 0 } }
.gen-core { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards, glow 1s ease-in-out 2.8s 2; }
@keyframes glow { 50% { box-shadow: 0 0 50px rgba(232,121,249,.9); transform: scale(1.06) } }

/* text revealed as if typed (RTL: reveal from the right) */
.story { clip-path: inset(0 0 100% 0); animation: reveal 5.5s steps(40) 1s forwards; }
@keyframes reveal { to { clip-path: inset(0 0 0 0) } }
.type-ans { opacity: 0; animation: typeIn 2s steps(30) var(--d) forwards; clip-path: inset(0 0 0 100%); }
@keyframes typeIn { from { opacity: 1; clip-path: inset(0 0 0 100%) } to { opacity: 1; clip-path: inset(0 0 0 0) } }
</style>
