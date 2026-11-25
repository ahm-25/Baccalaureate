<template>
  <!-- Comparing media (book section 1). f = 0 what each medium carries (text / images / video / audio),
       1 key terms: one-way vs two-way, 2 the book table's characteristics row by row. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="head.icon" :title="head.title" :sub="head.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: what each medium carries ───── -->
      <div v-if="f === 0" key="carry" class="absolute inset-0">
        <div class="absolute top-[145px] inset-x-0 flex justify-center">
          <div class="grid grid-cols-[150px_repeat(5,190px)] gap-x-[14px] gap-y-[8px]" dir="rtl">
            <!-- header row -->
            <div class="h-[110px] flex items-end justify-center pb-2 text-[18px] font-black text-slate-400">الوسيلة ←</div>
            <div v-for="(m, i) in media" :key="m.name" class="sl-pop h-[110px] rounded-2xl border-2 bg-slate-900/85 flex flex-col items-center justify-center px-2 text-center"
                 :class="m.cls" :style="{ '--d': `${0.3 + i * 1}s` }">
              <span class="text-[38px] leading-none">{{ m.icon }}</span>
              <span class="mt-1.5 text-[18px] font-black text-white leading-tight">{{ m.name }}</span>
            </div>
            <!-- channel rows -->
            <template v-for="(c, j) in channels" :key="c.key">
              <div class="h-[56px] rounded-xl border-2 border-white/10 bg-slate-800/70 flex items-center justify-center gap-2 text-[20px] font-black text-white">
                <span>{{ c.icon }}</span>{{ c.name }}
              </div>
              <div v-for="(m, i) in media" :key="m.name + c.key" class="relative h-[56px]">
                <div class="absolute inset-0 rounded-xl border-2 border-dashed border-slate-700"></div>
                <div v-if="m.has.includes(c.key)" class="sl-pop absolute inset-0 rounded-xl border-2 flex items-center justify-center text-[22px] font-black"
                     :class="c.on" :style="{ '--d': `${0.6 + i * 1 + j * 0.12}s` }">✓ {{ c.icon }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="absolute top-[528px] inset-x-0 flex justify-center" dir="rtl">
          <div class="sl-in rounded-2xl border-2 border-amber-400/60 bg-amber-950/40 px-6 py-1.5 text-[20px] font-bold text-amber-50" style="--d: 5.6s">
            📌 عند التخطيط لموقع إلكتروني، من المهم فهم الاختلافات عن الوسائط الأخرى.
          </div>
        </div>
      </div>

      <!-- ───── f1: one-way vs two-way ───── -->
      <div v-else-if="f === 1" key="dir" class="absolute inset-0">
        <div v-for="(p, pi) in panels" :key="p.key" class="sl-in absolute top-[150px] w-[560px] h-[420px] rounded-3xl border-2 bg-slate-900/80"
             :class="p.cls" :style="{ left: `${p.x}px`, '--d': `${p.d}s` }">
          <!-- heading -->
          <div class="absolute top-[16px] inset-x-0 flex justify-center" dir="rtl">
            <span class="sl-badge !text-[26px]" :class="p.badge">{{ p.title }}</span>
          </div>
          <p class="absolute top-[72px] inset-x-6 text-center text-[20px] font-bold text-slate-100" dir="rtl">{{ p.def }}</p>

          <!-- diagram: sender (right) → receivers (left) -->
          <div class="absolute left-[420px] top-[120px] w-[110px] h-[150px] rounded-2xl border-2 flex flex-col items-center justify-center" :class="p.sender">
            <span class="text-[40px] leading-none">📡</span>
            <span class="mt-1 text-[16px] font-black text-white" dir="rtl">المُرسِل</span>
          </div>
          <div v-for="(y, k) in lanes" :key="k">
            <div class="absolute left-[40px] w-[46px] h-[46px] rounded-full border-2 border-slate-400 bg-slate-800 flex items-center justify-center text-[24px]"
                 :style="{ top: `${y - 23}px` }">👤</div>
            <div class="absolute left-[90px] w-[330px] h-[3px] bg-slate-600/80" :style="{ top: `${y - 1}px` }"></div>
            <span class="dot-rl absolute w-[16px] h-[16px] -mt-[8px] rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,.9)]"
                  :style="{ top: `${y}px`, animationDelay: `${p.d + 0.8 + k * 0.35}s` }"></span>
            <span v-if="pi === 1" class="dot-lr absolute -mt-[14px] text-[22px] leading-none"
                  :style="{ top: `${y}px`, animationDelay: `${p.d + 1.7 + k * 0.45}s` }">💬</span>
          </div>
          <span class="absolute left-[18px] top-[282px] w-[90px] text-center text-[15px] font-black text-slate-300" dir="rtl">{{ pi === 0 ? 'المُستقبِل' : 'المستخدمون' }}</span>

          <!-- media chips -->
          <div class="absolute top-[318px] inset-x-0 flex justify-center gap-2" dir="rtl">
            <span v-for="(c, k) in p.chips" :key="c" class="sl-pop sl-badge !text-[19px] border-white/20 bg-white/5 text-white"
                  :style="{ '--d': `${p.d + 1.4 + k * 0.35}s` }">{{ c }}</span>
          </div>
          <p class="sl-fade absolute top-[368px] inset-x-6 text-center text-[16px] font-bold text-slate-300 leading-snug" dir="rtl"
             :style="{ '--d': `${p.d + 2.6}s` }">{{ p.note }}</p>
        </div>
      </div>

      <!-- ───── f2: book table, characteristics ───── -->
      <div v-else key="traits" class="absolute inset-0">
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-[9px]" dir="rtl">
          <div v-for="(m, i) in media" :key="m.name" class="sl-in w-[1160px] h-[76px] rounded-2xl border-2 bg-slate-900/85 flex items-center gap-4 px-5"
               :class="m.cls" :style="{ '--d': `${0.3 + i * 1.3}s` }">
            <span class="text-[36px] leading-none shrink-0">{{ m.icon }}</span>
            <span class="w-[150px] shrink-0 text-[20px] font-black text-white leading-tight">{{ m.name }}</span>
            <span class="w-[190px] shrink-0 flex justify-center">
              <span class="px-3 py-1 rounded-lg bg-white/10 text-[16px] font-black text-slate-100 whitespace-nowrap">{{ m.carries }}</span>
            </span>
            <p class="flex-1 text-[17px] font-bold text-slate-200 leading-snug" v-html="m.traits"></p>
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

const channels = [
  { key: 'text', name: 'نص', icon: '🔤', on: 'border-sky-300 bg-sky-600/40 text-sky-50' },
  { key: 'image', name: 'صور', icon: '🖼️', on: 'border-amber-300 bg-amber-600/35 text-amber-50' },
  { key: 'video', name: 'فيديو', icon: '🎬', on: 'border-rose-300 bg-rose-600/35 text-rose-50' },
  { key: 'audio', name: 'صوت', icon: '🔊', on: 'border-emerald-300 bg-emerald-600/35 text-emerald-50' },
]

const hl = (s: string) => `<span class="text-amber-300 font-black">${s}</span>`
const media = [
  { icon: '📺', name: 'التلفزيون', carries: 'فيديو + صوت', has: ['video', 'audio'], cls: 'border-sky-400/60',
    traits: `يمكنه ${hl('الوصول إلى جمهور كبير في وقت واحد')}، ويجمع الصورة والصوت، وعادةً يكون الاتصال فيه من المرسل إلى المتلقي.` },
  { icon: '📻', name: 'الراديو', carries: 'صوت', has: ['audio'], cls: 'border-amber-400/60',
    traits: `يعتمد على الصوت، ويمكن ${hl('الاستماع إليه أثناء التنقل')} أو أداء مهام أخرى بحسب التغطية ووسيلة الاستقبال؛ وعادةً يكون الاتصال فيه باتجاه واحد.` },
  { icon: '📰', name: 'الصحيفة', carries: 'نص + صور', has: ['text', 'image'], cls: 'border-slate-300/50',
    traits: `تبقى موجودة ماديًا كوسيلة مطبوعة. ${hl('يمكن قراءتها دون اتصال بالإنترنت')}. اتجاه واحد.` },
  { icon: '🌐', name: 'الموقع الإلكتروني', carries: 'نص + صور + فيديو + صوت', has: ['text', 'image', 'video', 'audio'], cls: 'border-violet-400/60',
    traits: `يمكن الجمع بين معلومات متنوعة. ${hl('يمكن تحديثه في أي وقت')}. اتجاه واحد أساسًا، لكن التفاعل ثنائي الاتجاه ممكن أيضًا من خلال النماذج والتعليقات وغيرها.` },
  { icon: '💬', name: 'وسائل التواصل الاجتماعي', carries: 'نص + صور + فيديو + صوت', has: ['text', 'image', 'video', 'audio'], cls: 'border-emerald-400/60',
    traits: `يمكنها ${hl('نشر المعلومات بسرعة')}، وتسمح للمستخدمين بالنشر والمشاركة والتفاعل.` },
]

const lanes = [143, 195, 247]
const panels = [
  { key: 'one', x: 670, d: 0.3, title: '← اتجاه واحد', def: 'من المُرسِل إلى المُستقبِل فقط.',
    cls: 'border-sky-400/60', badge: 'border-sky-400 bg-sky-600/30 text-sky-50', sender: 'border-sky-400 bg-sky-950/70',
    chips: ['📺 التلفزيون', '📻 الراديو', '📰 الصحيفة'],
    note: 'التلفزيون والراديو: عادةً باتجاه واحد · الصحيفة: اتجاه واحد' },
  { key: 'two', x: 50, d: 3, title: '⇄ اتجاهين', def: 'يمكن للمستخدمين الاستجابة والمشاركة.',
    cls: 'border-emerald-400/60', badge: 'border-emerald-400 bg-emerald-600/30 text-emerald-50', sender: 'border-emerald-400 bg-emerald-950/70',
    chips: ['💬 وسائل التواصل الاجتماعي', '🌐 الموقع الإلكتروني'],
    note: 'الموقع الإلكتروني: اتجاه واحد أساسًا، لكن التفاعل ثنائي الاتجاه ممكن من خلال النماذج والتعليقات.' },
]

const head = computed(() => {
  if (props.f === 0) return { icon: '📡', title: 'مقارنة خصائص الوسائط', sub: 'لكل وسيلة لنقل المعلومات خصائص مختلفة' }
  if (props.f === 1) return { icon: '↔️', title: 'اتجاه واحد أم اتجاهين؟', sub: 'مصطلحات أساسية' }
  return { icon: '📋', title: 'خصائص كل وسيلة', sub: 'الوسيلة · المعلومات المنقولة · الخصائص' }
})
</script>

<style scoped>
.dot-rl { animation: rl 2.2s linear infinite both; }
@keyframes rl { 0% { left: 404px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 92px; opacity: 0 } }
.dot-lr { animation: lr 2.6s linear infinite both; }
@keyframes lr { 0% { left: 92px; opacity: 0 } 10% { opacity: 1 } 90% { opacity: 1 } 100% { left: 396px; opacity: 0 } }
</style>
