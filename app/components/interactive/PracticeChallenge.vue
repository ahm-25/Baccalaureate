<template>
  <div class="practice-challenge bg-gradient-to-r from-[#D4B800] to-[#F7DF1E] rounded-3xl p-6 shadow-xl mb-8 relative overflow-hidden group border border-white/20">
    <Flame class="absolute -right-10 -top-10 w-48 h-48 opacity-10 rotate-12 group-hover:scale-110 transition-transform text-yellow-600" />
    
    <div v-if="!isActive" class="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
      <div>
        <h3 class="text-2xl font-black text-black mb-1">جاهز تختبر نفسك؟</h3>
        <p class="text-black/80 font-bold">حل تحدي سريع عشان تتأكد إنك فهمت.</p>
      </div>
      <button 
        @click="startChallenge"
        class="bg-black hover:bg-gray-900 text-white font-black px-8 py-3 rounded-2xl shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl w-full md:w-auto flex items-center justify-center gap-3"
      >
        <span>تحدي سريع</span>
        <Flame class="w-6 h-6" />
      </button>
    </div>

    <div v-else class="relative z-10">
      <div class="flex items-center justify-between mb-4 border-b border-black/10 pb-4">
        <h3 class="text-2xl font-black text-black flex items-center gap-2">
          <Target class="w-6 h-6" /> المطلوب:
        </h3>
        <button @click="cancelChallenge" class="text-black/60 hover:text-black hover:bg-black/10 px-4 py-2 rounded-xl text-sm font-bold transition-all backdrop-blur-sm">
          إلغاء التحدي
        </button>
      </div>
      
      <p class="text-xl text-maintext font-bold mb-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-inner leading-relaxed">
        {{ challenge.prompt }}
      </p>

      <div v-if="isSuccess" class="bg-green-100 border-2 border-green-400 text-green-800 p-4 rounded-xl font-bold flex items-center gap-3 animate-pulse shadow-md">
        <PartyPopper class="w-8 h-8" />
        <div>
          <p class="text-xl">ممتاز! إجابة صحيحة.</p>
          <p class="text-sm text-green-700 mt-1">الكود اشتغل بالشكل المطلوب.</p>
        </div>
      </div>
      
      <div v-else-if="hasFailed" class="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl font-bold flex items-center gap-3">
        <HelpCircle class="w-6 h-6" />
        <p>النتيجة مش زي المطلوب.. حاول تاني!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Flame, Target, PartyPopper, HelpCircle } from 'lucide-vue-next'

const props = defineProps({
  challenge: {
    type: Object as () => { id: string, prompt: string, initialCode: string, expectedOutput: string | ((output: string[]) => boolean) },
    required: true
  },
  currentOutput: {
    type: Array as () => string[],
    default: () => []
  }
})

const emit = defineEmits(['start', 'cancel'])

const isActive = ref(false)
const isSuccess = ref(false)
const hasFailed = ref(false)

const startChallenge = () => {
  isActive.value = true
  isSuccess.value = false
  hasFailed.value = false
  emit('start', props.challenge.initialCode)
}

const cancelChallenge = () => {
  isActive.value = false
  isSuccess.value = false
  hasFailed.value = false
  emit('cancel')
}

// Watch output to validate challenge
watch(() => props.currentOutput, (newOutput) => {
  if (!isActive.value || newOutput.length === 0) return

  const latestOutput = newOutput[newOutput.length - 1] // Check the last log or all logs?
  // We'll check if the expected output is present in any of the recent logs
  const allText = newOutput.join('\n').trim()
  
  if (typeof props.challenge.expectedOutput === 'function') {
    if (props.challenge.expectedOutput(newOutput)) {
      isSuccess.value = true
      hasFailed.value = false
    } else {
      isSuccess.value = false
      hasFailed.value = true
    }
  } else {
    // String matching
    if (allText.includes(props.challenge.expectedOutput)) {
      isSuccess.value = true
      hasFailed.value = false
    } else {
      isSuccess.value = false
      hasFailed.value = true
    }
  }
}, { deep: true })
</script>
