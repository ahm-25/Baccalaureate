<template>
  <section id="what-is-it" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-background overflow-hidden">
    <div class="max-w-6xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">يعني إيه تكنولوجيا المعلومات؟</h2>
        <p class="text-xl md:text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed">
          تكنولوجيا المعلومات هي استخدام الأجهزة والبرامج والشبكات والتقنيات المختلفة للتعامل مع المعلومات، مثل جمعها وتخزينها ومعالجتها ونقلها.
        </p>
      </div>

      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2 rounded-full opacity-30 z-0"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          
          <!-- Gathering -->
          <div class="bg-surface p-8 rounded-3xl border-2 border-border hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all group text-center">
            <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Download class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-2xl font-black text-maintext mb-4">جمع المعلومات</h3>
            <div class="bg-white/50 p-4 rounded-xl border border-white/50">
              <p class="text-lg font-bold text-mutedtext">مثال: <span class="text-blue-600">إدخال بيانات طالب</span></p>
            </div>
          </div>

          <!-- Storing -->
          <div class="bg-surface p-8 rounded-3xl border-2 border-border hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all group text-center">
            <div class="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Database class="w-10 h-10 text-purple-600" />
            </div>
            <h3 class="text-2xl font-black text-maintext mb-4">تخزين المعلومات</h3>
            <div class="bg-white/50 p-4 rounded-xl border border-white/50">
              <p class="text-lg font-bold text-mutedtext">مثال: <span class="text-purple-600">حفظ بيانات الطالب</span></p>
            </div>
          </div>

          <!-- Processing -->
          <div class="bg-surface p-8 rounded-3xl border-2 border-border hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 transition-all group text-center">
            <div class="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Settings class="w-10 h-10 text-amber-600" />
            </div>
            <h3 class="text-2xl font-black text-maintext mb-4">معالجة المعلومات</h3>
            <div class="bg-white/50 p-4 rounded-xl border border-white/50">
              <p class="text-lg font-bold text-mutedtext">مثال: <span class="text-amber-600">حساب درجات الطالب</span></p>
            </div>
          </div>

          <!-- Transferring -->
          <div class="bg-surface p-8 rounded-3xl border-2 border-border hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10 transition-all group text-center">
            <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Send class="w-10 h-10 text-green-600" />
            </div>
            <h3 class="text-2xl font-black text-maintext mb-4">نقل المعلومات</h3>
            <div class="bg-white/50 p-4 rounded-xl border border-white/50">
              <p class="text-lg font-bold text-mutedtext">مثال: <span class="text-green-600">إرسال النتيجة للطالب</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Download, Database, Settings, Send } from 'lucide-vue-next'
</script>
