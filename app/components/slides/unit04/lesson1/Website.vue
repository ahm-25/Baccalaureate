<template>
  <!-- Strengths and limits of websites (book section 2). f = 0 the website combines what one-way media offer
       (book figure caption), 1 the five strengths with a browser that lights each one, 2 the three limits as
       mini-scenes, 3 key terms: strengths vs limits. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: one-way media flow into the website ───── -->
      <div v-if="f === 0" key="mix" class="absolute inset-0">
        <!-- traditional media (right) -->
        <div v-for="(m, i) in sources" :key="m.name" class="sl-in absolute left-[1000px] w-[210px] h-[100px] rounded-2xl border-2 bg-slate-900/85 flex items-center gap-3 px-4"
             :class="m.cls" :style="{ top: `${m.y - 50}px`, '--d': `${0.3 + i * 1.2}s` }" dir="rtl">
          <span class="text-[40px] leading-none">{{ m.icon }}</span>
          <div>
            <div class="text-[21px] font-black text-white">{{ m.name }}</div>
            <div class="text-[16px] font-bold text-slate-300">{{ m.carries }}</div>
          </div>
        </div>
        <div v-for="(m, i) in sources" :key="m.name + 'w'" class="sl-fade absolute left-[862px] w-[136px] h-[4px]"
             :style="{ top: `${m.y - 2}px`, '--d': `${0.8 + i * 1.2}s` }"><div class="absolute inset-0 sl-wire"></div></div>

        <!-- browser (centre) -->
        <div class="sl-pop absolute left-[420px] top-[170px] w-[440px] h-[370px] rounded-2xl border-2 border-violet-400 bg-slate-950/90 overflow-hidden shadow-[0_0_60px_rgba(139,92,246,.35)]" style="--d: .1s">
          <div class="h-[40px] bg-slate-800 flex items-center gap-2 px-3" dir="ltr">
            <span class="w-3 h-3 rounded-full bg-rose-400"></span><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 flex-1 h-[24px] rounded-md bg-slate-900 text-[14px] text-slate-400 font-mono flex items-center px-2">www.example.com</span>
          </div>
          <!-- video (from TV) -->
          <div class="absolute left-[16px] top-[56px] w-[220px] h-[130px] rounded-xl border-2 border-dashed border-slate-700"></div>
          <div class="sl-pop absolute left-[16px] top-[56px] w-[220px] h-[130px] rounded-xl border-2 border-rose-300 bg-rose-600/30 flex flex-col items-center justify-center" style="--d: 1.1s">
            <span class="text-[40px] leading-none">▶️</span><span class="mt-1 text-[16px] font-black text-rose-50">فيديو</span>
          </div>
          <!-- image (from newspaper) -->
          <div class="absolute left-[252px] top-[56px] w-[172px] h-[130px] rounded-xl border-2 border-dashed border-slate-700"></div>
          <div class="sl-pop absolute left-[252px] top-[56px] w-[172px] h-[130px] rounded-xl border-2 border-amber-300 bg-amber-600/30 flex flex-col items-center justify-center" style="--d: 3.5s">
            <span class="text-[40px] leading-none">🖼️</span><span class="mt-1 text-[16px] font-black text-amber-50">صور</span>
          </div>
          <!-- audio (from radio) -->
          <div class="absolute left-[16px] top-[200px] w-[408px] h-[56px] rounded-xl border-2 border-dashed border-slate-700"></div>
          <div class="sl-pop absolute left-[16px] top-[200px] w-[408px] h-[56px] rounded-xl border-2 border-emerald-300 bg-emerald-600/30 flex items-center gap-3 px-4" style="--d: 2.3s">
            <span class="text-[24px]">🔊</span>
            <span v-for="k in 14" :key="k" class="bar w-[6px] rounded-full bg-emerald-300" :style="{ animationDelay: `${(k % 6) * 0.12}s` }"></span>
            <span class="ml-auto text-[16px] font-black text-emerald-50" dir="rtl">صوت</span>
          </div>
          <!-- text (from newspaper) -->
          <div class="absolute left-[16px] top-[270px] w-[408px] h-[84px] rounded-xl border-2 border-dashed border-slate-700"></div>
          <div class="sl-pop absolute left-[16px] top-[270px] w-[408px] h-[84px] rounded-xl border-2 border-sky-300 bg-sky-600/25 flex flex-col justify-center gap-2 px-4" style="--d: 3.7s">
            <span class="h-[8px] w-full rounded bg-sky-200/70"></span>
            <span class="h-[8px] w-[85%] rounded bg-sky-200/70 self-end"></span>
            <span class="h-[8px] w-[60%] rounded bg-sky-200/70 self-end"></span>
          </div>
        </div>

        <!-- what one-way media lack (left) -->
        <div class="absolute left-[50px] top-[200px] w-[330px] flex flex-col gap-4" dir="rtl">
          <span class="sl-in text-[19px] font-black text-slate-300" style="--d: 4.6s">وأيضًا ما لا تتيحه الوسائل أحادية الاتجاه:</span>
          <div v-for="(x, i) in extras" :key="x" class="sl-pop h-[64px] rounded-2xl border-2 border-violet-300 bg-violet-600/30 flex items-center justify-center text-[20px] font-black text-white whitespace-nowrap"
               :style="{ '--d': `${5.2 + i * 0.7}s` }">{{ x }}</div>
        </div>
        <div class="absolute top-[505px] left-[50px] w-[330px] flex justify-center" dir="rtl">
          <span class="sl-pop sl-badge !text-[18px] border-emerald-400 bg-emerald-600/30 text-emerald-50" style="--d: 7s">🌐 = كل ذلك في مكان واحد</span>
        </div>
      </div>

      <!-- ───── f1: five strengths ───── -->
      <div v-else-if="f === 1" key="strengths" class="absolute inset-0">
        <div class="absolute left-[560px] top-[150px] w-[660px] flex flex-col gap-[10px]" dir="rtl">
          <div v-for="(s, i) in strengths" :key="s.text" class="sl-in h-[74px] rounded-2xl border-2 border-emerald-400/50 bg-emerald-950/40 flex items-center gap-4 px-5"
               :style="{ '--d': `${0.4 + i * 1.6}s` }">
            <span class="w-10 h-10 shrink-0 rounded-full bg-emerald-500 text-white text-[20px] font-black flex items-center justify-center">{{ i + 1 }}</span>
            <p class="text-[19px] font-bold text-white leading-snug">{{ s.text }}</p>
          </div>
        </div>
        <!-- browser that shows each strength -->
        <div class="sl-in absolute left-[60px] top-[160px] w-[440px] h-[380px] rounded-2xl border-2 border-violet-400 bg-slate-950/90 overflow-hidden" style="--d: .1s" dir="rtl">
          <div class="h-[40px] bg-slate-800 flex items-center gap-2 px-3" dir="ltr">
            <span class="w-3 h-3 rounded-full bg-rose-400"></span><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 flex-1 h-[24px] rounded-md bg-slate-900 text-[14px] text-slate-400 font-mono flex items-center px-2">www.example.com</span>
          </div>
          <!-- ① variety -->
          <div class="sl-pop absolute right-[16px] top-[54px] w-[408px] h-[86px] flex gap-2" :style="{ '--d': `${0.7}s` }">
            <span class="w-[120px] rounded-lg bg-rose-600/40 border border-rose-300 flex items-center justify-center text-[30px]">▶️</span>
            <span class="w-[100px] rounded-lg bg-amber-600/40 border border-amber-300 flex items-center justify-center text-[30px]">🖼️</span>
            <span class="flex-1 rounded-lg bg-sky-600/25 border border-sky-300 flex flex-col justify-center gap-2 px-3">
              <span class="h-[7px] rounded bg-sky-200/70"></span><span class="h-[7px] w-[80%] rounded bg-sky-200/70"></span><span class="h-[7px] w-[55%] rounded bg-sky-200/70"></span>
            </span>
          </div>
          <!-- ② update -->
          <div class="sl-pop absolute right-[16px] top-[152px] w-[408px] h-[40px] rounded-lg border border-amber-300 bg-amber-600/25 flex items-center gap-2 px-3 text-[17px] font-black text-amber-50" :style="{ '--d': `${2.3}s` }">
            <span class="spin inline-block">🔄</span> آخر تحديث: الآن
          </div>
          <!-- ③ anywhere -->
          <div class="sl-pop absolute right-[16px] top-[202px] w-[408px] h-[40px] rounded-lg border border-sky-300 bg-sky-600/25 flex items-center gap-2 px-3 text-[17px] font-black text-sky-50" :style="{ '--d': `${3.9}s` }">
            🌍 من المنزل · من المدرسة · من مدينة أخرى 📶
          </div>
          <!-- ④ two-way -->
          <div class="sl-pop absolute right-[16px] top-[252px] w-[408px] h-[50px] flex gap-2" :style="{ '--d': `${5.5}s` }">
            <span class="flex-1 rounded-lg border border-slate-500 bg-slate-800 flex items-center px-3 text-[16px] font-bold text-slate-400">💬 اكتب تعليقًا…</span>
            <span class="w-[80px] rounded-lg bg-emerald-500 flex items-center justify-center text-[16px] font-black text-white">إرسال</span>
          </div>
          <!-- ⑤ browser / install -->
          <div class="sl-pop absolute right-[16px] top-[316px] w-[408px] h-[46px] flex gap-2" :style="{ '--d': `${7.1}s` }">
            <span class="flex-1 rounded-lg border border-violet-300 bg-violet-600/30 flex items-center justify-center text-[16px] font-black text-white whitespace-nowrap">🌐 يعمل من المتصفح</span>
            <span class="flex-1 rounded-lg border border-dashed border-violet-300 flex items-center justify-center text-[15px] font-black text-violet-200 whitespace-nowrap">⬇️ تثبيت (بعض التطبيقات)</span>
          </div>
        </div>
      </div>

      <!-- ───── f2: three limits ───── -->
      <div v-else-if="f === 2" key="limits" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-6" dir="rtl">
          <div v-for="(l, i) in limits" :key="l.text" class="sl-in w-[370px] h-[415px] rounded-3xl border-2 border-rose-400/50 bg-slate-900/85 flex flex-col"
               :style="{ '--d': `${0.3 + i * 2.2}s` }">
            <!-- scene -->
            <div class="relative h-[205px] m-3 rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden">
              <!-- ① no connection -->
              <template v-if="i === 0">
                <div class="absolute left-[95px] top-[24px] w-[150px] h-[110px] rounded-xl border-2 border-slate-500 bg-slate-900">
                  <div class="sl-out absolute inset-0 flex items-center justify-center text-[30px]" :style="{ '--d': `${1.8}s` }">📶</div>
                  <div class="sl-fade absolute inset-0 flex flex-col items-center justify-center" :style="{ '--d': `${1.8}s` }">
                    <span class="text-[32px] leading-none">🚫</span>
                    <span class="mt-1 text-[15px] font-black text-rose-300">لا يوجد اتصال</span>
                  </div>
                </div>
                <div class="absolute inset-x-0 top-[148px] flex justify-center">
                  <span class="sl-pop px-3 py-1 rounded-lg border border-amber-300 bg-amber-600/25 text-[15px] font-black text-amber-50 whitespace-nowrap" :style="{ '--d': `${2.6}s` }">بعض المواقع: محتوى محدود دون اتصال</span>
                </div>
              </template>
              <!-- ② the user has to open it -->
              <template v-else-if="i === 1">
                <div class="absolute left-[200px] top-[30px] w-[130px] h-[100px] rounded-xl border-2 border-violet-400 bg-violet-950/60 flex flex-col items-center justify-center">
                  <span class="text-[34px] leading-none">🌐</span>
                  <span class="mt-1 text-[14px] font-black text-violet-200">ينتظر الزوار…</span>
                </div>
                <div class="walk absolute top-[52px] text-[40px] leading-none" :style="{ animationDelay: `${2.8}s` }">🚶</div>
                <div class="absolute left-[14px] top-[104px] w-[190px] flex justify-center">
                  <span class="sl-fade text-[14px] font-black text-slate-200 whitespace-nowrap" :style="{ '--d': `${4}s` }">👆 يجب أن يفتحه بنفسه</span>
                </div>
                <div class="absolute inset-x-0 top-[148px] flex justify-center">
                  <span class="sl-pop px-3 py-1 rounded-lg border border-sky-300 bg-sky-600/25 text-[15px] font-black text-sky-50 whitespace-nowrap" :style="{ '--d': `${4.8}s` }">🔔 إلا إذا استخدمت الخدمة إشعارات</span>
                </div>
              </template>
              <!-- ③ speed depends on device and network -->
              <template v-else>
                <div v-for="(b, k) in speeds" :key="b.label" class="absolute left-[16px] right-[16px]" :style="{ top: `${28 + k * 82}px` }">
                  <div class="text-[15px] font-black text-slate-200">{{ b.label }}</div>
                  <div class="mt-1.5 h-[22px] rounded-full bg-slate-800 overflow-hidden" dir="ltr">
                    <div class="h-full rounded-full" :class="[b.cls, b.anim]" :style="{ animationDelay: `${5}s` }"></div>
                  </div>
                </div>
              </template>
            </div>
            <!-- book text -->
            <div class="px-5 pt-1 flex gap-3">
              <span class="w-9 h-9 shrink-0 rounded-full bg-rose-500 text-white text-[18px] font-black flex items-center justify-center">{{ i + 1 }}</span>
              <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ l.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ───── f3: key terms ───── -->
      <div v-else key="balance" class="absolute inset-0">
        <div class="absolute top-[160px] inset-x-0 flex justify-center items-start gap-8" dir="rtl">
          <div class="sl-in w-[520px] rounded-3xl border-2 border-emerald-400/70 bg-emerald-950/45 px-7 py-6" style="--d: .3s">
            <div class="text-[28px] font-black text-emerald-300">✅ نقاط قوة الموقع الإلكتروني</div>
            <div class="mt-5 grid grid-cols-2 gap-3">
              <span v-for="(t, i) in plus" :key="t" class="sl-pop h-[64px] rounded-2xl border-2 border-emerald-300 bg-emerald-600/30 flex items-center justify-center text-[22px] font-black text-white whitespace-nowrap"
                    :style="{ '--d': `${0.9 + i * 0.5}s` }">{{ t }}</span>
            </div>
          </div>
          <div class="sl-pop self-center text-[70px] leading-none" style="--d: 3s">⚖️</div>
          <div class="sl-in w-[520px] rounded-3xl border-2 border-rose-400/70 bg-rose-950/40 px-7 py-6" style="--d: 3.3s">
            <div class="text-[28px] font-black text-rose-300">❌ قيود الموقع الإلكتروني</div>
            <div class="mt-5 flex flex-col gap-3">
              <span v-for="(t, i) in minus" :key="t" class="sl-pop h-[64px] rounded-2xl border-2 border-rose-300 bg-rose-600/30 flex items-center justify-center text-[22px] font-black text-white whitespace-nowrap"
                    :style="{ '--d': `${3.9 + i * 0.6}s` }">{{ t }}</span>
            </div>
          </div>
        </div>
        <div class="absolute top-[455px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in sl-card border-white/15 px-8 py-3 text-[22px] font-bold text-slate-100" style="--d: 5.6s">
            💡 لذلك نختار الموقع عندما تناسبه <span class="text-amber-300 font-black">الرسالة والجمهور</span>، ونُكمله بوسائل أخرى عند الحاجة.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SlidesTitle from '~/components/slides/Title.vue'

