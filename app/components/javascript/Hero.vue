<template>
  <section id="hero" class="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 -right-[10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] animate-float"></div>
      <div class="absolute bottom-1/4 -left-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] animate-float" style="animation-delay: -3s"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      <div class="flex-1 text-right">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-border shadow-sm mb-8">
          <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span class="text-sm font-bold text-maintext">الثانية بكالوريا • JavaScript • الدرس الأول</span>
        </div>
        
        <h1 class="text-6xl md:text-8xl font-black text-maintext mb-6 tracking-tight leading-tight">
          أول خطوة في
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">JavaScript</span>
        </h1>
        
        <p class="text-3xl font-bold text-mutedtext mb-8 leading-relaxed">
          خلّي صفحات الويب تتفاعل معاك.
        </p>
        
        <p class="text-xl text-maintext/80 mb-12 max-w-2xl leading-relaxed">
          في الدرس ده هنتعرف على JavaScript، ونفهم دورها في الويب، ونكتب أول كود بإيدينا.
        </p>
        
        <div class="flex items-center gap-6">
          <button @click="startLesson" class="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-3">
            ابدأ الدرس <span>↓</span>
          </button>
          
          <div class="flex items-center gap-3 text-mutedtext font-medium text-lg">
            <span class="opacity-80">60–75 دقيقة</span>
          </div>
        </div>
      </div>
      
      <div class="flex-1 relative w-full h-[500px]">
        <div class="absolute inset-0 bg-surface rounded-[3rem] border border-border shadow-2xl p-8 flex flex-col items-center justify-center overflow-hidden">
          <div class="absolute top-4 left-4 right-4 flex justify-start gap-2">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          
          <!-- Animation sequence container -->
          <div class="relative w-full h-full flex flex-col items-center justify-center gap-8 mt-4">
             <div class="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">USER ACTION</div>
             <div class="text-3xl font-bold text-primary/40">↓</div>
             <div class="bg-gray-900 text-green-400 font-mono text-lg py-4 px-6 rounded-xl shadow-inner w-full max-w-sm text-left" dir="ltr">
               <span class="text-purple-400">button</span>.<span class="text-blue-400">onClick</span> = () => {<br>
               &nbsp;&nbsp;<span class="text-yellow-300">alert</span>(<span class="text-green-300">'Hello!'</span>);<br>
               }
             </div>
             <div class="text-3xl font-bold text-primary/40">↓</div>
             <div class="bg-white text-maintext border border-border px-8 py-4 rounded-xl shadow-2xl font-bold flex items-center gap-3">
               <span class="text-primary">✨</span> RESULT
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const startLesson = () => {
  const el = document.getElementById('opening')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
