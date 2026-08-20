<template>
  <section id="classification" class="py-24 px-6 sm:px-12 bg-background overflow-hidden relative">
    <div class="max-w-6xl mx-auto w-full z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">نشاط التصنيف</h2>
        <p class="text-xl text-mutedtext max-w-3xl mx-auto">صنّف كل مثال في الفئة المناسبة بالضغط عليه ثم اختيار الفئة</p>
      </div>

      <!-- Categories -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div v-for="(cat, ci) in categories" :key="ci"
             class="bg-surface border-2 rounded-3xl p-6 min-h-[200px]"
             :class="cat.borderClass">
          <h3 class="text-xl font-black mb-4" :class="cat.textClass">{{ cat.title }}</h3>
          <div class="space-y-3">
            <div v-for="item in getItemsInCategory(ci)" :key="item.id"
                 class="bg-white px-4 py-3 rounded-xl border border-border font-bold text-maintext flex items-center gap-2">
              <CheckCircle2 class="w-5 h-5 text-green-500 shrink-0" />
              {{ item.text }}
            </div>
            <div v-if="getItemsInCategory(ci).length === 0" class="text-mutedtext text-center py-8 font-bold">
              اسحب العناصر هنا
            </div>
          </div>
        </div>
      </div>

      <!-- Unclassified Items -->
      <div class="bg-surface border border-border rounded-3xl p-6">
        <h3 class="text-lg font-bold text-mutedtext mb-4">العناصر:</h3>
        <div class="flex flex-wrap gap-3">
          <div v-for="item in unclassifiedItems" :key="item.id" class="relative">
            <button class="bg-white border-2 border-border px-5 py-3 rounded-xl font-bold text-maintext hover:border-primary transition-all"
                    @click="selectingItem = item.id">
              {{ item.text }}
            </button>
            <!-- Category picker dropdown -->
            <div v-if="selectingItem === item.id" class="absolute top-full left-0 mt-2 bg-white rounded-xl border border-border shadow-xl z-30 overflow-hidden w-64">
              <button v-for="(cat, ci) in categories" :key="ci"
                      @click="classifyItem(item.id, ci)"
                      class="w-full text-right px-4 py-3 hover:bg-surface font-bold border-b border-border last:border-0 transition-colors"
                      :class="cat.textClass">
                {{ cat.title }}
              </button>
            </div>
          </div>
        </div>
        
        <div v-if="unclassifiedItems.length === 0" class="text-center py-4">
          <button @click="checkClassification" class="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-xl shadow-lg hover:-translate-y-1 transition-all">
            تحقق من الإجابة
          </button>
        </div>
      </div>

      <!-- Result -->
      <Transition name="fade">
        <div v-if="result" class="mt-8 p-6 rounded-2xl border-2 text-center font-bold text-2xl"
             :class="allCorrect ? 'bg-green-50 border-green-500 text-green-600' : 'bg-red-50 border-red-500 text-red-600'">
          {{ allCorrect ? 'ممتاز! تصنيف صحيح 🎉' : 'حاول مرة أخرى! بعض العناصر في الفئة الخطأ ❌' }}
          <button v-if="!allCorrect" @click="resetAll" class="block mx-auto mt-4 text-base text-primary underline">إعادة المحاولة</button>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CheckCircle2 } from 'lucide-vue-next'

interface ClassItem { id: number; text: string; correct: number; assigned: number | null }

const selectingItem = ref<number | null>(null)
const result = ref(false)
const allCorrect = ref(false)

const categories = [
  { title: 'A — تغيرات في الحياة اليومية', borderClass: 'border-blue-300', textClass: 'text-blue-700' },
  { title: 'B — تغيرات في الصناعة والاقتصاد', borderClass: 'border-orange-300', textClass: 'text-orange-700' },
  { title: 'C — تغيرات في الرعاية الصحية والتعليم', borderClass: 'border-green-300', textClass: 'text-green-700' }
]

const items = ref<ClassItem[]>([
  { id: 1, text: 'شراء منتجات عبر التسوق الإلكتروني', correct: 0, assigned: null },
  { id: 2, text: 'الدفع مقابل المشتريات بتطبيق دفع على الهاتف الذكي', correct: 0, assigned: null },
  { id: 3, text: 'مشاركة الصور مع الأصدقاء على شبكات التواصل الاجتماعي', correct: 0, assigned: null },
  { id: 4, text: 'شركة تطبق نظام العمل من المنزل', correct: 1, assigned: null }
])

const unclassifiedItems = computed(() => items.value.filter(i => i.assigned === null))
const getItemsInCategory = (ci: number) => items.value.filter(i => i.assigned === ci)

const classifyItem = (id: number, catIndex: number) => {
  const item = items.value.find(i => i.id === id)
  if (item) item.assigned = catIndex
  selectingItem.value = null
}

const checkClassification = () => {
  allCorrect.value = items.value.every(i => i.assigned === i.correct)
  result.value = true
}

const resetAll = () => {
  items.value.forEach(i => i.assigned = null)
  result.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
