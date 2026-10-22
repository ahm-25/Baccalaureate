<template>
  <section id="website-strengths" class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-4">2. نقاط القوة والقيود في المواقع الإلكترونية</h2>
      <p class="text-slate-600 mb-8">يجمع الموقع الإلكتروني بين مزايا لا تتوفر في وسائل الإعلام أحادية الاتجاه. اضغط على أي بطاقة لترى مثالًا.</p>

      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div class="bg-white rounded-3xl border-2 border-emerald-200 p-6">
          <h3 class="text-xl font-bold text-emerald-700 mb-4">✔ (1) نقاط قوة المواقع الإلكترونية</h3>
          <div class="space-y-3">
            <button v-for="(s, i) in strengths" :key="i" @click="openS = openS === i ? null : i"
                    class="w-full text-right p-3 rounded-xl border transition-colors"
                    :class="openS === i ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200 hover:border-emerald-300'">
              <div class="flex items-start gap-3">
                <span class="font-bold text-emerald-600 shrink-0">{{ circled[i] }}</span>
                <span class="font-medium text-slate-800">{{ s.text }}</span>
              </div>
              <p v-if="openS === i" class="mt-2 pr-7 text-sm text-emerald-800">💡 {{ s.example }}</p>
            </button>
          </div>
        </div>

        <div class="bg-white rounded-3xl border-2 border-rose-200 p-6">
          <h3 class="text-xl font-bold text-rose-700 mb-4">✘ (2) قيود المواقع الإلكترونية</h3>
          <div class="space-y-3">
            <button v-for="(s, i) in limits" :key="i" @click="openL = openL === i ? null : i"
                    class="w-full text-right p-3 rounded-xl border transition-colors"
                    :class="openL === i ? 'bg-rose-50 border-rose-300' : 'bg-slate-50 border-slate-200 hover:border-rose-300'">
              <div class="flex items-start gap-3">
                <span class="font-bold text-rose-600 shrink-0">{{ circled[i] }}</span>
                <span class="font-medium text-slate-800">{{ s.text }}</span>
              </div>
              <p v-if="openL === i" class="mt-2 pr-7 text-sm text-rose-800">💡 {{ s.example }}</p>
            </button>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-white border border-slate-200 rounded-2xl p-4">
          <strong class="text-rose-600">نقاط قوة الموقع الإلكتروني</strong>
          <span class="text-slate-700"> – متنوع، قابل للتحديث، عالمي، ثنائي الاتجاه.</span>
        </div>
        <div class="bg-white border border-slate-200 rounded-2xl p-4">
          <strong class="text-rose-600">قيود الموقع الإلكتروني</strong>
          <span class="text-slate-700"> – يحتاج إلى إنترنت؛ يجب على المستخدمين البحث عنه.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const circled = ['①', '②', '③', '④', '⑤']

const strengths = [
  { text: 'يمكن الجمع بين معلومات متنوعة مثل النص والصور والفيديو وعرضها معًا.', example: 'صفحة منتج فيها وصف مكتوب وصور وفيديو يشرح طريقة الاستخدام.' },
  { text: 'يمكن تحديث المعلومات في أي وقت.', example: 'تعديل موعد فعالية في دقائق، بينما الصحيفة المطبوعة لا تتغير بعد طباعتها.' },
  { text: 'يمكن الوصول إليه من أي مكان يتوفر فيه اتصال مناسب بالشبكة.', example: 'طالب يفتح موقع المدرسة من المنزل أو من مدينة أخرى.' },
  { text: 'التفاعل ثنائي الاتجاه مع المستخدمين ممكن من خلال النماذج والتعليقات وغيرها.', example: 'نموذج "اتصل بنا" أو تعليقات أسفل المقال.' },
  { text: 'يمكن استخدامه من المتصفح، وقد تسمح بعض تطبيقات الويب أيضًا بالتثبيت.', example: 'يكفي فتح الرابط في المتصفح دون تثبيت برنامج.' },
]

const limits = [
  { text: 'تحتاج معظم وظائف المواقع إلى اتصال بالشبكة، لكن يمكن تصميم بعض المواقع أو تطبيقات الويب لتوفير محتوى أو وظائف محدودة دون اتصال.', example: 'أسرة بلا إنترنت منزلي قد لا تصل إلى إعلان منشور على الموقع فقط.' },
  { text: 'غالبًا يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه، ما لم تستخدم الخدمة إشعارات أو قنوات أخرى.', example: 'الموقع لا "يذهب" إلى الناس؛ يجب أن يعرفوا بوجوده ويفتحوه.' },
  { text: 'قد تختلف سرعة العرض والتحميل حسب جهاز المستخدم وبيئة الشبكة.', example: 'فيديو ثقيل قد يتأخر تحميله على هاتف قديم أو شبكة ضعيفة.' },
]

const openS = ref(null)
const openL = ref(null)
</script>
