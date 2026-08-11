<template>
  <section id="programming-decisions" class="py-20 bg-background relative border-b border-border">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
        <span>🤖</span> البرامج بتاخد قرارات
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        إزاي البرنامج بيفكر؟
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-16">
        البرنامج ممكن يشوف قيمة معينة،
        <br>
        وبناءً عليها يقرر يعمل إيه.
      </p>

      <div class="bg-surface rounded-3xl p-8 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8" dir="ltr">
        <!-- Flow Visual -->
        <div class="flex-1 flex flex-col items-center justify-center w-full">
          <!-- Data -->
          <div class="bg-blue-500/10 border border-blue-500/30 text-blue-500 font-mono font-bold px-6 py-3 rounded-xl w-48 text-center animate-pulse" style="animation-duration: 3s">
            DATA<br><span class="text-sm opacity-80">age = 18</span>
          </div>
          <div class="text-blue-500 font-bold my-2 text-xl">↓</div>

          <!-- Condition -->
          <div class="bg-purple-500/10 border border-purple-500/30 text-purple-500 font-mono font-bold px-6 py-3 rounded-xl w-48 text-center">
            CONDITION<br><span class="text-sm opacity-80">Is age >= 18?</span>
          </div>
          <div class="text-purple-500 font-bold my-2 text-xl">↓</div>

          <!-- Decision -->
          <div class="bg-primary/10 border border-primary/30 text-primary font-mono font-bold px-6 py-3 rounded-xl w-48 text-center">
            DECISION<br><span class="text-sm opacity-80">Yes</span>
          </div>
          <div class="text-primary font-bold my-2 text-xl">↓</div>

          <!-- Action -->
          <div class="bg-green-500/10 border border-green-500/30 text-green-500 font-mono font-bold px-6 py-3 rounded-xl w-48 text-center">
            ACTION<br><span class="text-sm opacity-80">"Adult"</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
