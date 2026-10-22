<template>
  <section id="user-centered" class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900 via-slate-900 to-slate-900"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-2xl md:text-3xl font-bold text-fuchsia-300 mb-8">4. التصميم المتمحور حول المستخدم <span class="text-lg text-slate-400" dir="ltr">(UCD – User-Centered Design)</span></h2>

      <div class="space-y-5 text-lg text-slate-300 leading-relaxed mb-10">
        <p>
          <span class="font-bold text-slate-500">(1)</span>
          <strong class="text-rose-300">التصميم المتمحور حول المستخدم (UCD)</strong>: نهج يجعل فهم المستخدمين واحتياجاتهم وسياق استخدامهم أساسًا لقرارات التصميم.
        </p>
        <p>
          <span class="font-bold text-slate-500">(2)</span>
          يبدأ التصميم بفهم ما يحتاجه المستخدم، والمهمة التي يريد إنجازها، والظروف التي سيستخدم فيها الموقع. ثم ينظم الفريق المعلومات، ويصمم الحل،
          ويختبره مع المستخدمين، ويكرر التحسين. وشخصية المستخدم أداة ممكنة ضمن هذه العملية وليست شرطًا دائمًا.
        </p>
      </div>

      <!-- UCD cycle -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold mb-2">🔄 دورة التصميم المتمحور حول المستخدم</h3>
        <p class="text-slate-400 mb-6">اضغط على كل مرحلة لترى ماذا تعني في تصميم موقع مكتبة المدرسة.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <button v-for="(s, i) in cycle" :key="s.name" @click="active = i"
                  class="p-4 rounded-2xl border-2 text-center transition-all"
                  :class="active === i ? 'bg-fuchsia-600/30 border-fuchsia-400' : 'bg-slate-900 border-slate-700 hover:border-slate-500'">
            <div class="text-3xl mb-1">{{ s.icon }}</div>
            <div class="font-bold">{{ i + 1 }}. {{ s.name }}</div>
          </button>
        </div>
        <div class="bg-slate-950 border border-fuchsia-700/50 rounded-2xl p-5 min-h-[5rem]">
          <p class="text-fuchsia-200 font-bold mb-1">{{ cycle[active].name }}</p>
          <p class="text-slate-300 leading-relaxed">{{ cycle[active].example }}</p>
        </div>
        <p class="mt-4 text-center text-sm text-slate-400">بعد الاختبار نعود للتحسين ← ثم نختبر من جديد. التصميم يتطور بالتكرار ↺</p>
      </div>

      <p class="text-lg text-slate-300 leading-relaxed mb-6">
        <span class="font-bold text-slate-500">(3)</span> من أهداف التصميم الجيد:
      </p>
      <div class="grid md:grid-cols-2 gap-4 mb-10">
        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-2"><MousePointerClick class="w-7 h-7 text-sky-300" /><h4 class="text-lg font-bold text-sky-300">قابلية الاستخدام</h4></div>
          <p class="text-slate-300 leading-relaxed">تحسين قابلية الاستخدام، أي سهولة وفاعلية إنجاز المهمة.</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5">
          <div class="flex items-center gap-3 mb-2"><Accessibility class="w-7 h-7 text-emerald-300" /><h4 class="text-lg font-bold text-emerald-300">إمكانية الوصول الرقمي</h4></div>
          <p class="text-slate-300 leading-relaxed">دعم إمكانية الوصول الرقمي، أي تمكين الأشخاص ذوي الإعاقة من استخدام الموقع والتفاعل معه.</p>
        </div>
      </div>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8 text-slate-800">
        <h3 class="font-bold text-amber-700 mb-2">⭐ الفكرة الرئيسة</h3>
        <p class="text-lg font-bold leading-relaxed">
          صمّم انطلاقًا من المستخدم: تخيّل المستخدم (شخصية المستخدم)، وخطّط للتخطيط قبل المظهر (المخطط الهيكلي)، وطبّق التباين والتكرار والمحاذاة والتقارب،
          وأبقِ كل قرار مرتكزًا على المستخدم.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MousePointerClick, Accessibility } from 'lucide-vue-next'

const cycle = [
  { icon: '🔍', name: 'افهم المستخدم', example: 'ماذا يحتاج الطالب؟ يريد حجز كتاب بسرعة من الهاتف، في وقت الفسحة القصير.' },
  { icon: '📐', name: 'نظّم وصمّم', example: 'نضع مربع البحث وزر الحجز في مكان بارز بمخطط هيكلي، ثم نطبق مبادئ CRAP.' },
  { icon: '🧪', name: 'اختبر مع المستخدمين', example: 'نطلب من بعض الطلاب حجز كتاب ونراقب: أين يتعثرون؟ ماذا يجدونه صعبًا؟' },
  { icon: '🔁', name: 'كرّر التحسين', example: 'وجدنا أن زر الحجز صغير على الهاتف؛ فنكبّره ونختبر من جديد.' },
]
const active = ref(0)
</script>
