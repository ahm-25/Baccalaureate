<template>
  <section id="algorithmic-bias" class="py-12 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">1. التحيز الخوارزمي</h2>
        <p class="text-xl text-slate-700 font-medium p-6 bg-indigo-50 border border-indigo-100 rounded-3xl leading-relaxed">
          <strong class="text-indigo-700">التحيز في أنظمة الذكاء الاصطناعي</strong> هو انحراف أو نمط قد يؤدي إلى نتائج غير عادلة أو ضارة، ويمكن أن ينشأ من البيانات، أو تصميم النظام، أو طريقة استخدامه، أو السياق البشري والاجتماعي.
        </p>
      </div>

      <!-- أمثلة واقعية -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <span class="text-3xl">🎭</span> أمثلة واقعية على التحيز
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- مثال 1 -->
          <div class="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-3xl border border-rose-100 shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-rose-200/50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
            <div class="relative z-10">
              <h4 class="text-xl font-bold text-rose-800 mb-3 flex items-center gap-2">
                <span>🏢</span> أنظمة التوظيف
              </h4>
              <p class="text-slate-700 leading-relaxed">
                نظام ذكاء اصطناعي لفرز طلبات التوظيف قد يقوم باستبعاد النساء أو فئة معينة بشكل تلقائي لأنه تدرّب على بيانات تاريخية لشركة كانت تفضل توظيف الرجال في هذا المنصب.
              </p>
            </div>
          </div>
          <!-- مثال 2 -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
            <div class="relative z-10">
              <h4 class="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span>📷</span> التعرف على الوجوه
              </h4>
              <p class="text-slate-700 leading-relaxed">
                كاميرات الذكاء الاصطناعي قد تتعرف بدقة عالية على الوجوه من فئات معينة، لكن دقتها تقل كثيراً مع فئات أخرى (مثل الاختلاف في لون البشرة)، بسبب عدم وجود تنوع كافٍ في صور التدريب.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- الأسباب الرئيسية للتحيز -->
      <div>
        <h3 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <span class="text-3xl">🔍</span> من أين يأتي التحيز؟ (الأسباب الرئيسية)
        </h3>
        <div class="space-y-6">
          <!-- السبب 1 -->
          <div class="flex gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-bold">1</div>
            <div>
              <h4 class="text-xl font-bold text-slate-800 mb-2">بيانات التدريب متحيزة</h4>
              <p class="text-slate-600 leading-relaxed mb-3">
                الذكاء الاصطناعي يتعلم من البيانات التي نغذيها به، وهي المصدر الأساسي والأخطر للتحيز:
              </p>
              <ul class="space-y-2 text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 mt-1">▪</span>
                  <span><strong>بيانات غير كافية:</strong> عدم وجود تمثيل كافٍ لجميع الفئات (مثل غياب التنوع في الصور أو النصوص).</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 mt-1">▪</span>
                  <span><strong>انعكاس تاريخي:</strong> تدريب النظام على بيانات تاريخية تحتوي على نزعات تمييزية أو عنصرية سابقة، مما يجعل النظام يتعلمها كأنها "قاعدة صحيحة".</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- السبب 2 -->
          <div class="flex gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl font-bold">2</div>
            <div>
              <h4 class="text-xl font-bold text-slate-800 mb-2">طريقة بناء وتصميم النظام</h4>
              <p class="text-slate-600 leading-relaxed mb-3">
                قد يتدخل التحيز من خلال المبرمجين أو مصممي النظام أنفسهم:
              </p>
              <ul class="space-y-2 text-slate-700">
                <li class="flex items-start gap-2">
                  <span class="text-purple-500 mt-1">▪</span>
                  <span><strong>اختيار غير مناسب للمتغيرات:</strong> التركيز على عوامل خاطئة عند اتخاذ القرار.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-500 mt-1">▪</span>
                  <span><strong>المتغير البديل (Proxy Variable):</strong> الاعتماد على متغير مسموح (مثل الحي السكني) يمثل بشكل غير مباشر سمة محمية (مثل العرق أو الطبقة الاجتماعية)، مما يؤدي للتمييز بطريقة ملتوية.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-500 mt-1">▪</span>
                  <span><strong>تصميم النموذج نفسه:</strong> الخوارزمية قد تضخم الفروقات البسيطة وتجعلها تحيزات كبيرة.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- السبب 3 و 4 -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
              <h4 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span class="text-emerald-500">3.</span> طريقة استخدام النظام
              </h4>
              <p class="text-slate-600 leading-relaxed">
                استخدام نظام ذكاء اصطناعي (حتى لو كان ممتازاً) في بيئة أو سياق غير الذي صُمم أو دُرّب من أجله، مما يؤدي إلى نتائج غير متوقعة ومتحيزة.
              </p>
            </div>
            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
              <h4 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span class="text-amber-500">4.</span> السياق البشري والاجتماعي
              </h4>
              <p class="text-slate-600 leading-relaxed">
                النظام يتأثر بالأحكام المسبقة للبشر الذين يستخدمونه أو يتفاعلون معه، مما ينعكس على القرارات النهائية المعتمدة على الذكاء الاصطناعي.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- أمثلة متكاملة: المتغير البديل -->
      <div class="mt-16 mb-12">
        <h3 class="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <span class="text-3xl">🧩</span> أمثلة متكاملة وتطبيقات عملية
        </h3>
        
        <div class="space-y-12">
          <!-- المثال الأول: التوظيف -->
          <div>
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div class="bg-slate-800 text-white p-6">
                <h4 class="font-bold text-xl mb-2 text-indigo-300">المثال الأول: نظام التوظيف</h4>
                <p class="text-lg leading-relaxed">
                  تخيل أن شركة تطور نظام ذكاء اصطناعي لاختيار أفضل المتقدمين للوظيفة. النظام لديه بيانات مثل: <span class="text-indigo-300 font-bold">الخبرة، المهارات، المؤهل، العمر، الاسم، العنوان.</span>
                </p>
              </div>
              
              <div class="p-6 md:p-8 space-y-8">
                <!-- الخطوة 1 -->
                <div class="flex flex-col md:flex-row gap-6 items-center">
                  <div class="flex-1 bg-rose-50 p-6 rounded-2xl border border-rose-100 w-full h-full">
                    <h4 class="font-bold text-rose-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">🔴</span> السمة المحمية (النوع: ذكر أم أنثى)
                    </h4>
                    <p class="text-slate-700">طلبت الشركة من المبرمج <strong>حذف معلومة "النوع"</strong> من البيانات حتى لا يفرق النظام بين المتقدمين. المبرمج قام بحذف هذه المعلومة، لكنه ترك <strong>"الاسم"</strong>.</p>
                  </div>
                  <div class="hidden md:block text-slate-300 text-4xl font-bold">←</div>
                  <div class="block md:hidden text-slate-300 text-4xl font-bold">↓</div>
                  <div class="flex-1 bg-amber-50 p-6 rounded-2xl border border-amber-100 w-full h-full">
                    <h4 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">🟡</span> المتغير البديل (الاسم)
                    </h4>
                    <p class="text-slate-700">لاحظ النظام من بيانات التدريب أن <strong>أسماء معينة</strong> مرتبطة تاريخياً بذكور أو إناث، فبدأ يستخدم "الاسم" كإشارة خفية للتنبؤ!</p>
                  </div>
                </div>

                <!-- المخطط التوضيحي -->
                <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center text-center">
                  <div class="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                    <div class="bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-700">
                      <span class="text-rose-500 ml-2">🔴</span> النوع (ذكر/أنثى) <span class="text-xs text-slate-400 font-normal mr-1">(محذوف)</span>
                    </div>
                    <div class="text-slate-400 font-bold">... يستنتجه النظام من ...</div>
                    <div class="bg-white px-6 py-3 rounded-xl border border-indigo-200 shadow-sm font-bold text-indigo-700 border-b-4">
                      <span class="text-amber-500 ml-2">🟡</span> الاسم <span class="text-xs text-indigo-400 font-normal mr-1">(موجود)</span>
                    </div>
                  </div>
                  <div class="w-px h-8 bg-slate-300 my-2"></div>
                  <div class="bg-rose-100 text-rose-800 px-6 py-3 rounded-xl font-bold border border-rose-200">
                    النتيجة: قد يؤثر ذلك على قرار التوظيف بشكل متحيز!
                  </div>
                </div>
              </div>
            </div>

            <!-- Teacher Notes for Example 1 -->
            <div v-if="isTeacherMode" class="mt-6 bg-indigo-50 border border-indigo-200 rounded-3xl p-6 relative overflow-hidden">
              <div class="absolute -left-4 -top-4 text-indigo-200/50 text-9xl">💬</div>
              <div class="relative z-10">
                <h3 class="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                  <span>💬</span> سيناريو الشرح للمثال الأول
                </h3>
                <ul class="space-y-4 text-indigo-900 text-lg">
                  <li class="flex gap-3">
                    <span class="font-bold text-indigo-600">1.</span>
                    <p><strong>اسأل الطلاب:</strong> "هل إحنا ادينا الـ AI معلومة النوع (ذكر أم أنثى) بشكل مباشر؟"<br><span class="text-indigo-600 text-base font-bold">← الرد المتوقع: لا.</span></p>
                  </li>
                  <li class="flex gap-3">
                    <span class="font-bold text-indigo-600">2.</span>
                    <p><strong>قول:</strong> "صح، لكن هل ممكن النظام يستنتجها من معلومة تانية؟"<br><span class="text-indigo-600 text-base font-bold">← الرد المتوقع: آه (زي الاسم).</span></p>
                  </li>
                  <li class="flex gap-3">
                    <span class="font-bold text-indigo-600">3.</span>
                    <p><strong>اشرح:</strong> "وده هو المتغير البديل (Proxy): معلومة موجودة في البيانات، ممكن تكشف بشكل غير مباشر عن سمة محمية، وتخلي النظام يتحيز من غير ما نقصد!"</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- المثال الثاني: المنح الدراسية -->
          <div>
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div class="bg-indigo-900 text-white p-6">
                <h4 class="font-bold text-xl mb-2 text-indigo-300">المثال الثاني: نظام المنح الدراسية</h4>
                <p class="text-lg leading-relaxed">
                  تخيل مدرسة تستخدم نظام ذكاء اصطناعي لاختيار الطلاب لمنحة دراسية. النظام يستخدم: <span class="text-indigo-300 font-bold">الدرجات، نسبة الحضور، الأنشطة المدرسية، مكان السكن.</span>
                </p>
              </div>
              
              <div class="p-6 md:p-8 space-y-8">
                <!-- الخطوة 1 -->
                <div class="flex flex-col md:flex-row gap-6 items-center">
                  <div class="flex-1 bg-rose-50 p-6 rounded-2xl border border-rose-100 w-full h-full">
                    <h4 class="font-bold text-rose-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">🔴</span> السمة المحمية (الحالة الاقتصادية)
                    </h4>
                    <p class="text-slate-700">المدرسة لا تريد التمييز بسبب الحالة الاقتصادية. النظام <strong>لا يحصل على "دخل الأسرة"</strong> بشكل مباشر.</p>
                  </div>
                  <div class="hidden md:block text-slate-300 text-4xl font-bold">←</div>
                  <div class="block md:hidden text-slate-300 text-4xl font-bold">↓</div>
                  <div class="flex-1 bg-emerald-50 p-6 rounded-2xl border border-emerald-100 w-full h-full">
                    <h4 class="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">🟡</span> المتغير البديل (مكان السكن)
                    </h4>
                    <p class="text-slate-700">إذا تعلم النظام أن الطلاب من مناطق معينة يحصلون غالباً على درجات أقل، فقد يبدأ في إعطاء تقييم أقل لطلاب هذه المناطق مستخدماً <strong>"مكان السكن"</strong>!</p>
                  </div>
                </div>

                <!-- المخطط التوضيحي -->
                <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center text-center">
                  <div class="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                    <div class="bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm font-bold text-slate-700">
                      <span class="text-rose-500 ml-2">🔴</span> الحالة الاقتصادية <span class="text-xs text-slate-400 font-normal mr-1">(محذوفة)</span>
                    </div>
                    <div class="text-slate-400 font-bold">... يستنتجها النظام من ...</div>
                    <div class="bg-white px-6 py-3 rounded-xl border border-emerald-200 shadow-sm font-bold text-emerald-700 border-b-4">
                      <span class="text-emerald-500 ml-2">🟡</span> مكان السكن <span class="text-xs text-emerald-400 font-normal mr-1">(موجود)</span>
                    </div>
                  </div>
                  <div class="w-px h-8 bg-slate-300 my-2"></div>
                  <div class="bg-rose-100 text-rose-800 px-6 py-3 rounded-xl font-bold border border-rose-200">
                    النتيجة: تمييز غير مباشر ضد الطلاب من مناطق معينة!
                  </div>
                </div>
              </div>
            </div>

            <!-- Teacher Note for Example 2 -->
            <div v-if="isTeacherMode" class="mt-6 bg-emerald-50 border border-emerald-200 rounded-3xl p-6 relative overflow-hidden">
              <div class="absolute -left-4 -top-4 text-emerald-200/50 text-9xl">💬</div>
              <div class="relative z-10">
                <h3 class="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <span>💬</span> سيناريو الشرح للمثال الثاني
                </h3>
                <ul class="space-y-4 text-emerald-900 text-lg">
                  <li class="flex gap-3">
                    <span class="font-bold text-emerald-600">1.</span>
                    <p><strong>قول:</strong> "أنا مش قلت للـ AI: الطالب ده فقير أو غني. لكن اديته مكان سكنه، ومكان السكن ممكن يديله معلومة غير مباشرة عن الحالة الاقتصادية."</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="font-bold text-emerald-600">2.</span>
                    <p><strong>اشرح:</strong> "هنا مكان السكن استخدم كمتغير بديل. لاحظوا إن المتغير البديل (زي مكان السكن) <strong class="text-emerald-700">مش سيئ في حد ذاته</strong>."</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="font-bold text-emerald-600">3.</span>
                    <p><strong>الخلاصة:</strong> "المشكلة بتحصل لما النظام يستخدم المتغير ده بطريقة تؤدي لتمييز غير عادل ضد فئة معينة."</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- المثال الثالث: نظام تسعير العقارات -->
          <div>
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div class="bg-teal-900 text-white p-6">
                <h4 class="font-bold text-xl mb-2 text-teal-300">المثال الثالث: نظام تسعير العقارات (مصادر التحيز الأربعة)</h4>
                <p class="text-lg leading-relaxed">
                  تخيل شركة عقارات صممت نظام ذكاء اصطناعي يتوقع سعر الشقة. النظام يتعلم من بيانات شقق قديمة ليتوقع سعر أي شقة جديدة.
                </p>
              </div>
              
              <div class="p-6 md:p-8 space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Source 1 -->
                  <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <h4 class="font-bold text-indigo-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">1️⃣</span> التحيز بسبب بيانات التدريب
                    </h4>
                    <p class="text-slate-700 text-sm mb-2">
                      الشركة درّبت النظام على 10,000 شقة، لكن اكتشفنا أن: 9,000 شقة من مناطق راقية، و 1,000 شقة فقط من مناطق شعبية. إذن البيانات ليست ممثلة لكل المناطق بشكل كافٍ.
                    </p>
                    <p class="text-slate-700 text-sm font-bold bg-indigo-100 p-2 rounded-lg">
                      المشكلة: النظام اتعلم من بيانات ناقصة أو غير متوازنة.
                    </p>
                  </div>

                  <!-- Source 2 -->
                  <div class="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                    <h4 class="font-bold text-purple-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">2️⃣</span> التحيز بسبب تصميم النظام
                    </h4>
                    <p class="text-slate-700 text-sm mb-2">
                      بافتراض أن البيانات ممتازة، قرر مصمم النظام أن المعلومات المستخدمة هي (المساحة + عدد الغرف + عمر المبنى) وتجاهل "موقع الشقة" رغم أهميته.
                    </p>
                    <p class="text-slate-700 text-sm font-bold bg-purple-100 p-2 rounded-lg">
                      المشكلة: النموذج بيتعلم بنفسه، لكن البشر بيحددوا له هيتعلم باستخدام أنهي معلومات.
                    </p>
                  </div>

                  <!-- Source 3 -->
                  <div class="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <h4 class="font-bold text-rose-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">3️⃣</span> التحيز بسبب طريقة الاستخدام
                    </h4>
                    <p class="text-slate-700 text-sm mb-2">
                      النظام توقع سعر الشقة بـ 2 مليون جنيه. المشكلة لو قال صاحب الشركة: "طالما الـ AI قال 2 مليون، يبقى السعر الحقيقي 2 مليون" واستخدمه كقرار نهائي بدون مراجعة.
                    </p>
                    <p class="text-slate-700 text-sm font-bold bg-rose-100 p-2 rounded-lg">
                      المشكلة: النظام قد يكون مجرد أداة للتوقع، لكن طريقة استخدام النتيجة قد تسبب مشكلة.
                    </p>
                  </div>

                  <!-- Source 4 -->
                  <div class="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <h4 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
                      <span class="text-xl">4️⃣</span> السياق البشري والاجتماعي
                    </h4>
                    <p class="text-slate-700 text-sm mb-2">
                      أسعار منطقة معينة كانت منخفضة في الماضي. لاحقاً حصل تطوير وارتفعت الأسعار، لكن النظام ما زال يتعلم من البيانات القديمة فيعطي أسعاراً أقل من الواقع.
                    </p>
                    <p class="text-slate-700 text-sm font-bold bg-amber-100 p-2 rounded-lg">
                      المشكلة: المجتمع والسوق بيتغيروا، والبيانات القديمة مش دائمًا بتمثل الواقع الحالي.
                    </p>
                  </div>
                </div>

                <!-- Table -->
                <div class="mt-8">
                  <h4 class="font-bold text-slate-800 mb-4 text-center">ملخص: مصادر التحيز الأربعة في مثال العقارات</h4>
                  <div class="overflow-hidden rounded-xl border border-slate-200">
                    <table class="w-full text-right">
                      <thead class="bg-slate-100">
                        <tr>
                          <th class="p-4 font-bold text-slate-700 border-b border-slate-200">مصدر التحيز</th>
                          <th class="p-4 font-bold text-slate-700 border-b border-slate-200">في مثال العقارات</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100 bg-white">
                        <tr>
                          <td class="p-4 text-slate-700 font-medium">بيانات التدريب</td>
                          <td class="p-4 text-slate-600">بيانات قليلة عن بعض المناطق</td>
                        </tr>
                        <tr>
                          <td class="p-4 text-slate-700 font-medium bg-slate-50">تصميم النظام</td>
                          <td class="p-4 text-slate-600 bg-slate-50">استبعاد الموقع من المتغيرات</td>
                        </tr>
                        <tr>
                          <td class="p-4 text-slate-700 font-medium">طريقة الاستخدام</td>
                          <td class="p-4 text-slate-600">اعتبار توقع الـAI قرارًا نهائيًا</td>
                        </tr>
                        <tr>
                          <td class="p-4 text-slate-700 font-medium bg-slate-50">السياق البشري والاجتماعي</td>
                          <td class="p-4 text-slate-600 bg-slate-50">تغير ظروف المجتمع والسوق عن البيانات القديمة</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- Teacher Note for Example 3 -->
            <div v-if="isTeacherMode" class="mt-6 bg-teal-50 border border-teal-200 rounded-3xl p-6 relative overflow-hidden">
              <div class="absolute -left-4 -top-4 text-teal-200/50 text-9xl">💬</div>
              <div class="relative z-10">
                <h3 class="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                  <span>💬</span> سيناريو الشرح للمثال الثالث
                </h3>
                <ul class="space-y-4 text-teal-900 text-lg">
                  <li class="flex gap-3">
                    <span class="font-bold text-teal-600">1.</span>
                    <p><strong>قول للطلاب:</strong> "عندنا شركة عقارات عملت نظام ذكاء اصطناعي يتوقع سعر الشقة." واشرح لهم كيف تظهر المشكلة من كل مصدر (البيانات، التصميم، الاستخدام، والسياق).</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="font-bold text-teal-600">2.</span>
                    <p><strong>على السبورة:</strong> ارسم الجدول الموضح أعلاه لترتيب أفكارهم ولتوضيح كيف يمكن لنفس النظام أن يعاني من مشاكل في أربعة أماكن مختلفة.</p>
                  </li>
                  <li class="flex gap-3">
                    <span class="font-bold text-teal-600">3.</span>
                    <p><strong>الخلاصة:</strong> "نفس نظام الذكاء الاصطناعي ممكن تظهر فيه مشكلة من أربع أماكن مختلفة: البيانات اللي اتعلم منها، أو طريقة تصميمه، أو طريقة استخدامه، أو البيئة والمجتمع اللي بيشتغل فيه."</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- تعريفات هامة عامة في النهاية -->
          <div class="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner">
            <div class="bg-white p-6 rounded-2xl border-r-4 border-rose-500 shadow-sm">
              <p class="text-slate-500 font-bold mb-2">السمة المحمية (Protected Attribute)</p>
              <p class="text-slate-800 font-medium text-lg">المعلومة التي لا نريد أن يحدث تمييز بسببها.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl border-r-4 border-amber-500 shadow-sm">
              <p class="text-slate-500 font-bold mb-2">المتغير البديل (Proxy Variable)</p>
              <p class="text-slate-800 font-medium text-lg">معلومة أخرى موجودة، يمكن أن تكشف عن السمة المحمية بشكل غير مباشر.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Teacher Mode -->
      <div v-if="isTeacherMode" class="mt-12 bg-amber-50 border border-amber-200 rounded-3xl p-6 relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-amber-200/50 text-9xl">💡</div>
        <div class="relative z-10">
          <h3 class="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
            <span>💡</span> شرح المعلم (الخلاصة للطلاب)
          </h3>
          <p class="text-amber-900 leading-relaxed text-lg mb-4">
            الذكاء الاصطناعي يشبه <strong>"المرآة"</strong>، فهو يعكس جودة البيانات التي نغذيها به وطريقة تفكير من قام ببرمجته. 
          </p>
          <p class="text-amber-900 leading-relaxed text-lg">
            إذا كانت البيانات أو التصميم يحتوي على تحيز ولو بسيط، فإن نتائج الذكاء الاصطناعي ستكون متحيزة وغير عادلة. تذكروا دائمًا أن "الخوارزمية ليست محايدة بشكل مطلق".
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useTeacherMode } from "~/composables/useTeacherMode";

const { isTeacherMode } = useTeacherMode();
</script>
