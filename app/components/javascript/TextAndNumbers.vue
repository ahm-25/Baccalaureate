<template>
  <section id="text-and-numbers" class="py-24 bg-surface relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">النصوص والأرقام</h2>
        <p class="text-2xl text-mutedtext">في البرمجة، بنقسم البيانات لأنواع... أهم نوعين دلوقتي هم:</p>
      </div>

      <!-- Types Comparison -->
      <div class="flex flex-col md:flex-row gap-8 mb-20">
        
        <!-- Text Type -->
        <div class="flex-1 bg-background rounded-3xl p-10 border border-border shadow-lg relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          
          <div class="text-center mb-8">
            <h3 class="text-3xl font-black text-blue-600 mb-2">TEXT / STRING</h3>
            <p class="text-xl font-bold text-mutedtext">(النصوص)</p>
          </div>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-xl mb-8">
            <p class="text-lg font-bold text-blue-900">
              القيمة بين علامات التنصيص <span class="font-black bg-white px-2 py-1 rounded" dir="ltr">" "</span> تعتبر نصًا.
            </p>
          </div>

          <div class="space-y-4" dir="ltr">
            <div class="bg-gray-900 text-green-400 font-mono text-2xl px-6 py-4 rounded-xl text-center shadow-inner">
              "Ahmed"
            </div>
            <div class="bg-gray-900 text-green-400 font-mono text-2xl px-6 py-4 rounded-xl text-center shadow-inner">
              "Programming"
            </div>
            <div class="bg-gray-900 text-green-400 font-mono text-2xl px-6 py-4 rounded-xl text-center shadow-inner">
              "Hello"
            </div>
          </div>
        </div>

        <!-- Number Type -->
        <div class="flex-1 bg-background rounded-3xl p-10 border border-border shadow-lg relative overflow-hidden">
          <div class="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          
          <div class="text-center mb-8">
            <h3 class="text-3xl font-black text-orange-600 mb-2">NUMBER</h3>
            <p class="text-xl font-bold text-mutedtext">(الأرقام)</p>
          </div>
          
          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-xl mb-8">
            <p class="text-lg font-bold text-orange-900">
              القيمة <span class="text-red-600">بدون</span> علامات تنصيص تكون رقمًا (لو كانت أرقامًا فعلية).
            </p>
          </div>

          <div class="space-y-4" dir="ltr">
            <div class="bg-gray-900 text-orange-400 font-mono text-2xl px-6 py-4 rounded-xl text-center shadow-inner">
              18
            </div>
            <div class="bg-gray-900 text-orange-400 font-mono text-2xl px-6 py-4 rounded-xl text-center shadow-inner">
              95
            </div>
            <div class="bg-gray-900 text-orange-400 font-mono text-2xl px-6 py-4 rounded-xl text-center shadow-inner">
              3.5
            </div>
          </div>
        </div>

      </div>

      <!-- Strong Visual Comparison -->
      <div class="bg-background rounded-[3rem] p-12 border border-border shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
        <h3 class="text-3xl font-black text-maintext mb-10">ركز في الفرق ده 👇</h3>
        
        <div class="flex items-center justify-center gap-6 md:gap-16">
          <div class="text-center">
            <div class="bg-gray-900 text-green-400 font-mono text-4xl md:text-5xl font-black px-8 py-6 rounded-2xl shadow-xl mb-6 inline-block" dir="ltr">
              "50"
            </div>
            <div class="bg-blue-100 text-blue-700 text-2xl font-black px-6 py-2 rounded-xl border border-blue-200">
              TEXT
            </div>
          </div>
          
          <div class="text-4xl md:text-6xl font-black text-gray-300">VS</div>
          
          <div class="text-center">
            <div class="bg-gray-900 text-orange-400 font-mono text-4xl md:text-5xl font-black px-8 py-6 rounded-2xl shadow-xl mb-6 inline-block" dir="ltr">
              50
            </div>
            <div class="bg-orange-100 text-orange-700 text-2xl font-black px-6 py-2 rounded-xl border border-orange-200">
              NUMBER
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
