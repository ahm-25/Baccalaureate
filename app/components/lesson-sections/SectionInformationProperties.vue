<template>
  <section id="properties" class="min-h-screen relative flex flex-col pt-32 pb-24 px-6 sm:px-12 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-16">
      
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">خصائص المعلومات</h2>
        <div class="inline-block bg-accent/10 text-accent font-bold px-8 py-3 rounded-full mb-8 shadow-sm border border-accent/20">
          ليه المعلومات مختلفة عن الأشياء المادية؟
        </div>
        <p class="text-2xl text-maintext/90 leading-relaxed font-semibold">
          المعلومات ليست كالأشياء المادية، بل تتميز بخصائص تجعل التعامل معها فريداً، وأهم هذه الخصائص هي:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <!-- Persistence -->
        <div class="bg-surface p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <History size="32" stroke-width="2" />
          </div>
          <h3 class="text-2xl font-bold text-maintext mb-4">الاستمرارية<br><span class="text-sm text-mutedtext block mt-1">Persistence</span></h3>
          <p class="text-lg text-slate-700 leading-relaxed mb-6">
            بمجرد إنشاء المعلومات، لا يمكن محوها بالكامل بسهولة.
          </p>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <strong class="text-primary block mb-2">مثال:</strong>
            الشائعات أو المعلومات التي تم نشرها على الإنترنت قد تستمر وتنتشر حتى بعد حذف المنشور الأصلي.
          </div>
        </div>

        <!-- Reproducibility -->
        <div class="bg-surface p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <Copy size="32" stroke-width="2" />
          </div>
          <h3 class="text-2xl font-bold text-maintext mb-4">قابلية التكرار<br><span class="text-sm text-mutedtext block mt-1">Reproducibility</span></h3>
          <p class="text-lg text-slate-700 leading-relaxed mb-6">
            إمكانية نسخ المعلومات بسهولة وبكميات كبيرة دون أن تفقد جودتها.
          </p>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <strong class="text-primary block mb-2">مثال:</strong>
            يمكن نسخ ملف موسيقى أو فيديو أو مستند مرات كثيرة جداً دون أي فقدان في الجودة.
          </div>
        </div>

        <!-- Propagation -->
        <div class="bg-surface p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
            <Share2 size="32" stroke-width="2" />
          </div>
          <h3 class="text-2xl font-bold text-maintext mb-4">الانتشار<br><span class="text-sm text-mutedtext block mt-1">Propagation</span></h3>
          <p class="text-lg text-slate-700 leading-relaxed mb-6">
            من السهل توصيل المعلومات ونشرها عبر مسافات بعيدة.
          </p>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <strong class="text-primary block mb-2">مثال:</strong>
            رسالة أو خبر يمكن أن ينتشر عبر الإنترنت ويصل لملايين الأشخاص في ثوانٍ معدودة.
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { History, Copy, Share2 } from 'lucide-vue-next'
</script>
