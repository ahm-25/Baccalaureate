<template>
  <div class="interactive-playground">
    
    <!-- Practice Challenge -->
    <PracticeChallenge 
      :challenge="challenge"
      :current-output="rawOutputTexts"
      @start="handleChallengeStart"
      @cancel="handleChallengeCancel"
    />

    <!-- Editor & Output Container -->
    <div class="bg-surface/80 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-8 border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative">
      <div class="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
      
      <div class="relative z-10">
      <!-- Examples -->
      <div v-if="!isChallengeActive" class="mb-6">
        <h4 class="text-sm font-bold text-mutedtext mb-3">أمثلة جاهزة للتجربة:</h4>
        <ExampleSelector 
          :examples="examples" 
          @select="loadCode"
        />
      </div>

      <div class="flex flex-col lg:flex-row gap-6 h-[500px] md:h-[600px]">
        
        <!-- Editor -->
        <div class="flex-1 h-full min-h-[250px] relative">
          <CodeEditor 
            v-model="code"
            @run="executeCode"
          />
          
          <!-- Loading Overlay -->
          <div v-if="isRunning" class="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20">
            <div class="bg-white px-6 py-3 rounded-full shadow-xl text-primary font-bold flex items-center gap-3">
              <span class="w-5 h-5 border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
              جاري التشغيل...
            </div>
          </div>
        </div>

        <!-- Output -->
        <div class="flex-1 h-full min-h-[250px]">
          <CodeOutput 
            :logs="logs"
            @clear="clearLogs"
          />
        </div>

      </div>

      <!-- Instructional Hint -->
      <div class="mt-6 text-center">
        <p class="text-lg font-bold text-maintext bg-primary/5 px-6 py-3 rounded-xl inline-block border border-primary/20">
          <Lightbulb class="inline w-6 h-6 text-yellow-500 mr-2" /> جرب تغيير الكود واضغط على <span class="text-green-600 font-black">تشغيل <Play class="inline w-4 h-4" /></span> عشان تشوف النتيجة بنفسك.
        </p>
      </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeEditor from './CodeEditor.vue'
import CodeOutput from './CodeOutput.vue'
import ExampleSelector from './ExampleSelector.vue'
import PracticeChallenge from './PracticeChallenge.vue'
import { executeJsWorker, type LogEntry } from '~/utils/executeJsWorker'
import { Lightbulb, Play } from 'lucide-vue-next'

const code = ref(`console.log("Hello Ahmed!");`)
const logs = ref<LogEntry[]>([])
const isRunning = ref(false)
const isChallengeActive = ref(false)

const rawOutputTexts = computed(() => {
  return logs.value.map(l => l.args.join(' '))
})

const examples = [
  { id: 1, title: 'طباعة رسالة', code: 'console.log("Hello");' },
  { id: 2, title: 'طباعة اسمك', code: 'console.log("Ahmed");' },
  { id: 3, title: 'الجمع', code: 'console.log(10 + 20);' },
  { id: 4, title: 'الطرح', code: 'console.log(100 - 30);' },
  { id: 5, title: 'الضرب', code: 'console.log(10 * 5);' },
  { id: 6, title: 'القسمة', code: 'console.log(100 / 4);' }
]

const challenge = {
  id: 'calc-challenge',
  prompt: 'احسب مجموع 25 + 35 باستخدام JavaScript.',
  initialCode: '// اكتب الكود هنا\n\n',
  expectedOutput: '60'
}

const loadCode = (newCode: string) => {
  code.value = newCode
  clearLogs()
}

const clearLogs = () => {
  logs.value = []
}

const handleChallengeStart = (initialCode: string) => {
  isChallengeActive.value = true
  loadCode(initialCode)
}

const handleChallengeCancel = () => {
  isChallengeActive.value = false
  loadCode(`console.log("Hello Ahmed!");`)
}

const executeCode = async () => {
  if (isRunning.value || !code.value.trim()) return
  
  isRunning.value = true
  clearLogs()

  // Add a small delay for UI feedback
  await new Promise(r => setTimeout(r, 150))

  const result = await executeJsWorker(code.value)
  
  logs.value = result.logs
  
  if (!result.success && result.error) {
    logs.value.push({ type: 'error', args: ['يوجد خطأ في الكود:'] })
    // Make errors beginner friendly if possible
    let friendlyError = result.error
    if (friendlyError.includes('Unexpected end of input') || friendlyError.includes('missing )')) {
      friendlyError = "يبدو أن هناك قوسًا غير مغلق أو ناقص."
    } else if (friendlyError.includes('Invalid or unexpected token')) {
      friendlyError = "يوجد رمز غير معروف أو علامة تنصيص ناقصة."
    } else if (friendlyError.includes('is not defined')) {
      friendlyError = "هناك كلمة غير معروفة للبرنامج. هل نسيت وضع علامات التنصيص حول النص؟"
    }
    logs.value.push({ type: 'error', args: [friendlyError] })
  }

  isRunning.value = false
}
</script>
