<template>
  <!-- Reusable "video" player for the animated lesson decks.
       The deck page owns the frames; this shell owns the 1280x720 stage, subtitles,
       autoplay, chapters, keyboard and fullscreen. Scenes go in the default slot and
       read the current frame through v-model:step. -->
  <div class="fixed inset-0 bg-[#070b1a] overflow-hidden select-none font-arabic" dir="rtl" @mousemove="pokeControls">
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="pl-stage relative shrink-0 overflow-hidden rounded-[28px]"
        :style="{ width: '1280px', height: '720px', transform: `scale(${scale})` }"
        dir="ltr"
        @click="next"
      >
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#0b1230] via-[#0f1a3d] to-[#0a0f24]"></div>
        <div class="pl-grid absolute inset-0 opacity-[0.07]"></div>
        <div class="pl-glow absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl" :class="glow"></div>
        <div class="absolute -bottom-48 -right-40 w-[560px] h-[560px] rounded-full bg-indigo-500/20 blur-3xl"></div>

        <slot :step="step" />

        <!-- Subtitle bar -->
        <div class="absolute bottom-7 inset-x-0 flex justify-center pointer-events-none" dir="rtl">
          <Transition name="pl-sub" mode="out-in">
            <div v-if="current.caption" :key="step"
                 class="max-w-[1180px] px-8 py-3.5 rounded-2xl bg-black/55 backdrop-blur border border-white/10 text-[25px] leading-snug font-bold text-white text-center">
              {{ current.caption }}
            </div>
          </Transition>
        </div>

        <!-- Autoplay progress (thin line, top) -->
        <div class="absolute top-0 inset-x-0 h-1.5 bg-white/5">
          <div class="h-full bg-gradient-to-l from-sky-400 to-emerald-400"
               :style="{ width: `${((step + stepProgress) / (steps.length - 1)) * 100}%`, transition: playing ? 'width 0.1s linear' : 'width 0.5s ease' }"></div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/85 backdrop-blur border border-white/10 shadow-2xl transition-opacity duration-500"
         :class="controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'"
         dir="rtl">
      <NuxtLink :to="backTo" class="pl-ctrl" title="رجوع للوحدة"><House class="w-5 h-5" /></NuxtLink>
      <span class="w-px h-6 bg-white/15"></span>
      <button class="pl-ctrl" title="السابق (→)" @click="prev"><ChevronRight class="w-6 h-6" /></button>
      <button class="pl-ctrl pl-ctrl-main" :title="playing ? 'إيقاف مؤقت (P)' : 'تشغيل (P)'" @click="togglePlay">
        <component :is="playing ? Pause : Play" class="w-6 h-6" />
      </button>
      <button class="pl-ctrl" title="التالي (←)" @click="next"><ChevronLeft class="w-6 h-6" /></button>
      <button class="pl-ctrl" title="من البداية" @click="restart"><RotateCcw class="w-5 h-5" /></button>
      <span class="w-px h-6 bg-white/15"></span>
      <div class="flex items-center gap-1">
        <button v-for="c in chapterList" :key="c.name"
                class="px-3 py-1.5 rounded-xl text-sm font-black transition-colors whitespace-nowrap"
                :class="chapterOf(step) === c.name ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-white/10'"
                @click="goTo(c.from)">{{ c.name }}</button>
      </div>
      <span class="text-slate-400 text-sm font-bold tabular-nums px-2 whitespace-nowrap" dir="ltr">{{ step + 1 }} / {{ steps.length }}</span>
      <span class="w-px h-6 bg-white/15"></span>
      <button class="pl-ctrl" title="ملء الشاشة (F)" @click="toggleFullscreen">
        <component :is="isFullscreen ? Minimize : Maximize" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { Play, Pause, ChevronLeft, ChevronRight, RotateCcw, Maximize, Minimize, House } from 'lucide-vue-next'

export interface SlideStep { id: string; caption: string; dur?: number }

const props = withDefaults(defineProps<{
  steps: SlideStep[]
  chapters: { name: string; id: string }[]
  backTo?: string
  glow?: string
}>(), { backTo: '/', glow: 'bg-sky-500/20' })

const step = defineModel<number>('step', { default: 0 })
const route = useRoute()

const current = computed(() => props.steps[step.value]!)
const indexOf = (id: string) => props.steps.findIndex(s => s.id === id)
const chapterList = computed(() => props.chapters.map(c => ({ ...c, from: indexOf(c.id) })))
const chapterOf = (s: number) => [...chapterList.value].reverse().find(c => s >= c.from)?.name

/* Navigation */
const goTo = (n: number) => { step.value = Math.max(0, Math.min(props.steps.length - 1, n)) }
const next = () => {
  if (step.value >= props.steps.length - 1) { playing.value = false; return }
  goTo(step.value + 1)
}
const prev = () => goTo(step.value - 1)
const restart = () => { goTo(0); playing.value = false }

/* Autoplay */
const playing = ref(false)
const stepProgress = ref(0)
let timer: ReturnType<typeof setInterval> | null = null
let stepStarted = 0
const tick = () => {
  stepProgress.value = Math.min(1, (Date.now() - stepStarted) / (current.value.dur ?? 5000))
  if (stepProgress.value >= 1) next()
}
const togglePlay = () => {
  if (!playing.value && step.value >= props.steps.length - 1) goTo(0)
  playing.value = !playing.value
}
watch(step, () => { stepStarted = Date.now(); stepProgress.value = 0 })
watch(playing, (on) => {
  if (timer) { clearInterval(timer); timer = null }
  stepProgress.value = 0
  if (on) { stepStarted = Date.now(); timer = setInterval(tick, 100) }
})

