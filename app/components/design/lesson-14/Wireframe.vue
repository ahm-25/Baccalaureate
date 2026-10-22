<template>
  <section id="wireframe" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-fuchsia-800 mb-8">2. المخطط الهيكلي</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">المخطط الهيكلي (Wireframe)</strong>: مخطط أولي يساعد على تحديد أماكن العناصر وأولوياتها.
            وغالبًا يستخدم تفاصيل بصرية قليلة حتى يركز الفريق على البنية قبل التصميم البصري النهائي.
          </p>
          <p>
            <span class="font-bold text-slate-400">(2)</span>
            باستخدام المخطط الهيكلي، يمكن النظر في "توزيع المعلومات ومواضعها" بمعزل عن التصميم البصري. فإذا تم تحديد الزخارف كالألوان والخطوط أولًا،
            تميل النقاشات إلى الانحراف نحو التفضيلات الشخصية في المظهر. لذا فإن تحديد مكان وأولوية المعلومات أولًا يسهّل على أصحاب المصلحة الوصول إلى اتفاق.
          </p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-fuchsia-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed">
            <strong class="text-rose-600">المخطط الهيكلي</strong> – مخطط للتخطيط قبل إضافة أي لون أو زخرفة.
          </p>
        </div>
      </div>

      <!-- Figure 4.2.1 with a wireframe ↔ final design toggle -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span class="inline-block text-xs font-bold text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-3 py-1 rounded-full mb-2">الشكل 4.2.1 – مثال على إطار هيكلي</span>
            <h3 class="text-xl font-bold text-slate-900">🧪 من الهيكل إلى التصميم النهائي</h3>
            <p class="text-slate-600 text-sm mt-1">لاحظ: أماكن العناصر وأولوياتها لا تتغير؛ فقط تُضاف الزخارف في المرحلة اللاحقة.</p>
          </div>
          <div class="flex bg-slate-100 rounded-2xl p-1 shrink-0">
            <button v-for="m in modes" :key="m.key" @click="mode = m.key"
                    class="px-4 py-2 rounded-xl font-bold text-sm transition-colors"
                    :class="mode === m.key ? 'bg-fuchsia-600 text-white' : 'text-slate-600 hover:bg-white'">{{ m.label }}</button>
          </div>
        </div>

        <div class="rounded-2xl p-3 transition-all duration-500 mx-auto max-w-3xl"
             :class="wire ? 'border-2 border-dashed border-slate-400 bg-white' : 'border border-slate-200 bg-slate-50 shadow-lg'">
          <!-- Header -->
          <div class="rounded-lg p-3 text-center transition-all duration-500"
               :class="wire ? 'bg-slate-200 text-slate-700' : 'bg-gradient-to-l from-fuchsia-600 to-pink-500 text-white'">
            <template v-if="wire"><b>الرأس</b> <span class="text-xs">(الشعار / اسم الموقع)</span></template>
            <template v-else><span class="text-xl font-black">📚 مكتبة المدرسة</span></template>
          </div>
          <!-- Nav -->
          <div class="rounded-lg p-2 mt-2 text-center text-sm transition-all duration-500"
               :class="wire ? 'bg-slate-400 text-white' : 'bg-white border border-fuchsia-100 text-fuchsia-800 font-bold'">
            <template v-if="wire"><b>التنقل</b> (القائمة)</template>
            <template v-else>الرئيسية • الكتب • الحجز • تواصل معنا</template>
          </div>
          <div class="flex gap-2 mt-2">
            <!-- Main content (right in RTL) -->
            <div class="flex-[2] rounded-lg p-3 min-h-[9rem] transition-all duration-500"
                 :class="wire ? 'bg-slate-100 border border-dashed border-slate-300 text-slate-600 text-center' : 'bg-white border border-slate-200'">
              <template v-if="wire">
                <b>المحتوى الرئيسي</b><div class="text-xs">(المقالات، المنتجات، المعلومات الرئيسية)</div>
                <div class="mt-3 space-y-1.5"><div v-for="n in 4" :key="n" class="h-2 bg-slate-300 rounded mx-4"></div></div>
              </template>
              <template v-else>
                <h4 class="font-black text-slate-900 text-lg mb-2">كتب جديدة هذا الأسبوع</h4>
                <div class="grid grid-cols-3 gap-2">
                  <div v-for="b in books" :key="b.t" class="rounded-lg bg-fuchsia-50 border border-fuchsia-100 p-2 text-center">
                    <div class="text-2xl">{{ b.i }}</div><div class="text-xs font-bold text-slate-700">{{ b.t }}</div>
                  </div>
                </div>
              </template>
            </div>
            <!-- Sidebar -->
            <div class="flex-1 rounded-lg p-3 transition-all duration-500"
                 :class="wire ? 'bg-slate-100 border border-dashed border-slate-300 text-slate-600 text-center' : 'bg-amber-50 border border-amber-200'">
              <template v-if="wire"><b>الشريط الجانبي</b><div class="text-xs">(المعلومات ذات الصلة، الإعلانات)</div></template>
              <template v-else>
                <div class="font-bold text-amber-800 text-sm mb-1">⏰ مواعيد المكتبة</div>
                <div class="text-xs text-slate-600 leading-relaxed">من 8 ص إلى 2 م<br>الحجز متاح أونلاين</div>
              </template>
            </div>
          </div>
          <!-- Footer -->
          <div class="rounded-lg p-2 mt-2 text-center text-xs transition-all duration-500"
               :class="wire ? 'bg-slate-200 text-slate-700' : 'bg-slate-800 text-slate-200'">
            <template v-if="wire"><b>تذييل الصفحة</b> (حقوق المؤلف، معلومات التواصل، روابط الأقسام)</template>
            <template v-else>© مكتبة المدرسة • 📞 للتواصل • روابط الأقسام</template>
          </div>
        </div>
        <p class="text-center text-sm font-bold text-slate-500 mt-4">
          تُظهر الإطارات السلكية (Wireframes) الهيكل وتخطيط المعلومات، تاركةً التصميم البصري لمرحلة لاحقة.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const modes = [
  { key: 'wire', label: 'المخطط الهيكلي' },
  { key: 'final', label: 'التصميم النهائي' },
]
const mode = ref('wire')
const wire = computed(() => mode.value === 'wire')
const books = [
  { i: '📘', t: 'البرمجة' },
  { i: '🧪', t: 'العلوم' },
  { i: '🌍', t: 'الجغرافيا' },
]
</script>
