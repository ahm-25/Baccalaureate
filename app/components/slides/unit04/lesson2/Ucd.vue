<template>
  <!-- User-centred design. f = 0 definition + the UCD cycle around the user (book text (2) and its image),
       1 the goals of good design (usability, digital accessibility) + the book's «الفكرة الرئيسة». -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '🎯' : '🏆'" :title="f === 0 ? 'التصميم المتمحور حول المستخدم' : 'أهداف التصميم الجيد'"
                 :sub="f === 0 ? 'UCD – User-Centered Design' : 'قابلية الاستخدام وإمكانية الوصول الرقمي'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + cycle ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0">
        <!-- orbit -->
        <svg class="sl-fade absolute left-[120px] top-[180px] w-[520px] h-[350px]" style="--d: .6s" viewBox="0 0 520 350">
          <ellipse cx="260" cy="175" rx="250" ry="165" fill="none" stroke="#38bdf8" stroke-opacity=".45" stroke-width="3" stroke-dasharray="12 10" class="orbit" />
          <circle r="9" fill="#7dd3fc">
            <animateMotion dur="7s" repeatCount="indefinite" path="M 10,175 a 250,165 0 1,1 500,0 a 250,165 0 1,1 -500,0" />
          </circle>
        </svg>
        <!-- the user in the centre -->
        <div class="absolute left-[315px] top-[290px] w-[130px] h-[130px]">
          <div class="sl-pop w-full h-full" style="--d: .3s">
            <div class="pulse w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex flex-col items-center justify-center" dir="rtl">
              <span class="text-[54px] leading-none">👤</span>
              <span class="text-[17px] font-black text-white whitespace-nowrap">المستخدم</span>
            </div>
          </div>
        </div>
        <!-- steps -->
        <div v-for="(n, i) in nodes" :key="n.t" class="absolute w-[230px] h-[64px]" :style="{ left: `${n.x}px`, top: `${n.y}px` }">
          <div class="sl-pop w-full h-full rounded-2xl border-2 flex items-center gap-2 px-3" :class="n.cls" :style="{ '--d': `${1.2 + i * 1}s` }" dir="rtl">
            <span class="text-[26px] font-black text-white shrink-0">{{ '①②③④⑤'[i] }}</span>
            <span class="text-[16px] font-black text-white leading-tight">{{ n.t }}</span>
          </div>
        </div>

        <!-- definition -->
        <div class="sl-in absolute left-[750px] top-[160px] w-[460px] rounded-3xl border-2 border-sky-400/70 bg-sky-950/50 px-7 py-5" style="--d: .4s" dir="rtl">
          <div class="text-[26px] font-black text-white leading-tight">التصميم المتمحور حول المستخدم <span class="font-mono text-sky-300" dir="ltr">(UCD)</span></div>
          <p class="mt-2 text-[21px] font-bold text-slate-100 leading-relaxed">
            نهج يجعل <span class="sl-hl-amber font-black">فهم المستخدمين</span> واحتياجاتهم وسياق استخدامهم <span class="sl-hl-green font-black">أساسًا لقرارات التصميم</span>.
          </p>
        </div>
        <div class="sl-in absolute left-[750px] top-[378px] w-[460px] rounded-2xl border-2 border-dashed border-violet-400/70 bg-violet-950/35 px-6 py-3" style="--d: 6.6s" dir="rtl">
          <p class="text-[19px] font-bold text-violet-50 leading-snug">🧑 وشخصية المستخدم أداة ممكنة ضمن هذه العملية وليست شرطًا دائمًا.</p>
        </div>
        <div class="sl-in absolute left-[750px] top-[476px] w-[460px] text-[17px] font-bold text-slate-400 leading-snug" style="--d: 7.2s" dir="rtl">
          التصميم المتمحور حول المستخدم يدور حول المستخدم الفعلي.
        </div>
      </div>

      <!-- ───── f1: goals + key idea ───── -->
      <div v-else key="goals" class="absolute inset-0" dir="rtl">
        <div v-for="(g, i) in goals" :key="g.t" class="sl-in absolute top-[150px] w-[555px] h-[272px] rounded-3xl border-2 px-7 py-4 flex flex-col"
             :class="g.cls" :style="{ left: `${g.x}px`, '--d': `${0.3 + i * 2.4}s` }">
          <div class="text-[26px] font-black text-white whitespace-nowrap">{{ g.icon }} {{ g.t }} <span class="text-[16px] font-mono text-slate-400" dir="ltr">({{ g.en }})</span></div>
          <p class="mt-1 text-[21px] font-bold text-slate-100 leading-snug">{{ g.def }}</p>
          <p class="mt-2 text-[17px] font-bold text-slate-300 leading-snug">📖 {{ g.term }}</p>
          <div class="mt-auto flex gap-2.5">
            <span v-for="(c, j) in g.chips" :key="c" class="sl-pop sl-badge !text-[17px] border-white/20 bg-white/10 text-white"
                  :style="{ '--d': `${1.2 + i * 2.4 + j * 0.3}s` }">{{ c }}</span>
          </div>
        </div>
        <div class="absolute top-[440px] inset-x-0 flex justify-center">
          <div class="sl-in w-[1140px] rounded-3xl border-2 border-amber-400/70 bg-amber-950/40 px-7 py-3" style="--d: 5.4s">
            <div class="text-[19px] font-black text-amber-300">💡 الفكرة الرئيسة</div>
            <p class="text-[20px] font-bold text-white leading-snug">
              صمّم انطلاقًا من المستخدم: تخيّل المستخدم <span class="text-sky-300">(شخصية المستخدم)</span>، وخطّط للتخطيط قبل المظهر <span class="text-violet-300">(المخطط الهيكلي)</span>،
              وطبّق <span class="text-amber-300">التباين والتكرار والمحاذاة والتقارب</span>، وأبقِ كل قرار مرتكزًا على المستخدم.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

