<template>
  <section id="moores-law-formulas" class="py-24 px-6 sm:px-12 bg-surface overflow-hidden relative">
    <div class="max-w-5xl mx-auto w-full z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6">
          <Calculator class="w-4 h-4" />
          <span>القوانين الرياضية</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">قوانين قانون مور</h2>
        <p class="text-xl text-mutedtext max-w-3xl mx-auto leading-relaxed">
          كيف نحسب عدد مرات التضاعف وعدد الترانزستورات رياضيًا
        </p>
      </div>

      <!-- Formulas Cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Formula 1: Doubling Count -->
        <div class="group bg-white rounded-3xl border-2 border-border p-8 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Hash class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 class="text-xl font-black text-maintext">القانون الأول</h3>
              <p class="text-sm font-bold text-mutedtext">عدد مرات التضاعف</p>
            </div>
          </div>
          
          <div class="bg-slate-50 rounded-2xl p-6 mb-6 text-center border border-slate-200">
            <div class="formula-display text-3xl md:text-4xl font-black text-slate-800 leading-relaxed" dir="ltr">
              <span class="text-blue-600">k</span> = 
              <div class="inline-flex flex-col items-center mx-2 align-middle">
                <span class="border-b-3 border-slate-700 px-3 pb-1">Y − Y<sub>0</sub></span>
                <span class="pt-1">2</span>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="bg-blue-100 text-blue-700 text-sm font-black px-2.5 py-1 rounded-lg shrink-0" dir="ltr">k</span>
              <span class="text-lg font-bold text-maintext">عدد مرات التضاعف</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="bg-blue-100 text-blue-700 text-sm font-black px-2.5 py-1 rounded-lg shrink-0" dir="ltr">Y</span>
              <span class="text-lg font-bold text-maintext">السنة المطلوبة</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="bg-blue-100 text-blue-700 text-sm font-black px-2.5 py-1 rounded-lg shrink-0" dir="ltr">Y₀</span>
              <span class="text-lg font-bold text-maintext">سنة البداية</span>
            </div>
          </div>

          <div class="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p class="text-sm font-bold text-blue-800">
              💡 لأن التضاعف بيحصل كل سنتين، بنقسم الفرق بين السنتين على 2
            </p>
          </div>
        </div>

        <!-- Formula 2: Transistor Count -->
        <div class="group bg-white rounded-3xl border-2 border-border p-8 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-pink-400"></div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Cpu class="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 class="text-xl font-black text-maintext">القانون الثاني</h3>
              <p class="text-sm font-bold text-mutedtext">عدد الترانزستورات</p>
            </div>
          </div>
          
          <div class="bg-slate-50 rounded-2xl p-6 mb-6 text-center border border-slate-200">
            <div class="formula-display text-3xl md:text-4xl font-black text-slate-800 leading-relaxed" dir="ltr">
              <span class="text-purple-600">N</span> = N<sub>0</sub> × 2<sup class="text-purple-600">k</sup>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="bg-purple-100 text-purple-700 text-sm font-black px-2.5 py-1 rounded-lg shrink-0" dir="ltr">N</span>
              <span class="text-lg font-bold text-maintext">عدد الترانزستورات في السنة المطلوبة</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="bg-purple-100 text-purple-700 text-sm font-black px-2.5 py-1 rounded-lg shrink-0" dir="ltr">N₀</span>
              <span class="text-lg font-bold text-maintext">عدد الترانزستورات في سنة البداية</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="bg-purple-100 text-purple-700 text-sm font-black px-2.5 py-1 rounded-lg shrink-0" dir="ltr">k</span>
              <span class="text-lg font-bold text-maintext">عدد مرات التضاعف (من القانون الأول)</span>
            </div>
          </div>

          <div class="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p class="text-sm font-bold text-purple-800">
              💡 بنستخدم k اللي حسبناها من القانون الأول كأُس للـ 2
            </p>
          </div>
        </div>
      </div>

      <!-- Combined Formula Highlight -->
      <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <h3 class="text-2xl font-black text-white text-center mb-8 relative z-10">القانونين مع بعض ✨</h3>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative z-10">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-5 text-center">
            <p class="text-sm font-bold text-blue-300 mb-2">الخطوة 1</p>
            <div class="text-2xl md:text-3xl font-black text-white" dir="ltr">
              k = <span class="inline-flex flex-col items-center mx-1 align-middle"><span class="border-b-2 border-white/60 px-2 pb-0.5">Y − Y₀</span><span class="pt-0.5">2</span></span>
            </div>
          </div>

          <ArrowLeft class="w-8 h-8 text-white/50 hidden md:block" />
          <ArrowDown class="w-8 h-8 text-white/50 md:hidden" />

          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-5 text-center">
            <p class="text-sm font-bold text-purple-300 mb-2">الخطوة 2</p>
            <div class="text-2xl md:text-3xl font-black text-white" dir="ltr">
              N = N₀ × 2<sup class="text-amber-300">k</sup>
            </div>
          </div>
        </div>
      </div>

      <!-- Worked Example -->
      <div class="bg-white rounded-3xl border-2 border-amber-200 p-8 md:p-10 shadow-lg mb-16 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-orange-400"></div>
        
        <div class="flex items-center gap-3 mb-8">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
            <BookOpen class="w-6 h-6 text-amber-600" />
          </div>
          <h3 class="text-2xl font-black text-maintext">مثال محلول</h3>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <p class="text-xl font-bold text-maintext leading-relaxed">
            إذا كان عدد الترانزستورات في معالج عام <span class="text-primary font-black">1990</span> يساوي 
            <span class="text-primary font-black" dir="ltr">1,000,000</span> ترانزستور، 
            فكم يكون عدد الترانزستورات المتوقع عام <span class="text-primary font-black">2026</span>؟
          </p>
        </div>

        <!-- Step-by-step Solution -->
        <div class="space-y-6">
          <div class="flex gap-4" v-for="(step, i) in exampleSteps" :key="i">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-black text-white text-lg"
                 :class="step.bgColor">
              {{ i + 1 }}
            </div>
            <div class="flex-1">
              <p class="text-lg font-black text-maintext mb-2">{{ step.title }}</p>
              <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div class="text-xl font-bold text-slate-800" dir="ltr" v-html="step.formula"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 bg-green-50 border-2 border-green-300 rounded-2xl p-6 text-center">
          <CheckCircle2 class="w-8 h-8 text-green-500 mx-auto mb-3" />
          <p class="text-xl font-black text-green-800">
            إذن عدد الترانزستورات المتوقع = <span dir="ltr">262,144,000,000</span>
          </p>
          <p class="text-lg font-bold text-green-700 mt-1">
            (أكثر من 262 مليار ترانزستور!)
          </p>
        </div>
      </div>

      <!-- Interactive Problem -->
      <div class="bg-white rounded-3xl border-2 border-border p-8 md:p-10 shadow-lg relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 to-emerald-400"></div>
        
        <div class="flex items-center gap-3 mb-8">
          <div class="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
            <BrainCircuit class="w-6 h-6 text-green-600" />
          </div>
          <h3 class="text-2xl font-black text-maintext">مسألة تطبيقية - حلّها بنفسك!</h3>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
          <p class="text-xl font-bold text-maintext leading-relaxed">
            معالج في عام <span class="text-green-700 font-black">2000</span> كان يحتوي على 
            <span class="text-green-700 font-black" dir="ltr">42,000,000</span> ترانزستور.
            <br>
            باستخدام قانون مور، كم عدد الترانزستورات المتوقع عام <span class="text-green-700 font-black">2020</span>؟
          </p>
        </div>

        <!-- Multiple Choice Answers -->
        <div class="space-y-4 mb-8">
          <button v-for="(option, i) in problemOptions" :key="i"
                  @click="handleProblemAnswer(i)"
                  :disabled="problemAnswered"
                  class="w-full text-right p-5 rounded-2xl border-2 transition-all duration-300 text-lg font-bold flex items-center gap-4"
                  :class="getProblemOptionClass(i)">
            <div class="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 font-black"
                 :class="getProblemBadgeClass(i)">
              {{ option.letter }}
            </div>
            <span class="flex-1" dir="ltr">{{ option.text }}</span>
            <CheckCircle2 v-if="problemAnswered && i === problemCorrectIndex" class="w-6 h-6 text-green-500" />
            <XCircle v-if="problemAnswered && problemSelected === i && i !== problemCorrectIndex" class="w-6 h-6 text-red-500" />
          </button>
        </div>

        <!-- Solution Reveal -->
        <Transition name="slide-fade">
          <div v-if="problemAnswered" class="space-y-4">
            <div :class="problemSelected === problemCorrectIndex ? 'bg-green-50 border-green-300' : 'bg-amber-50 border-amber-300'" 
                 class="border-2 rounded-2xl p-6">
              <h4 class="font-black mb-4 text-lg" :class="problemSelected === problemCorrectIndex ? 'text-green-800' : 'text-amber-800'">
                {{ problemSelected === problemCorrectIndex ? '🎉 أحسنت! إليك الحل الكامل:' : '💡 لا بأس! إليك الحل الصحيح:' }}
              </h4>
              <div class="space-y-4">
                <div class="bg-white/70 rounded-xl p-4 border border-slate-200">
                  <p class="font-bold text-maintext mb-1">الخطوة 1: حساب عدد مرات التضاعف</p>
                  <p class="text-lg font-bold text-slate-700" dir="ltr">
                    k = (2020 − 2000) ÷ 2 = 20 ÷ 2 = <span class="text-blue-600 font-black">10</span>
                  </p>
                </div>
                <div class="bg-white/70 rounded-xl p-4 border border-slate-200">
                  <p class="font-bold text-maintext mb-1">الخطوة 2: حساب عدد الترانزستورات</p>
                  <p class="text-lg font-bold text-slate-700" dir="ltr">
                    N = 42,000,000 × 2<sup>10</sup> = 42,000,000 × 1,024
                  </p>
                </div>
                <div class="bg-white/70 rounded-xl p-4 border border-slate-200">
                  <p class="font-bold text-maintext mb-1">النتيجة:</p>
                  <p class="text-xl font-black text-green-700" dir="ltr">
                    N = 43,008,000,000 ≈ 43 مليار ترانزستور
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calculator, Hash, Cpu, BookOpen, BrainCircuit, ArrowLeft, ArrowDown, CheckCircle2, XCircle } from 'lucide-vue-next'

