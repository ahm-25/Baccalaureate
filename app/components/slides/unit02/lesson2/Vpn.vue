<template>
  <!-- VPN chapter. f = 0 café without VPN, 1 VPN on, 2 main uses, 3 what VPN does NOT do.
       Company network on the left, remote employee on the right (data flows right → left). -->
  <div class="absolute inset-0">
    <SlidesTitle icon="🔒" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── café scene (f0, f1, f3) ───── -->
      <div v-if="f !== 2" :key="`scene-${f}`" class="absolute inset-0">
        <!-- company -->
        <div class="absolute top-[180px] left-[110px] w-[160px] flex flex-col items-center">
          <div class="sl-node w-[160px] h-[160px] border-indigo-400/60" :class="{ 'vpn-infected': f === 3 }">
            <Building2 class="w-20 h-20 text-indigo-300" />
          </div>
          <span class="mt-3 text-2xl font-black text-white whitespace-nowrap" dir="rtl">شبكة المؤسسة</span>
          <span v-if="f === 3" class="sl-pop absolute -top-5 -right-5 text-5xl" style="--d: 4.4s">☠️</span>
        </div>
        <!-- employee -->
        <div class="absolute top-[180px] left-[1010px] w-[160px] flex flex-col items-center">
          <div class="sl-node w-[160px] h-[160px] border-sky-400/60">
            <Laptop class="w-20 h-20 text-sky-300" />
          </div>
          <span class="mt-3 text-2xl font-black text-white whitespace-nowrap" dir="rtl">موظف في المقهى</span>
          <span v-if="f !== 3" class="mt-2 sl-badge !text-lg !py-1 border-amber-400/60 text-amber-200 bg-amber-500/10" dir="rtl"><Wifi class="w-5 h-5" /> Wi-Fi عامة</span>
        </div>

        <!-- public network -->
        <div class="absolute top-[258px] left-[270px] w-[740px] h-[4px] sl-wire"></div>
        <div class="absolute top-[200px] left-[270px] w-[740px] text-center text-lg font-bold text-slate-500" dir="rtl"
             :class="{ 'sl-out': f !== 0 }">الإنترنت (شبكة عامة)</div>

        <!-- the tunnel -->
        <template v-if="f !== 0">
          <div class="vpn-tunnel absolute top-[226px] left-[262px] w-[756px] h-[68px] rounded-full"
               :class="{ 'vpn-grow': f === 1 }"></div>
          <div class="absolute top-[188px] left-[270px] w-[740px] flex justify-center">
            <span class="sl-in sl-badge !text-lg !py-1 border-indigo-400 text-indigo-100 bg-indigo-600/40" :style="{ '--d': f === 1 ? '1.1s' : '0s' }" dir="rtl">
              <Lock class="w-5 h-5" /> نفق مشفّر
            </span>
          </div>
        </template>

        <!-- f0/f1: a report travels on a loop -->
        <div v-if="f !== 3" class="vpn-packet vpn-loop" :style="{ '--d': f === 1 ? '1.4s' : '.2s' }">
          <div v-if="f === 0" class="vpn-chip bg-amber-100 text-amber-900 border-amber-400" dir="rtl">📄 تقرير المبيعات</div>
          <div v-else class="vpn-chip bg-indigo-600 text-white border-indigo-300" dir="ltr"><Lock class="w-5 h-5" /> ••••••</div>
        </div>

        <!-- f3: an infected file goes through the tunnel and arrives still infected -->
        <div v-else class="vpn-packet vpn-once">
          <div class="relative w-[190px] h-[50px]">
            <div class="vpn-chip vpn-plain absolute inset-0 bg-rose-100 text-rose-900 border-rose-400" dir="rtl">🦠 ملف مصاب</div>
            <div class="vpn-chip vpn-cipher absolute inset-0 bg-indigo-600 text-white border-indigo-300" dir="ltr"><Lock class="w-5 h-5" /> •••• 🦠</div>
          </div>
        </div>

        <!-- eavesdropper (f0, f1) -->
        <template v-if="f !== 3">
          <div class="absolute top-[262px] left-[639px] w-[2px] h-[96px] vpn-tap"></div>
          <div class="absolute top-[352px] left-[440px] w-[400px] flex items-center justify-center gap-3" dir="rtl">
            <div class="w-[60px] h-[60px] rounded-full bg-rose-950 border-2 border-rose-400 flex items-center justify-center">
              <VenetianMask class="w-8 h-8 text-rose-300" />
            </div>
            <span class="text-xl font-black text-rose-200">متنصت على نفس الشبكة</span>
          </div>
          <div class="absolute top-[430px] inset-x-0 flex justify-center">
            <div class="sl-in w-[560px] rounded-2xl border-2 px-6 py-3" :style="{ '--d': f === 1 ? '2.6s' : '1.6s' }"
                 :class="f === 0 ? 'bg-rose-950/80 border-rose-400' : 'bg-emerald-950/80 border-emerald-400'">
              <div class="text-lg font-black mb-1" :class="f === 0 ? 'text-rose-200' : 'text-emerald-200'" dir="rtl">
                ما يراه المتنصت: {{ f === 0 ? '✗ بيانات مقروءة' : '✓ بيانات غير مفهومة' }}
              </div>
              <div class="font-mono text-xl font-bold leading-snug" :class="f === 0 ? 'text-rose-100' : 'text-emerald-100'" dir="ltr">
                <template v-if="f === 0">user: ahmed.employee<br>file: sales-report-2026.xlsx</template>
                <template v-else>8f#Kq!2zL@9wX$e1&amp;Rt7…<br>a$4Pn*0vQ!x8#Hm2…</template>
              </div>
            </div>
          </div>
        </template>

        <!-- f3: the lesson -->
        <div v-else class="absolute top-[400px] inset-x-0 flex flex-col items-center gap-3" dir="rtl">
          <div class="sl-in sl-badge !text-[24px] !py-3 !px-6 border-amber-400 text-amber-100 bg-amber-500/15" style="--d: 4.8s">
            ⚠️ VPN يحمي البيانات أثناء انتقالها، لكنه <span class="text-rose-300 underline decoration-2 underline-offset-8">لا</span> يحذف الملفات المصابة بالفيروسات
          </div>
          <div class="sl-in sl-badge !text-[24px] !py-3 !px-6 border-emerald-400 text-emerald-100 bg-emerald-500/15" style="--d: 6s">
            <ShieldCheck class="w-7 h-7" /> هذه مهمة حماية الأجهزة الطرفية
          </div>
        </div>
      </div>

      <!-- ───── f2: the two main uses ───── -->
      <div v-else key="uses" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[165px] inset-x-0 flex justify-center gap-10">
          <div v-for="(u, i) in uses" :key="u.title" class="sl-in sl-card border-indigo-400/50 w-[540px] px-8 pt-6 pb-7"
               :style="{ '--d': `${0.3 + i * 0.9}s` }">
            <div class="flex items-center gap-3 text-[32px] font-black text-white mb-5">
              <span class="text-4xl">{{ u.icon }}</span> {{ u.title }}
            </div>
            <!-- mini diagram -->
            <div class="relative h-[100px] mb-5" dir="ltr">
              <div class="absolute left-0 top-[10px] w-[96px] flex flex-col items-center">
                <span class="text-5xl">🏢</span>
                <span class="text-base font-black text-slate-300 mt-1" dir="rtl">{{ u.left }}</span>
              </div>
              <div class="absolute right-0 top-[10px] w-[96px] flex flex-col items-center">
                <span class="text-5xl">{{ u.rightIcon }}</span>
                <span class="text-base font-black text-slate-300 mt-1" dir="rtl">{{ u.right }}</span>
              </div>
              <div class="vpn-tunnel absolute left-[104px] right-[104px] top-[18px] h-[44px] rounded-full"></div>
              <div class="mini-dot absolute top-[26px] w-[28px] h-[28px] rounded-full bg-indigo-400 flex items-center justify-center"
                   :style="{ animationDelay: `${i * 0.6}s` }">
                <Lock class="w-4 h-4 text-white" />
              </div>
            </div>
            <p class="text-[22px] leading-relaxed font-bold text-slate-200">{{ u.text }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Building2, Laptop, Wifi, Lock, VenetianMask, ShieldCheck } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { title: 'موظف على شبكة Wi-Fi عامة', sub: 'بدون VPN' },
  { title: 'الشبكة الافتراضية الخاصة', sub: 'VPN · Virtual Private Network' },
  { title: 'استخدامات VPN الرئيسية', sub: 'الاتصال الآمن من موقع بعيد' },
  { title: 'انتبه: حدود VPN', sub: 'ماذا يحمي؟ وماذا لا يحمي؟' },
]
const uses = [
  { icon: '🏠', title: 'العمل عن بُعد', left: 'المؤسسة', right: 'المنزل', rightIcon: '🏠',
    text: 'الاتصال بأمان بشبكة المؤسسة من المنزل أو أثناء التنقل.' },
  { icon: '🏢', title: 'ربط الفروع', left: 'المقر', right: 'فرع', rightIcon: '🏢',
    text: 'ربط المكاتب في مواقع مختلفة بأمان.' },
]
</script>

