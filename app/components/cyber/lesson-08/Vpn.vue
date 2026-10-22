<template>
  <section id="vpn" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-8">2. الشبكة الافتراضية الخاصة (VPN)</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">الشبكة الافتراضية الخاصة – VPN</strong>... اتصال أو شبكة منطقية خاصة عبر شبكة عامة مثل الإنترنت،
            تستخدم عادةً التشفير وتقنيات النفق لحماية البيانات بين الطرفين.
          </p>
          <p>
            <span class="font-bold text-slate-400">(3)</span>
            نظرًا لأن محتوى الاتصال يُشفَّر عند استخدام الشبكة الافتراضية الخاصة، تقل مخاطر التنصت حتى عند استخدام شبكة Wi-Fi عامة.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-teal-700 mb-3">(2) الاستخدامات الرئيسية</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-indigo-50 rounded-xl p-3">
              <span class="text-2xl">🏠</span>
              <p class="text-slate-700"><strong>العمل عن بُعد</strong>... الاتصال بأمان بشبكة المؤسسة من المنزل أو أثناء التنقل.</p>
            </div>
            <div class="flex items-start gap-3 bg-teal-50 rounded-xl p-3">
              <span class="text-2xl">🏢</span>
              <p class="text-slate-700"><strong>ربط الفروع</strong>... ربط المكاتب في مواقع مختلفة بأمان.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- VPN demo -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-slate-900">🧪 جرّب بنفسك: موظف في مقهى على شبكة Wi-Fi عامة</h3>
            <p class="text-slate-600 mt-1">شغّل VPN أو أوقفه، وشاهد ما يراه المتنصت على الشبكة نفسها.</p>
          </div>
          <button @click="vpnOn = !vpnOn"
                  class="relative inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-bold transition-colors shrink-0"
                  :class="vpnOn ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'">
            <span class="w-12 h-7 rounded-full relative transition-colors" :class="vpnOn ? 'bg-indigo-300' : 'bg-slate-400'">
              <span class="absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all" :class="vpnOn ? 'left-1' : 'left-6'"></span>
            </span>
            VPN {{ vpnOn ? 'مفعّل' : 'متوقف' }}
          </button>
        </div>

        <div class="relative bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl border border-slate-200 p-5 md:p-8">
          <div class="flex items-center justify-between gap-2">
            <div class="flex flex-col items-center w-24 shrink-0">
              <div class="w-16 h-16 rounded-2xl bg-white border-2 border-slate-300 flex items-center justify-center"><Laptop class="w-9 h-9 text-slate-700" /></div>
              <span class="text-sm font-bold mt-2 text-center">موظف في المقهى</span>
              <span class="text-xs text-slate-500 flex items-center gap-1"><Wifi class="w-3 h-3" /> Wi-Fi عامة</span>
            </div>

            <div class="flex-1 relative h-24">
              <!-- Tunnel -->
              <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 rounded-full transition-all duration-500"
                   :class="vpnOn ? 'bg-indigo-500/15 border-2 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.35)]' : 'border-2 border-dashed border-slate-300'"></div>
              <div class="absolute inset-x-4 top-1/2 h-0.5 -translate-y-1/2 bg-slate-300"></div>
              <div class="data-packet" :class="vpnOn ? 'bg-indigo-600 text-white' : 'bg-amber-100 text-amber-900 border border-amber-300'">
                <Lock v-if="vpnOn" class="w-4 h-4" />
                <span dir="auto">{{ vpnOn ? '••••' : '📄' }}</span>
              </div>
              <span v-if="vpnOn" class="absolute -top-1 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-700 bg-white px-2 rounded-full border border-indigo-200">نفق مشفّر</span>
            </div>

            <div class="flex flex-col items-center w-24 shrink-0">
              <div class="w-16 h-16 rounded-2xl bg-white border-2 border-teal-300 flex items-center justify-center"><Building2 class="w-9 h-9 text-teal-700" /></div>
              <span class="text-sm font-bold mt-2 text-center">شبكة المؤسسة</span>
            </div>
          </div>

          <!-- Snooper -->
          <div class="mt-6 flex flex-col md:flex-row items-stretch gap-4">
            <div class="flex items-center gap-3 shrink-0">
              <div class="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-2xl">🕵️</div>
              <span class="font-bold text-slate-700">ما يراه المتنصت:</span>
            </div>
            <div class="flex-1 rounded-xl p-4 font-mono text-sm leading-relaxed border-2 transition-colors"
                 :class="vpnOn ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'" dir="ltr">
              <template v-if="vpnOn">8f#Kq!2zL@9wX$e1&amp;Rt7…<br>a$4Pn*0vQ!x8#Hm2…</template>
              <template v-else>user: ahmed.employee<br>file: sales-report-2026.xlsx</template>
            </div>
          </div>
          <p class="mt-4 text-center font-bold" :class="vpnOn ? 'text-emerald-700' : 'text-rose-700'">
            {{ vpnOn
              ? '✓ المحتوى مشفّر داخل النفق؛ المتنصت يرى بيانات غير مفهومة، فتقل مخاطر التنصت.'
              : '✗ بدون VPN قد يتمكن من يتنصت على الشبكة العامة من قراءة بيانات غير محمية.' }}
          </p>
        </div>

        <div class="mt-6 grid md:grid-cols-2 gap-4">
          <div class="bg-white border border-slate-200 rounded-2xl p-4">
            <strong class="text-rose-600">مصطلح أساسي:</strong>
            <span class="text-slate-700"> VPN – خط خاص افتراضي مشفّر عبر الإنترنت للاتصال الآمن من موقع بعيد.</span>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-900">
            <strong>⚠️ انتبه:</strong> VPN يحمي البيانات أثناء انتقالها، لكنه <strong>لا</strong> يحذف الملفات المصابة بالفيروسات؛ هذه مهمة حماية الأجهزة الطرفية.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Laptop, Wifi, Building2, Lock } from 'lucide-vue-next'

const vpnOn = ref(false)
</script>

<style scoped>
.data-packet {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 0.85rem;
  transform: translateY(-50%);
  animation: travel 3s linear infinite;
}
/* Laptop is on the right (RTL), the company on the left */
@keyframes travel {
  0% { right: 0; opacity: 0; }
  10%, 90% { opacity: 1; }
  100% { right: calc(100% - 3.5rem); opacity: 0; }
}
</style>
