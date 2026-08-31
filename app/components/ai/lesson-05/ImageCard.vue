<template>
  <div 
    ref="cardRef"
    class="my-12 max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-700 ease-out group"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">
      {{ title }}
    </h3>
    
    <!-- Image Container -->
    <div class="relative rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-4 md:p-8 border border-gray-100 group-hover:bg-gray-100/50 transition-colors duration-500">
      <img 
        :src="imageSrc" 
        :alt="title"
        class="max-h-[500px] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
      />
      
      <!-- Enlarge Button -->
      <button 
        @click="isModalOpen = true"
        class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-blue-600 hover:bg-white px-4 py-2 rounded-xl font-bold text-sm shadow-sm border border-gray-200 transition-all flex items-center gap-2 z-10"
      >
        <span class="text-lg">🔍</span> تكبير الصورة
      </button>
    </div>

    <!-- Caption -->
    <div class="mt-6 text-center px-4">
      <p class="text-lg font-bold text-gray-700 mb-2">{{ caption }}</p>
      <p class="text-gray-500 font-medium">{{ description }}</p>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <transition name="modal-fade">
        <div 
          v-if="isModalOpen" 
          class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-sm p-4 md:p-10"
          @click="isModalOpen = false"
        >
          <!-- Close Button -->
          <button 
            @click="isModalOpen = false"
            class="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all text-2xl z-[110]"
          >
            ✕
          </button>
          
          <!-- Modal Image -->
          <div class="relative w-full h-full flex items-center justify-center" @click.stop>
            <img 
              :src="imageSrc" 
              :alt="title"
              class="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: String,
  imageSrc: String,
  caption: String,
  description: String,
});

const isModalOpen = ref(false);
const cardRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    isModalOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      if (observer && cardRef.value) {
        observer.disconnect();
      }
    }
  }, { threshold: 0.15 });
  
  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
