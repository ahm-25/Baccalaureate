<template>
  <section id="data-types" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-6">طيب القيمة اللي جوه المتغير نوعها إيه؟</h2>
      
      <p class="text-2xl text-mutedtext mb-16 max-w-3xl mx-auto leading-relaxed">
        في البرمجة، البيانات ليها أنواع مختلفة. إحنا هنتعلم أشهر 3 أنواع بيانات في JavaScript اللي هنستخدمهم في أغلب مشاريعنا.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- String -->
        <div class="bg-background border-2 border-blue-500/30 rounded-3xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform shadow-lg shadow-blue-500/10 cursor-pointer group">
          <div class="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
            📝
          </div>
          <h3 class="text-3xl font-mono font-bold text-blue-400 mb-4">String</h3>
          <p class="text-lg text-mutedtext">النصوص والكلمات</p>
        </div>
        
        <!-- Number -->
        <div class="bg-background border-2 border-orange-500/30 rounded-3xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform shadow-lg shadow-orange-500/10 cursor-pointer group">
          <div class="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
            🔢
          </div>
          <h3 class="text-3xl font-mono font-bold text-orange-400 mb-4">Number</h3>
          <p class="text-lg text-mutedtext">الأرقام والحسابات</p>
        </div>
        
        <!-- Boolean -->
        <div class="bg-background border-2 border-purple-500/30 rounded-3xl p-8 flex flex-col items-center hover:-translate-y-2 transition-transform shadow-lg shadow-purple-500/10 cursor-pointer group">
          <div class="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
            ✅
          </div>
          <h3 class="text-3xl font-mono font-bold text-purple-400 mb-4">Boolean</h3>
          <p class="text-lg text-mutedtext">صح أو غلط (true/false)</p>
        </div>
      </div>
      
      <div class="mt-16 animate-bounce text-mutedtext">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>
