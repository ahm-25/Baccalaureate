<template>
  <section id="html-css-js" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-6xl mx-auto w-full text-center">
      <h2 class="text-5xl font-black text-maintext mb-12">HTML و CSS و JavaScript</h2>
      
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button @click="activeTab = 'html'" 
                class="px-8 py-4 rounded-xl font-bold text-xl transition-all"
                :class="activeTab === 'html' ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-white text-mutedtext border border-border hover:bg-gray-50'">
          HTML (الهيكل)
        </button>
        <button @click="activeTab = 'css'" 
                class="px-8 py-4 rounded-xl font-bold text-xl transition-all"
                :class="activeTab === 'css' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'bg-white text-mutedtext border border-border hover:bg-gray-50'">
          CSS (الشكل)
        </button>
        <button @click="activeTab = 'js'" 
                class="px-8 py-4 rounded-xl font-bold text-xl transition-all"
                :class="activeTab === 'js' ? 'bg-yellow-400 text-gray-900 shadow-lg scale-105' : 'bg-white text-mutedtext border border-border hover:bg-gray-50'">
          JavaScript (التفاعل)
        </button>
        <button @click="activeTab = 'all'" 
                class="px-8 py-4 rounded-xl font-bold text-xl transition-all"
                :class="activeTab === 'all' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-mutedtext border border-border hover:bg-gray-50'">
          مع بعض 🚀
        </button>
      </div>

      <div class="bg-white p-12 rounded-[3rem] shadow-2xl border border-border relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
        <!-- Visual Presentation -->
        <div class="relative w-full max-w-md mx-auto aspect-video flex items-center justify-center">
          
          <!-- HTML ONLY -->
          <div v-if="activeTab === 'html'" class="w-full h-full flex flex-col items-center justify-center border-4 border-dashed border-gray-300 p-4">
            <button class="border-2 border-black px-2 py-1 text-black font-sans">
              اضغط هنا
            </button>
            <p class="mt-4 text-gray-500 font-mono text-sm text-center">أنا ببني هيكل الصفحة الأساسي، زي العظم.</p>
          </div>

          <!-- CSS ONLY (No structure, just floating styles, but applied to the button) -->
          <div v-if="activeTab === 'css'" class="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-4">
            <button class="bg-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg">
              اضغط هنا
            </button>
            <p class="mt-6 text-blue-500 font-mono text-sm text-center">أنا مسؤول عن شكل الصفحة وألوانها، زي اللبس والتجميل.</p>
          </div>

          <!-- JS ONLY (Behavior without structure) -->
          <div v-if="activeTab === 'js'" class="w-full h-full flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-4 text-green-400 font-mono">
            <div class="text-left w-full">
              <p>button.addEventListener('click', () => {</p>
              <p class="pl-4">alert('مرحباً!');</p>
              <p>});</p>
            </div>
            <p class="mt-6 text-yellow-400 text-sm text-center font-sans font-bold">أنا بخلي الصفحة تتفاعل، زي العقل والعضلات.</p>
          </div>

          <!-- ALL TOGETHER -->
          <div v-if="activeTab === 'all'" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 shadow-inner">
            <button @click="showToast = true" 
                    class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-black text-xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all transform active:scale-95">
              اضغط هنا 🚀
            </button>
            
            <div class="h-16 mt-6 flex items-center justify-center">
              <Transition name="fade-slide">
                <div v-if="showToast" class="bg-white px-6 py-3 rounded-xl shadow-lg border border-green-100 text-green-600 font-bold flex items-center gap-2">
                  <span>✅</span> ممتاز! الثلاثة بيشتغلوا مع بعض.
                  <button @click.stop="showToast = false" class="ml-4 text-gray-400 hover:text-gray-600">×</button>
                </div>
              </Transition>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const activeTab = ref('all')
const showToast = ref(false)

watch(activeTab, () => {
  showToast.value = false
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
