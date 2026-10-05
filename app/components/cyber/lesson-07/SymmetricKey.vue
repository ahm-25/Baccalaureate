<template>
  <section id="symmetric-key" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">التشفير المتماثل</h2>
      <p class="text-lg text-slate-600 text-center mb-12">
        يستخدم <strong>مفتاحًا واحدًا</strong> للتشفير وفك التشفير. يتميز بالسرعة والكفاءة، لذا يُستخدم لحماية بيانات الجلسة بعد نجاح المصافحة.
      </p>
      
      <div class="bg-slate-900 p-8 rounded-3xl overflow-hidden relative max-w-2xl mx-auto flex flex-col items-center">
        
        <div class="flex items-center gap-4 mb-8">
          <div class="bg-white p-3 rounded-xl shadow text-sm font-bold text-slate-800 w-32 text-center" :class="{'opacity-50': state > 0}">مرحباً!</div>
          <div class="text-2xl text-emerald-400 transition-opacity" :class="{'opacity-0': state !== 1}">🔑</div>
          <div class="bg-slate-800 border-2 border-dashed border-slate-600 p-3 rounded-xl w-32 text-center text-slate-400 font-mono text-xs">
            <span v-if="state >= 2">!@#$*&^%</span>
            <span v-else>...</span>
          </div>
          <div class="text-2xl text-emerald-400 transition-opacity" :class="{'opacity-0': state !== 3}">🔑</div>
          <div class="bg-white p-3 rounded-xl shadow text-sm font-bold text-slate-800 w-32 text-center transition-opacity" :class="{'opacity-100': state === 4, 'opacity-0': state < 4}">مرحباً!</div>
        </div>
        
        <button @click="playAnimation" class="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl" :disabled="isPlaying">
          شغل المحاكاة
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const state = ref(0);
const isPlaying = ref(false);

const playAnimation = () => {
  isPlaying.value = true;
  state.value = 0;
  setTimeout(() => state.value = 1, 800);
  setTimeout(() => state.value = 2, 1600);
  setTimeout(() => state.value = 3, 2400);
  setTimeout(() => { state.value = 4; isPlaying.value = false; }, 3200);
};
</script>
