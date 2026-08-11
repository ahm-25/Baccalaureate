<template>
  <section id="next" class="min-h-screen relative flex items-center justify-center py-20 bg-background overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
    </div>
    
    <div class="max-w-4xl mx-auto px-6 w-full text-center z-10">
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-border shadow-sm mb-12">
        <span class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
        <span class="font-bold text-maintext">انتهى الدرس الثاني بنجاح!</span>
      </div>
      
      <h2 class="text-5xl md:text-7xl font-black text-maintext mb-8 leading-tight">
        دلوقتي البرنامج بقى يعرف <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">يحتفظ بالمعلومات</span>.
      </h2>
      
      <p class="text-3xl font-bold text-mutedtext mb-16">
        لكن...<br>
        إزاي نخلي البرنامج ياخد قرارات؟ 🤔
      </p>
      
      <div class="bg-surface border border-border rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
        <div class="absolute -right-10 -top-10 text-9xl opacity-5 transform group-hover:scale-110 group-hover:rotate-12 transition-all">❓</div>
        
        <div class="text-xl text-primary font-bold mb-4">في الدرس القادم:</div>
        <h3 class="text-4xl font-black text-maintext mb-8">الشروط والقرارات<br><span class="font-mono text-2xl text-mutedtext mt-4 inline-block">if / else</span></h3>
        
        <button class="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-10 py-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-4 mx-auto">
          الدرس القادم <span>←</span>
        </button>
      </div>
    </div>
  </section>
</template>
