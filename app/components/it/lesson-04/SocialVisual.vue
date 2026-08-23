<template>
  <section id="social-visual" class="py-24 px-6 sm:px-12 bg-background overflow-hidden relative">
    <div class="max-w-5xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">كيف تغيّرت حياتنا؟</h2>
        <p class="text-xl text-mutedtext max-w-3xl mx-auto">مقارنة سريعة بين الماضي واليوم في 5 مجالات أساسية</p>
      </div>

      <div class="space-y-6">
        <div v-for="(row, i) in rows" :key="i"
             class="bg-surface border-2 border-border rounded-3xl flex flex-col md:flex-row items-stretch overflow-hidden group hover:border-primary/50 transition-colors shadow-sm relative">
          
          <!-- Category Area -->
          <div class="md:w-48 shrink-0 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-l border-border bg-background/50 relative z-10">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md mb-3 transition-transform duration-300 group-hover:scale-110" :class="row.bg">
              <component :is="row.icon" class="w-8 h-8" />
            </div>
            <span class="text-xl font-black text-maintext">{{ row.label }}</span>
          </div>

          <!-- Comparison Area -->
          <div class="flex-1 grid grid-cols-1 md:grid-cols-2 relative">
            
            <!-- Before -->
            <div class="p-6 md:p-8 flex flex-col justify-center gap-2 relative bg-surface">
              <div class="flex items-center gap-2 text-rose-500 font-bold mb-2">
                <XCircle class="w-5 h-5" />
                <span class="text-sm tracking-wide">الماضي</span>
              </div>
              <p class="text-xl font-bold text-mutedtext">{{ row.before }}</p>
            </div>

            <!-- Arrow Divider -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border z-10 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <ArrowLeft class="w-6 h-6" />
            </div>

            <!-- Today -->
            <div class="p-6 md:p-8 flex flex-col justify-center gap-2 bg-emerald-500/5 relative">
              <div class="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 hidden md:block"></div>
              <div class="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                <CheckCircle2 class="w-5 h-5" />
                <span class="text-sm tracking-wide">اليوم</span>
              </div>
              <p class="text-xl font-black text-maintext">{{ row.today }}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircle, Briefcase, GraduationCap, ShoppingCart, CreditCard, XCircle, CheckCircle2, ArrowLeft } from 'lucide-vue-next'

const rows = [
  { label: 'التواصل', icon: MessageCircle, bg: 'bg-blue-500', before: 'قنوات محدودة وبطيئة', today: 'تواصل اجتماعي فوري وعالمي' },
  { label: 'العمل', icon: Briefcase, bg: 'bg-indigo-500', before: 'تواجد فعلي في مكان العمل', today: 'عمل عن بُعد عبر الإنترنت' },
  { label: 'التعلم', icon: GraduationCap, bg: 'bg-green-600', before: 'فصل دراسي تقليدي فقط', today: 'تعلم عبر الإنترنت من أي مكان' },
  { label: 'التجارة', icon: ShoppingCart, bg: 'bg-orange-500', before: 'متاجر محلية فقط', today: 'تجارة إلكترونية عالمية' },
  { label: 'الدفع', icon: CreditCard, bg: 'bg-purple-600', before: 'نقد فقط', today: 'بطاقات، تطبيقات، QR' }
]
</script>
