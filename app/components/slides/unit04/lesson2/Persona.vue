<template>
  <!-- User persona. f = 0 the definition: research / data about many users is summarised into one persona card,
       1 why use it: team discussion based on personal assumptions vs. on the needs of a pattern of users. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '👤' : '🤔'" :title="f === 0 ? 'شخصية المستخدم' : 'لماذا نستخدم شخصية المستخدم؟'"
                 :sub="f === 0 ? 'Persona — من هو المستخدم؟' : 'احتياجات المستخدمين… لا افتراضات الفريق'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + persona card ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <!-- crowd of users (research / data) -->
        <div class="absolute left-[70px] top-[190px] w-[180px] grid grid-cols-3 gap-2">
          <div v-for="(u, i) in crowd" :key="i" class="sl-pop w-[54px] h-[54px] rounded-2xl bg-slate-800/80 border-2 border-white/10 flex items-center justify-center text-[30px]"
               :style="{ '--d': `${0.3 + i * 0.08}s` }">{{ u }}</div>
        </div>
        <div class="sl-in absolute left-[60px] top-[440px] w-[200px] text-center text-[19px] font-black text-sky-200 whitespace-nowrap" style="--d: 1.3s" dir="rtl">📊 بحث أو بيانات</div>
        <div class="sl-fade absolute left-[262px] top-[318px] w-[70px] h-[4px]" style="--d: 1.4s">
          <div class="relative w-full h-full flow-r"><span class="ah ah-r ah-sky"></span></div>
        </div>

        <!-- persona card -->
        <div class="sl-in absolute left-[345px] top-[160px] w-[360px] h-[400px] rounded-3xl border-2 border-sky-400 bg-slate-900/90 px-5 py-4" style="--d: 1.6s" dir="rtl">
          <div class="flex items-center gap-4 pb-3 border-b-2 border-white/10">
            <div class="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center text-[40px] shrink-0">🧑</div>
            <div>
              <div class="text-[22px] font-black text-white">نوع من المستخدمين</div>
              <div class="mt-1.5 flex gap-1.5">
                <span class="w-[70px] h-[8px] rounded bg-slate-600"></span><span class="w-[44px] h-[8px] rounded bg-slate-700"></span>
              </div>
            </div>
          </div>
          <div class="mt-2 flex flex-col gap-2">
            <div v-for="(r, i) in fields" :key="r.t" class="sl-in h-[48px] rounded-xl border-2 flex items-center gap-3 px-3"
                 :class="r.cls" :style="{ '--d': `${2.2 + i * 0.45}s` }">
              <span class="text-[24px]">{{ r.i }}</span>
              <span class="text-[20px] font-black text-white whitespace-nowrap">{{ r.t }}</span>
              <span class="mr-auto w-[80px] h-[8px] rounded bg-white/15"></span>
            </div>
          </div>
        </div>

        <!-- definition -->
        <div class="sl-in absolute left-[740px] top-[160px] w-[470px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/50 px-7 py-5" style="--d: .4s" dir="rtl">
          <div class="text-[30px] font-black text-white">شخصية المستخدم <span class="text-[20px] text-slate-400 font-mono" dir="ltr">(Persona)</span></div>
          <p class="mt-2 text-[20px] font-bold text-slate-100 leading-snug">
            تمثيل لنوع من المستخدمين، يُبنى قدر الإمكان على <span class="sl-hl-amber font-black">بحث أو بيانات</span> عن أهدافهم واحتياجاتهم وسلوكهم وسياقهم وتحدياتهم.
          </p>
        </div>
        <div class="sl-in absolute left-[740px] top-[392px] w-[470px] rounded-2xl border-2 border-dashed border-amber-400/70 bg-amber-950/30 px-6 py-3" style="--d: 4.8s" dir="rtl">
          <p class="text-[20px] font-bold text-amber-50 leading-snug">➕ وتُضاف معلومات مثل <span class="font-black text-amber-300">العمر أو المهنة</span> فقط إذا كانت مهمة للتصميم.</p>
        </div>
        <div class="sl-in absolute left-[740px] top-[496px] w-[470px] text-[18px] font-bold text-slate-400 leading-snug" style="--d: 5.6s" dir="rtl">
          شخصية المستخدم تجسّد أهداف واحتياجات نمط أو فئة من المستخدمين المستهدفين.
        </div>
      </div>

      <!-- ───── f1: assumptions vs. persona ───── -->
      <div v-else key="why" class="absolute inset-0" dir="rtl">
        <div v-for="(p, i) in panels" :key="p.head" class="sl-in absolute top-[158px] w-[555px] h-[320px] rounded-3xl border-2 px-6 py-4 flex flex-col"
             :class="p.cls" :style="{ left: `${p.x}px`, '--d': `${0.3 + i * 2.6}s` }">
          <div class="text-[24px] font-black text-white whitespace-nowrap">{{ p.head }}</div>
          <div class="relative flex-1">
            <!-- heads -->
            <div class="absolute bottom-[8px] inset-x-0 flex justify-center items-end gap-10">
              <span v-for="(h, j) in p.heads" :key="j" class="text-[46px] leading-none">{{ h }}</span>
            </div>
            <!-- persona card on the table -->
            <div v-if="p.persona" class="absolute left-1/2 top-[86px] -ml-[56px] w-[112px]">
              <div class="sl-pop w-[112px] h-[62px] rounded-xl border-2 border-sky-300 bg-sky-900 flex items-center justify-center gap-1.5" :style="{ '--d': `${1 + i * 2.6}s` }">
                <span class="text-[26px]">🧑</span><span class="text-[15px] font-black text-sky-100 whitespace-nowrap">Persona</span>
              </div>
            </div>
            <!-- bubbles -->
            <div v-for="(b, j) in p.bubbles" :key="b.t" class="absolute" :style="{ left: `${b.x}px`, top: `${b.y}px` }">
              <div class="sl-pop px-3.5 py-1.5 rounded-2xl text-[17px] font-black whitespace-nowrap border-2" :class="p.bubble"
                   :style="{ '--d': `${1.2 + i * 2.6 + j * 0.35}s` }">{{ b.t }}</div>
            </div>
          </div>
          <div class="sl-pop self-center px-5 py-2 rounded-2xl text-[20px] font-black whitespace-nowrap" :class="p.resCls"
               :style="{ '--d': `${2.3 + i * 2.6}s` }">{{ p.result }}</div>
        </div>
        <div class="absolute top-[498px] inset-x-0 flex justify-center">
          <div class="sl-in rounded-2xl border-2 border-amber-400/70 bg-amber-950/40 px-8 py-3 text-[22px] font-black text-amber-100" style="--d: 6s">
            ⚠️ لكنها <span class="text-amber-300">ليست خطوة إلزامية</span> في كل مشروع.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const crowd = ['👩', '👨', '🧓', '👧', '🧑', '👵', '👦', '👩', '👴', '🧑', '👨', '👧']
