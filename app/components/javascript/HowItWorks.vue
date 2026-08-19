<template>
  <section id="how-it-works" class="py-24 bg-background relative overflow-hidden">
    <!-- Background Decorators -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[80px]"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 w-full z-10 relative">
      
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6 tracking-tight">الكمبيوتر بيفهم إزاي؟</h2>
        <p class="text-2xl text-mutedtext max-w-3xl mx-auto leading-relaxed font-medium">
          الكمبيوتر <span class="text-red-500 font-black px-1 bg-red-50 rounded-lg">لا يفكر</span> مثل الإنسان.<br>
          هو فقط <span class="text-primary font-black px-1 bg-primary/10 rounded-lg">ينفذ التعليمات</span> التي نعطيها له بدقة.
        </p>
      </div>

      <!-- Visual Diagram -->
      <div class="relative mb-24">
        <!-- Connecting Line (Desktop only) -->
        <div class="hidden md:block absolute top-1/2 right-0 left-0 h-1 bg-gradient-to-l from-gray-200 via-primary/30 to-green-200 -translate-y-1/2 z-0 rounded-full"></div>
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-10">
          
          <!-- Step 1: Instruction -->
          <div class="bg-surface border-2 border-border p-6 rounded-[2rem] text-center shadow-lg hover:shadow-xl transition-all w-full md:w-56 group bg-white">
            <div class="w-20 h-20 mx-auto bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform shadow-sm">
              <FileText class="w-10 h-10 text-gray-500" />
            </div>
            <div class="text-2xl font-black text-maintext">Instruction</div>
            <div class="text-mutedtext font-bold mt-1 text-sm bg-gray-100 rounded-lg inline-block px-3 py-1">(تعليمات)</div>
          </div>
          
          <div class="hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-full w-10 h-10 shadow-sm z-10 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div class="md:hidden text-gray-300 text-3xl">↓</div>
          
          <!-- Step 2: Computer -->
          <div class="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-[2rem] text-center shadow-2xl shadow-primary/30 w-full md:w-56 group transform hover:scale-105 transition-all relative overflow-hidden">
            <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <Monitor class="w-10 h-10 text-white" />
            </div>
            <div class="text-2xl font-black">Computer</div>
            <div class="text-white/80 font-bold mt-1 text-sm bg-black/20 rounded-lg inline-block px-3 py-1">(الكمبيوتر)</div>
          </div>
          
          <div class="hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-full w-10 h-10 shadow-sm z-10 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div class="md:hidden text-gray-300 text-3xl">↓</div>

          <!-- Step 3: Execution -->
          <div class="bg-surface border-2 border-border p-6 rounded-[2rem] text-center shadow-lg hover:shadow-xl transition-all w-full md:w-56 group bg-white">
            <div class="w-20 h-20 mx-auto bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-180 transition-transform duration-700 shadow-sm">
              <Settings class="w-10 h-10 text-gray-500" />
            </div>
            <div class="text-2xl font-black text-maintext">Execution</div>
            <div class="text-mutedtext font-bold mt-1 text-sm bg-gray-100 rounded-lg inline-block px-3 py-1">(تنفيذ)</div>
          </div>

          <div class="hidden md:flex items-center justify-center bg-white border border-gray-200 rounded-full w-10 h-10 shadow-sm z-10 text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </div>
          <div class="md:hidden text-gray-300 text-3xl">↓</div>

          <!-- Step 4: Result -->
          <div class="bg-green-50 border-2 border-green-200 p-6 rounded-[2rem] text-center shadow-lg hover:shadow-xl transition-all w-full md:w-56 group relative overflow-hidden">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-green-400/10 rounded-full blur-xl"></div>
            <div class="w-20 h-20 mx-auto bg-white border-2 border-green-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm relative z-10">
              <CheckCircle class="w-10 h-10 text-green-500" />
            </div>
            <div class="text-2xl font-black text-green-700 relative z-10">Result</div>
            <div class="text-green-700 font-bold mt-1 text-sm bg-green-100 border border-green-200 rounded-lg inline-block px-3 py-1 relative z-10">(نتيجة)</div>
          </div>
        </div>
      </div>

      <!-- Examples -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Example 1 -->
        <div class="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow group relative">
          <div class="absolute top-0 right-0 w-2 h-full bg-blue-500 rounded-r-[2rem]"></div>
          
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-3 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-black uppercase tracking-wider">Instruction</span>
            </div>
            <div class="bg-gray-50 text-gray-800 font-bold text-xl px-5 py-4 rounded-2xl border border-gray-200 shadow-inner">
              "اعرض اسم الطالب"
            </div>
          </div>
          
          <div class="relative h-8 flex justify-center items-center my-2">
            <div class="absolute w-px h-full bg-gray-200"></div>
            <div class="bg-white border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center shadow-sm z-10 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
          
          <div class="mt-8">
            <div class="flex items-center gap-2 mb-3 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-black uppercase tracking-wider">Result</span>
            </div>
            <div class="bg-green-50 text-green-700 font-black text-3xl px-5 py-4 rounded-2xl border border-green-200 shadow-sm text-center transform group-hover:scale-105 transition-transform">
              Ahmed
            </div>
          </div>
        </div>

        <!-- Example 2 -->
        <div class="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow group relative">
          <div class="absolute top-0 right-0 w-2 h-full bg-purple-500 rounded-r-[2rem]"></div>
          
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-3 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-black uppercase tracking-wider">Instruction</span>
            </div>
            <div class="bg-gray-50 text-gray-800 font-bold text-xl px-5 py-4 rounded-2xl border border-gray-200 shadow-inner">
              "اجمع 40 + 35"
            </div>
          </div>
          
          <div class="relative h-8 flex justify-center items-center my-2">
            <div class="absolute w-px h-full bg-gray-200"></div>
            <div class="bg-white border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center shadow-sm z-10 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
          
          <div class="mt-8">
            <div class="flex items-center gap-2 mb-3 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-black uppercase tracking-wider">Result</span>
            </div>
            <div class="bg-green-50 text-green-700 font-black text-3xl px-5 py-4 rounded-2xl border border-green-200 shadow-sm text-center transform group-hover:scale-105 transition-transform">
              75
            </div>
          </div>
        </div>

        <!-- Example 3 -->
        <div class="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow group relative">
          <div class="absolute top-0 right-0 w-2 h-full bg-orange-500 rounded-r-[2rem]"></div>
          
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-3 text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-black uppercase tracking-wider">Instruction</span>
            </div>
            <div class="bg-gray-50 text-gray-800 font-bold text-xl px-5 py-4 rounded-2xl border border-gray-200 shadow-inner">
              "اعرض النتيجة"
            </div>
          </div>
          
          <div class="relative h-8 flex justify-center items-center my-2">
            <div class="absolute w-px h-full bg-gray-200"></div>
            <div class="bg-white border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center shadow-sm z-10 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
          
          <div class="mt-8">
            <div class="flex items-center gap-2 mb-3 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-black uppercase tracking-wider">Result</span>
            </div>
            <div class="bg-green-50 text-green-700 font-black text-3xl px-5 py-4 rounded-2xl border border-green-200 shadow-sm text-center transform group-hover:scale-105 transition-transform">
              75
            </div>
          </div>
        </div>

      </div>

      <div class="text-center mt-12">
        <div class="inline-flex items-center gap-4 bg-primary/10 px-8 py-5 rounded-2xl border-2 border-primary/20 shadow-sm">
          <Bot class="w-10 h-10 text-primary" />
          <p class="text-2xl font-black text-primary">
            "الكمبيوتر ينفذ التعليمات التي نكتبها له."
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Monitor, Settings, CheckCircle, Bot } from 'lucide-vue-next'
</script>
