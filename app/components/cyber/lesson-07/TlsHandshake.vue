<template>
  <section id="tls-handshake" class="py-20 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12">
        <span class="inline-block text-xs font-bold text-sky-300 bg-sky-900/50 border border-sky-700 px-3 py-1 rounded-full mb-4">الشكل 2.1.1</span>
        <h2 class="text-3xl font-bold text-white mb-4">تدفق الاتصال عبر HTTPS</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">اضغط على كل مرحلة (أو شغّل العرض) لترى ما ينتقل بين خادم الويب والمتصفح.</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-stretch">
        <!-- Steps -->
        <div class="w-full lg:w-1/3 space-y-4">
          <button
            v-for="(step, index) in steps"
            :key="index"
            @click="selectStep(index)"
            class="w-full text-right p-4 rounded-xl border transition-all duration-300 focus:outline-none"
            :class="activeStep === index ? 'bg-slate-800 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]' : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'"
          >
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex shrink-0 items-center justify-center font-bold text-sm transition-colors"
                   :class="activeStep === index ? 'bg-sky-400 text-slate-900' : 'bg-slate-700 text-slate-300'">
                {{ index + 1 }}
              </div>
              <div>
                <span class="block text-xs text-slate-400">{{ step.phase }}</span>
                <h3 class="font-bold" :class="activeStep === index ? 'text-sky-300' : 'text-slate-200'">{{ step.title }}</h3>
              </div>
            </div>
            <div class="grid transition-all duration-300 ease-in-out" :class="activeStep === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'">
              <p class="text-sm text-slate-300 leading-relaxed pr-11 overflow-hidden">{{ step.description }}</p>
            </div>
          </button>

          <button @click="toggleAutoplay"
                  class="w-full flex items-center justify-center gap-2 p-3 rounded-xl font-bold transition-colors"
                  :class="autoplay ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-sky-500 text-slate-900 hover:bg-sky-400'">
            <component :is="autoplay ? Pause : Play" class="w-5 h-5" />
            {{ autoplay ? 'إيقاف العرض' : 'تشغيل العرض تلقائيًا' }}
          </button>
        </div>

        <!-- Canvas -->
        <div class="w-full lg:w-2/3 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 md:p-8 min-h-[420px] flex flex-col justify-center shadow-2xl">
          <div class="flex justify-between items-center w-full gap-2">
            <!-- Server (right in RTL, as in the book figure) -->
            <div class="relative z-10 flex flex-col items-center gap-3 shrink-0">
              <div class="w-20 h-20 md:w-24 md:h-24 bg-slate-950 border-2 rounded-2xl flex items-center justify-center shadow-lg relative transition-all duration-500"
                   :class="activeStep === 2 ? 'border-emerald-400 ring-4 ring-emerald-400/30' : 'border-slate-600'">
                <Server class="w-10 h-10 md:w-12 md:h-12 text-indigo-300" />
                <div class="absolute -top-3 -right-3 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center border-2 border-slate-800" title="المفتاح الخاص">
                  <KeyRound class="w-4 h-4 text-white" />
                </div>
              </div>
              <div class="text-center">
                <span class="block font-bold text-slate-100">خادم الويب</span>
                <span class="text-xs text-slate-400">(مع المفتاح الخاص)</span>
              </div>
            </div>

            <!-- Packet track -->
            <div class="flex-1 relative h-28 overflow-hidden">
              <div class="absolute top-1/2 inset-x-2 h-1 -translate-y-1/2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-l from-sky-400 to-emerald-400 transition-all duration-700" :style="{ width: progress + '%' }"></div>
              </div>

              <template v-if="animating">
                <div v-if="activeStep === 0" class="packet to-browser">
                  <div class="packet-box border-amber-400/40">
                    <FileBadge class="w-5 h-5 text-amber-300" />
                    <span class="text-amber-200">الشهادة + المفتاح العام</span>
                  </div>
                </div>

                <template v-if="activeStep === 1">
                  <div class="packet to-browser lane-top">
                    <div class="packet-box border-violet-400/40">
                      <Shuffle class="w-5 h-5 text-violet-300" />
                      <span class="text-violet-200">معاملات تبادل المفاتيح</span>
                    </div>
                  </div>
                  <div class="packet to-server lane-bottom">
                    <div class="packet-box border-violet-400/40">
                      <Shuffle class="w-5 h-5 text-violet-300" />
                      <span class="text-violet-200">معاملات تبادل المفاتيح</span>
                    </div>
                  </div>
                </template>

                <template v-if="activeStep === 2">
                  <div class="packet to-browser lane-top">
                    <div class="packet-box border-emerald-400/40">
                      <Lock class="w-5 h-5 text-emerald-300" />
                      <span class="text-emerald-200 font-mono" dir="ltr">x9#Qa!7…</span>
                    </div>
                  </div>
                  <div class="packet to-server lane-bottom">
                    <div class="packet-box border-emerald-400/40">
                      <Lock class="w-5 h-5 text-emerald-300" />
                      <span class="text-emerald-200 font-mono" dir="ltr">k2$Lm@4…</span>
                    </div>
                  </div>
                </template>
              </template>
            </div>

            <!-- Browser -->
            <div class="relative z-10 flex flex-col items-center gap-3 shrink-0">
              <div class="w-20 h-20 md:w-24 md:h-24 bg-slate-950 border-2 rounded-2xl flex items-center justify-center shadow-lg relative transition-all duration-500"
                   :class="activeStep === 2 ? 'border-emerald-400 ring-4 ring-emerald-400/30' : 'border-slate-600'">
                <Monitor class="w-10 h-10 md:w-12 md:h-12 text-sky-300" />
                <transition name="scale-in">
                  <div v-if="activeStep >= 1" class="absolute -top-3 -left-3 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center border-2 border-slate-800" title="تم التحقق من الشهادة">
                    <BadgeCheck class="w-4 h-4 text-slate-900" />
                  </div>
                </transition>
              </div>
              <div class="text-center">
                <span class="block font-bold text-slate-100">المتصفح</span>
                <span class="text-xs text-slate-400">(العميل)</span>
              </div>
            </div>
          </div>

          <!-- Live description -->
          <div class="mt-10 bg-slate-950 border p-5 rounded-2xl min-h-[96px] flex items-center justify-center transition-colors"
               :class="activeStep === 2 ? 'border-emerald-500/50' : 'border-slate-700'">
            <transition name="fade" mode="out-in">
              <p :key="activeStep" class="font-medium leading-relaxed text-center" :class="detailColors[activeStep]">
                {{ steps[activeStep].detail }}
              </p>
            </transition>
          </div>

          <div class="mt-5 bg-sky-950/60 border border-sky-800 rounded-xl p-3 text-center text-sm text-sky-100">
            <strong>المفتاح العام:</strong> للمصادقة والاتفاق الآمن على مفاتيح الجلسة •
            <strong>التشفير المتماثل:</strong> لحماية بيانات الجلسة بسرعة
          </div>
        </div>
      </div>

      <p class="mt-10 text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
        <span class="font-bold text-slate-500">(3)</span>
        تستخدم مصافحة TLS الشهادات وآليات المفتاح العام للمصادقة والاتفاق الآمن على مفاتيح الجلسة. وبعد إنشاء المفاتيح،
        يُستخدم <strong class="text-amber-300">التشفير المتماثل</strong> لحماية البيانات بسرعة وكفاءة.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { Monitor, Server, FileBadge, KeyRound, Lock, Shuffle, BadgeCheck, Play, Pause } from 'lucide-vue-next'

