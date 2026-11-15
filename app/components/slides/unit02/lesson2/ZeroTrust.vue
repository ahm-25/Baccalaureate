<template>
  <!-- Zero trust. f = 0 perimeter model, 1 the perimeter blurs (cloud + remote work),
       2 zero trust: every access is verified, 3 compare — traditional column, 4 zero-trust column. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🔍" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0, f1: the perimeter ───── -->
      <div v-if="f <= 1" :key="`per-${f}`" class="absolute inset-0">
        <!-- outside label -->
        <div class="absolute left-[40px] top-[180px] w-[250px] text-center" dir="rtl">
          <div class="text-[22px] font-black text-rose-300">الخارجي</div>
          <div class="text-lg font-bold text-rose-200/80">غير موثوق</div>
        </div>
        <div class="absolute left-[95px] top-[270px] flex flex-col items-center gap-1">
          <span class="text-5xl">👤</span>
          <span class="text-base font-black text-slate-300" dir="rtl">مستخدم خارجي</span>
        </div>

        <!-- the castle -->
        <div class="castle absolute left-[340px] top-[165px] w-[600px] h-[300px] rounded-[36px]" :class="{ 'castle-blur': f === 1 }">
          <div class="absolute top-4 inset-x-0 text-center" dir="rtl">
            <span class="text-[22px] font-black text-emerald-300">الداخلي</span>
            <span class="text-lg font-bold text-emerald-200/80"> · موثوق (بدون تحقق)</span>
          </div>
          <div class="absolute top-[86px] left-[60px] flex flex-col items-center gap-1"><span class="text-5xl">👤</span><span class="text-base font-black text-slate-300">موظف</span></div>
          <div class="absolute top-[86px] left-[250px] flex flex-col items-center gap-1"><span class="text-5xl">💻</span><span class="text-base font-black text-slate-300">جهاز</span></div>
          <div class="absolute top-[86px] left-[440px] flex flex-col items-center gap-1"><span class="text-5xl">🗄️</span><span class="text-base font-black text-slate-300">البيانات</span></div>
          <div class="pass-line absolute top-[118px] left-[130px] w-[300px] h-[4px]"></div>
          <div class="absolute top-[196px] inset-x-0 flex justify-center">
            <span class="sl-in sl-badge !text-lg !py-1 border-emerald-400/70 text-emerald-200 bg-emerald-500/10" style="--d: 1.6s" dir="rtl">✓ يدخل بلا تحقق لأنه في الداخل</span>
          </div>
        </div>
        <div class="absolute left-[300px] top-[470px] w-[680px] text-center text-lg font-black text-amber-300" dir="rtl"
             :class="{ 'sl-out': f === 1 }" style="--d: 1s">🧱 جدار الحماية = المحيط الأمني</div>

        <!-- outside user bounces off the wall -->
        <div class="z-bolt">👤</div>

        <template v-if="f === 0">
          <div class="absolute top-[520px] inset-x-0 flex justify-center">
            <div class="sl-in sl-badge !text-[24px] border-amber-400 text-amber-100 bg-amber-500/15" style="--d: 2.6s" dir="rtl">
              الفرضية: «داخل شبكة المؤسسة آمن، وخارجها خطر»
            </div>
          </div>
        </template>

        <!-- f1: cloud + remote work blur the line -->
        <template v-else>
          <div class="absolute left-[1000px] top-[190px] w-[240px] flex flex-col items-center sl-pop" style="--d: 1.2s">
            <div class="text-[64px] leading-none">☁️</div>
            <span class="mt-1 text-[20px] font-black text-sky-200" dir="rtl">خدمات سحابية</span>
            <span class="text-base font-bold text-slate-400" dir="rtl">البيانات خارج المبنى</span>
          </div>
          <div class="absolute left-[60px] top-[370px] w-[220px] flex flex-col items-center sl-pop" style="--d: 2s">
            <div class="text-[52px] leading-none">🏠</div>
            <span class="mt-1 text-[20px] font-black text-sky-200" dir="rtl">موظف عن بُعد</span>
          </div>
          <div class="absolute left-[340px] top-[462px] w-[600px] flex justify-center">
            <span class="sl-pop px-5 py-2 rounded-2xl bg-slate-950/90 border-2 border-amber-400 text-[24px] font-black text-amber-200" style="--d: 2.8s" dir="rtl">
              أين «الداخل»؟ وأين «الخارج»؟ 🤔
            </span>
          </div>
          <div class="absolute top-[520px] inset-x-0 flex justify-center">
            <div class="sl-in sl-badge !text-[24px] border-rose-400 text-rose-100 bg-rose-600/20" style="--d: 3.6s" dir="rtl">
              حماية المحيط الأمني وحدها لم تعد كافية
            </div>
          </div>
        </template>
      </div>

      <!-- ───── f2: verify every access ───── -->
      <div v-else-if="f === 2" key="zt" class="absolute inset-0">
        <!-- resources (left) -->
        <div class="absolute left-[50px] top-[165px] w-[260px] flex flex-col gap-4" dir="rtl">
          <div v-for="(r, i) in resources" :key="r.name" class="sl-in h-[78px] rounded-2xl border-2 border-indigo-400/60 bg-indigo-950/50 flex items-center gap-3 px-4"
               :class="{ 'res-open': i === 0 }" :style="{ '--d': `${0.3 + i * 0.2}s` }">
            <span class="text-4xl">{{ r.icon }}</span>
            <span class="flex-1 text-[20px] font-black text-white">{{ r.name }}</span>
            <Lock class="w-6 h-6 text-indigo-300" />
          </div>
        </div>

        <!-- checkpoint (middle) -->
        <div class="absolute left-[400px] top-[160px] w-[480px] sl-in" style="--d: .8s" dir="rtl">
          <div class="rounded-3xl border-2 border-emerald-400/70 bg-slate-900/85 px-7 py-5">
            <div class="text-[26px] font-black text-emerald-200 text-center mb-4">🔍 تحقق من كل عملية وصول</div>
            <div v-for="(c, i) in checks" :key="c.name" class="check flex items-center gap-3 h-[56px] px-4 mb-2 rounded-xl border-2 border-slate-700 bg-slate-800/60"
                 :style="{ '--d': `${2.6 + i * 0.7}s` }">
              <span class="text-3xl">{{ c.icon }}</span>
              <div class="flex-1">
                <div class="text-[21px] font-black text-white leading-tight">{{ c.name }}</div>
                <div class="text-sm font-bold text-slate-400">{{ c.hint }}</div>
              </div>
              <span class="tick sl-pop w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center" :style="{ '--d': `${2.6 + i * 0.7}s` }">
                <Check class="w-6 h-6 text-white" stroke-width="3.5" />
              </span>
            </div>
          </div>
        </div>

        <!-- users (right) -->
        <div class="absolute left-[970px] top-[165px] w-[260px] flex flex-col gap-4" dir="rtl">
          <div v-for="(u, i) in users" :key="u.name" class="sl-in h-[78px] rounded-2xl border-2 border-sky-400/50 bg-slate-800/60 flex items-center gap-3 px-4"
               :style="{ '--d': `${0.5 + i * 0.2}s` }">
            <span class="text-4xl">{{ u.icon }}</span>
            <span class="text-[19px] font-black text-white leading-tight">{{ u.name }}</span>
          </div>
        </div>

        <!-- one request goes through the checkpoint -->
        <div class="req">📨</div>

        <div class="absolute top-[505px] inset-x-0 flex justify-center">
          <div class="sl-in sl-badge !text-[22px] border-amber-400 text-amber-100 bg-amber-500/15" style="--d: 5.4s" dir="rtl">
            لا ثقة تلقائية لمجرد الوجود داخل الشبكة أو ملكية المؤسسة للجهاز
          </div>
        </div>
      </div>

      <!-- ───── f3, f4: compare the two approaches ───── -->
      <div v-else key="cmp" class="absolute top-[150px] inset-x-0 flex justify-center" dir="rtl">
        <div class="w-[1190px]">
          <div class="grid grid-cols-[430px_300px_1fr] gap-3 mb-3 text-[22px] font-black text-center">
            <div class="py-2 rounded-xl bg-slate-800/90 text-slate-300">الموقف</div>
            <div class="py-2 rounded-xl bg-amber-500/20 text-amber-200 border-2 border-amber-400/50">🏰 الأمان التقليدي</div>
            <div class="py-2 rounded-xl border-2" :class="f === 4 ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/60' : 'border-dashed border-slate-600 text-slate-500'">🔍 نهج انعدام الثقة</div>
          </div>
          <div v-for="(s, i) in scenarios" :key="s.text" class="grid grid-cols-[430px_300px_1fr] gap-3 mb-3">
            <div class="sl-in h-[98px] rounded-2xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-3 px-4"
                 :style="{ '--d': f === 3 ? `${0.3 + i * 1.6}s` : '0s' }">
              <span class="text-4xl">{{ s.icon }}</span>
              <span class="text-[19px] font-bold text-slate-100 leading-snug">{{ s.text }}</span>
            </div>
            <!-- traditional -->
            <div class="sl-in h-[98px] rounded-2xl border-2 flex flex-col justify-center px-4"
                 :class="s.inside === s.shouldAllow ? 'border-emerald-500/60 bg-emerald-950/40' : 'border-rose-500/70 bg-rose-950/50'"
                 :style="{ '--d': f === 3 ? `${0.9 + i * 1.6}s` : '0s' }">
              <div class="flex items-center justify-between">
                <span class="text-[22px] font-black" :class="s.inside ? 'text-emerald-300' : 'text-rose-300'">{{ s.inside ? 'سماح ✓' : 'رفض ✗' }}</span>
                <span class="text-[17px] font-black text-rose-200">⚠️ {{ s.inside ? 'خطر' : 'مشكلة' }}</span>
              </div>
              <span class="text-[16px] font-bold text-slate-300 mt-1">{{ s.inside ? 'في الداخل ← موثوق دون تحقق' : 'في الخارج ← غير موثوق' }}</span>
            </div>
            <!-- zero trust -->
            <div class="h-[98px] rounded-2xl border-2 flex flex-col justify-center px-4"
                 :class="f === 4 ? 'sl-in border-emerald-500/60 bg-emerald-950/40' : 'border-dashed border-slate-700 bg-slate-900/30'"
                 :style="{ '--d': `${0.4 + i * 1.4}s` }">
              <template v-if="f === 4">
                <div class="flex items-center justify-between">
                  <span class="text-[22px] font-black" :class="s.shouldAllow ? 'text-emerald-300' : 'text-rose-300'">{{ s.shouldAllow ? 'سماح ✓' : 'رفض ✗' }}</span>
                  <span class="text-[17px] font-black text-emerald-200">✅ قرار صحيح</span>
                </div>
                <div class="flex gap-1.5 mt-1.5 flex-wrap">
                  <span v-for="c in s.checks" :key="c.name" class="px-2 py-0.5 rounded-lg text-[14px] font-black"
                        :class="c.ok ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/30 text-rose-100'">
                    {{ c.ok ? '✓' : '✗' }} {{ c.name }}
                  </span>
                </div>
              </template>
              <span v-else class="text-center text-3xl text-slate-600">؟</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Lock, Check } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { title: 'الأمان التقليدي', sub: 'حماية المحيط الأمني' },
  { title: 'الحدود أصبحت غير واضحة', sub: 'الخدمات السحابية + العمل عن بُعد' },
  { title: 'نهج انعدام الثقة', sub: 'Zero Trust · تحقق من كل وصول' },
  { title: 'من يحصل على الوصول؟', sub: 'قارن بين النهجين' },
  { title: 'من يحصل على الوصول؟', sub: 'قارن بين النهجين' },
]
const resources = [
  { icon: '🗄️', name: 'قاعدة البيانات' },
  { icon: '📊', name: 'نظام الدرجات' },
  { icon: '☁️', name: 'خدمة سحابية' },
]
const users = [
  { icon: '👤', name: 'موظف داخل المبنى' },
  { icon: '🏠', name: 'معلمة من المنزل' },
  { icon: '💻', name: 'جهاز تملكه المؤسسة' },
]
const checks = [
  { icon: '🆔', name: 'الهوية', hint: 'مَن صاحب الطلب؟' },
  { icon: '🔑', name: 'الصلاحيات', hint: 'هل يحق له هذا المورد؟' },
  { icon: '📍', name: 'السياق', hint: 'مثل: هل الجهاز موثوق ومحدّث؟' },
]
const scenarios = [
  { icon: '🦠', text: 'جهاز داخل مبنى المؤسسة أصيب ببرمجية خبيثة ويطلب الوصول إلى قاعدة البيانات',
    inside: true, shouldAllow: false,
    checks: [{ name: 'الهوية', ok: true }, { name: 'الصلاحيات', ok: true }, { name: 'السياق: الجهاز مصاب', ok: false }] },
  { icon: '🏠', text: 'معلمة تعمل من المنزل بجهاز المدرسة المحدّث وتطلب نظام الدرجات الذي تملك صلاحيته',
    inside: false, shouldAllow: true,
    checks: [{ name: 'الهوية', ok: true }, { name: 'الصلاحيات', ok: true }, { name: 'السياق', ok: true }] },
  { icon: '👤', text: 'موظف داخل الشبكة يطلب ملفات قسم الرواتب دون أن يملك صلاحية لها',
    inside: true, shouldAllow: false,
    checks: [{ name: 'الهوية', ok: true }, { name: 'الصلاحيات: لا يملك', ok: false }, { name: 'السياق', ok: true }] },
]
</script>

