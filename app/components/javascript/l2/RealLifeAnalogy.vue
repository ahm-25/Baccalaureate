<template>
  <section id="real-life" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-6xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-16">خلينا نشوفها في حياتنا</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Example 1 -->
        <div class="bg-background border border-border rounded-3xl p-8 flex flex-col items-center shadow-lg group hover:border-primary transition-all">
          <div class="text-xl font-bold text-mutedtext mb-6">اسم الطالب</div>
          
          <div class="w-full aspect-square max-w-[200px] border-2 border-primary/30 rounded-2xl flex items-center justify-center bg-primary/5 relative group-hover:bg-primary/10 transition-all">
            <div class="absolute -top-4 bg-primary text-white text-xs font-mono font-bold px-3 py-1 rounded-full">Label</div>
            <div class="text-3xl font-bold text-primary font-mono text-center">"Ahmed"</div>
          </div>
          
          <div class="mt-6 font-mono font-bold text-xl text-maintext" dir="ltr">studentName</div>
        </div>

        <!-- Example 2 -->
        <div class="bg-background border border-border rounded-3xl p-8 flex flex-col items-center shadow-lg group hover:border-accent transition-all">
          <div class="text-xl font-bold text-mutedtext mb-6">السن</div>
          
          <div class="w-full aspect-square max-w-[200px] border-2 border-accent/30 rounded-2xl flex items-center justify-center bg-accent/5 relative group-hover:bg-accent/10 transition-all">
            <div class="absolute -top-4 bg-accent text-white text-xs font-mono font-bold px-3 py-1 rounded-full">Label</div>
            <div class="text-5xl font-black text-accent font-mono text-center">17</div>
          </div>
          
          <div class="mt-6 font-mono font-bold text-xl text-maintext" dir="ltr">age</div>
        </div>

        <!-- Example 3 -->
        <div class="bg-background border border-border rounded-3xl p-8 flex flex-col items-center shadow-lg group hover:border-green-500 transition-all">
          <div class="text-xl font-bold text-mutedtext mb-6">الدرجة</div>
          
          <div class="w-full aspect-square max-w-[200px] border-2 border-green-500/30 rounded-2xl flex items-center justify-center bg-green-500/5 relative group-hover:bg-green-500/10 transition-all">
            <div class="absolute -top-4 bg-green-500 text-white text-xs font-mono font-bold px-3 py-1 rounded-full">Label</div>
            <div class="text-5xl font-black text-green-500 font-mono text-center">95</div>
          </div>
          
          <div class="mt-6 font-mono font-bold text-xl text-maintext" dir="ltr">score</div>
        </div>
      </div>
      
      <div class="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6">
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-primary animate-pulse"></span>
          <span class="text-xl font-bold text-maintext">الصندوق = <span class="font-mono text-primary">Variable</span></span>
        </div>
        <div class="hidden md:block w-px h-12 bg-border"></div>
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-accent animate-pulse" style="animation-delay: 0.5s"></span>
          <span class="text-xl font-bold text-maintext">الورقة اللي عليه = <span class="font-mono text-accent">Name</span></span>
        </div>
        <div class="hidden md:block w-px h-12 bg-border"></div>
        <div class="flex items-center gap-3">
          <span class="w-4 h-4 rounded-full bg-green-500 animate-pulse" style="animation-delay: 1s"></span>
          <span class="text-xl font-bold text-maintext">اللي جواه = <span class="font-mono text-green-500">Value</span></span>
        </div>
      </div>
    </div>
  </section>
</template>
