<template>
  <section id="summary" class="py-24 bg-background relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <FileText class="w-6 h-6" />
          <span class="text-lg font-bold text-primary">المراجعة النهائية</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">ملخص الدرس</h2>
        <p class="text-2xl text-mutedtext font-medium">
          أهم 8 نقط لازم تفتكرهم من درس النهارده:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Summary Point 1 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Bot class="w-10 h-10 mb-4 text-blue-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            <span class="text-primary font-black">البرمجة</span> = كتابة تعليمات للكمبيوتر.
          </p>
        </div>

        <!-- Summary Point 2 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <ArrowDown class="w-10 h-10 mb-4 text-green-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            الكمبيوتر ينفذ التعليمات <span class="text-green-600 font-black">بالترتيب</span>.
          </p>
        </div>

        <!-- Summary Point 3 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Zap class="w-10 h-10 mb-4 text-yellow-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            <span class="text-[#D4B800] font-black" dir="ltr">JavaScript</span> هي لغة برمجة.
          </p>
        </div>

        <!-- Summary Point 4 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Monitor class="w-10 h-10 mb-4 text-purple-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10" dir="rtl">
            <span class="text-purple-600 font-black font-mono text-sm px-1 bg-purple-50 rounded" dir="ltr">console.log()</span> تستخدم لعرض قيمة أو رسالة.
          </p>
        </div>

        <!-- Summary Point 5 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-orange-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Database class="w-10 h-10 mb-4 text-orange-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            البرامج تتعامل مع <span class="text-orange-600 font-black">البيانات</span>.
          </p>
        </div>

        <!-- Summary Point 6 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Type class="w-10 h-10 mb-4 text-red-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            <span class="text-red-600 font-black">النصوص</span> تختلف عن <span class="text-blue-600 font-black">الأرقام</span>.
          </p>
        </div>

        <!-- Summary Point 7 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Calculator class="w-10 h-10 mb-4 text-indigo-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            JavaScript تستطيع تنفيذ <span class="text-indigo-600 font-black">العمليات الحسابية</span>.
          </p>
        </div>

        <!-- Summary Point 8 -->
        <div class="bg-surface rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-20 h-20 bg-pink-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
          <Brain class="w-10 h-10 mb-4 text-pink-500 relative z-10" />
          <p class="text-lg font-bold text-maintext leading-relaxed relative z-10">
            <span class="text-pink-600 font-black">التفكير في المشكلة</span> يأتي قبل كتابة الكود.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Bot, ArrowDown, Zap, Monitor, Database, Type, Calculator, Brain } from 'lucide-vue-next'
</script>
