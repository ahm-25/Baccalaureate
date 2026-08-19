<template>
  <section id="real-world" class="py-24 bg-surface relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">نشوف JavaScript في أمثلة حقيقية</h2>
        <p class="text-2xl text-mutedtext max-w-2xl mx-auto leading-relaxed">
          إزاي البرمجة ممكن تحل مشاكل أو تنفذ مهام مختلفة؟
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Example 1 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transition-all group-hover:bg-blue-500/10"></div>
          <div class="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <User class="w-8 h-8 text-blue-500" />
            <h3 class="text-xl font-black text-maintext">بيانات طالب</h3>
          </div>
          <div class="mb-4">
            <span class="text-sm font-bold text-mutedtext bg-surface px-3 py-1 rounded-full mb-3 inline-block">المشكلة / الهدف:</span>
            <p class="text-lg font-bold text-maintext">عايزين نعرض اسم الطالب، عمره، ودرجته.</p>
          </div>
          <div class="bg-gray-900 rounded-2xl p-5 mb-4 text-left" dir="ltr">
            <pre class="font-mono text-sm leading-loose"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Ahmed"</span><span class="text-gray-300">);</span>
<span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">18</span><span class="text-gray-300">);</span>
<span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">90</span><span class="text-gray-300">);</span></code></pre>
          </div>
          <div class="bg-black border border-gray-700 rounded-xl p-4 mb-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold">Ahmed
18
90</pre>
          </div>
          <div class="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 font-bold text-center">
            البرنامج يعرض بيانات الطالب.
          </div>
        </div>

        <!-- Example 2 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-green-500/5 rounded-full blur-2xl transition-all group-hover:bg-green-500/10"></div>
          <div class="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <Award class="w-8 h-8 text-green-500" />
            <h3 class="text-xl font-black text-maintext">مجموع الدرجات</h3>
          </div>
          <div class="mb-4">
            <span class="text-sm font-bold text-mutedtext bg-surface px-3 py-1 rounded-full mb-3 inline-block">المشكلة / الهدف:</span>
            <p class="text-lg font-bold text-maintext">طالب جاب 40 في مادة و 35 في مادة، عايزين نعرف المجموع.</p>
          </div>
          <div class="bg-gray-900 rounded-2xl p-5 mb-4 text-left" dir="ltr">
            <pre class="font-mono text-sm leading-loose"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">40</span> <span class="text-white">+</span> <span class="text-orange-400">35</span><span class="text-gray-300">);</span></code></pre>
          </div>
          <div class="bg-black border border-gray-700 rounded-xl p-4 mb-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold">75</pre>
          </div>
          <div class="bg-green-50 text-green-800 p-4 rounded-xl border border-green-100 font-bold text-center">
            البرنامج يحسب مجموع درجتين.
          </div>
        </div>

        <!-- Example 3 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl transition-all group-hover:bg-yellow-500/10"></div>
          <div class="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <ShoppingCart class="w-8 h-8 text-yellow-500" />
            <h3 class="text-xl font-black text-maintext">حساب التسوق</h3>
          </div>
          <div class="mb-4">
            <span class="text-sm font-bold text-mutedtext bg-surface px-3 py-1 rounded-full mb-3 inline-block">المشكلة / الهدف:</span>
            <p class="text-lg font-bold text-maintext">اشتريت منتجين: الأول بـ 50 والثاني بـ 30. الإجمالي كام؟</p>
          </div>
          <div class="bg-gray-900 rounded-2xl p-5 mb-4 text-left" dir="ltr">
            <pre class="font-mono text-sm leading-loose"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">50</span> <span class="text-white">+</span> <span class="text-orange-400">30</span><span class="text-gray-300">);</span></code></pre>
          </div>
          <div class="bg-black border border-gray-700 rounded-xl p-4 mb-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold">80</pre>
          </div>
          <div class="bg-yellow-50 text-yellow-800 p-4 rounded-xl border border-yellow-100 font-bold text-center">
            البرنامج حسب إجمالي السعر.
          </div>
        </div>

        <!-- Example 4 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl transition-all group-hover:bg-purple-500/10"></div>
          <div class="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <Calculator class="w-8 h-8 text-purple-500" />
            <h3 class="text-xl font-black text-maintext">آلة حاسبة</h3>
          </div>
          <div class="mb-4">
            <span class="text-sm font-bold text-mutedtext bg-surface px-3 py-1 rounded-full mb-3 inline-block">المشكلة / الهدف:</span>
            <p class="text-lg font-bold text-maintext">عايزين نعمل طرح، ضرب، وقسمة.</p>
          </div>
          <div class="bg-gray-900 rounded-2xl p-5 mb-4 text-left" dir="ltr">
            <pre class="font-mono text-sm leading-loose"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">100</span> <span class="text-white">-</span> <span class="text-orange-400">25</span><span class="text-gray-300">);</span>
