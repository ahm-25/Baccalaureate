<template>
  <section id="security-combination" class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="inline-flex items-center gap-2 bg-sky-600 text-white font-bold px-5 py-2 rounded-full shadow-sm mb-6 text-sm">
        <span>🛡️</span> وحدة تقنيات التشفير والمصادقة
      </div>
      <h2 class="text-2xl md:text-3xl font-bold text-sky-800 mb-6">3. تركيبات تقنيات الأمان</h2>

      <p class="text-lg text-slate-700 leading-relaxed mb-6">
        <span class="font-bold text-slate-400">(1)</span>
        يتحقق الاتصال والخدمات الآمنة ليس من خلال تقنية واحدة، بل من خلال الجمع بين عدة تقنيات أمان.
      </p>

      <div class="grid lg:grid-cols-3 gap-6 mb-12">
        <!-- Techniques table -->
        <div class="lg:col-span-2 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table class="w-full text-right min-w-[480px]">
            <thead class="bg-slate-100 text-slate-800">
              <tr>
                <th class="p-4 font-bold w-2/5">التقنية</th>
                <th class="p-4 font-bold">التأثير</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for="(t, idx) in techniques"
                :key="t.name"
                class="border-t border-slate-200 cursor-pointer transition-colors"
                :class="activeTechIdx === idx ? 'bg-sky-50 ring-2 ring-sky-300 ring-inset' : 'hover:bg-slate-50'"
                @click="activeTechIdx = idx"
              >
                <td class="p-4 font-bold text-slate-900 flex items-center gap-2">
                  <span class="text-xl">{{ t.icon }}</span>
                  <span>{{ t.name }}</span>
                </td>
                <td class="p-4 text-slate-700 leading-relaxed text-sm">{{ t.effect }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Key terms -->
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-6 space-y-3.5 shadow-sm">
          <h3 class="font-bold text-sky-700 flex items-center gap-2">
            <Sparkles class="w-5 h-5 text-amber-500" />
            مصطلحات أساسية
          </h3>
          <div
            @click="activeTechIdx = 1"
            class="p-2.5 rounded-xl cursor-pointer transition-all border"
            :class="activeTechIdx === 1 ? 'bg-sky-50 border-sky-300' : 'hover:bg-slate-50 border-transparent'"
          >
            <p class="text-slate-700 leading-relaxed text-xs">
              <strong class="text-rose-600 font-bold">التوقيع الرقمي</strong> – يكتشف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم عدم التنصل.
            </p>
          </div>

          <div
            @click="activeTechIdx = 0"
            class="p-2.5 rounded-xl cursor-pointer transition-all border"
            :class="activeTechIdx === 0 ? 'bg-sky-50 border-sky-300' : 'hover:bg-slate-50 border-transparent'"
          >
            <p class="text-slate-700 leading-relaxed text-xs">
              <strong class="text-rose-600 font-bold">التشفير بالمفتاح العام</strong> – يشارك المفتاح بأمان.
            </p>
          </div>

          <div
            @click="activeTechIdx = 0"
            class="p-2.5 rounded-xl cursor-pointer transition-all border"
            :class="activeTechIdx === 0 ? 'bg-sky-50 border-sky-300' : 'hover:bg-slate-50 border-transparent'"
          >
            <p class="text-slate-700 leading-relaxed text-xs">
              <strong class="text-rose-600 font-bold">التشفير المتماثل</strong> – يتبادل البيانات بسرعة.
            </p>
          </div>

          <div
            @click="activeTechIdx = 2"
            class="bg-orange-50 border border-orange-200 rounded-xl p-3 text-xs text-orange-950 cursor-pointer hover:bg-orange-100 transition-colors"
          >
            📜 <strong>الشهادات الرقمية</strong> تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق الذي يتصل به.
          </div>
        </div>
      </div>

      <!-- ============================================================== -->
      <!-- NEW: Illustrated Infographic & Visual Cards for Definitions    -->
      <!-- ============================================================== -->
      <div class="mb-14 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 md:p-8 text-white shadow-xl">
        <!-- Section Title -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700">
          <div>
            <div class="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-3 py-1 rounded-full mb-2">
              🎨 صور ورسومات توضيحية للتعريفات
            </div>
            <h3 class="text-xl md:text-2xl font-black text-white">
              دليل مصور: كيف تعمل كل تقنية وماذا يعني تعريفها للطلاب؟
            </h3>
            <p class="text-slate-400 text-xs mt-1">
              اختر أي تقنية بالأسفل لترى صورتها التوضيحية وشرح مصطلحاتها الصعبة (عدم التنصل، التلاعب، الانتحال).
            </p>
          </div>

          <!-- Switcher Buttons -->
          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="(tech, i) in visualTechs"
              :key="tech.id"
              @click="activeTechIdx = i"
              class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              :class="activeTechIdx === i ? 'bg-sky-500 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'"
            >
              <span>{{ tech.emoji }}</span>
              <span>{{ tech.tabTitle }}</span>
            </button>
          </div>
        </div>

        <!-- Visual Card Display for the Active Definition -->
        <div class="bg-slate-950/70 border border-slate-700 rounded-2xl p-6 mb-8">
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            <!-- Left Info & Meaning of Definition (7 cols) -->
            <div class="lg:col-span-7 space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-4xl p-3 rounded-2xl bg-slate-900 border border-slate-700">{{ currentVisualTech.emoji }}</span>
                <div>
                  <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full" :class="currentVisualTech.badgeClass">
                    {{ currentVisualTech.category }}
                  </span>
                  <h4 class="text-xl font-bold text-white mt-1">{{ currentVisualTech.title }}</h4>
                </div>
              </div>

              <!-- Textbook Definition Quote -->
              <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-4">
                <div class="text-xs font-bold text-sky-400 mb-1 flex items-center gap-1">
                  <span>📖</span> نص التعريف في الكتاب:
                </div>
                <p class="text-slate-200 text-sm leading-relaxed font-medium">
                  "{{ currentVisualTech.bookDef }}"
                </p>
              </div>

              <!-- Breakdown of Difficult Terms (e.g. Non-repudiation, Tampering, Spoofing) -->
              <div class="space-y-2">
                <div class="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Lightbulb class="w-4 h-4" />
                  تبسيط الكلمات والمصطلحات الصعبة في التعريف:
                </div>
                <div class="grid sm:grid-cols-2 gap-2.5">
                  <div
                    v-for="(term, tIdx) in currentVisualTech.breakdown"
                    :key="tIdx"
                    class="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-xs"
                  >
                    <span class="font-bold text-sky-300 block mb-0.5">{{ term.term }}</span>
                    <span class="text-slate-400 leading-relaxed block">{{ term.meaning }}</span>
                  </div>
                </div>
              </div>

              <!-- Real Student Example -->
              <div class="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 text-xs">
                <div class="font-bold text-emerald-300 flex items-center gap-1 mb-1">
                  <span>💡</span> مثال مبسط للطلاب من الواقع:
                </div>
                <p class="text-emerald-100 leading-relaxed">
                  {{ currentVisualTech.realExample }}
                </p>
              </div>
            </div>

            <!-- Right Visual Graphic Box (5 cols) -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-900 border border-slate-700 rounded-2xl relative overflow-hidden">
              <span class="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-wider">رسم بياني توضيحي</span>

              <!-- Illustration Graphics per technology -->
              <!-- 1. Encryption Graphic -->
              <div v-if="activeTechIdx === 0" class="flex flex-col items-center text-center space-y-3 w-full">
                <div class="flex items-center justify-center gap-4">
                  <div class="flex flex-col items-center">
                    <div class="w-14 h-14 rounded-2xl bg-sky-600/30 border border-sky-400 text-sky-300 flex items-center justify-center text-xl">
                      🔓
                    </div>
                    <span class="text-[10px] text-sky-300 mt-1 font-bold">مفتاح عام</span>
                    <span class="text-[9px] text-slate-400">مشاركة الأسرار</span>
                  </div>
                  <div class="text-amber-400 text-lg font-bold animate-pulse">⟷</div>
                  <div class="flex flex-col items-center">
                    <div class="w-14 h-14 rounded-2xl bg-emerald-600/30 border border-emerald-400 text-emerald-300 flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <span class="text-[10px] text-emerald-300 mt-1 font-bold">تشفير متماثل</span>
                    <span class="text-[9px] text-slate-400">سرعة فائقة للبيانات</span>
                  </div>
                </div>
                <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-400 w-full text-center">
                  🔒 يمنع أطراف ثالثة من التجسس
                </div>
              </div>

              <!-- 2. Digital Signature Graphic -->
              <div v-if="activeTechIdx === 1" class="flex flex-col items-center text-center space-y-3 w-full">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-rose-600/20 border-2 border-rose-400 text-rose-300 flex items-center justify-center text-3xl">
                    ✍️
                  </div>
                  <div class="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow">
                    ✓
                  </div>
                </div>
                <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-rose-300 w-full text-center space-y-1">
                  <div class="font-bold">بصمة إلكترونية فريدة (Hash + Private Key)</div>
                  <div class="text-[10px] text-slate-400">إثبات قطعي: فلان هو من وقع، ولا يمكنه الإنكار!</div>
                </div>
              </div>

              <!-- 3. Digital Certificate Graphic -->
              <div v-if="activeTechIdx === 2" class="flex flex-col items-center text-center space-y-3 w-full">
                <div class="relative">
                  <div class="w-20 h-20 rounded-2xl bg-amber-600/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center text-3xl">
                    📜
                  </div>
                  <div class="absolute -top-2 -right-2 bg-amber-500 text-slate-900 text-[9px] font-black px-1.5 py-0.5 rounded-md shadow">
                    CA
                  </div>
                </div>
                <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-amber-300 w-full text-center space-y-1">
                  <div class="font-bold">هوية الموقع + اسم النطاق</div>
                  <div class="text-[10px] text-slate-400">المتصفح يتأكد: أنت متصل بالخادم الأصلي وليس محتالاً</div>
                </div>
              </div>

              <!-- 4. 2FA Graphic -->
              <div v-if="activeTechIdx === 3" class="flex flex-col items-center text-center space-y-3 w-full">
                <div class="flex items-center gap-3">
                  <div class="flex flex-col items-center">
                    <div class="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lg">
                      🔑
                    </div>
                    <span class="text-[9px] text-slate-400 mt-1">1. كلمة السر</span>
                  </div>
                  <span class="text-slate-500 font-bold">+</span>
                  <div class="flex flex-col items-center">
                    <div class="w-12 h-12 rounded-xl bg-emerald-600/30 border border-emerald-400 flex items-center justify-center text-lg animate-bounce">
                      📱
                    </div>
                    <span class="text-[9px] text-emerald-300 mt-1">2. كود الهاتف</span>
                  </div>
                </div>
                <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-400 w-full text-center">
                  🛡️ تقليل الدخول غير المصرح به حتى لو سُرقت كلمة السر!
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Native Interactive 4-Pillar Dashboard (No Static Images) -->
        <div class="mt-8 pt-8 border-t border-slate-800">
          <div class="flex items-center justify-between mb-6">
            <div>
              <span class="text-xs font-bold text-sky-400 bg-sky-900/50 border border-sky-600/40 px-3 py-1 rounded-full inline-block mb-1">
                🌟 لوحة تفاعلية بصرية
              </span>
              <h4 class="text-lg md:text-xl font-black text-white">
                استكشف كل تقنية بشكل مرئي ومتحرك (اضغط على البطاقات لتجربتها)
              </h4>
            </div>
            <span class="text-xs text-slate-400 hidden sm:inline-block">تفاعلي 100% ⚡</span>
          </div>

          <!-- 4 Visual Cards Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- 1. Digital Signature Visual Card -->
            <div
              @click="activeTechIdx = 1"
              class="bg-slate-900/90 border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl"
              :class="activeTechIdx === 1 ? 'border-rose-400 ring-4 ring-rose-400/20 bg-rose-950/20' : 'border-slate-800 hover:border-slate-700'"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-2xl p-2.5 rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-300">✍️</span>
                  <span class="text-[10px] bg-rose-500/20 text-rose-300 font-bold px-2 py-0.5 rounded-full border border-rose-500/30">
                    إثبات وعدم تنصل
                  </span>
                </div>
                <h5 class="font-bold text-white text-sm mb-1">1. التوقيع الرقمي</h5>
                <p class="text-slate-400 text-xs leading-relaxed mb-3">
                  بصمة إلكترونية فريدة تكشف التلاعب وتثبت هوية الموقّع وتمنع إنكار الإرسال.
                </p>
              </div>

              <!-- Animated interactive widget for Signature -->
              <div class="bg-slate-950 rounded-xl p-3 border border-slate-800 text-center">
                <div class="flex items-center justify-center gap-2 mb-2">
                  <span class="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                  <span class="font-mono text-[10px] text-rose-300 font-bold">بصمة مشفرة لا تُقلّد</span>
                </div>
                <div class="bg-slate-900 border border-rose-500/30 rounded-lg p-2 flex items-center justify-between text-[10px]">
                  <span class="text-slate-300 font-mono">Sign(Hash, PrKey)</span>
                  <span class="text-emerald-400 font-bold">✓ صحيح</span>
                </div>
                <div class="mt-2 text-[9px] text-slate-400 leading-tight">
                  ⚖️ يمنع المتهم من قول: "مش أنا اللي بعت!"
                </div>
              </div>
            </div>

            <!-- 2. Public Key Encryption Visual Card -->
            <div
              @click="activeTechIdx = 0"
              class="bg-slate-900/90 border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl"
              :class="activeTechIdx === 0 ? 'border-sky-400 ring-4 ring-sky-400/20 bg-sky-950/20' : 'border-slate-800 hover:border-slate-700'"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-2xl p-2.5 rounded-xl bg-sky-600/20 border border-sky-500/30 text-sky-300">🔐</span>
                  <span class="text-[10px] bg-sky-500/20 text-sky-300 font-bold px-2 py-0.5 rounded-full border border-sky-500/30">
                    مشاركة آمنة
                  </span>
                </div>
                <h5 class="font-bold text-white text-sm mb-1">2. التشفير العام</h5>
                <p class="text-slate-400 text-xs leading-relaxed mb-3">
                  يشارك المفتاح بأمان في أول ثانية دون خوف من أي متلصص على الشبكة.
                </p>
              </div>

              <!-- Animated widget for Public Key -->
              <div class="bg-slate-950 rounded-xl p-3 border border-slate-800 text-center">
                <div class="flex items-center justify-center gap-2 mb-2">
                  <span class="text-sky-400 font-bold text-xs">🔓 قفل عام</span>
                  <span class="text-slate-500">⟶</span>
                  <span class="text-amber-400 font-bold text-xs">🗝️ مفتاح خاص</span>
                </div>
                <div class="bg-slate-900 border border-sky-500/30 rounded-lg p-2 text-center text-[10px] text-sky-300 font-mono">
                  #&9*!@ مشفر
                </div>
                <div class="mt-2 text-[9px] text-slate-400 leading-tight">
                  🛡️ يمنع أطراف ثالثة من التجسس
                </div>
              </div>
            </div>

            <!-- 3. Digital Certificate Visual Card -->
            <div
              @click="activeTechIdx = 2"
              class="bg-slate-900/90 border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl"
              :class="activeTechIdx === 2 ? 'border-amber-400 ring-4 ring-amber-400/20 bg-amber-950/20' : 'border-slate-800 hover:border-slate-700'"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-2xl p-2.5 rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-300">📜</span>
                  <span class="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                    هوية ونطاق
                  </span>
                </div>
                <h5 class="font-bold text-white text-sm mb-1">3. الشهادة الرقمية</h5>
                <p class="text-slate-400 text-xs leading-relaxed mb-3">
                  تساعد المتصفح على التحقق من هوية الخادم وارتباط اسمه بنطاق الموقع الرسمي.
                </p>
              </div>

              <!-- Animated widget for Digital Certificate -->
              <div class="bg-slate-950 rounded-xl p-3 border border-slate-800 text-center">
                <div class="bg-slate-900 border border-amber-500/30 rounded-lg p-2 flex items-center justify-between text-[10px] mb-2">
                  <span class="text-emerald-400 font-bold flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                    https://
                  </span>
                  <span class="text-amber-300 font-bold font-mono">CA ختم</span>
                </div>
                <div class="text-[9px] text-slate-300">
                  فحص اسم النطاق: <strong class="text-amber-300">مطابق بنسبة 100%</strong>
                </div>
                <div class="mt-1 text-[9px] text-slate-400 leading-tight">
                  🚫 طرد المواقع المزورة ومنع الاحتيال
                </div>
              </div>
            </div>

            <!-- 4. Two-Factor Authentication Visual Card -->
            <div
              @click="activeTechIdx = 3"
              class="bg-slate-900/90 border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl"
              :class="activeTechIdx === 3 ? 'border-emerald-400 ring-4 ring-emerald-400/20 bg-emerald-950/20' : 'border-slate-800 hover:border-slate-700'"
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-2xl p-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300">📱</span>
                  <span class="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    أمان مضاعف
                  </span>
                </div>
                <h5 class="font-bold text-white text-sm mb-1">4. المصادقة الثنائية</h5>
                <p class="text-slate-400 text-xs leading-relaxed mb-3">
                  تقلل احتمال الدخول غير المصرح به باستخدام عاملين مستقلين (كلمة السر + الهاتف).
                </p>
              </div>

              <!-- Animated widget for 2FA -->
              <div class="bg-slate-950 rounded-xl p-3 border border-slate-800 text-center">
                <div class="bg-slate-900 border border-emerald-500/30 rounded-lg p-2 text-center mb-2">
                  <span class="text-slate-400 text-[9px] block">رمز التحقق المؤقت OTP:</span>
                  <span class="text-emerald-400 font-mono font-bold text-sm tracking-widest animate-pulse">
                    {{ currentOtpCode }}
                  </span>
                </div>
                <div class="text-[9px] text-emerald-300 font-bold">
                  🛡️ محمي حتى لو سرق اللص كلمة السر
                </div>
                <div class="mt-1 text-[9px] text-slate-400 leading-tight">
                  عامل تعرفه + عامل تملكه
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Shopping example stepper -->
      <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 mb-10">
        <h3 class="text-xl font-bold text-slate-900 mb-2">🛒 <span class="text-slate-400">(2)</span> مثال: شراء منتج عبر التسوق الإلكتروني</h3>
        <p class="text-slate-600 mb-6">يتم الجمع بين هذه التقنيات واستخدامها على النحو التالي — اضغط "الخطوة التالية":</p>

        <div class="flex items-center gap-2 mb-6">
          <div v-for="(s, i) in shopping" :key="i" class="flex-1 h-2 rounded-full transition-colors duration-500"
               :class="i <= step ? 'bg-sky-500' : 'bg-slate-200'"></div>
        </div>

        <div class="space-y-3">
          <transition-group name="list">
            <div v-for="(s, i) in shopping.slice(0, step + 1)" :key="i"
                 class="bg-white border rounded-2xl p-4 flex items-start gap-4"
                 :class="i === step ? 'border-sky-400 shadow-md' : 'border-slate-200'">
              <span class="w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0">{{ i + 1 }}</span>
              <div>
                <span class="inline-block text-sm font-bold px-3 py-1 rounded-full mb-2" :class="s.chip">{{ s.tech }}</span>
                <p class="text-slate-700 leading-relaxed">{{ s.text }}</p>
              </div>
            </div>
          </transition-group>
        </div>

        <div class="flex gap-3 mt-6">
          <button v-if="step < shopping.length - 1" @click="step++" class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            الخطوة التالية ←
          </button>
          <button v-else @click="step = 0" class="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-xl transition-colors">
            ↺ أعد المثال
          </button>
        </div>
      </div>

      <p class="text-lg text-slate-700 leading-relaxed mb-8">
        <span class="font-bold text-slate-400">(3)</span>
        يتيح الجمع بين تقنيات الحماية تقليل مخاطر عدة تهديدات، مثل التنصت والتلاعب وانتحال الهوية والدخول غير المصرح به، من دون افتراض أن أي تقنية تمنع الخطر منعًا مطلقًا.
      </p>

      <div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
        <span class="text-sm font-bold text-amber-700">الفكرة الرئيسية</span>
        <p class="text-xl font-bold text-slate-900 leading-relaxed mt-2">
          لا يأتي الأمان عبر الإنترنت من تقنية واحدة، بل من الجمع بين التشفير والشهادات والتوقيعات والمصادقة بحيث تتم معالجة تهديدات كثيرة في آن واحد.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Sparkles, Lightbulb } from 'lucide-vue-next'

