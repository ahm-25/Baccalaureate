<template>
  <div class="fixed inset-0 bg-[#070b1a] overflow-hidden select-none font-arabic" dir="rtl" @mousemove="pokeControls">
    <!-- 16:9 stage, designed at 1280x720 and scaled to fit the screen -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="stage relative shrink-0 overflow-hidden rounded-[28px]"
        :style="{ width: '1280px', height: '720px', transform: `scale(${scale})` }"
        dir="ltr"
        @click="next"
      >
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#0b1230] via-[#0f1a3d] to-[#0a0f24]"></div>
        <div class="grid-bg absolute inset-0 opacity-[0.07]"></div>
        <div class="glow absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-sky-500/20 blur-3xl"
             :class="{ 'bg-emerald-500/25': tlsOn }"></div>
        <div class="glow absolute -bottom-48 -right-40 w-[560px] h-[560px] rounded-full bg-indigo-500/20 blur-3xl"></div>

        <!-- ═════════════ COVER ═════════════ -->
        <Transition name="fade">
          <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
            <div class="cover-lock relative w-36 h-36 rounded-[36px] bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,0.45)] mb-10">
              <Lock class="w-20 h-20 text-white" />
              <span class="ring-pulse absolute inset-0 rounded-[36px] border-4 border-sky-300"></span>
            </div>
            <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الثانية · الأمن السيبراني</p>
            <h1 class="text-white font-black text-7xl leading-tight mb-6">
              رحلة الرسالة على الويب
            </h1>
            <div class="flex items-center gap-5 text-5xl font-black" dir="ltr">
              <span class="text-amber-300">HTTP</span>
              <span class="text-slate-500 text-4xl">→</span>
              <span class="text-emerald-300">HTTPS</span>
            </div>
            <p class="mt-14 text-slate-400 text-xl font-semibold flex items-center gap-2">
              اضغط <span class="kbd">▶</span> للتشغيل أو انقر للتقدّم خطوة بخطوة
            </p>
          </div>
        </Transition>

        <!-- ═════════════ HTTP ACRONYM (step 1) ═════════════ -->
        <Transition name="zoom">
          <div v-if="at('acronym')" class="absolute inset-0 flex flex-col items-center justify-center">
            <div class="flex items-end gap-10">
              <div v-for="(w, i) in acronym" :key="i" class="acro flex flex-col items-center" :style="{ animationDelay: `${i * 0.35}s` }">
                <span class="text-[150px] leading-none font-black" :class="w.color">{{ w.letter }}</span>
                <span class="text-3xl font-bold text-white mt-2">{{ w.en }}</span>
                <span class="text-2xl font-bold text-slate-400 mt-1" dir="rtl">{{ w.ar }}</span>
              </div>
            </div>
            <div class="acro-line mt-14 text-4xl font-black text-white" dir="rtl">
              بروتوكول نقل النص التشعبي
            </div>
          </div>
        </Transition>

        <!-- ═════════════ NETWORK SCENE (steps 2+) ═════════════ -->
        <div class="absolute inset-0 transition-all duration-700"
             :class="[netVisible ? 'opacity-100' : 'opacity-0 pointer-events-none', overlay ? 'scene-dim' : '']">

          <!-- Header -->
          <div class="absolute top-8 inset-x-0 flex flex-col items-center" dir="rtl">
            <Transition name="pop" mode="out-in">
              <!-- handshake header: title + 3-phase tracker -->
              <div v-if="phase" key="hs" class="flex flex-col items-center">
                <div class="flex items-center gap-3 text-5xl font-black text-white">
                  <Handshake class="w-12 h-12 text-amber-300" />
                  مصافحة <span class="text-emerald-300" dir="ltr">TLS</span>
                </div>
                <div class="mt-3 flex items-center gap-2">
                  <template v-for="(ph, i) in phases" :key="i">
                    <span v-if="i" class="w-8 h-[3px] rounded-full transition-colors duration-500"
                          :class="phase > i ? 'bg-emerald-400' : 'bg-slate-600'"></span>
                    <span class="flex items-center gap-2 px-3 py-1 rounded-full text-base font-black border-2 transition-all duration-500"
                          :class="phase === i + 1 ? 'bg-emerald-500 border-emerald-300 text-white scale-110 shadow-lg shadow-emerald-500/40'
                                 : phase > i + 1 ? 'bg-emerald-900/60 border-emerald-600 text-emerald-200'
                                 : 'bg-slate-800/70 border-slate-600 text-slate-400'">
                      <span class="w-6 h-6 rounded-full bg-black/25 flex items-center justify-center text-sm">
                        <Check v-if="phase > i + 1" class="w-4 h-4" /><template v-else>{{ i + 1 }}</template>
                      </span>
                      {{ ph }}
                    </span>
                  </template>
                </div>
              </div>
              <!-- HTTP / HTTP + TLS header -->
              <div v-else key="http" class="flex flex-col items-center">
                <div class="flex items-center gap-4 text-5xl font-black" dir="ltr">
                  <span class="text-amber-300 transition-all duration-700">HTTP</span>
                  <Transition name="pop">
                    <span v-if="tlsOn" class="flex items-center gap-4">
                      <span class="text-slate-500">+</span>
                      <span class="text-emerald-300 flex items-center gap-2"><Lock class="w-10 h-10" />TLS</span>
                    </span>
                  </Transition>
                </div>
                <p class="mt-2 text-xl font-bold transition-colors duration-700" :class="tlsOn ? 'text-emerald-200/80' : 'text-slate-400'">
                  {{ tlsOn ? 'رسائل HTTP داخل اتصال TLS مؤمَّن' : 'بروتوكول لتبادل الرسائل بين العميل والخادم' }}
                </p>
              </div>
            </Transition>
          </div>

          <!-- Session keys (derived on each side) -->
          <div v-for="k in sessionKeys" :key="k.id"
               class="absolute top-[180px] -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-lg shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all duration-700"
               :class="keysOn ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
               :style="{ left: `${k.x}px`, transitionDelay: k.delay }" dir="rtl">
            <KeyRound class="w-6 h-6 key-glint" /> مفتاح الجلسة
          </div>
          <!-- …which never travels over the wire -->
          <div class="absolute top-[268px] left-[625px] -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-dashed border-rose-400 bg-rose-950/70 text-rose-200 text-lg font-black transition-all duration-700 delay-500"
               :class="at('derive') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'" dir="rtl">
            <span class="relative">
              <KeyRound class="w-7 h-7" />
              <X class="absolute -inset-1 w-9 h-9 text-rose-400" stroke-width="3" />
            </span>
            مفتاح الجلسة لا يمر عبر الشبكة
          </div>

          <!-- Certificate check list (browser side) -->
          <div class="absolute top-[400px] left-[625px] -translate-x-1/2 w-[520px] rounded-3xl bg-slate-900/90 border-2 border-sky-400/60 p-5 shadow-2xl transition-all duration-700"
               :class="at('cert-check') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'" dir="rtl">
            <div class="flex items-center gap-2 text-sky-300 text-xl font-black mb-3">
              <BadgeCheck class="w-7 h-7" /> المتصفح يفحص الشهادة…
            </div>
            <div v-for="(c, i) in certChecks" :key="i"
                 class="check-row flex items-center gap-3 py-1.5 text-[22px] font-bold text-white"
                 :class="{ 'check-on': at('cert-check') }" :style="{ animationDelay: `${0.6 + i * 0.9}s` }">
              <CircleCheck class="w-7 h-7 text-emerald-400 shrink-0" />
              <span>{{ c }}</span>
            </div>
          </div>

          <!-- Connection line -->
          <div class="absolute top-[378px] left-[300px] w-[650px] h-[4px] rounded-full origin-right transition-transform duration-1000"
               :class="from('nodes') ? 'scale-x-100' : 'scale-x-0'">
            <div class="wire w-full h-full rounded-full" :class="tlsOn ? 'wire-secure' : ''"></div>
          </div>

          <!-- TLS tunnel -->
          <div class="tunnel absolute top-[330px] left-[290px] w-[670px] h-[100px] rounded-full transition-all duration-[1200ms] ease-out"
               :class="tlsOn ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'">
            <div class="tunnel-flow absolute inset-0 rounded-full"></div>
            <div class="absolute -top-11 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-emerald-500 text-white text-lg font-black px-4 py-1 rounded-full shadow-lg shadow-emerald-500/40 whitespace-nowrap" dir="rtl">
              <Lock class="w-5 h-5" /> اتصال TLS مؤمَّن
            </div>
          </div>

          <!-- Server (left) -->
          <div class="absolute top-[250px] left-[60px] w-[260px] flex flex-col items-center transition-all duration-700"
               :class="from('nodes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <div class="relative w-[200px] h-[200px] rounded-3xl bg-slate-800/80 border-2 border-indigo-400/50 flex flex-col items-center justify-center gap-3 shadow-[0_0_40px_rgba(129,140,248,0.25)]"
                 :class="{ 'server-hit': serverBusy }">
              <Server class="w-20 h-20 text-indigo-300" />
              <div class="flex gap-2">
                <span class="led" :class="serverBusy ? 'led-on' : ''"></span>
                <span class="led" :class="serverBusy ? 'led-on delay' : ''"></span>
                <span class="led led-green"></span>
              </div>
              <Settings class="absolute -top-5 -left-5 w-12 h-12 text-amber-300 transition-opacity duration-300"
                        :class="serverBusy ? 'opacity-100 spin' : 'opacity-0'" />
            </div>
            <span class="mt-4 text-2xl font-black text-white" dir="rtl">الخادم</span>
            <span class="text-lg font-bold text-indigo-300">Server</span>
          </div>

          <!-- Client (right) -->
          <div class="absolute top-[250px] left-[960px] w-[260px] flex flex-col items-center transition-all duration-700 delay-200"
               :class="from('nodes') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
            <div class="w-[260px] h-[200px] rounded-2xl bg-slate-100 border-4 border-slate-600 overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.25)] flex flex-col">
              <!-- address bar -->
              <div class="h-9 bg-slate-200 flex items-center gap-1.5 px-2 border-b border-slate-300">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <div class="flex-1 h-6 ml-1 rounded-md bg-white flex items-center gap-1 px-2 text-[13px] font-bold overflow-hidden transition-colors duration-500"
                     :class="tlsOn ? 'text-emerald-700 ring-2 ring-emerald-400' : phase ? 'text-slate-500 ring-2 ring-amber-300' : 'text-slate-600'">
                  <Lock v-if="tlsOn" class="w-3.5 h-3.5 shrink-0" />
                  <LoaderCircle v-else-if="phase" class="w-3.5 h-3.5 shrink-0 text-amber-500 spin" />
                  <span v-else class="text-rose-500 shrink-0">⚠</span>
                  <span class="truncate">{{ tlsOn || phase ? 'https://' : 'http://' }}school.edu</span>
                </div>
              </div>
              <!-- page -->
              <div class="flex-1 relative">
                <Transition name="fade">
                  <div v-if="pageLoaded" class="absolute inset-0 p-3 flex flex-col gap-2" dir="rtl">
                    <div class="h-6 w-2/3 rounded bg-sky-500"></div>
                    <div class="h-3 w-full rounded bg-slate-300"></div>
                    <div class="h-3 w-5/6 rounded bg-slate-300"></div>
                    <div class="flex gap-2 mt-1">
                      <div class="h-14 flex-1 rounded-lg bg-indigo-200"></div>
                      <div class="h-14 flex-1 rounded-lg bg-amber-200"></div>
                    </div>
                  </div>
                  <div v-else-if="phase" class="absolute inset-0 flex flex-col items-center justify-center gap-2" dir="rtl">
                    <Handshake class="w-14 h-14 text-amber-500 shake" />
                    <span class="text-sm font-black text-slate-500">جارٍ إنشاء اتصال آمن…</span>
                  </div>
                  <div v-else class="absolute inset-0 flex items-center justify-center">
                    <Globe class="w-14 h-14 text-slate-300" :class="{ spin: at('req') || at('busy') }" />
                  </div>
                </Transition>
              </div>
            </div>
            <span class="mt-4 text-2xl font-black text-white" dir="rtl">العميل (المتصفح)</span>
            <span class="text-lg font-bold text-sky-300">Client</span>
          </div>

          <!-- Packets -->
          <div v-for="p in packets" :key="p.id"
               class="packet absolute"
               :style="{ left: `${p.x}px`, top: `${p.top ?? (p.secure ? 347 : 268)}px`, opacity: p.visible ? 1 : 0 }">
            <div class="flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl border-2 whitespace-nowrap"
                 :class="packetClass(p)">
              <component :is="packetIcon(p)" class="w-6 h-6 shrink-0" />
              <div class="flex flex-col leading-tight">
                <span class="text-[13px] font-black opacity-70" dir="rtl">{{ p.label }}</span>
                <span class="text-lg font-black" :class="isArabic(p.text) ? '' : 'font-mono'" :dir="isArabic(p.text) ? 'rtl' : 'ltr'">{{ p.text }}</span>
              </div>
            </div>
          </div>

          <!-- Eavesdropper -->
          <div class="absolute top-[455px] left-[640px] -translate-x-1/2 flex items-center gap-5 transition-all duration-700"
               :class="hackerOn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full flex items-center justify-center border-2 transition-colors duration-500"
                   :class="hackerFoiled ? 'bg-slate-800 border-slate-500' : 'bg-rose-950 border-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.5)]'">
                <VenetianMask class="w-11 h-11" :class="hackerFoiled ? 'text-slate-400' : 'text-rose-400'" />
              </div>
              <span class="mt-1 text-lg font-black" :class="hackerFoiled ? 'text-slate-400' : 'text-rose-300'" dir="rtl">متطفل</span>
            </div>
            <Transition name="pop" mode="out-in">
              <div v-if="hackerBubble" :key="hackerBubble.key"
                   class="relative rounded-2xl px-5 py-3 border-2 min-w-[300px]"
                   :class="hackerBubble.ok ? 'bg-rose-500/15 border-rose-400' : 'bg-slate-800/90 border-slate-500'" dir="rtl">
                <div class="flex items-center gap-2 text-base font-black mb-1" :class="hackerBubble.ok ? 'text-rose-300' : 'text-slate-300'">
                  <Eye class="w-5 h-5" /> {{ hackerBubble.title }}
                </div>
                <div v-if="hackerBubble.plain" class="text-xl font-black text-slate-300" dir="rtl">
                  {{ hackerBubble.text }}
                </div>
                <div v-else class="text-2xl font-black font-mono" :class="hackerBubble.ok ? 'text-white' : 'text-slate-400 scramble'" dir="ltr">
                  {{ hackerBubble.text }}
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- ═════════════ COMPONENT-DRIVEN CHAPTERS ═════════════ -->
        <Transition name="fade">
          <SlidesUnit02Keys v-if="inRange('keys-sym', 'keys-compare')" :f="step - S['keys-sym']!" />
        </Transition>
        <Transition name="fade">
          <SlidesUnit02TwoFactor v-if="inRange('2fa-stolen', '2fa-evaluate')" :f="step - S['2fa-stolen']!" />
        </Transition>
        <Transition name="fade">
          <SlidesUnit02Signature v-if="inRange('sig-problem', 'sig-def')" :f="step - S['sig-problem']!" />
        </Transition>

        <!-- ═════════════ OVERLAY CARDS ═════════════ -->
        <Transition name="zoom">
          <!-- Lesson question -->
          <div v-if="overlay === 'question'" key="question" class="absolute inset-0 flex flex-col items-center justify-center pb-24 px-20" dir="rtl">
            <div class="rise w-24 h-24 rounded-[28px] bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl font-black text-white shadow-[0_0_60px_rgba(251,191,36,.45)] mb-6">؟</div>
            <div class="rise text-2xl font-black text-amber-300 mb-4" style="animation-delay: .3s">سؤال الدرس</div>
            <p class="rise max-w-[1050px] text-center text-[46px] leading-[1.6] font-black text-white" style="animation-delay: .6s">
              كيف تعمل تقنيات <span class="hl-green">التشفير</span> و<span class="hl-amber">المصادقة</span> معًا
              للحفاظ على أمان الاتصال والخدمات عبر الإنترنت؟
            </p>
            <div class="mt-10 flex items-center gap-4">
              <div v-for="(t, i) in questionTopics" :key="t.name"
                   class="rise flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/80 border border-white/10 text-xl font-black text-white"
                   :style="{ animationDelay: `${1.4 + i * 0.35}s` }">
                <span class="w-9 h-9 rounded-xl flex items-center justify-center" :class="t.cls"><component :is="t.icon" class="w-5 h-5" /></span>
                {{ t.name }}
              </div>
            </div>
          </div>

          <!-- What the padlock does (and doesn't) mean -->
          <div v-else-if="overlay === 'lock-caveat'" key="lock-caveat" class="absolute inset-0 flex flex-col items-center justify-center pb-24" dir="rtl">
            <div class="rise flex items-center gap-4 mb-8">
              <div class="flex items-center gap-2 h-14 px-5 rounded-2xl bg-white text-2xl font-black text-emerald-700 ring-4 ring-emerald-400/60" dir="ltr">
                <Lock class="w-7 h-7" /> https://
              </div>
              <span class="text-4xl font-black text-white">ماذا يعني القفل؟</span>
            </div>
            <div class="flex items-stretch gap-8">
              <div class="rise w-[500px] rounded-3xl border-2 border-emerald-400 bg-emerald-500/10 p-7" style="animation-delay: .6s">
                <div class="flex items-center gap-3 text-3xl font-black text-emerald-300 mb-5"><CircleCheck class="w-9 h-9" /> يعني</div>
                <ul class="space-y-4 text-2xl font-bold text-white">
                  <li class="flex gap-3"><Lock class="w-7 h-7 text-emerald-300 shrink-0 mt-1" /> الاتصال مشفّر ومحمي أثناء النقل</li>
                  <li class="flex gap-3"><BadgeCheck class="w-7 h-7 text-emerald-300 shrink-0 mt-1" /> المتصفح تحقق من شهادة الموقع</li>
                </ul>
              </div>
              <div class="rise w-[500px] rounded-3xl border-2 border-rose-400 bg-rose-500/10 p-7" style="animation-delay: 1.4s">
                <div class="flex items-center gap-3 text-3xl font-black text-rose-300 mb-5"><CircleX class="w-9 h-9" /> لا يعني</div>
                <ul class="space-y-4 text-2xl font-bold text-white">
                  <li class="flex gap-3"><TriangleAlert class="w-7 h-7 text-rose-300 shrink-0 mt-1" /> أن محتوى الموقع موثوق</li>
                  <li class="flex gap-3"><ShieldAlert class="w-7 h-7 text-rose-300 shrink-0 mt-1" /> أن الحماية مطلقة</li>
                </ul>
              </div>
            </div>
            <div class="rise mt-7 px-6 py-3 rounded-2xl bg-amber-400/15 border-2 border-amber-400/60 text-2xl font-black text-amber-100" style="animation-delay: 2.3s">
              ⚠️ موقع احتيالي يمكنه أيضًا الحصول على شهادة لاسمه هو ويظهر بجواره القفل!
            </div>
          </div>

          <!-- HTTP definition -->
          <div v-else-if="overlay === 'http-def'" key="http-def" class="absolute inset-0 flex items-center justify-center pb-24" dir="rtl">
            <div class="card w-[980px] border-amber-400/60">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-6xl font-black text-amber-300" dir="ltr">HTTP</span>
                <span class="text-3xl font-bold text-slate-300">بروتوكول نقل النص التشعبي</span>
              </div>
              <p class="text-[40px] leading-[1.7] font-black text-white">
                <span class="hl-amber">بروتوكول</span> يُستخدم
                <span class="hl-amber">لتبادل الرسائل</span>
                بين <span class="text-sky-300">عميل</span> و<span class="text-indigo-300">خادم</span> على الويب.
              </p>
              <div class="mt-8 flex items-center justify-center gap-6 text-2xl font-black">
                <span class="chip bg-sky-500/20 text-sky-200 border-sky-400">العميل</span>
                <span class="flex flex-col items-center text-lg text-amber-200 leading-tight">
                  <span>طلب Request ←</span>
                  <span>→ استجابة Response</span>
                </span>
                <span class="chip bg-indigo-500/20 text-indigo-200 border-indigo-400">الخادم</span>
              </div>
            </div>
          </div>

          <!-- Equation -->
          <div v-else-if="overlay === 'equation'" key="equation" class="absolute inset-0 flex flex-col items-center justify-center pb-24">
            <div class="flex items-center gap-8" dir="ltr">
              <div class="eq-box border-amber-400 text-amber-300" style="animation-delay: .1s">HTTP</div>
              <div class="eq-op" style="animation-delay: .5s">+</div>
              <div class="eq-box border-emerald-400 text-emerald-300 flex items-center gap-3" style="animation-delay: .9s"><Lock class="w-14 h-14" />TLS</div>
              <div class="eq-op" style="animation-delay: 1.3s">=</div>
              <div class="eq-box eq-final border-emerald-300 text-white" style="animation-delay: 1.7s">
                HTTP<span class="text-emerald-300 s-letter">S</span>
              </div>
            </div>
            <div class="eq-note mt-12 flex items-center gap-4 text-3xl font-black text-white" dir="rtl">
              <span class="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-4xl" dir="ltr">S</span>
              <span>= <span dir="ltr">Secure</span> أي <span class="text-emerald-300">آمن</span></span>
            </div>
          </div>

          <!-- Layers + definition -->
          <div v-else-if="overlay === 'https-def'" key="https-def" class="absolute inset-0 flex items-center justify-center gap-14 pb-24 px-16" dir="rtl">
            <!-- nested diagram -->
            <div class="layer-tls relative w-[400px] h-[340px] rounded-[32px] border-4 border-emerald-400 bg-emerald-500/10 flex flex-col items-center justify-end pb-6 shadow-[0_0_60px_rgba(52,211,153,0.3)]">
              <div class="absolute top-4 inset-x-0 flex items-center justify-center gap-2 text-emerald-300 text-3xl font-black" dir="ltr">
                <Lock class="w-8 h-8" /> TLS
              </div>
              <div class="layer-http w-[300px] h-[170px] mb-4 rounded-3xl border-4 border-amber-400 bg-amber-400/15 flex flex-col items-center justify-center">
                <span class="text-5xl font-black text-amber-300" dir="ltr">HTTP</span>
                <span class="text-xl font-bold text-amber-100 mt-1">طلب / استجابة</span>
              </div>
              <span class="text-lg font-bold text-emerald-200">الغلاف المؤمَّن (التشفير)</span>
            </div>
            <!-- definition -->
            <div class="card w-[620px] border-emerald-400/60 def-card">
              <div class="text-6xl font-black text-emerald-300 mb-6" dir="ltr">HTTPS</div>
              <p class="text-[38px] leading-[1.75] font-black text-white">
                بروتوكول <span class="hl-amber">HTTP</span>
                منقول عبر
                <span class="hl-green">اتصال TLS مؤمَّن</span>.
              </p>
              <div class="mt-6 flex flex-wrap gap-3 text-xl font-bold">
                <span class="chip bg-emerald-500/15 text-emerald-200 border-emerald-500/60">🔒 سرية البيانات</span>
                <span class="chip bg-emerald-500/15 text-emerald-200 border-emerald-500/60">🛡️ سلامتها أثناء النقل</span>
              </div>
            </div>
          </div>

          <!-- Handshake intro -->
          <div v-else-if="overlay === 'hs-intro'" key="hs-intro" class="absolute inset-0 flex flex-col items-center justify-center pb-28" dir="rtl">
            <div class="rise flex items-center gap-4 text-6xl font-black text-white mb-4">
              <Handshake class="w-16 h-16 text-amber-300 shake" />
              مصافحة <span class="text-emerald-300" dir="ltr">TLS</span>
            </div>
            <p class="rise text-3xl font-bold text-slate-300 mb-12" style="animation-delay: .4s">
              تسمى خطوات إنشاء الاتصال الآمن <span class="hl-amber">مصافحة TLS</span>
            </p>
            <div class="flex items-stretch gap-6">
              <div v-for="(ph, i) in phaseCards" :key="i"
                   class="rise w-[300px] rounded-3xl border-2 p-6 bg-slate-900/85 flex flex-col items-center text-center"
                   :class="ph.border" :style="{ animationDelay: `${0.9 + i * 0.5}s` }">
                <span class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-black text-white mb-3" :class="ph.bg">{{ i + 1 }}</span>
                <component :is="ph.icon" class="w-12 h-12 mb-3" :class="ph.text" />
                <span class="text-2xl font-black text-white leading-snug">{{ ph.title }}</span>
                <span class="mt-2 text-lg font-bold text-slate-400">{{ ph.sub }}</span>
              </div>
            </div>
          </div>

          <!-- Digital certificate close-up -->
          <div v-else-if="overlay === 'cert'" key="cert" class="absolute inset-0 flex items-center justify-center gap-12 pb-24 px-16" dir="rtl">
            <div class="cert-doc relative w-[470px] rounded-[26px] p-[6px]">
              <div class="rounded-[22px] bg-[#fffbeb] border-2 border-amber-300 px-8 pt-7 pb-8">
                <div class="flex items-center justify-center gap-3 text-amber-800 text-3xl font-black mb-1">
                  <Award class="w-9 h-9" /> شهادة رقمية
                </div>
                <div class="text-center text-sm font-bold text-amber-700/70 mb-5" dir="ltr">Digital Certificate</div>
                <div v-for="(f, i) in certFields" :key="i"
                     class="cert-field flex items-center justify-between gap-4 py-2.5 border-b border-amber-200 last:border-0"
                     :style="{ animationDelay: `${0.5 + i * 0.45}s` }">
                  <span class="text-lg font-bold text-amber-800/80">{{ f.k }}</span>
                  <span class="flex items-center gap-2 text-xl font-black text-slate-800" :dir="f.ltr ? 'ltr' : 'rtl'">
                    <component :is="f.icon" v-if="f.icon" class="w-5 h-5 text-amber-600" />{{ f.v }}
                  </span>
                </div>
              </div>
              <!-- seal -->
              <div class="seal absolute -top-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-4 border-white flex flex-col items-center justify-center text-white shadow-xl">
                <BadgeCheck class="w-10 h-10" />
                <span class="text-xs font-black mt-0.5">ختم جهة موثوقة</span>
              </div>
            </div>
            <div class="card w-[560px] border-amber-400/60 def-card">
              <div class="text-4xl font-black text-amber-300 mb-5">الشهادة الرقمية</div>
              <p class="text-[30px] leading-[1.75] font-black text-white">
                تساعد المتصفح على <span class="hl-amber">التحقق من هوية الخادم</span>
                و<span class="hl-green">ارتباط الشهادة باسم النطاق</span>.
              </p>
              <p class="mt-5 text-2xl font-bold text-slate-300 flex items-center gap-3">
                <KeyRound class="w-8 h-8 text-amber-300 shrink-0" />
                وتحمل المفتاح العام للخادم.
              </p>
            </div>
          </div>

          <!-- Impersonated server -->
          <div v-else-if="overlay === 'fake'" key="fake" class="absolute inset-0 flex items-center justify-center gap-10 pb-24" dir="rtl">
            <div v-for="(b, i) in fakeCompare" :key="i"
                 class="rise w-[500px] rounded-3xl overflow-hidden border-4 shadow-2xl bg-slate-900"
                 :class="b.ok ? 'border-emerald-400' : 'border-rose-500 shake-once'"
                 :style="{ animationDelay: `${0.2 + i * 0.8}s` }">
              <div class="px-5 py-3 text-xl font-black text-white flex items-center gap-2" :class="b.ok ? 'bg-emerald-600' : 'bg-rose-600'">
                <component :is="b.ok ? Server : VenetianMask" class="w-6 h-6" /> {{ b.who }}
              </div>
              <div class="h-10 bg-slate-200 flex items-center px-3 gap-2" dir="ltr">
                <div class="flex-1 h-7 rounded-md bg-white flex items-center gap-1.5 px-2 text-base font-bold"
                     :class="b.ok ? 'text-emerald-700' : 'text-rose-600'">
                  <Lock v-if="b.ok" class="w-4 h-4" /><ShieldAlert v-else class="w-4 h-4" />
                  https://school.edu
                </div>
              </div>
              <div class="p-6 flex flex-col items-center text-center gap-3" :class="b.ok ? 'bg-emerald-950/40' : 'bg-rose-950/50'">
                <component :is="b.ok ? ShieldCheck : ShieldX" class="w-20 h-20" :class="b.ok ? 'text-emerald-400' : 'text-rose-400'" />
                <div class="text-[28px] font-black" :class="b.ok ? 'text-emerald-300' : 'text-rose-300'">{{ b.title }}</div>
                <div class="text-xl font-bold text-slate-300">{{ b.reason }}</div>
                <div class="mt-1 px-4 py-1.5 rounded-full text-lg font-black"
                     :class="b.ok ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'">{{ b.result }}</div>
              </div>
            </div>
          </div>

          <!-- Handshake summary -->
          <div v-else-if="overlay === 'hs-summary'" key="hs-summary" class="absolute inset-0 flex flex-col items-center justify-center pb-24" dir="rtl">
            <div class="rise text-5xl font-black text-white mb-8 flex items-center gap-3">
              <Handshake class="w-12 h-12 text-amber-300" /> ملخص مصافحة <span class="text-emerald-300" dir="ltr">TLS</span>
            </div>
            <div class="w-[1040px] rounded-3xl overflow-hidden border-2 border-white/10 bg-slate-900/85">
              <div class="grid grid-cols-[70px_1fr_1fr_1.1fr] bg-white/5 text-xl font-black text-slate-300 px-4 py-3">
                <span>#</span><span>المرحلة</span><span>ماذا يحدث؟</span><span>التشفير المستخدم</span>
              </div>
              <div v-for="(r, i) in summaryRows" :key="i"
                   class="rise grid grid-cols-[70px_1fr_1fr_1.1fr] items-center px-4 py-4 border-t border-white/10 text-[22px] font-bold"
                   :style="{ animationDelay: `${0.5 + i * 0.6}s` }">
                <span class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black" :class="r.bg">{{ i + 1 }}</span>
                <span class="text-white font-black">{{ r.phase }}</span>
                <span class="text-slate-300">{{ r.what }}</span>
                <span class="font-black" :class="r.color">{{ r.enc }}</span>
              </div>
            </div>
            <div class="rise mt-8 flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-400/15 border-2 border-amber-400/60 text-2xl font-black text-amber-100" style="animation-delay: 2.5s">
              <Zap class="w-8 h-8 text-amber-300" />
              تبادل كل البيانات بالمفتاح العام بطيء، لذا يُستخدم التشفير المتماثل لتبادل البيانات.
            </div>
          </div>

          <!-- Final: how the four techniques work together -->
          <div v-else-if="overlay === 'final'" key="final" class="absolute inset-0 flex flex-col items-center justify-center pb-24" dir="rtl">
            <div class="rise text-5xl font-black text-white mb-3">كيف تتعاون تقنيات الأمان معًا؟</div>
            <p class="rise text-2xl font-bold text-slate-400 mb-10" style="animation-delay: .3s">كل تقنية تحمي من خطر مختلف</p>
            <div class="grid grid-cols-2 gap-6">
              <div v-for="(t, i) in finalCards" :key="t.name"
                   class="rise w-[520px] flex items-center gap-5 rounded-3xl border-2 bg-slate-900/85 px-6 py-5"
                   :class="t.border" :style="{ animationDelay: `${0.7 + i * 0.5}s` }">
                <div class="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center" :class="t.bg">
                  <component :is="t.icon" class="w-11 h-11 text-white" />
                </div>
                <div class="flex flex-col">
                  <span class="text-3xl font-black" :class="t.text">{{ t.name }}</span>
                  <span class="text-2xl font-bold text-white mt-1">{{ t.does }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Answer to the lesson question -->
          <div v-else-if="overlay === 'answer'" key="answer" class="absolute inset-0 flex flex-col items-center justify-center pb-24" dir="rtl">
            <div class="rise flex items-center gap-3 text-2xl font-black text-amber-300 mb-6">
              <span class="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl">؟</span>
              إجابة سؤال الدرس
            </div>
            <div class="flex items-center gap-6">
              <template v-for="(g, i) in answerGroups" :key="g.name">
                <span v-if="i" class="rise text-6xl font-black text-slate-400" style="animation-delay: 1.1s">+</span>
                <div class="rise w-[340px] rounded-3xl border-2 bg-slate-900/85 p-6 flex flex-col items-center text-center"
                     :class="g.border" :style="{ animationDelay: `${0.4 + i * 1.2}s` }">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-2" :class="g.bg"><component :is="g.icon" class="w-9 h-9 text-white" /></div>
                  <span class="text-4xl font-black" :class="g.text">{{ g.name }}</span>
                  <span class="text-lg font-bold text-slate-300 mt-1 mb-4">{{ g.sub }}</span>
                  <div class="flex flex-wrap justify-center gap-2">
                    <span v-for="it in g.items" :key="it" class="px-3 py-1 rounded-full bg-white/10 text-lg font-bold text-white">{{ it }}</span>
                  </div>
                </div>
              </template>
              <span class="rise text-6xl font-black text-slate-400" style="animation-delay: 2.2s">=</span>
              <div class="rise w-[260px] h-[260px] rounded-full border-4 border-sky-300 bg-sky-500/15 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(56,189,248,.35)]" style="animation-delay: 2.5s">
                <ShieldCheck class="w-14 h-14 text-sky-200 mb-2" />
                <span class="text-3xl font-black text-white leading-snug">اتصال وخدمات<br />آمنة</span>
              </div>
            </div>
            <div class="rise mt-8 max-w-[1040px] text-center text-[28px] leading-relaxed font-black text-white" style="animation-delay: 3.2s">
              الأمان يعتمد على <span class="hl-amber">الجمع</span> بين التشفير والمصادقة، وليس على تقنية واحدة فقط.
            </div>
          </div>
        </Transition>

        <!-- ═════════════ SUBTITLE BAR ═════════════ -->
        <div class="absolute bottom-7 inset-x-0 flex justify-center pointer-events-none" dir="rtl">
          <Transition name="sub" mode="out-in">
            <div v-if="current.caption" :key="step"
                 class="max-w-[1180px] px-8 py-3.5 rounded-2xl bg-black/55 backdrop-blur border border-white/10 text-[25px] leading-snug font-bold text-white text-center">
              {{ current.caption }}
            </div>
          </Transition>
        </div>

        <!-- Autoplay progress (thin line, top) -->
        <div class="absolute top-0 inset-x-0 h-1.5 bg-white/5">
          <div class="h-full bg-gradient-to-l from-sky-400 to-emerald-400"
               :style="{ width: `${((step + stepProgress) / (steps.length - 1)) * 100}%`, transition: playing ? 'width 0.1s linear' : 'width 0.5s ease' }"></div>
        </div>
      </div>
    </div>

    <!-- ═════════════ CONTROLS ═════════════ -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/85 backdrop-blur border border-white/10 shadow-2xl transition-opacity duration-500"
         :class="controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'"
         dir="rtl">
      <NuxtLink to="/unit-02" class="ctrl" title="رجوع للوحدة"><House class="w-5 h-5" /></NuxtLink>
      <span class="w-px h-6 bg-white/15"></span>
      <button class="ctrl" title="السابق (→)" @click="prev"><ChevronRight class="w-6 h-6" /></button>
      <button class="ctrl ctrl-main" :title="playing ? 'إيقاف مؤقت (P)' : 'تشغيل (P)'" @click="togglePlay">
        <component :is="playing ? Pause : Play" class="w-6 h-6" />
      </button>
      <button class="ctrl" title="التالي (←)" @click="next"><ChevronLeft class="w-6 h-6" /></button>
      <button class="ctrl" title="من البداية" @click="restart"><RotateCcw class="w-5 h-5" /></button>
      <span class="w-px h-6 bg-white/15"></span>
      <!-- chapters -->
      <div class="flex items-center gap-1">
        <button v-for="c in chapters" :key="c.name"
                class="px-3 py-1.5 rounded-xl text-sm font-black transition-colors whitespace-nowrap"
                :class="chapterOf(step) === c.name ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-white/10'"
                @click="goTo(c.from)">{{ c.name }}</button>
      </div>
      <span class="text-slate-400 text-sm font-bold tabular-nums px-2 whitespace-nowrap" dir="ltr">{{ step + 1 }} / {{ steps.length }}</span>
      <span class="w-px h-6 bg-white/15"></span>
      <button class="ctrl" title="ملء الشاشة (F)" @click="toggleFullscreen">
        <component :is="isFullscreen ? Minimize : Maximize" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import SlidesUnit02Keys from '~/components/slides/unit02/Keys.vue'
import SlidesUnit02TwoFactor from '~/components/slides/unit02/TwoFactor.vue'
import SlidesUnit02Signature from '~/components/slides/unit02/Signature.vue'
import {
  Lock, Mail, Server, Globe, Settings, Eye, VenetianMask,
  Handshake, BadgeCheck, Award, KeyRound, ShieldAlert, ShieldCheck, ShieldX,
  LoaderCircle, CircleCheck, CircleX, TriangleAlert, Check, X, Zap, Repeat, Signature,
  Play, Pause, ChevronLeft, ChevronRight, RotateCcw, Maximize, Minimize, House,
} from 'lucide-vue-next'

definePageMeta({ layout: false })
const route = useRoute()
useHead({ title: 'سلايدر الوحدة الثانية: تقنيات التشفير والمصادقة' })

/* ───────── Timeline ─────────
   Each step is one "frame" of the video, addressed by its id. The scene is a pure
   function of the current frame, so moving forwards or backwards always animates
   correctly, and frames can be inserted anywhere without renumbering anything. */
interface Step { id: string; caption: string; dur?: number }

const steps: Step[] = [
  { id: 'cover', caption: '', dur: 3500 },
  { id: 'question', caption: 'سؤال الدرس: كيف تعمل تقنيات التشفير والمصادقة معًا للحفاظ على أمان الاتصال والخدمات عبر الإنترنت؟', dur: 7500 },
  // ── HTTP ──
  { id: 'acronym', caption: 'HTTP اختصار لـ HyperText Transfer Protocol أي «بروتوكول نقل النص التشعبي».', dur: 6000 },
  { id: 'nodes', caption: 'على الويب طرفان يتواصلان: العميل (المتصفح) والخادم الذي يستضيف الموقع.', dur: 5000 },
  { id: 'req', caption: 'يرسل العميل رسالة «طلب» Request إلى الخادم: أريد الصفحة الرئيسية.', dur: 5000 },
  { id: 'busy', caption: 'يستقبل الخادم الطلب ويجهّز الرد المناسب.', dur: 3500 },
  { id: 'res', caption: 'يرد الخادم برسالة «استجابة» Response تحمل الصفحة، فيعرضها المتصفح.', dur: 5000 },
  { id: 'http-def', caption: 'إذن: HTTP بروتوكول يُستخدم لتبادل الرسائل بين عميل وخادم على الويب.', dur: 7000 },
  { id: 'sniff', caption: 'لكن… رسائل HTTP تنتقل كنص مكشوف غير مشفّر، فأي متطفل في الطريق يستطيع قراءتها!', dur: 6500 },
  // ── HTTPS ──
  { id: 'tunnel', caption: 'الحل: ننشئ أولًا اتصال TLS آمنًا بين العميل والخادم، كنفق مشفّر يحمي كل ما يمر بداخله.', dur: 6000 },
  { id: 'tls-req', caption: 'نفس رسالة HTTP تمر الآن داخل اتصال TLS مشفّرة، فلا يرى المتطفل إلا رموزًا بلا معنى.', dur: 6000 },
  { id: 'tls-res', caption: 'والاستجابة أيضًا تعود مشفّرة، ولا يفك تشفيرها إلا المتصفح.', dur: 5000 },
  { id: 'equation', caption: 'عندما نضيف TLS إلى HTTP نحصل على HTTPS — وحرف S يعني Secure أي آمن.', dur: 6500 },
  { id: 'https-def', caption: 'HTTPS: بروتوكول HTTP منقول عبر اتصال TLS مؤمَّن.', dur: 8000 },
  { id: 'lock-caveat', caption: 'القفل 🔒 يعني أن الاتصال محمي أثناء النقل، لكنه لا يعني أن محتوى الموقع موثوق أو أن الحماية مطلقة.', dur: 9000 },
  // ── Encryption keys (SlidesUnit02Keys) ──
  { id: 'keys-sym', caption: 'التشفير المتماثل: مفتاح واحد مشترك يُستخدم للتشفير ولفك التشفير، وهو سريع وكفء مع كميات البيانات الكبيرة.', dur: 8500 },
  { id: 'keys-sym-problem', caption: 'لكن كيف يصل المفتاح المشترك إلى الطرف الآخر بأمان؟ لو أُرسل عبر الشبكة كما هو، قد يأخذ المتطفل نسخة منه ويقرأ كل شيء!', dur: 8500 },
  { id: 'keys-pub', caption: 'التشفير بالمفتاح العام يستخدم زوجًا من المفاتيح المرتبطة: مفتاح عام يمكن مشاركته، ومفتاح خاص يبقى سريًا ولا يفتح إلا به.', dur: 10000 },
  { id: 'keys-compare', caption: 'تبادل كل البيانات بالمفتاح العام سيكون بطيئًا؛ لذا يجمع TLS بين الاثنين: المفتاح العام في المصافحة، والمتماثل لتبادل البيانات.', dur: 9500 },
  // ── TLS handshake ──
  { id: 'hs-intro', caption: 'لكن كيف يُبنى اتصال TLS؟ تسمى خطوات إنشاء الاتصال الآمن «مصافحة TLS»، وتمر بثلاث مراحل.', dur: 8000 },
  { id: 'hello', caption: 'عند بدء اتصال HTTPS يبدأ المتصفح المصافحة مع الخادم طالبًا إنشاء اتصال آمن.', dur: 5000 },
  { id: 'cert-send', caption: 'المرحلة الأولى: يرسل الخادم شهادته الرقمية إلى المتصفح.', dur: 5000 },
  { id: 'cert', caption: 'الشهادة الرقمية تساعد المتصفح على التحقق من هوية الخادم وارتباط الشهادة باسم النطاق.', dur: 8000 },
  { id: 'cert-check', caption: 'يتحقق المتصفح من صلاحية الشهادة، ومن سلسلة الثقة، ومن أنها تخص اسم الموقع نفسه.', dur: 7000 },
  { id: 'fake', caption: 'ولو انتحل محتال شخصية الخادم؟ لن يملك شهادة موثوقة لاسم الموقع، فيُظهر المتصفح تحذيرًا ويوقف الاتصال.', dur: 8000 },
  { id: 'kex', caption: 'المرحلة الثانية: يتبادل الطرفان معاملات تبادل المفاتيح باستخدام آليات المفتاح العام.', dur: 6500 },
  { id: 'derive', caption: 'ومنها يشتق كل طرف مفاتيح الجلسة لديه، فلا يمر مفتاح الجلسة نفسه عبر الشبكة.', dur: 7000 },
  { id: 'hs-done', caption: 'المرحلة الثالثة: اكتملت المصافحة! تُحمى البيانات الآن بمفاتيح الجلسة بالتشفير المتماثل.', dur: 6500 },
  { id: 'hs-summary', caption: 'في المصافحة: آليات المفتاح العام للمصادقة والاتفاق على المفاتيح — وفي تبادل البيانات: التشفير المتماثل السريع.', dur: 10000 },
  // ── Two-factor authentication (SlidesUnit02TwoFactor) ──
  { id: '2fa-stolen', caption: 'الاتصال صار آمنًا… لكن ماذا لو سُرقت كلمة المرور نفسها؟ بكلمة المرور وحدها يدخل المحتال إلى الحساب!', dur: 7000 },
  { id: '2fa-cats', caption: 'عوامل إثبات الهوية ثلاث فئات: شيء تعرفه (المعرفة)، وشيء تملكه (الحيازة)، وشيء من صفاتك (السمات الحيوية).', dur: 8000 },
  { id: '2fa-def', caption: 'المصادقة الثنائية (2FA) تستخدم عاملين مستقلين من فئتين مختلفتين لإثبات الهوية، مثل المعرفة والحيازة.', dur: 8000 },
  { id: '2fa-user', caption: 'صاحب الحساب يكتب كلمة المرور، ثم يُدخل الرمز الذي وصل إلى هاتفه، فيدخل بنجاح.', dur: 8000 },
  { id: '2fa-hacker', caption: 'المحتال يعرف كلمة المرور لكنه لا يملك الهاتف، فيُرفض دخوله. هكذا تقلل 2FA احتمال الدخول غير المصرح به.', dur: 8500 },
  { id: '2fa-quiz', caption: 'انتبه: كلمة المرور والسؤال السري كلاهما من فئة المعرفة، فلا يمثلان مصادقة ثنائية.', dur: 8000 },
  { id: '2fa-services', caption: 'تُستخدم المصادقة الثنائية في خدمات كثيرة، ودائمًا بعاملين من فئتين مختلفتين.', dur: 8500 },
  { id: '2fa-evaluate', caption: 'لاختيار طريقة مصادقة نوازن بين الأمان وإمكانية الوصول: رسالة SMS تصل إلى أي هاتف ولو لم يكن ذكيًا، ويمكن إرسالها إلى هاتف ولي الأمر.', dur: 11000 },
  // ── Digital signature (SlidesUnit02Signature) ──
  { id: 'sig-problem', caption: 'رسالة مهمة من المدرسة… غيّرها محتال في الطريق! كيف يتأكد المستقبل أنها أصلية ولم يُعبث بها؟', dur: 7500 },
  { id: 'sig-sign', caption: 'الحل: التوقيع الرقمي. يحسب المرسل بصمة (Hash) للمستند، ثم يشفّرها بمفتاحه الخاص فينتج التوقيع.', dur: 8000 },
  { id: 'sig-send', caption: 'يُرسل المستند ومعه توقيعه الرقمي إلى المستقبل.', dur: 5000 },
  { id: 'sig-verify', caption: 'يتحقق المستقبل من التوقيع بالمفتاح العام للمرسل، ويحسب بصمة المستند بنفسه؛ تطابق البصمتين يعني أنه سليم ومن المرسل الحقيقي.', dur: 9000 },
  { id: 'sig-tamper', caption: 'لو غيّر المحتال حرفًا واحدًا تتغير البصمة تمامًا فيُكتشف التلاعب، ولا يستطيع التوقيع من جديد لأنه لا يملك المفتاح الخاص.', dur: 9500 },
  { id: 'sig-def', caption: 'التوقيع الرقمي يكشف التلاعب وانتحال الشخصية، ويوفر دليلًا يدعم عدم التنصل.', dur: 9000 },
  // ── Wrap-up ──
  { id: 'final', caption: 'التشفير يمنع قراءة المحتوى، والتوقيع الرقمي يكشف التلاعب، والشهادة الرقمية تثبت هوية الخادم، و2FA تقلل الدخول غير المصرح به.', dur: 10000 },
  { id: 'answer', caption: 'إجابة سؤال الدرس: يعتمد الاتصال والخدمات الآمنة عبر الإنترنت على الجمع بين التشفير والمصادقة، وليس على تقنية واحدة فقط.', dur: 10000 },
]

/* Frame lookup helpers: S['id'] is that frame's index */
const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
if (import.meta.dev && Object.keys(S).length !== steps.length) console.error('slides: duplicate frame id')
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const finalCards = [
  { name: 'التشفير (TLS)', does: 'يمنع قراءة المحتوى', icon: Lock, border: 'border-emerald-400/70', bg: 'bg-emerald-500', text: 'text-emerald-300' },
  { name: 'التوقيع الرقمي', does: 'يكشف التلاعب', icon: Signature, border: 'border-pink-400/70', bg: 'bg-pink-500', text: 'text-pink-300' },
  { name: 'الشهادة الرقمية', does: 'تثبت هوية الخادم', icon: Award, border: 'border-amber-400/70', bg: 'bg-amber-500', text: 'text-amber-300' },
  { name: 'المصادقة الثنائية', does: 'تقلل الدخول غير المصرح به', icon: ShieldCheck, border: 'border-violet-400/70', bg: 'bg-violet-500', text: 'text-violet-300' },
]

const questionTopics = [
  { name: 'التشفير', icon: Lock, cls: 'bg-emerald-500' },
  { name: 'الشهادة الرقمية', icon: Award, cls: 'bg-amber-500' },
  { name: 'المصادقة الثنائية', icon: ShieldCheck, cls: 'bg-violet-500' },
  { name: 'التوقيع الرقمي', icon: Signature, cls: 'bg-pink-500' },
]

const answerGroups = [
  { name: 'التشفير', sub: 'يحمي سرية البيانات وسلامتها أثناء النقل', icon: Lock, items: ['HTTPS / TLS', 'التشفير المتماثل', 'التشفير بالمفتاح العام'], border: 'border-emerald-400', text: 'text-emerald-300', bg: 'bg-emerald-500' },
  { name: 'المصادقة', sub: 'تثبت الهوية وتكشف التلاعب', icon: BadgeCheck, items: ['الشهادة الرقمية', 'المصادقة الثنائية', 'التوقيع الرقمي'], border: 'border-violet-400', text: 'text-violet-300', bg: 'bg-violet-500' },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'HTTP', id: 'acronym' },
  { name: 'HTTPS', id: 'tunnel' },
  { name: 'التشفير', id: 'keys-sym' },
  { name: 'المصافحة', id: 'hs-intro' },
  { name: 'الشهادة', id: 'cert-send' },
  { name: '2FA', id: '2fa-stolen' },
  { name: 'التوقيع', id: 'sig-problem' },
  { name: 'الخلاصة', id: 'final' },
].map(c => ({ ...c, from: S[c.id]! }))
const chapterOf = (s: number) => [...chapters].reverse().find(c => s >= c.from)!.name

const acronym = [
  { letter: 'H', en: 'Hyper', ar: 'تشعبي', color: 'text-amber-300' },
  { letter: 'T', en: 'Text', ar: 'نص', color: 'text-amber-300' },
  { letter: 'T', en: 'Transfer', ar: 'نقل', color: 'text-sky-300' },
  { letter: 'P', en: 'Protocol', ar: 'بروتوكول', color: 'text-indigo-300' },
]

const step = ref(0)
const current = computed(() => steps[step.value]!)

/* ───────── Scene state derived from the frame ───────── */
// The client/server scene is used for HTTP, HTTPS and the handshake; the keys
// chapter in between and everything after the handshake use their own scenes.
const netVisible = computed(() => inRange('nodes', 'hs-summary') && !inRange('keys-sym', 'keys-compare'))
// The handshake rewinds to *before* the tunnel exists: it is what builds it.
const inHandshake = computed(() => inRange('hs-intro', 'derive'))
const tlsOn = computed(() => inRange('tunnel', 'lock-caveat') || from('hs-done'))
const serverBusy = computed(() => at('busy') || at('derive'))
const pageLoaded = computed(() => from('res') && !inHandshake.value)
const hackerOn = computed(() => inRange('sniff', 'tls-res') || at('kex'))
const hackerFoiled = computed(() => tlsOn.value || at('kex'))
const keysOn = computed(() => from('derive'))

// Handshake phase shown in the header tracker (0 = not in the handshake)
const phases = ['التحقق من الشهادة', 'اشتقاق مفاتيح الجلسة', 'تبادل البيانات']
const phase = computed(() => {
  if (at('hello')) return 0.5 // started, nothing done yet
  if (inRange('cert-send', 'fake')) return 1
  if (inRange('kex', 'derive')) return 2
  if (at('hs-done')) return 3
  return 0
})

// Frames whose id is also the name of a full-screen card
const OVERLAYS = new Set(['question', 'http-def', 'equation', 'https-def', 'lock-caveat', 'hs-intro', 'cert', 'fake', 'hs-summary', 'final', 'answer'])
const overlay = computed(() => (OVERLAYS.has(current.value.id) ? current.value.id : null))

interface Bubble { key: string; ok: boolean; title: string; text: string; plain?: boolean }
const hackerBubble = computed<Bubble | null>(() => {
  if (at('sniff')) return { key: 'plain', ok: true, title: 'أستطيع القراءة بوضوح!', text: 'user=ali&pass=1234' }
  if (at('tls-req')) return { key: 'enc1', ok: false, title: 'لا أفهم شيئًا…', text: '9f#xQ!@7kL$2zR' }
  if (at('tls-res')) return { key: 'enc2', ok: false, title: 'لا أفهم شيئًا…', text: 'Zp0&m*Lq#4Wv!e' }
  if (at('kex')) return { key: 'params', ok: false, plain: true, title: 'أرى المعاملات فقط…', text: 'لكن مفتاح الجلسة نفسه لا يمر من هنا!' }
  return null
})

const sessionKeys = [
  { id: 'server', x: 190, delay: '0.2s' },
  { id: 'client', x: 1090, delay: '0.6s' },
]

const certChecks = [
  'الشهادة صالحة (لم تنتهِ مدتها)',
  'سلسلة الثقة سليمة (من جهة إصدار موثوقة)',
  'تخص اسم الموقع نفسه: school.edu',
]

const certFields = [
  { k: 'اسم النطاق', v: 'school.edu', ltr: true, icon: Globe },
  { k: 'صادرة من', v: 'جهة إصدار موثوقة' },
  { k: 'صالحة حتى', v: '2027 / 12 / 31', ltr: true },
  { k: 'المفتاح العام', v: '3F:A9:7C:…', ltr: true, icon: KeyRound },
]

const phaseCards = [
  { title: 'التحقق من الشهادة الرقمية', sub: 'الخادم ← المتصفح', icon: BadgeCheck, border: 'border-amber-400/70', bg: 'bg-amber-500', text: 'text-amber-300' },
  { title: 'اشتقاق مفاتيح الجلسة', sub: 'تبادل معاملات فقط', icon: KeyRound, border: 'border-violet-400/70', bg: 'bg-violet-500', text: 'text-violet-300' },
  { title: 'تبادل البيانات بالتشفير المتماثل', sub: 'في الاتجاهين', icon: Repeat, border: 'border-emerald-400/70', bg: 'bg-emerald-500', text: 'text-emerald-300' },
]

const fakeCompare = [
  { ok: true, who: 'الخادم الحقيقي', title: 'تم التحقق من الشهادة', reason: 'شهادة موثوقة صادرة لـ school.edu', result: 'يكمل الاتصال ✓' },
  { ok: false, who: 'محتال ينتحل الموقع', title: 'تحذير: الاتصال غير آمن', reason: 'لا يملك شهادة موثوقة لـ school.edu', result: 'يوقف المتصفح الاتصال ✕' },
]

const summaryRows = [
  { phase: 'التحقق من الشهادة الرقمية', what: 'الخادم يرسل شهادته والمتصفح يفحصها', enc: 'آليات المفتاح العام', color: 'text-amber-300', bg: 'bg-amber-500' },
  { phase: 'اشتقاق مفاتيح الجلسة', what: 'تبادل معاملات فقط، لا المفتاح نفسه', enc: 'آليات المفتاح العام', color: 'text-violet-300', bg: 'bg-violet-500' },
  { phase: 'تبادل البيانات', what: 'رسائل HTTP في الاتجاهين', enc: 'تشفير متماثل (سريع وكفء)', color: 'text-emerald-300', bg: 'bg-emerald-500' },
]

// Packet x positions (centre of the packet, stage px)
const CLIENT_X = 800
const SERVER_X = 450

// A packet sits at its origin before its frame, arrives during it, and stays
// (hidden) at the destination afterwards, so stepping back animates in reverse.
const toServer = (id: string) => (from(id) ? SERVER_X : CLIENT_X)
const toClient = (id: string) => (from(id) ? CLIENT_X : SERVER_X)

const packets = computed(() => [
  { id: 'req', kind: 'req', secure: false, label: 'طلب Request', text: 'GET /index.html', x: toServer('req'), visible: at('req') },
  { id: 'res', kind: 'res', secure: false, label: 'استجابة Response', text: '200 OK  <html>', x: toClient('res'), visible: at('res') },
  // login over plain HTTP, read by the eavesdropper
  { id: 'login', kind: 'req', secure: false, label: 'طلب تسجيل دخول', text: 'user=ali&pass=1234', x: toServer('sniff'), visible: at('sniff') },
  // same login, now inside TLS
  { id: 'login-tls', kind: 'req', secure: true, label: 'طلب HTTP مشفّر', text: '9f#xQ!@7kL$2zR', x: toServer('tls-req'), visible: at('tls-req') },
  { id: 'res-tls', kind: 'res', secure: true, label: 'استجابة HTTP مشفّرة', text: 'Zp0&m*Lq#4Wv!e', x: toClient('tls-res'), visible: at('tls-res') },
  // ── handshake ──
  { id: 'hello', kind: 'hello', secure: false, label: 'بدء المصافحة: أريد اتصالًا آمنًا', text: 'Hello 👋', x: toServer('hello'), visible: at('hello') },
  { id: 'cert', kind: 'cert', secure: false, label: 'الشهادة الرقمية للخادم', text: 'school.edu ✓', x: toClient('cert-send'), visible: at('cert-send') || at('cert') },
  // key-exchange parameters cross each other on two lanes
  { id: 'params-c', kind: 'param', secure: false, label: 'معاملات تبادل المفاتيح', text: 'من المتصفح', x: toServer('kex'), visible: at('kex') },
  { id: 'params-s', kind: 'param', secure: false, label: 'معاملات تبادل المفاتيح', text: 'من الخادم', top: 192, x: toClient('kex'), visible: at('kex') },
  // first protected data after the handshake
  { id: 'data-sym', kind: 'req', secure: true, label: 'بيانات محمية بمفتاح الجلسة', text: 'Xk!9#qP2@vL7', x: toServer('hs-done'), visible: at('hs-done') },
] as Packet[])

interface Packet {
  id: string; kind: 'req' | 'res' | 'hello' | 'cert' | 'param'
  secure: boolean; label: string; text: string; x: number; visible: boolean; top?: number
}

const packetClass = (p: Packet) => {
  if (p.secure) return 'bg-emerald-950 border-emerald-400 text-emerald-200'
  switch (p.kind) {
    case 'res': return 'bg-sky-50 border-sky-400 text-sky-900'
    case 'cert': return 'bg-gradient-to-br from-amber-100 to-yellow-50 border-amber-500 text-amber-900 shadow-[0_0_30px_rgba(251,191,36,0.45)]'
    case 'param': return 'bg-violet-50 border-violet-400 text-violet-900'
    case 'hello': return 'bg-white border-slate-300 text-slate-800'
    default: return 'bg-amber-50 border-amber-400 text-amber-900'
  }
}
// Arabic packet text reads right-to-left and skips the monospace font
const isArabic = (t: string) => /[؀-ۿ]/.test(t)
const packetIcon = (p: Packet) => {
  if (p.secure) return Lock
  if (p.kind === 'cert') return Award
  if (p.kind === 'param') return KeyRound
  if (p.kind === 'hello') return Handshake
  return Mail
}

/* ───────── Navigation ───────── */
const goTo = (n: number) => { step.value = Math.max(0, Math.min(steps.length - 1, n)) }
const next = () => {
  if (step.value >= steps.length - 1) { playing.value = false; return }
  goTo(step.value + 1)
}
const prev = () => goTo(step.value - 1)
const restart = () => { goTo(0); playing.value = false }

/* ───────── Autoplay ───────── */
const playing = ref(false)
const stepProgress = ref(0) // 0..1 inside the current step while playing
let timer: ReturnType<typeof setInterval> | null = null
let stepStarted = 0

const tick = () => {
  const dur = current.value.dur ?? 5000
  stepProgress.value = Math.min(1, (Date.now() - stepStarted) / dur)
  if (stepProgress.value >= 1) {
    if (step.value >= steps.length - 1) { playing.value = false; return }
    goTo(step.value + 1)
  }
}
const togglePlay = () => {
  if (!playing.value && step.value >= steps.length - 1) goTo(0)
  playing.value = !playing.value
}

watch(step, () => { stepStarted = Date.now(); stepProgress.value = 0 })
watch(playing, (on) => {
  if (timer) { clearInterval(timer); timer = null }
  stepProgress.value = 0
  if (on) { stepStarted = Date.now(); timer = setInterval(tick, 100) }
})

/* ───────── Controls auto-hide ───────── */
const controlsVisible = ref(true)
let hideTimer: ReturnType<typeof setTimeout> | null = null
const pokeControls = () => {
  controlsVisible.value = true
  if (hideTimer) clearTimeout(hideTimer)
  // Hide after a moment of no mouse movement so the bar never covers the subtitles
  hideTimer = setTimeout(() => { controlsVisible.value = false }, 3000)
}
watch(playing, pokeControls)

/* ───────── Fullscreen ───────── */
const isFullscreen = ref(false)
const toggleFullscreen = () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {})
  else document.exitFullscreen()
}
const onFsChange = () => { isFullscreen.value = !!document.fullscreenElement }

