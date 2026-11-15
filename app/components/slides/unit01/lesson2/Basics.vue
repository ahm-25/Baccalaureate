<template>
  <!-- Lesson 1-2 basics. f = 0 fixed rules vs learning from data, 1 what AI is,
       2 AI around you, 3 how AI / ML / DL / GenAI relate. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: rules vs data ───── -->
      <div v-if="f === 0" key="rules" class="absolute top-[150px] inset-x-0 flex justify-center gap-8" dir="rtl">
        <!-- traditional programming -->
        <div class="sl-in w-[540px] h-[410px] rounded-3xl border-2 border-slate-500/60 bg-slate-900/80 px-7 pt-5" style="--d: .3s">
          <div class="text-[28px] font-black text-slate-100 mb-1">👨‍💻 البرمجة التقليدية</div>
          <p class="text-[18px] font-bold text-slate-400 mb-4">المبرمج يكتب قواعد ثابتة صريحة</p>
          <div class="rounded-2xl bg-slate-950 border border-white/10 px-5 py-4 font-mono text-[19px] leading-[1.9] text-slate-100" dir="rtl">
            <div v-for="(l, i) in rules" :key="l" class="type-line" :style="{ '--d': `${0.9 + i * 0.7}s` }">
              <span class="text-sky-300">لو</span> {{ l.if }} <span class="text-sky-300">←</span> <span class="text-amber-200">{{ l.then }}</span>
            </div>
          </div>
          <div class="sl-in mt-4 rounded-2xl border-2 border-rose-400/50 bg-rose-950/40 px-4 py-2.5 text-[18px] font-bold text-rose-100" style="--d: 3.4s">
            ✗ حالة جديدة لم يكتب لها قاعدة؟ لا يعرف ماذا يفعل
          </div>
        </div>

        <!-- AI -->
        <div class="sl-in w-[540px] h-[410px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/30 px-7 pt-5" style="--d: 4s">
          <div class="text-[28px] font-black text-emerald-200 mb-1">🤖 الذكاء الاصطناعي</div>
          <p class="text-[18px] font-bold text-slate-300 mb-4">يتعلم من ملايين الأمثلة والبيانات</p>
          <div class="relative h-[150px]" dir="ltr">
            <div v-for="(e, i) in examples" :key="i" class="ex-dot" :style="{ top: `${e.y}px`, '--d': `${4.6 + i * 0.25}s` }">{{ e.icon }}</div>
            <div class="absolute right-[10px] top-[22px] w-[106px] h-[106px] rounded-full border-4 border-emerald-400 bg-emerald-900/70 flex items-center justify-center text-5xl brain">🧠</div>
          </div>
          <div class="sl-in mt-1 text-center text-[19px] font-black text-emerald-100" style="--d: 6.4s">يستنتج الأنماط بنفسه</div>
          <div class="sl-in mt-3 rounded-2xl border-2 border-emerald-400/60 bg-emerald-900/40 px-4 py-2.5 text-[18px] font-bold text-emerald-50" style="--d: 7s">
            ✓ من غير ما يتبرمج خطوة بخطوة، فيتعامل مع حالات جديدة
          </div>
        </div>
      </div>

      <!-- ───── f1: what AI is ───── -->
      <div v-else-if="f === 1" key="def" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[160px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-sky-400/60 px-9 py-5 max-w-[1120px] text-center text-[26px] font-bold text-white leading-relaxed" style="--d: .3s">
            <span class="text-sky-300 font-black">الذكاء الاصطناعي (AI)</span>: مجال واسع يضم أنظمة حاسوبية تستطيع تنفيذ
            <span class="sl-hl-amber">مهام تتطلب عادةً ذكاءً بشريًا</span>، مثل التعلم من البيانات، والتنبؤ، والتعرف على الأنماط، وتوليد المحتوى، واتخاذ القرارات أو دعمها.
          </div>
        </div>
        <div class="absolute top-[360px] inset-x-0 text-center sl-in text-[22px] font-black text-slate-300" style="--d: 1.8s">أمثلة لمهام ينفذها الذكاء الاصطناعي:</div>
        <div class="absolute top-[410px] inset-x-0 flex justify-center gap-5">
          <div v-for="(t, i) in tasks" :key="t.text" class="sl-pop w-[196px] h-[130px] rounded-3xl border-2 border-white/15 bg-slate-900/85 flex flex-col items-center justify-center gap-2"
               :style="{ '--d': `${2.2 + i * 0.35}s` }">
            <span class="text-5xl">{{ t.icon }}</span>
            <span class="text-[20px] font-black text-white">{{ t.text }}</span>
          </div>
        </div>
      </div>

      <!-- ───── f2: AI around you ───── -->
      <div v-else-if="f === 2" key="daily" class="absolute top-[150px] inset-x-0 flex justify-center" dir="rtl">
        <div class="grid grid-cols-3 gap-5 w-[1140px]">
          <div v-for="(d, i) in daily" :key="d.title" class="sl-in h-[196px] rounded-3xl border-2 border-white/10 bg-slate-900/85 px-6 py-4 flex flex-col"
               :style="{ '--d': `${0.3 + i * 0.5}s` }">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-14 h-14 rounded-2xl flex items-center justify-center text-4xl" :class="d.bg">{{ d.icon }}</span>
              <span class="text-[24px] font-black text-white">{{ d.title }}</span>
            </div>
            <p class="text-[19px] font-bold text-slate-200 leading-snug">{{ d.desc }}</p>
          </div>
        </div>
      </div>

      <!-- ───── f3: nested concepts ───── -->
      <div v-else key="nest" class="absolute inset-0">
        <div v-for="(c, i) in nest" :key="c.name" class="ring absolute rounded-[50%] border-4 sl-pop" :class="c.cls"
             :style="{ left: `${c.x}px`, top: `${c.y}px`, width: `${c.w}px`, height: `${c.h}px`, '--d': `${0.3 + i * 1.3}s` }">
          <div class="absolute inset-x-0 text-center font-black text-white leading-tight" :style="{ top: `${c.ty}px`, fontSize: `${c.fs}px` }" dir="rtl">
            {{ c.name }}
          </div>
        </div>
        <!-- side legend -->
        <div class="absolute left-[760px] top-[148px] w-[480px] flex flex-col gap-2" dir="rtl">
          <div v-for="(c, i) in nest" :key="c.name" class="sl-in flex items-start gap-3 rounded-2xl border-2 bg-slate-900/85 px-4 py-2" :class="c.border"
               :style="{ '--d': `${0.6 + i * 1.3}s` }">
            <span class="text-3xl">{{ c.icon }}</span>
            <div>
              <div class="text-[20px] font-black text-white">{{ c.name }}</div>
              <div class="text-[16px] font-bold text-slate-300 leading-snug">{{ c.desc }}</div>
            </div>
          </div>
          <div class="sl-in rounded-2xl border-2 border-amber-400/60 bg-amber-950/40 px-4 py-1.5 text-[14px] font-bold text-amber-100 leading-snug" style="--d: 6s">
            💡 هذه علاقة تعليمية مبسطة لتسهيل الفهم، وليست تسلسل احتواء صارمًا في كل حالة.
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
  { icon: '🤔', title: 'قواعد ثابتة… أم تعلم من البيانات؟', sub: 'الفرق بين البرمجة التقليدية والذكاء الاصطناعي' },
  { icon: '🤖', title: 'ما هو الذكاء الاصطناعي؟', sub: 'Artificial Intelligence · AI' },
  { icon: '📱', title: 'الذكاء الاصطناعي حواليك أكثر مما تتخيل!', sub: 'كم مرة تستخدمه يوميًا؟' },
  { icon: '🧠', title: 'العلاقة بين AI و ML و DL و GenAI', sub: 'فئات متداخلة' },
]
const rules = [
  { if: 'الرسالة فيها «جائزة»', then: 'Spam' },
  { if: 'الرسالة فيها «خصم 90%»', then: 'Spam' },
  { if: 'غير ذلك', then: 'رسالة عادية' },
]
const examples = [
  { icon: '📧', y: 10 }, { icon: '🖼️', y: 60 }, { icon: '🎤', y: 110 },
  { icon: '📧', y: 35 }, { icon: '🖼️', y: 85 }, { icon: '🎤', y: 20 }, { icon: '📧', y: 100 },
]
const tasks = [
  { icon: '🎤', text: 'التعرف على الكلام' },
  { icon: '📷', text: 'التعرف على الصور' },
  { icon: '🌍', text: 'الترجمة الآلية' },
  { icon: '📧', text: 'تصنيف الـ Spam' },
  { icon: '🛒', text: 'توصية المنتجات' },
]
const daily = [
  { icon: '📱', title: 'الهاتف الذكي', desc: 'المساعد الصوتي يتعرف على صوتك وينفذ أوامرك.', bg: 'bg-blue-500/25' },
  { icon: '📧', title: 'البريد الإلكتروني', desc: 'يصنف الرسائل المزعجة (Spam) ويبعدها عنك تلقائيًا.', bg: 'bg-orange-500/25' },
  { icon: '🎬', title: 'منصات الفيديو', desc: 'تقترح لك الفيديوهات التي قد تعجبك بناءً على مشاهداتك السابقة.', bg: 'bg-red-500/25' },
  { icon: '🛒', title: 'المتاجر الإلكترونية', desc: 'تقترح لك منتجات مشابهة لما تبحث عنه أو تشتريه.', bg: 'bg-teal-500/25' },
  { icon: '🌍', title: 'تطبيقات الترجمة', desc: 'تترجم النصوص وحتى الصور والصوت بلمح البصر.', bg: 'bg-purple-500/25' },
  { icon: '🚗', title: 'تطبيقات الخرائط', desc: 'تتنبأ بالزحام المروري وتقترح لك أسرع طريق للوصول.', bg: 'bg-green-500/25' },
]
const nest = [
  { name: 'الذكاء الاصطناعي (AI)', icon: '🤖', desc: 'المجال الأوسع للأنظمة الذكية', x: 40, y: 150, w: 680, h: 420, ty: 22, fs: 26,
    cls: 'border-sky-400 bg-sky-500/10', border: 'border-sky-400/60' },
  { name: 'التعلم الآلي (ML)', icon: '📊', desc: 'فرع من AI يتعلم من البيانات', x: 110, y: 215, w: 540, h: 335, ty: 20, fs: 23,
    cls: 'border-emerald-400 bg-emerald-500/10', border: 'border-emerald-400/60' },
  { name: 'التعلم العميق (DL)', icon: '🧠', desc: 'ML يعتمد على شبكات عصبية عميقة', x: 180, y: 278, w: 400, h: 254, ty: 18, fs: 21,
    cls: 'border-indigo-400 bg-indigo-500/15', border: 'border-indigo-400/60' },
  { name: '✨ الذكاء التوليدي (GenAI)', icon: '✨', desc: 'أنظمة تنشئ محتويات جديدة، وتعتمد غالبيتها الحديثة على التعلم العميق', x: 250, y: 338, w: 260, h: 170, ty: 62, fs: 19,
    cls: 'border-fuchsia-400 bg-fuchsia-500/20', border: 'border-fuchsia-400/60' },
]
</script>

<style scoped>
.type-line { opacity: 0; clip-path: inset(0 0 0 100%); animation: type .6s steps(14) var(--d) forwards; }
@keyframes type { from { opacity: 1; clip-path: inset(0 0 0 100%) } to { opacity: 1; clip-path: inset(0 0 0 0) } }

.ex-dot {
  position: absolute; left: 0; width: 44px; height: 44px; border-radius: .8rem; background: rgba(15,23,42,.9);
  border: 2px solid rgba(52,211,153,.6); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;
  opacity: 0; animation: exIn 1.4s cubic-bezier(.45,0,.25,1) var(--d) forwards;
}
@keyframes exIn { 0% { left: 0; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { left: 370px; top: 50px; opacity: 0; transform: scale(.4) } }
.brain { animation: brain 1s ease-in-out 5s 3; }
@keyframes brain { 50% { box-shadow: 0 0 40px rgba(52,211,153,.9); transform: scale(1.08) } }
</style>
