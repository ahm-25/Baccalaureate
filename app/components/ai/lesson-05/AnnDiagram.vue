<template>
  <div class="my-12 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-700 group">
    <div class="text-center mb-8">
      <h4 class="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <span class="text-3xl">🧠</span> الشبكات العصبية الاصطناعية
      </h4>
      <p class="text-gray-500 mt-2 text-sm font-medium">مرر الماوس فوق العقد (الدوائر) لترى كيف تتدفق الإشارات عبر الطبقات</p>
    </div>

    <!-- Diagram Canvas -->
    <div class="w-full relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-4 border border-gray-100 shadow-inner">
      <svg viewBox="0 0 800 380" class="w-full h-auto overflow-visible">
        <defs>
          <filter id="glow-ann" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Lines -->
        <g v-for="(layer, lIdx) in layers" :key="'lines-'+lIdx">
          <template v-if="lIdx < layers.length - 1">
            <template v-for="n1 in layer.nodes" :key="'l1-'+n1">
              <template v-for="n2 in layers[lIdx+1].nodes" :key="'l2-'+n2">
                <line 
                  :x1="getX(lIdx)" 
                  :y1="getY(layer.nodes, n1)" 
                  :x2="getX(lIdx+1)" 
                  :y2="getY(layers[lIdx+1].nodes, n2)" 
                  stroke="#e2e8f0" 
                  :stroke-width="isActiveLine(lIdx, n1, lIdx+1, n2) ? 2.5 : 1.5"
                  class="transition-all duration-300"
                  :class="isActiveLine(lIdx, n1, lIdx+1, n2) ? 'stroke-blue-400' : 'opacity-60'"
                />
                
                <!-- Flow animation -->
                <circle 
                  v-if="isActiveLine(lIdx, n1, lIdx+1, n2)" 
                  r="4" 
                  fill="#60a5fa"
                  filter="url(#glow-ann)"
                >
                  <animateMotion 
                    dur="1s" 
                    repeatCount="indefinite" 
                    :path="`M${getX(lIdx)},${getY(layer.nodes, n1)} L${getX(lIdx+1)},${getY(layers[lIdx+1].nodes, n2)}`" 
                  />
                </circle>
              </template>
            </template>
          </template>
        </g>

        <!-- Nodes -->
        <g v-for="(layer, lIdx) in layers" :key="'nodes-'+lIdx">
          <!-- Layer Labels -->
          <text 
            :x="getX(lIdx)" 
            y="360" 
            text-anchor="middle" 
            class="text-sm md:text-base font-bold fill-gray-600"
            style="font-family: inherit;"
          >
            {{ layer.name }}
          </text>

          <circle 
            v-for="n in layer.nodes" 
            :key="'node-'+n"
            :cx="getX(lIdx)"
            :cy="getY(layer.nodes, n)"
            :r="isHoveredNode(lIdx, n) ? 14 : 10"
            class="transition-all duration-300 cursor-pointer stroke-white stroke-[3px]"
            :class="isActiveNode(lIdx, n) ? 'fill-blue-500 filter drop-shadow-md' : 'fill-blue-800 hover:fill-blue-400'"
            @mouseenter="hoverNode(lIdx, n)"
            @mouseleave="unhoverNode()"
          />
        </g>
      </svg>
    </div>

    <!-- Description -->
    <div class="mt-10 text-center px-4">
      <p class="text-lg font-bold text-gray-700 mb-2">نموذج مبسط يوضح كيفية ترابط الطبقات العصبية من المدخلات إلى المخرجات.</p>
      <p class="text-gray-500 font-medium">كل طبقة تعالج البيانات بطريقة تساعد النموذج على اكتشاف الأنماط.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const layers = [
  { name: 'طبقة الإدخال', nodes: 3 },
  { name: 'طبقة مخفية', nodes: 5 },
  { name: 'طبقة مخفية', nodes: 5 },
  { name: 'طبقة الإخراج', nodes: 3 },
];

const hoveredLIdx = ref<number | null>(null);
const hoveredNIdx = ref<number | null>(null);

const activePath = ref<{ nodes: number[] } | null>(null);
let interval: any;

const getX = (layerIdx: number) => {
  const width = 800;
  const padding = 100;
  const spacing = (width - 2 * padding) / (layers.length - 1);
  return padding + layerIdx * spacing;
};

const getY = (totalNodes: number, nodeIdx: number) => {
  const height = 310;
  const padding = 20;
  const maxNodes = Math.max(...layers.map(l => l.nodes));
  const spacing = (height - 2 * padding) / (maxNodes - 1);
  const layerHeight = (totalNodes - 1) * spacing;
  const startY = padding + (height - 2 * padding - layerHeight) / 2;
  return startY + (nodeIdx - 1) * spacing;
};

const hoverNode = (lIdx: number, nIdx: number) => {
  hoveredLIdx.value = lIdx;
  hoveredNIdx.value = nIdx;
};

const unhoverNode = () => {
  hoveredLIdx.value = null;
  hoveredNIdx.value = null;
};

const isHoveredNode = (lIdx: number, nIdx: number) => {
  return hoveredLIdx.value === lIdx && hoveredNIdx.value === nIdx;
};

const isActiveNode = (lIdx: number, nIdx: number) => {
  if (hoveredLIdx.value !== null) {
    if (hoveredLIdx.value === lIdx && hoveredNIdx.value === nIdx) return true;
    if (lIdx === hoveredLIdx.value + 1) return true;
    if (lIdx === hoveredLIdx.value - 1) return true;
    return false;
  }
  if (activePath.value) {
    return activePath.value.nodes[lIdx] === nIdx;
  }
  return false;
};

const isActiveLine = (lIdx1: number, n1: number, lIdx2: number, n2: number) => {
  if (hoveredLIdx.value !== null) {
    if (lIdx1 === hoveredLIdx.value && n1 === hoveredNIdx.value) return true;
    if (lIdx2 === hoveredLIdx.value && n2 === hoveredNIdx.value) return true;
    return false;
  }
  if (activePath.value) {
    return activePath.value.nodes[lIdx1] === n1 && activePath.value.nodes[lIdx2] === n2;
  }
  return false;
};

const generateRandomPath = () => {
  const path = [];
  for (let l = 0; l < layers.length; l++) {
    const randomNode = Math.floor(Math.random() * layers[l].nodes) + 1;
    path.push(randomNode);
  }
  activePath.value = { nodes: path };
};

onMounted(() => {
  // Start a random flowing path to make the component look alive
  generateRandomPath();
  interval = setInterval(() => {
    if (hoveredLIdx.value === null) {
      generateRandomPath();
    }
  }, 2500);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
