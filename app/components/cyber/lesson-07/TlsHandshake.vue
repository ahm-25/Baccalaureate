<template>
  <section id="https-animation" class="py-20 bg-slate-900 text-white relative overflow-hidden">
    <!-- Background Design -->
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900">
    </div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">كيف يعمل HTTPS؟ (مصافحة TLS)</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">شاهد كيف يتم إنشاء اتصال آمن بين المتصفح والخادم خطوة بخطوة. اضغط على كل مرحلة لترى ما يحدث خلف الكواليس.</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-center">
        <!-- Interactive Steps -->
        <div class="w-full lg:w-1/3 space-y-4">
          <button 
            v-for="(step, index) in steps" 
            :key="index"
            @click="playStep(index)"
            class="w-full text-right p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group focus:outline-none"
            :class="activeStep === index ? 'bg-slate-800 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-800/50 border-slate-700 hover:border-slate-500 hover:bg-slate-800/80'"
          >
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex shrink-0 items-center justify-center font-bold text-sm transition-colors"
                   :class="activeStep === index ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300'">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="font-bold text-slate-200" :class="activeStep === index ? 'text-emerald-400' : ''">{{ step.title }}</h3>
              </div>
            </div>
            <!-- Expanded content for active step -->
            <div class="grid transition-all duration-300 ease-in-out" :class="activeStep === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'">
              <p class="text-sm text-slate-400 leading-relaxed pr-11 overflow-hidden">
                {{ step.description }}
              </p>
            </div>
          </button>
        </div>

        <!-- Animation Canvas -->
        <div class="w-full lg:w-2/3 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 min-h-[450px] relative flex flex-col justify-center shadow-2xl">
          
          <div class="flex justify-between items-center relative w-full px-4 md:px-12">
             <!-- Connection Line Background -->
             <div class="absolute top-1/2 left-24 right-24 h-1 -translate-y-1/2 bg-slate-700 rounded-full overflow-hidden">
                <!-- Progress Line -->
                <div class="h-full bg-emerald-500 transition-all duration-1000 ease-in-out" :style="{ width: connectionProgress + '%' }"></div>
             </div>

             <!-- Browser (Client) - Right side in RTL -->
             <div class="relative z-10 flex flex-col items-center gap-4">
                <div class="w-24 h-24 bg-slate-700 border-2 rounded-2xl flex items-center justify-center shadow-lg relative transition-all duration-500" 
                     :class="activeStep === 3 ? 'border-emerald-500 ring-4 ring-emerald-500/30' : 'border-slate-600'">
                   <Monitor class="w-12 h-12 text-blue-400" />
                   
                   <!-- Lock icon appears when secure -->
                   <transition name="scale-in">
                     <div v-if="activeStep === 3" class="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-slate-800 shadow-lg">
                       <Lock class="w-4 h-4 text-slate-900" />
                     </div>
                   </transition>
                </div>
                <div class="text-center">
                  <span class="block font-bold text-slate-200">المتصفح</span>
                  <span class="text-xs text-slate-500 font-mono">Client</span>
                </div>
             </div>

             <!-- Animated Packets / Messages Area -->
             <div class="flex-1 relative h-32 w-full mx-4 overflow-hidden">
                
                <!-- Packet 1: Client Hello -->
                <div v-if="animating && activeStep === 0" class="packet-container client-to-server">
                  <div class="flex flex-col items-center bg-slate-900/90 p-3 rounded-xl border border-blue-500/30 shadow-lg">
                    <span class="text-xs text-blue-300 font-mono mb-2 whitespace-nowrap">Client Hello 👋</span>
                    <MessageSquare class="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                <!-- Packet 2: Server Hello + Cert -->
                <div v-if="animating && activeStep === 1" class="packet-container server-to-client">
                  <div class="flex flex-col items-center bg-slate-900/90 p-3 rounded-xl border border-amber-500/30 shadow-lg">
                    <span class="text-xs text-amber-300 font-mono mb-2 whitespace-nowrap">Cert + Public Key 📜</span>
                    <FileBadge class="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                <!-- Packet 3: Premaster Secret -->
                <div v-if="animating && activeStep === 2" class="packet-container client-to-server">
                  <div class="flex flex-col items-center bg-slate-900/90 p-3 rounded-xl border border-purple-500/30 shadow-lg">
                    <span class="text-xs text-purple-300 font-mono mb-2 whitespace-nowrap">Encrypted Secret 🔑</span>
                    <Key class="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                <!-- Packet 4: Secure Channel -->
                <transition name="fade">
                  <div v-if="activeStep === 3" class="absolute inset-0 flex items-center justify-center z-0">
                    <div class="flex items-center gap-3 text-emerald-400 bg-emerald-900/40 px-6 py-3 rounded-full border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] animate-pulse">
                      <ShieldCheck class="w-6 h-6" />
                      <span class="font-bold tracking-wider text-sm md:text-base">نفق اتصال آمن ومُشفر</span>
                    </div>
                  </div>
                </transition>
             </div>

             <!-- Server - Left side in RTL -->
             <div class="relative z-10 flex flex-col items-center gap-4">
                <div class="w-24 h-24 bg-slate-700 border-2 rounded-2xl flex items-center justify-center shadow-lg relative transition-all duration-500"
                     :class="activeStep === 3 ? 'border-emerald-500 ring-4 ring-emerald-500/30' : 'border-slate-600'">
                   <Server class="w-12 h-12 text-amber-400" />
                   
                   <!-- Cert icon -->
                   <transition name="scale-in">
                     <div v-if="activeStep >= 1" class="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center border-2 border-slate-800 shadow-lg">
                       <Shield class="w-4 h-4 text-slate-900" />
                     </div>
                   </transition>
                </div>
                <div class="text-center">
                  <span class="block font-bold text-slate-200">الخادم</span>
                  <span class="text-xs text-slate-500 font-mono">Server</span>
                </div>
             </div>
          </div>

          <!-- Live Description Status -->
          <div class="mt-16 text-center max-w-lg mx-auto bg-slate-900 border border-slate-700 p-5 rounded-2xl shadow-inner min-h-[100px] flex items-center justify-center transition-all duration-300" :class="activeStep === 3 ? 'border-emerald-500/50 bg-emerald-900/10' : ''">
             <transition name="fade" mode="out-in">
               <p :key="activeStep" class="font-medium text-sm leading-relaxed" 
                  :class="{
                    'text-blue-300': activeStep === 0,
                    'text-amber-300': activeStep === 1,
                    'text-purple-300': activeStep === 2,
                    'text-emerald-400': activeStep === 3
                  }">
                 {{ stepDetails[activeStep] }}
               </p>
             </transition>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Monitor, Server, MessageSquare, FileBadge, Key, Lock, ShieldCheck, Shield } from 'lucide-vue-next'

