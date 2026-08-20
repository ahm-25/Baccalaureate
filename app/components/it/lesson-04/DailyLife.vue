<template>
  <section id="daily-life" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="max-w-6xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">تكنولوجيا المعلومات حولك كل يوم</h2>
        <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
          تأمّل يومك العادي... كم من هذه الأنشطة تقوم بها باستخدام التكنولوجيا؟
        </p>
      </div>

      <!-- Daily Activities -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div v-for="(activity, i) in activities" :key="i"
             class="bg-surface p-8 rounded-3xl border-2 border-border hover:border-primary/40 hover:shadow-xl transition-all text-center group">
          <div class="text-5xl mb-4">{{ activity.emoji }}</div>
          <h3 class="text-xl font-black text-maintext leading-relaxed">{{ activity.text }}</h3>
        </div>
      </div>

      <!-- The Question -->
      <div class="bg-primary/10 border-2 border-primary/20 rounded-3xl p-10 text-center mb-12">
        <HelpCircle class="w-12 h-12 text-primary mx-auto mb-6" />
        <p class="text-3xl md:text-4xl font-black text-maintext leading-relaxed">
          هل كانت هذه الخدمات متاحة بالشكل نفسه منذ 30 سنة؟
        </p>
      </div>

      <!-- Before / Today -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-surface border border-border rounded-3xl p-8 shadow-md relative">
          <div class="absolute -top-5 right-6 px-5 py-2 rounded-full bg-gray-200 text-gray-600 font-black text-sm">قبل 30 سنة</div>
          <ul class="space-y-5 mt-4">
            <li v-for="(item, i) in beforeItems" :key="i" class="flex items-center gap-4">
              <XCircle class="w-6 h-6 text-red-400 shrink-0" />
              <span class="text-lg font-bold text-mutedtext">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-primary/5 border-2 border-primary/20 rounded-3xl p-8 shadow-lg relative">
          <div class="absolute -top-5 right-6 px-5 py-2 rounded-full bg-primary text-white font-black text-sm">اليوم</div>
          <ul class="space-y-5 mt-4">
            <li v-for="(item, i) in todayItems" :key="i" class="flex items-center gap-4">
              <CheckCircle2 class="w-6 h-6 text-green-500 shrink-0" />
              <span class="text-lg font-bold text-maintext">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HelpCircle, XCircle, CheckCircle2 } from 'lucide-vue-next'

const activities = [
  { emoji: '📱', text: 'يقرأ رسائله على تطبيق تواصل اجتماعي' },
  { emoji: '💳', text: 'يدفع إلكترونيًا' },
  { emoji: '🎓', text: 'ينضم إلى درس عبر الإنترنت' },
  { emoji: '🛒', text: 'يطلب كتابًا من متجر إلكتروني' }
]

const beforeItems = [
  'التواصل عبر الخطابات والهاتف الأرضي فقط',
  'الدفع نقدًا دائمًا',
  'التعليم داخل الفصل فقط',
  'الشراء من المتاجر المحلية فقط'
]

const todayItems = [
  'تواصل فوري عبر شبكات التواصل الاجتماعي',
  'دفع غير نقدي بالبطاقة أو الهاتف أو QR',
  'تعلم عبر الإنترنت من أي مكان',
  'تسوق إلكتروني عالمي وتوصيل للمنزل'
]
</script>