const props = defineProps<{ f: number }>()

const sources = [
  { icon: '📺', name: 'التلفزيون', carries: 'فيديو + صوت', y: 236, cls: 'border-rose-400/60' },
  { icon: '📻', name: 'الراديو', carries: 'صوت', y: 366, cls: 'border-emerald-400/60' },
  { icon: '📰', name: 'الصحيفة', carries: 'نص + صور', y: 496, cls: 'border-amber-400/60' },
]
const extras = ['🔄 تحديث في أي وقت', '💬 تفاعل بالنماذج والتعليقات']

const strengths = [
  { text: 'يمكن الجمع بين معلومات متنوعة مثل النص والصور والفيديو وعرضها معًا.' },
  { text: 'يمكن تحديث المعلومات في أي وقت.' },
  { text: 'يمكن الوصول إليه من أي مكان يتوفر فيه اتصال مناسب بالشبكة.' },
  { text: 'التفاعل ثنائي الاتجاه مع المستخدمين ممكن من خلال النماذج والتعليقات وغيرها.' },
  { text: 'يمكن استخدامه من المتصفح، وقد تسمح بعض تطبيقات الويب أيضًا بالتثبيت.' },
]
const limits = [
  { text: 'تحتاج معظم وظائف المواقع إلى اتصال بالشبكة، لكن يمكن تصميم بعض المواقع أو تطبيقات الويب لتوفير محتوى أو وظائف محدودة دون اتصال.' },
  { text: 'غالبًا يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه، ما لم تستخدم الخدمة إشعارات أو قنوات أخرى.' },
  { text: 'قد تختلف سرعة العرض والتحميل حسب جهاز المستخدم وبيئة الشبكة.' },
]
const speeds = [
  { label: '💻 جهاز حديث + شبكة قوية', cls: 'bg-emerald-400', anim: 'fill-fast' },
  { label: '📱 جهاز قديم + شبكة ضعيفة', cls: 'bg-rose-400', anim: 'fill-slow' },
]
const plus = ['متنوع', 'قابل للتحديث', 'عالمي', 'ثنائي الاتجاه']
const minus = ['يحتاج إلى إنترنت', 'يجب على المستخدمين البحث عنه']

