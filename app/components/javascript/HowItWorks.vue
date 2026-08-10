<template>
  <section id="how-it-works" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">إيه اللي بيحصل لما أكتب JavaScript؟</h2>
        <p class="text-2xl text-mutedtext">رحلة الكود من لحظة كتابته لحد ما يتنفذ وتشوف نتيجته.</p>
      </div>

      <div class="bg-surface p-12 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          
          <!-- Step 1: Code -->
          <div class="flex-1 w-full bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 relative group">
            <div class="absolute -top-4 -right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-surface z-20">1</div>
            <h3 class="text-gray-400 text-sm font-bold mb-4 font-sans uppercase tracking-widest">Code</h3>
            <div class="font-mono text-green-400 text-lg" dir="ltr">
              <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-300">"Hello"</span>);
            </div>
            <div class="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>

          <!-- Arrow -->
          <div class="flex-shrink-0 text-4xl text-primary/40 lg:rotate-0 rotate-90">➔</div>

          <!-- Step 2: Engine -->
          <div class="flex-1 w-full bg-white rounded-2xl p-6 shadow-lg border border-border relative group">
            <div class="absolute -top-4 -right-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-surface z-20">2</div>
            <h3 class="text-accent text-sm font-bold mb-4 font-sans uppercase tracking-widest">JavaScript Engine</h3>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent animate-spin-slow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              </div>
              <p class="text-maintext font-bold leading-tight">المتصفح بيقرأ الكود<br>ويفهم المطلوب</p>
            </div>
          </div>

          <!-- Arrow -->
          <div class="flex-shrink-0 text-4xl text-primary/40 lg:rotate-0 rotate-90">➔</div>

          <!-- Step 3: Result -->
          <div class="flex-1 w-full bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 relative group">
            <div class="absolute -top-4 -right-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md border-4 border-surface z-20">3</div>
            <h3 class="text-gray-400 text-sm font-bold mb-4 font-sans uppercase tracking-widest flex justify-between">
              <span>Console</span>
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </h3>
            <div class="font-mono text-gray-100 text-lg" dir="ltr">
              Hello
            </div>
          </div>
        </div>

        <div class="mt-16 bg-primary/10 border border-primary/20 rounded-2xl p-6 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 mt-1">
            <span class="font-bold text-xl">!</span>
          </div>
          <div>
            <h4 class="text-xl font-bold text-primary mb-2">للمعلومة فقط:</h4>
            <p class="text-maintext/80 leading-relaxed text-lg">
              عشان الكود يشتغل، المتصفح (زي Chrome أو Safari) جواه حاجة اسمها <strong>مُحرك (Engine)</strong> وظيفته إنه يترجم أوامرك للغة يفهمها الكمبيوتر وينفذها فوراً.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 4s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
