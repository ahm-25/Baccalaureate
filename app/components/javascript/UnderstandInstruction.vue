<template>
  <section id="understand-instruction" class="py-24 bg-surface relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">إيه اللي حصل هنا؟</h2>
      </div>

      <div class="bg-background border border-border rounded-[2rem] p-10 shadow-xl mb-16">
        <div class="text-center mb-10 text-xl font-bold text-mutedtext">لما بنكتب الكود ده:</div>
        <div class="bg-gray-900 rounded-2xl p-6 text-center mb-12 max-w-lg mx-auto" dir="ltr">
          <code class="text-2xl font-mono text-white">
            <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Ahmed"</span><span class="text-gray-300">);</span>
          </code>
        </div>

        <!-- Step by step -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <!-- Connectors for Desktop -->
          <div class="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -z-10 transform -translate-y-1/2"></div>
          
          <div class="bg-surface border border-border p-6 rounded-2xl text-center shadow-sm relative group hover:-translate-y-2 transition-transform">
            <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-md">1</div>
            <Eye class="w-10 h-10 text-gray-500 mx-auto mb-3 mt-4" />
            <p class="font-bold text-maintext text-lg">البرنامج قرأ الأمر.</p>
          </div>
          
          <div class="bg-surface border border-border p-6 rounded-2xl text-center shadow-sm relative group hover:-translate-y-2 transition-transform">
            <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-md">2</div>
            <Brain class="w-10 h-10 text-gray-500 mx-auto mb-3 mt-4" />
            <p class="font-bold text-maintext text-lg">عرف إننا عايزين نعرض كلمة Ahmed.</p>
          </div>
          
          <div class="bg-surface border border-border p-6 rounded-2xl text-center shadow-sm relative group hover:-translate-y-2 transition-transform">
            <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-md">3</div>
            <Settings class="w-10 h-10 text-gray-500 mx-auto mb-3 mt-4" />
            <p class="font-bold text-maintext text-lg">نفذ الأمر.</p>
          </div>
          
          <div class="bg-green-50 border border-green-200 p-6 rounded-2xl text-center shadow-sm relative group hover:-translate-y-2 transition-transform">
            <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-md">4</div>
            <PartyPopper class="w-10 h-10 text-green-500 mx-auto mb-3 mt-4" />
            <p class="font-bold text-green-700 text-lg">ظهرت النتيجة.</p>
          </div>
        </div>
      </div>

      <!-- Sequential Execution -->
      <div class="bg-primary/5 rounded-[3rem] p-12 border border-primary/20 relative overflow-hidden">
        <h3 class="text-3xl font-black text-maintext mb-8 text-center">طيب لو كتبنا أكتر من أمر؟</h3>
        
        <div class="flex flex-col md:flex-row gap-10 items-center justify-center mb-10">
          
          <!-- Code -->
          <div class="bg-gray-900 rounded-2xl p-6 text-left shadow-lg w-full md:w-auto" dir="ltr">
            <pre class="text-xl font-mono leading-relaxed"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Ahmed"</span><span class="text-gray-300">);</span>
<span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Programming"</span><span class="text-gray-300">);</span>
<span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"JavaScript"</span><span class="text-gray-300">);</span></code></pre>
          </div>
          
          <ArrowLeft class="w-10 h-10 text-primary animate-pulse rotate-90 md:rotate-0" />
          
          <!-- Output -->
          <div class="bg-black border-2 border-gray-700 rounded-2xl p-6 text-left shadow-inner w-full md:w-auto min-w-[200px]" dir="ltr">
            <pre class="text-xl font-mono font-black text-white leading-relaxed">Ahmed
Programming
JavaScript</pre>
          </div>

        </div>

        <div class="text-center">
          <div class="inline-block bg-white px-8 py-4 rounded-xl shadow-md border-l-4 border-primary">
            <p class="text-2xl font-black text-maintext">
              "البرنامج بينفذ التعليمات <span class="text-primary">بالترتيب</span>، سطر ورا سطر."
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Eye, Brain, Settings, PartyPopper, ArrowLeft } from 'lucide-vue-next'
</script>
