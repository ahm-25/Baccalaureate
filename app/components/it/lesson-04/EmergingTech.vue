<template>
  <section id="emerging-tech" class="min-h-screen relative flex flex-col justify-center py-24 px-6 sm:px-12 bg-surface overflow-hidden">
    <div class="max-w-7xl mx-auto w-full z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span class="text-lg font-bold text-primary">القسم الثالث</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">3. تقنيات ناشئة بارزة</h2>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button v-for="(tech, i) in techs" :key="i" @click="activeTab = i"
                class="px-6 py-3 rounded-2xl font-bold text-lg border-2 transition-all"
                :class="activeTab === i ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-maintext border-border hover:border-primary/40'">
          {{ tech.title }}
        </button>
      </div>

      <!-- Content -->
      <Transition name="fade" mode="out-in">
        <div :key="activeTab" class="max-w-5xl mx-auto">
          
          <!-- Self-Driving -->
          <div v-if="activeTab === 0" class="space-y-8">
            <div class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-lg">
              <h3 class="text-3xl font-black text-maintext mb-6">القيادة الذاتية</h3>
              <p class="text-xl font-bold text-mutedtext leading-relaxed mb-8">
                تقنية تستخدم الذكاء الاصطناعي للمساعدة على قيادة المركبة.
              </p>
              
              <!-- How it works -->
              <div class="flex flex-wrap justify-center items-center gap-4 mb-10">
                <div v-for="(step, i) in drivingSteps" :key="i" class="flex items-center gap-4">
                  <div class="bg-surface border border-border px-5 py-3 rounded-xl font-bold text-maintext text-center">{{ step }}</div>
                  <ArrowLeft v-if="i < drivingSteps.length - 1" class="w-5 h-5 text-mutedtext hidden md:block" />
                </div>
              </div>

              <!-- Edge Computing -->
              <div class="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 mb-8">
                <h4 class="text-2xl font-black text-blue-800 mb-4">الحوسبة الطرفية (Edge Computing)</h4>
                <p class="text-lg font-bold text-blue-900 leading-relaxed mb-6">
                  بعض بيانات القيادة تحتاج إلى معالجة فورية على المركبة نفسها بدلاً من إرسالها إلى السحابة.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-green-50 p-5 rounded-2xl border border-green-200 text-center">
                    <p class="text-sm font-bold text-green-600 mb-2">✅ الحوسبة الطرفية</p>
                    <p class="font-bold text-green-800">المركبة ← معالجة فورية ← قرار</p>
                  </div>
                  <div class="bg-red-50 p-5 rounded-2xl border border-red-200 text-center">
                    <p class="text-sm font-bold text-red-600 mb-2">❌ بدون الحوسبة الطرفية</p>
                    <p class="font-bold text-red-800">المركبة ← السحابة ← تأخير ← قرار</p>
                  </div>
                </div>
              </div>

              <!-- Think -->
              <div class="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6 flex items-start gap-4">
                <span class="text-3xl">🤔</span>
                <div>
                  <h4 class="font-black text-maintext mb-1">فكّر</h4>
                  <p class="text-lg font-bold text-maintext">لماذا يكون من الضروري معالجة البيانات فورًا على المركبة نفسها؟</p>
                </div>
              </div>
            </div>
          </div>

          <!-- AR/VR -->
          <div v-if="activeTab === 1" class="space-y-8">
            <div class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-lg">
              <h3 class="text-3xl font-black text-maintext mb-8">الواقع المعزز والواقع الافتراضي</h3>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Real World -->
                <div class="bg-gray-50 border-2 border-gray-200 rounded-3xl p-6 text-center">
                  <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye class="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 class="text-xl font-black text-maintext mb-3">العالم الحقيقي</h4>
                  <p class="font-bold text-mutedtext">ما نراه بالعين المجردة بدون أي إضافة رقمية</p>
                </div>

                <!-- AR -->
                <div class="bg-blue-50 border-2 border-blue-300 rounded-3xl p-6 text-center">
                  <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers class="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 class="text-xl font-black text-blue-800 mb-3">AR — الواقع المعزز</h4>
                  <p class="font-bold text-blue-900 leading-relaxed">تقنية تضيف عناصر أو معلومات رقمية إلى مشهد من العالم الحقيقي.</p>
                </div>

                <!-- VR -->
                <div class="bg-purple-50 border-2 border-purple-300 rounded-3xl p-6 text-center">
                  <div class="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Glasses class="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 class="text-xl font-black text-purple-800 mb-3">VR — الواقع الافتراضي</h4>
                  <p class="font-bold text-purple-900 leading-relaxed">تقنية تضع المستخدم داخل بيئة افتراضية مولدة حاسوبيًا بالكامل.</p>
                </div>
              </div>

              <div class="bg-surface border border-border rounded-2xl p-6 text-center">
                <p class="text-lg font-bold text-maintext">
                  <span class="text-blue-600">AR</span> = العالم الحقيقي + طبقة رقمية &nbsp;|&nbsp;
                  <span class="text-purple-600">VR</span> = عالم افتراضي بالكامل
                </p>
              </div>
            </div>
          </div>

          <!-- Quantum -->
          <div v-if="activeTab === 2" class="space-y-8">
            <div class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-lg">
              <h3 class="text-3xl font-black text-maintext mb-6">الحوسبة الكمومية</h3>
              <p class="text-xl font-bold text-mutedtext leading-relaxed mb-10">
                نهج حوسبي يستخدم خصائص ميكانيكا الكم لمعالجة المعلومات، وقد يوفر تفوقًا في فئات محددة من المسائل، لكنه لا يسرّع جميع أنواع الحسابات.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <!-- Bit -->
                <div class="bg-gray-50 border-2 border-gray-200 rounded-3xl p-8 text-center">
                  <h4 class="text-2xl font-black text-maintext mb-4">Bit — البت التقليدي</h4>
                  <div class="flex justify-center gap-8 mb-6">
                    <div class="w-20 h-20 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center font-black text-3xl text-gray-600">0</div>
                    <span class="font-black text-2xl text-gray-400 self-center">أو</span>
                    <div class="w-20 h-20 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center font-black text-3xl text-gray-600">1</div>
                  </div>
                  <p class="font-bold text-mutedtext">يكون إما 0 أو 1 في أي لحظة</p>
                </div>

                <!-- Qubit -->
                <div class="bg-purple-50 border-2 border-purple-300 rounded-3xl p-8 text-center">
                  <h4 class="text-2xl font-black text-purple-800 mb-4">Qubit — البت الكمومي</h4>
                  <div class="flex justify-center mb-6">
                    <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-purple-300/50">
                      0+1
                    </div>
                  </div>
                  <p class="font-bold text-purple-900">يستخدم التراكب الكمومي ليكون في حالتين معًا</p>
                </div>
              </div>

              <div class="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                <p class="text-lg font-bold text-maintext">
                  ⚠️ الحوسبة الكمومية لا تزال في مراحل مبكرة وتناسب مسائل محددة وليس كل أنواع الحسابات.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, Eye, Layers, Glasses } from 'lucide-vue-next'

const activeTab = ref(0)

const techs = [
  { title: 'القيادة الذاتية' },
  { title: 'الواقع المعزز / الافتراضي' },
  { title: 'الحوسبة الكمومية' }
]

const drivingSteps = ['كاميرات', 'حساسات', 'ذكاء اصطناعي', 'قرار', 'تحكم في المركبة']
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
