<template>
  <div class="example-selector flex flex-wrap gap-2 mb-4">
    <button
      v-for="example in examples"
      :key="example.id"
      @click="selectExample(example)"
      class="px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300"
      :class="[
        activeId === example.id
          ? 'bg-primary text-white shadow-lg shadow-primary/30 transform -translate-y-0.5'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
      ]"
    >
      {{ example.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Example = { id: string | number, title: string, code: string }

defineProps({
  examples: {
    type: Array as () => Example[],
    required: true
  }
})

const emit = defineEmits(['select'])

// Nothing is highlighted until the student picks an example: the editor starts
// on its own default snippet, which is not one of these.
const activeId = ref<string | number | null>(null)

const selectExample = (example: Example) => {
  activeId.value = example.id
  emit('select', example.code)
}
</script>
