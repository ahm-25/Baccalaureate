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
          <span class="text-sm font-bold text-maintext">الثانية بكالوريا • JavaScript • الدرس الثالث</span>
        </div>
        
        <h1 class="text-6xl md:text-8xl font-black text-maintext mb-6 tracking-tight leading-tight">
          إزاي نخلي البرنامج
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ياخد قرار؟</span>
        </h1>
        
        <p class="text-3xl font-bold text-mutedtext mb-8 leading-relaxed">
          البرنامج هيبدأ يفكر ويتصرف حسب الموقف
        </p>
        
        <p class="text-xl text-maintext/80 mb-12 max-w-2xl leading-relaxed">
          دلوقتي البرنامج مش بس هيخزن البيانات...
          <br>
          هنتعلم النهاردة إزاي نستخدم الشروط علشان نخلي JavaScript تتخذ قرارات.
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
          
          <!-- Animated decision tree -->
          <div class="relative w-full h-full flex flex-col items-center justify-center mt-4" dir="ltr">
            <div class="bg-primary/10 border border-primary/30 text-primary font-mono font-bold px-6 py-3 rounded-xl shadow-inner mb-6 relative">
              <span class="inline-block">CONDITION</span>
            </div>
            
            <div class="w-0.5 h-12 bg-border relative">
              <div class="absolute inset-0 bg-primary animate-pulse"></div>
            </div>
            
            <div class="w-64 h-0.5 bg-border relative flex justify-between">
              <div class="absolute inset-0 bg-gradient-to-r from-green-500 via-border to-red-500"></div>
              <div class="w-0.5 h-12 bg-green-500 absolute left-0 top-0"></div>
              <div class="w-0.5 h-12 bg-red-500 absolute right-0 top-0"></div>
            </div>
            
            <div class="w-64 flex justify-between mt-12">
              <div class="flex flex-col items-center gap-4 group w-1/2 -ml-6">
                <div class="text-green-500 font-bold text-lg animate-bounce" style="animation-duration: 2s">TRUE</div>
                <div class="text-green-500 font-bold text-xl">↓</div>
                <div class="bg-green-500/10 border border-green-500/30 text-green-500 font-mono font-bold px-4 py-2 rounded-xl shadow-inner text-center">
                  ACTION A
                </div>
              </div>
              
              <div class="flex flex-col items-center gap-4 group w-1/2 -mr-6">
                <div class="text-red-500 font-bold text-lg animate-bounce" style="animation-duration: 2s; animation-delay: 1s">FALSE</div>
                <div class="text-red-500 font-bold text-xl">↓</div>
                <div class="bg-red-500/10 border border-red-500/30 text-red-500 font-mono font-bold px-4 py-2 rounded-xl shadow-inner text-center">
                  ACTION B
                </div>
              </div>
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