/* clockwise from the top of the orbit (centre 380,355) */
const nodes = [
  { t: 'فهم المستخدم والمهمة والظروف', x: 265, y: 158, cls: 'border-sky-400 bg-sky-900/90' },
  { t: 'تنظيم المعلومات', x: 493, y: 272, cls: 'border-violet-400 bg-violet-900/90' },
  { t: 'تصميم الحل', x: 422, y: 456, cls: 'border-amber-400 bg-amber-900/90' },
  { t: 'الاختبار مع المستخدمين', x: 110, y: 456, cls: 'border-emerald-400 bg-emerald-900/90' },
  { t: 'تكرار التحسين', x: 27, y: 272, cls: 'border-rose-400 bg-rose-900/90' },
]

const goals = [
  { icon: '✅', t: 'قابلية الاستخدام', en: 'Usability', x: 655, cls: 'border-emerald-400/70 bg-emerald-950/40',
    def: 'أي سهولة وفاعلية إنجاز المهمة.', term: 'مدى سهولة استخدام المستخدمين للموقع.',
    chips: ['⚡ سهولة', '🎯 فاعلية'] },
  { icon: '♿', t: 'إمكانية الوصول الرقمي', en: 'Accessibility', x: 70, cls: 'border-sky-400/70 bg-sky-950/40',
    def: 'أي تمكين الأشخاص ذوي الإعاقة من استخدام الموقع والتفاعل معه.',
    term: 'تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها.',
    chips: ['👁️ الرؤية', '⌨️ لوحة المفاتيح', '🔊 السمع'] },
]
</script>

<style scoped>
.orbit { animation: orbit 2s linear infinite; }
@keyframes orbit { to { stroke-dashoffset: -44 } }
.pulse { animation: pulse 2.4s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, .55) } 50% { box-shadow: 0 0 0 22px rgba(56, 189, 248, 0) } }
</style>
