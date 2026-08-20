<template>
  <section id="communication-journey" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <div class="max-w-6xl mx-auto w-full z-10 text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">التكنولوجيا غيّرت طريقة تواصلنا</h2>
      <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
        في الماضي قد تحتاج الرسالة إلى وقت طويل للوصول، أما اليوم يمكن إرسال المعلومات إلى شخص في مكان آخر خلال لحظات.
      </p>
    </div>

    <div class="max-w-5xl mx-auto w-full">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
        <!-- Connecting Line -->
        <div class="hidden md:block absolute top-12 left-8 right-8 h-1 bg-gradient-to-r from-gray-300 to-primary z-0 rounded-full"></div>
        
        <div class="relative z-10 flex flex-col items-center group">
          <div class="w-24 h-24 rounded-2xl bg-white border-2 border-border flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform shadow-sm">
            <Mail class="w-10 h-10 text-gray-400" />
          </div>
          <h4 class="font-bold text-mutedtext">البريد التقليدي</h4>
          <span class="text-sm text-gray-400 mt-1">أيام/أسابيع</span>
        </div>

        <div class="relative z-10 flex flex-col items-center group">
          <div class="w-24 h-24 rounded-2xl bg-white border-2 border-border flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform shadow-sm">
            <Phone class="w-10 h-10 text-amber-500" />
          </div>
          <h4 class="font-bold text-mutedtext">الهاتف الأرضي</h4>
          <span class="text-sm text-gray-400 mt-1">صوت فقط</span>
        </div>

        <div class="relative z-10 flex flex-col items-center group">
          <div class="w-24 h-24 rounded-2xl bg-white border-2 border-border flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform shadow-sm">
            <AtSign class="w-10 h-10 text-blue-500" />
          </div>
          <h4 class="font-bold text-mutedtext">البريد الإلكتروني</h4>
          <span class="text-sm text-gray-400 mt-1">دقائق</span>
        </div>

        <div class="relative z-10 flex flex-col items-center group">
          <div class="w-24 h-24 rounded-2xl bg-white border-2 border-border flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform shadow-sm">
            <Share2 class="w-10 h-10 text-purple-500" />
          </div>
          <h4 class="font-bold text-mutedtext">شبكات التواصل</h4>
          <span class="text-sm text-gray-400 mt-1">مشاركة عامة</span>
        </div>

        <div class="relative z-10 flex flex-col items-center group">
          <div class="w-24 h-24 rounded-2xl bg-primary border-4 border-primary/20 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform shadow-lg shadow-primary/20 animate-pulse">
            <Zap class="w-10 h-10 text-white" />
          </div>
          <h4 class="font-bold text-primary text-lg">التواصل الفوري</h4>
          <span class="text-sm font-bold text-primary/70 mt-1">لحظات</span>
        </div>
      </div>
      
      <!-- Explanation Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-start gap-4">
          <Clock class="w-8 h-8 text-blue-500 shrink-0" />
          <div>
            <h4 class="text-lg font-bold text-maintext mb-2">السرعة</h4>
            <p class="text-mutedtext font-medium">من الانتظار لأيام إلى الإرسال والاستقبال في نفس اللحظة.</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-start gap-4">
          <Globe2 class="w-8 h-8 text-green-500 shrink-0" />
          <div>
            <h4 class="text-lg font-bold text-maintext mb-2">المسافة</h4>
            <p class="text-mutedtext font-medium">العالم كله أصبح متصلاً، يمكنك التحدث مع أي شخص في قارة أخرى مجاناً.</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-start gap-4">
          <Users class="w-8 h-8 text-purple-500 shrink-0" />
          <div>
            <h4 class="text-lg font-bold text-maintext mb-2">سهولة الوصول</h4>
            <p class="text-mutedtext font-medium">الجميع يمتلك أداة تواصل في جيبه طوال الوقت.</p>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm flex items-start gap-4">
          <Files class="w-8 h-8 text-amber-500 shrink-0" />
          <div>
            <h4 class="text-lg font-bold text-maintext mb-2">كمية المعلومات</h4>
            <p class="text-mutedtext font-medium">لم يعد التواصل نصاً فقط، بل صور وفيديوهات ومستندات ضخمة.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Phone, AtSign, Share2, Zap, Clock, Globe2, Users, Files } from 'lucide-vue-next'
</script>
