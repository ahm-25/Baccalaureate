<template>
  <section id="solved-example" class="py-24 px-6 sm:px-12 bg-surface overflow-hidden relative">
    <div class="max-w-4xl mx-auto w-full z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">مثال محلول</h2>
      </div>

      <div class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-lg">
        <h3 class="text-2xl font-black text-maintext mb-8 leading-relaxed">
          اختر الترتيب الزمني الصحيح لمراحل تطور تكنولوجيا المعلومات:
        </h3>

        <div class="space-y-4 mb-8">
          <button v-for="(option, i) in options" :key="i"
                  @click="handleAnswer(i)"
                  :disabled="answered"
                  class="w-full text-right p-6 rounded-2xl border-2 transition-all duration-300 text-lg font-bold flex items-center gap-4"
                  :class="getOptionClass(i)">
            <div class="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 font-black"
                 :class="getBadgeClass(i)">
              {{ option.letter }}
            </div>
            <span class="flex-1">{{ option.text }}</span>
            <CheckCircle2 v-if="answered && i === correctIndex" class="w-6 h-6 text-green-500" />
            <XCircle v-if="answered && selected === i && i !== correctIndex" class="w-6 h-6 text-red-500" />
          </button>
        </div>

        <Transition name="fade">
          <div v-if="answered" class="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h4 class="font-black text-green-800 mb-2">الإجابة الصحيحة: B</h4>
            <p class="text-lg font-bold text-green-900 leading-relaxed">
              الترتيب الصحيح يتبع التسلسل الزمني: ظهرت الحواسب أولاً (الأربعينيات)، ثم أُتيح الإنترنت تجاريًا (التسعينيات)، ثم ظهرت الهواتف الذكية (العقد الأول)، وأخيرًا انتشرت الحوسبة السحابية (العقد الثاني فصاعدًا).
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckCircle2, XCircle } from 'lucide-vue-next'

const answered = ref(false)
const selected = ref(-1)
const correctIndex = 1

const options = [
  { letter: 'A', text: 'ظهور الحاسب → ظهور الهواتف الذكية → تسويق الإنترنت تجاريًا → انتشار الحوسبة السحابية' },
  { letter: 'B', text: 'ظهور الحاسب → تسويق الإنترنت تجاريًا → ظهور الهواتف الذكية → انتشار الحوسبة السحابية' },
  { letter: 'C', text: 'تسويق الإنترنت تجاريًا → ظهور الحاسب → انتشار الحوسبة السحابية → ظهور الهواتف الذكية' },
  { letter: 'D', text: 'ظهور الهواتف الذكية → تسويق الإنترنت تجاريًا → ظهور الحاسب → انتشار الحوسبة السحابية' }
]

const handleAnswer = (i: number) => {
  if (answered.value) return
  selected.value = i
  answered.value = true
}

const getOptionClass = (i: number) => {
  if (!answered.value) return 'border-border bg-white hover:border-primary/50 hover:shadow-md'
  if (i === correctIndex) return 'border-green-500 bg-green-50'
  if (i === selected.value) return 'border-red-500 bg-red-50 opacity-70'
  return 'border-border bg-surface opacity-50'
}

const getBadgeClass = (i: number) => {
  if (!answered.value) return 'border-border text-mutedtext'
  if (i === correctIndex) return 'border-green-500 bg-green-500 text-white'
  if (i === selected.value) return 'border-red-500 bg-red-500 text-white'
  return 'border-border text-mutedtext'
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>
