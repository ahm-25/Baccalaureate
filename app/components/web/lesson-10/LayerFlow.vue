<template>
  <section id="layer-flow" class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <h2 class="text-2xl md:text-3xl font-bold text-violet-300 mb-6">3. تدفق تعاون الطبقات الثلاث</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-10 max-w-4xl">
        <span class="font-bold text-slate-500">(1)</span>
        في كثير من تطبيقات الويب، تعمل الأجزاء معًا لاستقبال طلب المستخدم ومعالجته ثم عرض النتيجة. مثال: <strong class="text-white">البحث عن منتج في متجر إلكتروني</strong>.
      </p>

      <div class="text-center mb-6">
        <span class="inline-block text-xs font-bold text-violet-300 bg-violet-900/50 border border-violet-700 px-3 py-1 rounded-full mb-2">شكل 3.1.2 – كيف تعمل الطبقات الثلاث معًا</span>
        <p class="text-slate-400">اكتب كلمة بحث (مثل: هاتف أو حقيبة) واضغط «ابحث»، وتابع الطلب وهو ينتقل بين الطبقات.</p>
      </div>

      <!-- Search box (the front-end the user sees) -->
      <div class="max-w-xl mx-auto flex gap-2 mb-8">
        <div class="flex-1 flex items-center gap-2 bg-white rounded-xl px-4">
          <Search class="w-5 h-5 text-slate-400" />
          <input v-model="query" @keyup.enter="run" :disabled="running" type="text"
                 class="flex-1 py-3 bg-transparent text-slate-900 font-bold focus:outline-none" placeholder="ابحث عن منتج…" />
        </div>
        <button @click="run" :disabled="running || !query.trim()"
                class="px-6 rounded-xl bg-violet-500 hover:bg-violet-400 disabled:opacity-50 font-bold transition-colors">ابحث</button>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Steps -->
        <div class="space-y-2">
          <button v-for="(s, i) in steps" :key="i" @click="goTo(i)" :disabled="running"
                  class="w-full text-right p-3 rounded-xl border transition-all flex items-start gap-3"
                  :class="current === i ? 'bg-slate-800 border-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.3)]' : current > i ? 'bg-slate-800/40 border-emerald-700/60' : 'bg-slate-800/40 border-slate-700'">
            <span class="w-7 h-7 shrink-0 rounded-full flex items-center justify-center font-bold text-sm"
                  :class="current === i ? 'bg-violet-400 text-slate-900' : current > i ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300'">{{ circled[i] }}</span>
            <span class="text-sm leading-relaxed" :class="current === i ? 'text-white font-bold' : 'text-slate-300'">{{ s.text }}</span>
          </button>
        </div>

        <!-- Stage -->
        <div class="lg:col-span-2 bg-slate-800/80 border border-slate-700 rounded-3xl p-5 md:p-8 flex flex-col justify-center min-h-[380px]">
          <div class="relative">
            <!-- Nodes: user on the right (RTL), database on the left -->
            <div class="grid grid-cols-4 gap-2 relative z-10">
              <div v-for="(n, i) in nodes" :key="n.label" class="flex flex-col items-center gap-2">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 bg-slate-950"
                     :class="activeNodes.includes(i) ? n.on : 'border-slate-600'">
                  <component :is="n.icon" class="w-8 h-8 md:w-10 md:h-10" :class="n.color" />
                </div>
                <span class="text-xs md:text-sm font-bold text-center" :class="activeNodes.includes(i) ? 'text-white' : 'text-slate-400'">{{ n.label }}</span>
              </div>
            </div>
            <!-- Track -->
            <div class="absolute top-8 md:top-10 right-[12.5%] left-[12.5%] h-1 bg-slate-700 rounded-full"></div>
            <!-- Packet -->
            <div v-if="current >= 0" class="packet" :style="{ right: `${12.5 + packetAt * 25}%` }">
              <div class="packet-box" :class="steps[current].back ? 'border-emerald-400/60 text-emerald-200' : 'border-violet-400/60 text-violet-200'">
                {{ steps[current].packet(term) }}
              </div>
            </div>
          </div>

          <div class="mt-16 bg-slate-950 border border-slate-700 rounded-2xl p-5 min-h-[88px] flex items-center justify-center text-center">
            <transition name="fade" mode="out-in">
              <p :key="current" class="font-medium leading-relaxed" :class="current >= 0 && steps[current].back ? 'text-emerald-300' : 'text-violet-200'">
                {{ current >= 0 ? `${circled[current]} ${steps[current].text}` : 'اكتب كلمة بحث ثم اضغط «ابحث».' }}
              </p>
            </transition>
          </div>

          <!-- Result shown on the user's screen after step 6 -->
          <div v-if="current === 5" class="mt-4 bg-white text-slate-900 rounded-2xl p-4">
            <p class="font-bold mb-2">🖥️ نتائج البحث عن «{{ term }}»:</p>
            <ul v-if="results.length" class="grid sm:grid-cols-2 gap-2">
              <li v-for="r in results" :key="r.name" class="bg-violet-50 border border-violet-100 rounded-lg px-3 py-2 text-sm font-bold flex justify-between">
                <span>{{ r.icon }} {{ r.name }}</span><span class="text-violet-700">{{ r.price }} ج.م</span>
              </li>
            </ul>
            <p v-else class="text-sm text-slate-500">لا توجد منتجات مطابقة — جرّب: هاتف، حقيبة، سماعة، كتاب.</p>
          </div>

          <div class="mt-5 flex justify-center gap-3">
            <button @click="prev" :disabled="running || current <= 0" class="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-40 font-bold text-sm">→ السابق</button>
            <button @click="next" :disabled="running || current >= 5" class="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 disabled:opacity-40 font-bold text-sm">التالي ←</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { User, Monitor, Server, Database, Search } from 'lucide-vue-next'

