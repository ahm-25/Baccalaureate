<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        تعمل إحدى المدارس في مدينتك على إنشاء بوابة إلكترونية يتحقق من خلالها الطلاب من درجاتهم ويدفعون الرسوم.
        عليك أن تختار طريقة تسجيل دخول الطلاب. أيهما الخيار الأفضل لهذه الخدمة؟
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <!-- Step 1: survey tally -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:col-span-3">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-sky-900">اجمع البيانات</h3>
          </div>
          <p class="text-slate-600 mb-5">
            اسأل عشرة من زملائك في الصف عن طرق تسجيل الدخول التي يستخدمونها ويثقون بها (كلمة مرور، كلمة مرور لمرة واحدة، رسائل قصيرة، بصمة إصبع أو وجه). سجّل النتائج هنا:
          </p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div v-for="m in methods" :key="m.name" class="rounded-xl border-2 p-3 transition-colors"
                 :class="m.count > 0 && m.count === maxCount ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50'">
              <div class="font-bold text-slate-800 mb-2">{{ m.icon }} {{ m.name }}</div>
              <div class="flex items-center justify-between">
                <button @click="m.count > 0 && m.count--" class="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-600">−</button>
                <span class="text-2xl font-extrabold text-slate-900">{{ m.count }}</span>
                <button @click="m.count++" class="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold">+</button>
              </div>
              <div class="h-1.5 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div class="h-full bg-sky-500 transition-all" :style="{ width: total ? (m.count / total * 100) + '%' : '0%' }"></div>
              </div>
            </div>
          </div>
          <p v-if="total" class="mt-4 text-sm font-bold text-emerald-700">
            الإجابة الأكثر شيوعًا: {{ methods.filter(m => m.count === maxCount).map(m => m.name).join('، ') }} ({{ total }} إجابة)
          </p>
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:col-span-3">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-rose-900">حلّل أصحاب المصلحة</h3>
          </div>
          <p class="text-slate-600 mb-4">لكل فئة دوّن فائدة واحدة وعيبًا واحدًا لاشتراط عامل ثانٍ.</p>
          <div class="grid md:grid-cols-3 gap-3">
            <div v-for="s in stakeholders" :key="s.name" class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ s.icon }} {{ s.name }}</h4>
              <textarea rows="3" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="الفائدة… / العيب…"></textarea>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:col-span-3">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بطريقة تسجيل دخول واحدة للبوابة، وقدّم سببين بناءً على استطلاعك وجدولك. <strong>في أزواج</strong>، قارن توصياتك واتفقا معًا على أقوى سبب واحد قبل تدوينه.
          </p>
          <div class="grid sm:grid-cols-2 gap-3 mb-4">
            <button v-for="(c, i) in choices" :key="i" @click="choice = i"
                    class="text-right p-4 rounded-xl border-2 font-bold transition-colors flex items-center gap-3"
                    :class="choice === i ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'">
              <span class="w-5 h-5 rounded border-2 flex items-center justify-center text-xs" :class="choice === i ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'">{{ choice === i ? '✓' : '' }}</span>
              {{ c }}
            </button>
          </div>
          <textarea rows="3" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="قدّم دليلًا على إجابتك…"></textarea>

          <div class="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900">
            <strong>تلميح:</strong> إذا عُرفت كلمة المرور، فكيف يساعد عامل ثانٍ مستقل – مثل تطبيق مصادقة أو مفتاح أمان – في حماية الحساب؟
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> كلمة مرور بالإضافة إلى كلمة مرور لمرة واحدة تُرسل إلى الهاتف.
            <br><strong>السبب 1 (الأمان):</strong> البوابة تحتوي على درجات ومدفوعات، والعامل الثاني (الحيازة) يمنع الدخول حتى لو تسربت كلمة المرور.
            <br><strong>السبب 2 (إمكانية الوصول):</strong> رسالة SMS تصل إلى أي هاتف ولو لم يكن ذكيًا، ويمكن إرسالها إلى هاتف ولي الأمر للطالب الذي لا يملك هاتفًا.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const methods = reactive([
  { icon: '🔑', name: 'كلمة مرور فقط', count: 0 },
  { icon: '🔢', name: 'كلمة مرور لمرة واحدة', count: 0 },
  { icon: '💬', name: 'رسائل قصيرة', count: 0 },
  { icon: '👆', name: 'بصمة إصبع أو وجه', count: 0 },
])
const total = computed(() => methods.reduce((s, m) => s + m.count, 0))
const maxCount = computed(() => Math.max(...methods.map(m => m.count)))

const stakeholders = [
  { icon: '🎓', name: 'طالب' },
  { icon: '🏫', name: 'المدرسة' },
  { icon: '📵', name: 'طالب لا يملك هاتفًا ذكيًا' },
]

const choices = ['كلمة مرور فقط', 'كلمة مرور بالإضافة إلى كلمة مرور لمرة واحدة تُرسل إلى الهاتف']
const choice = ref(null)
const showModel = ref(false)
</script>
