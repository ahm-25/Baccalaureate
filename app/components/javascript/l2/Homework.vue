<template>
  <section id="homework" class="min-h-screen relative flex items-center justify-center py-20 bg-background">
    <div class="max-w-3xl mx-auto px-6 w-full">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-black text-maintext mb-6">مهمتك قبل الدرس الجاي 📝</h2>
        <p class="text-xl text-mutedtext">افتح ملف JavaScript عندك على الكمبيوتر، أو استخدم موقع زي CodePen ونفذ المهام دي:</p>
      </div>
      
      <div class="bg-surface border border-border rounded-3xl p-8 shadow-xl">
        <div class="space-y-4">
          
          <label class="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors cursor-pointer group">
            <div class="relative flex items-center justify-center mt-1">
              <input type="checkbox" class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-xl font-bold text-maintext group-hover:text-primary transition-colors">اعمل متغير لاسمك</div>
            </div>
          </label>

          <label class="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors cursor-pointer group">
            <div class="relative flex items-center justify-center mt-1">
              <input type="checkbox" class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-xl font-bold text-maintext group-hover:text-primary transition-colors">اعمل متغير لسنك</div>
            </div>
          </label>

          <label class="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors cursor-pointer group">
            <div class="relative flex items-center justify-center mt-1">
              <input type="checkbox" class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-xl font-bold text-maintext group-hover:text-primary transition-colors">اعمل متغير لمادتك المفضلة</div>
            </div>
          </label>
          
          <label class="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors cursor-pointer group">
            <div class="relative flex items-center justify-center mt-1">
              <input type="checkbox" class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-xl font-bold text-maintext group-hover:text-primary transition-colors">اعمل متغير للدرجة بتاعتك</div>
            </div>
          </label>
          
          <label class="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors cursor-pointer group">
            <div class="relative flex items-center justify-center mt-1">
              <input type="checkbox" class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-xl font-bold text-maintext group-hover:text-primary transition-colors">اعمل متغير Boolean يوضح إنك طالب (true)</div>
            </div>
          </label>

          <label class="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors cursor-pointer group">
            <div class="relative flex items-center justify-center mt-1">
              <input type="checkbox" class="w-6 h-6 rounded-md border-2 border-border checked:bg-primary checked:border-primary appearance-none transition-colors peer cursor-pointer" />
              <svg class="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-xl font-bold text-maintext group-hover:text-primary transition-colors">اطبعهم كلهم باستخدام console.log</div>
            </div>
          </label>

        </div>
      </div>
    </div>
  </section>
</template>
