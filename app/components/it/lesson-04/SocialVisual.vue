<template>
  <section id="social-visual" class="py-24 px-6 sm:px-12 bg-background overflow-hidden relative">
    <div class="max-w-6xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">كيف تغيّرت حياتنا؟</h2>
        <p class="text-xl text-mutedtext max-w-3xl mx-auto">مقارنة سريعة بين الماضي واليوم في خمسة مجالات</p>
      </div>

      <div class="space-y-6">
        <div v-for="(row, i) in rows" :key="i"
             class="bg-surface border border-border rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          
          <!-- Before -->
          <div class="flex items-center gap-4">
            <XCircle class="w-6 h-6 text-red-400 shrink-0" />
            <p class="text-lg font-bold text-mutedtext">{{ row.before }}</p>
          </div>

          <!-- Category Badge -->
          <div class="flex flex-col items-center justify-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md" :class="row.bg">
              <component :is="row.icon" class="w-7 h-7" />
            </div>
            <span class="text-sm font-black text-maintext mt-2">{{ row.label }}</span>
          </div>

          <!-- Today -->
          <div class="flex items-center gap-4">
            <CheckCircle2 class="w-6 h-6 text-green-500 shrink-0" />
            <p class="text-lg font-bold text-maintext">{{ row.today }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircle, Briefcase, GraduationCap, ShoppingCart, CreditCard, XCircle, CheckCircle2 } from 'lucide-vue-next'

const rows = [
  { label: 'التواصل', icon: MessageCircle, bg: 'bg-blue-500', before: 'قنوات محدودة وبطيئة', today: 'تواصل اجتماعي فوري وعالمي' },
  { label: 'العمل', icon: Briefcase, bg: 'bg-indigo-500', before: 'تواجد فعلي في مكان العمل', today: 'عمل عن بُعد عبر الإنترنت' },
  { label: 'التعلم', icon: GraduationCap, bg: 'bg-green-600', before: 'فصل دراسي تقليدي فقط', today: 'تعلم عبر الإنترنت من أي مكان' },
  { label: 'التجارة', icon: ShoppingCart, bg: 'bg-orange-500', before: 'متاجر محلية فقط', today: 'تجارة إلكترونية عالمية' },
  { label: 'الدفع', icon: CreditCard, bg: 'bg-purple-600', before: 'نقد فقط', today: 'بطاقات، تطبيقات، QR' }
]
</script>
