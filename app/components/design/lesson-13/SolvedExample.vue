<template>
  <section id="solved-example" class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-3xl">✏️</span>
        <h2 class="text-2xl font-bold text-slate-900">مثال محلول</h2>
      </div>

      <!-- Part 1: true / false -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8 mb-8">
        <h3 class="text-lg font-bold text-slate-800 mb-2">(1) ضع أمام كل عبارة (أ – د) علامة ○ إذا كانت صحيحة أو × إذا كانت خاطئة.</h3>
        <p class="text-sm text-slate-500 mb-6">اختر إجابتك أولًا، ثم اعرض الحل.</p>

        <div class="space-y-4">
          <div v-for="(q, i) in statements" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4">
            <div class="flex flex-col md:flex-row md:items-center gap-3">
              <p class="flex-1 text-slate-800 font-medium leading-relaxed">
                <span class="font-bold text-teal-700 ml-2">{{ letters[i] }}</span>{{ q.text }}
              </p>
              <div class="flex gap-2 shrink-0">
                <button v-for="opt in [true, false]" :key="String(opt)" @click="q.pick = opt"
                        class="w-12 h-10 rounded-xl border-2 font-bold text-lg transition-colors"
                        :class="buttonClass(q, opt)">
                  {{ opt ? '○' : '×' }}
                </button>
              </div>
            </div>
            <p v-if="showPart1" class="mt-3 text-sm leading-relaxed p-3 rounded-xl"
               :class="q.ans ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'">
              <strong>{{ q.ans ? '○' : '×' }}</strong> — {{ q.why }}
            </p>
          </div>
        </div>

        <button @click="showPart1 = !showPart1" class="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          {{ showPart1 ? 'إخفاء الحل' : 'إظهار الحل' }}
        </button>
      </div>

      <!-- Part 2: purpose to medium -->
      <div class="bg-rose-50/40 border border-rose-100 rounded-3xl p-6 md:p-8">
        <h3 class="text-lg font-bold text-slate-800 mb-4">(2) اربط كل غرض (أ – ج) بالوسيلة الأنسب من الخيارات أدناه (أ – ج).</h3>
        <div class="bg-white border border-slate-200 rounded-xl p-3 mb-6 font-bold text-slate-700">
          [الخيارات] <span class="text-teal-700">أ</span> التلفزيون
          <span class="text-teal-700 mr-3">ب</span> الموقع الإلكتروني
          <span class="text-teal-700 mr-3">ج</span> وسائل التواصل الاجتماعي
        </div>

        <div class="space-y-4">
          <div v-for="(n, i) in purposes" :key="i" class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
            <p class="flex-1 text-slate-800 font-medium leading-relaxed">
              <span class="font-bold text-teal-700 ml-2">{{ letters[i] }}</span>{{ n.text }}
            </p>
            <div class="flex flex-wrap gap-2 shrink-0">
              <button v-for="(o, j) in options" :key="o" @click="n.pick = j"
                      class="px-3 h-10 rounded-xl border-2 font-bold text-sm transition-colors"
                      :class="matchClass(n, j)">
                {{ o }}
              </button>
            </div>
          </div>
        </div>

        <div v-if="showPart2" class="mt-6 bg-white border border-emerald-200 rounded-2xl p-5 space-y-2 text-slate-800">
          <p v-for="(n, i) in purposes" :key="i">
            <strong class="text-teal-700">{{ letters[i] }}:</strong> {{ n.summary }} <strong class="text-rose-600">{{ options[n.ans] }}</strong>.
          </p>
        </div>

        <button @click="showPart2 = !showPart2" class="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
          {{ showPart2 ? 'إخفاء الحل' : 'إظهار الحل' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const letters = ['أ', 'ب', 'ج', 'د']
const options = ['أ التلفزيون', 'ب الموقع الإلكتروني', 'ج وسائل التواصل الاجتماعي']

const statements = reactive([
  { text: 'يمكن للموقع الإلكتروني عرض معلومات متنوعة مثل النص والصور والفيديو مجتمعة.', ans: true, pick: null,
    why: 'صحيحة كنقطة قوة للمواقع الإلكترونية.' },
  { text: 'التلفزيون وسيلة تتيح التفاعل ثنائي الاتجاه مع المستخدمين.', ans: false, pick: null,
    why: 'التلفزيون عادةً وسيلة أحادية الاتجاه من المُرسِل إلى المُستقبِل.' },
  { text: 'وسائل التواصل الاجتماعي وسيلة فعّالة للغاية في نشر المعلومات بسرعة.', ans: true, pick: null,
    why: 'وصف صحيح لخصائص وسائل التواصل الاجتماعي.' },
  { text: 'يمكن عادةً مشاهدة الموقع الإلكتروني حتى دون اتصال بالإنترنت.', ans: false, pick: null,
    why: 'يتطلب الموقع الإلكتروني اتصالًا بالإنترنت.' },
])

const purposes = reactive([
  { text: 'إتاحة معلومات تفصيلية للاطلاع عليها في أي وقت', ans: 1, pick: null, summary: 'يتيح الموقع الإلكتروني الاطلاع على معلومات تفصيلية في أي وقت:' },
  { text: 'جعل المستخدمين ينشرون المعلومات عن طريق التناقل الشفهي', ans: 2, pick: null, summary: 'تنتشر وسائل التواصل الاجتماعي بسهولة عن طريق التناقل الشفهي:' },
  { text: 'إعلام عدد كبير من الناس في آنٍ واحد بالفيديو', ans: 0, pick: null, summary: 'يصل التلفزيون إلى عدد كبير من الناس بالفيديو:' },
])

const showPart1 = ref(false)
const showPart2 = ref(false)

function buttonClass(q, opt) {
  if (showPart1.value && q.ans === opt) return 'bg-emerald-500 border-emerald-500 text-white'
  if (q.pick === opt) return showPart1.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-teal-100 border-teal-500 text-teal-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}

function matchClass(n, j) {
  if (showPart2.value && n.ans === j) return 'bg-emerald-500 border-emerald-500 text-white'
  if (n.pick === j) return showPart2.value ? 'bg-rose-500 border-rose-500 text-white' : 'bg-teal-100 border-teal-500 text-teal-900'
  return 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
}
</script>
