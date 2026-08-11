<template>
  <section id="let-vs-const" class="min-h-screen relative flex flex-col items-center justify-center py-20 bg-surface">
    <div class="max-w-4xl mx-auto px-6 w-full">
      <h2 class="text-4xl font-bold text-maintext mb-16 text-center">الخلاصة: امتى أستخدم let وامتى const؟</h2>
      
      <div class="bg-background border border-border rounded-3xl shadow-xl overflow-hidden">
        <table class="w-full text-center">
          <thead>
            <tr class="bg-surface border-b border-border">
              <th class="py-6 px-4 text-xl text-mutedtext font-bold">المقارنة</th>
              <th class="py-6 px-4 text-3xl font-mono text-primary font-bold border-r border-border">let</th>
              <th class="py-6 px-4 text-3xl font-mono text-accent font-bold border-r border-border">const</th>
            </tr>
          </thead>
          <tbody>
            <!-- Feature 1 -->
            <tr class="border-b border-border hover:bg-surface/50 transition-colors">
              <td class="py-6 px-4 text-lg text-maintext font-bold">ينفع نغير قيمتها؟</td>
              <td class="py-6 px-4 border-r border-border">
                <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div class="mt-2 text-green-500 font-bold">أيوة</div>
              </td>
              <td class="py-6 px-4 border-r border-border">
                <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <div class="mt-2 text-red-500 font-bold">لأ (خطأ)</div>
              </td>
            </tr>
            <!-- Feature 2 -->
            <tr class="hover:bg-surface/50 transition-colors">
              <td class="py-6 px-4 text-lg text-maintext font-bold">أستخدمها امتى؟</td>
              <td class="py-6 px-4 text-mutedtext border-r border-border leading-relaxed">
                لو القيمة هتتغير<br>مثال: السن، الدرجة
              </td>
              <td class="py-6 px-4 text-mutedtext border-r border-border leading-relaxed">
                لو القيمة ثابتة ومش هتتغير<br>مثال: رقم الـ PI، البلد
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
