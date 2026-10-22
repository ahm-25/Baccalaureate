<template>
  <section id="http-https" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-8">2. HTTP و HTTPS</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">HTTP (بروتوكول نقل النص التشعبي)</strong>: بروتوكول يُستخدم لتبادل الرسائل بين عميل وخادم على الويب.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            <strong class="text-rose-600">HTTPS</strong>: استخدام HTTP عبر اتصال <span dir="ltr">TLS (Transport Layer Security)</span> آمن.
            يساعد TLS على حماية سرية الاتصال وسلامته، وعلى مصادقة الخادم، بحيث لا يستطيع المتجسس قراءة المحتوى أو تعديله بسهولة أثناء النقل.
          </p>
          <p>
            <span class="font-bold text-slate-400">(3)</span>
            المواقع التي تبدأ عناوينها بـ <code class="font-mono bg-white border border-slate-200 rounded px-1.5" dir="ltr">https://</code> تستخدم اتصال HTTPS.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-sky-700 mb-3">تذكّر من الدرس 2-1</h3>
          <p class="text-slate-700 leading-relaxed">
            يستخدم TLS آليات المفتاح العام للمصادقة والاتفاق على مفاتيح الجلسة، ثم يحمي بيانات الجلسة بالتشفير المتماثل.
          </p>
        </div>
      </div>

      <!-- HTTP vs HTTPS demo -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-slate-900">🧪 جرّب بنفسك: صفحة تسجيل دخول عبر HTTP أم HTTPS؟</h3>
            <p class="text-slate-600 mt-1">بدّل البروتوكول، ثم أرسل نموذج الدخول، وشاهد ما يراه المتجسس على الشبكة.</p>
          </div>
          <div class="flex bg-slate-100 border border-slate-200 rounded-2xl p-1 shrink-0" dir="ltr">
            <button v-for="p in ['http', 'https']" :key="p" @click="setProto(p)"
                    class="px-5 py-2 rounded-xl font-bold font-mono transition-colors"
                    :class="proto === p ? (p === 'https' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') : 'text-slate-600'">
              {{ p.toUpperCase() }}
            </button>
          </div>
        </div>

        <!-- Fake browser -->
        <div class="rounded-2xl border border-slate-300 overflow-hidden mb-6">
          <div class="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b border-slate-300" dir="ltr">
            <span class="w-3 h-3 rounded-full bg-rose-400"></span><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <div class="flex-1 mx-3 bg-white rounded-lg px-3 py-1 text-sm font-mono flex items-center gap-2 border border-slate-200">
              <component :is="proto === 'https' ? Lock : LockOpen" class="w-4 h-4" :class="proto === 'https' ? 'text-emerald-600' : 'text-rose-500'" />
              <span :class="proto === 'https' ? 'text-emerald-700' : 'text-rose-600'">{{ proto }}://</span><span class="text-slate-700">school.example/login</span>
            </div>
          </div>
          <div class="p-5 bg-white grid sm:grid-cols-3 gap-3 items-end">
            <label class="text-sm font-bold text-slate-600">اسم المستخدم
              <input value="student01" readonly class="mt-1 w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono text-left" dir="ltr" />
            </label>
            <label class="text-sm font-bold text-slate-600">كلمة المرور
              <input value="••••••••" readonly class="mt-1 w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono text-left" dir="ltr" />
            </label>
            <button @click="sent = true" class="h-11 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg">تسجيل الدخول</button>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-stretch gap-4">
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-2xl">🕵️</div>
            <span class="font-bold text-slate-700">ما يراه المتجسس:</span>
          </div>
          <div class="flex-1 rounded-xl p-4 font-mono text-sm leading-relaxed border-2 min-h-[5rem] transition-colors"
               :class="!sent ? 'bg-slate-50 border-slate-200 text-slate-400' : proto === 'https' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'"
               dir="ltr">
            <template v-if="!sent">— (waiting for traffic) —</template>
            <template v-else-if="proto === 'https'">17 03 03 00 4a 9f e2 1c 7b 0d …<br>c8 51 aa 3e 06 f4 9b 72 d1 …</template>
            <template v-else>POST /login HTTP/1.1<br>username=student01&amp;password=Ahmed2026!</template>
          </div>
        </div>
        <p v-if="sent" class="mt-4 text-center font-bold" :class="proto === 'https' ? 'text-emerald-700' : 'text-rose-700'">
          {{ proto === 'https'
            ? '✓ مع HTTPS يحمي TLS سرية الاتصال وسلامته؛ فلا يستطيع المتجسس قراءة المحتوى أو تعديله بسهولة أثناء النقل.'
            : '✗ مع HTTP العادي تنتقل البيانات دون حماية TLS، فيستطيع المتجسس قراءة اسم المستخدم وكلمة المرور.' }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Lock, LockOpen } from 'lucide-vue-next'

const proto = ref('http')
const sent = ref(false)
function setProto(p) {
  proto.value = p
  sent.value = false
}
</script>
