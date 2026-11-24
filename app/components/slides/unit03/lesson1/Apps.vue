<template>
  <!-- Familiar web apps through the three-layer model. f = 0 video sharing, 1 social network, 2 online shop,
       3 stop & think: the structure stays the same, only the content of each layer changes. -->
  <div class="absolute inset-0">
    <SlidesTitle :icon="f === 3 ? '💡' : '📱'" :title="f === 3 ? 'توقف وفكر' : 'تطبيقات ويب مألوفة'"
                 :sub="f === 3 ? 'كل خدمة تستخدم نفس الطبقات الثلاث… فما الذي يتغيّر؟' : 'نفس النموذج المبسط يساعدنا على فهم توزيع المهام'" />

    <!-- service tabs -->
    <div v-if="f <= 2" class="absolute top-[146px] inset-x-0 flex justify-center gap-3" dir="rtl">
      <span v-for="(s, i) in services" :key="s.name" class="sl-badge !text-[20px] transition-all duration-500"
            :class="i === f ? 'border-white bg-white text-slate-900 scale-105' : 'border-white/15 bg-slate-900/60 text-slate-400'">
        {{ s.icon }} {{ s.name }}
      </span>
    </div>

    <Transition name="sl-frame" mode="out-in">
      <!-- ───── f0..f2: one service ───── -->
      <div v-if="f <= 2" :key="`svc-${f}`" class="absolute top-[218px] inset-x-0 flex justify-center gap-5" dir="rtl">
        <div v-for="(c, ci) in columns" :key="c.key" class="sl-in w-[360px] h-[290px] rounded-3xl border-2 px-6 py-5"
             :class="c.cls" :style="{ '--d': `${0.3 + ci * 1.6}s` }">
          <div class="flex items-center gap-3 mb-1">
            <span class="text-[38px] leading-none">{{ c.icon }}</span>
            <div>
              <div class="text-[25px] font-black text-white">{{ c.name }}</div>
              <div class="text-[16px] font-bold" :class="c.sub">{{ c.role }}</div>
            </div>
          </div>
          <div class="h-px bg-white/10 my-3"></div>
          <ul class="space-y-3">
            <li v-for="(t, ti) in split(services[f]![c.key])" :key="t" class="sl-in flex gap-2 text-[21px] font-bold text-slate-100 leading-snug"
                :style="{ '--d': `${0.8 + ci * 1.6 + ti * 0.5}s` }">
              <span :class="c.sub">◂</span> {{ t }}
            </li>
          </ul>
        </div>
      </div>

      <!-- ───── f3: same structure, different content ───── -->
      <div v-else key="same" class="absolute inset-0" dir="rtl">
        <div class="absolute top-[148px] inset-x-0 flex justify-center">
          <div class="grid grid-cols-[290px_repeat(3,270px)] gap-2.5">
            <div class="sl-fade h-[54px] flex items-center justify-center text-[19px] font-black text-slate-400" style="--d: .2s">الخدمة</div>
            <div v-for="(c, ci) in columns" :key="c.key" class="sl-pop h-[54px] rounded-2xl border-2 flex items-center justify-center gap-2 text-[21px] font-black text-white"
                 :class="c.cls" :style="{ '--d': `${0.3 + ci * 0.25}s` }">
              {{ c.icon }} {{ c.name }}
            </div>
            <template v-for="(s, si) in services" :key="s.name">
              <div class="sl-in h-[66px] rounded-2xl border-2 border-white/15 bg-slate-800/80 flex items-center justify-center gap-2 text-[20px] font-black text-white whitespace-nowrap"
                   :style="{ '--d': `${1.2 + si * 0.9}s` }">{{ s.icon }} {{ s.name }}</div>
              <div v-for="(c, ci) in columns" :key="c.key" class="sl-in h-[66px] rounded-2xl border border-white/10 bg-slate-900/80 flex items-center justify-center px-3 text-center text-[18px] font-bold text-slate-200 leading-snug"
                   :style="{ '--d': `${1.4 + si * 0.9 + ci * 0.15}s` }">{{ s.short[ci] }}</div>
            </template>
          </div>
        </div>
        <div class="absolute top-[452px] inset-x-0 flex justify-center gap-4">
          <div class="sl-in w-[420px] rounded-3xl border-2 border-emerald-400/60 bg-emerald-950/50 px-6 py-3" style="--d: 4.4s">
            <div class="text-[19px] font-black text-emerald-300">🔁 يبقى ثابتًا</div>
            <p class="text-[20px] font-bold text-white leading-snug">البنية نفسها: عرض، ومعالجة، وتخزين</p>
          </div>
          <div class="sl-in w-[640px] rounded-3xl border-2 border-amber-400/60 bg-amber-950/40 px-6 py-3" style="--d: 5.4s">
            <div class="text-[19px] font-black text-amber-300">✨ يتغيّر</div>
            <p class="text-[20px] font-bold text-white leading-snug">محتوى كل طبقة: ما يُعرض، والقواعد المطبقة، ونوع البيانات المخزنة</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import SlidesTitle from '~/components/slides/Title.vue'

defineProps<{ f: number }>()

type Key = 'front' | 'back' | 'data'
const columns: { key: Key; icon: string; name: string; role: string; cls: string; sub: string }[] = [
  { key: 'front', icon: '🖥️', name: 'الواجهة الأمامية', role: 'العرض والتفاعل', cls: 'border-violet-400/70 bg-violet-950/50', sub: 'text-violet-300' },
  { key: 'back', icon: '⚙️', name: 'الواجهة الخلفية', role: 'المعالجة والتحكم', cls: 'border-amber-400/70 bg-amber-950/40', sub: 'text-amber-300' },
  { key: 'data', icon: '🗄️', name: 'قاعدة البيانات', role: 'التخزين والإدارة', cls: 'border-sky-400/70 bg-sky-950/50', sub: 'text-sky-300' },
]

// the book's table; `؛` separates the bullet points of a cell
const services = [
  {
    icon: '🎬', name: 'موقع مشاركة الفيديو',
    front: 'عرض شاشات تشغيل الفيديو والبحث؛ استقبال إجراءات المستخدم',
    back: 'اختيار الفيديوهات الموصى بها؛ تجميع عدد المشاهدات',
    data: 'تخزين بيانات الفيديو، ومعلومات المستخدمين، وسجل المشاهدة',
    short: ['شاشة التشغيل والبحث', 'التوصيات وعدد المشاهدات', 'الفيديوهات وسجل المشاهدة'],
  },
  {
    icon: '💬', name: 'شبكة التواصل الاجتماعي',
    front: 'عرض الخط الزمني وشاشات النشر؛ إرسال المحتوى المُدخل',
    back: 'تحديد الجمهور المستهدف للمنشورات؛ التحكم في الإشعارات الفورية',
    data: 'تخزين بيانات المنشورات، وعلاقات المتابعة، والرسائل',
    short: ['الخط الزمني وشاشات النشر', 'الجمهور المستهدف والإشعارات', 'المنشورات والمتابعة والرسائل'],
  },
  {
    icon: '🛒', name: 'موقع تجارة إلكترونية',
    front: 'عرض قوائم المنتجات وشاشات سلة التسوق؛ استقبال عمليات الطلب',
    back: 'التحقق من المخزون؛ إرسال طلبات الدفع والتعامل مع نتائجها',
    data: 'تخزين معلومات المنتجات، وسجل الطلبات، ومعلومات العملاء',
    short: ['المنتجات وسلة التسوق', 'المخزون والدفع', 'المنتجات والطلبات والعملاء'],
  },
]

const split = (t: string) => t.split('؛').map(x => x.trim())
</script>
