<template>
  <section id="social-changes" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <div class="max-w-7xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span class="text-lg font-bold text-primary">القسم الثاني</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">2. التغيرات الاجتماعية الناتجة عن تكنولوجيا المعلومات</h2>
        <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
          خمسة تغيرات رئيسية أعادت تشكيل حياتنا اليومية
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(card, i) in cards" :key="i"
             @click="expandedCard = expandedCard === i ? -1 : i"
             class="bg-white rounded-3xl border-2 transition-all duration-300 cursor-pointer group overflow-hidden"
             :class="expandedCard === i ? 'border-primary shadow-2xl shadow-primary/10 col-span-1 lg:col-span-1' : 'border-border hover:border-primary/40 hover:shadow-lg'">
          
          <div class="p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md text-white shrink-0" :class="card.bg">
                <component :is="card.icon" class="w-7 h-7" />
              </div>
              <div>
                <h3 class="text-xl font-black text-maintext leading-tight">{{ card.title }}</h3>
                <span class="text-sm font-bold text-mutedtext">{{ card.english }}</span>
              </div>
            </div>

            <!-- Definition -->
            <div class="bg-surface p-5 rounded-2xl border border-border mb-4">
              <p class="text-sm font-bold text-primary mb-1">التعريف</p>
              <p class="text-lg font-bold text-maintext leading-relaxed">{{ card.definition }}</p>
            </div>

            <!-- Expanded content -->
            <Transition name="expand">
              <div v-if="expandedCard === i" class="space-y-4 mt-4">
                <div class="bg-blue-50 p-4 rounded-2xl border border-blue-200">
                  <p class="text-sm font-bold text-blue-600 mb-1">مثال</p>
                  <p class="font-bold text-blue-900">{{ card.example }}</p>
                </div>
                <div class="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <p class="text-sm font-bold text-green-600 mb-1">كيف غيّر حياة الناس؟</p>
                  <p class="font-bold text-green-900">{{ card.impact }}</p>
                </div>
              </div>
            </Transition>

            <div class="flex items-center gap-2 mt-4 text-primary font-bold text-sm">
              <span>{{ expandedCard === i ? 'إخفاء التفاصيل' : 'اكتشف المزيد' }}</span>
              <ChevronDown class="w-4 h-4 transition-transform" :class="expandedCard === i ? 'rotate-180' : ''" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Share2, ShoppingCart, Laptop, GraduationCap, CreditCard, ChevronDown } from 'lucide-vue-next'

const expandedCard = ref(-1)

const cards = [
  {
    title: 'شبكات التواصل الاجتماعي',
    english: 'SNS',
    icon: Share2,
    bg: 'bg-blue-500',
    definition: 'منصات تتيح للمستخدمين التواصل ونشر المحتوى ومشاركته بسرعة.',
    example: 'Facebook, X (Twitter), Instagram, TikTok',
    impact: 'أصبح الناس قادرين على التواصل الفوري مع أي شخص حول العالم ومشاركة الأخبار والمعلومات بسرعة غير مسبوقة.'
  },
  {
    title: 'التجارة الإلكترونية',
    english: 'E-commerce',
    icon: ShoppingCart,
    bg: 'bg-orange-500',
    definition: 'بيع السلع والخدمات وشراؤها عبر الإنترنت.',
    example: 'المتاجر الإلكترونية مثل Amazon ومواقع التسوق المحلية',
    impact: 'لم يعد الشراء يتطلب الذهاب للمتاجر المحلية، بل يمكن الشراء من أي مكان في العالم والتوصيل للمنزل.'
  },
  {
    title: 'العمل عن بُعد',
    english: 'Remote Work',
    icon: Laptop,
    bg: 'bg-indigo-500',
    definition: 'نمط عمل يؤدي فيه الشخص مهامه من المنزل أو من موقع آخر بعيد باستخدام الإنترنت.',
    example: 'العمل من المنزل باستخدام تطبيقات مثل Zoom وTeams',
    impact: 'أصبح بإمكان الموظفين العمل من أي مكان دون الحاجة للتواجد الفعلي في المكتب.'
  },
  {
    title: 'التعلم عبر الإنترنت',
    english: 'Online Learning',
    icon: GraduationCap,
    bg: 'bg-green-600',
    definition: 'نمط تعليمي تُقدم فيه الدروس والمواد التعليمية عبر الإنترنت.',
    example: 'منصات مثل Coursera وEdX وGoogle Classroom',
    impact: 'أصبح التعليم متاحًا للجميع بغض النظر عن الموقع الجغرافي، مع إمكانية التعلم في أي وقت.'
  },
  {
    title: 'الدفع غير النقدي',
    english: 'Cashless Payment',
    icon: CreditCard,
    bg: 'bg-purple-600',
    definition: 'دفع قيمة السلع أو الخدمات بوسائل غير نقدية، مثل البطاقات المصرفية أو تطبيقات الهاتف أو رموز QR.',
    example: 'Apple Pay, Google Pay, البطاقات المصرفية, رموز QR',
    impact: 'تقليل الاعتماد على النقد وتسهيل عمليات الدفع وزيادة سرعتها وأمانها.'
  }
]
</script>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