<style scoped>
.castle {
  border: 10px solid #b45309;
  background: rgba(6,78,59,.18);
  box-shadow: 0 0 0 3px #fbbf24, 0 0 40px rgba(251,191,36,.25);
}
.castle-blur { animation: blur 1.4s ease .6s forwards; }
@keyframes blur { to { border-style: dashed; border-color: rgba(180,83,9,.35); box-shadow: 0 0 0 3px rgba(251,191,36,.15); } }
.pass-line {
  background: repeating-linear-gradient(90deg, #34d399 0 12px, transparent 12px 20px);
  transform-origin: left center; transform: scaleX(0); animation: grow .9s ease .8s forwards;
}
@keyframes grow { to { transform: scaleX(1) } }

.z-bolt {
  position: absolute; top: 280px; left: 110px; font-size: 2.6rem; opacity: 0; z-index: 4;
  animation: zIn 1s cubic-bezier(.45,0,.25,1) 1.2s forwards, zOut .6s ease-out 2.2s forwards;
}
@keyframes zIn { from { left: 110px; opacity: 0 } 20% { opacity: 1 } to { left: 280px; opacity: 1 } }
@keyframes zOut { from { left: 280px; opacity: 1; filter: none } to { left: 200px; opacity: 0; filter: grayscale(1) } }

/* f2 */
.check { animation: checkOn .4s ease var(--d) forwards; }
@keyframes checkOn { to { border-color: #10b981; background: rgba(6,78,59,.45) } }
.res-open { animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d) forwards, open .5s ease 5s forwards; }
@keyframes open { to { border-color: #34d399; box-shadow: 0 0 30px rgba(52,211,153,.55) } }
.req {
  position: absolute; top: 186px; left: 960px; width: 52px; height: 52px; border-radius: 14px; z-index: 6;
  background: #0ea5e9; border: 2px solid #bae6fd; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; opacity: 0; box-shadow: 0 8px 24px rgba(0,0,0,.4);
  animation: rIn .9s cubic-bezier(.45,0,.25,1) 1.4s forwards, rOut 1s cubic-bezier(.45,0,.25,1) 4.6s forwards;
}
@keyframes rIn { from { left: 960px; opacity: 0 } 20% { opacity: 1 } to { left: 880px; top: 186px; opacity: 1 } }
@keyframes rOut { from { left: 880px; top: 186px; opacity: 1 } 85% { opacity: 1 } to { left: 300px; top: 178px; opacity: 0 } }
</style>
