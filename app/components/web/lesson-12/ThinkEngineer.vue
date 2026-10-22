<template>
  <section id="think-engineer" class="py-16 bg-emerald-50/40 border-y border-emerald-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-800">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <p class="text-lg text-slate-700 font-medium leading-relaxed mb-8">
        يريد نادٍ طلابي صفحة ويب بسيطة تعرض فعالياته، ومنسقة بألوان النادي، وتحتوي على زر يعرض عدد الأشخاص المسجلين.
      </p>

      <div class="space-y-6">
        <!-- Step 1 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center">1</span>
            <h3 class="text-lg font-bold text-orange-900">لاحظ أولًا</h3>
          </div>
          <p class="text-slate-600 mb-4">
            افتح صفحة ويب واحدة تستخدمها كثيرًا ولاحظ أمرين فيها يتغيران عند النقر أو الكتابة. ثم، بالنسبة لثلاث ميزات في صفحة النادي، حدّد أي تقنية (HTML أو CSS أو JavaScript) تقوم بكل منها، ولماذا.
          </p>
          <CyberLesson07ChoiceItems :items="features" :options="techOptions" />
        </div>

        <!-- Step 2 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center">2</span>
            <h3 class="text-lg font-bold text-sky-900">اجعلها تصل إلى الجميع</h3>
          </div>
          <p class="text-slate-600 mb-4">
            اذكر تغييرًا واحدًا من شأنه أن يجعل الصفحة أسهل قراءة على الهاتف (التصميم المتجاوب)، واختيارًا واحدًا في HTML الدلالية من شأنه أن يساعد قارئ الشاشة.
          </p>
          <div class="grid md:grid-cols-2 gap-3">
            <div v-for="f in reachFields" :key="f" class="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 class="font-bold text-slate-800 mb-2">{{ f }}</h4>
              <textarea rows="2" class="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="اكتب اختيارك…"></textarea>
            </div>
          </div>
          <button @click="showReach = !showReach" class="mt-4 text-sky-700 font-bold bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showReach ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showReach" class="mt-3 grid md:grid-cols-2 gap-3">
            <div class="p-3 rounded-xl bg-white border border-sky-200 text-sm text-slate-700">
              <strong class="text-sky-800">التصميم المتجاوب:</strong> عرض قائمة الفعاليات في عمود واحد على شاشة الهاتف بدل عدة أعمدة، مع تكبير زر التسجيل.
            </div>
            <div class="p-3 rounded-xl bg-white border border-sky-200 text-sm text-slate-700">
              <strong class="text-sky-800">HTML الدلالية:</strong> وضع قائمة الفعاليات داخل العنصر main والقائمة داخل nav، فيعلن قارئ الشاشة وظيفة كل جزء.
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">3</span>
            <h3 class="text-lg font-bold text-emerald-900">قرّر</h3>
          </div>
          <p class="text-slate-600 mb-4">
            أوصِ بما إذا كان على النادي فصل HTML وCSS وJavaScript، وقدّم سببين. <strong>في أزواج</strong>، قارنوا توزيعكم للأدوار واتفقوا معًا على ما يحتاجه عدّاد التسجيل.
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
            <strong>هل تواجه صعوبة؟</strong> HTML يحمل المحتوى؛ وCSS ينسقه؛ وJavaScript يجعله يتفاعل ويُحدّث.
          </div>

          <button @click="showModel = !showModel" class="mt-4 text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg text-sm transition-colors">
            {{ showModel ? 'إخفاء الإجابة المقترحة' : 'أظهر إجابة مقترحة' }}
          </button>
          <div v-if="showModel" class="mt-3 p-4 bg-white border border-emerald-200 rounded-xl text-slate-700 leading-relaxed">
            <strong>التوصية:</strong> استخدام HTML وCSS وJavaScript كلًا حسب دوره الصحيح.
            <br><strong>السبب 1:</strong> لكل تقنية دور واضح (البنية، المظهر، السلوك)، فيسهل على أعضاء النادي معرفة أين يعدّلون؛ فتغيير ألوان النادي يكون في CSS دون لمس المحتوى.
            <br><strong>السبب 2:</strong> عدّاد التسجيل الحي يحتاج JavaScript لأنه سلوك يتحدّث عند التفاعل؛ أما قائمة الفعاليات فمحتوى ثابت مكانه HTML.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const techOptions = ['أ HTML', 'ب CSS', 'ج JavaScript']
const features = [
  { text: 'قائمة الفعاليات (العناوين والتواريخ)', ans: 0 },
  { text: 'ألوان النادي وتخطيط الصفحة', ans: 1 },
  { text: 'عدّاد التسجيل الحي الذي يزيد عند الضغط', ans: 2 },
]

const reachFields = ['تغيير للهاتف (التصميم المتجاوب)', 'اختيار في HTML الدلالية لقارئ الشاشة']
const showReach = ref(false)

const choices = ['اكتب كل شيء في ملف واحد', 'استخدم HTML وCSS وJavaScript كلًا حسب دوره الصحيح']
const choice = ref(null)
const showModel = ref(false)
</script>
