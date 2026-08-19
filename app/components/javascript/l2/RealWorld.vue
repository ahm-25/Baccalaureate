<template>
  <section id="real-world" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-5xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-6">في التطبيقات الحقيقية 📱</h2>
      <p class="text-xl text-mutedtext mb-16">أي برنامج تقريبًا بيتعامل مع بيانات، والمتغيرات بتساعدنا نخزن البيانات دي ونستخدمها.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- E-commerce -->
        <div class="bg-background border border-border rounded-3xl p-8 flex flex-col hover:border-primary transition-all shadow-lg text-right">
          <div class="text-3xl mb-4">🛒</div>
          <h3 class="text-xl font-bold text-maintext mb-6">تطبيق تسوق</h3>
          <div class="space-y-4 font-mono text-sm" dir="ltr">
            <div class="bg-surface p-3 rounded-lg flex justify-between">
              <span class="text-mutedtext">Product Price</span>
              <span class="text-blue-600">productPrice = <span class="text-orange-600">500</span></span>
            </div>
            <div class="bg-surface p-3 rounded-lg flex justify-between">
              <span class="text-mutedtext">Cart Count</span>
              <span class="text-blue-600">cartCount = <span class="text-orange-600">3</span></span>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="bg-background border border-border rounded-3xl p-8 flex flex-col hover:border-accent transition-all shadow-lg text-right">
          <div class="text-3xl mb-4">💬</div>
          <h3 class="text-xl font-bold text-maintext mb-6">تطبيق تواصل</h3>
          <div class="space-y-4 font-mono text-sm" dir="ltr">
            <div class="bg-surface p-3 rounded-lg flex justify-between">
              <span class="text-mutedtext">User Name</span>
              <span class="text-blue-600">userName = <span class="text-green-600">"Ahmed"</span></span>
            </div>
            <div class="bg-surface p-3 rounded-lg flex justify-between">
              <span class="text-mutedtext">Online Status</span>
              <span class="text-blue-600">isOnline = <span class="text-purple-600">true</span></span>
            </div>
          </div>
        </div>

        <!-- Game -->
        <div class="bg-background border border-border rounded-3xl p-8 flex flex-col hover:border-green-500 transition-all shadow-lg text-right md:col-span-2 lg:col-span-1">
          <div class="text-3xl mb-4">🎮</div>
          <h3 class="text-xl font-bold text-maintext mb-6">لعبة فيديو</h3>
          <div class="space-y-4 font-mono text-sm" dir="ltr">
            <div class="bg-surface p-3 rounded-lg flex justify-between">
              <span class="text-mutedtext">Player Health</span>
              <span class="text-blue-600">health = <span class="text-orange-600">100</span></span>
            </div>
            <div class="bg-surface p-3 rounded-lg flex justify-between">
              <span class="text-mutedtext">High Score</span>
              <span class="text-blue-600">highScore = <span class="text-orange-600">9999</span></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
