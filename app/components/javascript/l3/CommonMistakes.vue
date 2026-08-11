<template>
  <section id="common-mistakes" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 font-bold text-sm mb-8">
          <span>⚠️</span> أخطاء شائعة
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
          أخطاء لازم تاخد بالك منها
        </h2>
        
        <p class="text-xl text-mutedtext">
          تجنب الأخطاء دي وأنت بتكتب شروط (Conditions).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" dir="ltr">
        
        <!-- Mistake 1 -->
        <div class="bg-surface rounded-2xl overflow-hidden border border-border shadow-sm group hover:border-primary/50 transition-colors">
          <div class="p-6 bg-red-500/10 border-b border-red-500/20">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-red-500 font-bold">Wrong ❌</span>
              <span class="text-xs text-red-500/80">(استخدام = بدل ===)</span>
            </div>
            <pre class="font-mono text-sm text-red-400"><code>if (age = 18) {
  // error
}</code></pre>
          </div>
          <div class="p-6 bg-green-500/10">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-green-500 font-bold">Correct ✅</span>
            </div>
            <pre class="font-mono text-sm text-green-400"><code>if (age === 18) {
  // correct
}</code></pre>
          </div>
          <div class="p-4 text-right text-sm text-mutedtext border-t border-border" dir="rtl">
            <code class="text-red-500 bg-red-500/10 px-1 rounded">=</code> تستخدم لإسناد قيمة، أما <code class="text-green-500 bg-green-500/10 px-1 rounded">===</code> للمقارنة.
          </div>
        </div>

        <!-- Mistake 2 -->
        <div class="bg-surface rounded-2xl overflow-hidden border border-border shadow-sm group hover:border-primary/50 transition-colors">
          <div class="p-6 bg-red-500/10 border-b border-red-500/20">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-red-500 font-bold">Wrong ❌</span>
              <span class="text-xs text-red-500/80">(نسيان الأقواس)</span>
            </div>
            <pre class="font-mono text-sm text-red-400"><code>if age >= 18 {
  // SyntaxError
}</code></pre>
          </div>
          <div class="p-6 bg-green-500/10">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-green-500 font-bold">Correct ✅</span>
            </div>
            <pre class="font-mono text-sm text-green-400"><code>if (age >= 18) {
  // correct
}</code></pre>
          </div>
          <div class="p-4 text-right text-sm text-mutedtext border-t border-border" dir="rtl">
            لازم الشرط يكون بين أقواس <code class="text-maintext bg-background px-1 rounded">()</code>.
          </div>
        </div>

        <!-- Mistake 3 -->
        <div class="bg-surface rounded-2xl overflow-hidden border border-border shadow-sm group hover:border-primary/50 transition-colors">
          <div class="p-6 bg-red-500/10 border-b border-red-500/20">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-red-500 font-bold">Wrong ❌</span>
              <span class="text-xs text-red-500/80">(نسيان الأقواس المعقوفة)</span>
            </div>
            <pre class="font-mono text-sm text-red-400"><code>if (age >= 18)
  console.log("Yes");
  console.log("Always printed!");</code></pre>
          </div>
          <div class="p-6 bg-green-500/10">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-green-500 font-bold">Correct ✅</span>
            </div>
            <pre class="font-mono text-sm text-green-400"><code>if (age >= 18) {
  console.log("Yes");
}
console.log("Always printed!");</code></pre>
          </div>
          <div class="p-4 text-right text-sm text-mutedtext border-t border-border" dir="rtl">
            دايماً استخدم الأقواس المعقوفة <code class="text-maintext bg-background px-1 rounded">{}</code> لتحديد الكود التابع للشرط.
          </div>
        </div>

        <!-- Mistake 4 -->
        <div class="bg-surface rounded-2xl overflow-hidden border border-border shadow-sm group hover:border-primary/50 transition-colors">
          <div class="p-6 bg-red-500/10 border-b border-red-500/20">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-red-500 font-bold">Wrong ❌</span>
              <span class="text-xs text-red-500/80">(استخدام > بدل >=)</span>
            </div>
            <pre class="font-mono text-sm text-red-400"><code>// If passing score is 50
if (score > 50) {
  console.log("Passed");
} // 50 will FAIL!</code></pre>
          </div>
          <div class="p-6 bg-green-500/10">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-green-500 font-bold">Correct ✅</span>
            </div>
            <pre class="font-mono text-sm text-green-400"><code>if (score >= 50) {
  console.log("Passed");
} // 50 will PASS</code></pre>
          </div>
          <div class="p-4 text-right text-sm text-mutedtext border-t border-border" dir="rtl">
            لو القيمة نفسها مقبولة، استخدم <code class="text-green-500 bg-green-500/10 px-1 rounded">>=</code> مش بس <code class="text-red-500 bg-red-500/10 px-1 rounded">></code>.
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
