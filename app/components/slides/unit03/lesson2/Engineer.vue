<template>
  <!-- Think like an engineer: a school web app (log in, timetable, grade record).
       f = 0 choose GET / POST for each action (and whether an API is involved), 1 choose the protocol and decide. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: تطبيق المدرسة" :sub="f === 0 ? '① اختر الأسلوب' : '② اختر البروتوكول ③ وقرّر'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: methods ───── -->
      <div v-if="f === 0" key="methods" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[142px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1100px] rounded-2xl border-2 border-white/15 bg-slate-900/80 px-6 py-2.5 text-center text-[21px] font-bold text-slate-100" style="--d: .2s">
            🏫 مدرسة تريد تطبيق ويب يسجّل فيه الطلاب الدخول، ويعرضون جدولهم الدراسي، ويحمّلون سجل درجاتهم.
          </div>
        </div>
        <div class="absolute top-[222px] inset-x-0 flex flex-col items-center gap-3.5">
          <div v-for="(a, i) in actions" :key="a.text" class="sl-in w-[1100px] h-[100px] rounded-3xl border-2 border-white/10 bg-slate-900/85 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.8 + i * 2}s` }">
            <span class="text-[40px]">{{ a.icon }}</span>
            <div class="flex-1">
              <div class="text-[23px] font-black text-white">{{ a.text }}</div>
              <div class="sl-in text-[17px] font-bold text-slate-300 leading-snug" :style="{ '--d': `${2 + i * 2}s` }">{{ a.why }}</div>
            </div>
            <div class="flex gap-2" dir="ltr">
              <span v-for="m in ['GET', 'POST']" :key="m" class="relative w-[96px] h-[46px]">
                <span class="opt border-slate-600 text-slate-400">{{ m }}</span>
                <span v-if="m === a.fits" class="opt sl-pop" :class="m === 'GET' ? 'border-sky-300 bg-sky-500 text-white' : 'border-amber-300 bg-amber-500 text-white'"
                      :style="{ '--d': `${1.6 + i * 2}s` }">✓ {{ m }}</span>
              </span>
              <span v-if="a.api" class="sl-pop ml-2 px-3 h-[46px] rounded-xl border-2 border-violet-300 bg-violet-600 text-white text-[18px] font-black flex items-center"
                    :style="{ '--d': `${2.4 + i * 2}s` }" dir="rtl">🧩 API: نعم</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: protocol + decision ───── -->
      <div v-else key="decide" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[145px] inset-x-0 flex justify-center gap-5">
          <div class="sl-in w-[420px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-6 py-4" style="--d: .3s">
            <div class="text-[22px] font-black text-white mb-3">🔑 تسجيل الدخول: أي بروتوكول؟</div>
            <div class="flex gap-3" dir="ltr">
              <div class="relative flex-1 h-[64px]">
                <span class="opt !text-[24px] border-slate-500 text-slate-300">HTTP</span>
                <span class="opt sl-pop !text-[24px] border-rose-400 bg-rose-900 text-rose-100" style="--d: 1.4s">✗ HTTP</span>
              </div>
              <div class="relative flex-1 h-[64px]">
                <span class="opt !text-[24px] border-slate-500 text-slate-300">HTTPS</span>
                <span class="opt sl-pop !text-[24px] border-emerald-300 bg-emerald-500 text-white" style="--d: 1.4s">✓ HTTPS</span>
              </div>
            </div>
            <p class="sl-in mt-3 text-[18px] font-bold text-slate-200 leading-snug" style="--d: 2s">
              تسجيل الدخول يرسل اسم المستخدم وكلمة المرور، وHTTPS يحمي محتوى الاتصال عبر TLS أثناء النقل.
            </p>
          </div>
          <div class="sl-in w-[660px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/45 px-6 py-4" style="--d: 2.8s">
            <div class="text-[22px] font-black text-emerald-300 mb-2">✅ التوصية: استخدام HTTPS والأسلوب المناسب لكل إجراء</div>
            <div class="sl-in flex gap-3 mb-2" style="--d: 3.6s">
              <span class="text-[22px] font-black text-white shrink-0">①</span>
              <p class="text-[18px] font-bold text-slate-100 leading-snug">تسجيل الدخول يرسل بيانات حساسة، وHTTPS يحمي سرية الاتصال وسلامته عبر TLS؛ أما HTTP العادي فيترك كلمات المرور مكشوفة.</p>
            </div>
            <div class="sl-in flex gap-3" style="--d: 4.8s">
              <span class="text-[22px] font-black text-white shrink-0">②</span>
              <p class="text-[18px] font-bold text-slate-100 leading-snug">اختيار الأسلوب المناسب يوضح نوع العملية للخادم: GET لتحميل سجل الدرجات وطلب الجدول، وPOST لإرسال نموذج تسجيل الدخول.</p>
            </div>
          </div>
        </div>
        <div class="absolute top-[450px] inset-x-0 flex justify-center">
          <div class="sl-pop flex items-center gap-4 rounded-3xl border-2 border-amber-400 bg-amber-950/50 px-8 py-4" style="--d: 6s">
            <span class="text-[22px] font-black text-white">👥 في أزواج: الإجراء الذي يجب أن يستخدم</span>
            <span class="px-4 py-1.5 rounded-xl bg-amber-500 text-white text-[24px] font-black font-mono">POST</span>
            <span class="text-[22px] font-black text-amber-200">← إرسال نموذج تسجيل الدخول</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const actions = [
  { icon: '📊', text: 'تحميل سجل درجات الطالب', fits: 'GET', why: 'يطلب بيانات موجودة من الخادم.' },
  { icon: '🔑', text: 'إرسال نموذج تسجيل الدخول', fits: 'POST', why: 'يرسل بيانات (اسم المستخدم وكلمة المرور) ليعالجها الخادم.' },
  { icon: '📅', text: 'طلب الجدول الدراسي لليوم من نظام مدرسة أخرى', fits: 'GET', api: true,
    why: 'يطلب بيانات، وبرنامج يطلبها من برنامج آخر؛ فتُستخدم API وقد تعيدها بصيغة JSON.' },
]
</script>

<style scoped>
.opt {
  position: absolute; inset: 0; border-radius: .8rem; border-width: 2px; display: flex; align-items: center; justify-content: center;
  font-family: ui-monospace, monospace; font-size: 1.2rem; font-weight: 900;
}
</style>