<span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">10</span> <span class="text-white">*</span> <span class="text-orange-400">5</span><span class="text-gray-300">);</span>
<span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">100</span> <span class="text-white">/</span> <span class="text-orange-400">4</span><span class="text-gray-300">);</span></code></pre>
          </div>
          <div class="bg-black border border-gray-700 rounded-xl p-4 mb-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold">75
50
25</pre>
          </div>
          <div class="bg-purple-50 text-purple-800 p-4 rounded-xl border border-purple-100 font-bold text-center">
            JavaScript تستطيع تنفيذ العمليات الحسابية (الجمع، الطرح، الضرب، القسمة).
          </div>
        </div>

        <!-- Example 5 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl transition-all group-hover:bg-orange-500/10"></div>
          <div class="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <Medal class="w-8 h-8 text-orange-500" />
            <h3 class="text-xl font-black text-maintext">نقاط في لعبة</h3>
          </div>
          <div class="mb-4">
            <span class="text-sm font-bold text-mutedtext bg-surface px-3 py-1 rounded-full mb-3 inline-block">المشكلة / الهدف:</span>
            <p class="text-lg font-bold text-maintext">لاعب جمع 80 نقطة، ثم 90 نقطة.</p>
          </div>
          <div class="bg-gray-900 rounded-2xl p-5 mb-4 text-left" dir="ltr">
            <pre class="font-mono text-sm leading-loose"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">80</span> <span class="text-white">+</span> <span class="text-orange-400">90</span><span class="text-gray-300">);</span></code></pre>
          </div>
          <div class="bg-black border border-gray-700 rounded-xl p-4 mb-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold">170</pre>
          </div>
          <div class="bg-orange-50 text-orange-800 p-4 rounded-xl border border-orange-100 font-bold text-center">
            ممكن نستخدم البرمجة في حساب مجموع النقاط.
          </div>
        </div>

        <!-- Example 6 -->
        <div class="bg-background rounded-3xl p-8 border border-border shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl transition-all group-hover:bg-pink-500/10"></div>
          <div class="flex items-center gap-3 mb-6 border-b border-border pb-4">
            <Hand class="w-8 h-8 text-pink-500" />
            <h3 class="text-xl font-black text-maintext">رسالة ترحيب</h3>
          </div>
          <div class="mb-4">
            <span class="text-sm font-bold text-mutedtext bg-surface px-3 py-1 rounded-full mb-3 inline-block">المشكلة / الهدف:</span>
            <p class="text-lg font-bold text-maintext">عايزين نرحب بالمستخدم لما يفتح البرنامج.</p>
          </div>
          <div class="bg-gray-900 rounded-2xl p-5 mb-4 text-left" dir="ltr">
            <pre class="font-mono text-sm leading-loose"><code class="text-white"><span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-green-400">"Welcome Ahmed!"</span><span class="text-gray-300">);</span></code></pre>
          </div>
          <div class="bg-black border border-gray-700 rounded-xl p-4 mb-6 text-left" dir="ltr">
            <pre class="font-mono text-green-400 font-bold">Welcome Ahmed!</pre>
          </div>
          <div class="bg-pink-50 text-pink-800 p-4 rounded-xl border border-pink-100 font-bold text-center">
            البرنامج يعرض رسالة ترحيب.
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User, Award, ShoppingCart, Calculator, Medal, Hand } from 'lucide-vue-next'
</script>