const fields = [
  { i: '🎯', t: 'الأهداف', cls: 'border-sky-400/50 bg-sky-950/50' },
  { i: '🧩', t: 'الاحتياجات', cls: 'border-violet-400/50 bg-violet-950/50' },
  { i: '🔁', t: 'السلوك', cls: 'border-emerald-400/50 bg-emerald-950/40' },
  { i: '📍', t: 'سياق الاستخدام', cls: 'border-amber-400/50 bg-amber-950/40' },
  { i: '⚠️', t: 'التحديات', cls: 'border-rose-400/50 bg-rose-950/40' },
]

/* x positions are absolute stage px; RTL reading: the "without" panel sits on the right */
const panels = [
  {
    head: '❌ الاعتماد على الافتراضات الشخصية', x: 655, cls: 'border-rose-400/60 bg-rose-950/30',
    heads: ['🙂', '😐', '🤨'], persona: false, bubble: 'border-rose-300/60 bg-slate-800 text-rose-100',
    bubbles: [{ t: '«أنا أحب هذا الشكل»', x: 290, y: 14 }, { t: '«أظن أن الجميع يريد…»', x: 20, y: 52 }, { t: '«في رأيي…»', x: 330, y: 96 }],
    result: 'قرارات مبنية على الذوق والافتراضات', resCls: 'bg-rose-500/30 border-2 border-rose-400 text-rose-50',
  },
  {
    head: '✅ مناقشة احتياجات نمط من المستخدمين', x: 70, cls: 'border-emerald-400/60 bg-emerald-950/30',
    heads: ['🙂', '😊', '🙂'], persona: true, bubble: 'border-emerald-300/60 bg-slate-800 text-emerald-100',
    bubbles: [{ t: '«ماذا يحتاج هذا المستخدم؟»', x: 250, y: 10 }, { t: '«ما سياق استخدامه؟»', x: 20, y: 34 }],
    result: 'قرارات مبنية على احتياجات المستخدمين', resCls: 'bg-emerald-500/30 border-2 border-emerald-400 text-emerald-50',
  },
]
</script>

<style scoped>
.flow-r { background: repeating-linear-gradient(90deg, #7dd3fc 0 10px, transparent 10px 16px); animation: flowR .8s linear infinite; }
@keyframes flowR { to { background-position: 16px 0 } }
.ah { position: absolute; top: -6px; width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; }
.ah-r { right: -10px; border-left: 12px solid; }
.ah-sky { border-left-color: #7dd3fc; }
</style>
