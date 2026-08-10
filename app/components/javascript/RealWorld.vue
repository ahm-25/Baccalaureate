<template>
  <section id="real-world" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-6xl mx-auto w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-12">JavaScript موجودة فين؟</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Example 1: Like Button -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-md flex flex-col items-center group">
          <h3 class="text-xl font-bold text-maintext mb-6">زر الإعجاب (Like)</h3>
          <button @click="likeCount++" class="flex flex-col items-center gap-2 mb-4 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" :fill="likeCount > 0 ? '#ef4444' : 'none'" :stroke="likeCount > 0 ? '#ef4444' : 'currentColor'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-colors"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="text-2xl font-black text-maintext">{{ likeCount }}</span>
          </button>
          <div class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">onclick ➔ update count</div>
        </div>

        <!-- Example 2: Cart -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-md flex flex-col items-center group">
          <h3 class="text-xl font-bold text-maintext mb-6">عربة التسوق (Cart)</h3>
          <div class="relative mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span v-if="cartItems > 0" class="absolute -top-2 -right-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">{{ cartItems }}</span>
          </div>
          <button @click="cartItems++" class="bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors mb-4">أضف للسلة</button>
          <div class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">onclick ➔ update cart</div>
        </div>

        <!-- Example 3: Calculator -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-md flex flex-col items-center group">
          <h3 class="text-xl font-bold text-maintext mb-6">الآلة الحاسبة</h3>
          <div class="flex items-center gap-2 mb-6">
            <input type="number" v-model.number="calcNum" class="w-16 bg-white border border-border rounded text-center text-xl font-bold py-1">
            <span class="text-xl font-bold">× 2 = </span>
            <span class="text-2xl font-black text-accent">{{ calcNum * 2 }}</span>
          </div>
          <div class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">oninput ➔ calculate</div>
        </div>

        <!-- Example 4: Validation -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-md flex flex-col items-center group">
          <h3 class="text-xl font-bold text-maintext mb-6">التحقق من البيانات</h3>
          <div class="w-full flex flex-col gap-2 mb-4">
            <input type="password" v-model="password" placeholder="كلمة المرور" class="w-full bg-white border border-border rounded px-3 py-2 text-center" :class="password.length >= 8 ? 'border-green-500' : 'border-red-500'">
            <span class="text-sm font-bold" :class="password.length >= 8 ? 'text-green-500' : 'text-red-500'">
              {{ password.length >= 8 ? 'كلمة مرور قوية' : 'يجب أن تكون 8 حروف' }}
            </span>
          </div>
          <div class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">oninput ➔ validate</div>
        </div>

        <!-- Example 5: Menu -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-md flex flex-col items-center group">
          <h3 class="text-xl font-bold text-maintext mb-6">القوائم (Menu)</h3>
          <div class="relative w-full flex flex-col items-center mb-10">
            <button @click="menuOpen = !menuOpen" class="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">القائمة ☰</button>
            <div v-if="menuOpen" class="absolute top-12 bg-white border border-border rounded-lg shadow-lg w-32 py-2 flex flex-col z-10">
              <span class="hover:bg-gray-100 px-4 py-1 cursor-pointer">الصفحة 1</span>
              <span class="hover:bg-gray-100 px-4 py-1 cursor-pointer">الصفحة 2</span>
            </div>
          </div>
          <div class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">onclick ➔ toggle show</div>
        </div>
        
        <!-- Example 6: Interactive Quiz -->
        <div class="bg-surface p-8 rounded-3xl border border-border shadow-md flex flex-col items-center group">
          <h3 class="text-xl font-bold text-maintext mb-6">الاختبارات والتفاعل</h3>
          <div class="flex gap-2 mb-4">
            <button @click="quizAnswer = 'wrong'" class="bg-white border border-border px-4 py-2 rounded font-bold hover:bg-gray-50">1 + 1 = 3</button>
            <button @click="quizAnswer = 'right'" class="bg-white border border-border px-4 py-2 rounded font-bold hover:bg-gray-50">1 + 1 = 2</button>
          </div>
          <div class="h-8 mb-4">
            <span v-if="quizAnswer === 'right'" class="text-green-500 font-bold">إجابة صحيحة ✅</span>
            <span v-if="quizAnswer === 'wrong'" class="text-red-500 font-bold">حاول مرة أخرى ❌</span>
          </div>
          <div class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded">onclick ➔ check answer</div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const likeCount = ref(0)
const cartItems = ref(0)
const calcNum = ref(5)
const password = ref('')
const menuOpen = ref(false)
const quizAnswer = ref('')
</script>