/* ───────── Scale the 1280x720 stage to the window ───────── */
const scale = ref(1)
const fit = () => {
  const reserve = isFullscreen.value ? 0 : 24
  scale.value = Math.min((window.innerWidth - reserve) / 1280, (window.innerHeight - reserve) / 720)
}

/* ───────── Keyboard ─────────
   RTL deck: ← goes forward, → goes back. `e.code` keeps working on the Arabic layout. */
const onKey = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowLeft': case 'Space': case 'PageDown': case 'Enter':
      e.preventDefault(); next(); break
    case 'ArrowRight': case 'PageUp': case 'Backspace':
      e.preventDefault(); prev(); break
    case 'KeyP': togglePlay(); break
    case 'KeyF': toggleFullscreen(); break
    case 'Home': goTo(0); break
    case 'End': goTo(steps.length - 1); break
  }
  pokeControls()
}

onMounted(() => {
  // ?step=N opens the deck at a given frame
  const q = Number(route.query.step)
  if (Number.isInteger(q)) goTo(q)
  fit()
  window.addEventListener('resize', fit)
  window.addEventListener('keydown', onKey)
  document.addEventListener('fullscreenchange', onFsChange)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (hideTimer) clearTimeout(hideTimer)
  window.removeEventListener('resize', fit)
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('fullscreenchange', onFsChange)
})
watch(isFullscreen, () => setTimeout(fit, 50))
</script>

