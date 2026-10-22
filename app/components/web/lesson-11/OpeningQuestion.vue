<template>
  <section id="opening-question" class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <p class="text-lg text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
        في الدرس 3-1 تعلمت أن الواجهة الأمامية والواجهة الخلفية تتعاونان لتنفيذ طلب المستخدم. في هذا الدرس ستتعلم
        <strong class="text-slate-800">كيف تنتقل الطلبات والاستجابات بين العميل والخادم</strong>.
      </p>
      <p class="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        عندما تنقر على رابط أو تبدأ بحثًا، يطلب المتصفح غالبًا البيانات التي يحتاجها من خدمة على خادم عبر الشبكة. المتصفح هنا
        <strong class="text-sky-700">عميل (client)</strong> يرسل طلبًا، ويعيد <strong class="text-cyan-700">الخادم (server)</strong> استجابة.
        وتحدد بروتوكولات مثل HTTP قواعد هذا التبادل. ويُعد نموذج الطلب والاستجابة أساسيًا في كثير من تطبيقات الويب، مع وجود وسائل اتصال أخرى عند الحاجة.
      </p>

      <div class="bg-gradient-to-r from-sky-600 to-cyan-500 rounded-3xl p-1 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
        <div class="bg-white rounded-[22px] p-8 md:p-12">
          <span class="inline-block text-sm font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full mb-4">❓ السؤال الرئيسي</span>
          <h2 class="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-cyan-600 leading-relaxed">
            "كيف يتواصل العميل والخادم لتشغيل تطبيق الويب، وما القواعد والرسائل التي يستخدمانها؟"
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
