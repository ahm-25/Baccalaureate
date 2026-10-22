<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        عيادة مجتمعية في مدينتك تريد موقعًا إلكترونيًا بسيطًا حتى يتمكن المرضى من معرفة ساعات العمل والخدمات والاتجاهات. أنت تقود عملية التصميم.
      </p>

      <div class="space-y-6">
        <!-- Step 1: survey tally -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-fuchsia-100 text-fuchsia-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-fuchsia-900">اجمع البيانات</h3>
          </div>
          <p class="text-slate-600 mb-5">
            اسأل ثمانية إلى عشرة من زملائك: "لو كنت ستفتح موقعًا إلكترونيًا لعيادة مجتمعية، ما أول شيء ستبحث عنه؟" سجّل الإجابات هنا:
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div v-for="m in answers" :key="m.name" class="rounded-xl border-2 p-3 transition-colors"
                 :class="m.count > 0 && m.count === maxCount ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50'">
              <div class="font-bold text-slate-800 mb-2">{{ m.icon }} {{ m.name }}</div>
              <div class="flex items-center justify-between">
                <button @click="m.count > 0 && m.count--" class="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-600">−</button>
                <span class="text-2xl font-extrabold text-slate-900">{{ m.count }}</span>
                <button @click="m.count++" class="w-8 h-8 rounded-lg bg-fuchsia-600 text-white font-bold">+</button>
              </div>
              <div class="h-1.5 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div class="h-full bg-fuchsia-500 transition-all" :style="{ width: total ? (m.count / total * 100) + '%' : '0%' }"></div>
              </div>
            </div>
          </div>
          <p v-if="total" class="mt-4 text-sm font-bold text-emerald-700">
            ترتيب الأقسام حسب استطلاعك: {{ ranked.map(m => m.name).join(' ← ') }}
          </p>
        </div>

        <!-- Step 2: two users -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-amber-900">حلّل مستخدميك</h3>
          </div>
          <p class="text-slate-600 mb-4">صنّف الإجابات إلى أنواع مستخدمين. ادرس مثالين منفصلين، واكتب ما يحتاجه كل نوع.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="u in users" :key="u.name" class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ u.icon }} {{ u.name }}</h4>
              <textarea rows="3" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="ماذا يحتاج؟"></textarea>
              <button @click="u.show = !u.show" class="mt-2 text-xs font-bold text-amber-700 underline">{{ u.show ? 'إخفاء' : 'اقتراح' }}</button>
              <p v-if="u.show" class="mt-2 text-sm text-slate-700 leading-relaxed bg-white border border-amber-200 rounded-lg p-2">{{ u.need }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: decide -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر بناءً على بياناتك</h3>
          </div>
          <p class="text-slate-600 mb-4">
            رتّب أقسام الصفحة الرئيسية وبرّر ترتيبها من بياناتك. ثم اختر مبدأً بصريًا لحل مشكلة تنظيمية، وحدد أيضًا حاجز وصول مثل ضعف التباين أو صعوبة استخدام
            لوحة المفاتيح أو غياب النص البديل، واقترح حلًا مناسبًا له.
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
            <strong>هل تواجه صعوبة؟</strong> ابدأ بجدولك التكراري: أي حاجة ظهرت أكثر؟ ضع هذا القسم في الأعلى. ثم اسأل عن كل قسم: هل يبرز، أم يوحّد، أم ينظّم، أم يجمع؟
            اختر مبدأ CRAP الذي يعالج أضعف نقطة بالنسبة للمستخدم الذي أضفته.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> ابدأ من المستخدم، ثم صمّم.
            <br><strong>ترتيب الأقسام (مثال):</strong> ساعات العمل ← الخدمات ← الاتجاهات ← التواصل؛ لأن ساعات العمل كانت أكثر ما يبحث عنه المرضى في الاستطلاع.
            <br><strong>مبدأ بصري:</strong> التباين — نجعل ساعات العمل في عنوان كبير وواضح أعلى الصفحة حتى يجدها المريض فورًا.
            <br><strong>حاجز وصول وحله:</strong> ضعف التباين يصعّب القراءة على ضعيف البصر؛ فنستخدم نصًا كبيرًا بتباين قوي بين النص والخلفية، ونضيف نصًا بديلًا للصور.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const answers = reactive([
  { icon: '⏰', name: 'ساعات العمل', count: 0 },
  { icon: '🩺', name: 'الخدمات', count: 0 },
  { icon: '🗺️', name: 'الاتجاهات', count: 0 },
  { icon: '📞', name: 'التواصل', count: 0 },
])
const total = computed(() => answers.reduce((s, m) => s + m.count, 0))
const maxCount = computed(() => Math.max(...answers.map(m => m.count)))
const ranked = computed(() => [...answers].sort((a, b) => b.count - a.count))

const users = reactive([
  { icon: '👓', name: 'مستخدم ضعيف البصر', show: false, need: 'نص كبير وتباين قوي بين النص والخلفية، وعناوين واضحة، ونص بديل للصور، وإمكانية التكبير دون أن يتشوه التخطيط.' },
  { icon: '📵', name: 'شخص لا يتوفر لديه إنترنت منزلي', show: false, need: 'صفحة خفيفة تفتح بسرعة على بيانات الهاتف، والمعلومات الأهم (الساعات ورقم الهاتف) في الأعلى مباشرة دون صفحات كثيرة.' },
])

const choices = ['ابدأ باختيار الألوان والخطوط', 'ابدأ من المستخدم، ثم صمّم']
const choice = ref(null)
const showModel = ref(false)
</script>
