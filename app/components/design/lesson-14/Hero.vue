<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-fuchsia-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 4-2 • تصميم الويب والوسائط</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        تصميم المعلومات <span class="text-transparent bg-clip-text bg-gradient-to-l from-fuchsia-600 to-pink-500">وتجربة المستخدم</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        قد يبدو الموقع منطقيًا لمصممه لكنه يربك زواره… كيف نخطط الموقع حول مستخدميه، وما المبادئ التي تجعل الصفحة واضحة وسهلة الاستخدام؟
      </p>

      <!-- Persona → wireframe → CRAP → UCD -->
      <div class="flex justify-center items-center gap-2 sm:gap-4 mb-10 flex-wrap">
        <div v-for="(s, i) in steps" :key="s.label" class="flex items-center gap-2 sm:gap-4">
          <div class="bg-white p-3 sm:p-4 rounded-2xl border shadow-sm flex flex-col items-center w-24 sm:w-28" :class="s.border">
            <component :is="s.icon" class="w-8 h-8 mb-2" :class="s.color" />
            <span class="text-slate-700 text-xs sm:text-sm font-bold">{{ s.label }}</span>
            <span class="text-slate-400 text-[11px]">{{ s.hint }}</span>
          </div>
          <span v-if="i < steps.length - 1" class="text-fuchsia-400 font-black">←</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-2xl shadow-lg shadow-fuchsia-600/20 transition-colors">
          ابدأ الدرس
        </button>
        <button @click="scrollTo('practice-quiz')" class="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 transition-colors">
          اختبر معلوماتك
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { UserRound, LayoutTemplate, Palette, RefreshCw } from 'lucide-vue-next'

const steps = [
  { label: 'شخصية المستخدم', hint: 'من؟', icon: UserRound, color: 'text-fuchsia-600', border: 'border-fuchsia-200' },
  { label: 'المخطط الهيكلي', hint: 'أين؟', icon: LayoutTemplate, color: 'text-slate-600', border: 'border-slate-200' },
  { label: 'مبادئ CRAP', hint: 'اجعله واضحًا', icon: Palette, color: 'text-pink-600', border: 'border-pink-200' },
  { label: 'UCD', hint: 'لصالح المستخدم', icon: RefreshCw, color: 'text-emerald-600', border: 'border-emerald-200' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
