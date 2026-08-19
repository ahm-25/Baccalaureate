<template>
  <section id="common-mistakes" class="py-24 bg-surface relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">أخطاء شائعة للمبتدئين</h2>
        <p class="text-2xl text-mutedtext">الغلط في البرمجة شيء طبيعي جداً، دي أشهر الأخطاء اللي ممكن تقابلك في البداية.</p>
      </div>

      <div class="space-y-8 mb-16">
        
        <!-- Mistake 1 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-1 bg-red-50 border border-red-200 rounded-2xl p-6 relative overflow-hidden">
              <XCircle class="absolute -right-4 -top-4 w-20 h-20 opacity-20 text-red-500" />
              <h3 class="text-xl font-black text-red-700 mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"><XCircle class="w-5 h-5 text-red-600" /></span>
                خطأ
              </h3>
              <div class="bg-gray-900 rounded-xl p-4 text-left" dir="ltr">
                <code class="text-xl font-mono text-white">
                  <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(Hello);</span>
                </code>
              </div>
            </div>
            
            <div class="flex-1 bg-green-50 border border-green-200 rounded-2xl p-6 relative overflow-hidden">
              <CheckCircle class="absolute -right-4 -top-4 w-20 h-20 opacity-20 text-green-500" />
              <h3 class="text-xl font-black text-green-700 mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle class="w-5 h-5 text-green-600" /></span>
                صح
              </h3>
              <div class="bg-gray-900 rounded-xl p-4 text-left" dir="ltr">
                <code class="text-xl font-mono text-white">
                  <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Hello"</span><span class="text-gray-300">);</span>
                </code>
              </div>
            </div>
          </div>
          <div class="mt-6 text-center">
            <p class="text-lg font-bold text-maintext bg-surface px-6 py-3 rounded-xl inline-block border border-border">
              "Hello نص، لذلك لازم نضعه بين علامات تنصيص <span dir="ltr" class="font-mono font-black text-primary px-2">" "</span>."
            </p>
          </div>
        </div>

        <!-- Mistake 2 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-1 bg-red-50 border border-red-200 rounded-2xl p-6 relative overflow-hidden">
              <XCircle class="absolute -right-4 -top-4 w-20 h-20 opacity-20 text-red-500" />
              <h3 class="text-xl font-black text-red-700 mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"><XCircle class="w-5 h-5 text-red-600" /></span>
                خطأ
              </h3>
              <div class="bg-gray-900 rounded-xl p-4 text-left" dir="ltr">
                <code class="text-xl font-mono text-white">
                  <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Ahmed"</span>
                </code>
              </div>
            </div>
            
            <div class="flex-1 bg-green-50 border border-green-200 rounded-2xl p-6 relative overflow-hidden">
              <CheckCircle class="absolute -right-4 -top-4 w-20 h-20 opacity-20 text-green-500" />
              <h3 class="text-xl font-black text-green-700 mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle class="w-5 h-5 text-green-600" /></span>
                صح
              </h3>
              <div class="bg-gray-900 rounded-xl p-4 text-left" dir="ltr">
                <code class="text-xl font-mono text-white">
                  <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Ahmed"</span><span class="text-gray-300 bg-green-500/30 font-black">);</span>
                </code>
              </div>
            </div>
          </div>
          <div class="mt-6 text-center">
            <p class="text-lg font-bold text-maintext bg-surface px-6 py-3 rounded-xl inline-block border border-border">
              "لازم نقفل القوس <span dir="ltr" class="font-mono font-black text-primary px-2">)</span> بعد ما نفتح القوس <span dir="ltr" class="font-mono font-black text-primary px-2">(</span>."
            </p>
          </div>
        </div>

        <!-- Mistake 3 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 relative overflow-hidden">
              <HelpCircle class="absolute -right-4 -top-4 w-20 h-20 opacity-20 text-gray-500" />
              <h3 class="text-xl font-black text-gray-700 mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><HelpCircle class="w-5 h-5 text-gray-600" /></span>
                الطالب متوقع
              </h3>
              <div class="bg-gray-900 rounded-xl p-4 text-left mb-4" dir="ltr">
                <code class="text-xl font-mono text-white">
                  <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"10"</span> <span class="text-white">+</span> <span class="text-green-400">"20"</span><span class="text-gray-300">);</span>
                </code>
              </div>
              <div class="bg-white border border-gray-200 rounded-xl p-3 text-center text-xl font-bold text-gray-400" dir="ltr">
                30
              </div>
            </div>
            
            <div class="flex-1 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 relative overflow-hidden">
              <AlertCircle class="absolute -right-4 -top-4 w-20 h-20 opacity-20 text-yellow-500" />
              <h3 class="text-xl font-black text-yellow-700 mb-4 flex items-center gap-2">
                <span class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center"><AlertCircle class="w-5 h-5 text-yellow-600" /></span>
                النتيجة الحقيقية
              </h3>
              <div class="bg-gray-900 rounded-xl p-4 text-left mb-4" dir="ltr">
                <code class="text-xl font-mono text-white">
                  <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"10"</span> <span class="text-white">+</span> <span class="text-green-400">"20"</span><span class="text-gray-300">);</span>
                </code>
              </div>
              <div class="bg-white border border-yellow-300 rounded-xl p-3 text-center text-xl font-black text-red-600 shadow-sm" dir="ltr">
                1020
              </div>
            </div>
          </div>
          <div class="mt-6 text-center">
            <p class="text-lg font-bold text-maintext bg-surface px-6 py-3 rounded-xl inline-block border border-border">
              "لأن القيمتين نصوص، وليس أرقامًا."
            </p>
            <p class="text-primary font-bold mt-2">
              (هنتعمق أكتر في أنواع البيانات بعدين <Rocket class="inline w-5 h-5" />)
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { XCircle, CheckCircle, HelpCircle, AlertCircle, Rocket } from 'lucide-vue-next'
</script>
