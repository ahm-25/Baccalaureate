<template>
  <section id="summary" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-12">إيه اللي اتعلمناه النهاردة؟</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">1</div>
          <div>
            <h3 class="text-xl font-bold text-maintext mb-2">Variable</h3>
            <p class="text-mutedtext leading-relaxed">مكان بنخزن فيه قيمة عشان نستخدمها بعدين (زي الصندوق).</p>
          </div>
        </div>
        
        <div class="bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">2</div>
          <div>
            <h3 class="text-xl font-bold text-maintext mb-2 font-mono">let</h3>
            <p class="text-mutedtext leading-relaxed">بنستخدمها للقيم اللي ممكن تتغير بعدين.</p>
          </div>
        </div>

        <div class="bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">3</div>
          <div>
            <h3 class="text-xl font-bold text-maintext mb-2 font-mono">const</h3>
            <p class="text-mutedtext leading-relaxed">بنستخدمها للثوابت والقيم اللي مش محتاجين نعيد إسنادها.</p>
          </div>
        </div>

        <div class="bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">4</div>
          <div>
            <h3 class="text-xl font-bold text-maintext mb-2 font-mono">String</h3>
            <p class="text-mutedtext leading-relaxed">نص أو كلام، ولازم نحطه بين علامات تنصيص <code class="bg-surface px-1 rounded text-sm font-mono">""</code>.</p>
          </div>
        </div>

        <div class="bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">5</div>
          <div>
            <h3 class="text-xl font-bold text-maintext mb-2 font-mono">Number</h3>
            <p class="text-mutedtext leading-relaxed">الأرقام، وبنستخدمها في الحسابات بدون علامات تنصيص.</p>
          </div>
        </div>

        <div class="bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">6</div>
          <div>
            <h3 class="text-xl font-bold text-maintext mb-2 font-mono">Boolean</h3>
            <p class="text-mutedtext leading-relaxed">حالة ليها نتيجتين بس: <code class="text-green-500 font-mono">true</code> أو <code class="text-red-500 font-mono">false</code>.</p>
          </div>
        </div>

      </div>
      
      <div class="mt-8 bg-background border border-border rounded-3xl p-6 flex items-start gap-4 text-right shadow-sm w-full md:w-1/2 mx-auto">
        <div class="w-12 h-12 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0">7</div>
        <div>
          <h3 class="text-xl font-bold text-maintext mb-2 font-mono">console.log()</h3>
          <p class="text-mutedtext leading-relaxed">بتعرض قيمة المتغير عشان نقدر نشوفها ونتأكد منها.</p>
        </div>
      </div>
      
    </div>
  </section>
</template>
