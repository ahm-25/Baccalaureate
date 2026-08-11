<template>
  <section id="sorting-game" class="min-h-screen relative flex items-center justify-center py-20 bg-surface">
    <div class="max-w-6xl mx-auto px-6 w-full text-center">
      <h2 class="text-4xl font-bold text-maintext mb-4">لعبة التصنيف</h2>
      <p class="text-xl text-mutedtext mb-12">اسحب كل قيمة للنوع المناسب ليها</p>
      
      <div class="flex flex-col md:flex-row gap-12 items-start justify-center">
        <!-- Items to sort -->
        <div class="w-full md:w-1/3 bg-background border border-border rounded-3xl p-6 shadow-xl min-h-[400px]">
          <h3 class="text-xl font-bold text-maintext mb-6">القيم</h3>
          <div class="flex flex-wrap gap-4 justify-center">
            <div 
              v-for="item in unsortedItems" 
              :key="item.id"
              draggable="true"
              @dragstart="onDragStart($event, item)"
              class="bg-surface border-2 border-border hover:border-primary px-6 py-3 rounded-xl font-mono text-xl font-bold cursor-grab active:cursor-grabbing shadow-sm transition-all"
              dir="ltr"
            >
              {{ item.display }}
            </div>
          </div>
          <div v-if="unsortedItems.length === 0" class="mt-20 text-2xl font-bold text-green-500 animate-bounce">
            أكملت التصنيف! 👏
          </div>
        </div>
        
        <!-- Buckets -->
        <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- String Bucket -->
          <div 
            class="bg-background border-2 border-dashed rounded-3xl p-6 min-h-[400px] flex flex-col transition-all duration-300"
            :class="isDraggingOver === 'string' ? 'border-blue-500 bg-blue-500/10' : 'border-blue-500/30'"
            @dragover.prevent="isDraggingOver = 'string'"
            @dragleave="isDraggingOver = null"
            @drop="onDrop($event, 'string')"
          >
            <div class="bg-blue-500/10 text-blue-400 font-mono font-bold text-xl py-2 rounded-xl mb-6">STRING</div>
            <div class="flex-1 flex flex-col gap-3">
              <div v-for="item in buckets.string" :key="item.id" class="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-lg font-mono font-bold text-center" dir="ltr">
                {{ item.display }}
              </div>
            </div>
          </div>

          <!-- Number Bucket -->
          <div 
            class="bg-background border-2 border-dashed rounded-3xl p-6 min-h-[400px] flex flex-col transition-all duration-300"
            :class="isDraggingOver === 'number' ? 'border-orange-500 bg-orange-500/10' : 'border-orange-500/30'"
            @dragover.prevent="isDraggingOver = 'number'"
            @dragleave="isDraggingOver = null"
            @drop="onDrop($event, 'number')"
          >
            <div class="bg-orange-500/10 text-orange-400 font-mono font-bold text-xl py-2 rounded-xl mb-6">NUMBER</div>
            <div class="flex-1 flex flex-col gap-3">
              <div v-for="item in buckets.number" :key="item.id" class="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-2 rounded-lg font-mono font-bold text-center" dir="ltr">
                {{ item.display }}
              </div>
            </div>
          </div>

          <!-- Boolean Bucket -->
          <div 
            class="bg-background border-2 border-dashed rounded-3xl p-6 min-h-[400px] flex flex-col transition-all duration-300"
            :class="isDraggingOver === 'boolean' ? 'border-purple-500 bg-purple-500/10' : 'border-purple-500/30'"
            @dragover.prevent="isDraggingOver = 'boolean'"
            @dragleave="isDraggingOver = null"
            @drop="onDrop($event, 'boolean')"
          >
            <div class="bg-purple-500/10 text-purple-400 font-mono font-bold text-xl py-2 rounded-xl mb-6">BOOLEAN</div>
            <div class="flex-1 flex flex-col gap-3">
              <div v-for="item in buckets.boolean" :key="item.id" class="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-lg font-mono font-bold text-center" dir="ltr">
                {{ item.display }}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Feedback Modal / Toast -->
      <div 
        class="fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl font-bold text-xl text-white shadow-2xl transition-all duration-300 z-50 pointer-events-none"
        :class="feedback.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        :style="{ backgroundColor: feedback.type === 'success' ? '#10b981' : '#ef4444' }"
      >
        {{ feedback.message }}
      </div>
      
      <div v-if="unsortedItems.length === 0" class="mt-12 animate-fade-in">
        <button @click="resetGame" class="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
          العب مرة كمان
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface GameItem {
  id: string
  display: string
  type: 'string' | 'number' | 'boolean'
}

const initialItems: GameItem[] = [
  { id: '1', display: '"Ahmed"', type: 'string' },
  { id: '2', display: '17', type: 'number' },
  { id: '3', display: 'true', type: 'boolean' },
  { id: '4', display: '"Egypt"', type: 'string' },
  { id: '5', display: '95', type: 'number' },
  { id: '6', display: 'false', type: 'boolean' }
]

const unsortedItems = ref<GameItem[]>([...initialItems])
const buckets = reactive<{ [key: string]: GameItem[] }>({
  string: [],
  number: [],
  boolean: []
})

const isDraggingOver = ref<string | null>(null)
const feedback = reactive({ show: false, message: '', type: 'success' })

const onDragStart = (event: DragEvent, item: GameItem) => {
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemId', item.id)
  }
}

const onDrop = (event: DragEvent, targetType: string) => {
  isDraggingOver.value = null
  if (event.dataTransfer) {
    const itemId = event.dataTransfer.getData('itemId')
    const itemIndex = unsortedItems.value.findIndex(i => i.id === itemId)
    
    if (itemIndex !== -1) {
      const item = unsortedItems.value[itemIndex]
      
      if (item.type === targetType) {
        // Correct
        unsortedItems.value.splice(itemIndex, 1)
        buckets[targetType].push(item)
        showFeedback('صح! 👏', 'success')
      } else {
        // Wrong
        showFeedback('جرب تاني ❌', 'error')
      }
    }
  }
}

const showFeedback = (message: string, type: 'success' | 'error') => {
  feedback.message = message
  feedback.type = type
  feedback.show = true
  setTimeout(() => {
    feedback.show = false
  }, 2000)
}

const resetGame = () => {
  buckets.string = []
  buckets.number = []
  buckets.boolean = []
  unsortedItems.value = [...initialItems]
}
</script>