const steps = [
  {
    phase: 'مصافحة TLS',
    title: 'الشهادة الرقمية والمفتاح العام',
    description: 'أثناء المصافحة يرسل الخادم شهادته، ويتحقق المتصفح من صلاحيتها وسلسلة الثقة وملاءمتها لاسم الموقع.',
    detail: 'الخادم ← المتصفح: "هذه شهادتي الرقمية". يتحقق المتصفح من صلاحيتها وسلسلة الثقة، ومن أنها تخص اسم الموقع نفسه.',
  },
  {
    phase: 'مصافحة TLS',
    title: 'معاملات تبادل المفاتيح',
    description: 'يتبادل الطرفان معاملات تبادل المفاتيح، ويشتق كل طرف مفاتيح الجلسة لديه دون إرسال المفتاح نفسه عبر الشبكة.',
    detail: 'الطرفان يتبادلان معاملات فقط — ومنها يشتق كل طرف مفاتيح الجلسة لديه، فلا يمر مفتاح الجلسة نفسه عبر الشبكة.',
  },
  {
    phase: 'تبادل البيانات',
    title: 'بيانات محمية بمفاتيح الجلسة',
    description: 'تُحمى بيانات الجلسة بالتشفير المتماثل وآليات سلامة البيانات.',
    detail: 'الاتصال الآن آمن 🔒 — البيانات تنتقل مشفّرة بالتشفير المتماثل السريع، ولا يستطيع طرف ثالث قراءتها أو تعديلها دون اكتشاف ذلك.',
  },
]

const detailColors = ['text-amber-200', 'text-violet-200', 'text-emerald-300']

const activeStep = ref(0)
const animating = ref(true)
const autoplay = ref(false)
let timer = null

const progress = computed(() => [33, 66, 100][activeStep.value])

function restartAnimation() {
  animating.value = false
  setTimeout(() => { animating.value = true }, 50)
}

function selectStep(index) {
  stopAutoplay()
  if (activeStep.value === index) return
  activeStep.value = index
  restartAnimation()
}

function stopAutoplay() {
  autoplay.value = false
  if (timer) clearInterval(timer)
  timer = null
}

function toggleAutoplay() {
  if (autoplay.value) return stopAutoplay()
  autoplay.value = true
  activeStep.value = 0
  restartAnimation()
  timer = setInterval(() => {
    activeStep.value = (activeStep.value + 1) % steps.length
    restartAnimation()
  }, 4000)
}

onUnmounted(stopAutoplay)
</script>

<style scoped>
.packet {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.lane-top { top: 22%; }
.lane-bottom { top: 78%; }

.packet-box {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgb(15 23 42 / 0.95);
  border-width: 1px;
  border-radius: 0.75rem;
  padding: 0.4rem 0.6rem;
}

/* Server sits on the right, browser on the left */
.to-browser { right: 0; animation: toLeft 2.5s ease-in-out infinite; }
.to-server { left: 0; animation: toRight 2.5s ease-in-out infinite; }

@keyframes toLeft {
  0% { right: 0; opacity: 0; }
  15%, 85% { opacity: 1; }
  100% { right: calc(100% - 140px); opacity: 0; }
}
@keyframes toRight {
  0% { left: 0; opacity: 0; }
  15%, 85% { opacity: 1; }
  100% { left: calc(100% - 140px); opacity: 0; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scale-in-enter-active { transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.scale-in-leave-active { transition: all 0.3s ease; }
.scale-in-enter-from, .scale-in-leave-to { transform: scale(0); opacity: 0; }
</style>
