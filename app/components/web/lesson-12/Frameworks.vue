<template>
  <section id="frameworks" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-orange-800 mb-8">4. أطر العمل</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">(إطار العمل)</strong>... بنية توفر مسبقًا وظائف ومكونات شائعة الاستخدام، وذلك لجعل عملية تطوير تطبيقات الويب أكثر كفاءة.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> عند استخدام إطار عمل، لا يحتاج المطورون إلى كتابة كامل الكود البرمجي من الصفر، ويمكنهم التطوير بكفاءة أكبر.</p>
          <p><span class="font-bold text-slate-400">(3)</span> مكتبات وأطر عمل شائعة لتطوير الويب:</p>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6">
          <h3 class="font-bold text-orange-700 mb-3">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed"><strong class="text-rose-600">إطار العمل</strong> – وظائف جاهزة لتطوير أكثر كفاءة.</p>
        </div>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
        <table class="w-full text-right min-w-[560px]">
          <thead class="bg-slate-100 text-slate-800">
            <tr>
              <th class="p-4 font-bold w-1/5">المكتبة / إطار العمل</th>
              <th class="p-4 font-bold">الخصائص</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="f in frameworks" :key="f.name" class="border-t border-slate-200">
              <td class="p-4 font-black" :class="f.color" dir="ltr">{{ f.name }}</td>
              <td class="p-4 text-slate-700">{{ f.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Reusable components demo -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🧩 فكرة المكونات القابلة لإعادة الاستخدام</h3>
        <p class="text-slate-600 mb-6">
          بدل كتابة كود بطاقة كل كتاب من الصفر، نكتب <strong>مكوّنًا واحدًا</strong> ثم نعيد استخدامه مع بيانات مختلفة. أضف كتابًا وشاهد: الكود لم يتضاعف.
        </p>
        <div class="grid lg:grid-cols-2 gap-6 items-start">
          <pre dir="ltr" class="bg-slate-900 text-slate-100 rounded-2xl p-4 text-xs leading-relaxed overflow-x-auto text-left"><code>{{ componentCode }}</code></pre>
          <div>
            <div class="grid sm:grid-cols-2 gap-3 mb-4">
              <div v-for="b in books" :key="b.title" class="rounded-2xl border-2 border-orange-200 bg-orange-50/50 p-3">
                <div class="text-2xl">{{ b.icon }}</div>
                <div class="font-bold text-slate-800">{{ b.title }}</div>
                <div class="text-xs text-slate-500">{{ b.author }}</div>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button @click="addBook" :disabled="books.length >= extra.length + 2" class="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold rounded-xl transition-colors">+ أضف كتابًا</button>
              <span class="text-sm font-bold text-slate-600">عدد البطاقات: {{ books.length }} • عدد مرات كتابة المكوّن: 1</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold text-slate-800 leading-relaxed">
          صفحة الويب الحديثة هي تركيبة، وليست تقنية واحدة: HTML يبني بنيتها، وCSS ينسّق مظهرها، وJavaScript يجعلها تفاعلية —
          بينما تجعل HTML الدلالية والتصميم المتجاوب وأطر العمل بناءها ذا معنى وقابلًا للتكيف وفعّالًا.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const frameworks = [
  { name: 'React', desc: 'مكتبة JavaScript لبناء واجهات المستخدم من مكونات قابلة لإعادة الاستخدام وتحديثها عند تغير البيانات.', color: 'text-sky-600' },
  { name: 'Vue', desc: 'له بنية بسيطة ويتيح بناء تطبيقات الويب تدريجيًا بدءًا من ميزات صغيرة.', color: 'text-emerald-600' },
  { name: 'Next.js', desc: 'إطار مبني على React لبناء تطبيقات ويب، ويوفر التوجيه وطرقًا مختلفة لعرض الصفحات والعمل على الخادم والعميل.', color: 'text-slate-900' },
]

const componentCode = `// BookCard: written once, reused many times
function BookCard({ icon, title, author }) {
  return (
    <div className="card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

books.map(book => <BookCard {...book} />)`

const extra = [
  { icon: '🌐', title: 'رحلة في عالم الويب', author: 'م. سارة' },
  { icon: '🔐', title: 'أساسيات الأمن السيبراني', author: 'م. يوسف' },
  { icon: '🎨', title: 'فن تصميم الواجهات', author: 'م. ليلى' },
  { icon: '📱', title: 'تطبيقات الجوال', author: 'م. كريم' },
]
const books = ref([
  { icon: '📘', title: 'البرمجة للمبتدئين', author: 'م. أحمد' },
  { icon: '🤖', title: 'أسرار الذكاء الاصطناعي', author: 'م. منى' },
])
function addBook() {
  const next = extra[books.value.length - 2]
  if (next) books.value.push(next)
}
</script>
