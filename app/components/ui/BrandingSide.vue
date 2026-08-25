<template>
  <div class="fixed top-1/2 left-4 md:left-6 -translate-y-1/2 z-50 flex items-center font-arabic" dir="rtl">
    
    <!-- The Card (Popover) -->
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="transform -translate-x-12 opacity-0 scale-95"
      enter-to-class="transform translate-x-0 opacity-100 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-x-0 opacity-100 scale-100"
      leave-to-class="transform -translate-x-12 opacity-0 scale-95"
    >
      <div v-if="isOpen" 
           class="absolute left-16 md:left-24 top-1/2 -translate-y-1/2 bg-surface/95 backdrop-blur-3xl border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-[32px] p-7 md:p-8 w-[300px] md:w-[340px] flex flex-col items-center text-center transition-all overflow-hidden"
           @click.stop>
           
        <!-- Subtle decorative background glow -->
        <div class="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <button @click.stop="isOpen = false" class="absolute top-5 right-5 text-mutedtext hover:text-maintext transition-colors bg-surface hover:bg-background shadow-sm border border-border rounded-full w-8 h-8 flex items-center justify-center group z-10" title="إغلاق">
          <span class="text-xl leading-none group-hover:rotate-90 transition-transform duration-300">&times;</span>
        </button>

        <!-- Premium Avatar with Gradient Border -->
        <div class="relative group mt-2 mb-4">
          <div class="absolute inset-0 bg-gradient-to-tr from-primary/80 to-primary/20 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="p-[3px] rounded-full bg-gradient-to-tr from-primary to-primary/30 relative shadow-lg">
            <!-- Increased size from w-24 to w-28 (mobile) and w-32 (desktop), reduced inner border to 3px -->
            <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-surface bg-background relative">
              <img src="/my-photo.jpg" alt="المهندس أحمد عبد الناصر" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" @error="handleImageError" v-if="!imageError" />
              <div v-else class="w-full h-full flex items-center justify-center text-primary text-3xl font-bold">
                أ.ع
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col gap-3 w-full relative z-10">
          <!-- Name without wrapping -->
          <h3 class="font-extrabold text-[22px] md:text-2xl text-maintext tracking-tight whitespace-nowrap">المهندس أحمد عبد الناصر</h3>
          
          <!-- Modern Tag -->
          <div class="inline-flex self-center">
            <p class="text-[13px] md:text-sm text-primary font-bold bg-primary/5 border border-primary/20 shadow-sm py-1.5 px-4 rounded-xl">مدرس البرمجة والذكاء الاصطناعي</p>
          </div>
          
          <!-- Subtitle -->
          <p class="text-[13px] md:text-sm text-mutedtext mt-1 leading-relaxed px-2">شرح وتبسيط منهج البكالوريا المصرية بأسلوب حديث ومبتكر</p>
          
          <!-- Contact Number -->
          <a href="tel:01017865860" class="inline-flex items-center self-center gap-2 mt-0.5 px-3.5 py-1.5 bg-background border border-border shadow-sm rounded-full hover:bg-surface hover:shadow-md hover:border-primary/40 transition-all duration-300 text-maintext hover:text-primary font-bold text-[13px] md:text-sm group" title="اتصل الآن">
            <div class="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span dir="ltr" class="tracking-widest">010 1786 5860</span>
          </a>
        </div>
      </div>
    </Transition>

    <!-- The Vertical Badge (Glass Pill) -->
    <div 
      @click.stop="isOpen = !isOpen"
      class="bg-surface/80 backdrop-blur-xl border border-border shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full py-2 px-2 flex flex-col items-center gap-4 cursor-pointer hover:bg-surface hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:translate-x-1 hover:border-primary/30 transition-all duration-500 group"
      title="المهندس أحمد عبد الناصر"
    >
      <div class="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[3px] border-surface shadow-md bg-background flex-shrink-0 relative ring-1 ring-border group-hover:ring-primary/40">
        <img src="/my-photo.jpg" alt="أحمد عبد الناصر" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" @error="handleImageError" v-if="!imageError" />
        <div v-else class="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-xl font-bold">
          أ.ع
        </div>
      </div>
      
      <!-- Rotated Text Container -->
      <div class="h-[140px] md:h-[150px] relative flex items-center justify-center w-full select-none">
        <div class="absolute whitespace-nowrap text-[13px] md:text-[14px] font-bold text-mutedtext transition-all duration-300 group-hover:text-maintext flex items-center gap-2"
             style="transform: rotate(-90deg);">
          <span class="text-primary font-extrabold text-[11px] md:text-[12px] bg-primary/10 px-2.5 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">المهندس</span>
          <span class="tracking-wide">أحمد عبد الناصر</span>
        </div>
      </div>
      
      <!-- Small indicator dot -->
      <div class="w-1.5 h-1.5 rounded-full bg-border mb-2 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_transparent] group-hover:shadow-primary/50"></div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const handleClickOutside = (e: MouseEvent) => {
  if (isOpen.value) {
    const target = e.target as HTMLElement
    // Check if the click is outside the branding component
    if (!target.closest('.z-50.fixed')) {
      isOpen.value = false
    }
  }
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>