const activeTechIdx = ref(1) // default to Digital Signature as it has the densest definition
const currentOtpCode = ref('482 910')
let otpInterval = null

onMounted(() => {
  otpInterval = setInterval(() => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString()
    currentOtpCode.value = randomCode.slice(0, 3) + ' ' + randomCode.slice(3)
  }, 3500)
})

onUnmounted(() => {
  if (otpInterval) clearInterval(otpInterval)
})


const techniques = [
  { icon: '🔐', name: 'التشفير (بالمفتاح المتماثل والمفتاح العام)', effect: 'يمنع قراءة محتوى الاتصال من قبل أطراف ثالثة' },
  { icon: '✍️', name: 'التوقيع الرقمي', effect: 'يدعم التحقق من سلامة البيانات وهوية الموقِّع، ويوفر دليلًا يدعم عدم التنصل عندما يتطلب النظام ذلك' },
  { icon: '📜', name: 'الشهادة الرقمية', effect: 'تساعد المتصفح على التحقق من هوية خادم الويب واسم النطاق الذي يتصل به' },
  { icon: '📱', name: 'المصادقة الثنائية (2FA)', effect: 'تقلل احتمال تسجيل الدخول غير المصرح به' },
]

const visualTechs = [
  {
    id: 'encryption',
    emoji: '🔐',
    tabTitle: 'التشفير (متماثل + عام)',
    title: 'التشفير: حماية سرية الاتصال',
    category: 'السرية والخصوصية',
    badgeClass: 'bg-sky-500/20 text-sky-300 border border-sky-400/30',
    bookDef: 'يمنع قراءة محتوى الاتصال من قبل أطراف ثالثة | المفتاح العام: يشارك المفتاح بأمان | المتماثل: يتبادل البيانات بسرعة.',
    breakdown: [
      { term: 'أطراف ثالثة (Third Parties)', meaning: 'أي شخص متطفل أو لص يحاول التجسس على المحادثة.' },
      { term: 'المفتاح العام (Public Key)', meaning: 'يُستخدم في البداية فقط لتبادل الأسرار بفضل أمانه العالي.' },
      { term: 'التشفير المتماثل (Symmetric)', meaning: 'يُستخدم لنقل بقية البيانات والصور بسرعة فائقة وخفة.' },
      { term: 'التكامل (Combination)', meaning: 'نجمع بين أمان المفتاح العام وسرعة التشفير المتماثل.' }
    ],
    realExample: 'عندما تدفع بالفيزا في موقع تسوق، يُغلق الاتصال بتشفير هجين فوري يمنع أي شخص في شبكة الواي فاي من سرقة رقم الكارت.'
  },
  {
    id: 'signature',
    emoji: '✍️',
    tabTitle: 'التوقيع الرقمي',
    title: 'التوقيع الرقمي: سلامة البيانات وعدم التنصل',
    category: 'إثبات الهوية والمصداقية',
    badgeClass: 'bg-rose-500/20 text-rose-300 border border-rose-400/30',
    bookDef: 'يكتشف التلاعب وانتحال الشخصية، ويوفر دليلاً يدعم عدم التنصل، ويدعم التحقق من سلامة البيانات وهوية الموقّع.',
    breakdown: [
      { term: 'اكتشاف التلاعب (Tamper Detection)', meaning: 'لو تم تعديل حرف واحد في العقد أو الرسالة، ينكسر التوقيع فوراً.' },
      { term: 'انتحال الشخصية (Spoofing)', meaning: 'يمنع أي شخص من إرسال إيميل أو أمر ويدّعي أنه أنت.' },
      { term: 'عدم التنصل (Non-repudiation)', meaning: 'لا يستطيع الموقع أن ينكر لاحقاً ويقول: "مش أنا اللي بعت الرسالة دي"؛ لأن توقيعه الرقمي تم بمفتاحه الخاص السري وحده!' },
      { term: 'هوية الموقّع (Signer Identity)', meaning: 'التأكد القانوني والتقني من الشخص أو الجهة الصادر منها الملف.' }
    ],
    realExample: 'مثل توقيع عقد شراء عقار أو صفقة بنكية إلكترونية؛ بعد التوقيع لا يستطيع المشتري إنكار شرائه أمام القضاء لأن بصمته الرقمية مختومة على المستند.'
  },
  {
    id: 'certificate',
    emoji: '📜',
    tabTitle: 'الشهادة الرقمية',
    title: 'الشهادة الرقمية: موثوقية الموقع واسم النطاق',
    category: 'المصادقة وتأكيد الهوية',
    badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-400/30',
    bookDef: 'تساعد المتصفح على التحقق من هوية خادم الويب واسم النطاق الذي يتصل به.',
    breakdown: [
      { term: 'هوية خادم الويب (Server Identity)', meaning: 'التأكد أن هذا السيرفر ملك حقيقي للبنك أو الشركة وليس لمخترق.' },
      { term: 'اسم النطاق (Domain Name)', meaning: 'ربط الشهادة بالرابط الرسمي (مثل google.com) لمنع مواقع الاحتيال.' },
      { term: 'هيئة الشهادات (CA)', meaning: 'الجهة العالمية المعتمدة التي تختم الشهادة (مثل وزارة العدل أو الجوازات).' },
      { term: 'قفل المتصفح (HTTPS Lock)', meaning: 'العلامة التي تؤكد أن الشهادة صالحة وسلسلة الثقة سليمة.' }
    ],
    realExample: 'مثل بطاقة الرقم القومي أو رخصة المحل؛ يبرزها الموقع لمتصفحك حتى تطمئن أنك داخل الفرع الرسمي وليس مقراً وهمياً لمحتال.'
  },
  {
    id: '2fa',
    emoji: '📱',
    tabTitle: 'المصادقة الثنائية (2FA)',
    title: 'المصادقة الثنائية: حماية الدخول بأكثر من عامل',
    category: 'التحكم في الوصول',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30',
    bookDef: 'تقلل احتمال تسجيل الدخول غير المصرح به باستخدام عاملين مستقلين.',
    breakdown: [
      { term: 'تسجيل غير مصرح به (Unauthorized Login)', meaning: 'دخول شخص غريب إلى حسابك وسرقة خصوصيتك أو أموالك.' },
      { term: 'العامل الأول (شيء تعرفه)', meaning: 'اسم المستخدم وكلمة السر المعتادة.' },
      { term: 'العامل الثاني (شيء تملكه)', meaning: 'هاتفك الشخصي الذي يصله كود OTP أو بصمة إصبعك.' },
      { term: 'التقليل من الخطر', meaning: 'حتى لو سُرقت كلمة السر، يظل الحساب محمياً لأن المخترق لا يملك هاتفك!' }
    ],
    realExample: 'مثل بوابة تحتاج إلى مفتاح حديدي + بطاقة إلكترونية معاً؛ ضياع المفتاح وحده لا يكفي اللص للدخول.'
  }
]

