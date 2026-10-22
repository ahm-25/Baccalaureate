<template>
  <section id="semantic-html" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-orange-800 mb-8">2. HTML الدلالية</h2>

      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <div class="lg:col-span-2 space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            <span class="font-bold text-slate-400">(1)</span>
            <strong class="text-rose-600">HTML الدلالي (Semantic HTML)</strong>: استخدام عناصر توضح وظيفة أجزاء الصفحة، مثل
            <code dir="ltr" class="tag">&lt;header&gt;</code> في أعلى الصفحة، و<code dir="ltr" class="tag">&lt;nav&gt;</code> للتنقل،
            و<code dir="ltr" class="tag">&lt;main&gt;</code> للمحتوى الرئيس، و<code dir="ltr" class="tag">&lt;footer&gt;</code> في أسفل الصفحة.
          </p>
          <p><span class="font-bold text-slate-400">(2)</span> فوائد استخدام HTML الدلالية:</p>
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="bg-white border border-emerald-200 rounded-2xl p-4 text-base">
              <strong class="text-emerald-700">① إمكانية الوصول:</strong> يساعد HTML الدلالي قارئ الشاشة على فهم بنية الصفحة والتنقل فيها، مع الحاجة إلى ممارسات وصول أخرى أيضًا.
            </div>
            <div class="bg-white border border-sky-200 rounded-2xl p-4 text-base">
              <strong class="text-sky-700">② فهم محركات البحث للمحتوى:</strong> قد يساعد HTML الدلالي محركات البحث على فهم بنية المحتوى بصورة أفضل، <u>لكنه لا يضمن ترتيبًا أعلى</u>.
            </div>
          </div>
        </div>
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-4">
          <h3 class="font-bold text-orange-700">مصطلحات أساسية</h3>
          <p class="text-slate-700 leading-relaxed text-sm">
            <strong class="text-rose-600">إمكانية الوصول (Accessibility)</strong> – تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها، بمن فيهم ذوو الإعاقة.
          </p>
          <p class="text-slate-700 leading-relaxed text-sm">
            <strong class="text-rose-600">SEO (تحسين محركات البحث)</strong> – ممارسات تجعل الصفحة أيسر في الفهرسة والظهور في نتائج البحث.
          </p>
        </div>
      </div>

      <!-- Comparison -->
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-xl font-bold text-slate-900">🧪 نفس الصفحة… بطريقتين</h3>
            <p class="text-slate-600 mt-1">بدّل بين الطريقتين، ثم شغّل «قارئ الشاشة» وشاهد ما يسمعه مستخدم كفيف.</p>
          </div>
          <div class="flex bg-slate-100 border border-slate-200 rounded-2xl p-1 shrink-0">
            <button v-for="m in modes" :key="m.key" @click="setMode(m.key)"
                    class="px-4 py-2 rounded-xl font-bold text-sm transition-colors"
                    :class="mode === m.key ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-white'">{{ m.label }}</button>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Page outline -->
          <div class="space-y-2" dir="rtl">
            <div v-for="(part, i) in parts" :key="part.key"
                 class="rounded-xl border-2 p-3 transition-all duration-300"
                 :class="[part.size, reading === i ? 'ring-4 ring-amber-400 scale-[1.02]' : '', mode === 'semantic' ? part.semanticClass : 'border-dashed border-slate-300 bg-slate-50']">
              <div class="flex items-center justify-between">
                <span class="font-bold text-slate-700 text-sm">{{ part.content }}</span>
                <code dir="ltr" class="tag" :class="mode === 'semantic' ? '' : 'opacity-60'">{{ mode === 'semantic' ? part.tag : divTag }}</code>
              </div>
            </div>
          </div>

          <!-- Code + screen reader -->
          <div class="space-y-4">
            <pre dir="ltr" class="bg-slate-900 text-slate-100 rounded-2xl p-4 text-xs leading-relaxed overflow-x-auto text-left"><code>{{ mode === 'semantic' ? semanticCode : divCode }}</code></pre>
            <div class="rounded-2xl border-2 border-slate-800 bg-slate-950 text-emerald-300 p-4 min-h-[9rem]">
              <div class="flex items-center justify-between mb-3">
                <span class="font-bold text-white text-sm">🔊 قارئ الشاشة</span>
                <button @click="read" :disabled="running" class="px-3 py-1 rounded-lg bg-emerald-500 text-slate-900 font-bold text-sm disabled:opacity-50">▶ تشغيل</button>
              </div>
              <p v-for="(line, i) in spoken" :key="i" class="text-sm font-mono leading-relaxed">« {{ line }} »</p>
            </div>
            <p v-if="done" class="font-bold leading-relaxed" :class="mode === 'semantic' ? 'text-emerald-700' : 'text-rose-700'">
              {{ mode === 'semantic'
                ? '✓ قارئ الشاشة يعلن وظيفة كل جزء، ويستطيع المستخدم القفز مباشرة إلى «المحتوى الرئيسي» أو «التنقل».'
                : '✗ كل الأجزاء «مجموعة» بلا معنى؛ لا يعرف المستخدم أين القائمة وأين المحتوى الرئيسي، فيضطر لسماع الصفحة كلها.' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const modes = [
  { key: 'div', label: 'صناديق <div> عادية' },
  { key: 'semantic', label: 'HTML الدلالية' },
]
const parts = [
  { key: 'header', tag: '<header>', content: 'الشعار واسم الموقع', role: 'منطقة الرأس (banner)', size: 'h-14', semanticClass: 'border-orange-300 bg-orange-50' },
  { key: 'nav', tag: '<nav>', content: 'الرئيسية • الأخبار • تواصل معنا', role: 'التنقل (navigation)', size: 'h-12', semanticClass: 'border-sky-300 bg-sky-50' },
  { key: 'main', tag: '<main>', content: 'المقالات والمحتوى الرئيسي', role: 'المحتوى الرئيسي (main)', size: 'h-28', semanticClass: 'border-emerald-300 bg-emerald-50' },
  { key: 'footer', tag: '<footer>', content: 'حقوق النشر ومعلومات التواصل', role: 'معلومات المحتوى (contentinfo)', size: 'h-12', semanticClass: 'border-slate-400 bg-slate-100' },
]

const divTag = '<div>'
const divCode = `<div class="top">…</div>
<div class="menu">…</div>
<div class="content">…</div>
<div class="bottom">…</div>`
const semanticCode = `<header>…</header>
<nav>…</nav>
<main>…</main>
<footer>…</footer>`

const mode = ref('div')
const reading = ref(null)
const spoken = ref([])
const running = ref(false)
const done = ref(false)
let timers = []

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}
function setMode(m) {
  mode.value = m
  clearTimers()
  reading.value = null
  spoken.value = []
  running.value = false
  done.value = false
}
function read() {
  setMode(mode.value)
  running.value = true
  parts.forEach((p, i) => {
    timers.push(setTimeout(() => {
      reading.value = i
      spoken.value.push(mode.value === 'semantic' ? `${p.role}: ${p.content}` : `مجموعة: ${p.content}`)
    }, 300 + i * 700))
  })
  timers.push(setTimeout(() => {
    reading.value = null
    running.value = false
    done.value = true
  }, 300 + parts.length * 700))
}

onUnmounted(clearTimers)
</script>

<style scoped>
.tag {
  display: inline-block;
  font-family: Consolas, monospace;
  font-size: 0.85em;
  background: #fff7ed;
  color: #c2410c;
  border: 1px solid #fed7aa;
  border-radius: 0.4rem;
  padding: 0 0.35rem;
}
</style>
