<template>
  <section id="real-world" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-8">
        <span>🌐</span> في التطبيقات الحقيقية
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        JavaScript بتاخد قرارات فين؟
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        كل التطبيقات اللي بتستخدمها يومياً مبنية على قرارات.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6" dir="ltr">
        
        <div v-for="(app, index) in apps" :key="index" class="bg-surface rounded-2xl p-6 border border-border shadow-sm flex flex-col hover:border-primary/50 transition-colors">
          <div class="flex items-center gap-4 mb-6" dir="rtl">
            <div class="text-4xl">{{ app.icon }}</div>
            <div class="text-xl font-bold text-maintext">{{ app.name }}</div>
          </div>
          
          <div class="flex-1 flex flex-col justify-center gap-4">
            <div class="bg-purple-500/10 text-purple-500 border border-purple-500/30 px-4 py-2 rounded-xl text-center font-mono font-bold text-sm">
              if ({{ app.condition }})
            </div>
            
            <div class="text-center text-primary font-bold">↓</div>
            
            <div class="bg-green-500/10 text-green-500 border border-green-500/30 px-4 py-2 rounded-xl text-center font-mono font-bold text-sm">
              {{ app.action }}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const apps = [
  {
    icon: '🔐',
    name: 'تسجيل الدخول',
    condition: 'password === correct',
    action: 'Login Successful'
  },
  {
    icon: '🛒',
    name: 'سلة المشتريات',
    condition: 'cart !== empty',
    action: 'Allow Checkout'
  },
  {
    icon: '🎮',
    name: 'الألعاب',
    condition: 'score >= 100',
    action: 'Level Up'
  },
  {
    icon: '💳',
    name: 'الدفع الإلكتروني',
    condition: 'balance >= price',
    action: 'Complete Purchase'
  }
]
</script>
