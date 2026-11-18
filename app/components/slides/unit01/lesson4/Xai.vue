<template>
  <!-- XAI and responsibility. f = 0 the black box (no explanation), 1 XAI shows the factors,
       2 responsibility (who does what), 3 accountability vs XAI vs transparency. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="titles[f]!.icon" :title="titles[f]!.title" :sub="titles[f]!.sub" />

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0 / f1: the same hiring decision, opaque then explained ───── -->
      <div v-if="f <= 1" :key="`box${f}`" class="absolute inset-0">
        <!-- application -->
        <div class="absolute left-[980px] top-[190px] w-[240px] sl-in" style="--d: .3s" dir="rtl">
          <div class="rounded-2xl border-2 border-sky-400/60 bg-slate-900/90 px-4 py-3">
            <div class="text-[18px] font-black text-sky-300 mb-1">📄 طلب توظيف</div>
            <div class="text-[16px] font-bold text-slate-200 leading-snug">الخبرة · المؤهل · المهارات…</div>
          </div>
        </div>
        <div class="absolute left-[880px] top-[230px] text-4xl text-slate-500 sl-in" style="--d: .9s">←</div>
        <!-- the model -->
        <div class="absolute left-[500px] top-[160px] w-[360px] h-[220px] rounded-3xl border-4 flex items-center justify-center sl-pop"
             :class="f === 0 ? 'bg-black border-slate-600' : 'bg-sky-950/40 border-sky-400 glass'" style="--d: .5s" dir="rtl">
          <template v-if="f === 0">
            <span class="text-[96px] font-black text-slate-700">؟</span>
            <span class="absolute bottom-3 text-[16px] font-black text-slate-400">⬛ صندوق أسود</span>
          </template>
          <div v-else class="w-[310px] flex flex-col gap-2.5">
            <div class="text-[16px] font-black text-sky-200 text-center mb-0.5">🔍 العوامل التي أسهمت في القرار</div>
            <div v-for="(fc, i) in factors" :key="fc.t" class="flex items-center gap-2 sl-in" :style="{ '--d': `${1.3 + i * 0.5}s` }">
              <span class="w-[110px] text-[16px] font-black text-white">{{ fc.t }}</span>
              <div class="flex-1 h-[20px] rounded-md bg-slate-800 overflow-hidden">
                <div class="bar h-full rounded-md" :class="fc.cls" :style="{ '--w': fc.w, '--d': `${1.5 + i * 0.5}s` }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute left-[420px] top-[230px] text-4xl text-slate-500 sl-in" style="--d: 2.4s">←</div>
        <!-- decision -->
        <div class="absolute left-[80px] top-[205px] w-[310px] sl-pop" style="--d: 2.8s" dir="rtl">
          <div class="rounded-2xl border-2 border-rose-400 bg-rose-950/70 px-5 py-3 text-[24px] font-black text-rose-100 text-center">✗ تم رفض الطلب</div>
        </div>
        <div class="absolute left-[80px] top-[290px] w-[310px] sl-in text-center" style="--d: 3.6s" dir="rtl">
          <span v-if="f === 0" class="text-[20px] font-black text-amber-200">لماذا؟ 🤷 لا أحد يستطيع الشرح</span>
          <span v-else class="inline-block rounded-2xl border-2 border-emerald-400/60 bg-emerald-950/50 px-4 py-2 whitespace-nowrap"><span class="block text-[19px] font-black text-emerald-200">✓ السبب: خبرة أقل من المطلوب</span><span class="block text-[16px] font-bold text-slate-200">فيمكن مراجعته واكتشاف أي خطأ أو تحيز</span></span>
        </div>
        <!-- bottom card -->
        <div class="absolute top-[440px] inset-x-0 flex justify-center">
          <div v-if="f === 0" class="sl-in sl-card border-slate-400/60 px-8 py-4 max-w-[1120px] text-center text-[22px] font-bold text-white leading-relaxed" style="--d: 4.4s" dir="rtl">
            عندما تكون آلية الوصول إلى النتيجة غير واضحة،
            <span class="sl-hl-amber">يصعب تقييمها واكتشاف الأخطاء أو التحيز</span>.
          </div>
          <div v-else class="sl-in sl-card border-sky-400/70 px-8 py-4 max-w-[1120px] text-center text-[22px] font-bold text-white leading-relaxed" style="--d: 4.4s" dir="rtl">
            <span class="font-black text-sky-300">الذكاء الاصطناعي القابل للتفسير (XAI):</span>
            أساليب تساعد البشر على <span class="sl-hl-green">فهم العوامل التي أسهمت في وصول النظام إلى مخرج أو قرار معين</span>.
          </div>
        </div>
      </div>

      <!-- ───── f2: responsibility ───── -->
      <div v-else-if="f === 2" key="resp" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-amber-400/70 px-8 py-3 text-[21px] font-bold text-white text-center max-w-[1120px] leading-relaxed" style="--d: .3s">
            <span class="font-black text-amber-300">المسؤولية:</span> تحديد أدوار وواجبات الأطراف المرتبطة بتطوير النظام وتشغيله واستخدامه.
          </div>
        </div>
        <div class="absolute top-[250px] inset-x-0 flex justify-center gap-7">
          <div v-for="(r, i) in roles" :key="r.name" class="sl-pop w-[340px] rounded-3xl border-2 bg-slate-900/85 px-5 py-4 flex flex-col items-center text-center" :class="r.cls"
               :style="{ '--d': `${1 + i * 0.8}s` }">
            <span class="w-[80px] h-[80px] rounded-full border-4 flex items-center justify-center text-[42px] mb-2" :class="r.ring">{{ r.icon }}</span>
            <span class="text-[24px] font-black text-white">{{ r.name }}</span>
            <span class="text-[17px] font-bold text-slate-300 mb-2">{{ r.stage }}</span>
            <span class="sl-in text-[17px] font-bold text-slate-200 leading-snug rounded-xl bg-white/5 px-3 py-2" :style="{ '--d': `${3.6 + i * 0.5}s` }">💡 {{ r.duty }}</span>
          </div>
        </div>
        <div class="absolute top-[520px] inset-x-0 flex justify-center">
          <div class="sl-in rounded-2xl border-2 border-violet-400/60 bg-violet-950/50 px-7 py-2.5 text-[19px] font-black text-violet-100 text-center" style="--d: 5.6s">
            ⚠️ لا يوجد توزيع واحد للمسؤولية يصلح لكل السياقات؛ يختلف باختلاف النظام والاستخدام والقواعد المعمول بها.
          </div>
        </div>
      </div>

      <!-- ───── f3: accountability vs XAI vs transparency ───── -->
      <div v-else key="acc" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[150px] inset-x-0 flex justify-center gap-5">
          <div v-for="(c, i) in concepts" :key="c.name" class="sl-in w-[365px] rounded-3xl border-2 bg-slate-900/85 px-5 py-4 flex flex-col" :class="c.cls"
               :style="{ '--d': `${0.3 + i * 1.6}s` }">
            <div class="flex items-center gap-3 mb-2"><span class="text-4xl">{{ c.icon }}</span><span class="text-[24px] font-black" :class="c.text">{{ c.name }}</span></div>
            <div class="rounded-2xl bg-white/5 px-4 py-2.5 mb-2.5 text-center">
              <div class="text-[15px] font-bold text-slate-400">يجيب عن سؤال:</div>
              <div class="text-[21px] font-black text-white">«{{ c.q }}»</div>
            </div>
            <p class="text-[17px] font-bold text-slate-200 leading-relaxed">{{ c.def }}</p>
          </div>
        </div>
        <div class="absolute top-[492px] inset-x-0 flex justify-center">
          <div class="sl-in sl-card border-rose-400/70 px-8 py-3.5 max-w-[1120px] text-center text-[21px] font-bold text-white leading-relaxed" style="--d: 5.4s">
            ⚠️ <span class="font-black text-rose-300">انتبه:</span> المساءلة <span class="sl-hl-amber">ليست القدرة على شرح القرار</span> — تلك وظيفة XAI —
            بل <span class="sl-hl-green">تحديد من يُحاسَب على النتيجة</span>.
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

