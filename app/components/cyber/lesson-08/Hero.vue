<template>
  <header id="hero" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 border-b border-slate-200">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8">
        <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
        <span class="text-sm font-bold text-slate-800">الدرس 2-2 • الأمن السيبراني</span>
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        تصميم <span class="text-transparent bg-clip-text bg-gradient-to-l from-teal-600 to-indigo-600">أمان الشبكات</span>
      </h1>

      <p class="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        جدار الحماية، والشبكة الافتراضية الخاصة، والمنطقة المعزولة، وحماية الأجهزة الطرفية… كيف نكدّس الطبقات بحيث يظل النظام محميًا حتى لو اختُرق أحد الدفاعات؟
      </p>

      <!-- Internet → firewall → DMZ → firewall → internal network -->
      <div class="flex justify-center items-center gap-2 sm:gap-4 mb-10 flex-wrap">
        <div v-for="(n, i) in nodes" :key="n.label" class="flex items-center gap-2 sm:gap-4">
          <div class="bg-white p-3 sm:p-4 rounded-2xl border shadow-sm flex flex-col items-center w-20 sm:w-28" :class="n.border">
            <component :is="n.icon" class="w-8 h-8 mb-2" :class="n.color" />
            <span class="text-slate-700 text-xs sm:text-sm font-bold">{{ n.label }}</span>
          </div>
          <div v-if="i < nodes.length - 1" class="h-1 w-4 sm:w-8 bg-gradient-to-l from-teal-400 to-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button @click="scrollTo('objectives')" class="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-600/20 transition-colors">
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
import { Globe, BrickWall, Server, Database } from 'lucide-vue-next'

// Ordered right-to-left on screen: the internet first, the protected data last
const nodes = [
  { label: 'الإنترنت', icon: Globe, color: 'text-slate-500', border: 'border-slate-200' },
  { label: 'جدار الحماية', icon: BrickWall, color: 'text-rose-600', border: 'border-rose-200' },
  { label: 'DMZ', icon: Server, color: 'text-amber-600', border: 'border-amber-200' },
  { label: 'جدار الحماية', icon: BrickWall, color: 'text-rose-600', border: 'border-rose-200' },
  { label: 'الشبكة الداخلية', icon: Database, color: 'text-teal-600', border: 'border-teal-200' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
