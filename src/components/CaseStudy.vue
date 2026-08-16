<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';
const caseData = portfolioData.caseStudy;
</script>

<template>
   <section :id="caseData.id" class="case-study-section bg-[#fbf9f4] dark:bg-[#0f0d0b] py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">

      <!-- Max width restricted to 1440px -->
      <div class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Main Layout Grid -->
         <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">

            <!-- Left Side: Header, Meta Info & Steps (Span 5) -->
            <div class="lg:col-span-5 flex flex-col">

               <!-- Section Header Tag -->
               <div class="flex flex-col items-start mb-6">
                  <span class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
                     caseData.sectionNumber }}</span>
                  <div class="relative flex items-center justify-start w-36">
                     <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent"></div>
                     <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 relative z-10"></span>
                  </div>
               </div>

               <!-- Headline -->
               <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-4 leading-tight text-slate-900 dark:text-white">
                  {{ caseData.headline }}
               </h2>

               <!-- Description -->
               <p class="text-slate-500 dark:text-slate-400 text-base sm:text-lg mb-8 font-normal leading-relaxed">
                  {{ caseData.description }}
               </p>

               <!-- Meta Info Badges Box -->
               <div
                  class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/80 dark:bg-[#16120e] border border-slate-200/80 dark:border-[#26201a] rounded-2xl p-4 mb-10">
                  <div v-for="(meta, mIdx) in caseData.metaInfo" :key="mIdx" class="flex flex-col">
                     <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{{ meta.label
                        }}</span>
                     <span class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">{{ meta.value }}</span>
                  </div>
               </div>

               <!-- Challenge, Approach, Solution, Result Steps List -->
               <div class="space-y-8 mb-10">
                  <div v-for="(step, sIdx) in caseData.sections" :key="sIdx" class="flex items-start gap-4">
                     <div
                        class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                        <div v-html="step.icon"></div>
                     </div>
                     <div>
                        <h4 class="text-sm font-extrabold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase mb-1">{{ step.title
                           }}</h4>
                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{{ step.text }}</p>
                     </div>
                  </div>
               </div>

               <!-- View Full Case Study Button -->
               <div>
                  <a :href="caseData.mainButtonLink"
                     class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-slate-900 font-bold text-sm transition-all duration-300 shadow-md group">
                     <span>{{ caseData.mainButtonText }}</span>
                     <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
               </div>

            </div>

            <!-- Right Side: Browser Mockup & Stats Cards (Span 7) -->
            <div class="lg:col-span-7 flex flex-col gap-8">

               <!-- Mockup Frame Card -->
               <div
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
                  <div class="h-80 sm:h-[420px] w-full">
                     <div v-html="caseData.mockupImageHtml" class="w-full h-full"></div>
                  </div>
               </div>

               <!-- 4 Stats Cards Grid -->
               <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div v-for="(stat, stIdx) in caseData.stats" :key="stIdx"
                     class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-3xl p-5 text-center shadow-sm flex flex-col justify-center">
                     <div class="flex items-center justify-center gap-1 mb-1">
                        <span class="text-3xl font-black text-slate-900 dark:text-white">{{ stat.value }}</span>
                        <span v-if="stat.isUp" class="text-emerald-600 dark:text-emerald-400 font-black text-lg">↑</span>
                     </div>
                     <p class="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">{{ stat.sub }}</p>
                     <p class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">{{ stat.desc }}</p>
                  </div>
               </div>

            </div>

         </div>

         <!-- Bottom Testimonial Banner Card -->
         <div
            class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-8">

            <div class="flex items-start gap-4 max-w-3xl">
               <span class="text-4xl text-emerald-600 dark:text-emerald-400 font-serif font-black leading-none">“</span>
               <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed">
                  {{ caseData.testimonial.quote }}
               </p>
            </div>

            <div
               class="flex items-center gap-4 shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-[#26201a] pt-6 md:pt-0 md:pl-8 w-full md:w-auto justify-between md:justify-start">
               <div class="flex items-center gap-3">
                  <div
                     class="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs uppercase tracking-wider">
                     {{ caseData.testimonial.author.substring(0, 3) }}
                  </div>
                  <div>
                     <h5 class="text-sm font-black text-slate-900 dark:text-white">{{ caseData.testimonial.author }}</h5>
                     <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ caseData.testimonial.role }}</p>
                     <a href="#" class="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold hover:underline">{{
                        caseData.testimonial.website }}</a>
                  </div>
               </div>
            </div>

         </div>

      </div>
   </section>
</template>