<template>
  <!-- DMZ chapter. f = 0 web server inside the internal network (attack spreads),
       1 the DMZ layout (book figure 2.2.1), 2 same attack contained, 3 stop & think.
       External network on the left, internal on the right, as in the book's figure. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 3 ? '💡' : '🏝️'" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── network scenes ───── -->
      <div v-if="f <= 2" :key="`net-${f}`" class="absolute inset-0">
        <!-- Internet -->
        <div class="zone left-[30px] w-[190px] border-dashed border-slate-500/60 bg-slate-800/30">
          <div class="zone-title text-slate-300" dir="rtl">الشبكة الخارجية<br><span class="text-base text-slate-400">(الإنترنت)</span></div>
          <div class="absolute top-[120px] inset-x-0 flex flex-col items-center">
            <div class="w-[84px] h-[84px] rounded-full bg-rose-950 border-2 border-rose-400 flex items-center justify-center text-5xl">🕵️</div>
            <span class="mt-2 text-xl font-black text-rose-200">مهاجم</span>
          </div>
        </div>

        <!-- edge firewall -->
        <div class="wall left-[236px]"><span>جدار الحماية</span></div>

        <!-- f0: one flat internal network that also holds the web server -->
        <div v-if="f === 0" class="zone left-[300px] w-[950px] border-indigo-400/50 bg-indigo-950/40"
             :class="{ 'zone-bad': true }" style="--d: 3.4s">
          <div class="zone-title text-indigo-200" dir="rtl">الشبكة الداخلية <span class="text-base text-indigo-300">(المنظمة)</span></div>
          <div class="dev left-[30px] top-[100px] w-[330px]" :class="'dev-hit'" style="--d: 1.6s">
            <span class="ico"><span class="sl-out" style="--d: 1.6s">🌐</span><span class="sl-fade abs" style="--d: 1.6s">☠️</span></span>
            خادم الويب <span class="text-amber-300">(داخل الشبكة!)</span>
          </div>
          <!-- spread lines -->
          <div class="spread left-[360px] top-[128px] w-[241px]" style="--d: 2.3s; --r: -5deg"></div>
          <div class="spread left-[360px] top-[128px] w-[248px]" style="--d: 2.3s; --r: 14deg"></div>
          <div v-for="(d, i) in internal" :key="d.name" class="dev left-[600px] w-[300px] dev-hit"
               :style="{ top: `${80 + i * 80}px`, '--d': '3.1s' }">
            <span class="ico"><span class="sl-out" style="--d: 3.1s">{{ d.icon }}</span><span class="sl-fade abs" style="--d: 3.1s">☠️</span></span>
            {{ d.name }}
          </div>
          <div class="absolute left-[600px] top-[230px] w-[300px] flex justify-center" dir="rtl">
            <span class="secret secret-bad" style="--d: 3.5s">
              <span class="sl-out" style="--d: 3.5s">🔒 بيانات سرية</span>
              <span class="sl-fade abs" style="--d: 3.5s">🔓 البيانات السرية مكشوفة</span>
            </span>
          </div>
        </div>

        <!-- f1, f2: DMZ between two firewalls -->
        <template v-else>
          <div class="zone left-[300px] w-[320px] border-amber-400/60 bg-amber-950/30" :class="{ 'sl-in': f === 1 }" style="--d: .3s">
            <div class="zone-title text-amber-200" dir="rtl">DMZ <span class="text-base text-amber-300">(المنطقة المعزولة)</span></div>
            <div class="dev left-[30px] top-[78px] w-[260px]" :class="{ 'dev-hit': f === 2 }" style="--d: 1.6s">
              <span class="ico">
                <span :class="{ 'sl-out': f === 2 }" style="--d: 1.6s">🌐</span>
                <span v-if="f === 2" class="sl-fade abs" style="--d: 1.6s">☠️</span>
              </span>
              خادم الويب
            </div>
            <div class="dev left-[30px] top-[148px] w-[260px]"><span class="ico">✉️</span> خادم البريد</div>
            <div class="absolute bottom-4 inset-x-0 text-center text-base font-bold text-amber-200/80" dir="rtl">الخوادم المعرَّضة للإنترنت</div>
          </div>

          <div class="wall left-[636px]" :class="{ 'sl-in': f === 1, 'wall-block': f === 2 }" :style="{ '--d': f === 1 ? '.9s' : '2.7s' }">
            <span>جدار الحماية</span>
          </div>
          <div v-if="f === 2" class="absolute left-[628px] top-[270px] sl-pop text-5xl" style="--d: 2.7s">🛡️</div>

          <div class="zone left-[700px] w-[550px] border-indigo-400/50 bg-indigo-950/40"
               :class="{ 'sl-in': f === 1, 'zone-good': f === 2 }" :style="{ '--d': f === 1 ? '1.4s' : '3.3s' }">
            <div class="zone-title text-indigo-200" dir="rtl">الشبكة الداخلية <span class="text-base text-indigo-300">(المنظمة)</span></div>
            <div v-for="(d, i) in internal" :key="d.name" class="dev left-[110px] w-[330px]" :style="{ top: `${78 + i * 70}px` }">
              <span class="ico">{{ d.icon }}</span> {{ d.name }}
            </div>
            <div class="absolute left-0 right-0 top-[222px] flex justify-center" dir="rtl">
              <span class="secret" :class="{ 'secret-good': f === 2 }" style="--d: 3.3s">🔒 بيانات سرية</span>
            </div>
          </div>
        </template>

        <!-- the attack -->
        <div v-if="f !== 1" class="bolt" :class="f === 0 ? 'bolt-flat' : 'bolt-dmz'">⚡</div>

        <!-- result -->
        <div class="absolute top-[478px] inset-x-0 flex justify-center" dir="rtl">
          <div v-if="f === 0" class="sl-in sl-badge !text-[23px] border-rose-400 text-rose-100 bg-rose-600/20" style="--d: 4s">
            ✗ انتقل المهاجم من خادم الويب مباشرة إلى الأجهزة والبيانات السرية
          </div>
          <div v-else-if="f === 1" class="sl-in sl-badge !text-[23px] border-amber-400 text-amber-100 bg-amber-500/15" style="--d: 2.2s">
            🏝️ الخوادم العامة منفصلة عن الشبكة الداخلية بجدار حماية
          </div>
          <div v-else class="sl-in sl-badge !text-[23px] border-emerald-400 text-emerald-100 bg-emerald-600/20" style="--d: 3.6s">
            ✓ اختُرق خادم الويب في DMZ، لكن الشبكة الداخلية لا تزال محمية
          </div>
        </div>
      </div>

      <!-- ───── f3: stop & think ───── -->
      <div v-else key="think" class="absolute inset-0 flex flex-col items-center pt-[150px] gap-6" dir="rtl">
        <div class="sl-in sl-card border-amber-400/70 px-10 py-5 text-[30px] font-black text-white text-center max-w-[1060px]" style="--d: .2s">
          لماذا يكون وضع خادم ويب عام في <span class="sl-hl-amber">المنطقة المعزولة (DMZ)</span> أكثر أمانًا من وضعه داخل الشبكة الداخلية؟
        </div>
        <p class="sl-in text-[24px] font-bold text-slate-200" style="--d: 2.2s">
          لأن خادم الويب العام <span class="text-amber-300">معرَّض للإنترنت</span>، فهو أكثر الأجهزة عرضة للهجوم…
        </p>
        <div class="flex gap-6">
          <div class="sl-in w-[500px] rounded-3xl border-2 border-rose-400/70 bg-rose-950/50 px-7 py-5" style="--d: 3.4s">
            <div class="text-[24px] font-black text-rose-200 mb-2">✗ داخل الشبكة الداخلية</div>
            <p class="text-[21px] font-bold text-slate-100 leading-relaxed">إذا اختُرق، يصبح المهاجم <strong class="text-rose-300">داخل الشبكة</strong> مباشرة بجوار الأجهزة والبيانات السرية.</p>
          </div>
          <div class="sl-in w-[500px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/50 px-7 py-5" style="--d: 4.6s">
            <div class="text-[24px] font-black text-emerald-200 mb-2">✓ في المنطقة المعزولة</div>
            <p class="text-[21px] font-bold text-slate-100 leading-relaxed">يفصله جدار حماية عن الشبكة الداخلية، فيبقى الضرر <strong class="text-emerald-300">محصورًا في DMZ</strong>.</p>
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
  { title: 'خادم الويب داخل الشبكة الداخلية', sub: 'بدون منطقة معزولة' },
  { title: 'المنطقة المعزولة (DMZ)', sub: 'Demilitarized Zone · الشكل 2.2.1' },
  { title: 'نفس الهجوم… مع منطقة معزولة', sub: 'أين يتوقف الضرر؟' },
  { title: 'توقف وفكر', sub: '' },
]
const internal = [
  { icon: '💻', name: 'جهاز الكمبيوتر الشخصي' },
  { icon: '🗄️', name: 'خادم قاعدة البيانات' },
]
</script>

