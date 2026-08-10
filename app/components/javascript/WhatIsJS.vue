<template>
  <section id="javascript" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">طيب... JavaScript إيه؟</h2>
        <p class="text-2xl text-mutedtext max-w-4xl mx-auto leading-relaxed p-6 bg-white rounded-3xl shadow-sm border border-border">
          <span class="font-bold text-primary">JavaScript</span> هي لغة برمجة تُستخدم لإضافة 
          <span class="text-accent font-bold">التفاعل</span>، 
          <span class="text-blue-500 font-bold">السلوك</span>، و
          <span class="text-green-500 font-bold">المنطق</span> 
          إلى صفحات الويب.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Interaction -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-border/50 text-center group hover:-translate-y-2 transition-transform">
          <div class="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M13.8 12H3"/></svg>
          </div>
          <h3 class="text-2xl font-black text-maintext mb-4">التفاعل</h3>
          <p class="text-mutedtext mb-6">الاستجابة لضغطات المستخدم.</p>
          <button @click="toggleInteraction" class="bg-accent text-white px-6 py-2 rounded-lg font-bold w-full hover:bg-accent/90 transition-colors">
            {{ interactionText }}
          </button>
        </div>

        <!-- Logic -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-border/50 text-center group hover:-translate-y-2 transition-transform">
          <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <h3 class="text-2xl font-black text-maintext mb-4">المنطق</h3>
          <p class="text-mutedtext mb-6">القيام بالعمليات الحسابية والتحقق.</p>
          <div class="flex items-center gap-2">
            <input type="number" v-model.number="num1" class="w-full bg-surface border border-border rounded-lg px-2 py-2 text-center text-xl font-bold" />
            <span class="text-xl font-bold">+</span>
            <input type="number" v-model.number="num2" class="w-full bg-surface border border-border rounded-lg px-2 py-2 text-center text-xl font-bold" />
          </div>
          <div class="mt-4 text-2xl font-black text-green-600 bg-green-50 py-2 rounded-lg border border-green-100">
            = {{ num1 + num2 }}
          </div>
        </div>

        <!-- Behavior -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-border/50 text-center group hover:-translate-y-2 transition-transform">
          <div class="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <h3 class="text-2xl font-black text-maintext mb-4">السلوك</h3>
          <p class="text-mutedtext mb-6">تغيير محتوى الصفحة وإظهار/إخفاء العناصر.</p>
          <button @click="toggleBehavior" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold w-full hover:bg-blue-700 transition-colors mb-4">
            {{ isVisible ? 'إخفاء العنصر' : 'إظهار العنصر' }}
          </button>
          <div class="h-12 flex items-center justify-center">
            <Transition name="fade">
              <div v-if="isVisible" class="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-bold border border-blue-200">
                أنا موجود الآن! 👋
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const interactionText = ref('اضغط هنا')
const toggleInteraction = () => {
  interactionText.value = interactionText.value === 'اضغط هنا' ? 'تم الضغط! ✨' : 'اضغط هنا'
}

const num1 = ref(5)
const num2 = ref(7)

const isVisible = ref(true)
const toggleBehavior = () => {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
