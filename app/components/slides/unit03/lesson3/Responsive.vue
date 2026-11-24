<template>
  <!-- Responsive design: the same page on a computer (3 columns), a tablet (2) and a phone (1, menu becomes ☰),
       then the mobile-first idea. One frame. -->
  <div class="absolute inset-0">
    <SlidesTitle icon="📱" title="التصميم المتجاوب" sub="الصفحة نفسها… على ثلاثة أجهزة" />

    <div class="absolute top-[146px] inset-x-0 flex justify-center">
      <div class="sl-in sl-card border-sky-400/60 w-[1100px] px-8 py-3 text-center text-[21px] font-bold text-white leading-snug" style="--d: .3s" dir="rtl">
        <span class="sl-hl-amber font-black">التصميم المتجاوب</span>: مفهوم تصميمي يُضبط فيه التخطيط <span class="text-sky-300">تلقائيًا</span>
        وفقًا لأحجام الشاشات المختلفة، فيحسّن سهولة الاستخدام.
      </div>
    </div>

    <div class="absolute top-[238px] inset-x-0 flex justify-center items-end gap-10" dir="rtl">
      <div v-for="(d, di) in devices" :key="d.name" class="sl-in flex flex-col items-center" :style="{ '--d': `${1.2 + di * 1.4}s` }">
        <div class="frame bg-slate-800 border-4 border-slate-500 p-2" :class="d.frame" :style="{ width: `${d.w}px`, height: `${d.h}px` }">
          <div class="w-full h-full bg-slate-950 overflow-hidden flex flex-col gap-1.5 p-2" :class="d.screen">
            <div class="h-[24px] shrink-0 rounded-md bg-sky-600/70 flex items-center justify-between px-2 text-[11px] font-black text-white whitespace-nowrap">
              <span>📰 موقعي</span>
              <span v-if="d.cols === 1" class="text-[15px]">☰</span>
              <span v-else class="flex gap-1.5 text-[9px]"><span>الرئيسية</span><span>الأخبار</span><span>تواصل</span></span>
            </div>
            <div class="shrink-0 rounded-md bg-gradient-to-l from-violet-600/60 to-sky-600/60 flex items-center justify-center text-[11px] font-bold text-white" :style="{ height: `${d.hero}px` }">صورة رئيسية</div>
            <div class="grid gap-1.5" :style="{ gridTemplateColumns: `repeat(${d.cols}, minmax(0, 1fr))` }">
              <div v-for="n in 3" :key="n" class="rounded-md bg-white/10 p-1.5 flex flex-col gap-1">
                <div class="h-[22px] rounded bg-white/15"></div>
                <div class="h-[5px] w-4/5 rounded bg-white/25"></div>
                <div class="h-[5px] w-3/5 rounded bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-[20px] font-black text-white"><component :is="d.icon" class="inline w-5 h-5 mb-1" /> {{ d.name }}</div>
        <div class="text-[16px] font-bold text-slate-300">{{ d.note }}</div>
      </div>
    </div>

    <div class="absolute top-[516px] inset-x-0 flex justify-center">
      <span class="sl-in sl-badge !text-[19px] border-emerald-400/60 bg-emerald-600/20 text-emerald-100" style="--d: 6s" dir="rtl">
        📲 الأولوية للجوال: يراعي المطورون الشاشات الصغيرة منذ بداية التصميم، لأن كثيرًا من الناس يستخدمون الويب عبر الهواتف
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Tablet, Smartphone } from 'lucide-vue-next'
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const devices = [
  { name: 'كمبيوتر', icon: Monitor, w: 420, h: 200, cols: 3, hero: 48, frame: 'rounded-xl', screen: 'rounded-md', note: 'ثلاثة أعمدة، والقائمة ظاهرة' },
  { name: 'لوحي', icon: Tablet, w: 220, h: 200, cols: 2, hero: 40, frame: 'rounded-3xl', screen: 'rounded-xl', note: 'عمودان ليبقى المحتوى مقروءًا' },
  { name: 'هاتف', icon: Smartphone, w: 130, h: 200, cols: 1, hero: 32, frame: 'rounded-[26px]', screen: 'rounded-2xl', note: 'عمود واحد، والقائمة ☰' },
]
</script>
