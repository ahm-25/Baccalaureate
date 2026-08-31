<template>
  <section
    id="hero"
    class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white"
  >
    <!-- Abstract AI Decorations -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-1/4 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
      ></div>
      <div
        class="absolute top-1/3 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
      ></div>

      <!-- Grid pattern -->
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.5;
        "
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-block animate-fade-in-up">
          <span
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-sm font-bold mb-6 border border-purple-200 shadow-sm"
          >
            <span
              class="w-2 h-2 rounded-full bg-purple-600 mr-2 animate-pulse"
            ></span>
            الدرس 1-2
          </span>
        </div>

        <h1
          class="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight animate-fade-in-up animation-delay-100"
        >
          كيف يعمل
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
            >الذكاء الاصطناعي؟</span
          >
        </h1>

        <p
          class="text-2xl md:text-3xl font-medium text-gray-700 mb-6 animate-fade-in-up animation-delay-200"
        >
          من البيانات إلى التنبؤ... ومن التعلم إلى توليد محتوى جديد
        </p>

        <p
          class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300"
        >
          في هذا الدرس هتفهم يعني إيه ذكاء اصطناعي، وإزاي التعلم الآلي والتعلم
          العميق والذكاء الاصطناعي التوليدي مرتبطين ببعض.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400"
        >
          <button
            @click="scrollTo('objectives')"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span>ابدأ الدرس</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </button>

          <button
            @click="scrollTo('quiz')"
            class="px-8 py-4 bg-white text-purple-700 font-bold rounded-2xl shadow-md border border-purple-100 hover:bg-purple-50 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            اختبر معلوماتك
          </button>
        </div>
      </div>

      <!-- Illustration / Nodes -->
      <div
        class="mt-16 relative h-64 md:h-96 w-full max-w-3xl mx-auto animate-fade-in-up animation-delay-500"
      >
        <div
          class="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-3xl border border-white/60 shadow-2xl overflow-hidden flex items-center justify-center"
        >
          <!-- Simulated Neural Network Graphic -->
          <svg
            class="w-full h-full opacity-80"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <!-- Connections -->
            <line
              x1="200"
              y1="100"
              x2="400"
              y2="200"
              stroke="#a855f7"
              stroke-width="2"
              stroke-dasharray="5,5"
              class="animate-dash"
            />
            <line
              x1="200"
              y1="300"
              x2="400"
              y2="200"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-dasharray="5,5"
              class="animate-dash"
            />
            <line
              x1="400"
              y1="200"
              x2="600"
              y2="150"
              stroke="#14b8a6"
              stroke-width="2"
              stroke-dasharray="5,5"
              class="animate-dash"
            />
            <line
              x1="400"
              y1="200"
              x2="600"
              y2="250"
              stroke="#8b5cf6"
              stroke-width="2"
              stroke-dasharray="5,5"
              class="animate-dash"
            />

            <!-- Nodes -->
            <circle
              cx="200"
              cy="100"
              r="15"
              fill="#a855f7"
              class="animate-pulse"
            />
            <circle
              cx="200"
              cy="300"
              r="15"
              fill="#3b82f6"
              class="animate-pulse animation-delay-1000"
            />
            <circle
              cx="400"
              cy="200"
              r="25"
              fill="#ffffff"
              stroke="#8b5cf6"
              stroke-width="4"
            />
            <circle
              cx="600"
              cy="150"
              r="15"
              fill="#14b8a6"
              class="animate-pulse animation-delay-2000"
            />
            <circle
              cx="600"
              cy="250"
              r="15"
              fill="#8b5cf6"
              class="animate-pulse animation-delay-500"
            />

            <!-- Data packets -->
            <circle cx="200" cy="100" r="4" fill="#fff">
              <animateMotion
                path="M 0 0 L 200 100"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="200" cy="300" r="4" fill="#fff">
              <animateMotion
                path="M 0 0 L 200 -100"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-100 {
  animation-delay: 100ms;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
.animation-delay-400 {
  animation-delay: 400ms;
}
.animation-delay-500 {
  animation-delay: 500ms;
}
.animation-delay-1000 {
  animation-delay: 1000ms;
}
.animation-delay-2000 {
  animation-delay: 2000ms;
}
.animation-delay-4000 {
  animation-delay: 4000ms;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-dash {
  animation: dash 3s linear infinite;
}
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
