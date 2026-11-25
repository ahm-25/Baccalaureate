<template>
  <!-- Think like an engineer: research then decide (a community clinic website).
       f = 0 ① collect data (tally table) ② analyse two separate users, 1 ③ decide from the data:
       rank the home-page sections, pick a visual principle, fix an access barrier, tick the right start. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="⚙️" title="فكّر كمهندس: ابحث ثم قرر" :sub="f === 0 ? '① اجمع البيانات ② حلّل مستخدميك' : '③ قرّر بناءً على بياناتك'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: data + users ───── -->
      <div v-if="f === 0" key="data" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[142px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1140px] rounded-2xl border-2 border-white/15 bg-slate-900/80 px-6 py-2.5 text-center text-[20px] font-bold text-slate-100" style="--d: .2s">
            🏥 عيادة مجتمعية في مدينتك تريد موقعًا إلكترونيًا بسيطًا حتى يتمكن المرضى من معرفة <span class="text-amber-300 font-black">ساعات العمل والخدمات والاتجاهات</span>.
          </div>
        </div>

        <!-- ① collect data -->
        <div class="sl-in absolute left-[650px] top-[222px] w-[560px] h-[344px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/40 px-6 py-4" style="--d: .8s">
          <div class="text-[24px] font-black text-white">① اجمع البيانات</div>
          <div class="mt-2 rounded-2xl bg-slate-800/90 border-2 border-white/10 px-4 py-2 text-[18px] font-bold text-sky-100 leading-snug">
            💬 «لو كنت ستفتح موقعًا إلكترونيًا لعيادة مجتمعية، ما أول شيء ستبحث عنه؟»
          </div>
          <div class="mt-2 text-[15px] font-bold text-slate-300">اسأل ثمانية إلى عشرة من زملائك، وسجّل الإجابات في جدول تكراري:</div>
          <div class="mt-2 flex flex-col gap-2">
            <div v-for="(t, i) in tally" :key="t.t" class="h-[40px] rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-3 px-3">
              <span class="w-[120px] text-[18px] font-black text-white whitespace-nowrap">{{ t.t }}</span>
              <div class="flex-1 flex items-center gap-1.5">
                <span v-for="k in t.n" :key="k" class="sl-pop w-[7px] h-[26px] rounded bg-amber-300"
                      :style="{ '--d': `${1.8 + i * 1.1 + k * 0.18}s` }"></span>
              </div>
              <span class="sl-pop w-[36px] h-[30px] rounded-lg bg-amber-500 text-white text-[18px] font-black flex items-center justify-center" :style="{ '--d': `${2.6 + i * 1.1}s` }">{{ t.n }}</span>
            </div>
          </div>
        </div>

        <!-- ② analyse users -->
        <div class="sl-in absolute left-[70px] top-[222px] w-[555px] h-[344px] rounded-3xl border-2 border-violet-400/70 bg-violet-950/40 px-6 py-4" style="--d: 5.2s">
          <div class="text-[24px] font-black text-white">② حلّل مستخدميك</div>
          <div class="text-[16px] font-bold text-slate-300 leading-snug">صنّف الإجابات إلى أنواع مستخدمين، وادرس مثالين منفصلين، واكتب ما يحتاجه كل نوع:</div>
          <div class="mt-3 flex gap-4">
            <div v-for="(u, i) in users" :key="u.t" class="flex-1">
              <div class="sl-in h-[214px] rounded-2xl border-2 border-white/15 bg-slate-900/85 px-3 py-3 flex flex-col items-center text-center" :style="{ '--d': `${6 + i * 1.4}s` }">
                <span class="text-[38px] leading-none">{{ u.i }}</span>
                <span class="mt-1 text-[18px] font-black text-white leading-snug">{{ u.t }}</span>
                <div class="mt-2 flex flex-col items-center gap-1.5">
                  <span v-for="(n, j) in u.needs" :key="n" class="sl-pop px-3 py-0.5 rounded-lg bg-violet-500/30 border border-violet-300/50 text-[15px] font-bold text-violet-50 whitespace-nowrap"
                        :style="{ '--d': `${6.6 + i * 1.4 + j * 0.3}s` }">{{ n }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f1: decide ───── -->
      <div v-else key="decide" class="absolute inset-0" dir="rtl">
        <!-- ranked home page (mini wireframe) -->
        <div class="sl-in absolute left-[70px] top-[150px] w-[400px] h-[408px] rounded-3xl border-2 border-white/15 bg-slate-900/85 px-5 py-4 flex flex-col" style="--d: .3s">
          <div class="text-[20px] font-black text-white whitespace-nowrap">🗂️ الصفحة الرئيسية مرتّبة حسب بياناتك</div>
          <div class="mt-3 flex-1 rounded-xl border-2 border-dashed border-slate-400 p-2.5 flex flex-col gap-2">
            <div class="h-[34px] rounded-lg bg-slate-600 flex items-center justify-center text-[16px] font-bold text-slate-200">الرأس: اسم العيادة</div>
            <div v-for="(s, i) in ranked" :key="s.t" class="sl-in rounded-lg flex items-center gap-3 px-3" :class="s.cls" :style="{ height: `${s.h}px`, '--d': `${1 + i * 0.7}s` }">
              <span class="w-[30px] h-[30px] rounded-full bg-white text-slate-900 text-[17px] font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
              <span class="font-black whitespace-nowrap" :class="s.txt">{{ s.t }}</span>
            </div>
            <div class="mt-auto h-[30px] rounded-lg bg-slate-600 flex items-center justify-center text-[15px] font-bold text-slate-300">تذييل الصفحة</div>
          </div>
        </div>

        <!-- principle -->
        <div class="sl-in absolute left-[500px] top-[150px] w-[710px] rounded-3xl border-2 border-amber-400/70 bg-amber-950/35 px-6 py-3" style="--d: 3.2s">
          <div class="text-[20px] font-black text-amber-300">🧱 مبدأ بصري لحل مشكلة تنظيمية</div>
          <p class="text-[19px] font-bold text-white leading-snug"><span class="font-black text-amber-200">التباين:</span> إبراز «ساعات العمل» لأنها أول ما يبحث عنه أغلب الزملاء في الجدول التكراري.</p>
        </div>
        <!-- access barrier -->
        <div class="sl-in absolute left-[500px] top-[262px] w-[710px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/40 px-6 py-3" style="--d: 4.6s">
          <div class="text-[20px] font-black text-sky-300">♿ حاجز وصول وحل مناسب</div>
          <div class="mt-1.5 flex gap-2">
            <span v-for="(b, j) in barriers" :key="b" class="sl-badge !text-[16px] !py-1"
                  :class="j === 0 ? 'border-sky-300 bg-sky-500/40 text-white' : 'border-white/15 bg-white/5 text-slate-400'">{{ b }}</span>
          </div>
          <p class="sl-in mt-1.5 text-[18px] font-bold text-white leading-snug" style="--d: 5.4s">
            ← لضعيف البصر: تباين واضح بين النص والخلفية مع مراعاة سهولة القراءة وعدم الاعتماد على اللون وحده.
          </p>
        </div>
        <!-- decision -->
        <div class="sl-in absolute left-[500px] top-[418px] w-[710px] h-[140px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/40 px-6 py-3" style="--d: 6.4s">
          <div class="flex items-center justify-center gap-6">
            <div class="flex items-center gap-2 text-[20px] font-black text-slate-500 line-through whitespace-nowrap">
              <span class="w-[30px] h-[30px] rounded-md border-2 border-slate-500"></span> ابدأ باختيار الألوان والخطوط
            </div>
            <div class="flex items-center gap-2 text-[22px] font-black text-white whitespace-nowrap">
              <span class="relative w-[30px] h-[30px] rounded-md border-2 border-emerald-300">
                <span class="sl-pop absolute inset-0 flex items-center justify-center text-emerald-300 text-[24px] leading-none" style="--d: 7.4s">✓</span>
              </span>
              ابدأ من المستخدم، ثم صمّم
            </div>
          </div>
          <p class="sl-in mt-3 text-[18px] font-bold text-emerald-50 leading-snug text-center" style="--d: 8s">
            📌 الدليل: ترتيب الأقسام مأخوذ من بيانات الزملاء، والحلول من احتياجات المستخدمين، لا من الذوق الشخصي.
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

/* illustrative answers for 9 classmates (not book data) */
const tally = [
  { t: 'ساعات العمل', n: 4 },
  { t: 'الخدمات', n: 3 },
  { t: 'الاتجاهات', n: 2 },
]
const users = [
  { i: '👓', t: 'مستخدم ضعيف البصر', needs: ['نص كبير وواضح', 'تباين قوي', 'نص بديل للصور'] },
  { i: '📵', t: 'شخص لا يتوفر لديه إنترنت منزلي', needs: ['صفحة خفيفة سريعة', 'تعمل على الهاتف', 'المهم في الأعلى'] },
]
const ranked = [
  { t: '🕘 ساعات العمل', h: 92, cls: 'bg-amber-500/80 border-2 border-amber-300', txt: 'text-[24px] text-white' },
  { t: '🩺 الخدمات', h: 64, cls: 'bg-slate-500/60', txt: 'text-[19px] text-slate-100' },
  { t: '🗺️ الاتجاهات', h: 56, cls: 'bg-slate-500/45', txt: 'text-[18px] text-slate-100' },
]
const barriers = ['ضعف التباين', 'صعوبة استخدام لوحة المفاتيح', 'غياب النص البديل']
</script>
