<template>
  <section id="xai" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">4. الذكاء الاصطناعي القابل للتفسير (XAI)</h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto p-4 bg-indigo-50 border border-indigo-100 rounded-2xl font-medium">
          <strong class="text-indigo-700">الذكاء الاصطناعي القابل للتفسير (XAI)</strong> هو أساليب تساعد البشر على فهم العوامل التي أسهمت في وصول النظام إلى مخرج أو قرار معين.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-xl font-bold text-slate-800 mb-4">لماذا نحتاج إليه؟</h3>
          <p class="text-slate-600 mb-4 text-lg">
            عندما تكون آلية الوصول إلى النتيجة غير واضحة، يصعب:
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 bg-rose-50 text-rose-800 font-medium p-3 rounded-xl border border-rose-100">
              <span class="text-rose-500">❌</span> تقييم القرار
            </li>
            <li class="flex items-center gap-3 bg-rose-50 text-rose-800 font-medium p-3 rounded-xl border border-rose-100">
              <span class="text-rose-500">❌</span> اكتشاف الأخطاء
            </li>
            <li class="flex items-center gap-3 bg-rose-50 text-rose-800 font-medium p-3 rounded-xl border border-rose-100">
              <span class="text-rose-500">❌</span> اكتشاف التحيز
            </li>
          </ul>
        </div>
        
        <div class="bg-gradient-to-b from-slate-50 to-indigo-50/50 p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center gap-4">
          <div class="bg-white border-2 border-slate-200 px-6 py-3 rounded-xl font-bold text-slate-700 w-full text-center">AI System</div>
          <div class="text-slate-400">↓</div>
          <div class="bg-indigo-100 border-2 border-indigo-200 text-indigo-800 px-6 py-3 rounded-xl font-bold w-full text-center">Decision (القرار)</div>
          <div class="text-slate-400">↓</div>
          <div class="text-xl font-bold text-rose-600 my-2">Why? (لماذا؟)</div>
          <div class="text-slate-400">↓</div>
          <div class="bg-purple-100 border-2 border-purple-200 text-purple-800 px-6 py-3 rounded-xl font-bold w-full text-center">Explainable AI (XAI)</div>
          <div class="text-slate-400">↓</div>
          <div class="bg-emerald-100 border-2 border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-bold w-full text-center">Understanding the factors behind the decision</div>
        </div>
      </div>
    </div>
  </section>
</template>