const head = computed(() => {
  if (props.f === 0) return { icon: '🌐', title: 'ماذا يجمع الموقع الإلكتروني؟', sub: 'يجمع الموقع الإلكتروني بين مزايا لا تتوفر في وسائل الإعلام أحادية الاتجاه' }
  if (props.f === 1) return { icon: '✅', title: 'نقاط قوة المواقع الإلكترونية', sub: '' }
  if (props.f === 2) return { icon: '⚠️', title: 'قيود المواقع الإلكترونية', sub: '' }
  return { icon: '⚖️', title: 'القوة والقيود في كلمات', sub: 'مصطلحات أساسية' }
})
</script>

<style scoped>
.bar { height: 10px; animation: eq .7s ease-in-out infinite alternate; }
@keyframes eq { to { height: 30px } }
.spin { animation: spin 1.6s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }
.walk { left: 30px; opacity: 0; animation: walk 2s ease-in-out forwards; }
@keyframes walk { 0% { left: 30px; opacity: 0 } 15% { opacity: 1 } 100% { left: 150px; opacity: 1 } }
.fill-fast { width: 0; animation: fill 1.2s ease-out forwards; }
.fill-slow { width: 0; animation: fill-s 6s linear forwards; }
@keyframes fill { to { width: 100% } }
@keyframes fill-s { 0% { width: 0 } 60% { width: 35% } 100% { width: 70% } }
</style>
