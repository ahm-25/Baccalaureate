<template>
  <SlidesPlayer v-model:step="step" :steps="steps" :chapters="chapters" back-to="/unit-01"
                :glow="from('principles') ? 'bg-emerald-500/20' : from('xai-box') ? 'bg-sky-500/20' : 'bg-amber-500/20'">
    <!-- ═════════════ COVER ═════════════ -->
    <Transition name="sl-frame">
      <div v-if="at('cover')" class="absolute inset-0 flex flex-col items-center justify-center text-center" dir="rtl">
        <div class="cover-icon relative w-[170px] h-[170px] mb-9 rounded-[44px] bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center shadow-[0_0_80px_rgba(251,191,36,.45)]">
          <span class="text-[86px]">⚖️</span>
          <span class="ring absolute inset-0 rounded-[44px] border-4 border-amber-300"></span>
        </div>
        <p class="text-sky-300 font-bold text-2xl tracking-wide mb-3">الوحدة الأولى · الدرس <span dir="ltr" class="inline-block">1-4</span></p>
        <h1 class="text-white font-black text-[60px] leading-tight mb-8">القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي</h1>
        <div class="flex items-center gap-3">
          <span v-for="(t, i) in topics" :key="t" class="sl-in sl-badge border-white/15 bg-white/5 text-slate-100 !text-xl"
                :style="{ '--d': `${1.2 + i * 0.25}s` }">{{ t }}</span>
        </div>
        <p class="mt-12 text-slate-400 text-xl font-semibold">اضغط ▶ للتشغيل أو انقر للتقدّم خطوة بخطوة</p>
      </div>
    </Transition>

    <!-- ═════════════ CHAPTERS ═════════════ -->
    <L4Bias v-if="inRange('bias-def', 'bias-causes')" :f="step - S['bias-def']!" />
    <L4Privacy v-if="inRange('priv-cam', 'priv-data')" :f="step - S['priv-cam']!" />
    <L4Xai v-if="inRange('xai-box', 'acc')" :f="step - S['xai-box']!" />

    <!-- ═════════════ CARDS ═════════════ -->
    <Transition name="sl-zoom" mode="out-in">
      <!-- Explore -->
      <div v-if="at('explore')" key="explore" class="absolute inset-0 flex flex-col items-center pt-[50px] gap-5" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">✎ استكشف</div>
        <div class="sl-in sl-card border-amber-400/70 px-9 py-5 max-w-[1100px] text-center" style="--d: .4s">
          <div class="text-[25px] font-black text-white leading-relaxed">
            نظام ذكاء اصطناعي للتعرف على الوجه <span class="text-amber-300">أكثر عرضة لإساءة التعرف</span> على أشخاص من بعض المجموعات مقارنة بغيرها.
          </div>
          <div class="mt-3 text-[23px] font-black text-sky-300">🤔 توقّع: من قد يتضرر من هذا؟ وكيف؟ ولماذا يحدث؟</div>
        </div>
        <div class="flex gap-5">
          <div v-for="(a, i) in exploreAns" :key="a.t" class="sl-in w-[350px] rounded-3xl border-2 bg-slate-900/85 px-6 py-4" :class="a.cls" :style="{ '--d': `${4 + i * 1.2}s` }">
            <div class="text-4xl mb-1">{{ a.i }}</div>
            <div class="text-[19px] font-black mb-1" :class="a.title">{{ a.t }}</div>
            <p class="text-[18px] font-bold text-slate-100 leading-snug">{{ a.d }}</p>
          </div>
        </div>
        <div class="sl-in text-[22px] font-black text-amber-200" style="--d: 8s">هذا ما يسمى «التحيز الخوارزمي»… فما هو؟ 👇</div>
      </div>

      <!-- Stop & think: privacy balance -->
      <div v-else-if="at('priv-think')" key="priv-think" class="absolute inset-0 flex flex-col items-center pt-[45px] gap-5" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">💡 توقف وفكر</div>
        <div class="sl-in sl-card border-amber-400/70 px-9 py-4 max-w-[1120px] text-center text-[23px] font-black text-white leading-relaxed" style="--d: .4s">
          كاميرات التعرف على الوجه في الأماكن العامة قد تحسّن <span class="text-sky-300">السلامة والراحة</span>، لكنها تثير مخاوف بشأن <span class="text-rose-300">الخصوصية</span>.
          <span class="text-amber-300">كيف نوازن بينها؟ وأي مبدأ يرتبط برأيك؟</span>
        </div>
        <!-- the scale -->
        <div class="relative w-[700px] h-[150px]">
          <div class="absolute left-[345px] top-[30px] w-[10px] h-[110px] bg-slate-500 rounded"></div>
          <div class="absolute left-[300px] top-[132px] w-[100px] h-[14px] bg-slate-500 rounded"></div>
          <div class="beam absolute left-[90px] top-[24px] w-[520px] h-[10px] bg-slate-300 rounded"></div>
          <!-- pans hang level and follow the beam ends -->
          <div class="pan-r absolute left-[510px] top-[36px] w-[200px] rounded-2xl border-2 border-sky-400 bg-sky-950/80 px-3 py-2 text-center text-[19px] font-black text-sky-100 whitespace-nowrap">🛡️ السلامة والراحة</div>
          <div class="pan-l absolute -left-[10px] top-[36px] w-[200px] rounded-2xl border-2 border-rose-400 bg-rose-950/80 px-3 py-2 text-center text-[19px] font-black text-rose-100 whitespace-nowrap">🔐 الخصوصية</div>
        </div>
        <div class="flex gap-5">
          <div class="sl-in w-[600px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-6 py-3" style="--d: 4.6s">
            <div class="text-[19px] font-black text-emerald-200 mb-1">✅ إجابة مقترحة</div>
            <p class="text-[17px] font-bold text-slate-100 leading-relaxed">تُستخدم فقط عند الحاجة الحقيقية، مع إعلام الناس بوجودها، وجمع أقل قدر من البيانات وحمايتها وعدم استخدامها لغرض آخر.</p>
          </div>
          <div class="sl-pop w-[340px] rounded-3xl border-2 border-teal-400 bg-teal-950/60 px-6 py-3 flex flex-col items-center justify-center" style="--d: 6.4s">
            <div class="text-[16px] font-black text-teal-200">المبدأ المرتبط</div>
            <div class="text-[28px] font-black text-white whitespace-nowrap">🔐 حماية الخصوصية</div>
          </div>
        </div>
      </div>

      <!-- Stop & think: unexplained rejection -->
      <div v-else-if="at('hire-think')" key="hire-think" class="absolute inset-0 flex flex-col items-center pt-[50px] gap-5" dir="rtl">
        <div class="sl-pop text-5xl font-black text-white">🤔 توقف وفكر</div>
        <div class="sl-in sl-card border-amber-400/70 px-9 py-5 max-w-[1100px] text-center text-[25px] font-black text-white leading-relaxed" style="--d: .4s">
          إذا لم يستطع أحد شرح سبب رفض الذكاء الاصطناعي لطلب توظيف شخص ما،
          <span class="text-amber-300">فهل هذا عادل؟ وأي مبدأ من مبادئ أخلاقيات الذكاء الاصطناعي مفقود؟</span>
        </div>
        <div class="flex gap-5">
          <div class="sl-in w-[540px] rounded-3xl border-2 border-rose-400/60 bg-rose-950/40 px-7 py-4" style="--d: 3.4s">
            <div class="text-[22px] font-black text-rose-200 mb-1">❌ ليس عادلًا</div>
            <p class="text-[19px] font-bold text-slate-100 leading-relaxed">لا يمكن التأكد من أن القرار خالٍ من الخطأ أو التحيز، ولا يستطيع المتقدم أن يعترض أو يتحسن.</p>
          </div>
          <div class="sl-in w-[540px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/40 px-7 py-4" style="--d: 5.2s">
            <div class="text-[22px] font-black text-emerald-200 mb-1">👁️ المبدأ المفقود: الشفافية</div>
            <p class="text-[19px] font-bold text-slate-100 leading-relaxed">عملية اتخاذ القرار غير واضحة؛ ويساعد <span class="sl-hl-green font-black">XAI</span> على توضيح العوامل التي أسهمت فيه.</p>
          </div>
        </div>
      </div>

      <!-- The four principles -->
      <div v-else-if="at('principles')" key="principles" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">🏛️ المبادئ الأربعة لأخلاقيات الذكاء الاصطناعي</div>
          <p class="mt-2 text-xl font-bold text-slate-400">يركز عليها هذا الدرس من بين مبادئ أخرى</p>
        </div>
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-5">
          <div v-for="(p, i) in principles" :key="p.name" class="sl-pop w-[270px] h-[290px] rounded-3xl border-2 bg-slate-900/85 px-5 py-5 flex flex-col items-center text-center" :class="p.cls"
               :style="{ '--d': `${0.5 + i * 1.3}s` }">
            <span class="w-[86px] h-[86px] rounded-full border-4 flex items-center justify-center text-[44px] mb-3" :class="p.ring">{{ p.icon }}</span>
            <span class="text-[27px] font-black mb-2" :class="p.text">{{ p.name }}</span>
            <p class="text-[18px] font-bold text-slate-100 leading-relaxed">{{ p.def }}</p>
          </div>
        </div>
        <div class="absolute top-[470px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/60 px-8 py-4 max-w-[1150px] text-center text-[21px] font-bold text-white leading-relaxed" style="--d: 6.2s">
            ⭐ إذا كانت بيانات التدريب متحيزة، يمكن للذكاء الاصطناعي أن يكرر هذا التحيز؛ والاستخدام المسؤول يعني
            <span class="sl-hl-amber">التحقق من التحيز</span>، و<span class="sl-hl-amber">القدرة على شرح القرارات</span>، و<span class="sl-hl-amber">معرفة من هو المسؤول</span>.
          </div>
        </div>
      </div>

      <!-- Match description to principle -->
      <div v-else-if="at('match')" key="match" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مثال محلول — طابق</div>
          <p class="mt-2 text-xl font-bold text-slate-400 whitespace-nowrap">طابق كل وصف مع أنسب مبدأ من مبادئ الأخلاقيات</p>
        </div>
        <div class="absolute top-[150px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(r, i) in matchRows" :key="r.text" class="sl-in w-[1120px] h-[90px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-5 px-6"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-11 h-11 rounded-full bg-slate-700 text-white text-xl font-black flex items-center justify-center shrink-0">{{ i + 1 }}</span>
            <p class="flex-1 text-[21px] font-bold text-slate-100 leading-snug">{{ r.text }}</p>
            <div class="relative w-[260px] h-[56px] shrink-0">
              <span class="sl-out absolute inset-0 rounded-2xl border-2 border-dashed border-slate-500 text-2xl font-black text-slate-500 flex items-center justify-center"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">؟</span>
              <span class="sl-pop absolute inset-0 rounded-2xl border-2 text-[20px] font-black flex items-center justify-center gap-2" :class="r.cls"
                    :style="{ '--d': `${2.4 + i * 1.8}s` }">{{ r.ans }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- True / false -->
      <div v-else-if="at('tf')" key="tf" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">✏️ مثال محلول — صح أم خطأ؟</div>
        </div>
        <div class="absolute top-[125px] inset-x-0 flex flex-col items-center gap-3">
          <div v-for="(t, i) in tfRows" :key="t.text" class="sl-in w-[1140px] rounded-3xl border-2 border-white/10 bg-slate-900/80 flex items-center gap-4 px-5 py-2.5"
               :style="{ '--d': `${0.3 + i * 0.3}s` }">
            <span class="w-10 h-10 rounded-full bg-slate-700 text-white text-lg font-black flex items-center justify-center shrink-0">{{ t.k }}</span>
            <div class="flex-1">
              <p class="text-[19px] font-bold text-slate-100 leading-snug">{{ t.text }}</p>
              <p class="sl-in text-[16px] font-bold leading-snug mt-0.5" :class="t.ok ? 'text-emerald-300' : 'text-rose-300'" :style="{ '--d': `${2.6 + i * 2}s` }">💡 {{ t.why }}</p>
            </div>
            <span class="sl-pop w-[64px] h-[64px] rounded-2xl border-2 text-[34px] font-black flex items-center justify-center shrink-0"
                  :class="t.ok ? 'border-emerald-400 bg-emerald-600/30 text-emerald-200' : 'border-rose-400 bg-rose-600/30 text-rose-200'"
                  :style="{ '--d': `${2.4 + i * 2}s` }">{{ t.ok ? '○' : '×' }}</span>
          </div>
        </div>
      </div>

      <!-- Apply: school gate cameras -->
      <div v-else-if="at('apply')" key="apply" class="absolute inset-0" dir="rtl">
        <div class="absolute top-8 inset-x-0 text-center">
          <div class="text-5xl font-black text-white">⚙️ طبّق ما تعلمته</div>
          <p class="mt-3 text-[22px] font-bold text-amber-200">🏫 مدرسة تريد كاميرات تعرف على الوجه عند بوابتها لتسجيل الحضور تلقائيًا</p>
        </div>
        <div class="absolute top-[170px] inset-x-0 flex flex-col items-center gap-4">
          <div v-for="(q, i) in applyQs" :key="q.q" class="w-[1120px] rounded-3xl border-2 bg-slate-900/85 px-6 py-3.5" :class="q.cls">
            <div class="sl-in text-[22px] font-black text-white" :style="{ '--d': `${0.4 + i * 0.3}s` }">{{ q.icon }} {{ q.q }}</div>
            <p class="sl-in text-[18px] font-bold text-emerald-200 leading-snug mt-1" :style="{ '--d': `${2.4 + i * 2}s` }">💡 {{ q.a }}</p>
          </div>
        </div>
      </div>

      <!-- Main question answer -->
      <div v-else-if="at('answer')" key="answer" class="absolute inset-0 flex flex-col items-center pt-[50px] gap-5" dir="rtl">
        <div class="sl-pop text-[46px] font-black text-white">❓ إجابة السؤال الرئيسي</div>
        <div class="sl-in text-[22px] font-bold text-slate-300 text-center max-w-[1100px]" style="--d: .4s">
          ما القضايا الأخلاقية التي تنشأ مع انتشار الذكاء الاصطناعي، وما المبادئ التي ينبغي أن توجه استخدامنا له؟
        </div>
        <div class="flex gap-4">
          <div v-for="(iss, i) in issues" :key="iss.t" class="sl-in w-[355px] rounded-3xl border-2 bg-slate-900/85 px-5 py-4" :class="iss.cls" :style="{ '--d': `${1.2 + i * 1}s` }">
            <div class="text-[22px] font-black text-white mb-1">{{ iss.t }}</div>
            <p class="text-[17px] font-bold text-slate-200 leading-snug">{{ iss.d }}</p>
          </div>
        </div>
        <div class="sl-in text-[34px] text-slate-500 leading-none" style="--d: 4.2s">↓</div>
        <div class="flex gap-4">
          <span v-for="(p, i) in principles" :key="p.name" class="sl-pop sl-badge !text-[22px]" :class="p.badge" :style="{ '--d': `${4.6 + i * 0.35}s` }">{{ p.icon }} {{ p.name }}</span>
        </div>
        <div class="sl-in text-[19px] font-bold text-slate-400" style="--d: 6.4s">مبادئ مهمة ضمن إطار أوسع للاستخدام المسؤول للذكاء الاصطناعي</div>
      </div>

      <!-- Summary -->
      <div v-else-if="at('summary')" key="summary" class="absolute inset-0 flex flex-col items-center pt-[60px]" dir="rtl">
        <div class="sl-pop text-[52px] font-black text-white mb-5">⭐ الخلاصة</div>
        <div class="sl-in sl-card border-amber-400/60 px-10 py-5 w-[1120px] text-[24px] font-bold text-white text-center leading-relaxed mb-6" style="--d: .5s">
          إذا كانت بيانات التدريب متحيزة، يمكن للذكاء الاصطناعي أن <span class="text-rose-300 font-black">يكرر هذا التحيز</span>؛
          واستخدامه بمسؤولية يعني <span class="sl-hl-amber font-black">التحقق من التحيز، والقدرة على شرح القرارات، ومعرفة من هو المسؤول</span>
          — مسترشدًا بالعدالة والشفافية وحماية الخصوصية والمساءلة.
        </div>
        <div class="sl-in text-[22px] font-black text-slate-300 mb-3" style="--d: 2s">أهم المصطلحات:</div>
        <div class="flex flex-wrap justify-center gap-3 w-[1100px]">
          <span v-for="(t, i) in terms" :key="t" class="sl-pop sl-badge !text-[20px] border-sky-400/50 text-sky-100 bg-sky-600/15" :style="{ '--d': `${2.4 + i * 0.25}s` }">{{ t }}</span>
        </div>
      </div>
    </Transition>
  </SlidesPlayer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SlidesPlayer, { type SlideStep } from '~/components/slides/Player.vue'
import L4Bias from '~/components/slides/unit01/lesson4/Bias.vue'
import L4Privacy from '~/components/slides/unit01/lesson4/Privacy.vue'
import L4Xai from '~/components/slides/unit01/lesson4/Xai.vue'

definePageMeta({ layout: false })
useHead({ title: 'سلايدر الدرس 1-4: القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي' })

/* ───────── Timeline ───────── (frames addressed by id; chapters get a local frame number) */
const steps: SlideStep[] = [
  { id: 'cover', caption: '', dur: 4000 },
  { id: 'explore', caption: 'استكشف: نظام تعرف على الوجه يخطئ أكثر مع بعض المجموعات؛ من قد يتضرر من هذا؟ وكيف؟', dur: 11000 },
  // ── Algorithmic bias ──
  { id: 'bias-def', caption: 'التحيز الخوارزمي: نمط في مخرجات الذكاء الاصطناعي قد يؤدي إلى نتائج غير عادلة أو ضارة، وقد ينشأ من البيانات أو التصميم أو الاستخدام أو السياق البشري والاجتماعي.', dur: 11000 },
  { id: 'bias-hire', caption: 'نظام توظيف تعلّم من قرارات سابقة تفضّل فئة معينة، فكرر التحيز نفسه في أحكامه على المتقدمين الجدد.', dur: 11000 },
  { id: 'bias-face', caption: 'نظام تعرف على الوجه تقل دقته مع فئات معينة؛ لأن صورها في بيانات التدريب قليلة وغير ممثلة للواقع.', dur: 11000 },
  { id: 'bias-causes', caption: 'أسباب التحيز: بيانات تدريب متحيزة أو غير كافية، أو طريقة بناء النظام مثل اختيار غير مناسب للمتغيرات أو متغير بديل لسمة محمية.', dur: 12000 },
  // ── Privacy ──
  { id: 'priv-cam', caption: 'قضايا الخصوصية: يمكن لكاميرات التعرف على الوجه في الأماكن العامة التعرف على الأفراد وتتبعهم.', dur: 10000 },
  { id: 'priv-data', caption: 'وتُجمع وتُحلَّل كميات كبيرة من بيانات السلوك عبر الإنترنت؛ والخصوصية هي التحكم في البيانات الشخصية التي تتم مشاركتها.', dur: 10500 },
  { id: 'priv-think', caption: 'توقف وفكر: كيف نوازن بين الراحة والسلامة وحماية الخصوصية عند استخدام التعرف على الوجه في الأماكن العامة؟', dur: 11000 },
  // ── XAI & responsibility ──
  { id: 'xai-box', caption: 'مشكلة الصندوق الأسود: عندما تكون آلية الوصول إلى النتيجة غير واضحة، يصعب تقييمها واكتشاف الأخطاء أو التحيز.', dur: 10000 },
  { id: 'xai-def', caption: 'الذكاء الاصطناعي القابل للتفسير XAI: أساليب تساعد البشر على فهم العوامل التي أسهمت في وصول النظام إلى قراره.', dur: 10000 },
  { id: 'resp', caption: 'المسؤولية: تحديد أدوار وواجبات المطوّر والجهة المشغّلة والمستخدم؛ ولا يوجد توزيع واحد يصلح لكل السياقات.', dur: 10500 },
  { id: 'acc', caption: 'المساءلة ليست القدرة على شرح القرار، فتلك وظيفة XAI، بل تحديد من يُحاسَب على النتيجة.', dur: 11000 },
  { id: 'hire-think', caption: 'توقف وفكر: إذا لم يستطع أحد شرح سبب رفض طلب توظيف، فهل هذا عادل؟ وأي مبدأ مفقود؟', dur: 10500 },
  // ── Principles ──
  { id: 'principles', caption: 'المبادئ الأربعة: العدالة، والشفافية، وحماية الخصوصية، والمساءلة.', dur: 11000 },
  { id: 'match', caption: 'مثال محلول: طابق كل وصف مع أنسب مبدأ من مبادئ أخلاقيات الذكاء الاصطناعي.', dur: 11000 },
  { id: 'tf', caption: 'مثال محلول: حدد العبارة الصحيحة والخاطئة، مع السبب.', dur: 11500 },
  // ── Wrap-up ──
  { id: 'apply', caption: 'طبّق ما تعلمته: كاميرات تعرف على الوجه لتسجيل الحضور؛ ما الفائدة؟ وما مصدر القلق؟ ومن المسؤول عند الخطأ؟', dur: 12000 },
  { id: 'answer', caption: 'تنشأ قضايا التحيز والخصوصية وصعوبة التفسير وتحديد المسؤولية، وتوجّهنا المبادئ الأربعة للاستخدام المسؤول.', dur: 10000 },
  { id: 'summary', caption: 'استخدام الذكاء الاصطناعي بمسؤولية يعني التحقق من التحيز، والقدرة على شرح القرارات، ومعرفة من هو المسؤول.', dur: 10000 },
]

const chapters = [
  { name: 'البداية', id: 'cover' },
  { name: 'التحيز الخوارزمي', id: 'bias-def' },
  { name: 'الخصوصية', id: 'priv-cam' },
  { name: 'XAI والمسؤولية', id: 'xai-box' },
  { name: 'المبادئ', id: 'principles' },
  { name: 'الخلاصة', id: 'apply' },
]

const S = Object.fromEntries(steps.map((s, i) => [s.id, i])) as Record<string, number>
const step = ref(0)
const at = (id: string) => step.value === S[id]
const from = (id: string) => step.value >= S[id]!
const inRange = (a: string, b: string) => step.value >= S[a]! && step.value <= S[b]!

const topics = ['⚖️ التحيز الخوارزمي', '🔐 الخصوصية', '🔍 XAI والمسؤولية', '🏛️ المبادئ الأربعة']
const exploreAns = [
  { i: '😟', t: 'من يتضرر؟', d: 'أفراد المجموعات التي يخطئ معها النظام أكثر.', cls: 'border-rose-400/60', title: 'text-rose-200' },
  { i: '⚠️', t: 'كيف؟', d: 'قد يُشتبه خطأً في شخص بريء، أو يُمنع من دخول مكان أو من خدمة.', cls: 'border-amber-400/60', title: 'text-amber-200' },
  { i: '📊', t: 'لماذا؟', d: 'ربما لأن صور هذه المجموعات في بيانات التدريب كانت قليلة.', cls: 'border-sky-400/60', title: 'text-sky-200' },
]
const principles = [
  { icon: '⚖️', name: 'العدالة', def: 'عدم التمييز ظلمًا ضد أي شخص أو مجموعة بعينها.', cls: 'border-amber-400/60', ring: 'border-amber-400 bg-amber-950', text: 'text-amber-300', badge: 'border-amber-400/60 text-amber-100 bg-amber-600/15' },
  { icon: '👁️', name: 'الشفافية', def: 'إتاحة معلومات واضحة ومناسبة عن النظام واستخدامه وعملية اتخاذ القرار وحدوده.', cls: 'border-sky-400/60', ring: 'border-sky-400 bg-sky-950', text: 'text-sky-300', badge: 'border-sky-400/60 text-sky-100 bg-sky-600/15' },
  { icon: '🔐', name: 'حماية الخصوصية', def: 'التعامل مع المعلومات الشخصية بشكل مناسب وحماية الخصوصية.', cls: 'border-teal-400/60', ring: 'border-teal-400 bg-teal-950', text: 'text-teal-300', badge: 'border-teal-400/60 text-teal-100 bg-teal-600/15' },
  { icon: '🎯', name: 'المساءلة', def: 'تحديد الجهات المسؤولة عن النظام وقراراته وآثاره، وإمكان محاسبتها وفق أدوارها.', cls: 'border-rose-400/60', ring: 'border-rose-400 bg-rose-950', text: 'text-rose-300', badge: 'border-rose-400/60 text-rose-100 bg-rose-600/15' },
]
const matchRows = [
  { text: 'عدم التمييز ظلمًا ضد أي شخص أو مجموعة بعينها.', ans: '⚖️ أ) العدالة', cls: 'border-amber-400 bg-amber-600/25 text-amber-50' },
  { text: 'إتاحة معلومات واضحة ومناسبة عن النظام واستخدامه وعملية اتخاذ القرار وحدوده.', ans: '👁️ ب) الشفافية', cls: 'border-sky-400 bg-sky-600/25 text-sky-50' },
  { text: 'التعامل مع المعلومات الشخصية بشكل مناسب وحماية الخصوصية.', ans: '🔐 جـ) حماية الخصوصية', cls: 'border-teal-400 bg-teal-600/25 text-teal-50' },
  { text: 'تحديد الجهات المسؤولة عن نتائج الذكاء الاصطناعي وإمكان محاسبتها.', ans: '🎯 د) المساءلة', cls: 'border-rose-400 bg-rose-600/25 text-rose-50' },
]
const tfRows = [
  { k: 'أ', text: 'التحيز الخوارزمي نمط في مخرجات الذكاء الاصطناعي قد ينشأ من البيانات أو تصميم النظام أو طريقة استخدامه، وقد يؤدي إلى نتائج غير عادلة.', ok: true, why: 'تعريف صحيح للتحيز الخوارزمي.' },
  { k: 'ب', text: 'حتى لو كانت عملية اتخاذ القرار في الذكاء الاصطناعي غير واضحة، لا توجد مشكلة طالما أن النتيجة صحيحة.', ok: false, why: 'عندما تكون العملية غير واضحة يصعب التحقق مما إذا كانت النتيجة صحيحة أصلًا.' },
  { k: 'جـ', text: 'الذكاء الاصطناعي القابل للتفسير (XAI) هو تقنية تتيح للبشر فهم منطق الذكاء الاصطناعي.', ok: true, why: 'وصف صحيح للذكاء الاصطناعي القابل للتفسير.' },
  { k: 'د', text: 'عندما يتخذ الذكاء الاصطناعي حكمًا خاطئًا، فإن من هو المسؤول قد تم تحديده بوضوح بالفعل.', ok: false, why: 'تختلف الآراء بين المطوّر والمستخدم والمشغّل، ولم تُحدَّد بعد بوضوح.' },
]
const applyQs = [
  { icon: '✅', q: 'اذكر فائدة عملية واحدة للمدرسة.', a: 'تسجيل الحضور تلقائيًا بسرعة ودقة، وتوفير وقت المعلمين بدل النداء بالأسماء.', cls: 'border-emerald-400/40' },
  { icon: '🔐', q: 'اذكر مصدر قلق واحدًا يتعلق بالخصوصية.', a: 'جمع صور وجوه الطلاب وتخزينها؛ فمن يطّلع عليها؟ وكم تُحفظ؟ وهل تُستخدم لغرض آخر غير الحضور؟', cls: 'border-teal-400/40' },
  { icon: '🎯', q: 'إذا أخطأت الكاميرا في التعرف على طالب، من المسؤول: المدرسة أم الشركة؟', a: 'كلاهما وفق دوره: الشركة مسؤولة عن دقة النظام واختباره، والمدرسة مسؤولة عن تشغيله ومراجعة الأخطاء وتصحيحها.', cls: 'border-rose-400/40' },
]
const issues = [
  { t: '⚖️ نتائج غير عادلة', d: 'قد تنشأ من البيانات أو تصميم النظام أو طريقة استخدامه.', cls: 'border-amber-400/60' },
  { t: '🔐 مخاطر الخصوصية', d: 'قد يؤدي جمع البيانات وتحليلها إلى مخاطر على الخصوصية.', cls: 'border-teal-400/60' },
  { t: '⬛ التفسير والمسؤولية', d: 'قد يصعب تفسير بعض المخرجات أو تحديد المسؤولية عنها.', cls: 'border-slate-400/60' },
]
const terms = ['التحيز الخوارزمي', 'بيانات التدريب', 'الخصوصية', 'الصندوق الأسود', 'XAI', 'المسؤولية', 'المساءلة', 'العدالة', 'الشفافية', 'حماية الخصوصية']
</script>

<style scoped>
.cover-icon { animation: floaty 4s ease-in-out infinite; }
@keyframes floaty { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
.ring { animation: ring 2.2s ease-out infinite; }
@keyframes ring { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.5); opacity: 0 } }
.beam { transform-origin: center; transform: rotate(-6deg); animation: tilt 3.2s ease-in-out 1.4s infinite; }
@keyframes tilt { 0%, 100% { transform: rotate(-6deg) } 50% { transform: rotate(6deg) } }
/* beam half-length 260px x sin(6deg) = 27px of travel at each end */
.pan-r { animation: panR 3.2s ease-in-out 1.4s infinite; transform: translateY(-27px); }
.pan-l { animation: panL 3.2s ease-in-out 1.4s infinite; transform: translateY(27px); }
@keyframes panR { 0%, 100% { transform: translateY(-27px) } 50% { transform: translateY(27px) } }
@keyframes panL { 0%, 100% { transform: translateY(27px) } 50% { transform: translateY(-27px) } }
</style>
