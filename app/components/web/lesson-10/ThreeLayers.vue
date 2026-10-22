<template>
  <section id="three-layers" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-violet-800 mb-8">2. الطبقات الثلاث لتطبيق الويب</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">
        <span class="font-bold text-slate-400">(1)</span>
        في هذا النموذج التعليمي، نقسم تطبيق الويب إلى ثلاثة أجزاء رئيسة كما يأتي. وقد تختلف البنية الفعلية من تطبيق إلى آخر.
      </p>

      <!-- Table -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-12">
        <table class="w-full text-right min-w-[620px] bg-white">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/5">الطبقة</th>
              <th class="p-4 font-bold">الدور</th>
              <th class="p-4 font-bold w-1/3">أمثلة</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="l in layers" :key="l.name" class="border-t border-slate-200">
              <td class="p-4 font-bold" :class="l.text">{{ l.icon }} {{ l.name }}</td>
              <td class="p-4 text-slate-700 leading-relaxed">{{ l.role }}</td>
              <td class="p-4 text-slate-600 leading-relaxed">{{ l.examples }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Figure 3.1.1 -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div class="text-center mb-6">
          <span class="inline-block text-xs font-bold text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full mb-2">شكل 3.1.1 – نموذج تعليمي مبسط لطبقات تطبيق ويب</span>
          <h3 class="text-xl font-bold text-slate-900">هيكلية تطبيق الويب ثلاثي الطبقات</h3>
          <p class="text-slate-500 text-sm mt-1">اضغط على أي طبقة لتعرف دورها.</p>
        </div>

        <div class="flex flex-col md:flex-row items-stretch gap-2">
          <!-- User (right in RTL, as in the book figure) -->
          <div class="md:w-28 flex flex-col items-center justify-center gap-2 p-3">
            <div class="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center"><User class="w-8 h-8 text-slate-600" /></div>
            <span class="font-bold text-slate-700">المستخدم</span>
          </div>

          <template v-for="(l, i) in layers" :key="l.name">
            <div class="flex md:flex-col items-center justify-center gap-1 text-[11px] font-bold text-slate-400 px-1">
              <span>{{ arrows[i][0] }} ←</span>
              <span>→ {{ arrows[i][1] }}</span>
            </div>
            <button @click="active = i"
                    class="flex-1 rounded-2xl border-2 p-4 text-center transition-all"
                    :class="active === i ? l.activeCls : 'border-slate-200 bg-slate-50 hover:border-slate-400'">
              <component :is="l.lucide" class="w-10 h-10 mx-auto mb-2" :class="l.text" />
              <h4 class="font-bold" :class="l.text">{{ l.name }}</h4>
              <p class="text-sm text-slate-600 mt-1">{{ l.short }}</p>
              <p class="text-xs text-slate-400">({{ l.where }})</p>
            </button>
          </template>
        </div>

        <transition name="fade" mode="out-in">
          <div :key="active" class="mt-6 rounded-2xl p-5 border-2 leading-relaxed" :class="layers[active].boxCls">
            <strong>{{ layers[active].icon }} {{ layers[active].name }}:</strong> {{ layers[active].role }}
            <span class="block mt-2 text-sm"><strong>أمثلة:</strong> {{ layers[active].examples }}</span>
          </div>
        </transition>

        <p class="mt-6 text-center font-bold text-violet-700 bg-violet-50 rounded-xl py-3">تتعاون ثلاث طبقات لجعل تطبيق الويب يعمل.</p>
      </div>

      <div class="mt-8 grid md:grid-cols-3 gap-4">
        <div v-for="l in layers" :key="l.name" class="bg-white border border-slate-200 rounded-2xl p-4">
          <strong class="text-rose-600">{{ l.name }}</strong>
          <span class="text-slate-700"> – {{ l.term }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { User, Monitor, Server, Database } from 'lucide-vue-next'

// Labels on the arrows between neighbours: [request going in, answer coming back]
const arrows = [['التشغيل', 'العرض'], ['الطلب', 'الاستجابة'], ['الاستعلام', 'البيانات']]

const layers = [
  {
    icon: '🖥️', name: 'الواجهة الأمامية', lucide: Monitor, short: 'العرض والتشغيل', where: 'المتصفح',
    role: 'الجزء الذي يراه المستخدم ويتعامل معه في المتصفح؛ يعرض المحتوى ويستقبل ما يكتبه المستخدم أو يختاره.',
    examples: 'شاشة البحث، صفحات عرض المنتجات، نماذج الإدخال، وما إلى ذلك.',
    term: 'الشاشة التي يراها المستخدمون ويتفاعلون معها.',
    text: 'text-violet-700', activeCls: 'border-violet-500 bg-violet-50 shadow-md', boxCls: 'bg-violet-50 border-violet-200 text-violet-900',
  },
  {
    icon: '⚙️', name: 'الواجهة الخلفية', lucide: Server, short: 'المعالجة والتحكم', where: 'الخادم',
    role: 'الجزء الذي يعمل على الخادم، ويعالج الطلبات ويطبق قواعد التطبيق.',
    examples: 'البحث عن منتجات تطابق معايير البحث، والتحقق من تسجيل الدخول، وما إلى ذلك.',
    term: 'المعالجة الخفية من جانب الخادم.',
    text: 'text-indigo-700', activeCls: 'border-indigo-500 bg-indigo-50 shadow-md', boxCls: 'bg-indigo-50 border-indigo-200 text-indigo-900',
  },
  {
    icon: '🗄️', name: 'قاعدة البيانات', lucide: Database, short: 'تخزين', where: 'طبقة البيانات',
    role: 'طبقة تحفظ البيانات وتوفرها عند الحاجة؛ وقد تشمل قواعد بيانات أو تخزين ملفات أو كائنات أو ذاكرة مخبأة أو خدمات بيانات خارجية.',
    examples: 'معلومات المنتجات، معلومات المستخدمين، سجل الطلبات، وما إلى ذلك.',
    term: 'حيث تُخزَّن البيانات وتُدار.',
    text: 'text-sky-700', activeCls: 'border-sky-500 bg-sky-50 shadow-md', boxCls: 'bg-sky-50 border-sky-200 text-sky-900',
  },
]

const active = ref(0)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
