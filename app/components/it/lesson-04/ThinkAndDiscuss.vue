<template>
  <section id="think-discuss" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <div class="max-w-6xl mx-auto w-full z-10 text-center">
      <div class="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-lg mb-8 border border-primary/20">
        <Users class="w-6 h-6 mr-2 ml-2 inline-block" />
        ناقش مع زميلك
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-16">وقت المناقشة</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
        
        <div class="bg-white p-8 rounded-3xl border border-border shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-black text-xl">1</div>
            <div>
              <h3 class="text-2xl font-bold text-maintext leading-relaxed">ما أهم اختراع تكنولوجي غيّر حياة الإنسان في رأيك؟ ולماذا؟</h3>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-border shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600 font-black text-xl">2</div>
            <div>
              <h3 class="text-2xl font-bold text-maintext leading-relaxed">هل التكنولوجيا دائمًا تجعل حياتنا أفضل؟ أعطِ مثالاً.</h3>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-border shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 font-black text-xl">3</div>
            <div>
              <h3 class="text-2xl font-bold text-maintext leading-relaxed">ما أكثر جهاز تكنولوجي تستخدمه يوميًا؟ وماذا تفعل به؟</h3>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-border shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
          <div class="absolute top-0 right-0 w-2 h-full bg-purple-500"></div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-black text-xl">4</div>
            <div>
              <h3 class="text-2xl font-bold text-maintext leading-relaxed">كيف تتوقع أن تكون التكنولوجيا بعد 10 سنوات من الآن؟</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Users } from 'lucide-vue-next'
</script>
