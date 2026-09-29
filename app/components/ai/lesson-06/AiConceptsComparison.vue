<template>
  <section id="ai-concepts-comparison" class="py-16 bg-white border-t border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">الهلوسة vs الصندوق الأسود vs XAI</h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          أهم حاجة للطلاب إنهم يفهموا إن الهلوسة والصندوق الأسود وXAI مش نفس المشكلة؛ كل واحد بيتكلم عن جانب مختلف من نظام الذكاء الاصطناعي.
        </p>
      </div>

      <!-- المقارنة ببساطة -->
      <div class="overflow-x-auto bg-slate-50 rounded-2xl border border-slate-200 shadow-sm mb-16">
        <table class="w-full text-right border-collapse">
          <thead>
            <tr class="bg-indigo-50 border-b border-indigo-100">
              <th class="p-4 font-bold text-indigo-900">المفهوم</th>
              <th class="p-4 font-bold text-indigo-900">معناه ببساطة</th>
              <th class="p-4 font-bold text-indigo-900">السؤال اللي بيسأله</th>
              <th class="p-4 font-bold text-indigo-900">مثال</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-700">
            <tr class="hover:bg-slate-100 transition-colors">
              <td class="p-4 font-bold text-rose-600">🧠 الهلوسة</td>
              <td class="p-4">النظام يعطي معلومة غير صحيحة وكأنه متأكد منها</td>
              <td class="p-4 font-semibold">هل النتيجة صحيحة؟</td>
              <td class="p-4">الطالب يسأل AI عن معلومة، فيعطيه إجابة خاطئة لكنها تبدو مقنعة</td>
            </tr>
            <tr class="hover:bg-slate-100 transition-colors">
              <td class="p-4 font-bold text-slate-800">📦 الصندوق الأسود</td>
              <td class="p-4">نعرف المدخلات والنتيجة، لكن لا نفهم جيدًا كيف وصل النظام إليها</td>
              <td class="p-4 font-semibold">إزاي وصل للنتيجة؟</td>
              <td class="p-4">AI يقول: "الطالب حصل على 7/10" بدون توضيح كيف حسب الدرجة</td>
            </tr>
            <tr class="hover:bg-slate-100 transition-colors">
              <td class="p-4 font-bold text-emerald-600">🔍 XAI</td>
              <td class="p-4">أساليب تساعدنا على فهم العوامل التي ساهمت في النتيجة</td>
              <td class="p-4 font-semibold">ليه وصل للنتيجة؟</td>
              <td class="p-4">AI يقول: "أعطيت الطالب 7/10 لأن إجاباته في الأسئلة 1 و2 و4 صحيحة..."</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- تخيلوها كده -->
      <h3 class="text-2xl font-bold text-slate-800 mb-8 text-center">تخيلوها كده:</h3>
      
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        
        <!-- الهلوسة -->
        <div class="bg-rose-50 rounded-3xl p-6 border border-rose-100 shadow-sm flex flex-col">
          <div class="text-rose-600 font-bold text-xl mb-4 text-center border-b border-rose-200 pb-3">🧠 الهلوسة</div>
          <div class="bg-white rounded-xl p-4 text-center border border-rose-200 mb-4 flex-grow flex items-center justify-center flex-col gap-2">
            <span class="font-bold text-slate-700">AI</span>
            <span class="text-rose-400">↓</span>
            <span class="font-bold text-rose-600">إجابة غلط ❌</span>
          </div>
          <p class="text-rose-800 text-center font-medium">المشكلة هنا في <strong class="font-bold">صحة المعلومة أو النتيجة</strong>.</p>
        </div>

        <!-- الصندوق الأسود -->
        <div class="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div class="text-slate-800 font-bold text-xl mb-4 text-center border-b border-slate-300 pb-3">📦 الصندوق الأسود</div>
          <div class="bg-white rounded-xl p-4 text-center border border-slate-300 mb-4 flex-grow flex items-center justify-center flex-col gap-2">
            <span class="font-bold text-slate-700">البيانات</span>
            <span class="text-slate-400">↓</span>
            <span class="font-bold bg-slate-800 text-white px-4 py-1 rounded-lg">AI ❓</span>
            <span class="text-slate-400">↓</span>
            <span class="font-bold text-slate-700">نتيجة</span>
          </div>
          <p class="text-slate-700 text-center font-medium">إيه اللي حصل جوه؟<br/>المشكلة هنا إننا <strong class="font-bold">مش فاهمين طريقة الوصول للنتيجة</strong>.</p>
        </div>

        <!-- XAI -->
        <div class="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 shadow-sm flex flex-col">
          <div class="text-emerald-700 font-bold text-xl mb-4 text-center border-b border-emerald-200 pb-3">🔍 XAI</div>
          <div class="bg-white rounded-xl p-4 border border-emerald-200 mb-4 flex-grow flex flex-col items-center justify-center gap-1">
             <span class="font-bold text-slate-700">البيانات → AI → النتيجة</span>
             <div class="text-emerald-600 text-sm mt-2 text-right w-full flex flex-col gap-1 items-start pr-4">
                <span>↳ السبب 1</span>
                <span>↳ السبب 2</span>
                <span>↳ السبب 3</span>
             </div>
          </div>
          <p class="text-emerald-800 text-center font-medium">هنا النظام بيساعد الإنسان على <strong class="font-bold">فهم العوامل</strong> التي ساهمت في النتيجة.</p>
        </div>
      </div>

      <!-- مثال واحد يجمع التلاتة -->
      <div class="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 mb-16">
        <h3 class="text-2xl font-bold text-indigo-900 mb-6 text-center">مثال واحد يجمع التلاتة (تخيل AI بيصحح امتحان)</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-rose-100">
            <h4 class="font-bold text-rose-600 mb-2">🧠 الهلوسة:</h4>
            <p class="text-slate-700">يقول إن إجابة الطالب صحيحة وهي في الحقيقة خطأ.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <h4 class="font-bold text-slate-800 mb-2">📦 الصندوق الأسود:</h4>
            <p class="text-slate-700 mb-2">يقول:</p>
            <div class="bg-slate-100 p-2 rounded text-center font-bold text-slate-800">الطالب = 7/10</div>
            <p class="text-slate-500 text-sm mt-2">لكن مش واضح إزاي وصل للـ7.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100">
            <h4 class="font-bold text-emerald-600 mb-2">🔍 XAI:</h4>
            <p class="text-slate-700 mb-2">يقول:</p>
            <div class="bg-emerald-50 p-3 rounded text-sm font-medium text-emerald-800 border border-emerald-100">
              <div>السؤال 1 ✅</div>
              <div>السؤال 2 ✅</div>
              <div>السؤال 3 ❌</div>
              <div>السؤال 4 ⚠️</div>
              <div class="mt-2 font-bold border-t border-emerald-200 pt-1">ولذلك الدرجة = 7/10.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- جملة تحفظها للطلاب -->
      <div class="bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center shadow-sm">
        <h3 class="text-xl font-bold text-amber-800 mb-6">💡 جملة تحفظها للطلاب</h3>
        
        <div class="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
          <div class="bg-white px-6 py-3 rounded-xl border border-amber-100 shadow-sm flex items-center justify-between text-right">
            <span class="font-bold text-rose-600 text-lg w-1/3">الهلوسة =</span>
            <span class="text-slate-700 font-medium w-2/3">النتيجة ممكن تكون غلط.</span>
          </div>
          <div class="bg-white px-6 py-3 rounded-xl border border-amber-100 shadow-sm flex items-center justify-between text-right">
            <span class="font-bold text-slate-800 text-lg w-1/3">الصندوق الأسود =</span>
            <span class="text-slate-700 font-medium w-2/3">مش فاهمين إزاي النظام وصل للنتيجة.</span>
          </div>
          <div class="bg-white px-6 py-3 rounded-xl border border-amber-100 shadow-sm flex items-center justify-between text-right">
            <span class="font-bold text-emerald-600 text-lg w-1/3">XAI =</span>
            <span class="text-slate-700 font-medium w-2/3">بيساعدنا نفهم إيه العوامل اللي ساهمت في النتيجة.</span>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 p-5 rounded-2xl text-blue-900 font-medium max-w-3xl mx-auto">
          <strong class="font-bold text-blue-700 text-lg block mb-1">النقطة المهمة جدًا:</strong>
          XAI مش معناه إن النظام مستحيل يهلوس؛ هو مفهوم مختلف هدفه زيادة قابلية فهم وتفسير قرارات أو مخرجات النظام.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component for comparing AI Concepts: Hallucination, Black Box, and XAI
</script>
