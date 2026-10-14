<template>
  <section id="summary" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-2 border-sky-100 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 text-9xl opacity-10 pointer-events-none">⭐</div>

        <h2 class="text-3xl font-extrabold text-sky-900 mb-2 flex items-center gap-3">
          <span>⭐</span> الخلاصة
        </h2>
        <p class="font-bold text-sky-700 mb-8">تذكّر:</p>

        <ul class="space-y-4 mb-10">
          <li v-for="p in points" :key="p.text" class="flex items-start gap-4">
            <span class="text-xl mt-1">{{ p.icon }}</span>
            <p class="text-lg text-slate-800 font-medium leading-relaxed" v-html="p.text"></p>
          </li>
        </ul>

        <h3 class="text-xl font-bold text-sky-900 mb-4">📖 مصطلحات الدرس</h3>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="t in terms" :key="t.name" class="bg-white/80 border border-sky-100 rounded-xl p-4">
            <strong class="text-rose-600">{{ t.name }}</strong>
            <p class="text-slate-700 text-sm mt-1 leading-relaxed">{{ t.def }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  { icon: '🔐', text: 'تستخدم مصافحة <strong class="text-sky-700">HTTPS</strong> آليات المفتاح العام للمصادقة والاتفاق الآمن على أسرار مشتركة تُشتق منها مفاتيح الجلسة.' },
  { icon: '⚡', text: 'ثم تُحمى بيانات الجلسة <strong class="text-amber-700">بالتشفير المتماثل</strong> بسرعة.' },
  { icon: '🧱', text: 'تحافظ الخدمات على أمانها من خلال <strong class="text-emerald-700">تكديس</strong> التشفير والشهادات والتوقيعات والمصادقة الثنائية (2FA).' },
]

const terms = [
  { name: 'HTTPS', def: 'نظام لإجراء اتصالات الويب بأمان (التشفير، واكتشاف التلاعب، والتحقق من الطرف المقابل).' },
  { name: 'التشفير', def: 'يحافظ على خصوصية المحتوى.' },
  { name: 'التشفير بالمفتاح العام', def: 'يشارك المفتاح بأمان.' },
  { name: 'التشفير المتماثل', def: 'يتبادل البيانات بسرعة.' },
  { name: 'الشهادة الرقمية', def: 'تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق.' },
  { name: 'التوقيع الرقمي', def: 'يكتشف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم عدم التنصل.' },
  { name: 'المصادقة الثنائية (2FA)', def: 'تقلل احتمال تسجيل الدخول غير المصرح به باستخدام عاملين مستقلين من فئتين مختلفتين.' },
  { name: 'المصادقة متعددة العوامل (MFA)', def: 'استخدام عاملين أو أكثر من فئات مختلفة مثل المعرفة والحيازة والسمات الحيوية.' },
]
</script>