<style scoped>
.stage {
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.06);
  cursor: pointer;
}
.grid-bg {
  background-image:
    linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px);
  background-size: 48px 48px;
}
.glow { transition: background-color 1.2s ease; }

.kbd {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.2rem; height: 2.2rem; border-radius: .6rem;
  background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2); color: #fff;
}

/* cover */
.ring-pulse { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
.cover-lock { animation: floaty 4s ease-in-out infinite; }
@keyframes floaty { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }

/* acronym */
.acro { opacity: 0; animation: rise .7s cubic-bezier(.2,.8,.2,1.2) forwards; }
.acro-line { opacity: 0; animation: rise .8s ease forwards; animation-delay: 1.6s; }
@keyframes rise { from { opacity: 0; transform: translateY(40px) scale(.8) } to { opacity: 1; transform: none } }

/* scene dim behind overlay cards */
.scene-dim { filter: blur(6px) brightness(.45); }

/* wire */
.wire {
  background: repeating-linear-gradient(90deg, #64748b 0 14px, transparent 14px 24px);
  animation: dash 1s linear infinite;
}
.wire-secure { background: repeating-linear-gradient(90deg, #34d399 0 14px, transparent 14px 24px); }
@keyframes dash { to { background-position: 24px 0 } }

/* TLS tunnel */
.tunnel {
  background: linear-gradient(180deg, rgba(16,185,129,.18), rgba(16,185,129,.05));
  border: 3px solid rgba(52,211,153,.85);
  box-shadow: 0 0 40px rgba(52,211,153,.45), inset 0 0 30px rgba(52,211,153,.25);
  transform-origin: center;
}
.tunnel-flow {
  background: repeating-linear-gradient(90deg, transparent 0 40px, rgba(52,211,153,.18) 40px 60px);
  animation: flow 1.4s linear infinite;
}
@keyframes flow { to { background-position: 60px 0 } }

/* server */
.led { width: 12px; height: 12px; border-radius: 9999px; background: #334155; }
.led-on { background: #fbbf24; box-shadow: 0 0 10px #fbbf24; animation: blink .4s steps(2) infinite; }
.led-on.delay { animation-delay: .2s; }
.led-green { background: #34d399; box-shadow: 0 0 8px #34d399; }
@keyframes blink { 50% { opacity: .2 } }
.server-hit { animation: hit .6s ease; }
@keyframes hit { 30% { transform: scale(1.06) } }
.spin { animation: spin 1.6s linear infinite; }
@keyframes spin { to { transform: rotate(360deg) } }

/* packets travel by transitioning `left` */
.packet {
  transform: translateX(-50%);
  transition: left 2.2s cubic-bezier(.45,0,.25,1), opacity .5s ease;
  z-index: 5;
}

.scramble { animation: scramble .25s steps(2) infinite; }
@keyframes scramble { 50% { letter-spacing: .08em; opacity: .7 } }

/* overlay cards */
.card {
  background: rgba(15, 23, 42, .88);
  border-width: 2px;
  border-radius: 32px;
  padding: 44px 52px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.6);
}
.chip { border-width: 2px; border-radius: 9999px; padding: .4rem 1.2rem; }
.hl-amber { color: #fcd34d; background: linear-gradient(transparent 62%, rgba(251,191,36,.25) 62%); }
.hl-green { color: #6ee7b7; background: linear-gradient(transparent 62%, rgba(52,211,153,.25) 62%); }

.eq-box {
  opacity: 0; animation: rise .6s cubic-bezier(.2,.8,.2,1.2) forwards;
  font-size: 72px; font-weight: 900; padding: 18px 36px; border-width: 4px; border-radius: 28px;
  background: rgba(15,23,42,.85);
}
.eq-final { box-shadow: 0 0 60px rgba(52,211,153,.5); background: rgba(6,78,59,.7); }
.eq-op { opacity: 0; animation: rise .5s ease forwards; font-size: 72px; font-weight: 900; color: #94a3b8; }
.s-letter { display: inline-block; animation: sPulse 1.4s ease-in-out 2.4s infinite; }
@keyframes sPulse { 50% { transform: scale(1.25); text-shadow: 0 0 24px #34d399 } }
.eq-note { opacity: 0; animation: rise .7s ease forwards; animation-delay: 2.3s; }

.layer-tls { opacity: 0; animation: rise .7s ease forwards; animation-delay: .5s; }
.layer-http { opacity: 0; animation: drop .8s cubic-bezier(.2,.8,.2,1.1) forwards; }
@keyframes drop { from { opacity: 0; transform: translateY(-240px) } to { opacity: 1; transform: none } }
.def-card { opacity: 0; animation: rise .7s ease forwards; animation-delay: 1.2s; }

/* ── handshake ── */
.rise { opacity: 0; animation: rise .7s cubic-bezier(.2,.8,.2,1.1) forwards; }
.shake { animation: shake 1.6s ease-in-out infinite; transform-origin: center; }
@keyframes shake { 0%,60%,100% { transform: rotate(0) } 70% { transform: rotate(-12deg) } 80% { transform: rotate(10deg) } 90% { transform: rotate(-6deg) } }
.shake-once { animation: rise .7s ease forwards, nudge .5s ease 1.6s 2; }
@keyframes nudge { 25% { transform: translateX(-10px) } 75% { transform: translateX(10px) } }

.check-row { opacity: 0; transform: translateX(20px); }
.check-row.check-on { animation: checkIn .5s ease forwards; }
@keyframes checkIn { to { opacity: 1; transform: none } }

.cert-doc {
  background: linear-gradient(135deg, #f59e0b, #fde68a, #d97706, #fcd34d);
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.6), 0 0 60px rgba(251,191,36,.35);
  opacity: 0; animation: certIn .8s cubic-bezier(.2,.8,.2,1.1) forwards;
}
@keyframes certIn { from { opacity: 0; transform: rotate(-8deg) scale(.6) } to { opacity: 1; transform: rotate(-2deg) } }
.cert-field { opacity: 0; animation: rise .5s ease forwards; }
.seal { opacity: 0; animation: stamp .5s cubic-bezier(.3,1.6,.5,1) 2.6s forwards; }
@keyframes stamp { from { opacity: 0; transform: scale(2.4) rotate(-30deg) } to { opacity: 1; transform: rotate(-12deg) } }
.key-glint { animation: glint 2s ease-in-out infinite; }
@keyframes glint { 50% { transform: rotate(-20deg) scale(1.15) } }

/* controls */
.ctrl {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.6rem; height: 2.6rem; border-radius: .8rem; color: #e2e8f0; transition: background .2s;
}
.ctrl:hover { background: rgba(255,255,255,.1); }
.ctrl-main { background: #0ea5e9; color: #fff; width: 3rem; height: 3rem; }
.ctrl-main:hover { background: #0284c7; }

/* transitions */
.fade-enter-active, .fade-leave-active { transition: opacity .6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.zoom-enter-active, .zoom-leave-active { transition: opacity .5s ease, transform .5s ease; }
.zoom-enter-from { opacity: 0; transform: scale(.9); }
.zoom-leave-to { opacity: 0; transform: scale(1.05); }

.pop-enter-active, .pop-leave-active { transition: opacity .35s ease, transform .35s cubic-bezier(.2,.8,.2,1.3); }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(.7); }

.sub-enter-active, .sub-leave-active { transition: opacity .35s ease, transform .35s ease; }
.sub-enter-from { opacity: 0; transform: translateY(14px); }
.sub-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
