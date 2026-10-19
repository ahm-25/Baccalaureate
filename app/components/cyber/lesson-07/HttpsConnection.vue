<template>
  <section id="https" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6">
        <span>📌</span> ملحوظة مهمة
      </div>
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-8">1. كيف تعمل اتصالات HTTPS</h2>

      <!-- Visual Cards Header -->
      <div class="grid lg:grid-cols-3 gap-6 mb-10">
        <!-- Key pair visual with Interactive Animation -->
        <div class="lg:col-span-2 bg-gradient-to-br from-amber-50 via-sky-50 to-indigo-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <!-- Static summary icons -->
          <div class="flex items-center justify-center gap-4 sm:gap-8 mb-4">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-2xl bg-white border-2 border-sky-300 shadow-sm flex items-center justify-center group hover:scale-105 transition-transform">
                <Globe class="w-10 h-10 text-sky-600 animate-pulse" />
              </div>
              <span class="mt-2 font-bold text-sky-800">مفتاح عام</span>
              <span class="text-xs text-slate-500">يمكن مشاركته</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 rounded-full bg-white border-4 border-amber-300 shadow-md flex items-center justify-center relative">
                <Lock class="w-12 h-12 text-amber-500" />
                <span class="absolute -top-1 -right-1 flex h-4 w-4">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
                </span>
              </div>
              <span class="mt-2 text-xs font-bold text-slate-500">زوج مرتبط</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-2xl bg-white border-2 border-indigo-300 shadow-sm flex items-center justify-center group hover:scale-105 transition-transform">
                <ShieldCheck class="w-10 h-10 text-indigo-600" />
              </div>
              <span class="mt-2 font-bold text-indigo-800">مفتاح خاص</span>
              <span class="text-xs text-slate-500">يبقى سريًا</span>
            </div>
          </div>

          <p class="text-center text-sm font-bold text-slate-600 mb-6">
            يستخدم التشفير بالمفتاح العام زوجًا من المفاتيح المرتبطة: مفتاحًا عامًا ومفتاحًا خاصًا.
          </p>

          <!-- Toggle Interactive Key-pair Animation -->
          <div class="bg-white/80 backdrop-blur rounded-2xl p-4 sm:p-5 border border-sky-100 shadow-inner">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <span class="font-bold text-slate-800 text-sm">🎬 رسم توضيحي متحرك: كيف يعمل زوج المفاتيح في الواقع؟</span>
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="toggleKeyAnimPlay"
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm"
                  :class="isKeyAnimPlaying ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' : 'bg-sky-600 text-white hover:bg-sky-700'"
                >
                  <component :is="isKeyAnimPlaying ? Pause : Play" class="w-3.5 h-3.5" />
                  <span>{{ isKeyAnimPlaying ? 'إيقاف مؤقت' : 'تشغيل تلقائي' }}</span>
                </button>
                <button
                  @click="resetKeyAnim"
                  class="p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
                  title="إعادة التشغيل"
                >
                  <RotateCcw class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Graphic Animation Canvas -->
            <div class="relative bg-slate-900 rounded-2xl p-4 sm:p-6 text-white overflow-hidden min-h-[220px] flex flex-col justify-between">
              <!-- Glowing background effects -->
              <div class="absolute -top-12 -left-12 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl pointer-events-none"></div>
              <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>

              <!-- Animated Stage Nodes -->
              <div class="flex items-center justify-between relative z-10 gap-2">
                <!-- Client / Browser (Left in RTL is sender) -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                       :class="keyAnimStep === 0 ? 'bg-sky-500 ring-4 ring-sky-400/40 scale-110 shadow-lg' : 'bg-slate-800 border border-slate-700'">
                    <Laptop class="w-7 h-7 text-white" />
                  </div>
                  <span class="text-xs font-bold mt-2 text-slate-300">الطالب / المتصفح</span>
                  <span class="text-[10px] text-sky-400 font-mono">المرسل</span>
                </div>

                <!-- Middle Network Cable with Moving Packet -->
                <div class="flex-1 relative flex flex-col items-center px-2">
                  <!-- Wire line -->
                  <div class="w-full h-1.5 bg-slate-800 rounded-full relative overflow-hidden my-4 border border-slate-700">
                    <div class="absolute top-0 bottom-0 bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 w-1/3 rounded-full transition-all duration-700"
                         :style="{ right: keyAnimProgress + '%' }"></div>
                  </div>

                  <!-- Hacker / Snooper in the middle -->
                  <div class="absolute -top-3 flex flex-col items-center transition-all duration-300"
                       :class="keyAnimStep === 2 ? 'scale-110 opacity-100' : 'opacity-60'">
                    <div class="w-7 h-7 rounded-full bg-slate-950 border border-rose-500/50 flex items-center justify-center text-rose-400 shadow">
                      <EyeOff class="w-3.5 h-3.5" />
                    </div>
                    <span v-if="keyAnimStep === 2" class="text-[9px] text-rose-400 bg-slate-950/90 border border-rose-500/40 px-1.5 py-0.5 rounded mt-1 whitespace-nowrap animate-bounce">
                      ❌ مستحيل فكها!
                    </span>
                  </div>

                  <!-- Floating packet with animation -->
                  <div class="transition-all duration-500 flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold shadow-lg"
                       :class="{
                         'bg-slate-700 text-slate-200 border border-slate-600': keyAnimStep === 0,
                         'bg-sky-600 text-white border border-sky-400 ring-2 ring-sky-300/30 scale-105': keyAnimStep === 1,
                         'bg-indigo-600 text-white border border-indigo-400 ring-2 ring-indigo-400/40 animate-pulse': keyAnimStep === 2,
                         'bg-emerald-600 text-white border border-emerald-400 ring-2 ring-emerald-300/40 scale-105': keyAnimStep === 3
                       }">
                    <component :is="keyAnimStep === 0 ? FileText : (keyAnimStep === 3 ? Unlock : Lock)" class="w-4 h-4" />
                    <span class="font-mono text-[11px]">{{ keyAnimPacketText }}</span>
                  </div>
                </div>

                <!-- Server (Right in RTL is receiver) -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative"
                       :class="keyAnimStep === 3 ? 'bg-emerald-500 ring-4 ring-emerald-400/40 scale-110 shadow-lg' : 'bg-slate-800 border border-slate-700'">
                    <Server class="w-7 h-7 text-white" />
                    <div class="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center border-2 border-slate-900 shadow" title="المفتاح الخاص">
                      <KeyRound class="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <span class="text-xs font-bold mt-2 text-slate-300">خادم الويب</span>
                  <span class="text-[10px] text-indigo-400 font-mono">المستقبل</span>
                </div>
              </div>

              <!-- Step Explanation Text -->
              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <span class="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center font-bold text-[10px]">
                    {{ keyAnimStep + 1 }}
                  </span>
                  <span class="text-slate-200 font-medium">{{ keyAnimStepsInfo[keyAnimStep].title }}:</span>
                  <span class="text-sky-300">{{ keyAnimStepsInfo[keyAnimStep].desc }}</span>
                </div>

                <!-- Manual Step Steppers -->
                <div class="flex items-center gap-1 shrink-0">
                  <button
                    v-for="(st, idx) in keyAnimStepsInfo"
                    :key="idx"
                    @click="setKeyAnimStep(idx)"
                    class="w-2.5 h-2.5 rounded-full transition-all"
                    :class="keyAnimStep === idx ? 'bg-sky-400 w-6' : 'bg-slate-700 hover:bg-slate-500'"
                    :title="st.title"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key term with Interactive 3-Pillar Triggers -->
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
          <div>
            <h3 class="font-bold text-sky-700 mb-2 flex items-center gap-2">
              <Sparkles class="w-5 h-5 text-amber-500" />
              مصطلحات أساسية
            </h3>
            <p class="text-slate-700 leading-relaxed text-sm mb-4">
              <strong class="text-rose-600 font-bold" dir="ltr">HTTPS</strong> – نظام لإجراء اتصالات الويب بأمان:
            </p>

            <!-- 3 Interactive Pillars Quick Selectors -->
            <div class="space-y-2 mb-4">
              <button
                @click="selectedPillar = 0"
                class="w-full text-right p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between"
                :class="selectedPillar === 0 ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'"
              >
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-sky-200 text-sky-800 flex items-center justify-center text-xs">🔒</span>
                  <span>1. التشفير</span>
                </div>
                <span class="text-[10px] text-sky-600 font-normal">حماية السرية ومنع التجسس ←</span>
              </button>

              <button
                @click="selectedPillar = 1"
                class="w-full text-right p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between"
                :class="selectedPillar === 1 ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'"
              >
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center text-xs">🛡️</span>
                  <span>2. اكتشاف التلاعب</span>
                </div>
                <span class="text-[10px] text-amber-600 font-normal">سلامة البيانات ومنع التزوير ←</span>
              </button>

              <button
                @click="selectedPillar = 2"
                class="w-full text-right p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between"
                :class="selectedPillar === 2 ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'"
              >
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center text-xs">🪪</span>
                  <span>3. التحقق من الطرف المقابل</span>
                </div>
                <span class="text-[10px] text-emerald-600 font-normal">المصادقة ومنع الانتحال ←</span>
              </button>
            </div>
          </div>

          <!-- Lock Icon Indicator -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between text-xs">
            <span class="text-emerald-700 font-bold flex items-center gap-1.5">
              <Lock class="w-4 h-4 text-emerald-600" /> رمز القفل في المتصفح
            </span>
            <span class="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
              يحقق الركائز الثلاث معاً
            </span>
          </div>
        </div>
      </div>

      <!-- ============================================================== -->
      <!-- NEW: Dedicated Illustrated 3-Pillar Showcase for Students      -->
      <!-- ============================================================== -->
      <div class="mb-12 bg-gradient-to-br from-slate-50 to-sky-50/70 border-2 border-sky-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-sky-200">
          <div>
            <div class="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Lightbulb class="w-3.5 h-3.5 text-amber-500" />
              توضيح بالرسومات والأمثلة للطلاب
            </div>
            <h3 class="text-xl md:text-2xl font-black text-slate-900">
              ماذا تعني أهداف HTTPS الثلاثة؟ (التشفير، اكتشاف التلاعب، التحقق من الطرف المقابل)
            </h3>
            <p class="text-slate-600 text-xs md:text-sm mt-1">
              اضغط على أي ركيزة لتشاهد الرسم التوضيحي، والمثال الواقعي، وماذا يحدث لو غابت هذه الحماية!
            </p>
          </div>

          <!-- Buttons Switcher -->
          <div class="flex items-center gap-2 shrink-0">
            <button
              v-for="(pil, pIdx) in pillarsData"
              :key="pIdx"
              @click="selectedPillar = pIdx"
              class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              :class="selectedPillar === pIdx ? pil.activeBtnClass : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'"
            >
              <span>{{ pil.icon }}</span>
              <span>{{ pil.shortTitle }}</span>
            </button>
          </div>
        </div>

        <!-- Active Pillar Illustrated Card -->
        <div class="bg-white border-2 rounded-3xl p-6 md:p-8 shadow-md transition-all duration-300"
             :class="currentPillarData.cardBorderClass">
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            <!-- Left Info Side (col-span-7) -->
            <div class="lg:col-span-7 space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-3xl p-3 rounded-2xl" :class="currentPillarData.iconBgClass">{{ currentPillarData.icon }}</span>
                <div>
                  <span class="text-xs font-bold px-3 py-0.5 rounded-full" :class="currentPillarData.badgeClass">{{ currentPillarData.badge }}</span>
                  <h4 class="text-xl font-black text-slate-900 mt-1">{{ currentPillarData.title }}</h4>
                </div>
              </div>

              <!-- Real world analogy -->
              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div class="text-xs font-bold text-sky-800 flex items-center gap-1.5 mb-1">
                  <span>💡</span> التشبيه التوضيحي البسيط:
                </div>
                <p class="text-slate-700 text-sm leading-relaxed">
                  {{ currentPillarData.analogy }}
                </p>
              </div>

              <!-- Real Student Scenario Example -->
              <div class="rounded-2xl p-4 border" :class="currentPillarData.scenarioClass">
                <div class="text-xs font-bold mb-1 flex items-center gap-1.5" :class="currentPillarData.scenarioTextClass">
                  <Sparkles class="w-4 h-4" />
                  مثال واقعي من حياة الطالب:
                </div>
                <p class="text-slate-800 text-sm leading-relaxed">
                  {{ currentPillarData.example }}
                </p>
              </div>

              <!-- The Danger without it -->
              <div class="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 flex items-start gap-3">
                <AlertTriangle class="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div class="text-xs text-rose-900 leading-relaxed">
                  <strong>ماذا لو لم تكن هذه الركيزة موجودة؟ (الخطر):</strong> {{ currentPillarData.danger }}
                </div>
              </div>
            </div>

            <!-- Right Graphic Illustration Side (col-span-5) -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed"
                 :class="currentPillarData.graphicBoxClass">
              <!-- Animated Visual SVG/CSS Graphics -->
              <div class="w-full max-w-[280px] h-[220px] flex flex-col items-center justify-center relative">
                <!-- Pillar 0 Graphic: Encryption (Lock on Secret text) -->
                <div v-if="selectedPillar === 0" class="flex flex-col items-center text-center space-y-3">
                  <div class="relative">
                    <div class="w-20 h-20 rounded-3xl bg-indigo-600 text-white flex items-center justify-center shadow-xl shadow-indigo-300">
                      <Lock class="w-10 h-10 animate-bounce-gentle" />
                    </div>
                    <div class="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-rose-400" title="المتجسس عاجز">
                      <EyeOff class="w-4 h-4" />
                    </div>
                  </div>
                  <div class="bg-indigo-950 text-indigo-300 font-mono text-xs px-4 py-2 rounded-xl border border-indigo-700 shadow">
                    #@8*!9kx$Z&
                  </div>
                  <span class="text-xs font-bold text-indigo-900">
                    البيانات مقفولة كشفرة طلاسم يستحيل فكها
                  </span>
                </div>

                <!-- Pillar 1 Graphic: Tamper Detection (Wax Seal & Integrity Alert) -->
                <div v-if="selectedPillar === 1" class="flex flex-col items-center text-center space-y-3">
                  <div class="relative">
                    <div class="w-20 h-20 rounded-3xl bg-amber-500 text-white flex items-center justify-center shadow-xl shadow-amber-300">
                      <ShieldAlert class="w-10 h-10 animate-pulse" />
                    </div>
                    <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white" title="بصمة التجزئة سليمة">
                      <CheckCircle2 class="w-4 h-4" />
                    </div>
                  </div>
                  <div class="bg-amber-950 text-amber-300 font-mono text-xs px-3 py-1.5 rounded-xl border border-amber-700 shadow flex items-center gap-2">
                    <span class="line-through text-rose-400">1000$ تزوير</span>
                    <span>⟵ 10$ الأصلية</span>
                  </div>
                  <span class="text-xs font-bold text-amber-900">
                    الختم الرقمي يكشف أي تعديل ويلغي العملية فوراً!
                  </span>
                </div>

                <!-- Pillar 2 Graphic: Authentication (Official Certificate vs Fake) -->
                <div v-if="selectedPillar === 2" class="flex flex-col items-center text-center space-y-3">
                  <div class="relative">
                    <div class="w-20 h-20 rounded-3xl bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-300">
                      <UserCheck class="w-10 h-10" />
                    </div>
                    <div class="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-rose-600 border-2 border-white flex items-center justify-center text-white text-xs font-black" title="طرد الموقع المزيف">
                      ✕
                    </div>
                  </div>
                  <div class="bg-emerald-950 text-emerald-300 font-mono text-xs px-3 py-1.5 rounded-xl border border-emerald-700 shadow">
                    ✔ موثق من هيئة الشهادات CA
                  </div>
                  <span class="text-xs font-bold text-emerald-900">
                    المتصفح يتأكد من هوية الموقع ويطرد المحتال المقنع
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Core explanation paragraphs -->
      <div class="space-y-5 text-lg text-slate-700 leading-relaxed mb-10">
        <p class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <span class="font-bold text-slate-400 ml-2">(1)</span>
          <strong class="text-rose-600">(HTTPS)</strong>… بروتوكول HTTP منقول عبر اتصال TLS مؤمَّن. يوفر TLS سرية البيانات وسلامتها أثناء النقل،
          ويساعد المتصفح على التحقق من هوية الخادم واسم النطاق. وتسمى خطوات إنشاء الاتصال الآمن <strong class="text-rose-600">مصافحة TLS</strong>.
        </p>
        <p class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <span class="font-bold text-slate-400 ml-2">(2)</span>
          تجري المصادقة بالشهادة الرقمية واشتقاق مفاتيح الجلسة داخل مصافحة TLS نفسها، ثم يُستخدم التشفير المتماثل لحماية بيانات الاتصال بكفاءة.
        </p>
      </div>

      <!-- Stages table -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-slate-800 text-lg flex items-center gap-2">
            <span>📋</span> مراحل اتصال HTTPS (انقر على أي مرحلة لمشاهدة المخطط المتحرك لها):
          </h3>
          <span class="text-xs text-sky-600 bg-sky-50 px-3 py-1 rounded-full font-bold">تفاعلي</span>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table class="w-full text-right min-w-[640px]">
            <thead class="bg-slate-100 text-slate-800">
              <tr>
                <th class="p-4 font-bold w-1/4">المرحلة</th>
                <th class="p-4 font-bold">ما يحدث</th>
                <th class="p-4 font-bold w-1/5">آلية الحماية الأساسية</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(s, i) in stages" :key="i"
                  class="border-t border-slate-200 cursor-pointer transition-colors"
                  :class="active === i ? 'bg-sky-50 ring-2 ring-sky-300 ring-inset' : 'bg-white hover:bg-slate-50'"
                  @click="active = i">
                <td class="p-4 font-bold text-slate-900">
                  <span class="inline-flex w-7 h-7 rounded-full text-white text-sm items-center justify-center ml-2"
                        :class="active === i ? 'bg-sky-600 ring-2 ring-sky-300' : 'bg-slate-400'">{{ i + 1 }}</span>
                  {{ s.stage }}
                </td>
                <td class="p-4 text-slate-700 leading-relaxed">{{ s.what }}</td>
                <td class="p-4">
                  <span class="inline-block text-sm font-bold px-3 py-1 rounded-full"
                        :class="s.mechanism === 'التشفير المتماثل' ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'">
                    {{ s.mechanism }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ============================================================== -->
      <!-- NEW: Interactive Animated 3-Stage Visual Flow Canvas           -->
      <!-- ============================================================== -->
      <div class="mb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 border-2 border-sky-500/30 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <!-- Floating aura -->
        <div class="absolute -top-20 -right-20 w-60 h-60 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Canvas Header with Stage Switchers -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700 relative z-10">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              <span class="text-xs font-bold text-sky-300 bg-sky-900/60 border border-sky-600/40 px-3 py-0.5 rounded-full">
                مخطط تدفق تفاعلي ومتحرك
              </span>
            </div>
            <h4 class="text-xl font-bold text-white flex items-center gap-2">
              <span>{{ activeStageVisual.title }}</span>
            </h4>
            <p class="text-slate-300 text-xs mt-1">{{ activeStageVisual.subtitle }}</p>
          </div>

          <!-- Stage Selection Tabs inside Canvas -->
          <div class="flex items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-700">
            <button
              v-for="(stg, sIdx) in stages"
              :key="sIdx"
              @click="active = sIdx"
              class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              :class="active === sIdx ? 'bg-sky-500 text-white shadow-md' : 'text-slate-400 hover:text-white'"
            >
              <span class="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                    :class="active === sIdx ? 'bg-white text-sky-900' : 'bg-slate-800 text-slate-300'">
                {{ sIdx + 1 }}
              </span>
              <span>المرحلة {{ sIdx + 1 }}</span>
            </button>
          </div>
        </div>

        <!-- Animated Stage Graphics Viewport -->
        <div class="relative z-10 bg-slate-950/60 border border-slate-800 rounded-2xl p-6 mb-6">
          <div class="flex items-center justify-between gap-4 relative">
            <!-- Client Node -->
            <div class="flex flex-col items-center shrink-0 w-28 text-center">
              <div class="w-16 h-16 rounded-2xl bg-slate-900 border-2 flex items-center justify-center shadow-lg transition-all duration-500"
                   :class="activeStageVisual.clientActive ? 'border-sky-400 ring-4 ring-sky-400/30 scale-105' : 'border-slate-700'">
                <Laptop class="w-8 h-8 text-sky-400" />
              </div>
              <span class="font-bold text-xs mt-2 text-slate-200">المتصفح (الطالب)</span>
              <span class="text-[10px] text-slate-400">Client</span>
            </div>

            <!-- Central Animated Conduit / Channel -->
            <div class="flex-1 relative flex flex-col items-center px-4">
              <!-- Animated Optical Fiber Cable -->
              <div class="w-full h-2 bg-slate-800 rounded-full relative overflow-hidden border border-slate-700 shadow-inner">
                <div class="absolute inset-0 bg-gradient-to-r"
                     :class="activeStageVisual.cableGradient"></div>
                <!-- Moving Laser Light Particles -->
                <div class="absolute top-0 bottom-0 w-1/4 bg-white/80 blur-sm rounded-full animate-flow-laser"
                     :class="active === 0 ? 'animate-flow-left' : 'animate-flow-right'"></div>
              </div>

              <!-- Animated Floating Object in Middle according to stage -->
              <div class="mt-4 transition-all duration-500">
                <!-- Stage 1 Graphic: Verified Digital Certificate -->
                <div v-if="active === 0" class="flex flex-col items-center animate-bounce-gentle">
                  <div class="bg-gradient-to-r from-amber-500 to-sky-500 text-white p-3 rounded-2xl shadow-xl border border-amber-300/40 flex items-center gap-2">
                    <FileText class="w-6 h-6 text-amber-200" />
                    <div class="text-right">
                      <span class="block text-xs font-bold">شهادة رقمية موثقة (SSL/TLS)</span>
                      <span class="block text-[10px] text-amber-100 font-mono">مختومة من هيئة الشهادات (CA)</span>
                    </div>
                    <CheckCircle2 class="w-5 h-5 text-emerald-300 animate-pulse mr-1" />
                  </div>
                  <span class="text-[10px] text-amber-300 mt-1 font-bold">← ينتقل من الخادم إلى المتصفح للتحقق</span>
                </div>

                <!-- Stage 2 Graphic: Session Key Exchange -->
                <div v-if="active === 1" class="flex flex-col items-center animate-bounce-gentle">
                  <div class="bg-gradient-to-r from-indigo-600 to-sky-600 text-white p-3 rounded-2xl shadow-xl border border-indigo-400/40 flex items-center gap-2">
                    <Lock class="w-5 h-5 text-sky-200" />
                    <div class="text-right">
                      <span class="block text-xs font-bold">مفتاح الجلسة السري (Session Key)</span>
                      <span class="block text-[10px] text-indigo-200 font-mono">مشفر بالمفتاح العام للخادم 🔒</span>
                    </div>
                    <KeyRound class="w-5 h-5 text-amber-300 mr-1" />
                  </div>
                  <span class="text-[10px] text-indigo-300 mt-1 font-bold">ينتقل سراً إلى الخادم لفتحه بمفتاحه الخاص →</span>
                </div>

                <!-- Stage 3 Graphic: High-speed Symmetric Stream -->
                <div v-if="active === 2" class="flex flex-col items-center">
                  <div class="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white px-5 py-2.5 rounded-2xl shadow-xl border border-emerald-400/40 flex items-center gap-3 animate-pulse">
                    <Zap class="w-5 h-5 text-amber-300 animate-bounce" />
                    <div class="text-center">
                      <span class="block text-xs font-bold">قناة تبادل بيانات فائقة السرعة</span>
                      <span class="block text-[10px] text-emerald-200">تشفير متماثل ثنائي الاتجاه (AES / TLS)</span>
                    </div>
                    <Zap class="w-5 h-5 text-amber-300 animate-bounce" />
                  </div>
                  <span class="text-[10px] text-emerald-300 mt-1 font-bold">⮂ بيانات الصفحات والصور تتدفق بأمان وبرق ⮂</span>
                </div>
              </div>
            </div>

            <!-- Server Node -->
            <div class="flex flex-col items-center shrink-0 w-28 text-center">
              <div class="w-16 h-16 rounded-2xl bg-slate-900 border-2 flex items-center justify-center shadow-lg transition-all duration-500 relative"
                   :class="activeStageVisual.serverActive ? 'border-emerald-400 ring-4 ring-emerald-400/30 scale-105' : 'border-slate-700'">
                <Server class="w-8 h-8 text-emerald-400" />
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center border-2 border-slate-900 shadow">
                  <KeyRound class="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <span class="font-bold text-xs mt-2 text-slate-200">خادم الويب</span>
              <span class="text-[10px] text-slate-400">Server</span>
            </div>
          </div>
        </div>

        <!-- Explanation Footer for Active Stage -->
        <div class="grid md:grid-cols-2 gap-4 relative z-10">
          <div class="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
            <h5 class="text-xs font-bold text-sky-300 mb-1 flex items-center gap-1.5">
              <Lightbulb class="w-4 h-4 text-amber-400" />
              التشبيه الواقعي لهذه المرحلة:
            </h5>
            <p class="text-slate-200 text-xs leading-relaxed">
              {{ stages[active].analogy }}
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <h5 class="text-xs font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                <ShieldCheck class="w-4 h-4 text-emerald-400" />
                آلية الحماية والسر التقني:
              </h5>
              <p class="text-slate-200 text-xs leading-relaxed">
                {{ stages[active].tip }}
              </p>
            </div>
            <div class="mt-2 text-left">
              <span class="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                    :class="stages[active].mechanism === 'التشفير المتماثل' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-sky-400/20 text-sky-300 border border-sky-400/30'">
                آلية الحماية: {{ stages[active].mechanism }}
              </span>
            </div>
          </div>
        </div>
      </div>


      <!-- ============================================================== -->
      <!-- NEW: Interactive Real-World Student Examples & Analogies Section -->
      <!-- ============================================================== -->
      <div class="mt-14 pt-10 border-t-2 border-dashed border-slate-200">
        <div class="text-center max-w-2xl mx-auto mb-8">
          <div class="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-bold px-4 py-1.5 rounded-full text-sm mb-3">
            <Lightbulb class="w-4 h-4 text-amber-600" />
            أمثلة وتشبيهات من الواقع
          </div>
          <h3 class="text-2xl font-black text-slate-900 mb-2">كيف يفهم الطالب هذا الجزء ببساطة؟</h3>
          <p class="text-slate-600 text-sm">اختر التشبيه أو السيناريو التوضيحي لمعرفة كيف تجتمع هذه التقنيات معاً لحمايتنا على الإنترنت.</p>
        </div>

        <!-- Examples Tabs Navigation -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            v-for="tab in exampleTabs"
            :key="tab.id"
            @click="currentTab = tab.id"
            class="flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-200 border"
            :class="currentTab === tab.id
              ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-200 scale-105'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'"
          >
            <span>{{ tab.icon }}</span>
            <span>{{ tab.title }}</span>
          </button>
        </div>

        <!-- Tab 1: صندوق البريد والقفل (المفتاح العام والخاص) -->
        <div v-if="currentTab === 'mailbox'" class="bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/60 border-2 border-indigo-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <div class="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div class="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
              <Mail class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">المثال 1: تشبيه القفل المفتوح وصندوق البريد</span>
              <h4 class="text-xl font-bold text-slate-900 mt-1">كيف يعمل المفتاح العام والمفتاح الخاص؟</h4>
              <p class="text-slate-600 text-sm mt-1">تخيل أن المعلم أو البنك يريد أن يرسل له الطلاب رسائل سرية دون أن يقرأها أي شخص آخر في الفصل.</p>
            </div>
          </div>

          <!-- Step cards comparison -->
          <div class="grid md:grid-cols-2 gap-5 mb-6">
            <!-- Public key box -->
            <div class="bg-white border-2 border-sky-200 rounded-2xl p-5 shadow-sm hover:border-sky-400 transition-colors">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <Unlock class="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h5 class="font-bold text-sky-900">1. المفتاح العام = قفل مفتوح للجميع</h5>
                  <span class="text-xs text-sky-600 font-bold">متاح للكل بدون خوف</span>
                </div>
              </div>
              <p class="text-slate-700 text-sm leading-relaxed mb-3">
                يقوم البنك بتوزيع مئات الأقفال المفتوحة المتطابقة على كل الطلاب في العالم.
              </p>
              <div class="bg-sky-50 p-3 rounded-xl text-xs text-sky-900 font-medium">
                👉 <strong>دور الطالب:</strong> يضع رسالته في صندوقه، ويغلق عليه بالقفل المفتوح (تكة واحدة)! بعد الإغلاق، حتى الطالب نفسه لا يستطيع إعادة فتحه!
              </div>
            </div>

            <!-- Private key box -->
            <div class="bg-white border-2 border-indigo-200 rounded-2xl p-5 shadow-sm hover:border-indigo-400 transition-colors">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <KeyRound class="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h5 class="font-bold text-indigo-900">2. المفتاح الخاص = المفتاح الوحيد لفتح القفل</h5>
                  <span class="text-xs text-indigo-600 font-bold">سري للغاية في جيب صاحبه</span>
                </div>
              </div>
              <p class="text-slate-700 text-sm leading-relaxed mb-3">
                المفتاح الذي يفتح هذا القفل لا يوجد منه إلا نسخة واحدة فقط ومخبأة في خزنة البنك بأمان.
              </p>
              <div class="bg-indigo-50 p-3 rounded-xl text-xs text-indigo-900 font-medium">
                👉 <strong>دور البنك:</strong> عندما يستلم الصندوق المغلق، يضع مفتاحه الخاص السري ليفتح القفل ويقرأ رسالة الطالب بأمان تام!
              </div>
            </div>
          </div>

          <!-- Visual Graphic Diagram for Mailbox Analogy -->
          <div class="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-5 mb-6">
            <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">🎨 رسم توضيحي مبسط: دورة حياة الرسالة والقفل</h5>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div class="bg-sky-50 rounded-xl p-3 border border-sky-100 flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-sky-200 text-sky-800 flex items-center justify-center font-bold mb-2">
                  <FileText class="w-6 h-6 text-sky-700" />
                </div>
                <span class="text-xs font-bold text-slate-800">1. كتابة الرسالة</span>
                <span class="text-[11px] text-slate-500 mt-0.5">الطالب يكتب سر الحساب</span>
              </div>
              <div class="bg-amber-50 rounded-xl p-3 border border-amber-100 flex flex-col items-center relative">
                <div class="w-12 h-12 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold mb-2 animate-bounce">
                  <Lock class="w-6 h-6 text-amber-700" />
                </div>
                <span class="text-xs font-bold text-slate-800">2. الإغلاق بالقفل العام</span>
                <span class="text-[11px] text-amber-700 font-medium mt-0.5">تكة واحدة ويستحيل فتحها</span>
              </div>
              <div class="bg-indigo-50 rounded-xl p-3 border border-indigo-100 flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center font-bold mb-2">
                  <KeyRound class="w-6 h-6 text-indigo-700 animate-pulse" />
                </div>
                <span class="text-xs font-bold text-slate-800">3. الفتح بالمفتاح الخاص</span>
                <span class="text-[11px] text-indigo-700 font-medium mt-0.5">البنك وحده يفتحها بأمان</span>
              </div>
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
            <span class="text-2xl">💡</span>
            <p class="text-sm text-amber-900 font-medium leading-relaxed">
              <strong>قاعدة ذهبية يحفظها الطالب:</strong> أي شخص في العالم يستطيع <span class="underline font-bold">التشفير</span> بالمفتاح العام، ولكن <span class="underline font-bold">شخص واحد فقط</span> يستطيع فك التشفير وهو من يملك المفتاح الخاص!
            </p>
          </div>
        </div>

        <!-- Tab 2: لغز المكالمة السريعة (لماذا نجمع بين المفتاح العام والمتماثل؟) -->
        <div v-if="currentTab === 'speed'" class="bg-gradient-to-br from-amber-50/60 via-white to-rose-50/60 border-2 border-amber-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div class="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div class="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-200">
              <Zap class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">المثال 2: لغز الجمع بين الأمان والسرعة</span>
              <h4 class="text-xl font-bold text-slate-900 mt-1">لماذا لا نستخدم المفتاح العام طوال الوقت؟</h4>
              <p class="text-slate-600 text-sm mt-1">سؤال يسأله أغلب الطلاب في الامتحان: إذا كان المفتاح العام آمناً جداً، فلماذا نتحول إلى التشفير المتماثل؟</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-5 mb-6">
            <div class="bg-white border border-slate-200 rounded-2xl p-5">
              <div class="flex items-center gap-2 font-bold text-indigo-700 mb-2">
                <span>🔐</span> التشفير بالمفتاح العام (خزنة فولاذية ثقيلة)
              </div>
              <ul class="space-y-2 text-sm text-slate-700">
                <li class="flex items-center gap-2">
                  <span class="text-emerald-500 font-bold">✔</span> آمن للغاية ولا يحتاج تبادل أسرار مسبقاً.
                </li>
                <li class="flex items-center gap-2 text-rose-600 font-bold">
                  <span>✖</span> لكنه بطيء جداً ويتطلب عمليات رياضية معقدة تُرهق المعالج وتجعل الموقع بطيئاً جداً لو شفرنا به كل الفيديوهات والصور!
                </li>
              </ul>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5">
              <div class="flex items-center gap-2 font-bold text-amber-700 mb-2">
                <span>⚡</span> التشفير المتماثل (لغة شيفرة سريعة وخفيفة)
              </div>
              <ul class="space-y-2 text-sm text-slate-700">
                <li class="flex items-center gap-2">
                  <span class="text-emerald-500 font-bold">✔</span> فائق السرعة وخفيف جداً، ممتاز لنقل آلاف الصور والبيانات في أجزاء من الثانية.
                </li>
                <li class="flex items-center gap-2 text-rose-600 font-bold">
                  <span>✖</span> مشكلته الكبرى: كيف نتفق أنا وأنت على كلمة السر المشتركة دون أن يسمعنا أحد في الإنترنت؟
                </li>
              </ul>
            </div>
          </div>

          <!-- The Hybrid Magic -->
          <div class="bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-2xl p-6 shadow-md">
            <div class="flex items-center gap-3 mb-2 font-bold text-lg">
              <Sparkles class="w-6 h-6 text-amber-300" />
              الحل الذكي والعبقري لـ HTTPS:
            </div>
            <p class="text-sky-100 text-sm leading-relaxed mb-3">
              نستخدم <strong>المفتاح العام المعقد</strong> في أول ثانية فقط لنضع بداخله "كلمة سر مؤقتة وسريعة للجلسة" (Session Key)، ونرسلها للخادم.
            </p>
            <p class="text-amber-200 text-sm font-bold">
              🎉 بعد أن أصبح لدينا كلمة سر مشتركة بأمان، نتحول فوراً للتشفير المتماثل فائق السرعة لباقي التصفح ونقل البيانات!
            </p>
          </div>
        </div>

        <!-- Tab 3: سيناريو التسوق الواقعي (المراحل الثلاث) -->
        <div v-if="currentTab === 'shopping'" class="bg-gradient-to-br from-emerald-50/60 via-white to-sky-50/60 border-2 border-emerald-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div class="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
              <ShoppingCart class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">المثال 3: قصة من حياتك اليومية</span>
              <h4 class="text-xl font-bold text-slate-900 mt-1">تخيل أنك تشتري كتاباً من متجر إلكتروني</h4>
              <p class="text-slate-600 text-sm mt-1">دعنا نربط مراحل الجدول الثلاث بواقع تجربة شراء حقيقية يمر بها كل طالب.</p>
            </div>
          </div>

          <!-- 3 Steps Interactive Timeline -->
          <div class="space-y-4">
            <!-- Step 1 -->
            <div class="bg-white border-2 border-slate-200 hover:border-sky-300 rounded-2xl p-4 transition-all">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm shrink-0">1</span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <h5 class="font-bold text-slate-900 text-base">فحص بطاقة المتجر (الشهادة الرقمية)</h5>
                    <span class="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">المفتاح العام</span>
                  </div>
                  <p class="text-slate-600 text-sm mt-1">
                    قبل أن تضع قرشاً واحداً، يبرز لك المتجر هويته ورخصته الرسمية المعتمدة من جهة موثوقة (CA)، للتأكد من أنه المتجر الحقيقي وليس موقعاً مخادعاً ينتحل اسمه!
                  </p>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="bg-white border-2 border-slate-200 hover:border-sky-300 rounded-2xl p-4 transition-all">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm shrink-0">2</span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <h5 class="font-bold text-slate-900 text-base">الاتفاق على كود سري للمشتريات (اشتقاق مفتاح الجلسة)</h5>
                    <span class="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">المفتاح العام</span>
                  </div>
                  <p class="text-slate-600 text-sm mt-1">
                    أنت والمتجر تتفقان على كلمة سر سرية مؤقتة خاصة بعملية الشراء الحالية، ويتم إخفاؤها وحمايتها باستخدام المفتاح العام بحيث لا يراها أحد على الشبكة.
                  </p>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="bg-white border-2 border-slate-200 hover:border-amber-300 rounded-2xl p-4 transition-all">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm shrink-0">3</span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <h5 class="font-bold text-slate-900 text-base">إرسال بيانات الفيزا بأمان وسرعة (تبادل البيانات)</h5>
                    <span class="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">التشفير المتماثل</span>
                  </div>
                  <p class="text-slate-600 text-sm mt-1">
                    الآن ترسل رقم بطاقتك البنكية وعنوان الشحن مشفرة بالكود السري المشترك، بسرعة فائقة وحماية مطلقة تمنع أي لص من سرقة أموالك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 4: محاكاة تفاعلية (قارن بنفسك HTTP vs HTTPS) -->
        <div v-if="currentTab === 'simulator'" class="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700">
            <div>
              <div class="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-3 py-1 rounded-full mb-2">
                🧪 تجربة تفاعلية مباشرة
              </div>
              <h4 class="text-xl font-bold text-white">ماذا يرى المخترق عند التصفح؟ (HTTP مقابل HTTPS)</h4>
              <p class="text-slate-400 text-xs mt-1">جرّب بنفسك واكتشف لماذا أصبح العالم كله يعتمد على HTTPS إجبارياً.</p>
            </div>

            <!-- Switch Mode Toggle -->
            <div class="bg-slate-950 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-700 shrink-0">
              <button
                @click="simSecure = false"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all"
                :class="!simSecure ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'"
              >
                🔴 بدون أمان (HTTP)
              </button>
              <button
                @click="simSecure = true"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                :class="simSecure ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'"
              >
                <Lock class="w-3.5 h-3.5" />
                🟢 اتصال مؤمن (HTTPS)
              </button>
            </div>
          </div>

          <!-- Input Demo -->
          <div class="grid md:grid-cols-2 gap-6 items-stretch">
            <!-- User input side -->
            <div class="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-2">بيانات يدخلها الطالب في الموقع (كلمة سر / بطاقة):</label>
                <input
                  v-model="simText"
                  type="text"
                  placeholder="اكتب كلمة سر هنا للتجربة..."
                  class="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-sky-400 text-right"
                />
              </div>

              <div class="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                <span>حالة البروتوكول:</span>
                <span class="font-mono font-bold" :class="simSecure ? 'text-emerald-400' : 'text-rose-400'">
                  {{ simSecure ? 'https://my-bank.com' : 'http://my-bank.com' }}
                </span>
              </div>
            </div>

            <!-- Hacker Sniffing View -->
            <div class="rounded-2xl p-5 border transition-all duration-300"
                 :class="simSecure ? 'bg-emerald-950/40 border-emerald-500/40' : 'bg-rose-950/40 border-rose-500/50'">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold flex items-center gap-1.5" :class="simSecure ? 'text-emerald-400' : 'text-rose-400'">
                  <component :is="simSecure ? ShieldCheck : ShieldAlert" class="w-4 h-4" />
                  {{ simSecure ? 'ما يراه المخترق عبر الشبكة (مشفر تماماً):' : 'ما يراه المخترق (مكشوف وسهل السرقة!):' }}
                </span>
                <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded"
                      :class="simSecure ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'">
                  {{ simSecure ? 'TLS Encrypted' : 'Plain Text' }}
                </span>
              </div>

              <!-- Output box -->
              <div class="font-mono text-sm p-3.5 rounded-xl bg-slate-950 min-h-[60px] flex items-center break-all"
                   :class="simSecure ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'">
                {{ simSecure ? encryptedDisplay : (simText || 'لا توجد بيانات بعد') }}
              </div>

              <p class="text-xs mt-3 leading-relaxed" :class="simSecure ? 'text-emerald-200/80' : 'text-rose-200/80'">
                {{ simSecure
                  ? '🔒 رائع! حتى لو التقط المخترق حزم البيانات في شبكة الواي فاي، فلن يرى سوى رموز عشوائية يستحيل فكها بدون المفاتيح السرية.'
                  : '⚠️ خطر كارثي! أي شخص يجلس معك على نفس شبكة الواي فاي يستطيع قراءة كلمة السر ورقم حسابك بوضوح تام دون أي عناء.'
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Review Flashcard for Exams -->
        <div class="mt-8 bg-sky-50 border border-sky-200 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🎓</span>
            <div>
              <h5 class="font-bold text-sky-950 text-sm">سؤال امتحاني متكرر: ما الفرق بين التشفير في المصافحة وتبادل البيانات؟</h5>
              <p class="text-xs text-sky-800 mt-0.5">في المصافحة (التحقق والاشتقاق) = تشفير بالمفتاح العام | في تبادل البيانات الفعلي = تشفير متماثل.</p>
            </div>
          </div>
          <span class="text-xs font-bold bg-white text-sky-700 px-3 py-1.5 rounded-xl border border-sky-200 shrink-0">
            ملخص سريع للوزاري ✍️
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  Globe,
  Lock,
  Unlock,
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  Sparkles,
  Lightbulb,
  Mail,
  Zap,
  ShoppingCart,
  Laptop,
  Server,
  EyeOff,
  CheckCircle2,
  FileText,
  Play,
  Pause,
  RotateCcw,
  UserCheck,
  AlertTriangle
} from 'lucide-vue-next'

const active = ref(0)
const currentTab = ref('mailbox')
const selectedPillar = ref(0)

// ==========================================
// 0. The 3 Security Pillars of HTTPS Data
// ==========================================
const pillarsData = [
  {
    icon: '🔒',
    shortTitle: '1. التشفير',
    title: 'الركيزة 1: التشفير (حماية السرية والخصوصية)',
    badge: 'Confidentiality',
    badgeClass: 'bg-indigo-100 text-indigo-800',
    iconBgClass: 'bg-indigo-100 text-indigo-700',
    cardBorderClass: 'border-indigo-300 ring-2 ring-indigo-100',
    activeBtnClass: 'bg-indigo-600 text-white shadow-md shadow-indigo-200',
    scenarioClass: 'bg-indigo-50/50 border-indigo-200',
    scenarioTextClass: 'text-indigo-800',
    graphicBoxClass: 'border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-white',
    analogy: 'مثل كتابة رسالة مهمة ووضعها داخل ظرف معتم مغلق بقفل حديدي؛ لا يمكن لأي ساعي بريد أو عابر سبيل في الطريق قراءة حرف واحد مما بداخله.',
    example: 'عندما يكتب الطالب كلمة سر حسابه أو رقم بطاقته البنكية في الموقع؛ تتحول في الهواء وشبكة الواي فاي إلى رموز طلاسم (#@8*!9kx) تجعل أي متلصص عاجزاً عن قراءتها.',
    danger: 'بدون التشفير: يستطيع أي شخص جالس بجوارك في كافيه أو متصل بنفس شبكة الواي فاي قراءة كلمات مرورك ورسائلك بوضوح تام (Plain Text)!'
  },
  {
    icon: '🛡️',
    shortTitle: '2. اكتشاف التلاعب',
    title: 'الركيزة 2: اكتشاف التلاعب (سلامة البيانات ومنع التزوير)',
    badge: 'Integrity',
    badgeClass: 'bg-amber-100 text-amber-800',
    iconBgClass: 'bg-amber-100 text-amber-700',
    cardBorderClass: 'border-amber-300 ring-2 ring-amber-100',
    activeBtnClass: 'bg-amber-600 text-white shadow-md shadow-amber-200',
    scenarioClass: 'bg-amber-50/50 border-amber-200',
    scenarioTextClass: 'text-amber-800',
    graphicBoxClass: 'border-amber-200 bg-gradient-to-br from-amber-50/50 to-white',
    analogy: 'مثل وضع ختم شمعي أمني رسمي على الظرف؛ إذا حاول أي شخص في الطريق فتح الظرف وتعديل الورقة، ينكسر الشمع فوراً ويكتشف المستلم أن الرسالة ملعوب فيها!',
    example: 'إذا أرسلت للمتجر أمراً بـ: "شراء كتاب واحد بسعر 10 جنيهات"، وحاول مخترق في الشبكة التلاعب بها وتغييرها إلى "شراء 100 كتاب بـ 1000 جنيه"، يكتشف HTTPS فوراً أن البصمة الرقمية (Hash) تغيرت، فيرفض الرسالة ويلغي العملية تلقائياً!',
    danger: 'بدون اكتشاف التلاعب: يمكن للقراصنة حقن إعلانات خبيثة داخل المواقع التي تتصفحها، أو تحويل أموالك لحساباتهم بتعديل أرقام التحويل أثناء انتقالها في الشبكة!'
  },
  {
    icon: '🪪',
    shortTitle: '3. التحقق من الطرف المقابل',
    title: 'الركيزة 3: التحقق من الطرف المقابل (المصادقة ومنع الانتحال)',
    badge: 'Authentication',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    iconBgClass: 'bg-emerald-100 text-emerald-700',
    cardBorderClass: 'border-emerald-300 ring-2 ring-emerald-100',
    activeBtnClass: 'bg-emerald-600 text-white shadow-md shadow-emerald-200',
    scenarioClass: 'bg-emerald-50/50 border-emerald-200',
    scenarioTextClass: 'text-emerald-800',
    graphicBoxClass: 'border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white',
    analogy: 'مثل ضابط الجوازات الذي يفحص جواز السفر والختم الرسمي للجمهورية للتأكد بنسبة 100% أن هذا الشخص هو صاحب الهوية الحقيقي وليس شخصاً متنكراً.',
    example: 'لو قام محتال بإنشاء صفحة تسجيل دخول مزيفة تشبه تماماً صفحة البنك أو مدرستك لاصطياد الطلاب (Phishing)؛ يطلب المتصفح شهادة الموقع الرقمية المعتمدة رسمياً، ولأن المحتال لا يملكها، يظهر المتصفح صفحة تحذيرية حمراء عملاقة تمنعك من الدخول!',
    danger: 'بدون التحقق من الطرف المقابل: يمكن لأي محتال تزييف صفحات تسجيل الدخول وسرقة حساباتك وأموالك دون أن تشعر بأي اختلاف في الشكل!'
  }
]

const currentPillarData = computed(() => pillarsData[selectedPillar.value])

// ==========================================
// 1. Key-Pair Interactive Animation Logic
// ==========================================
const isKeyAnimPlaying = ref(true)
const keyAnimStep = ref(0)
let keyAnimInterval = null

const keyAnimStepsInfo = [
  {
    title: 'الخطوة 1: كتابة الرسالة',
    desc: 'الطالب يكتب كلمة سر حساسة في المتصفح قبل إرسالها.'
  },
  {
    title: 'الخطوة 2: القفل بالمفتاح العام',
    desc: 'المفتاح العام (المتاح للجميع) يُقفل الرسالة ويحولها إلى شفرة غير مقروءة.'
  },
  {
    title: 'الخطوة 3: النقل عبر شبكة الإنترنت',
    desc: 'الرسالة تمر عبر الإنترنت بأمان، وأي متجسس يراها لا يستطيع فكها إطلاقاً!'
  },
  {
    title: 'الخطوة 4: الفتح بالمفتاح الخاص',
    desc: 'الخادم يستقبل الرسالة ويستخدم مفتاحه الخاص السري لفتح القفل وقراءتها.'
  }
]

const keyAnimProgress = computed(() => {
  switch (keyAnimStep.value) {
    case 0: return 85
    case 1: return 60
    case 2: return 40
    case 3: return 10
    default: return 85
  }
})

const keyAnimPacketText = computed(() => {
  switch (keyAnimStep.value) {
    case 0: return 'Secret123'
    case 1: return '🔒 مشفرة بالمفتاح العام'
    case 2: return '#@9x!8Q$'
    case 3: return 'Secret123 ✔'
    default: return 'Secret123'
  }
})

const nextKeyAnimStep = () => {
  keyAnimStep.value = (keyAnimStep.value + 1) % keyAnimStepsInfo.length
}

const toggleKeyAnimPlay = () => {
  isKeyAnimPlaying.value = !isKeyAnimPlaying.value
  if (isKeyAnimPlaying.value) {
    startKeyAnimLoop()
  } else {
    stopKeyAnimLoop()
  }
}

const resetKeyAnim = () => {
  keyAnimStep.value = 0
  if (isKeyAnimPlaying.value) {
    stopKeyAnimLoop()
    startKeyAnimLoop()
  }
}

const setKeyAnimStep = (idx) => {
  keyAnimStep.value = idx
  stopKeyAnimLoop()
  isKeyAnimPlaying.value = false
}

const startKeyAnimLoop = () => {
  stopKeyAnimLoop()
  keyAnimInterval = setInterval(() => {
    nextKeyAnimStep()
  }, 2800)
}

const stopKeyAnimLoop = () => {
  if (keyAnimInterval) {
    clearInterval(keyAnimInterval)
    keyAnimInterval = null
  }
}

onMounted(() => {
  if (isKeyAnimPlaying.value) {
    startKeyAnimLoop()
  }
})

onUnmounted(() => {
  stopKeyAnimLoop()
})

// ==========================================
// 2. Stages Visualizer Computation
// ==========================================
const stages = [
  {
    stage: 'مصافحة TLS: التحقق من الشهادة',
    what: 'أثناء المصافحة يرسل الخادم شهادته الرقمية، ويتحقق المتصفح من صلاحيتها وسلسلة الثقة وملاءمتها لاسم الموقع.',
    mechanism: 'التشفير بالمفتاح العام',
    analogy: 'مثل ضابط الجوازات عندما يفحص جواز سفرك والختم الرسمي للتأكد من هويتك وصلاحية وثيقتك قبل السماح لك بالدخول.',
    tip: 'المتصفح يتأكد من هوية الموقع حتى لا يدخل الطالب موقعاً مزيفاً ينتحل اسم موقعه المفضل.',
  },
  {
    stage: 'مصافحة TLS: اشتقاق مفاتيح الجلسة',
    what: 'وفي المصافحة نفسها يتفاوض الطرفان على أسرار مشتركة تُشتق منها مفاتيح الجلسة، باستخدام آليات مفتاح عام مناسبة لإصدار TLS ومجموعة التشفير.',
    mechanism: 'التشفير بالمفتاح العام',
    analogy: 'مثل اثنين يتفقان على كلمة سر جديدة لمكالمتهما بوضعها داخل ظرف مقفل بقفل الخادم، بحيث لا يستطيع فتحه سوى الخادم.',
    tip: 'نستخدم المفتاح العام فقط في البداية لتبادل هذه الكلمة السرية بأمان تام.',
  },
  {
    stage: 'تبادل البيانات',
    what: 'تُحمى بيانات الجلسة بالتشفير المتماثل وآليات سلامة البيانات.',
    mechanism: 'التشفير المتماثل',
    analogy: 'مثل التحدث بشيفرة خاصة وسريعة جداً اتفق عليها الطرفان، فلا يضيع الوقت وتصل الرسائل فورياً.',
    tip: 'تم اختيار التشفير المتماثل هنا لأنه فائق السرعة ويستطيع نقل كميات ضخمة من صفحات الإنترنت والصور بكفاءة عالية.',
  },
]

const activeStageVisual = computed(() => {
  if (active.value === 0) {
    return {
      title: 'المرحلة 1: التحقق من الشهادة الرقمية (الخادم ⟵ المتصفح)',
      subtitle: 'يرسل خادم الويب شهادته الرقمية الصادرة من جهة معتمدة (CA) ليتأكد المتصفح من هويته الرسمية.',
      clientActive: true,
      serverActive: true,
      cableGradient: 'from-amber-400 via-sky-400 to-indigo-500'
    }
  } else if (active.value === 1) {
    return {
      title: 'المرحلة 2: اشتقاق مفاتيح الجلسة (المتصفح ⟶ الخادم)',
      subtitle: 'يتم تشفير سر مفتاح الجلسة بالمفتاح العام للخادم وإرساله ليفتحه الخادم بمفتاحه الخاص السري.',
      clientActive: true,
      serverActive: true,
      cableGradient: 'from-indigo-500 via-sky-400 to-indigo-600'
    }
  } else {
    return {
      title: 'المرحلة 3: تبادل البيانات بالتشفير المتماثل (ثنائي الاتجاه ⟷)',
      subtitle: 'تم الاتفاق على مفتاح الجلسة، والآن كل رسائل الويب وبيانات الحساب تنتقل بأقصى سرعة وأمان.',
      clientActive: true,
      serverActive: true,
      cableGradient: 'from-emerald-400 via-teal-300 to-emerald-400'
    }
  }
})

// ==========================================
// 3. Simulator State
// ==========================================
const simSecure = ref(true)
const simText = ref('P@ssw0rd2026')

const encryptedDisplay = computed(() => {
  if (!simText.value) return 'لا توجد بيانات'
  return '9f8e4a7d' + Array.from(simText.value).map(c => (c.charCodeAt(0) * 17 % 256).toString(16).padStart(2, '0')).join('') + 'b3c1#TLS_AES_256'
})

const exampleTabs = [
  { id: 'mailbox', title: 'صندوق البريد والقفل', icon: '📮' },
  { id: 'speed', title: 'لغز السرعة والأمان', icon: '⚡' },
  { id: 'shopping', title: 'تجربة التسوق الإلكتروني', icon: '🛒' },
  { id: 'simulator', title: 'محاكاة HTTP ضد HTTPS', icon: '🧪' },
]
</script>

<style scoped>
@keyframes flowLaserLeft {
  0% { right: 0%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { right: 80%; opacity: 0; }
}

@keyframes flowLaserRight {
  0% { left: 0%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { left: 80%; opacity: 0; }
}

@keyframes bounceGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-flow-left {
  animation: flowLaserLeft 2.2s infinite ease-in-out;
}

.animate-flow-right {
  animation: flowLaserRight 2.2s infinite ease-in-out;
}

.animate-bounce-gentle {
  animation: bounceGentle 2.5s infinite ease-in-out;
}
</style>