<style scoped>
.zone { position: absolute; top: 165px; height: 290px; border-radius: 1.5rem; border-width: 2px; }
.zone-title { position: absolute; top: 12px; inset-inline: 0; text-align: center; font-size: 1.3rem; font-weight: 900; line-height: 1.3; }
.zone-bad { animation: zoneBad .6s ease var(--d) forwards; }
@keyframes zoneBad { to { border-color: #fb7185; background: rgba(136,19,55,.35); } }
.zone-good { animation: zoneGood .6s ease var(--d) forwards; }
@keyframes zoneGood { to { border-color: #34d399; box-shadow: 0 0 40px rgba(52,211,153,.35); } }

.wall {
  position: absolute; top: 165px; width: 46px; height: 290px; border-radius: .8rem;
  background: repeating-linear-gradient(0deg, #b45309 0 22px, #78350f 22px 26px);
  border: 3px solid #fbbf24; display: flex; align-items: center; justify-content: center;
}
.wall span {
  transform: rotate(-90deg); white-space: nowrap; color: #fef3c7; font-weight: 900; font-size: 1.05rem; letter-spacing: .02em;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}
.wall-block { animation: wallBlock .5s ease var(--d) forwards; }
@keyframes wallBlock { to { border-color: #34d399; box-shadow: 0 0 40px rgba(52,211,153,.7) } }

.dev {
  position: absolute; height: 56px; border-radius: 1rem; border-width: 2px; border-color: #475569;
  background: rgba(30,41,59,.85); display: flex; align-items: center; gap: .6rem; padding: 0 1rem;
  direction: rtl; font-size: 1.2rem; font-weight: 900; color: #e2e8f0; white-space: nowrap;
}
.dev .ico { position: relative; font-size: 1.8rem; width: 2.2rem; display: inline-flex; justify-content: center; }
.abs { position: absolute; inset: 0; display: inline-flex; justify-content: center; }
.dev-hit { animation: devHit .5s ease var(--d) forwards; }
@keyframes devHit { to { border-color: #fb7185; background: rgba(136,19,55,.7); box-shadow: 0 0 24px rgba(244,63,94,.5) } }

.secret {
  position: relative; display: inline-flex; align-items: center; justify-content: center; min-width: 230px; height: 44px;
  padding: 0 1rem; border-radius: .9rem; border-width: 2px; border-color: #34d399; background: rgba(6,78,59,.5);
  color: #a7f3d0; font-size: 1.15rem; font-weight: 900; white-space: nowrap;
}
.secret-bad { animation: secretBad .4s ease var(--d) forwards; }
@keyframes secretBad { to { border-color: #fb7185; background: rgba(136,19,55,.7); color: #fecdd3; min-width: 290px } }
.secret-good { animation: secretGood .5s ease var(--d) forwards; }
@keyframes secretGood { to { box-shadow: 0 0 30px rgba(52,211,153,.6) } }

/* attack spreading inside a flat network */
.spread {
  position: absolute; height: 4px; transform-origin: left center; transform: rotate(var(--r)) scaleX(0);
  background: repeating-linear-gradient(90deg, #f43f5e 0 12px, transparent 12px 20px);
  animation: spread .8s ease var(--d) forwards;
}
@keyframes spread { from { transform: rotate(var(--r)) scaleX(0) } to { transform: rotate(var(--r)) scaleX(1) } }

/* the attack bolt */
.bolt {
  position: absolute; top: 270px; left: 150px; width: 52px; height: 52px; border-radius: 9999px; z-index: 6;
  background: #e11d48; border: 3px solid #fecdd3; display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; opacity: 0; box-shadow: 0 0 30px rgba(244,63,94,.8);
}
.bolt-flat { animation: boltFlat 1.3s cubic-bezier(.45,0,.25,1) .3s forwards; }
@keyframes boltFlat { 0% { left: 150px; top: 290px; opacity: 0 } 15% { opacity: 1 } 90% { opacity: 1 } 100% { left: 330px; top: 265px; opacity: 0 } }
.bolt-dmz { animation: boltIn 1.3s cubic-bezier(.45,0,.25,1) .3s forwards, boltOn 1s cubic-bezier(.45,0,.25,1) 1.8s forwards; }
@keyframes boltIn { 0% { left: 150px; top: 290px; opacity: 0 } 15% { opacity: 1 } 100% { left: 330px; top: 243px; opacity: 1 } }
@keyframes boltOn { 0% { left: 330px; top: 243px; opacity: 1 } 75% { left: 580px; top: 280px; opacity: 1 } 100% { left: 540px; top: 280px; opacity: 0 } }
</style>
