<template>
  <section id="summary" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-4xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">لو هتفتكر 6 حاجات من الدرس...</h2>
        <p class="text-2xl text-mutedtext">الخلاصة اللي محتاج تطلع بيها من الدرس الأول.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div class="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">1</div>
          <p class="text-xl font-bold text-maintext mt-1">JavaScript لغة برمجة.</p>
        </div>
        
        <div class="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div class="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">2</div>
          <p class="text-xl font-bold text-maintext mt-1">تُضيف التفاعل والسلوك للمواقع.</p>
        </div>
        
        <div class="bg-orange-50 p-6 rounded-2xl border border-orange-200 shadow-sm flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold flex items-center justify-center shrink-0">3</div>
          <p class="text-xl font-bold text-orange-900 mt-1">HTML = Structure (الهيكل)</p>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-sm flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-500 font-bold flex items-center justify-center shrink-0">4</div>
          <p class="text-xl font-bold text-blue-900 mt-1">CSS = Style (الشكل)</p>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 shadow-sm flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 font-bold flex items-center justify-center shrink-0">5</div>
          <p class="text-xl font-bold text-yellow-900 mt-1">JavaScript = Behavior (السلوك)</p>
        </div>
        
        <div class="bg-surface p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4 hover:border-primary/50 transition-colors">
          <div class="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">6</div>
          <p class="text-xl font-bold text-maintext mt-1"><code class="text-primary bg-primary/10 px-2 rounded">console.log()</code> تعرض النتائج.</p>
        </div>
      </div>
    </div>
  </section>
</template>
