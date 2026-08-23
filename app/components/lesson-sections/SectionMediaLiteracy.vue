<template>
  <section id="media-literacy" class="min-h-screen relative flex flex-col pt-32 pb-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <div class="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
      
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">الثقافة الإعلامية</h2>
        <div class="inline-block bg-primary/10 text-primary font-bold px-8 py-3 rounded-full mb-8 shadow-sm border border-primary/20">
          Media Literacy
        </div>
        <p class="text-2xl text-maintext/90 leading-relaxed font-semibold">
          ليست كل معلومة نراها صحيحة!
        </p>
      </div>

      <div class="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold text-maintext mb-6">ما هي الثقافة الإعلامية؟</h3>
          <div class="bg-accent/10 border-r-4 border-accent p-6 rounded-xl mb-8">
            <p class="text-xl font-bold text-slate-800 leading-relaxed">
              هي القدرة على تفسير المعلومات التي تم الحصول عليها من الوسائط بدقة.
            </p>
          </div>
          <ul class="space-y-4 text-lg text-slate-700">
            <li class="flex items-start gap-3">
              <CheckCircle class="text-green-500 shrink-0 mt-1" size="24" />
              <span>فهم المعلومات المعروضة.</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="text-green-500 shrink-0 mt-1" size="24" />
              <span>تحليلها وتفسيرها بشكل دقيق.</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle class="text-green-500 shrink-0 mt-1" size="24" />
              <span>عدم قبول كل ما يتم نشره بدون تفكير.</span>
            </li>
          </ul>
        </div>
        
        <div class="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <h4 class="text-xl font-bold text-maintext mb-6 flex items-center gap-2">
            <AlertTriangle class="text-orange-500" />
            فكر فيها...
          </h4>
          <div class="space-y-6">
            <div class="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
              <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Facebook size="24" />
              </div>
              <div>
                <p class="font-bold text-slate-800">خبر على Facebook</p>
                <p class="text-sm text-mutedtext">هل هو حقيقي أم إشاعة؟</p>
              </div>
            </div>
            
            <div class="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
              <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle size="24" />
              </div>
              <div>
                <p class="font-bold text-slate-800">رسالة WhatsApp عاجلة</p>
                <p class="text-sm text-mutedtext">هل يجب أن أشاركها فوراً؟</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
              <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <Youtube size="24" />
              </div>
              <div>
                <p class="font-bold text-slate-800">فيديو على YouTube</p>
                <p class="text-sm text-mutedtext">هل مجرد رؤية المعلومة يعني أنها صحيحة؟ <strong class="text-red-500">لا. يجب فهمها والتحقق منها.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle, AlertTriangle, Facebook, MessageCircle, Youtube } from 'lucide-vue-next'
</script>
