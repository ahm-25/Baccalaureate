<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 pb-20 font-sans" dir="rtl">
    <!-- Header -->
    <header class="bg-gradient-to-l from-purple-700 to-blue-600 text-white py-16 px-4 md:px-8 shadow-lg relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-4xl mx-auto relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">شرح الذكاء الاصطناعي من الصفر</h1>
        <p class="text-xl md:text-2xl text-purple-100 mb-8">من التعلم الآلي إلى الذكاء الاصطناعي التوليدي</p>
        
        <!-- Navigation -->
        <div class="flex flex-wrap justify-center gap-3">
          <button @click="scrollTo('ml')" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all text-sm font-semibold">
            التعلم الآلي
          </button>
          <button @click="scrollTo('dl')" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all text-sm font-semibold">
            التعلم العميق
          </button>
          <button @click="scrollTo('genai')" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all text-sm font-semibold">
            الذكاء التوليدي
          </button>
          <button @click="scrollTo('ai')" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all text-sm font-semibold">
            الذكاء الاصطناعي
          </button>
          <button @click="scrollTo('summary')" class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all text-sm font-semibold">
            الخلاصة
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 md:px-8 mt-12 space-y-16">
      
      <!-- Section 1: ML -->
      <section id="ml" class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 scroll-mt-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
        
        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
            🤖
          </div>
          <h2 class="text-3xl font-bold text-gray-800">التعلم الآلي (Machine Learning)</h2>
        </div>

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <h3 class="text-xl font-semibold text-gray-800 bg-blue-50 p-4 rounded-xl border-r-4 border-blue-500 inline-block w-full">
            هل الكمبيوتر لازم نكتبله كل القواعد بنفسنا علشان يتعلم؟
          </h3>
          
          <p>
            في البرمجة العادية، بنكتب للكمبيوتر خطوات محددة (لو حصل كذا، اعمل كذا). لكن في التعلم الآلي، إحنا بندي الكمبيوتر <strong>بيانات وأمثلة</strong> وهو بيستنتج القواعد بنفسه!
          </p>

          <div class="grid md:grid-cols-2 gap-6 my-8">
            <!-- Example 1 -->
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span class="text-red-500">📧</span> مثال 1: تصنيف الرسائل المزعجة (Spam)
              </h4>
              <p class="text-sm">كلمة <strong>Spam</strong> معناها رسالة مزعجة أو غير مرغوب فيها.</p>
              <div class="bg-white p-3 rounded-lg border border-gray-200 mt-3 mb-3 text-sm italic text-gray-500">
                "مبروك! لقد ربحت جائزة، اضغط هنا للحصول عليها."
              </div>
              <p class="text-sm">النموذج بيتعلم من أمثلة كتير لرسائل عادية ورسائل مزعجة، وبعد التدريب، بيقدر يصنف أي رسالة جديدة لـ Spam أو Not Spam من غير ما نبرمجه على كلمات معينة.</p>
            </div>
            
            <!-- Example 2 -->
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span class="text-purple-500">🛒</span> مثال 2: توصية المنتجات
              </h4>
              <p class="text-sm">لما تشتري موبايل، الموقع بيقترح عليك جراب أو سماعة. إزاي؟</p>
              <p class="text-sm mt-2">المتجر بيتعلم من سلوك المستخدمين اللي قبلك (بيانات الشراء)، ويقترح منتجات مناسبة ليك بناءً على النمط ده.</p>
            </div>
          </div>

          <div class="bg-blue-600 text-white rounded-2xl p-6 shadow-lg shadow-blue-500/20">
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <span>📖</span> تعريف الكتاب
            </h4>
            <p class="text-lg leading-relaxed font-medium">
              "التعلم الآلي فرع من الذكاء الاصطناعي تتعلم فيه النماذج الأنماط من البيانات لعمل تنبؤات أو تصنيفات أو دعم قرارات، بدلًا من برمجة كل قاعدة صراحة."
            </p>
          </div>
        </div>

        <!-- Interactive Quiz -->
        <div class="mt-10 border-t border-gray-100 pt-8">
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p class="font-bold text-gray-800 mb-4">🤔 سؤال سريع:</p>
            <p class="mb-4">لو النظام بيصنف رسالة إلى مزعجة أو عادية، ده مثال على إيه؟</p>
            <div class="flex gap-3">
              <button @click="showMlAnswer = true; isMlCorrect = true" class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-colors">
                التعلم الآلي
              </button>
              <button @click="showMlAnswer = true; isMlCorrect = false" class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors">
                البرمجة التقليدية
              </button>
            </div>
            <div v-if="showMlAnswer" class="mt-4 p-3 rounded-xl" :class="isMlCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
              {{ isMlCorrect ? 'إجابة صحيحة! برافو عليك.' : 'إجابة خاطئة. النظام بيتعلم من البيانات، يبقى تعلم آلي.' }}
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-6">
            <button class="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 transition-colors">
              <span>اختبر فهمك</span>
              <span>📝</span>
            </button>
            <button @click="scrollTo('dl')" class="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all font-bold flex items-center gap-2">
              التالي: التعلم العميق
              <span>&larr;</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Section 2: DL -->
      <section id="dl" class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 scroll-mt-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10"></div>
        
        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
            🧠
          </div>
          <h2 class="text-3xl font-bold text-gray-800">التعلم العميق (Deep Learning)</h2>
        </div>

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            التعلم العميق هو أسلوب متطور من أساليب <strong>التعلم الآلي (ML)</strong>.
          </p>
          <p>
            بيعتمد على حاجة اسمها <strong>الشبكات العصبية العميقة متعددة الطبقات (Deep Neural Networks)</strong>، واللي بتشتغل بطريقة شبه مخ الإنسان علشان تحلل البيانات المعقدة جداً.
          </p>

          <div class="bg-purple-50 rounded-2xl p-6 border border-purple-100 my-6">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <span>🖼️</span> مثال: التعرف على الصور
            </h4>
            <p>
              لو عايزين نعلم الكمبيوتر يتعرف على صورة "قطة":
            </p>
            <ul class="list-disc list-inside mt-3 space-y-2 text-purple-800">
              <li><strong>الطبقة الأولى</strong> ممكن تتعرف على الحواف والخطوط.</li>
              <li><strong>الطبقة التانية</strong> تتعرف على الأشكال (زي الودن أو العين).</li>
              <li><strong>الطبقة الأخيرة</strong> بتجمع كل ده وتقرر: "دي صورة قطة!"</li>
            </ul>
          </div>
        </div>

        <!-- Interactive Quiz -->
        <div class="mt-10 border-t border-gray-100 pt-8">
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p class="font-bold text-gray-800 mb-4">🤔 سؤال سريع:</p>
            <p class="mb-4">التعلم العميق بيستخدم إيه علشان يحلل البيانات؟</p>
            <div class="flex flex-wrap gap-3">
              <button @click="showDlAnswer = true; isDlCorrect = true" class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-colors">
                الشبكات العصبية العميقة
              </button>
              <button @click="showDlAnswer = true; isDlCorrect = false" class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors">
                قواعد مبرمجة مسبقاً
              </button>
            </div>
            <div v-if="showDlAnswer" class="mt-4 p-3 rounded-xl" :class="isDlCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
              {{ isDlCorrect ? 'ممتاز! إجابة دقيقة.' : 'خطأ. هو بيعتمد على الشبكات العصبية متعددة الطبقات.' }}
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-6">
            <button class="text-purple-600 font-bold hover:text-purple-800 flex items-center gap-2 transition-colors">
              <span>اختبر فهمك</span>
              <span>📝</span>
            </button>
            <button @click="scrollTo('genai')" class="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all font-bold flex items-center gap-2">
              التالي: الذكاء التوليدي
              <span>&larr;</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: GenAI -->
      <section id="genai" class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 scroll-mt-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10"></div>
        
        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
            ✨
          </div>
          <h2 class="text-3xl font-bold text-gray-800">الذكاء الاصطناعي التوليدي (GenAI)</h2>
        </div>

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            على عكس الأنظمة القديمة اللي كانت بس بتصنف أو تتنبأ (زي Spam أو Not Spam)، الذكاء الاصطناعي التوليدي <strong>يقدر ينشئ محتوى جديد تماماً!</strong>
          </p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div class="bg-teal-50 p-4 rounded-2xl text-center border border-teal-100">
              <div class="text-3xl mb-2">📝</div>
              <div class="font-bold text-teal-800">نص</div>
            </div>
            <div class="bg-teal-50 p-4 rounded-2xl text-center border border-teal-100">
              <div class="text-3xl mb-2">🎨</div>
              <div class="font-bold text-teal-800">صورة</div>
            </div>
            <div class="bg-teal-50 p-4 rounded-2xl text-center border border-teal-100">
              <div class="text-3xl mb-2">🎵</div>
              <div class="font-bold text-teal-800">صوت</div>
            </div>
            <div class="bg-teal-50 p-4 rounded-2xl text-center border border-teal-100">
              <div class="text-3xl mb-2">💻</div>
              <div class="font-bold text-teal-800">كود</div>
            </div>
          </div>

          <div class="bg-gray-900 text-white p-6 rounded-2xl shadow-lg mt-6">
            <h4 class="text-teal-400 font-bold mb-3">مثال عملي:</h4>
            <p class="text-gray-300 italic mb-4">"اكتب قصة قصيرة عن طالب يتعلم البرمجة."</p>
            <div class="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <p class="text-sm text-gray-400">النتيجة:</p>
              <p class="text-sm mt-2">كان أحمد يجلس أمام حاسوبه في ليلة هادئة، يحدق في شاشة مليئة بالأكواد. فجأة، بعد ساعات من المحاولة، ظهرت عبارة "Hello World" على الشاشة. ابتسم أحمد، لقد بدأت رحلته للتو...</p>
            </div>
          </div>
        </div>

        <!-- Interactive Quiz -->
        <div class="mt-10 border-t border-gray-100 pt-8">
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p class="font-bold text-gray-800 mb-4">🤔 سؤال سريع:</p>
            <p class="mb-4">نظام بيكتب مقال كامل بناءً على طلبك، ده يعتبر إيه؟</p>
            <div class="flex flex-wrap gap-3">
              <button @click="showGenAiAnswer = true; isGenAiCorrect = true" class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-teal-50 hover:border-teal-300 transition-colors">
                ذكاء اصطناعي توليدي
              </button>
              <button @click="showGenAiAnswer = true; isGenAiCorrect = false" class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-red-50 hover:border-red-300 transition-colors">
                تصنيف بيانات
              </button>
            </div>
            <div v-if="showGenAiAnswer" class="mt-4 p-3 rounded-xl" :class="isGenAiCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
              {{ isGenAiCorrect ? 'صح جداً! لأنه بينشئ محتوى جديد.' : 'خطأ. هو بيولد محتوى جديد مش بيصنف.' }}
            </div>
          </div>
          
          <div class="flex justify-between items-center mt-6">
            <button class="text-teal-600 font-bold hover:text-teal-800 flex items-center gap-2 transition-colors">
              <span>اختبر فهمك</span>
              <span>📝</span>
            </button>
            <button @click="scrollTo('ai')" class="px-6 py-3 bg-teal-600 text-white rounded-xl shadow-md hover:bg-teal-700 hover:shadow-lg transition-all font-bold flex items-center gap-2">
              التالي: الذكاء الاصطناعي
              <span>&larr;</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Section 4: AI -->
      <section id="ai" class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 scroll-mt-24 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10"></div>
        
        <div class="flex items-center gap-4 mb-6">
          <div class="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
            🌐
          </div>
          <h2 class="text-3xl font-bold text-gray-800">الذكاء الاصطناعي (Artificial Intelligence)</h2>
        </div>

        <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            دلوقتي بس نقدر نعرف <strong>الذكاء الاصطناعي</strong>، لإن هو <strong>المجال الأشمل والمظلة الكبيرة</strong> اللي بتضم كل اللي شرحناه فوق!
          </p>

          <div class="bg-indigo-600 text-white rounded-2xl p-6 shadow-lg shadow-indigo-500/20 my-6">
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <span>📖</span> تعريف الكتاب
            </h4>
            <p class="text-lg leading-relaxed font-medium">
              "الذكاء الاصطناعي هو مجال يضم أنظمة حاسوبية تستطيع تنفيذ مهام تحتاج إلى ذكاء، مثل التعلم من البيانات والتنبؤ والتعرف وتوليد المحتوى واتخاذ القرارات أو دعمها."
            </p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">أمثلة على تطبيقات الذكاء الاصطناعي في حياتنا:</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-3 hover:bg-indigo-100 transition-colors">
              <span class="text-2xl">📸</span>
              <span class="font-semibold text-indigo-900 text-sm">التعرف على الصور</span>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-3 hover:bg-indigo-100 transition-colors">
              <span class="text-2xl">🎙️</span>
              <span class="font-semibold text-indigo-900 text-sm">التعرف على الكلام</span>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-3 hover:bg-indigo-100 transition-colors">
              <span class="text-2xl">🌍</span>
              <span class="font-semibold text-indigo-900 text-sm">الترجمة</span>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-3 hover:bg-indigo-100 transition-colors">
              <span class="text-2xl">📱</span>
              <span class="font-semibold text-indigo-900 text-sm">المساعدات الصوتية</span>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-3 hover:bg-indigo-100 transition-colors">
              <span class="text-2xl">📈</span>
              <span class="font-semibold text-indigo-900 text-sm">التنبؤ</span>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-3 hover:bg-indigo-100 transition-colors">
              <span class="text-2xl">⚖️</span>
              <span class="font-semibold text-indigo-900 text-sm">دعم اتخاذ القرارات</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Summary / Relationships -->
      <section id="summary" class="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-10 shadow-2xl scroll-mt-24">
        
        <div class="flex items-center gap-4 mb-8">
          <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
            🔗
          </div>
          <h2 class="text-3xl font-bold">إزاي المفاهيم مرتبطة ببعض؟</h2>
        </div>

        <div class="space-y-6 text-lg text-gray-300">
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white shrink-0 mt-1">1</div>
            <div>
              <strong class="text-white">AI هو المجال الأشمل:</strong> المظلة اللي تحتها كل حاجة بتحاكي الذكاء.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white shrink-0 mt-1">2</div>
            <div>
              <strong class="text-white">ML فرع من AI:</strong> بيخلي الأنظمة تتعلم من البيانات.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center font-bold text-white shrink-0 mt-1">3</div>
            <div>
              <strong class="text-white">DL أسلوب من ML:</strong> بيستخدم شبكات عصبية عميقة للبيانات المعقدة.
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white shrink-0 mt-1">4</div>
            <div>
              <strong class="text-white">GenAI نوع من أنظمة AI:</strong> متخصص في توليد المحتوى، وكثير من أنظمته الحديثة بتعتمد على التعلم العميق (DL). 
              <br><span class="text-teal-300 text-sm italic">ملحوظة: هو مش مرحلة إلزامية بعد DL، هو مفهوم مرتبط بإنشاء المحتوى!</span>
            </div>
          </div>
        </div>

        <!-- Visual Diagram -->
        <div class="mt-12 relative w-full max-w-3xl mx-auto p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
          <!-- AI -->
          <div class="bg-indigo-900/40 border-2 border-indigo-400/50 rounded-[2rem] p-4 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-indigo-500/20">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/30 text-indigo-300 flex items-center justify-center text-xl shadow-inner">🌐</div>
              <div>
                <h3 class="text-xl sm:text-2xl font-black text-indigo-100">الذكاء الاصطناعي (AI)</h3>
              </div>
            </div>
            
            <!-- ML -->
            <div class="bg-blue-900/40 border-2 border-blue-400/50 rounded-[1.5rem] p-4 sm:p-6 shadow-md mt-4 transition-all duration-300 hover:shadow-blue-500/20">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-9 h-9 rounded-xl bg-blue-500/30 text-blue-300 flex items-center justify-center text-lg shadow-inner">🤖</div>
                <div>
                  <h4 class="text-lg sm:text-xl font-bold text-blue-100">التعلم الآلي (ML)</h4>
                </div>
              </div>

              <div class="flex flex-col gap-4 mt-4">
                <!-- DL -->
                <div class="bg-purple-900/40 border-2 border-purple-400/50 rounded-2xl p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-purple-500/20">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-lg bg-purple-500/30 text-purple-300 flex items-center justify-center text-lg shadow-inner">🧠</div>
                    <h5 class="text-base sm:text-lg font-bold text-purple-100">التعلم العميق (DL)</h5>
                  </div>
                  
                  <!-- GenAI -->
                  <div class="bg-teal-900/40 border-2 border-teal-400/50 rounded-xl p-4 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1">
                    <div class="absolute -right-4 -top-4 w-20 h-20 bg-teal-500/20 rounded-full animate-pulse"></div>
                    <div class="flex items-center gap-3 mb-2 relative z-10">
                      <div class="w-7 h-7 rounded-lg bg-teal-500/30 text-teal-300 flex items-center justify-center text-base shadow-inner">✨</div>
                      <h6 class="text-sm sm:text-base font-bold text-teal-100">الذكاء التوليدي (GenAI)</h6>
                    </div>
                    <p class="text-teal-200/70 text-xs leading-relaxed relative z-10">
                      يعتمد بشكل كبير على نماذج التعلم العميق لتوليد نصوص وصور وأصوات جديدة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 flex justify-center">
          <NuxtLink to="/lesson-05" class="px-8 py-4 bg-white text-gray-900 rounded-2xl shadow-xl hover:bg-gray-100 hover:scale-105 transition-all font-bold text-lg flex items-center gap-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            العودة إلى الدرس
          </NuxtLink>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// Quiz states
const showMlAnswer = ref(false);
const isMlCorrect = ref(false);

const showDlAnswer = ref(false);
const isDlCorrect = ref(false);

const showGenAiAnswer = ref(false);
const isGenAiCorrect = ref(false);
</script>

<style scoped>
/* Scoped styles */
</style>