<style scoped>
.vpn-tunnel {
  background: linear-gradient(180deg, rgba(99,102,241,.25), rgba(99,102,241,.08));
  border: 3px solid rgba(129,140,248,.9);
  box-shadow: 0 0 30px rgba(99,102,241,.45), inset 0 0 20px rgba(99,102,241,.25);
}
.vpn-grow { transform-origin: right center; transform: scaleX(0); animation: grow 1s cubic-bezier(.2,.8,.2,1) .3s forwards; }
@keyframes grow { to { transform: scaleX(1) } }

.vpn-packet { position: absolute; top: 235px; left: 940px; z-index: 5; }
.vpn-chip {
  display: inline-flex; align-items: center; justify-content: center; gap: .4rem; height: 50px; padding: 0 1rem;
  border-width: 2px; border-radius: 14px; font-size: 1.25rem; font-weight: 900; white-space: nowrap;
  box-shadow: 0 8px 24px rgba(0,0,0,.4);
}
.vpn-loop { opacity: 0; animation: loop 3.4s ease-in-out var(--d) infinite; }
@keyframes loop {
  0% { left: 900px; opacity: 0 } 10% { opacity: 1 } 85% { opacity: 1 } 100% { left: 290px; opacity: 0 }
}
.vpn-tap { background: repeating-linear-gradient(180deg, #f43f5e 0 8px, transparent 8px 14px); }

/* f3: one infected file, encrypted only while in the tunnel */
.vpn-once { left: 860px; animation: once 2.4s cubic-bezier(.45,0,.25,1) 1.3s forwards; }
@keyframes once { to { left: 280px } }
.vpn-plain { animation: plain 4.2s linear forwards; }
@keyframes plain { 0%, 28% { opacity: 1 } 31%, 88% { opacity: 0 } 91%, 100% { opacity: 1 } }
.vpn-cipher { opacity: 0; animation: cipher 4.2s linear forwards; }
@keyframes cipher { 0%, 28% { opacity: 0 } 31%, 88% { opacity: 1 } 91%, 100% { opacity: 0 } }
.vpn-infected { animation: infected .6s ease 4.2s forwards; }
@keyframes infected { to { border-color: #fb7185; background: rgba(136,19,55,.6); box-shadow: 0 0 40px rgba(244,63,94,.6) } }

/* f2 mini tunnels */
.mini-dot { animation: mini 2.4s ease-in-out infinite; }
@keyframes mini { 0% { left: 110px; opacity: 0 } 15% { opacity: 1 } 85% { opacity: 1 } 100% { left: calc(100% - 138px); opacity: 0 } }
</style>
