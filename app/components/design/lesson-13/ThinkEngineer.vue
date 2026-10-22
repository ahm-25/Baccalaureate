<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        مكتبة عامة في مدينتك تريد إخبار الناس عن برنامج قراءة مجاني جديد. أنت تقدّم المشورة حول الوسائط التي ينبغي استخدامها.
      </p>

      <div class="space-y-6">
        <!-- Step 1: survey -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-teal-900">اجمع البيانات</h3>
          </div>
          <p class="text-slate-600 mb-5">
            اسأل عشرة من زملائك أو أفراد عائلتك: أين يلاحظون فعليًا الإعلانات المحلية – ملصق مطبوع، فيسبوك، واتساب، أم راديو محلي؟ سجّل النتائج هنا وحدد القناة الأكثر شيوعًا.
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div v-for="c in channels" :key="c.name" class="rounded-xl border-2 p-3 transition-colors"
                 :class="c.count > 0 && c.count === maxCount ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50'">
              <div class="font-bold text-slate-800 mb-2">{{ c.icon }} {{ c.name }}</div>
              <div class="flex items-center justify-between">
                <button @click="c.count > 0 && c.count--" class="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-600">−</button>
                <span class="text-2xl font-extrabold text-slate-900">{{ c.count }}</span>
                <button @click="c.count++" class="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold">+</button>
              </div>
              <div class="h-1.5 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div class="h-full bg-teal-500 transition-all" :style="{ width: total ? (c.count / total * 100) + '%' : '0%' }"></div>
              </div>
            </div>
          </div>
          <p v-if="total" class="mt-4 text-sm font-bold text-emerald-700">
            القناة الأكثر شيوعًا: {{ channels.filter(c => c.count === maxCount).map(c => c.name).join('، ') }} ({{ total }} إجابة)
          </p>
        </div>

        <!-- Step 2: audiences -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-rose-900">حلّل الجمهور</h3>
          </div>
          <p class="text-slate-600 mb-4">لكل مجموعة، دوّن فائدة واحدة وعيبًا واحدًا لاستخدام موقع إلكتروني كقناة رئيسية للمكتبة.</p>
          <div class="grid md:grid-cols-3 gap-3">
            <div v-for="a in audiences" :key="a.name" class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ a.icon }} {{ a.name }}</h4>
              <textarea rows="3" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="الفائدة… / العيب…"></textarea>
            </div>
          </div>
          <button @click="showAud = !showAud" class="mt-4 text-rose-700 font-bold bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showAud ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showAud" class="mt-3 grid md:grid-cols-3 gap-3">
            <div v-for="a in audiences" :key="a.name" class="p-3 rounded-xl bg-white border border-rose-200 text-sm text-slate-700 leading-relaxed">
              <strong class="text-rose-800">{{ a.name }}:</strong> {{ a.answer }}
            </div>
          </div>
        </div>

        <!-- Step 3: decide -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            باستخدام استطلاعك وجدولك، اقترح خطة إعلامية (أي وسائط، وبأي أدوار) واذكر سببين. <strong>في أزواج</strong>، قارنوا خططكم واتفقوا معًا على أفضل وسيلة وحيدة للوصول إلى العائلات التي قد لا تكون متصلة بالإنترنت.
          </p>
          <div class="grid sm:grid-cols-2 gap-3 mb-4">
            <button v-for="(c, i) in choices" :key="i" @click="choice = i"
                    class="text-right p-4 rounded-xl border-2 font-bold transition-colors flex items-center gap-3"
                    :class="choice === i ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'">
              <span class="w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center text-xs" :class="choice === i ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'">{{ choice === i ? '✓' : '' }}</span>
              {{ c }}
            </button>
          </div>
          <textarea rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="قدّم دليلًا على إجابتك…"></textarea>

          <div class="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900">
            <strong>هل تواجه صعوبة؟</strong> ابدأ من الجمهور الذي يُظهر استطلاعك أنه الأصعب في الوصول إليه – أي وسيلة تصله بالفعل حيث يوجد؟
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> الجمع بين الوسائط حسب الغرض.
            <br><strong>الخطة:</strong> ملصقات مطبوعة وراديو محلي للوصول إلى الجميع حتى غير المتصلين بالإنترنت • وسائل التواصل الاجتماعي وواتساب للنشر السريع بالتناقل الشفهي • موقع المكتبة للتفاصيل الكاملة (المواعيد، الكتب، التسجيل).
            <br><strong>السبب 1:</strong> لا توجد وسيلة واحدة تصل إلى كل الجمهور؛ فالموقع وحده لا يصل إلى العائلات التي لا يتوفر لديها إنترنت منزلي.
            <br><strong>السبب 2:</strong> كل وسيلة تقوم بما تُجيده: المطبوعات والراديو للانتشار المحلي، والتواصل الاجتماعي للمشاركة، والموقع للتعمق.
            <br><strong>أفضل وسيلة وحيدة للعائلات غير المتصلة:</strong> الملصق المطبوع أو الراديو المحلي، لأنهما يعملان دون اتصال بالإنترنت.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const channels = reactive([
  { icon: '📄', name: 'ملصق مطبوع', count: 0 },
  { icon: '👍', name: 'فيسبوك', count: 0 },
  { icon: '💬', name: 'واتساب', count: 0 },
  { icon: '📻', name: 'راديو محلي', count: 0 },
])
const total = computed(() => channels.reduce((s, c) => s + c.count, 0))
const maxCount = computed(() => Math.max(...channels.map((c) => c.count)))

const audiences = [
  { icon: '🏠', name: 'عائلة بلا إنترنت منزلي', answer: 'الفائدة: قد تزور الموقع من مكان آخر لاحقًا • العيب: لن تصل إليها المعلومات لأن الموقع يحتاج إلى اتصال وفتح.' },
  { icon: '🎓', name: 'طالب', answer: 'الفائدة: يصل إلى التفاصيل ويحدّثها في أي وقت من هاتفه • العيب: يجب أن يعرف بوجود الموقع ويفتحه بنفسه.' },
  { icon: '📚', name: 'أمين المكتبة', answer: 'الفائدة: يحدّث المواعيد والمعلومات بسهولة في أي وقت • العيب: الموقع وحده لا يضمن وصول الإعلان إلى كل الجمهور.' },
]

const choices = ['استخدام وسيلة واحدة فقط', 'الجمع بين الوسائط حسب الغرض']
const choice = ref(null)
const showAud = ref(false)
const showModel = ref(false)
</script>
