<template>
  <section id="think-like-programmer" class="py-24 bg-background relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">قبل ما تكتب الكود... فكر</h2>
        <p class="text-2xl text-mutedtext max-w-2xl mx-auto leading-relaxed">
          أهم مهارة للمبرمج مش إنه يكتب كود بسرعة... لكن إنه <span class="text-primary font-bold">يفكر الأول</span>.
        </p>
      </div>

      <!-- The 6 Steps -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-20">
        
        <div class="bg-surface border border-border p-4 rounded-2xl text-center relative hover:-translate-y-2 transition-transform shadow-sm">
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black absolute -top-3 -right-3">1</div>
          <Brain class="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <h4 class="font-bold text-maintext text-sm">افهم المشكلة</h4>
        </div>
        
        <div class="bg-surface border border-border p-4 rounded-2xl text-center relative hover:-translate-y-2 transition-transform shadow-sm">
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black absolute -top-3 -right-3">2</div>
          <BarChart class="w-8 h-8 mx-auto mb-2 text-purple-500" />
          <h4 class="font-bold text-maintext text-sm">حدد البيانات</h4>
        </div>
        
        <div class="bg-surface border border-border p-4 rounded-2xl text-center relative hover:-translate-y-2 transition-transform shadow-sm">
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black absolute -top-3 -right-3">3</div>
          <Target class="w-8 h-8 mx-auto mb-2 text-red-500" />
          <h4 class="font-bold text-maintext text-sm">حدد المطلوب</h4>
        </div>
        
        <div class="bg-surface border border-border p-4 rounded-2xl text-center relative hover:-translate-y-2 transition-transform shadow-sm">
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black absolute -top-3 -right-3">4</div>
          <FileText class="w-8 h-8 mx-auto mb-2 text-orange-500" />
          <h4 class="font-bold text-maintext text-sm">حدد الخطوات</h4>
        </div>
        
        <div class="bg-surface border border-border p-4 rounded-2xl text-center relative hover:-translate-y-2 transition-transform shadow-sm">
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black absolute -top-3 -right-3">5</div>
          <Monitor class="w-8 h-8 mx-auto mb-2 text-indigo-500" />
          <h4 class="font-bold text-maintext text-sm">اكتب الكود</h4>
        </div>
        
        <div class="bg-surface border border-border p-4 rounded-2xl text-center relative hover:-translate-y-2 transition-transform shadow-sm">
          <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-black absolute -top-3 -right-3">6</div>
          <CheckCircle class="w-8 h-8 mx-auto mb-2 text-green-500" />
          <h4 class="font-bold text-maintext text-sm">اختبر النتيجة</h4>
        </div>
        
      </div>

      <!-- Complete Example -->
      <div class="bg-surface rounded-[3rem] p-10 md:p-16 border border-border shadow-2xl">
        <h3 class="text-3xl font-black text-maintext mb-10 text-center border-b border-border pb-6">تطبيق عملي</h3>
        
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          
          <!-- Thinking Process -->
          <div class="flex-1 w-full space-y-6">
            <div class="flex items-start gap-4">
              <span class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><Brain class="w-6 h-6" /></span>
              <div>
                <h4 class="text-sm font-bold text-mutedtext">المشكلة</h4>
                <p class="text-xl font-black text-maintext">"عايز أحسب مجموع درجتين."</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><BarChart class="w-6 h-6" /></span>
              <div>
                <h4 class="text-sm font-bold text-mutedtext">البيانات (Data)</h4>
                <div class="flex gap-2 mt-1">
                  <span class="bg-gray-100 px-3 py-1 rounded-lg text-lg font-bold" dir="ltr">70</span>
                  <span class="bg-gray-100 px-3 py-1 rounded-lg text-lg font-bold" dir="ltr">80</span>
                </div>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0"><Target class="w-6 h-6" /></span>
              <div>
                <h4 class="text-sm font-bold text-mutedtext">المطلوب</h4>
                <p class="text-lg font-bold text-maintext">حساب وعرض المجموع.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <span class="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0"><FileText class="w-6 h-6" /></span>
              <div>
                <h4 class="text-sm font-bold text-mutedtext">العملية (Operation)</h4>
                <p class="text-xl font-black text-maintext" dir="ltr">70 + 80</p>
              </div>
            </div>
          </div>

          <!-- Code & Output -->
          <div class="flex-1 w-full bg-background p-8 rounded-3xl border border-border">
            <h4 class="text-sm font-bold text-mutedtext mb-4 text-center">الكود والنتيجة</h4>
            
            <div class="bg-gray-900 rounded-2xl p-6 text-left mb-6 shadow-inner" dir="ltr">
              <code class="text-xl md:text-2xl font-mono text-white">
                <span class="text-blue-400">console</span><span class="text-gray-300">.</span><span class="text-yellow-200">log</span><span class="text-gray-300">(</span><span class="text-orange-400">70</span> <span class="text-white">+</span> <span class="text-orange-400">80</span><span class="text-gray-300">);</span>
              </code>
            </div>
            
            <div class="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden">
              <span class="text-sm font-bold text-green-600 absolute top-2 left-4">Output</span>
              <div class="text-5xl font-mono font-black text-green-700" dir="ltr">150</div>
            </div>
          </div>

        </div>

        <div class="mt-12 text-center bg-primary/5 p-6 rounded-2xl border border-primary/20">
          <p class="text-2xl font-bold text-primary">
            "لاحظ إننا فكرنا في المشكلة الأول، وبعدها كتبنا الكود."
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Brain, BarChart, Target, FileText, Monitor, CheckCircle } from 'lucide-vue-next'
</script>
