<template>
  <div class="my-12 max-w-3xl mx-auto bg-blue-50/60 border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm">
    <div class="flex items-center gap-3 mb-6">
      <span class="text-3xl">🤔</span>
      <h3 class="text-xl font-bold text-blue-900">فكّر</h3>
    </div>
    
    <p class="text-lg text-gray-800 mb-6 font-medium leading-relaxed">{{ question }}</p>
    
    <div class="space-y-3">
      <button
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(index)"
        :disabled="isAnswered"
        class="w-full text-right p-4 rounded-xl border transition-all duration-300 font-medium flex items-center justify-between"
        :class="getOptionClass(index)"
      >
        <span>{{ option.text }}</span>
        <span v-if="isAnswered && index === correctIndex" class="text-xl">✅</span>
        <span v-else-if="isAnswered && selectedIndex === index" class="text-xl">❌</span>
      </button>
    </div>

    <transition name="fade">
      <div v-if="isAnswered" class="mt-6 p-5 rounded-xl bg-white border border-gray-100 text-gray-700 shadow-sm flex items-start gap-3">
        <span class="text-2xl mt-0.5">💡</span>
        <div>
          <strong class="block text-gray-900 mb-1">توضيح:</strong>
          <p class="leading-relaxed">{{ explanation }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  question: string;
  options: { text: string }[];
  correctIndex: number;
  explanation: string;
}>();

const isAnswered = ref(false);
const selectedIndex = ref(-1);

const selectOption = (index: number) => {
  if (isAnswered.value) return;
  selectedIndex.value = index;
  isAnswered.value = true;
};

const getOptionClass = (index: number) => {
  if (!isAnswered.value) {
    return 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700';
  }
  if (index === props.correctIndex) {
    return 'bg-green-50 border-green-300 text-green-800';
  }
  if (index === selectedIndex.value) {
    return 'bg-red-50 border-red-300 text-red-800';
  }
  return 'bg-white border-gray-200 text-gray-400 opacity-50 cursor-not-allowed';
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
