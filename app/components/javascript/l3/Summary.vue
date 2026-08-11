<template>
  <section id="summary" class="py-24 bg-background relative border-b border-border">
    <div class="max-w-5xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-12">
        <span>📝</span> ملخص الدرس
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-16">
        إيه اللي اتعلمناه النهاردة؟
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-right">
        <div v-for="(item, index) in summary" :key="index" 
             class="bg-surface rounded-2xl p-6 border border-border shadow-sm flex flex-col hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
          <div class="text-4xl mb-4 opacity-80">{{ item.icon }}</div>
          <div class="flex items-start gap-4 flex-1">
            <div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-1">
              {{ index + 1 }}
            </div>
            <p class="text-lg font-bold text-maintext leading-relaxed">
              <span v-html="item.text"></span>
            </p>
          </div>
        </div>
      </div>
      
      <!-- Flow Recap -->
      <div class="bg-surface rounded-3xl p-8 border border-border flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto" dir="ltr">
        <div class="bg-blue-500/10 text-blue-500 font-mono font-bold px-4 py-2 rounded-xl border border-blue-500/30">DATA</div>
        <div class="text-primary font-bold">→</div>
        <div class="bg-purple-500/10 text-purple-500 font-mono font-bold px-4 py-2 rounded-xl border border-purple-500/30">CONDITION</div>
        <div class="text-primary font-bold">→</div>
        <div class="bg-yellow-500/10 text-yellow-600 font-mono font-bold px-4 py-2 rounded-xl border border-yellow-500/30">TRUE/FALSE</div>
        <div class="text-primary font-bold">→</div>
        <div class="bg-green-500/10 text-green-500 font-mono font-bold px-4 py-2 rounded-xl border border-green-500/30">ACTION</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const summary = [
  {
    icon: '❓',
    text: '<code class="text-primary bg-primary/10 px-1 rounded font-mono text-sm">Condition</code> هو سؤال إجابته <code class="text-green-500 font-mono bg-green-500/10 px-1 rounded text-sm">true</code> أو <code class="text-red-500 font-mono bg-red-500/10 px-1 rounded text-sm">false</code>.'
  },
  {
    icon: '🎯',
    text: '<code class="text-primary bg-primary/10 px-1 rounded font-mono text-sm">if</code> تنفذ الكود لو الشرط صحيح.'
  },
  {
    icon: '🔄',
    text: '<code class="text-accent bg-accent/10 px-1 rounded font-mono text-sm">else</code> تنفذ البديل لو الشرط خطأ.'
  },
  {
    icon: '🌿',
    text: '<code class="text-blue-500 bg-blue-500/10 px-1 rounded font-mono text-sm">else if</code> تسمح بأكثر من احتمال.'
  },
  {
    icon: '⚖️',
    text: 'المقارنات زي <code class="text-maintext bg-background px-1 rounded font-mono text-sm">>=</code> و <code class="text-maintext bg-background px-1 rounded font-mono text-sm">===</code> بتساعدنا نسأل البرنامج.'
  },
  {
    icon: '🔗',
    text: 'المتغيرات بتوفر البيانات اللي بنستخدمها في القرارات.'
  }
]
</script>
