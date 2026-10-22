<template>
  <section id="stop-think" class="py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50"></div>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">💡</span>
          <h3 class="text-2xl font-bold text-amber-900">توقف وفكر</h3>
        </div>

        <div class="space-y-6">
          <div v-for="(q, i) in questions" :key="i" class="bg-white/70 rounded-2xl border border-amber-200 p-5">
            <p class="text-xl text-amber-950 font-medium leading-relaxed mb-4" v-html="q.q"></p>
            <button
              @click="open[i] = !open[i]"
              class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-5 rounded-xl transition-colors"
            >
              {{ open[i] ? 'إخفاء الإجابة' : 'عرض الإجابة' }}
            </button>
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div v-if="open[i]" class="mt-4 p-5 bg-white rounded-xl border border-amber-200 text-lg text-slate-800 leading-relaxed" v-html="q.a"></div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const open = reactive([false, false])

// Two "stop and think" boxes from the book sidebar (pages 64 and 65)
const questions = [
  {
    q: 'في صفحة تستخدمها كثيرًا، ما هي الأجزاء التي تمثل البنية (HTML)، وما هي التي تمثل الشكل (CSS)، وما الذي يتفاعل معك (JavaScript)؟',
    a: '🧱 <strong>HTML:</strong> العناوين والنصوص والصور والروابط والقائمة نفسها.<br>🎨 <strong>CSS:</strong> الألوان والخطوط وترتيب الأعمدة والمسافات.<br>⚡ <strong>JavaScript:</strong> مربع البحث الذي يقترح النتائج، وزر الإعجاب الذي يعدّ، والأجزاء التي تتحدث دون إعادة تحميل الصفحة.',
  },
  {
    q: 'لماذا يفهم قارئ الشاشة الصفحة بشكل أفضل عندما تستخدم <code dir="ltr">&lt;header&gt;</code> و<code dir="ltr">&lt;nav&gt;</code> و<code dir="ltr">&lt;main&gt;</code> بدلًا من صناديق عادية؟',
    a: '🔊 لأن هذه العناصر <strong>تحمل معنى</strong> يوضح وظيفة كل جزء؛ فيستطيع قارئ الشاشة أن يعلن للمستخدم «هذا التنقل» و«هذا المحتوى الرئيسي»، ويسمح له بالانتقال إليها مباشرة. أما الصناديق العادية فلا تخبر عن وظيفتها، فيضطر المستخدم لسماع الصفحة كلها.',
  },
]
</script>
