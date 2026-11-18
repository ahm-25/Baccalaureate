<template>
  <!-- Privacy issues. f = 0 surveillance through face recognition, 1 mass collection of personal data. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🔐" title="قضايا الخصوصية" :sub="f === 0 ? '① المراقبة عبر تقنية التعرف على الوجه' : '② الجمع الجماعي للبيانات الشخصية'" />

    <!-- privacy definition stays on both frames -->
    <div class="absolute left-[765px] top-[160px] w-[465px]" dir="rtl">
      <div class="sl-in rounded-3xl border-2 border-teal-400/60 bg-slate-900/85 px-6 py-4" style="--d: .3s">
        <div class="text-[17px] font-black text-teal-300 mb-1">🔐 الخصوصية</div>
        <p class="text-[22px] font-black text-white leading-snug">التحكم في البيانات الشخصية التي تتم مشاركتها.</p>
      </div>
    </div>

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: surveillance ───── -->
      <div v-if="f === 0" key="cam" class="absolute inset-0">
        <div class="absolute left-[50px] top-[160px] w-[680px] h-[410px] rounded-3xl border-2 border-white/10 bg-slate-950/50 overflow-hidden" dir="rtl">
          <!-- street -->
          <div class="absolute bottom-0 inset-x-0 h-[120px] bg-slate-800/60 border-t-2 border-slate-600"></div>
          <div class="absolute bottom-[56px] inset-x-0 h-[4px] street-line"></div>
          <!-- cameras -->
          <div v-for="(c, i) in cams" :key="i" class="absolute top-[30px] flex flex-col items-center sl-pop" :style="{ left: `${c}px`, '--d': `${0.4 + i * 0.3}s` }">
            <span class="text-[42px] leading-none">📹</span>
            <span class="cone mt-1" :style="{ '--d': `${camAt[i]}s` }"></span>
          </div>
          <!-- the walker -->
          <div class="walker absolute bottom-[70px] flex flex-col items-center">
            <span class="tag sl-pop px-2.5 py-0.5 rounded-lg bg-rose-500 text-white text-[14px] font-black whitespace-nowrap mb-1" style="--d: 1.8s">تم التعرف: أحمد</span>
            <span class="w-[58px] h-[58px] rounded-full bg-sky-600/80 border-2 border-sky-300 flex items-center justify-center text-[30px]">🚶</span>
          </div>
          <!-- tracked path: one log entry under each camera -->
          <span v-for="(p, i) in pathLog" :key="p" class="absolute bottom-[16px] sl-pop px-2 py-0.5 rounded-md bg-slate-900 border border-rose-400/60 text-[14px] font-black text-rose-200 whitespace-nowrap"
                :style="{ left: `${cams[i]! - 18}px`, '--d': `${camAt[i]! + 0.3}s` }">📍 {{ p }}</span>
        </div>
        <div class="absolute left-[765px] top-[300px] w-[465px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in rounded-3xl border-2 border-rose-400/50 bg-rose-950/40 px-6 py-4" style="--d: 1.4s">
            <div class="text-[17px] font-black text-rose-300 mb-1">① المراقبة عبر التعرف على الوجه</div>
            <p class="text-[20px] font-bold text-slate-100 leading-relaxed">يمكن للكاميرات في الأماكن العامة <span class="sl-hl-amber font-black">التعرف على الأفراد وتتبعهم</span>.</p>
          </div>
          <div class="sl-in rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 text-[18px] font-bold text-slate-200 leading-snug" style="--d: 6s">
            🤔 هل وافق أحمد على أن يُعرف أين ذهب ومتى؟
          </div>
        </div>
      </div>

      <!-- ───── f1: mass data collection ───── -->
      <div v-else key="data" class="absolute inset-0">
        <div class="absolute left-[50px] top-[160px] w-[680px] h-[410px] rounded-3xl border-2 border-white/10 bg-slate-950/50 overflow-hidden" dir="rtl">
          <!-- online activity -->
          <div class="absolute top-[24px] right-[24px] w-[200px] flex flex-col gap-2.5">
            <div class="sl-pop flex items-center gap-2 text-[18px] font-black text-white mb-1" style="--d: .3s">
              <span class="w-[46px] h-[46px] rounded-full bg-sky-600/80 border-2 border-sky-300 flex items-center justify-center text-2xl">👤</span> أنت على الإنترنت
            </div>
            <div v-for="(a, i) in activities" :key="a.t" class="sl-in h-[50px] rounded-xl border-2 border-slate-600 bg-slate-800/80 flex items-center gap-2 px-3"
                 :style="{ '--d': `${0.7 + i * 0.35}s` }">
              <span class="text-2xl">{{ a.i }}</span><span class="text-[17px] font-black text-slate-100">{{ a.t }}</span>
            </div>
          </div>
          <!-- packets flowing to the server -->
          <span v-for="(a, i) in activities" :key="`d${i}`" class="dot" :style="{ top: `${96 + i * 60}px`, '--d': `${2.6 + i * 0.25}s` }">{{ a.i }}</span>
          <!-- big data store -->
          <div class="absolute top-[110px] left-[230px] w-[150px] flex flex-col items-center sl-pop" style="--d: 2.2s">
            <span class="text-[72px] leading-none">🗄️</span>
            <span class="text-[17px] font-black text-slate-200 mt-1">كميات ضخمة</span>
          </div>
          <div class="absolute top-[150px] left-[178px] text-3xl text-slate-500 sl-in" style="--d: 4.4s">←</div>
          <!-- analysis to profile -->
          <div class="absolute top-[70px] left-[24px] w-[150px] sl-pop" style="--d: 4.8s">
            <div class="rounded-2xl border-2 border-rose-400 bg-rose-950/70 px-3 py-3 text-center">
              <div class="text-3xl">🧠</div>
              <div class="text-[16px] font-black text-rose-100 leading-snug">تحليل بالذكاء الاصطناعي</div>
            </div>
          </div>
          <div class="absolute top-[220px] left-[24px] w-[150px] flex flex-col gap-1.5">
            <span v-for="(p, i) in profile" :key="p" class="sl-pop px-2 py-1 rounded-lg bg-slate-900 border border-rose-400/60 text-[15px] font-black text-rose-100 text-center"
                  :style="{ '--d': `${5.4 + i * 0.35}s` }">{{ p }}</span>
          </div>
        </div>
        <div class="absolute left-[765px] top-[300px] w-[465px] flex flex-col gap-3" dir="rtl">
          <div class="sl-in rounded-3xl border-2 border-rose-400/50 bg-rose-950/40 px-6 py-4" style="--d: 1.2s">
            <div class="text-[17px] font-black text-rose-300 mb-1">② الجمع الجماعي للبيانات الشخصية</div>
            <p class="text-[20px] font-bold text-slate-100 leading-relaxed">تُجمع وتُحلَّل <span class="sl-hl-amber font-black">كميات كبيرة من بيانات السلوك</span> عبر الإنترنت.</p>
          </div>
          <div class="sl-in rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 text-[18px] font-bold text-slate-200 leading-snug" style="--d: 6.6s">
            🤔 من بياناتك الصغيرة يمكن استنتاج الكثير عنك… فمن يتحكم فيها؟
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const cams = [540, 300, 70]
// when the walker passes under each camera
const camAt = [1.5, 3.3, 5.1]
const pathLog = ['8:00 المحطة', '8:20 السوق', '8:45 المقهى']
const activities = [
  { i: '🔍', t: 'ما تبحث عنه' },
  { i: '🛒', t: 'ما تشتريه' },
  { i: '❤️', t: 'ما تعجب به' },
  { i: '📍', t: 'أين تذهب' },
]
const profile = ['اهتماماتك', 'عاداتك', 'مكانك المعتاد']
</script>

<style scoped>
.cone { display: block; width: 0; height: 0; border-left: 40px solid transparent; border-right: 40px solid transparent; border-top: 150px solid rgba(244,63,94,.18);
  opacity: 0; animation: cone 1s ease var(--d) forwards; }
@keyframes cone { 0% { opacity: 0 } 30% { opacity: 1; border-top-color: rgba(244,63,94,.45) } 100% { opacity: 1; border-top-color: rgba(244,63,94,.18) } }
.street-line { background: repeating-linear-gradient(90deg, #94a3b8 0 30px, transparent 30px 60px); opacity: .5; }
.walker { right: 30px; animation: walk 4.4s linear 1.2s forwards; }
@keyframes walk { to { right: 515px } }
.tag { animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d) forwards; }
.dot { position: absolute; right: 230px; font-size: 22px; opacity: 0; animation: flow 1.2s ease-in var(--d) forwards; }
@keyframes flow { 0% { right: 230px; opacity: 0 } 20% { opacity: 1 } 100% { right: 360px; top: 150px; opacity: 0 } }
</style>
