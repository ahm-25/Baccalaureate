<template>
  <section id="size-comparison" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="max-w-6xl mx-auto w-full z-10 text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">من أجهزة ضخمة... إلى أجهزة في جيبك</h2>
      <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
        مع تطور التكنولوجيا، أصبحت الأجهزة أصغر وأسهل في الاستخدام، وفي نفس الوقت أصبحت أكثر قدرة على معالجة المعلومات.
      </p>
    </div>

    <div class="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- BEFORE -->
      <div class="bg-surface border border-border p-10 rounded-[3rem] shadow-lg relative group">
        <div class="absolute -top-6 -right-6 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center font-black text-xl text-gray-500 shadow-sm border-4 border-white">
          الماضي
        </div>
        
        <div class="w-48 h-48 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center border-8 border-white shadow-inner group-hover:scale-105 transition-transform">
          <Server class="w-24 h-24 text-gray-400" stroke-width="1.5" />
        </div>
        
        <h3 class="text-3xl font-black text-center text-maintext mb-6">الأجهزة الضخمة</h3>
        
        <ul class="space-y-4">
          <li class="flex items-center gap-3 text-lg font-bold text-mutedtext">
            <XCircle class="w-6 h-6 text-red-400" />
            حجم كبير (تأخذ مساحة غرفة كاملة)
          </li>
          <li class="flex items-center gap-3 text-lg font-bold text-mutedtext">
            <XCircle class="w-6 h-6 text-red-400" />
            غالية الثمن جداً
          </li>
          <li class="flex items-center gap-3 text-lg font-bold text-mutedtext">
            <XCircle class="w-6 h-6 text-red-400" />
            يستخدمها متخصصون فقط
          </li>
          <li class="flex items-center gap-3 text-lg font-bold text-mutedtext">
            <XCircle class="w-6 h-6 text-red-400" />
            صعبة النقل أو التحريك
          </li>
        </ul>
      </div>

      <!-- VS Badge (Desktop) -->
      <div class="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center font-black text-2xl text-primary shadow-xl border-4 border-surface z-20">
        VS
      </div>

      <!-- TODAY -->
      <div class="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 p-10 rounded-[3rem] shadow-xl relative group">
        <div class="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center font-black text-xl text-white shadow-lg border-4 border-white animate-pulse">
          اليوم
        </div>
        
        <div class="w-48 h-48 mx-auto mb-8 bg-white rounded-full flex items-center justify-center border-8 border-primary/10 shadow-xl group-hover:scale-105 transition-transform">
          <Smartphone class="w-24 h-24 text-primary" stroke-width="1.5" />
        </div>
        
        <h3 class="text-3xl font-black text-center text-maintext mb-6">الهواتف الذكية</h3>
        
        <ul class="space-y-4">
          <li class="flex items-center gap-3 text-lg font-bold text-maintext">
            <CheckCircle2 class="w-6 h-6 text-green-500" />
            حجم صغير (في جيبك)
          </li>
          <li class="flex items-center gap-3 text-lg font-bold text-maintext">
            <CheckCircle2 class="w-6 h-6 text-green-500" />
            أسعار مناسبة للجميع
          </li>
          <li class="flex items-center gap-3 text-lg font-bold text-maintext">
            <CheckCircle2 class="w-6 h-6 text-green-500" />
            سهلة الاستخدام لأي شخص
          </li>
          <li class="flex items-center gap-3 text-lg font-bold text-maintext">
            <CheckCircle2 class="w-6 h-6 text-green-500" />
            قدرات معالجة أقوى ومترابطة بالإنترنت
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Server, Smartphone, CheckCircle2, XCircle } from 'lucide-vue-next'
</script>
