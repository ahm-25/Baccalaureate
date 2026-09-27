<template>
  <section id="reflection" class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid md:grid-cols-2 gap-8">
        
        <!-- Reflection -->
        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">🤔</span>
            <h3 class="text-2xl font-bold text-slate-800">تأمل</h3>
          </div>
          <p class="text-lg text-slate-600 font-medium leading-relaxed mb-6">
            "هل كنت تعتقد أن دقة الذكاء الاصطناعي وحدها تكفي لجعل استخدامه مسؤولًا؟ لماذا؟"
          </p>
          <textarea 
            class="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-slate-700" 
            rows="3" 
            placeholder="اكتب أفكارك هنا... (للتفكير الشخصي)"
          ></textarea>
        </div>

        <!-- Challenge -->
        <div class="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-3xl border border-indigo-500 shadow-md hover:shadow-lg transition-shadow text-white">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">🚀</span>
            <h3 class="text-2xl font-bold">تحدٍ</h3>
          </div>
          <p class="text-lg text-indigo-50 font-medium leading-relaxed mb-6">
            "اختر تطبيقًا للذكاء الاصطناعي من حياتك اليومية، وحدد مبدأً أخلاقيًا واحدًا يجب مراعاته عند استخدامه، وفسر السبب."
          </p>
          <textarea 
            class="w-full bg-white/10 border border-white/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none text-white placeholder-indigo-200" 
            rows="3" 
            placeholder="مثال: تطبيق يوتيوب ومبدأ الخصوصية..."
          ></textarea>
        </div>

      </div>
      
    </div>
  </section>
</template>
