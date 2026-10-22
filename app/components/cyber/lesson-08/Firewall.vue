<template>
  <section id="firewall" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">📌 ملحوظة مهمة</div>
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-8">1. دور جدران الحماية</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">جدار الحماية</strong>... نظام أو برنامج يراقب حركة مرور الشبكة ويسمح بها أو يمنعها وفق قواعد أمنية.
            وقد يوجد عند حدود الشبكة أو بين أجزائها أو على جهاز مضيف.
          </p>
          <p class="bg-slate-50 border-r-4 border-teal-500 rounded-xl p-4 text-base">
            <strong class="text-teal-700">مثال:</strong> السماح بالوصول إلى خادم الويب مع منع الوصول الخارجي المباشر إلى قاعدة البيانات.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-teal-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">جدار الحماية</strong> – يسمح بالاتصال أو يمنعه عند نقطة دخول/خروج الشبكة استنادًا إلى قواعد محددة مسبقًا.
          </p>
        </div>
      </div>

      <!-- Firewall rules simulator -->
      <div class="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
        <h3 class="text-xl font-bold mb-2">🧪 جرّب بنفسك: محاكي جدار الحماية</h3>
        <p class="text-slate-400 mb-6">أرسل طلبًا من القائمة، وشاهد كيف يقارنه جدار الحماية بالقواعد من الأعلى إلى الأسفل ويطبق أول قاعدة تنطبق عليه.</p>

        <div class="grid lg:grid-cols-5 gap-6">
          <!-- Requests -->
          <div class="lg:col-span-2 space-y-3">
            <button v-for="(r, i) in requests" :key="i" @click="send(i)" :disabled="busy"
                    class="w-full text-right p-3 rounded-xl border transition-all flex items-center gap-3 disabled:opacity-60"
                    :class="current === i ? 'bg-slate-800 border-teal-400' : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'">
              <span class="text-2xl">{{ r.icon }}</span>
              <span class="text-sm font-bold leading-relaxed">{{ r.text }}</span>
            </button>
          </div>

          <!-- Stage -->
          <div class="lg:col-span-3 bg-slate-800/70 border border-slate-700 rounded-2xl p-5 flex flex-col gap-5">
            <div class="flex items-center justify-between gap-2">
              <div class="flex flex-col items-center w-20 shrink-0">
                <Globe class="w-9 h-9 text-slate-300" />
                <span class="text-xs mt-1 text-slate-400">الإنترنت</span>
              </div>
              <div class="flex-1 relative h-12">
                <div class="absolute top-1/2 inset-x-0 h-1 -translate-y-1/2 bg-slate-700 rounded-full"></div>
                <div v-if="current !== null" class="packet" :class="packetClass">
                  {{ requests[current].icon }}
                </div>
              </div>
              <div class="flex flex-col items-center w-20 shrink-0">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center border-2 transition-colors"
                     :class="verdict === null ? 'border-slate-500 bg-slate-900' : verdict ? 'border-emerald-400 bg-emerald-950' : 'border-rose-400 bg-rose-950'">
                  <BrickWall class="w-8 h-8" :class="verdict === null ? 'text-slate-300' : verdict ? 'text-emerald-300' : 'text-rose-300'" />
                </div>
                <span class="text-xs mt-1 text-slate-400">جدار الحماية</span>
              </div>
              <div class="flex-1 relative h-12">
                <div class="absolute top-1/2 inset-x-0 h-1 -translate-y-1/2 rounded-full transition-colors" :class="verdict ? 'bg-emerald-500/60' : 'bg-slate-700'"></div>
              </div>
              <div class="flex flex-col items-center w-20 shrink-0">
                <component :is="current !== null ? requests[current].targetIcon : Server" class="w-9 h-9"
                           :class="verdict ? 'text-emerald-300' : 'text-slate-300'" />
                <span class="text-xs mt-1 text-slate-400 text-center">{{ current !== null ? requests[current].target : 'الهدف' }}</span>
              </div>
            </div>

            <!-- Rules table -->
            <div class="rounded-xl overflow-hidden border border-slate-700">
              <div v-for="(rule, i) in rules" :key="i"
                   class="flex items-center gap-3 px-4 py-2 text-sm border-t border-slate-700 first:border-t-0 transition-colors"
                   :class="matchedRule === i ? (rule.allow ? 'bg-emerald-900/60' : 'bg-rose-900/60') : 'bg-slate-900/60'">
                <span class="font-bold text-slate-500 w-5">{{ i + 1 }}</span>
                <span class="flex-1">{{ rule.text }}</span>
                <span class="font-bold px-2 py-0.5 rounded-lg text-xs" :class="rule.allow ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'">
                  {{ rule.allow ? 'سماح ✓' : 'منع ✗' }}
                </span>
              </div>
            </div>

            <div class="min-h-[56px] rounded-xl p-3 text-sm leading-relaxed"
                 :class="verdict === null ? 'bg-slate-900 text-slate-400' : verdict ? 'bg-emerald-950 text-emerald-200 border border-emerald-700' : 'bg-rose-950 text-rose-200 border border-rose-700'">
              <template v-if="verdict === null">{{ busy ? 'جدار الحماية يفحص الطلب…' : 'اختر طلبًا لإرساله.' }}</template>
              <template v-else>
                <strong>{{ verdict ? '✓ تم السماح بالطلب' : '✗ تم منع الطلب' }}</strong> — طبقًا للقاعدة {{ matchedRule + 1 }}: {{ requests[current].why }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { Globe, BrickWall, Server, Database, Building2, Monitor } from 'lucide-vue-next'

const rules = [
  { text: 'السماح لأي جهاز بفتح موقع المؤسسة على خادم الويب (HTTPS)', allow: true },
  { text: 'منع أي وصول خارجي مباشر إلى قاعدة البيانات', allow: false },
  { text: 'السماح للموظفين المتصلين عبر VPN بالوصول إلى الشبكة الداخلية', allow: true },
  { text: 'القاعدة الافتراضية: منع أي اتصال آخر', allow: false },
]

const requests = [
  { icon: '🧑‍💻', text: 'زائر يفتح موقع المؤسسة', target: 'خادم الويب', targetIcon: Server, rule: 0, why: 'الوصول إلى خادم الويب مسموح للجميع.' },
  { icon: '🕵️', text: 'مهاجم يحاول الاتصال بقاعدة البيانات مباشرة', target: 'قاعدة البيانات', targetIcon: Database, rule: 1, why: 'لا يُسمح بالوصول الخارجي المباشر إلى قاعدة البيانات.' },
  { icon: '🏠', text: 'موظف يعمل من المنزل عبر VPN', target: 'الشبكة الداخلية', targetIcon: Building2, rule: 2, why: 'الموظف يتصل عبر نفق VPN مسموح به.' },
  { icon: '❓', text: 'اتصال مجهول على منفذ غير معروف', target: 'جهاز داخلي', targetIcon: Monitor, rule: 3, why: 'لا توجد قاعدة تسمح به، فتطبق القاعدة الافتراضية بالمنع.' },
]

const current = ref(null)
const matchedRule = ref(null)
const verdict = ref(null)
const busy = ref(false)
const phase = ref('idle') // idle → travel → passed | bounced
let timers = []

const packetClass = computed(() => ({
  'packet-travel': phase.value === 'travel',
  'packet-pass': phase.value === 'passed',
  'packet-bounce': phase.value === 'bounced',
}))

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}

function send(i) {
  clearTimers()
  current.value = i
  matchedRule.value = null
  verdict.value = null
  busy.value = true
  phase.value = 'idle'
  timers.push(setTimeout(() => { phase.value = 'travel' }, 30))
  // Walk the rules top-down, highlighting each until the matching one
  const target = requests[i].rule
  for (let r = 0; r <= target; r++) {
    timers.push(setTimeout(() => { matchedRule.value = r }, 700 + r * 350))
  }
  timers.push(setTimeout(() => {
    verdict.value = rules[target].allow
    phase.value = rules[target].allow ? 'passed' : 'bounced'
    busy.value = false
  }, 900 + target * 350))
}

onUnmounted(clearTimers)
</script>

<style scoped>
.packet {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  font-size: 1.5rem;
  transition: right 0.7s ease-in-out, opacity 0.4s ease;
}
.packet-travel { right: 100%; }
.packet-pass { right: 100%; opacity: 0.2; }
.packet-bounce { right: 30%; opacity: 0.5; filter: grayscale(1); }
</style>
