<template>
  <section id="decision-visualizer" class="py-20 bg-surface relative border-b border-border overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 w-full text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
        <span>🌳</span> شجرة القرارات
      </div>
      
      <h2 class="text-4xl md:text-5xl font-black text-maintext mb-6">
        جرب شجرة القرارات
      </h2>
      
      <p class="text-2xl text-mutedtext leading-relaxed mb-12">
        غير الدرجة وشوف الكود هيقرر يروح فين في الوقت الفعلي.
      </p>

      <div class="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-xl">
        <!-- Input Control -->
        <div class="flex items-center justify-center gap-6 mb-12" dir="rtl">
          <label class="text-xl font-bold text-maintext">الدرجة (Score):</label>
          <input 
            type="number" 
            v-model="score" 
            class="w-32 text-center text-3xl font-black font-mono bg-surface border-2 border-border rounded-xl py-2 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <!-- Interactive Flow -->
        <div class="relative max-w-xl mx-auto font-mono" dir="ltr">
           
           <div class="flex justify-center">
             <div class="bg-surface border-2 border-border p-4 rounded-xl font-bold text-xl mb-4 transition-colors">
               score = {{ score }}
             </div>
           </div>

           <!-- First Condition -->
           <div class="flex justify-center relative">
             <div class="w-1 h-6 bg-border"></div>
           </div>
           
           <div class="flex justify-center relative z-10">
             <div class="bg-background border-2 py-3 px-6 rounded-xl font-bold text-lg transition-colors"
                  :class="score >= 90 ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-red-500 text-red-500 opacity-50'">
               score >= 90
             </div>
           </div>

           <!-- Path from First Condition -->
           <div class="flex relative h-12 w-full max-w-[200px] mx-auto">
              <div class="w-1/2 flex justify-start items-center relative">
                 <div class="absolute left-0 top-0 w-full h-1" :class="score >= 90 ? 'bg-green-500' : 'bg-border'"></div>
                 <div class="absolute left-0 top-0 w-1 h-full" :class="score >= 90 ? 'bg-green-500' : 'bg-border'"></div>
                 <span class="absolute -left-12 top-4 font-bold text-xs" :class="score >= 90 ? 'text-green-500' : 'text-mutedtext'">TRUE</span>
              </div>
              <div class="w-1/2 flex justify-end items-center relative">
                 <div class="absolute right-0 top-0 w-full h-1" :class="score < 90 ? 'bg-red-500' : 'bg-border'"></div>
                 <div class="absolute right-0 top-0 w-1 h-full" :class="score < 90 ? 'bg-red-500' : 'bg-border'"></div>
                 <span class="absolute -right-12 top-4 font-bold text-xs" :class="score < 90 ? 'text-red-500' : 'text-mutedtext'">FALSE</span>
              </div>
           </div>

           <!-- Outcomes Row 1 -->
           <div class="flex w-full justify-between items-start">
             <!-- True outcome 1 -->
             <div class="w-1/2 flex justify-start -ml-16">
               <div class="bg-green-500/10 text-green-500 border border-green-500/30 px-4 py-2 rounded-xl transition-all"
                    :class="score >= 90 ? 'scale-110 font-bold shadow-lg opacity-100' : 'opacity-30 scale-90'">
                 "Excellent"
               </div>
             </div>
             <!-- Next condition -->
             <div class="w-1/2 flex justify-end -mr-16">
               <div class="bg-background border-2 py-3 px-6 rounded-xl font-bold text-lg transition-colors"
                    :class="score < 90 && score >= 70 ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : (score < 70 ? 'border-red-500 text-red-500 opacity-50' : 'border-border text-mutedtext opacity-30')">
                 score >= 70
               </div>
             </div>
           </div>

           <!-- Path from Second Condition -->
           <div class="flex relative h-12 w-full max-w-[200px] ml-auto -mr-16 mt-2">
              <div class="w-1/2 flex justify-start items-center relative">
                 <div class="absolute left-0 top-0 w-full h-1" :class="score < 90 && score >= 70 ? 'bg-green-500' : 'bg-border'"></div>
                 <div class="absolute left-0 top-0 w-1 h-full" :class="score < 90 && score >= 70 ? 'bg-green-500' : 'bg-border'"></div>
                 <span class="absolute -left-12 top-4 font-bold text-xs" :class="score < 90 && score >= 70 ? 'text-green-500' : 'text-mutedtext'">TRUE</span>
              </div>
              <div class="w-1/2 flex justify-end items-center relative">
                 <div class="absolute right-0 top-0 w-full h-1" :class="score < 70 ? 'bg-red-500' : 'bg-border'"></div>
                 <div class="absolute right-0 top-0 w-1 h-full" :class="score < 70 ? 'bg-red-500' : 'bg-border'"></div>
                 <span class="absolute -right-12 top-4 font-bold text-xs" :class="score < 70 ? 'text-red-500' : 'text-mutedtext'">FALSE</span>
              </div>
           </div>

           <!-- Outcomes Row 2 -->
           <div class="flex w-full justify-end items-start mt-2">
             <div class="w-[300px] flex justify-between -mr-32">
                <div class="w-1/2 flex justify-start pl-8">
                  <div class="bg-blue-500/10 text-blue-500 border border-blue-500/30 px-4 py-2 rounded-xl transition-all"
                       :class="score < 90 && score >= 70 ? 'scale-110 font-bold shadow-lg opacity-100' : 'opacity-30 scale-90'">
                    "Good"
                  </div>
                </div>
                <div class="w-1/2 flex justify-end">
                  <div class="bg-orange-500/10 text-orange-500 border border-orange-500/30 px-4 py-2 rounded-xl transition-all text-sm"
                       :class="score < 70 ? 'scale-110 font-bold shadow-lg opacity-100' : 'opacity-30 scale-90'">
                    "Needs improvement"
                  </div>
                </div>
             </div>
           </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const score = ref(85)
</script>
