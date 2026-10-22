<template>
  <section id="exam-question" class="py-16 bg-slate-100 border-y border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-6">
        <span class="text-3xl">📝</span>
        <h2 class="text-2xl font-bold text-slate-900">سؤال على نمط الامتحان — <span class="text-orange-600">[6 درجات]</span></h2>
      </div>

      <div class="bg-white rounded-3xl shadow-md border-t-4 border-t-orange-500 p-8 md:p-10 mb-8">
        <h3 class="text-xl font-bold text-slate-800 leading-relaxed mb-6">
          <span class="text-orange-600">اشرح</span> لماذا يُنشئ المصمم شخصية نموذجية وإطارًا هيكليًا قبل اختيار الألوان والخطوط.
        </h3>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 class="font-bold text-slate-700 mb-3">💡 ارجع إلى:</h4>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-xl bg-fuchsia-100 text-fuchsia-800 font-bold">احتياجات المستخدم</span>
            <span class="px-4 py-2 rounded-xl bg-amber-100 text-amber-800 font-bold">التوصل إلى اتفاق مع أصحاب المصلحة</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <button
          @click="showAnswer = !showAnswer"
          class="w-full bg-slate-50 hover:bg-slate-100 text-right px-6 py-4 font-bold text-lg flex justify-between items-center transition-colors focus:outline-none"
        >
          <span class="text-slate-800">عرض نموذج الإجابة وتوزيع الدرجات</span>
          <span class="text-slate-500 transform transition-transform" :class="{ 'rotate-180': showAnswer }">▼</span>
        </button>
        <div v-show="showAnswer" class="p-6 md:p-8 border-t border-slate-200 text-slate-700 leading-relaxed font-medium space-y-4">
          <p v-for="(p, i) in points" :key="i" class="flex gap-3">
            <span class="shrink-0 font-bold px-2 rounded h-fit" :class="p.cls">{{ p.label }}</span>
            <span>{{ p.text }} <span class="text-xs font-bold text-slate-400">[{{ p.marks }}]</span></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const showAnswer = ref(false)

const points = [
  { label: 'الشخصية', cls: 'text-fuchsia-700 bg-fuchsia-50', marks: 'درجة', text: 'شخصية المستخدم تمثل نمطًا من المستخدمين مبنيًا قدر الإمكان على بحث أو بيانات عن أهدافهم واحتياجاتهم وسياق استخدامهم.' },
  { label: 'الشخصية', cls: 'text-fuchsia-700 bg-fuchsia-50', marks: 'درجة', text: 'فتجعل الفريق يناقش احتياجات المستخدم الحقيقية بدل الاعتماد على الافتراضات الشخصية أو ذوق المصمم.' },
  { label: 'الهيكل', cls: 'text-slate-700 bg-slate-100', marks: 'درجة', text: 'الإطار الهيكلي يحدد أماكن العناصر وأولوياتها بتفاصيل بصرية قليلة، فيركز الفريق على البنية قبل التصميم البصري.' },
  { label: 'الهيكل', cls: 'text-slate-700 bg-slate-100', marks: 'درجة', text: 'وبذلك يمكن النظر في توزيع المعلومات ومواضعها بمعزل عن التصميم البصري، وفق ما يحتاجه المستخدم أولًا.' },
  { label: 'الاتفاق', cls: 'text-amber-700 bg-amber-50', marks: 'درجة', text: 'إذا اختيرت الألوان والخطوط أولًا تميل النقاشات إلى الانحراف نحو التفضيلات الشخصية في المظهر.' },
  { label: 'الاتفاق', cls: 'text-amber-700 bg-amber-50', marks: 'درجة', text: 'أما تحديد مكان وأولوية المعلومات أولًا فيسهّل على أصحاب المصلحة الوصول إلى اتفاق، ثم تأتي الزخارف في مرحلة لاحقة.' },
]
</script>
