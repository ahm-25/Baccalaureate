<template>
  <section id="programming" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-background">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">إزاي أي برنامج بيشتغل؟</h2>
        <p class="text-2xl text-mutedtext max-w-3xl mx-auto leading-relaxed">
          أي برنامج في العالم بيعتمد على 3 خطوات أساسية:
        </p>
      </div>

      <!-- The Flow (Input -> Processing -> Output) -->
      <div class="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-16">
        <!-- Input -->
        <div class="flex-1 bg-blue-50 border border-blue-200 p-8 rounded-3xl shadow-sm text-center">
          <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
          <h3 class="text-2xl font-black text-blue-700 mb-3">INPUT (إدخال)</h3>
          <p class="text-blue-900 mb-4 font-bold">البيانات التي يدخلها المستخدم أو يحصل عليها البرنامج.</p>
          <div class="text-blue-800 text-sm">أمثلة: Name, Age, Grade, Price</div>
        </div>

        <div class="flex items-center justify-center text-4xl text-mutedtext">↓</div>

        <!-- Processing -->
        <div class="flex-1 bg-yellow-50 border border-yellow-200 p-8 rounded-3xl shadow-sm text-center">
          <div class="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
          <h3 class="text-2xl font-black text-yellow-700 mb-3">PROCESSING (معالجة)</h3>
          <p class="text-yellow-900 mb-4 font-bold">العمليات التي يقوم بها البرنامج على البيانات.</p>
          <div class="text-yellow-800 text-sm">أمثلة: Calculation, Comparison, Decision</div>
        </div>

        <div class="flex items-center justify-center text-4xl text-mutedtext">↓</div>

        <!-- Output -->
        <div class="flex-1 bg-green-50 border border-green-200 p-8 rounded-3xl shadow-sm text-center">
          <div class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
          <h3 class="text-2xl font-black text-green-700 mb-3">OUTPUT (إخراج)</h3>
          <p class="text-green-900 mb-4 font-bold">النتيجة التي يعرضها البرنامج.</p>
          <div class="text-green-800 text-sm">مثال: رسالة للمستخدم، تغيير في الشاشة</div>
        </div>
      </div>

      <!-- Example Box -->
      <div class="bg-white rounded-3xl shadow-xl border border-border/50 p-10 max-w-4xl mx-auto">
        <h3 class="text-3xl font-black text-maintext mb-8 text-center">مثال عملي: نتيجة الطالب</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 class="text-xl font-bold text-blue-600 mb-2">Input</h4>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 font-mono text-lg">Student Grade = 85</div>
          </div>
          <div>
            <h4 class="text-xl font-bold text-yellow-600 mb-2">Processing</h4>
            <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-100 font-mono text-lg">Check if grade >= 50</div>
          </div>
          <div>
            <h4 class="text-xl font-bold text-green-600 mb-2">Output</h4>
            <div class="bg-green-50 p-4 rounded-xl border border-green-100 font-mono text-lg">"Passed"</div>
          </div>
        </div>

        <div class="mt-12 bg-surface p-6 rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-center md:text-right font-bold text-lg text-maintext">الطالب يدخل الدرجة</div>
          <div class="text-mutedtext font-bold">←</div>
          <div class="text-center font-bold text-lg text-maintext">JavaScript تستقبل الدرجة</div>
          <div class="text-mutedtext font-bold">←</div>
          <div class="text-center md:text-left font-bold text-lg text-maintext">البرنامج يعالجها</div>
          <div class="text-mutedtext font-bold">←</div>
          <div class="text-center font-bold text-lg text-primary">تظهر النتيجة</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No complex script needed for this static visual explanation
</script>
