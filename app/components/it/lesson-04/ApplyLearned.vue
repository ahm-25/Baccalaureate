<template>
  <section id="apply" class="py-24 px-6 sm:px-12 bg-surface overflow-hidden relative">
    <div class="max-w-4xl mx-auto w-full z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black text-maintext mb-4">طبّق ما تعلمت</h2>
      </div>

      <div class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-lg">
        <!-- Scenario -->
        <div class="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10">
          <p class="text-xl font-black text-maintext leading-relaxed">
            قرية لم يكن فيها اتصال بالإنترنت من قبل، ثم اتصلت بالإنترنت عالي السرعة وأصبحت خدمات الدفع غير النقدي متاحة فيها.
          </p>
        </div>

        <div class="space-y-8">
          <div>
            <label class="text-xl font-black text-maintext mb-3 block">1. توقع تغيرين قد يطرآن على الحياة اليومية:</label>
            <textarea v-model="answer1" rows="3" placeholder="اكتب إجابتك هنا..."
                      class="w-full bg-surface border-2 border-border rounded-2xl p-5 text-lg font-medium focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>

          <div>
            <label class="text-xl font-black text-maintext mb-3 block">2. حدد تحديًا جديدًا محتملًا:</label>
            <textarea v-model="answer2" rows="3" placeholder="اكتب إجابتك هنا..."
                      class="w-full bg-surface border-2 border-border rounded-2xl p-5 text-lg font-medium focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>

          <div>
            <label class="text-xl font-black text-maintext mb-3 block">3. فسر إجابتك:</label>
            <textarea v-model="answer3" rows="3" placeholder="اكتب إجابتك هنا..."
                      class="w-full bg-surface border-2 border-border rounded-2xl p-5 text-lg font-medium focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const answer1 = ref('')
const answer2 = ref('')
const answer3 = ref('')
</script>
