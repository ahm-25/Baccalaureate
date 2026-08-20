<template>
  <section id="think-engineer" class="py-24 px-6 sm:px-12 bg-background overflow-hidden relative">
    <div class="max-w-5xl mx-auto w-full z-10">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <Wrench class="w-5 h-5 text-accent" />
          <span class="text-lg font-bold text-accent">مشروع صغير</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">فكّر كمهندس: ابحث ثم قرر</h2>
      </div>

      <div class="space-y-8">
        <!-- Step 1 -->
        <div class="bg-white rounded-3xl border border-border p-8 shadow-md">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xl shrink-0">1</div>
            <h3 class="text-2xl font-black text-maintext">اجمع البيانات</h3>
          </div>
          <p class="text-lg font-bold text-mutedtext mb-6 leading-relaxed">
            اسأل 10 من زملائك: "هل تدفع عادة نقدًا أم بطريقة غير نقدية؟"
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div v-for="(method, i) in paymentMethods" :key="i" class="text-center">
              <label class="block font-bold text-maintext mb-2">{{ method.label }}</label>
              <input type="number" v-model.number="method.count" min="0" max="10"
                     class="w-full bg-surface border-2 border-border rounded-xl p-3 text-center text-2xl font-black focus:outline-none focus:border-primary" />
            </div>
          </div>

          <!-- Simple Chart -->
          <div class="bg-surface rounded-2xl p-6 border border-border">
            <h4 class="font-bold text-mutedtext mb-4 text-center">النتائج:</h4>
            <div class="flex items-end justify-center gap-6 h-40">
              <div v-for="(method, i) in paymentMethods" :key="i" class="flex flex-col items-center flex-1">
                <div class="w-full max-w-[60px] rounded-t-lg transition-all duration-500"
                     :class="method.color"
                     :style="{ height: `${Math.max((method.count / 10) * 100, 4)}%` }"></div>
                <span class="text-xs font-bold text-mutedtext mt-2 text-center">{{ method.label }}</span>
                <span class="text-lg font-black text-maintext">{{ method.count }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white rounded-3xl border border-border p-8 shadow-md">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-black text-xl shrink-0">2</div>
            <h3 class="text-2xl font-black text-maintext">حلّل أصحاب المصلحة</h3>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full text-right border-collapse">
              <thead>
                <tr class="bg-surface">
                  <th class="p-4 font-black text-maintext border border-border rounded-tr-xl">صاحب المصلحة</th>
                  <th class="p-4 font-black text-green-700 border border-border">الفائدة</th>
                  <th class="p-4 font-black text-red-700 border border-border rounded-tl-xl">العيب / التحدي</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in stakeholders" :key="i">
                  <td class="p-4 font-bold text-maintext border border-border bg-surface">{{ row.name }}</td>
                  <td class="p-4 border border-border">
                    <textarea v-model="row.benefit" rows="2" placeholder="اكتب الفائدة..."
                              class="w-full bg-green-50 border border-green-200 rounded-xl p-3 text-base font-medium focus:outline-none focus:border-green-400 resize-none"></textarea>
                  </td>
                  <td class="p-4 border border-border">
                    <textarea v-model="row.challenge" rows="2" placeholder="اكتب التحدي..."
                              class="w-full bg-red-50 border border-red-200 rounded-xl p-3 text-base font-medium focus:outline-none focus:border-red-400 resize-none"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white rounded-3xl border border-border p-8 shadow-md">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-black text-xl shrink-0">3</div>
            <h3 class="text-2xl font-black text-maintext">اتخذ قرارًا</h3>
          </div>
          
          <p class="text-xl font-bold text-maintext mb-6 leading-relaxed">
            هل ينبغي أن يتجه مجتمعك نحو الدفع غير النقدي؟
          </p>

          <div class="space-y-4">
            <div>
              <label class="font-bold text-maintext mb-2 block">أوصِ بخطوة واحدة:</label>
              <textarea v-model="recommendation" rows="2" placeholder="اكتب توصيتك..."
                        class="w-full bg-surface border-2 border-border rounded-xl p-4 font-medium focus:outline-none focus:border-primary resize-none"></textarea>
            </div>
            <div>
              <label class="font-bold text-maintext mb-2 block">قدّم سببين:</label>
              <textarea v-model="reasons" rows="3" placeholder="اكتب السببين هنا..."
                        class="w-full bg-surface border-2 border-border rounded-xl p-4 font-medium focus:outline-none focus:border-primary resize-none"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Wrench } from 'lucide-vue-next'

const paymentMethods = reactive([
  { label: 'نقدًا', count: 0, color: 'bg-gray-400' },
  { label: 'بطاقة', count: 0, color: 'bg-blue-500' },
  { label: 'تطبيق هاتف', count: 0, color: 'bg-green-500' },
  { label: 'QR', count: 0, color: 'bg-purple-500' }
])

const stakeholders = reactive([
  { name: 'عميل يدفع', benefit: '', challenge: '' },
  { name: 'صاحب متجر صغير', benefit: '', challenge: '' },
  { name: 'شخص ليس لديه بطاقة أو هاتف ذكي', benefit: '', challenge: '' }
])

const recommendation = ref('')
const reasons = ref('')
</script>
