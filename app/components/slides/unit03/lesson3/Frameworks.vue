<template>
  <!-- Frameworks. f = 0 definition and the book's three libraries / frameworks,
       1 reusable components: one BookCard written once, reused for every book. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 0 ? '🧰' : '🧩'" :title="f === 0 ? 'أطر العمل' : 'مكوّن واحد… يُعاد استخدامه'"
                 :sub="f === 0 ? 'وظائف ومكونات جاهزة لتطوير أكثر كفاءة' : 'لا نكتب كود كل بطاقة من الصفر'" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0: definition + libraries ───── -->
      <div v-if="f === 0" key="def" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[146px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-violet-400/60 w-[1100px] px-8 py-3 text-center text-[21px] font-bold text-white leading-snug" style="--d: .3s">
            <span class="sl-hl-amber font-black">إطار العمل</span>: بنية توفر مسبقًا وظائف ومكونات شائعة الاستخدام؛
            فلا يحتاج المطورون إلى كتابة كامل الكود من الصفر، ويطوّرون <span class="text-violet-300">بكفاءة أكبر</span>.
          </div>
        </div>
        <div class="absolute top-[250px] inset-x-0 flex justify-center gap-5">
          <div v-for="(fw, i) in frameworks" :key="fw.name" class="sl-in w-[360px] h-[270px] rounded-3xl border-2 px-6 py-5 flex flex-col"
               :class="fw.cls" :style="{ '--d': `${1.4 + i * 1.4}s` }">
            <span class="text-[38px] font-black font-mono" :class="fw.text" dir="ltr">{{ fw.name }}</span>
            <span class="sl-badge self-start !text-[16px] border-white/20 bg-white/10 text-white">{{ fw.kind }}</span>
            <p class="mt-3 text-[19px] font-bold text-slate-100 leading-snug">{{ fw.desc }}</p>
          </div>
        </div>
      </div>

      <!-- ───── f1: a reusable component ───── -->
      <div v-else key="reuse" class="absolute inset-0">
        <div class="sl-in absolute left-[60px] top-[150px] w-[560px] rounded-2xl border-2 border-violet-400/60 bg-black/60 overflow-hidden" style="--d: .3s">
          <div class="px-4 py-1.5 bg-violet-900/60 text-[16px] font-black text-violet-100" dir="rtl">✍️ نكتب المكوّن مرة واحدة</div>
          <pre class="px-5 py-3 font-mono text-[16px] leading-[24px] text-slate-200" dir="ltr">{{ code }}</pre>
        </div>
        <div class="absolute left-[660px] top-[150px] w-[560px]" dir="rtl">
          <div class="text-[18px] font-black text-slate-300 mb-2">🔁 ثم نعيد استخدامه مع بيانات مختلفة:</div>
          <div class="grid grid-cols-3 gap-3">
            <div v-for="(b, i) in books" :key="b.title" class="sl-pop h-[150px] rounded-2xl border-2 border-violet-400/50 bg-slate-900/90 flex flex-col items-center justify-center text-center px-2"
                 :style="{ '--d': `${1.4 + i * 0.6}s` }">
              <span class="text-[40px] leading-none">{{ b.icon }}</span>
              <span class="mt-2 text-[17px] font-black text-white leading-tight">{{ b.title }}</span>
              <span class="text-[14px] font-bold text-slate-400">{{ b.author }}</span>
            </div>
          </div>
          <div class="sl-in mt-4 flex gap-3" style="--d: 5.4s">
            <span class="sl-badge !text-[18px] border-sky-400/60 bg-sky-600/20 text-sky-100">عدد البطاقات: 6</span>
            <span class="sl-badge !text-[18px] border-emerald-400/60 bg-emerald-600/20 text-emerald-100">عدد مرات كتابة المكوّن: 1</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const frameworks = [
  { name: 'React', kind: 'مكتبة JavaScript', cls: 'border-sky-400/60 bg-sky-950/45', text: 'text-sky-300',
    desc: 'لبناء واجهات المستخدم من مكونات قابلة لإعادة الاستخدام، وتحديثها عند تغير البيانات.' },
  { name: 'Vue', kind: 'إطار عمل', cls: 'border-emerald-400/60 bg-emerald-950/40', text: 'text-emerald-300',
    desc: 'له بنية بسيطة، ويتيح بناء تطبيقات الويب تدريجيًا بدءًا من ميزات صغيرة.' },
  { name: 'Next.js', kind: 'إطار مبني على React', cls: 'border-slate-300/60 bg-slate-800/60', text: 'text-white',
    desc: 'لبناء تطبيقات ويب، ويوفر التوجيه وطرقًا مختلفة لعرض الصفحات والعمل على الخادم والعميل.' },
]

const code = `// BookCard: written once, reused many times
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

const books = [
  { icon: '📘', title: 'البرمجة للمبتدئين', author: 'م. أحمد' },
  { icon: '🤖', title: 'أسرار الذكاء الاصطناعي', author: 'م. منى' },
  { icon: '🌐', title: 'رحلة في عالم الويب', author: 'م. سارة' },
  { icon: '🔐', title: 'أساسيات الأمن السيبراني', author: 'م. يوسف' },
  { icon: '🎨', title: 'فن تصميم الواجهات', author: 'م. ليلى' },
  { icon: '📱', title: 'تطبيقات الجوال', author: 'م. كريم' },
]
</script>