const titles = [
  { icon: '⬛', title: 'مشكلة الصندوق الأسود', sub: 'قرار بلا تفسير' },
  { icon: '🔍', title: 'الذكاء الاصطناعي القابل للتفسير', sub: 'Explainable AI — XAI' },
  { icon: '🧩', title: 'المسؤولية', sub: 'من يجيب عندما يخطئ الذكاء الاصطناعي؟' },
  { icon: '🎯', title: 'المساءلة والشفافية و XAI', sub: 'ثلاثة مفاهيم… ثلاثة أسئلة مختلفة' },
]
const factors = [
  { t: 'سنوات الخبرة', w: '90%', cls: 'bg-rose-500' },
  { t: 'المؤهل', w: '35%', cls: 'bg-amber-400' },
  { t: 'المهارات', w: '25%', cls: 'bg-sky-400' },
]
const roles = [
  { icon: '💻', name: 'المطوّر', stage: 'تطوير النظام', duty: 'مثلًا: يختبر النظام ويفحص بياناته بحثًا عن التحيز.', cls: 'border-sky-400/60', ring: 'border-sky-400 bg-sky-950' },
  { icon: '🏢', name: 'الجهة المشغّلة', stage: 'تشغيل النظام', duty: 'مثلًا: تراقب نتائجه وتصحح أخطاءه.', cls: 'border-violet-400/60', ring: 'border-violet-400 bg-violet-950' },
  { icon: '👤', name: 'المستخدم', stage: 'استخدام النظام', duty: 'مثلًا: يستخدمه فيما صُمم له ويراجع مخرجاته.', cls: 'border-emerald-400/60', ring: 'border-emerald-400 bg-emerald-950' },
]
const concepts = [
  { icon: '🔍', name: 'XAI', q: 'لماذا اتخذ النظام هذا القرار؟', def: 'أساليب تساعد البشر على فهم العوامل التي أسهمت في المخرج أو القرار.', cls: 'border-sky-400/60', text: 'text-sky-300' },
  { icon: '🎯', name: 'المساءلة', q: 'من يُحاسَب على النتيجة؟', def: 'تحديد الجهات المسؤولة عن النظام وقراراته وآثاره، وإمكان محاسبتها وفق أدوارها.', cls: 'border-amber-400/60', text: 'text-amber-300' },
  { icon: '👁️', name: 'الشفافية', q: 'ماذا نعرف عن النظام؟', def: 'إتاحة معلومات واضحة ومناسبة عن النظام واستخدامه وعملية اتخاذ القرار وحدوده.', cls: 'border-emerald-400/60', text: 'text-emerald-300' },
]
</script>

<style scoped>
.bar { width: 0; animation: grow 1s cubic-bezier(.2,.8,.2,1) var(--d) forwards; }
@keyframes grow { to { width: var(--w) } }
.glass { box-shadow: 0 0 50px rgba(56,189,248,.35), inset 0 0 30px rgba(56,189,248,.15); }
</style>
