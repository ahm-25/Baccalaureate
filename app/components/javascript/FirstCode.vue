<template>
  <section id="first-code" class="py-24 bg-background relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 flex items-center justify-center gap-4">أول كود ليك في JavaScript <Rocket class="w-10 h-10 text-primary" /></h2>
        <div class="bg-surface border-2 border-border p-6 rounded-3xl max-w-3xl mx-auto inline-block">
          <p class="text-2xl text-mutedtext font-bold">
            هنتعرف على أمر اسمه <code class="text-primary font-black bg-primary/10 px-3 py-1 rounded-lg" dir="ltr">console.log()</code>
          </p>
          <p class="text-xl text-mutedtext mt-4">
            "الأمر ده بنستخدمه علشان <span class="text-maintext font-black">نعرض قيمة أو رسالة</span> للكمبيوتر علشان نشوفها."
          </p>
        </div>
      </div>

      <div class="space-y-12">
        <!-- Example 1 -->
        <div class="bg-surface rounded-[2rem] p-8 border border-border shadow-lg flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 w-full">
            <h3 class="text-xl font-bold text-mutedtext mb-4">كتابة الكود:</h3>
            <div class="bg-gray-900 rounded-2xl p-6 text-left" dir="ltr">
              <code class="text-2xl font-mono text-white">
                <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Hello"</span><span class="text-gray-300">);</span>
              </code>
            </div>
          </div>
          <ArrowLeft class="w-10 h-10 text-gray-400 rotate-90 md:rotate-0" />
          <div class="flex-1 w-full">
            <h3 class="text-xl font-bold text-mutedtext mb-4">النتيجة:</h3>
            <div class="bg-black border-2 border-gray-700 rounded-2xl p-6 text-left shadow-inner h-full min-h-[5rem] flex items-center" dir="ltr">
              <span class="text-2xl font-mono text-white font-black">Hello</span>
            </div>
          </div>
        </div>

        <!-- Example 2 -->
        <div class="bg-surface rounded-[2rem] p-8 border border-border shadow-lg flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 w-full">
            <h3 class="text-xl font-bold text-mutedtext mb-4">مثال آخر:</h3>
            <div class="bg-gray-900 rounded-2xl p-6 text-left" dir="ltr">
              <code class="text-2xl font-mono text-white">
                <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Ahmed"</span><span class="text-gray-300">);</span>
              </code>
            </div>
          </div>
          <ArrowLeft class="w-10 h-10 text-gray-400 rotate-90 md:rotate-0" />
          <div class="flex-1 w-full">
            <h3 class="text-xl font-bold text-mutedtext mb-4">النتيجة:</h3>
            <div class="bg-black border-2 border-gray-700 rounded-2xl p-6 text-left shadow-inner h-full min-h-[5rem] flex items-center" dir="ltr">
              <span class="text-2xl font-mono text-white font-black">Ahmed</span>
            </div>
          </div>
        </div>

        <!-- Example 3 -->
        <div class="bg-surface rounded-[2rem] p-8 border border-border shadow-lg flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-1 w-full">
            <h3 class="text-xl font-bold text-mutedtext mb-4">نص طويل شوية:</h3>
            <div class="bg-gray-900 rounded-2xl p-6 text-left" dir="ltr">
              <code class="text-2xl font-mono text-white">
                <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Welcome to JavaScript"</span><span class="text-gray-300">);</span>
              </code>
            </div>
          </div>
          <ArrowLeft class="w-10 h-10 text-gray-400 rotate-90 md:rotate-0" />
          <div class="flex-1 w-full">
            <h3 class="text-xl font-bold text-mutedtext mb-4">النتيجة:</h3>
            <div class="bg-black border-2 border-gray-700 rounded-2xl p-6 text-left shadow-inner h-full min-h-[5rem] flex items-center" dir="ltr">
              <span class="text-2xl font-mono text-white font-black">Welcome to JavaScript</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Rocket, ArrowLeft } from 'lucide-vue-next'
</script>
