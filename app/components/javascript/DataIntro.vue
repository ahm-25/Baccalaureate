<template>
  <section id="data-intro" class="py-24 bg-background relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">البرنامج بيتعامل مع بيانات</h2>
        <div class="bg-primary/5 border border-primary/20 px-8 py-4 rounded-2xl inline-block">
          <p class="text-2xl text-primary font-bold">
            "البيانات (Data) هي القيم التي يتعامل معها البرنامج."
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        
        <!-- Data Item 1 -->
        <div class="bg-surface rounded-3xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow group">
          <div class="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><User class="w-8 h-8" /></div>
          <h3 class="text-lg font-bold text-mutedtext mb-2">اسم الطالب</h3>
          <div class="bg-gray-100 px-4 py-2 rounded-xl text-xl font-black text-maintext" dir="ltr">Ahmed</div>
        </div>

        <!-- Data Item 2 -->
        <div class="bg-surface rounded-3xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow group">
          <div class="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Cake class="w-8 h-8" /></div>
          <h3 class="text-lg font-bold text-mutedtext mb-2">العمر</h3>
          <div class="bg-gray-100 px-4 py-2 rounded-xl text-xl font-black text-maintext" dir="ltr">18</div>
        </div>

        <!-- Data Item 3 -->
        <div class="bg-surface rounded-3xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow group">
          <div class="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Award class="w-8 h-8" /></div>
          <h3 class="text-lg font-bold text-mutedtext mb-2">الدرجة</h3>
          <div class="bg-gray-100 px-4 py-2 rounded-xl text-xl font-black text-maintext" dir="ltr">95</div>
        </div>

        <!-- Data Item 4 -->
        <div class="bg-surface rounded-3xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow group">
          <div class="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Coins class="w-8 h-8" /></div>
          <h3 class="text-lg font-bold text-mutedtext mb-2">السعر</h3>
          <div class="bg-gray-100 px-4 py-2 rounded-xl text-xl font-black text-maintext" dir="ltr">250</div>
        </div>

        <!-- Data Item 5 -->
        <div class="bg-surface rounded-3xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow group">
          <div class="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Users class="w-8 h-8" /></div>
          <h3 class="text-lg font-bold text-mutedtext mb-2">عدد الطلاب</h3>
          <div class="bg-gray-100 px-4 py-2 rounded-xl text-xl font-black text-maintext" dir="ltr">40</div>
        </div>

        <!-- Data Item 6 -->
        <div class="bg-surface rounded-3xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow group">
          <div class="w-16 h-16 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><BookOpen class="w-8 h-8" /></div>
          <h3 class="text-lg font-bold text-mutedtext mb-2">اسم المادة</h3>
          <div class="bg-gray-100 px-4 py-2 rounded-xl text-xl font-black text-maintext" dir="ltr">Programming</div>
        </div>

      </div>

      <div class="text-center">
        <p class="text-2xl font-black text-maintext inline-block border-b-4 border-primary pb-2">
          "كل دي بيانات ممكن البرنامج يتعامل معاها ويحسبها."
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { User, Cake, Award, Coins, Users, BookOpen } from 'lucide-vue-next'
</script>