/* Controls auto-hide so the bar never covers the subtitles */
const controlsVisible = ref(true)
let hideTimer: ReturnType<typeof setTimeout> | null = null
const pokeControls = () => {
  controlsVisible.value = true
  if (hideTimer) clearTimeout(hideTimer)
  hideTimer = setTimeout(() => { controlsVisible.value = false }, 3000)
}
watch(playing, pokeControls)

/* Fullscreen */
const isFullscreen = ref(false)
const toggleFullscreen = () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {})
  else document.exitFullscreen()
}
const onFsChange = () => { isFullscreen.value = !!document.fullscreenElement }

/* Scale the 1280x720 stage to the window */
const scale = ref(1)
const fit = () => {
  const reserve = isFullscreen.value ? 0 : 24
  scale.value = Math.min((window.innerWidth - reserve) / 1280, (window.innerHeight - reserve) / 720)
}
watch(isFullscreen, () => setTimeout(fit, 50))

/* Keyboard — RTL deck: ← forward, → back. `e.code` works on the Arabic layout too. */
const onKey = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowLeft': case 'Space': case 'PageDown': case 'Enter':
      e.preventDefault(); next(); break
    case 'ArrowRight': case 'PageUp': case 'Backspace':
      e.preventDefault(); prev(); break
    case 'KeyP': togglePlay(); break
    case 'KeyF': toggleFullscreen(); break
    case 'Home': goTo(0); break
    case 'End': goTo(props.steps.length - 1); break
  }
  pokeControls()
}

onMounted(() => {
  const q = Number(route.query.step) // ?step=N opens the deck at a given frame
  if (route.query.step !== undefined && Number.isInteger(q)) goTo(q)
  fit()
  pokeControls()
  window.addEventListener('resize', fit)
  window.addEventListener('keydown', onKey)
  document.addEventListener('fullscreenchange', onFsChange)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (hideTimer) clearTimeout(hideTimer)
  window.removeEventListener('resize', fit)
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('fullscreenchange', onFsChange)
})
</script>

<style scoped>
.pl-stage {
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.06);
  cursor: pointer;
}
.pl-grid {
  background-image:
    linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px);
  background-size: 48px 48px;
}
.pl-glow { transition: background-color 1.2s ease; }
.pl-ctrl {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.6rem; height: 2.6rem; border-radius: .8rem; color: #e2e8f0; transition: background .2s;
}
.pl-ctrl:hover { background: rgba(255,255,255,.1); }
.pl-ctrl-main { background: #0ea5e9; color: #fff; width: 3rem; height: 3rem; }
.pl-ctrl-main:hover { background: #0284c7; }
.pl-sub-enter-active, .pl-sub-leave-active { transition: opacity .35s ease, transform .35s ease; }
.pl-sub-enter-from { opacity: 0; transform: translateY(14px); }
.pl-sub-leave-to { opacity: 0; transform: translateY(-8px); }
</style>

<style>
/* ── Shared scene utilities for every deck (unscoped on purpose, `sl-` prefixed) ── */
/* Enter with a delay: style="--d: 1.2s". Never combine with translate-based centring;
   centre with a flex wrapper instead so the animation's transform can't break it. */
.sl-in { opacity: 0; animation: sl-in .6s cubic-bezier(.2,.8,.2,1.1) var(--d, 0s) forwards; }
@keyframes sl-in { from { opacity: 0; transform: translateY(24px) scale(.96) } to { opacity: 1; transform: none } }
.sl-pop { opacity: 0; animation: sl-pop .5s cubic-bezier(.3,1.6,.5,1) var(--d, 0s) forwards; }
@keyframes sl-pop { from { opacity: 0; transform: scale(.3) } to { opacity: 1; transform: none } }
.sl-fade { opacity: 0; animation: sl-fade .5s ease var(--d, 0s) forwards; }
@keyframes sl-fade { to { opacity: 1 } }
.sl-out { animation: sl-out .4s ease var(--d, 0s) forwards; }
@keyframes sl-out { to { opacity: 0 } }

.sl-wire { background: repeating-linear-gradient(90deg, #64748b 0 14px, transparent 14px 24px); animation: sl-dash 1s linear infinite; }
.sl-wire-ok { background: repeating-linear-gradient(90deg, #34d399 0 14px, transparent 14px 24px); }
.sl-wire-bad { background: repeating-linear-gradient(90deg, #f43f5e 0 14px, transparent 14px 24px); }
@keyframes sl-dash { to { background-position: 24px 0 } }

.sl-badge {
  display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1.1rem; border-radius: 1rem;
  border-width: 2px; font-size: 1.35rem; font-weight: 900; white-space: nowrap;
}
.sl-card {
  background: rgba(15, 23, 42, .88); border-width: 2px; border-radius: 32px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.6);
}
.sl-node {
  display: flex; align-items: center; justify-content: center; border-radius: 1.5rem;
  background: rgba(30, 41, 59, .85); border-width: 2px;
}
.sl-shake { animation: sl-shake .5s ease var(--d, 0s) 2; }
@keyframes sl-shake { 25% { transform: translateX(-8px) } 75% { transform: translateX(8px) } }
.sl-hl-amber { color: #fcd34d; background: linear-gradient(transparent 62%, rgba(251,191,36,.25) 62%); }
.sl-hl-green { color: #6ee7b7; background: linear-gradient(transparent 62%, rgba(52,211,153,.25) 62%); }

.sl-frame-enter-active, .sl-frame-leave-active { transition: opacity .35s ease; }
.sl-frame-enter-from, .sl-frame-leave-to { opacity: 0; }
.sl-zoom-enter-active, .sl-zoom-leave-active { transition: opacity .5s ease, transform .5s ease; }
.sl-zoom-enter-from { opacity: 0; transform: scale(.9); }
.sl-zoom-leave-to { opacity: 0; transform: scale(1.05); }
</style>
