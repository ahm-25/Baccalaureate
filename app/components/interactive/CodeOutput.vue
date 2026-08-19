<template>
  <div class="code-output-container bg-[#0a0a0a] rounded-3xl border border-gray-800/50 flex flex-col h-full font-mono shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
    
    <!-- Output Header -->
    <div class="bg-[#151515]/95 backdrop-blur-md border-b border-gray-800/80 px-4 py-3 flex items-center justify-between z-10">
      <div class="flex items-center gap-2">
        <span class="text-gray-500 text-xs font-bold flex items-center gap-2 font-sans tracking-wider uppercase">
          <Monitor class="w-4 h-4" /> Output
        </span>
      </div>
      <button 
        v-if="logs.length > 0"
        @click="$emit('clear')" 
        class="text-gray-500 hover:text-gray-300 px-3 py-1.5 text-xs rounded-lg hover:bg-white/5 transition-colors font-sans font-bold flex items-center gap-1"
        title="مسح النتائج"
      >
        <Trash2 class="w-3.5 h-3.5" /> مسح
      </button>
    </div>

    <!-- Output Body -->
    <div ref="outputBody" class="flex-1 overflow-auto p-4 custom-scrollbar flex flex-col gap-1" dir="ltr">
      
      <!-- Empty State -->
      <div v-if="logs.length === 0" dir="rtl" class="flex-1 flex flex-col items-center justify-center text-gray-600 space-y-3 opacity-50">
        <Keyboard class="w-10 h-10" />
        <p class="text-base font-bold">النتيجة هتظهر هنا بعد التشغيل</p>
      </div>

      <!-- Logs -->
      <template v-else>
        <div 
          v-for="(log, idx) in logs" 
          :key="idx" 
          class="font-mono text-lg leading-relaxed py-1 px-2 rounded break-all"
          :class="{
            'text-green-400': log.type === 'log',
            'text-yellow-400 bg-yellow-400/10 border-l-2 border-yellow-400': log.type === 'warn',
            'text-red-400 bg-red-400/10 border-l-2 border-red-400': log.type === 'error',
            'text-blue-300 italic opacity-80': log.type === 'system'
          }"
        >
          <XCircle v-if="log.type === 'error'" class="inline w-4 h-4 mr-2" />
          <AlertTriangle v-if="log.type === 'warn'" class="inline w-4 h-4 mr-2" />
          <Info v-if="log.type === 'system'" class="inline w-4 h-4 mr-2" />
          <span class="whitespace-pre-wrap">{{ log.args.join(' ') }}</span>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { Monitor, Trash2, Keyboard, XCircle, AlertTriangle, Info } from 'lucide-vue-next'

const props = defineProps({
  logs: {
    type: Array as () => Array<{ type: string, args: string[] }>,
    required: true
  }
})

defineEmits(['clear'])

const outputBody = ref<HTMLElement | null>(null)

// Auto-scroll to bottom when new logs arrive
watch(() => props.logs.length, () => {
  nextTick(() => {
    if (outputBody.value) {
      outputBody.value.scrollTop = outputBody.value.scrollHeight
    }
  })
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
