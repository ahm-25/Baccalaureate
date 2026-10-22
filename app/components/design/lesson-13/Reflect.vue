<template>
  <section id="reflection" class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 mb-8">
        <span class="text-2xl">⭐</span>
        <h2 class="text-2xl font-bold text-slate-900">فكّر وتحدَّ نفسك</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">🤔</span>
            <h3 class="text-2xl font-bold text-slate-800">تأمل</h3>
          </div>
          <p class="text-lg text-slate-600 font-medium leading-relaxed mb-6">
            أي وسيلة تثق بها شخصيًا أكثر للأخبار المهمة، ولماذا؟
          </p>
          <textarea
            class="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-slate-700"
            rows="3"
            placeholder="اكتب أفكارك هنا... (للتفكير الشخصي)"
          ></textarea>
        </div>

        <div class="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 rounded-3xl border border-teal-500 shadow-md hover:shadow-lg transition-shadow text-white">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">🚀</span>
            <h3 class="text-2xl font-bold">التحدي</h3>
          </div>
          <p class="text-lg text-teal-50 font-medium leading-relaxed mb-6">
            خطّط لمزيج الوسائط للإعلان عن فعالية مدرسية بميزانية تستبعد التلفزيون – ثم اذكر جمهورًا واحدًا قد يفوّته مزيجك، ولماذا.
          </p>
          <textarea
            class="w-full bg-white/10 border border-white/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none text-white placeholder-teal-100"
            rows="3"
            placeholder="مثال: ملصقات + مجموعة واتساب + صفحة على الموقع… لكن قد يفوّت…"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>
