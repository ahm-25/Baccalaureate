<template>
  <section id="next" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="bg-white/80 backdrop-blur-xl border border-white/50 p-12 md:p-16 rounded-[3rem] text-center max-w-2xl mx-auto shadow-2xl relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
      <div class="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-inner">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black mb-6 text-maintext tracking-tight">أول خطوة في JavaScript خلصت!</h2>
      
      <p class="text-xl text-mutedtext leading-relaxed font-medium mb-12">
        دلوقتي أنت فاهم أهمية JavaScript وكتبت أول كود بإيدك.
      </p>

      <div class="bg-surface border border-border p-6 rounded-2xl mb-12">
        <h4 class="text-lg font-bold text-primary mb-2">الدرس القادم:</h4>
        <p class="text-2xl font-black text-maintext">Variables & Data Types</p>
      </div>
      
      <button class="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
        الدرس القادم <span>←</span>
      </button>
    </div>
  </section>
</template>