const exampleSteps = [
  {
    title: 'نحدد المعطيات',
    formula: 'Y₀ = 1990 &nbsp;,&nbsp; Y = 2026 &nbsp;,&nbsp; N₀ = 1,000,000',
    bgColor: 'bg-blue-500'
  },
  {
    title: 'نحسب عدد مرات التضاعف (k)',
    formula: 'k = (2026 − 1990) ÷ 2 = 36 ÷ 2 = <strong class="text-blue-600">18</strong>',
    bgColor: 'bg-blue-600'
  },
  {
    title: 'نحسب عدد الترانزستورات (N)',
    formula: 'N = 1,000,000 × 2<sup class="text-purple-600">18</sup> = 1,000,000 × 262,144',
    bgColor: 'bg-purple-500'
  },
  {
    title: 'النتيجة النهائية',
    formula: 'N = <strong class="text-green-600">262,144,000,000</strong> ترانزستور',
    bgColor: 'bg-green-500'
  }
]

// Interactive Problem
const problemAnswered = ref(false)
const problemSelected = ref(-1)
const problemCorrectIndex = 2 // Option C

const problemOptions = [
  { letter: 'A', text: '42,000,000,000 (42 مليار)' },
  { letter: 'B', text: '21,504,000,000 (21.5 مليار)' },
  { letter: 'C', text: '43,008,000,000 (43 مليار)' },
  { letter: 'D', text: '84,000,000,000 (84 مليار)' }
]

const handleProblemAnswer = (i: number) => {
  if (problemAnswered.value) return
  problemSelected.value = i
  problemAnswered.value = true
}

const getProblemOptionClass = (i: number) => {
  if (!problemAnswered.value) return 'border-border bg-white hover:border-green-400 hover:shadow-md cursor-pointer'
  if (i === problemCorrectIndex) return 'border-green-500 bg-green-50'
  if (i === problemSelected.value) return 'border-red-500 bg-red-50 opacity-70'
  return 'border-border bg-surface opacity-50'
}

const getProblemBadgeClass = (i: number) => {
  if (!problemAnswered.value) return 'border-border text-mutedtext'
  if (i === problemCorrectIndex) return 'border-green-500 bg-green-500 text-white'
  if (i === problemSelected.value) return 'border-red-500 bg-red-500 text-white'
  return 'border-border text-mutedtext'
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.formula-display sub {
  font-size: 0.6em;
  vertical-align: sub;
}

.formula-display sup {
  font-size: 0.6em;
  vertical-align: super;
}
</style>
