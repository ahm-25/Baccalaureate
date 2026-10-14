<template>
  <section id="security-combination" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-6">3. تركيبات تقنيات الأمان</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">
        <span class="font-bold text-slate-400">(1)</span>
        يتحقق الاتصال والخدمات الآمنة ليس من خلال تقنية واحدة، بل من خلال الجمع بين عدة تقنيات أمان.
      </p>

      <div class="grid lg:grid-cols-3 gap-6 mb-12">
        <!-- Techniques table -->
        <div class="lg:col-span-2 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table class="w-full text-right min-w-[480px]">
            <thead class="bg-slate-100 text-slate-800">
              <tr>
                <th class="p-4 font-bold w-2/5">التقنية</th>
                <th class="p-4 font-bold">التأثير</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="t in techniques" :key="t.name" class="border-t border-slate-200">
                <td class="p-4 font-bold text-slate-900">{{ t.icon }} {{ t.name }}</td>
                <td class="p-4 text-slate-700 leading-relaxed">{{ t.effect }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Key terms -->
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-sky-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التوقيع الرقمي</strong> – يكتشف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم عدم التنصل.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التشفير بالمفتاح العام</strong> – يشارك المفتاح بأمان.</p>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">التشفير المتماثل</strong> – يتبادل البيانات بسرعة.</p>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-sm text-orange-900">
            📜 الشهادات الرقمية تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق الذي يتصل به.
          </div>
        </div>
      </div>

      <!-- Shopping example stepper -->
      <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🛒 <span class="text-slate-400">(2)</span> مثال: شراء منتج عبر التسوق الإلكتروني</h3>
        <p class="text-slate-600 mb-6">يتم الجمع بين هذه التقنيات واستخدامها على النحو التالي — اضغط "الخطوة التالية":</p>

        <div class="flex items-center gap-2 mb-6">
          <div v-for="(s, i) in shopping" :key="i" class="flex-1 h-2 rounded-full transition-colors duration-500"
               :class="i <= step ? 'bg-sky-500' : 'bg-slate-200'"></div>
        </div>

        <div class="space-y-3">
          <transition-group name="list">
            <div v-for="(s, i) in shopping.slice(0, step + 1)" :key="i"
                 class="bg-white border rounded-2xl p-4 flex items-start gap-4"
                 :class="i === step ? 'border-sky-400 shadow-md' : 'border-slate-200'">
              <span class="w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0">{{ i + 1 }}</span>
              <div>
                <span class="inline-block text-sm font-bold px-3 py-1 rounded-full mb-2" :class="s.chip">{{ s.tech }}</span>
                <p class="text-slate-700 leading-relaxed">{{ s.text }}</p>
              </div>
            </div>
          </transition-group>
        </div>

        <div class="flex gap-3 mt-6">
          <button v-if="step < shopping.length - 1" @click="step++" class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            الخطوة التالية ←
          </button>
          <button v-else @click="step = 0" class="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-xl transition-colors">
            ↺ أعد المثال
          </button>
        </div>
      </div>

      <p class="text-lg text-slate-700 leading-relaxed mb-8">
        <span class="font-bold text-slate-400">(3)</span>
        يتيح الجمع بين تقنيات الحماية تقليل مخاطر عدة تهديدات، مثل التنصت والتلاعب وانتحال الهوية والدخول غير المصرح به، من دون افتراض أن أي تقنية تمنع الخطر منعًا مطلقًا.
      </p>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
        <span class="text-sm font-bold text-amber-700">الفكرة الرئيسية</span>
        <p class="text-xl font-bold text-slate-900 leading-relaxed mt-2">
          لا يأتي الأمان عبر الإنترنت من تقنية واحدة، بل من الجمع بين التشفير والشهادات والتوقيعات والمصادقة بحيث تتم معالجة تهديدات كثيرة في آن واحد.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const techniques = [
  { icon: '🔐', name: 'التشفير (بالمفتاح المتماثل والمفتاح العام)', effect: 'يمنع قراءة محتوى الاتصال من قبل أطراف ثالثة' },
  { icon: '✍️', name: 'التوقيع الرقمي', effect: 'يدعم التحقق من سلامة البيانات وهوية الموقِّع، ويوفر دليلًا يدعم عدم التنصل عندما يتطلب النظام ذلك' },
  { icon: '📜', name: 'الشهادة الرقمية', effect: 'تساعد المتصفح على التحقق من هوية خادم الويب واسم النطاق الذي يتصل به' },
  { icon: '📱', name: 'المصادقة الثنائية (2FA)', effect: 'تقلل احتمال تسجيل الدخول غير المصرح به' },
]

const shopping = [
  { tech: 'التشفير', chip: 'bg-sky-100 text-sky-800', text: 'عندما تدخل إلى الموقع، يبدأ اتصال HTTPS، ويمنع التشفير قراءة محتوى الاتصال من قبل أطراف ثالثة.' },
  { tech: 'الشهادة الرقمية', chip: 'bg-orange-100 text-orange-800', text: 'يتحقق المتصفح من الشهادة الرقمية واسم النطاق للتأكد من هوية الخادم الذي يتصل به.' },
  { tech: 'المصادقة الثنائية (2FA)', chip: 'bg-emerald-100 text-emerald-800', text: 'عند تسجيل الدخول، تقلل المصادقة الثنائية احتمال الدخول غير المصرح به باستخدام عاملين مستقلين.' },
  { tech: 'TLS + التوقيع الرقمي', chip: 'bg-rose-100 text-rose-800', text: 'أثناء إرسال تفاصيل الطلب، يحمي TLS سرية البيانات وسلامتها أثناء النقل. ويُستخدم التوقيع الرقمي لإثبات التوقيع على بيانات أو رسائل محددة عندما يتطلب النظام ذلك.' },
]

const step = ref(0)
</script>

<style scoped>
.list-enter-active { transition: all 0.4s ease; }
.list-enter-from { opacity: 0; transform: translateY(10px); }
</style>
