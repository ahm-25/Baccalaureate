<template>
  <section id="console-log" class="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center bg-surface">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-maintext mb-6">أمثلة على <span dir="ltr" class="font-mono text-primary">console.log()</span></h2>
        <p class="text-2xl text-mutedtext">
          لغة JavaScript بتنفذ الأوامر اللي بنديها لها بالترتيب. خلينا نشوف أمثلة:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <!-- Example 1 -->
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-lg font-bold text-maintext mb-4">مثال 1: طباعة نص عادي</h3>
          <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-sm text-gray-300" dir="ltr">
            <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Hello World"</span>);
          </div>
          <div class="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <span class="text-xs text-gray-500 font-bold uppercase block mb-1">Output:</span>
            <span class="font-mono text-gray-800">Hello World</span>
          </div>
        </div>

        <!-- Example 2 -->
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-lg font-bold text-maintext mb-4">مثال 2: طباعة اسمك</h3>
          <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-sm text-gray-300" dir="ltr">
            <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Ahmed"</span>);
          </div>
          <div class="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <span class="text-xs text-gray-500 font-bold uppercase block mb-1">Output:</span>
            <span class="font-mono text-gray-800">Ahmed</span>
          </div>
        </div>

        <!-- Example 3 -->
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-lg font-bold text-maintext mb-4">مثال 3: طباعة رقم</h3>
          <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-sm text-gray-300" dir="ltr">
            <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-orange-400">20</span>);
          </div>
          <div class="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <span class="text-xs text-gray-500 font-bold uppercase block mb-1">Output:</span>
            <span class="font-mono text-blue-600">20</span>
          </div>
        </div>

        <!-- Example 4 -->
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-lg font-bold text-maintext mb-4">مثال 4: رسالة ترحيب</h3>
          <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-sm text-gray-300" dir="ltr">
            <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Welcome to JavaScript"</span>);
          </div>
          <div class="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <span class="text-xs text-gray-500 font-bold uppercase block mb-1">Output:</span>
            <span class="font-mono text-gray-800">Welcome to JavaScript</span>
          </div>
        </div>

        <!-- Example 5 -->
        <div class="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-lg font-bold text-maintext mb-4">مثال 5: حقيقة البرمجة!</h3>
          <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-sm text-gray-300" dir="ltr">
            <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Programming is fun!"</span>);
          </div>
          <div class="bg-gray-100 rounded-xl p-3 border border-gray-200">
            <span class="text-xs text-gray-500 font-bold uppercase block mb-1">Output:</span>
            <span class="font-mono text-gray-800">Programming is fun!</span>
          </div>
        </div>
      </div>

      <!-- TEXT VS NUMBERS -->
      <div class="bg-white rounded-[3rem] shadow-2xl border border-border overflow-hidden">
        <div class="bg-primary/5 p-10 text-center border-b border-border">
          <h2 class="text-4xl font-black text-maintext mb-4">إيه الفرق بين النص والرقم؟ (Text vs Numbers)</h2>
          <p class="text-xl text-mutedtext max-w-2xl mx-auto">
            في البرمجة، الكمبيوتر بيفرق جداً بين الكلمات (النصوص) والأرقام.
          </p>
        </div>
        
        <div class="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- STRING -->
          <div class="bg-green-50 p-8 rounded-3xl border border-green-200">
            <h3 class="text-2xl font-black text-green-700 mb-6 text-center">String (نص)</h3>
            <div class="bg-gray-900 rounded-xl p-4 mb-6 font-mono text-center text-lg text-gray-300" dir="ltr">
              <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"100"</span>);
            </div>
            <p class="text-lg text-green-900 font-bold leading-relaxed text-center mb-6">
              "100" هنا عبارة عن <span class="bg-green-200 px-2 py-1 rounded">نص</span> لأن الرقم مكتوب بين علامتين تنصيص (quotation marks).
            </p>
            <div class="flex items-center justify-center gap-4 text-lg font-bold text-green-800 bg-white py-3 rounded-xl">
              <span dir="ltr" class="font-mono">"100"</span> <span>→</span> <span>String</span> <span>→</span> <span>Text</span>
            </div>
          </div>

          <!-- NUMBER -->
          <div class="bg-blue-50 p-8 rounded-3xl border border-blue-200">
            <h3 class="text-2xl font-black text-blue-700 mb-6 text-center">Number (رقم)</h3>
            <div class="bg-gray-900 rounded-xl p-4 mb-6 font-mono text-center text-lg text-gray-300" dir="ltr">
              <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-orange-400">100</span>);
            </div>
            <p class="text-lg text-blue-900 font-bold leading-relaxed text-center mb-6">
              100 هنا عبارة عن <span class="bg-blue-200 px-2 py-1 rounded">رقم حقيقي</span> ويمكن استخدامه في العمليات الحسابية.
            </p>
            <div class="flex items-center justify-center gap-4 text-lg font-bold text-blue-800 bg-white py-3 rounded-xl">
              <span dir="ltr" class="font-mono text-blue-600">100</span> <span>→</span> <span>Number</span> <span>→</span> <span>Numeric value</span>
            </div>
          </div>
        </div>

        <!-- The Big Difference -->
        <div class="bg-surface p-10 border-t border-border">
          <h3 class="text-3xl font-black text-maintext mb-8 text-center">طيب إيه اللي هيحصل لو جمعناهم؟</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 class="font-bold text-lg text-mutedtext mb-4 text-center">جمع نصوص (Strings)</h4>
              <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-center text-gray-300" dir="ltr">
                <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"100"</span> + <span class="text-green-400">"20"</span>);
              </div>
              <div class="bg-gray-100 rounded-xl p-4 text-center mb-4 border border-gray-200">
                <span class="text-sm text-gray-500 font-bold uppercase block mb-1">Output:</span>
                <span class="font-mono text-xl font-bold text-maintext">10020</span>
              </div>
              <p class="text-center font-bold text-maintext/80">JavaScript لزقت الكلمتين في بعض!</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h4 class="font-bold text-lg text-mutedtext mb-4 text-center">جمع أرقام (Numbers)</h4>
              <div class="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-center text-gray-300" dir="ltr">
                <span class="text-blue-400">console</span>.<span class="text-yellow-300">log</span>(<span class="text-orange-400">100</span> + <span class="text-orange-400">20</span>);
              </div>
              <div class="bg-green-50 rounded-xl p-4 text-center mb-4 border border-green-200">
                <span class="text-sm text-green-600 font-bold uppercase block mb-1">Output:</span>
                <span class="font-mono text-xl font-black text-green-700">120</span>
              </div>
              <p class="text-center font-bold text-maintext/80">JavaScript عملت عملية حسابية حقيقية!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static content
</script>
