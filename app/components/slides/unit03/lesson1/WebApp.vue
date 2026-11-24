<template>
  <!-- What is a web app. f = 0 definition + the book's examples, 1 what you see in the browser vs the parts
       working behind it (the three-layer model introduced as an iceberg). -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '🌐' : '🧊'" :title="f === 0 ? 'ما هو تطبيق الويب؟' : 'ما تراه… وما يعمل خلفه'"
                 :sub="f === 0 ? 'تطبيق نستخدمه غالبًا من خلال المتصفح' : 'نموذج تعليمي مبسط من ثلاث طبقات'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-violet-400/60 w-[1060px] px-8 py-4 text-center" style="--d: .3s">
            <p class="text-[27px] font-black text-white leading-snug">
              <span class="sl-hl-amber">تطبيق الويب</span>: تطبيق يُستخدم عادةً من خلال <span class="text-sky-300">متصفح الويب</span>،
              وقد يكون بعضه قابلًا للتثبيت على الجهاز.
            </p>
          </div>
        </div>

        <div class="absolute top-[268px] inset-x-0 flex justify-center gap-5">
          <div v-for="(e, i) in examples" :key="e.name"
               class="sl-in w-[245px] h-[220px] rounded-3xl border-2 border-white/15 bg-slate-900/85 overflow-hidden flex flex-col"
               :style="{ '--d': `${1.4 + i * 0.6}s` }">
            <div class="h-[34px] shrink-0 bg-slate-800 flex items-center gap-1.5 px-3" dir="ltr">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="ml-2 flex-1 h-[18px] rounded-md bg-slate-700/80 text-[11px] text-slate-400 font-mono flex items-center px-2">{{ e.url }}</span>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center gap-1 px-3 text-center">
              <span class="text-[52px] leading-none">{{ e.icon }}</span>
              <span class="text-[23px] font-black text-white">{{ e.name }}</span>
              <span class="text-[17px] font-bold text-slate-400">{{ e.desc }}</span>
            </div>
          </div>
        </div>

        <div class="absolute top-[512px] inset-x-0 flex justify-center gap-4">
          <span class="sl-in sl-badge border-sky-400/60 bg-sky-600/20 text-sky-100 !text-[20px]" style="--d: 4.4s">🌐 يُستخدم غالبًا من خلال المتصفح</span>
          <span class="sl-in sl-badge border-emerald-400/60 bg-emerald-600/20 text-emerald-100 !text-[20px]" style="--d: 5s">📲 وبعضه يمكن تثبيته على الجهاز</span>
        </div>
      </div>

      <!-- ───── f1: what you see vs what works behind it ───── -->
      <div v-else key="behind" class="absolute inset-0">
        <!-- water below the line -->
        <div class="sl-fade absolute left-[60px] top-[300px] w-[600px] h-[275px] rounded-b-3xl bg-gradient-to-b from-sky-900/40 to-sky-950/10" style="--d: 1.2s"></div>

        <!-- browser = the part the user sees -->
        <div class="sl-in absolute left-[150px] top-[152px] w-[420px] h-[128px] rounded-2xl border-2 border-violet-400 bg-slate-900/90 overflow-hidden" style="--d: .3s">
          <div class="h-[28px] bg-slate-800 flex items-center gap-1.5 px-3">
            <span class="w-2 h-2 rounded-full bg-rose-400"></span>
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div class="h-[100px] flex items-center justify-center gap-3" dir="rtl">
            <span class="text-[36px]">🖥️</span>
            <span class="text-[28px] font-black text-violet-200">العرض</span>
            <span class="text-[18px] font-bold text-slate-400">(في المتصفح)</span>
          </div>
        </div>

        <!-- waterline -->
        <div class="sl-fade absolute left-[60px] top-[298px] w-[600px] h-[4px] waterline" style="--d: 1.2s"></div>
        <div class="sl-fade absolute left-[64px] top-[262px] text-[17px] font-black text-slate-200" style="--d: 1.4s" dir="rtl">ما تراه ▲</div>
        <div class="sl-fade absolute left-[64px] top-[308px] text-[17px] font-black text-sky-300" style="--d: 1.4s" dir="rtl">▼ خلف ما تراه</div>

        <!-- hidden layers -->
        <div v-for="(b, i) in hidden" :key="b.name" class="sl-in absolute left-[150px] w-[420px] h-[100px] rounded-2xl border-2 flex items-center justify-center gap-3"
             :class="b.cls" :style="{ top: `${340 + i * 118}px`, '--d': `${2 + i * 0.8}s` }" dir="rtl">
          <span class="text-[36px]">{{ b.icon }}</span>
          <span class="text-[28px] font-black text-white">{{ b.name }}</span>
          <span class="text-[18px] font-bold text-slate-300">({{ b.where }})</span>
        </div>
        <div class="sl-fade absolute left-[358px] top-[282px] w-[4px] h-[58px] link-v" style="--d: 2.2s"></div>
        <div class="sl-fade absolute left-[358px] top-[440px] w-[4px] h-[18px] link-v" style="--d: 3s"></div>

        <!-- the three layers named -->
        <div class="absolute left-[700px] top-[160px] w-[520px] flex flex-col gap-3.5" dir="rtl">
          <div v-for="(r, i) in rows" :key="r.name" class="sl-in h-[100px] rounded-3xl border-2 flex items-center gap-4 px-6"
               :class="r.cls" :style="{ '--d': `${3.6 + i * 0.8}s` }">
            <span class="text-[44px] leading-none">{{ r.icon }}</span>
            <div>
              <div class="text-[26px] font-black text-white">{{ r.name }}</div>
              <div class="text-[19px] font-bold text-slate-200 leading-snug">{{ r.role }}</div>
            </div>
          </div>
          <span class="sl-in self-center sl-badge border-amber-400/60 bg-amber-600/15 text-amber-100 !text-[18px]" style="--d: 6.2s">
            ⚠️ نموذج للتعلم — وقد تختلف البنية الفعلية من تطبيق إلى آخر
          </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const examples = [
  { icon: '🎬', name: 'خدمات الفيديو', desc: 'مشاهدة الفيديوهات والبحث عنها', url: 'video.example' },
  { icon: '🛒', name: 'التسوق', desc: 'عرض المنتجات وإتمام الطلبات', url: 'shop.example' },
  { icon: '✉️', name: 'البريد', desc: 'قراءة الرسائل وإرسالها', url: 'mail.example' },
  { icon: '🗺️', name: 'الخرائط', desc: 'البحث عن الأماكن والطرق', url: 'maps.example' },
]

const hidden = [
  { icon: '⚙️', name: 'المعالجة', where: 'على الخادم', cls: 'border-amber-400/80 bg-amber-950/60' },
  { icon: '🗄️', name: 'البيانات', where: 'طبقة البيانات', cls: 'border-sky-400/80 bg-sky-950/60' },
]

const rows = [
  { icon: '🖥️', name: 'واجهة أمامية', role: 'للعرض والتفاعل مع المستخدم', cls: 'border-violet-400/70 bg-violet-950/50' },
  { icon: '⚙️', name: 'واجهة خلفية', role: 'لمعالجة الطلبات', cls: 'border-amber-400/70 bg-amber-950/40' },
  { icon: '🗄️', name: 'طبقة بيانات', role: 'تحفظ البيانات التي يحتاجها التطبيق وتوفرها', cls: 'border-sky-400/70 bg-sky-950/50' },
]
</script>

<style scoped>
.waterline { background: repeating-linear-gradient(90deg, #7dd3fc 0 16px, transparent 16px 26px); animation: wave 1.4s linear infinite; }
@keyframes wave { to { background-position: 26px 0 } }
.link-v { background: repeating-linear-gradient(180deg, #94a3b8 0 8px, transparent 8px 14px); }
</style>