const circled = ['①', '②', '③', '④', '⑤', '⑥']
const nodes = [
  { label: 'المستخدم', icon: User, color: 'text-slate-300', on: 'border-slate-300 ring-4 ring-slate-300/20' },
  { label: 'الواجهة الأمامية', icon: Monitor, color: 'text-violet-300', on: 'border-violet-400 ring-4 ring-violet-400/30' },
  { label: 'الواجهة الخلفية', icon: Server, color: 'text-indigo-300', on: 'border-indigo-400 ring-4 ring-indigo-400/30' },
  { label: 'قاعدة البيانات', icon: Database, color: 'text-sky-300', on: 'border-sky-400 ring-4 ring-sky-400/30' },
]

// from/to are node indexes; the packet ends each step at `to`
const steps = [
  { from: 0, to: 1, text: 'تستقبل الواجهة الأمامية كلمات البحث التي أدخلها المستخدم.', packet: (t) => `🔤 «${t}»` },
  { from: 1, to: 2, text: 'ترسل الواجهة الأمامية كلمات البحث إلى الواجهة الخلفية.', packet: (t) => `📨 طلب: «${t}»` },
  { from: 2, to: 3, text: 'تطلب الواجهة الخلفية من طبقة البيانات المنتجات التي تطابق عبارة البحث.', packet: () => '🔎 منتجات مطابقة؟' },
  { from: 3, to: 2, text: 'تعيد طبقة البيانات النتائج المطلوبة إلى الواجهة الخلفية.', packet: () => '📦 النتائج', back: true },
  { from: 2, to: 1, text: 'تجهز الواجهة الخلفية النتائج لإرسالها إلى الواجهة الأمامية.', packet: () => '📋 نتائج جاهزة', back: true },
  { from: 1, to: 0, text: 'تعرض الواجهة الأمامية نتائج البحث على شاشة المستخدم.', packet: () => '🖥️ عرض النتائج', back: true },
]

const catalogue = [
  { icon: '📱', name: 'هاتف ذكي', price: 9500 },
  { icon: '📱', name: 'جراب هاتف', price: 150 },
  { icon: '🎧', name: 'سماعة لاسلكية', price: 1200 },
  { icon: '🎒', name: 'حقيبة مدرسية', price: 650 },
  { icon: '💼', name: 'حقيبة لابتوب', price: 900 },
  { icon: '📘', name: 'كتاب البرمجة', price: 120 },
]

const query = ref('حقيبة')
const term = ref('')
const current = ref(-1)
const packetAt = ref(0)
const running = ref(false)
let timers = []

const activeNodes = computed(() => current.value < 0 ? [] : [steps[current.value].from, steps[current.value].to])
const results = computed(() => catalogue.filter(p => term.value && p.name.includes(term.value.trim())))

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}
function show(i) {
  current.value = i
  packetAt.value = steps[i].from
  // Next tick: slide the packet to its destination so the CSS transition plays
  timers.push(setTimeout(() => { packetAt.value = steps[i].to }, 60))
}
function run() {
  if (!query.value.trim()) return
  clearTimers()
  term.value = query.value.trim()
  running.value = true
  steps.forEach((_, i) => timers.push(setTimeout(() => show(i), i * 1800)))
  timers.push(setTimeout(() => { running.value = false }, steps.length * 1800))
}
function goTo(i) {
  if (!term.value) term.value = query.value.trim() || 'حقيبة'
  clearTimers()
  show(i)
}
const next = () => goTo(Math.min(5, current.value + 1))
const prev = () => goTo(Math.max(0, current.value - 1))

onUnmounted(clearTimers)
</script>

<style scoped>
.packet {
  position: absolute;
  top: 2rem;
  transform: translate(50%, -50%);
  z-index: 20;
  transition: right 1.2s ease-in-out;
}
@media (min-width: 768px) {
  .packet { top: 2.5rem; }
}
.packet-box {
  white-space: nowrap;
  font-size: 0.75rem;
  font-weight: 700;
  background: rgb(15 23 42 / 0.95);
  border-width: 1px;
  border-radius: 0.75rem;
  padding: 0.35rem 0.6rem;
  margin-top: -3.2rem;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
