<template>
  <section id="https" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">
        <span>📌</span> ملحوظة مهمة
      </div>
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-8">1. كيف تعمل اتصالات HTTPS</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <!-- Key pair visual -->
        <div class="lg:col-span-2 bg-gradient-to-br from-amber-50 to-sky-50 border border-slate-200 rounded-3xl p-6 md:p-8">
          <div class="flex items-center justify-center gap-4 sm:gap-8 mb-4">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-2xl bg-white border-2 border-sky-300 shadow-sm flex items-center justify-center">
                <Globe class="w-10 h-10 text-sky-600" />
              </div>
              <span class="mt-2 font-bold text-sky-800">مفتاح عام</span>
              <span class="text-xs text-slate-500">يمكن مشاركته</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 rounded-full bg-white border-4 border-amber-300 shadow-md flex items-center justify-center animate-pulse">
                <Lock class="w-12 h-12 text-amber-500" />
              </div>
              <span class="mt-2 text-xs font-bold text-slate-500">زوج مرتبط</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-2xl bg-white border-2 border-indigo-300 shadow-sm flex items-center justify-center">
                <ShieldCheck class="w-10 h-10 text-indigo-600" />
              </div>
              <span class="mt-2 font-bold text-indigo-800">مفتاح خاص</span>
              <span class="text-xs text-slate-500">يبقى سريًا</span>
            </div>
          </div>
          <p class="text-center text-sm font-bold text-slate-600">
            يستخدم التشفير بالمفتاح العام زوجًا من المفاتيح المرتبطة: مفتاحًا عامًا ومفتاحًا خاصًا.
          </p>
        </div>

        <!-- Key term -->
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-sky-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600" dir="ltr">HTTPS</strong> – نظام لإجراء اتصالات الويب بأمان (التشفير، واكتشاف التلاعب، والتحقق من الطرف المقابل).
          </p>
        </div>
      </div>

      <div class="space-y-5 text-lg text-slate-700 leading-relaxed mb-10">
        <p>
          <span class="font-bold text-slate-400">(1)</span>
          <strong class="text-rose-600">(HTTPS)</strong>… بروتوكول HTTP منقول عبر اتصال TLS مؤمَّن. يوفر TLS سرية البيانات وسلامتها أثناء النقل،
          ويساعد المتصفح على التحقق من هوية الخادم واسم النطاق. وتسمى خطوات إنشاء الاتصال الآمن <strong class="text-rose-600">مصافحة TLS</strong>.
        </p>
        <p>
          <span class="font-bold text-slate-400">(2)</span>
          تجري المصادقة بالشهادة الرقمية واشتقاق مفاتيح الجلسة داخل مصافحة TLS نفسها، ثم يُستخدم التشفير المتماثل لحماية بيانات الاتصال بكفاءة.
        </p>
      </div>

      <!-- Stages table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table class="w-full text-right min-w-[640px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/4">المرحلة</th>
              <th class="p-4 font-bold">ما يحدث</th>
              <th class="p-4 font-bold w-1/5">آلية الحماية الأساسية</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(s, i) in stages" :key="i"
                class="border-t border-slate-200 cursor-pointer transition-colors"
                :class="active === i ? 'bg-sky-50' : 'bg-white hover:bg-slate-50'"
                @click="active = i">
              <td class="p-4 font-bold text-slate-900">
                <span class="inline-flex w-7 h-7 rounded-full bg-sky-600 text-white text-sm items-center justify-center ml-2">{{ i + 1 }}</span>
                {{ s.stage }}
              </td>
              <td class="p-4 text-slate-700 leading-relaxed">{{ s.what }}</td>
              <td class="p-4">
                <span class="inline-block text-sm font-bold px-3 py-1 rounded-full"
                      :class="s.mechanism === 'التشفير المتماثل' ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'">
                  {{ s.mechanism }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Globe, Lock, ShieldCheck } from 'lucide-vue-next'

const active = ref(null)

const stages = [
  {
    stage: 'مصافحة TLS: التحقق من الشهادة',
    what: 'أثناء المصافحة يرسل الخادم شهادته الرقمية، ويتحقق المتصفح من صلاحيتها وسلسلة الثقة وملاءمتها لاسم الموقع.',
    mechanism: 'التشفير بالمفتاح العام',
  },
  {
    stage: 'مصافحة TLS: اشتقاق مفاتيح الجلسة',
    what: 'وفي المصافحة نفسها يتفاوض الطرفان على أسرار مشتركة تُشتق منها مفاتيح الجلسة، باستخدام آليات مفتاح عام مناسبة لإصدار TLS ومجموعة التشفير.',
    mechanism: 'التشفير بالمفتاح العام',
  },
  {
    stage: 'تبادل البيانات',
    what: 'تُحمى بيانات الجلسة بالتشفير المتماثل وآليات سلامة البيانات.',
    mechanism: 'التشفير المتماثل',
  },
]
</script>