const currentVisualTech = computed(() => visualTechs[activeTechIdx.value])

const shopping = [
  { tech: 'التشفير', chip: 'bg-sky-100 text-sky-800', text: 'عندما تدخل إلى الموقع، يبدأ اتصال HTTPS، ويمنع التشفير قراءة محتوى الاتصال من قبل أطراف ثالثة.' },
  { tech: 'الشهادة الرقمية', chip: 'bg-orange-100 text-orange-800', text: 'يتحقق المتصفح من الشهادة الرقمية واسم النطاق للتأكد من هوية الخادم الذي يتصل به.' },
  { tech: 'المصادقة الثنائية (2FA)', chip: 'bg-emerald-100 text-emerald-800', text: 'عند تسجيل الدخول، تقلل المصادقة الثنائية احتمال الدخول غير المصرح به باستخدام عاملين مستقلين.' },
  { tech: 'TLS + التوقيع الرقمي', chip: 'bg-rose-100 text-rose-800', text: 'أثناء إرسال تفاصيل الطلب، يحمي TLS سرية البيانات وسلامتها أثناء النقل. ويُستخدم التوقيع الرقمي لإثبات التوقيع على بيانات أو رسائل محددة عندما يتطلب النظام ذلك.' },
]

const step = ref(0)
</script>

<style scoped>
.list-enter-active { transition: all 0.4s ease; }
.list-enter-from { opacity: 0; transform: translateY(10px); }
</style>