const activeStep = ref(0)
const animating = ref(true)

const steps = [
  {
    title: 'مرحلة Client Hello',
    description: 'يبدأ المتصفح الاتصال بإرسال رسالة ترحيب تحتوي على إصدار TLS المدعوم وقائمة بخوارزميات التشفير التي يفضلها.'
  },
  {
    title: 'مرحلة Server Hello والشهادة',
    description: 'يرد الخادم باختيار خوارزمية التشفير، ويُرسل "شهادته الرقمية" التي تحتوي على مفتاحه العام لإثبات هويته.'
  },
  {
    title: 'مرحلة تبادل المفاتيح',
    description: 'يتحقق المتصفح من الشهادة، ثم يُنشئ "سراً عشوائياً" ويقوم بتشفيره باستخدام المفتاح العام للخادم ويرسله.'
  },
  {
    title: 'إنشاء الاتصال الآمن (HTTPS)',
    description: 'يفك الخادم تشفير السر بمفتاحه الخاص. الآن كلا الطرفين يمتلكان نفس السر ويستخدمانه لتوليد "مفاتيح الجلسة" لتشفير كل البيانات.'
  }
]

const stepDetails = [
  "المتصفح ⬅️ الخادم: مرحباً، أريد التواصل بأمان. هذه هي الخوارزميات التي أدعمها.",
  "الخادم ⬅️ المتصفح: مرحباً بك. سنستخدم هذه الخوارزمية، وهذه هويتي (الشهادة والمفتاح العام).",
  "المتصفح ⬅️ الخادم: لقد تحققت من هويتك. إليك هذا السر المشترك (مشفر بمفتاحك العام لا يمكن لأحد غيرك قراءته).",
  "الآن كلا الطرفين يستخدمان التشفير المتماثل (السريع) باستخدام السر المشترك. تم تأمين الاتصال! 🔒"
]

const connectionProgress = computed(() => {
  if (activeStep.value === 0) return 25;
  if (activeStep.value === 1) return 50;
  if (activeStep.value === 2) return 75;
  return 100;
})

function playStep(index) {
  if (activeStep.value === index) return;
  activeStep.value = index;
  
  // Restart animation
  animating.value = false;
  setTimeout(() => {
    animating.value = true;
  }, 50);
}

// Auto play steps initially if desired, or let user click
// onMounted(() => {
//   setInterval(() => {
//     playStep((activeStep.value + 1) % 4)
//   }, 6000)
// })
</script>

<style scoped>
/* 
  Animations for packets 
  In RTL layout:
  Right side = Browser (Client)
  Left side = Server
*/

.packet-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* Client to Server (Right to Left) */
.client-to-server {
  right: 0;
  animation: moveLeft 2.5s ease-in-out forwards infinite;
}

@keyframes moveLeft {
  0% { right: 0; opacity: 0; transform: translateY(-50%) scale(0.8); }
  15% { opacity: 1; transform: translateY(-50%) scale(1); }
  85% { opacity: 1; transform: translateY(-50%) scale(1); }
  100% { right: calc(100% - 100px); opacity: 0; transform: translateY(-50%) scale(0.8); }
}

/* Server to Client (Left to Right) */
.server-to-client {
  left: 0;
  animation: moveRight 2.5s ease-in-out forwards infinite;
}

@keyframes moveRight {
  0% { left: 0; opacity: 0; transform: translateY(-50%) scale(0.8); }
  15% { opacity: 1; transform: translateY(-50%) scale(1); }
  85% { opacity: 1; transform: translateY(-50%) scale(1); }
  100% { left: calc(100% - 100px); opacity: 0; transform: translateY(-50%) scale(0.8); }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-in-enter-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.scale-in-leave-active {
  transition: all 0.3s ease;
}
.scale-in-enter-from,
.scale-in-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>

