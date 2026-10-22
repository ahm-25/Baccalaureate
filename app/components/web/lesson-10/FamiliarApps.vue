<template>
  <section id="familiar-apps" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-violet-800 mb-6">4. إعدادات تطبيقات الويب المألوفة</h2>
      <p class="text-lg text-slate-700 leading-relaxed mb-8">
        <span class="font-bold text-slate-400">(1)</span>
        يمكن تطبيق هذا النموذج المبسط على كثير من تطبيقات الويب لفهم توزيع المهام، مع أن البنية الفعلية قد تختلف.
      </p>

      <!-- Service tabs -->
      <div class="flex flex-wrap gap-2 mb-4">
        <button v-for="(s, i) in services" :key="s.name" @click="active = i"
                class="px-4 py-2 rounded-xl border-2 font-bold transition-colors"
                :class="active === i ? 'bg-violet-600 border-violet-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300'">
          {{ s.icon }} {{ s.name }}
        </button>
      </div>
      <div class="grid md:grid-cols-3 gap-4 mb-10">
        <div v-for="col in columns" :key="col.key" class="rounded-2xl border-2 p-5" :class="col.border">
          <h3 class="font-bold mb-1" :class="col.text">{{ col.icon }} {{ col.name }}</h3>
          <p class="text-xs text-slate-500 mb-3">({{ col.sub }})</p>
          <p class="text-slate-700 leading-relaxed">{{ services[active][col.key] }}</p>
        </div>
      </div>

      <!-- Full table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[700px] bg-white text-sm">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-3 font-bold">الخدمة</th>
              <th v-for="col in columns" :key="col.key" class="p-3 font-bold">{{ col.name }}<br><span class="text-xs font-medium text-slate-500">({{ col.sub }})</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in services" :key="s.name" class="border-t border-slate-200">
              <td class="p-3 font-bold text-slate-900">{{ s.icon }} {{ s.name }}</td>
              <td class="p-3 text-slate-600">{{ s.front }}</td>
              <td class="p-3 text-slate-600">{{ s.back }}</td>
              <td class="p-3 text-slate-600">{{ s.data }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sorter -->
      <div class="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧪 جرّب بنفسك: إلى أي طبقة تنتمي هذه المهمة؟</h3>
        <p class="text-slate-600 mb-6">مهام من خدمات مختلفة — حدّد الطبقة المسؤولة عن كل منها.</p>
        <CyberLesson07ChoiceItems :items="tasks" :options="layerOptions" />
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          تُبنى تقريبًا كل خدمة عبر الإنترنت – الفيديو، والتواصل الاجتماعي، والتسوق – على نفس الطبقات الثلاث: واجهة أمامية تعرض وتجمع،
          وواجهة خلفية تقرر وتعالج، وقاعدة بيانات تخزن وتسترجع.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const columns = [
  { key: 'front', icon: '🖥️', name: 'الواجهة الأمامية', sub: 'العرض والتفاعل', border: 'border-violet-200 bg-violet-50/50', text: 'text-violet-700' },
  { key: 'back', icon: '⚙️', name: 'الواجهة الخلفية', sub: 'المعالجة والتحكم', border: 'border-indigo-200 bg-indigo-50/50', text: 'text-indigo-700' },
  { key: 'data', icon: '🗄️', name: 'قاعدة البيانات', sub: 'التخزين والإدارة', border: 'border-sky-200 bg-sky-50/50', text: 'text-sky-700' },
]

const services = [
  { icon: '🎬', name: 'موقع مشاركة الفيديو', front: 'عرض شاشات تشغيل الفيديو والبحث؛ استقبال إجراءات المستخدم', back: 'اختيار الفيديوهات الموصى بها؛ تجميع عدد المشاهدات', data: 'تخزين بيانات الفيديو، ومعلومات المستخدمين، وسجل المشاهدة' },
  { icon: '💬', name: 'شبكة التواصل الاجتماعي', front: 'عرض الخط الزمني وشاشات النشر؛ إرسال المحتوى المُدخل', back: 'تحديد الجمهور المستهدف للمنشورات؛ التحكم في الإشعارات الفورية', data: 'تخزين بيانات المنشورات، وعلاقات المتابعة، والرسائل' },
  { icon: '🛒', name: 'موقع تجارة إلكترونية', front: 'عرض قوائم المنتجات وشاشات سلة التسوق؛ استقبال عمليات الطلب', back: 'التحقق من المخزون؛ إرسال طلبات الدفع والتعامل مع نتائجها', data: 'تخزين معلومات المنتجات، وسجل الطلبات، ومعلومات العملاء' },
]
const active = ref(0)

const layerOptions = ['أ الواجهة الأمامية', 'ب الواجهة الخلفية', 'ج قاعدة البيانات']
const tasks = [
  { text: '🎬 عرض شاشة تشغيل الفيديو', ans: 0 },
  { text: '🎬 تجميع عدد المشاهدات', ans: 1 },
  { text: '💬 تخزين علاقات المتابعة', ans: 2 },
  { text: '🛒 التحقق من المخزون', ans: 1 },
  { text: '🛒 عرض شاشة سلة التسوق', ans: 0 },
  { text: '🛒 تخزين سجل الطلبات', ans: 2 },
]
</script>
