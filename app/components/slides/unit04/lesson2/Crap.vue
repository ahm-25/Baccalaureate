<template>
  <!-- The four design principles (CRAP). f = 0 the four principles + their purpose (book table),
       1 Contrast + Repetition, 2 Alignment + Proximity: bad → good as in book figure 4.2.2, with the table's techniques,
       3 «توقف وفكر»: which principle groups related items, and which makes the most important one stand out. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: the four principles ───── -->
      <div v-if="f === 0" key="intro" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <p class="sl-in text-[23px] font-bold text-slate-200" style="--d: .2s">
            تساعد المبادئ البصرية الأربعة الآتية على <span class="sl-hl-green font-black">تنظيم الشكل</span> وجعل الصفحة <span class="sl-hl-green font-black">أسهل للفهم</span>.
          </p>
        </div>
        <div class="absolute top-[204px] inset-x-0 flex justify-center gap-5">
          <div v-for="(p, i) in principles" :key="p.k" class="w-[270px]">
            <div class="sl-in h-[292px] rounded-3xl border-2 px-4 py-4 flex flex-col items-center text-center" :class="p.card" :style="{ '--d': `${0.8 + i * 1.3}s` }">
              <span class="w-[62px] h-[62px] rounded-full text-[36px] font-black font-mono flex items-center justify-center shrink-0" :class="p.dot">{{ p.k }}</span>
              <span class="mt-1.5 text-[19px] font-black font-mono text-slate-300" dir="ltr">{{ p.en }}</span>
              <span class="text-[28px] font-black text-white leading-tight">{{ p.ar }}</span>
              <p class="mt-2 text-[18px] font-bold text-slate-200 leading-snug">{{ p.purpose }}</p>
            </div>
          </div>
        </div>
        <div class="absolute top-[512px] inset-x-0 flex justify-center">
          <div class="sl-in rounded-2xl border-2 border-amber-400/70 bg-amber-950/40 px-7 py-2.5 text-[21px] font-black text-amber-100" style="--d: 6.4s">
            ⚠️ لكنها <span class="text-amber-300">لا تحل محل</span> معايير قابلية الاستخدام أو إمكانية الوصول.
          </div>
        </div>
      </div>

      <!-- ───── f1 / f2: bad → good ───── -->
      <div v-else-if="f === 1 || f === 2" :key="'pair' + f" class="absolute inset-0">
        <div v-for="(r, i) in pairs[f - 1]" :key="r.k" class="absolute left-0 w-full h-[200px]" :style="{ top: `${150 + i * 218}px` }">
          <!-- principle tile -->
          <div class="absolute left-[1010px] top-0 w-[210px] h-[200px]">
            <div class="sl-in w-full h-full rounded-3xl border-2 flex flex-col items-center justify-center text-center px-3" :class="r.card" :style="{ '--d': `${0.2 + i * 3.8}s` }" dir="rtl">
              <span class="w-[50px] h-[50px] rounded-full text-[28px] font-black font-mono flex items-center justify-center" :class="r.dot">{{ r.k }}</span>
              <span class="mt-1 text-[17px] font-black font-mono text-slate-300" dir="ltr">{{ r.en }}</span>
              <span class="text-[26px] font-black text-white leading-tight">{{ r.ar }}</span>
              <span class="mt-1 text-[16px] font-bold text-slate-200 leading-snug">{{ r.fig }}</span>
            </div>
          </div>

          <!-- bad / good mock-ups -->
          <div v-for="side in sides" :key="side.good ? 'g' : 'b'" class="absolute top-0 w-[310px] h-[200px]" :style="{ left: `${side.x}px` }">
            <div class="sl-in w-full h-full" :style="{ '--d': `${(side.good ? 1.8 : 0.7) + i * 3.8}s` }">
              <div class="relative w-full h-full rounded-2xl border-[3px] bg-slate-100 text-slate-800 px-5 pt-6 pb-3 overflow-hidden" :class="side.good ? 'border-emerald-400' : 'border-rose-400'" dir="rtl">
                <span class="absolute top-1.5 left-3 px-2.5 rounded-lg text-[14px] font-black text-white whitespace-nowrap" :class="side.good ? 'bg-emerald-500' : 'bg-rose-500'">{{ side.good ? '✓ جيد' : '✗ سيئ' }}</span>

                <!-- Contrast -->
                <template v-if="r.k === 'C'">
                  <div v-if="!side.good" class="flex flex-col gap-1 text-[15px] font-bold">
                    <span>أخبار اليوم</span><span>تفاصيل الخبر العاجل الكبير هنا.</span><span>اقرأ المزيد</span><span>زر الاشتراك</span><span>معلومات التذييل</span>
                  </div>
                  <div v-else class="flex flex-col">
                    <span class="text-[30px] font-black leading-tight">أخبار اليوم</span>
                    <span class="text-[15px] font-bold">تفاصيل الخبر العاجل الكبير هنا.</span>
                    <span class="text-[13px] font-bold text-slate-400">اقرأ المزيد</span>
                    <span class="btn self-start mt-3 px-7 py-1.5 rounded-lg bg-slate-900 text-white text-[15px] font-black">اشترك</span>
                  </div>
                </template>

                <!-- Repetition -->
                <template v-else-if="r.k === 'R'">
                  <div v-if="!side.good" class="flex flex-col">
                    <span class="text-[19px] font-black border-b-2 border-slate-400 pb-0.5">القسم أ</span>
                    <span class="mt-3 text-[14px] font-normal text-slate-500">القسم ب</span>
                    <span class="mt-1 text-[16px] font-bold italic border-b border-dashed border-slate-400">القسم ج</span>
                    <span class="mt-4 text-[13px] font-black">القسم د</span>
                  </div>
                  <div v-else class="flex flex-col gap-2">
                    <span v-for="s in ['أ', 'ب', 'ج', 'د']" :key="s" class="text-[16px] font-black border-b-2 border-slate-300 pb-0.5">القسم {{ s }}</span>
                  </div>
                </template>

                <!-- Alignment -->
                <template v-else-if="r.k === 'A'">
                  <div class="relative flex flex-col gap-0.5 text-[15px] font-bold" :class="side.good ? 'items-start' : ''">
                    <span v-if="side.good" class="guide absolute -right-2 -top-1 -bottom-1 w-0 border-r-2 border-dashed border-emerald-500"></span>
                    <span v-for="(c, j) in contact" :key="c" :style="side.good ? {} : { marginRight: `${badOffsets[j]}px` }">{{ c }}<span v-if="j === 3" dir="ltr" class="inline-block">555 - 1234</span><span v-if="j === 4" dir="ltr" class="inline-block">a@b.com</span></span>
                  </div>
                </template>

                <!-- Proximity -->
                <template v-else>
                  <div v-if="!side.good" class="flex flex-col gap-[3px] text-[14px] font-black">
                    <template v-for="pr in products" :key="pr.n"><span>{{ pr.n }}</span><span dir="ltr" class="text-right">{{ pr.p }}</span></template>
                  </div>
                  <div v-else class="flex flex-col gap-[16px] text-[15px] font-black">
                    <div v-for="pr in products" :key="pr.n" class="group-box flex flex-col leading-tight rounded-md">
                      <span>{{ pr.n }}</span><span dir="ltr" class="text-right">{{ pr.p }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="sl-fade absolute left-[636px] top-[98px] w-[40px] h-[4px]" :style="{ '--d': `${1.5 + i * 3.8}s` }">
            <div class="relative w-full h-full flow-l"><span class="ah ah-l"></span></div>
          </div>

          <!-- techniques (book table) -->
          <div class="absolute left-[60px] top-0 w-[245px] h-[200px]">
            <div class="sl-in w-full h-full rounded-2xl border-2 border-white/10 bg-slate-900/85 px-4 py-3" :style="{ '--d': `${2.8 + i * 3.8}s` }" dir="rtl">
              <div class="text-[17px] font-black mb-1" :class="r.tcls">🛠️ تقنيات وأمثلة</div>
              <p v-for="t in r.tech" :key="t" class="text-[15px] font-bold text-slate-100 leading-snug mb-1">• {{ t }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f3: stop and think ───── -->
      <div v-else key="think" class="absolute inset-0" dir="rtl">
        <!-- proximity: scattered dots gather into groups -->
        <div class="sl-in absolute left-[655px] top-[160px] w-[555px] h-[380px] rounded-3xl border-2 border-sky-400/60 bg-sky-950/35 px-6 py-4 flex flex-col items-center" style="--d: .4s">
          <div class="text-[24px] font-black text-white whitespace-nowrap">أي مبدأ يجمع العناصر المرتبطة معًا؟</div>
          <div class="relative w-[360px] h-[190px] mt-3">
            <span v-for="(d, j) in dots" :key="j" class="gather absolute w-[34px] h-[34px] rounded-lg" :class="d.cls"
                  :style="{ left: `${d.x}px`, top: `${d.y}px`, '--sx': `${d.sx}px`, '--sy': `${d.sy}px` }"></span>
          </div>
          <div class="sl-pop mt-auto flex items-center gap-3 px-6 py-2.5 rounded-2xl border-2 border-sky-300 bg-sky-600/40" style="--d: 3s">
            <span class="w-[42px] h-[42px] rounded-full bg-sky-400 text-sky-950 text-[24px] font-black font-mono flex items-center justify-center">P</span>
            <span class="text-[28px] font-black text-white whitespace-nowrap">التقارب</span>
          </div>
        </div>
        <!-- contrast: one bar stands out -->
        <div class="sl-in absolute left-[70px] top-[160px] w-[555px] h-[380px] rounded-3xl border-2 border-amber-400/60 bg-amber-950/30 px-6 py-4 flex flex-col items-center" style="--d: 3.8s">
          <div class="text-[24px] font-black text-white whitespace-nowrap">وأيها يجعل العنصر الأهم بارزًا؟</div>
          <div class="w-[360px] h-[190px] mt-3 flex flex-col justify-center gap-3" dir="rtl">
            <span class="h-[18px] w-[70%] rounded bg-slate-500"></span>
            <span class="stand h-[18px] w-[70%] rounded"></span>
            <span class="h-[18px] w-[70%] rounded bg-slate-500"></span>
            <span class="h-[18px] w-[70%] rounded bg-slate-500"></span>
          </div>
          <div class="sl-pop mt-auto flex items-center gap-3 px-6 py-2.5 rounded-2xl border-2 border-amber-300 bg-amber-600/40" style="--d: 6s">
            <span class="w-[42px] h-[42px] rounded-full bg-amber-400 text-amber-950 text-[24px] font-black font-mono flex items-center justify-center">C</span>
            <span class="text-[28px] font-black text-white whitespace-nowrap">التباين</span>
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
  { icon: '🧱', title: 'المبادئ الأربعة للتصميم', sub: 'مبادئ CRAP' },
  { icon: '🔆', title: 'التباين والتكرار', sub: 'شكل 4.2.2 – مبادئ تصميم CRAP' },
  { icon: '📏', title: 'المحاذاة والتقارب', sub: 'شكل 4.2.2 – مبادئ تصميم CRAP' },
  { icon: '💡', title: 'توقف وفكر', sub: 'أي مبدأ يجمع العناصر المرتبطة معًا، وأيها يجعل العنصر الأهم بارزًا؟' },
]

const principles = [
  { k: 'C', en: 'Contrast', ar: 'التباين', dot: 'bg-amber-400 text-amber-950', card: 'border-amber-400/70 bg-amber-950/35',
    purpose: 'جعل أولوية المعلومات واضحة وإبراز أهم العناصر فورًا' },
  { k: 'R', en: 'Repetition', ar: 'التكرار', dot: 'bg-violet-400 text-violet-950', card: 'border-violet-400/70 bg-violet-950/40',
    purpose: 'تكرار خصائص معينة لتحقيق الاتساق في التصميم ككل، مما يتيح للمستخدمين التنقل دون تشتت' },
  { k: 'A', en: 'Alignment', ar: 'المحاذاة', dot: 'bg-emerald-400 text-emerald-950', card: 'border-emerald-400/70 bg-emerald-950/35',
    purpose: 'محاذاة موضع كل عنصر إلى خط أساس مشترك، مما يمنح الشاشة بأكملها نظامًا' },
  { k: 'P', en: 'Proximity', ar: 'التقارب', dot: 'bg-sky-400 text-sky-950', card: 'border-sky-400/70 bg-sky-950/40',
    purpose: 'وضع المعلومات المرتبطة قريبة من بعضها حتى تُدرَك كمجموعة واحدة من أول نظرة' },
]

const rows = [
  { ...principles[0]!, fig: 'إبراز الأشياء المهمة', tcls: 'text-amber-300',
    tech: ['اجعل العناوين واضحة مقارنة بالنص', 'استخدم تباينًا واضحًا للأزرار المهمة مع مراعاة سهولة القراءة وعدم الاعتماد على اللون وحده'] },
  { ...principles[1]!, fig: 'إعادة استخدام الأنماط لتحقيق الاتساق', tcls: 'text-violet-300',
    tech: ['وحّد اللون والحجم والخط للعناوين في كل صفحة', 'طابق تصميم أيقونات النقاط'] },
  { ...principles[2]!, fig: 'المحاذاة إلى خط أساسي مشترك', tcls: 'text-emerald-300',
    tech: ['حاذِ العناصر حسب اتجاه اللغة وشبكة التصميم: في العربية يكون اتجاه النص الأساسي من اليمين إلى اليسار', 'استخدم قواعد محاذاة متسقة'] },
  { ...principles[3]!, fig: 'تجميع العناصر ذات الصلة معًا', tcls: 'text-sky-300',
    tech: ['اجمع صور المنتجات وأسماءها وأسعارها معًا', 'اترك مسافات مناسبة (هوامش) بين العناصر'] },
]
const pairs = [[rows[0]!, rows[1]!], [rows[2]!, rows[3]!]]
const sides = [{ good: false, x: 680 }, { good: true, x: 320 }]

/* contents of book figure 4.2.2 */
const contact = ['الاسم: جون', 'العمر: 25', 'المدينة: نيويورك', 'الهاتف: ', 'البريد الإلكتروني: ']
const badOffsets = [40, 62, 18, 74, 6]
const products = [{ n: 'المنتج أ', p: '10$' }, { n: 'المنتج ب', p: '20$' }, { n: 'المنتج ج', p: '30$' }]

/* proximity scene: final grouped positions + scattered start offsets */
const dots = [
  { x: 40, y: 40, sx: 120, sy: 90, cls: 'bg-sky-400' },
  { x: 80, y: 40, sx: 210, sy: 10, cls: 'bg-sky-400' },
  { x: 40, y: 80, sx: 250, sy: 30, cls: 'bg-sky-400' },
  { x: 80, y: 80, sx: 60, sy: 60, cls: 'bg-sky-400' },
  { x: 240, y: 80, sx: -170, sy: -60, cls: 'bg-violet-400' },
  { x: 280, y: 80, sx: -70, sy: 40, cls: 'bg-violet-400' },
  { x: 240, y: 120, sx: -200, sy: 20, cls: 'bg-violet-400' },
  { x: 280, y: 120, sx: -140, sy: -80, cls: 'bg-violet-400' },
]
</script>

<style scoped>
.flow-l { background: repeating-linear-gradient(90deg, #6ee7b7 0 10px, transparent 10px 16px); animation: flowL .8s linear infinite; }
@keyframes flowL { to { background-position: -16px 0 } }
.ah { position: absolute; top: -6px; width: 0; height: 0; border-top: 8px solid transparent; border-bottom: 8px solid transparent; }
.ah-l { left: -10px; border-right: 12px solid #6ee7b7; }

.btn { animation: btn 1.6s ease-in-out 3s infinite; }
@keyframes btn { 0%, 100% { box-shadow: 0 0 0 0 rgba(15, 23, 42, .5) } 50% { box-shadow: 0 0 0 8px rgba(15, 23, 42, 0) } }
.guide { animation: guide 1s ease 2.6s both; }
@keyframes guide { from { opacity: 0 } to { opacity: 1 } }
.group-box { animation: grp 1.2s ease 6.4s both; }
@keyframes grp { from { background: transparent } to { background: rgba(14, 165, 233, .15) } }

.gather { animation: gather 1.4s cubic-bezier(.5, 0, .2, 1) 1.4s both; }
@keyframes gather { from { transform: translate(var(--sx), var(--sy)) rotate(25deg) } to { transform: none } }
.stand { background: #64748b; animation: stand 1s cubic-bezier(.3, 1.6, .5, 1) 5s both; }
@keyframes stand { to { background: #fbbf24; height: 34px; width: 95%; box-shadow: 0 0 24px rgba(251, 191, 36, .6) } }
</style>
