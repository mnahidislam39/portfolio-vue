<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';
const workData = portfolioData.selectedWork;
</script>

<template>
   <section :id="workData.id" class="selected-work-section bg-[#fbf9f4] dark:bg-[#0f0d0b] py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">

      <!-- Max width restricted to 1440px -->
      <div class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Top Section Header & Featured Grid Row -->
         <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

            <!-- Left Side: Title & Main CTA (Span 4) -->
            <div class="lg:col-span-4 flex flex-col justify-between">
               <div>
                  <!-- Header Tag -->
                  <div class="flex flex-col items-start mb-6">
                     <span class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
                        workData.sectionNumber }}</span>
                     <div class="relative flex items-center justify-start w-36">
                        <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 dark:from-emerald-400/40 to-transparent">
                        </div>
                        <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 relative z-10"></span>
                     </div>
                  </div>

                  <!-- Headline -->
                  <h2 class="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
                     SELECTED <span class="text-emerald-600 dark:text-emerald-400">SHOPIFY</span> WORK
                  </h2>

                  <!-- Description -->
                  <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 font-normal leading-relaxed">
                     Real stores. Real problems. Real results. Here are some of the Shopify projects I've built that deliver value and drive growth.
                  </p>
               </div>

               <!-- View All Projects Button -->
               <div>
                  <a :href="workData.mainButtonLink || '#all-projects'"
                     class="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-200 dark:border-[#26201a] hover:border-emerald-600 dark:hover:border-emerald-400 text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 font-bold text-sm transition-all duration-300 group shadow-sm bg-white dark:bg-[#16120e]">
                     <span>{{ workData.mainButtonText || 'VIEW ALL PROJECTS' }}</span>
                     <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
               </div>
            </div>

            <!-- Right Side: Featured Project Card (Span 8) -->
            <div
               class="lg:col-span-8 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-8 items-center">

               <!-- Featured Info -->
               <div class="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                     <div
                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-400 text-[11px] font-extrabold tracking-wider mb-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                        {{ workData.featuredProject.badge || 'FEATURED PROJECT' }}
                     </div>

                     <h3 class="text-3xl font-black text-slate-900 dark:text-white mb-3">{{ workData.featuredProject.title }}</h3>

                     <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                        {{ workData.featuredProject.description }}
                     </p>

                     <!-- Tags -->
                     <div class="flex flex-wrap gap-2 mb-6">
                        <span v-for="(tag, tIdx) in workData.featuredProject.tags" :key="tIdx"
                           class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#1c1713] border border-slate-200 dark:border-[#2d2620] text-slate-700 dark:text-slate-300 text-xs font-bold">
                           {{ tag }}
                        </span>
                     </div>

                     <!-- Metrics Row -->
                     <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-slate-100 dark:border-[#26201a] mb-6">
                        <div>
                           <div class="text-emerald-700 dark:text-emerald-400 font-black text-base sm:text-lg">+62%</div>
                           <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Conversion Rate</div>
                        </div>
                        <div>
                           <div class="text-emerald-700 dark:text-emerald-400 font-black text-base sm:text-lg">+48%</div>
                           <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">AOV Increase</div>
                        </div>
                        <div>
                           <div class="text-emerald-700 dark:text-emerald-400 font-black text-base sm:text-lg">-35%</div>
                           <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Load Time</div>
                        </div>
                        <div>
                           <div class="text-emerald-700 dark:text-emerald-400 font-black text-base sm:text-lg">+70%</div>
                           <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Mobile Sales</div>
                        </div>
                     </div>
                  </div>

                  <div>
                     <a :href="workData.featuredProject.caseStudyLink"
                        class="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors group">
                        <span>{{ workData.featuredProject.caseStudyText || 'VIEW CASE STUDY' }}</span>
                        <span class="transition-transform group-hover:translate-x-1">→</span>
                     </a>
                  </div>
               </div>

               <!-- Featured Image Preview -->
               <div class="w-full lg:w-1/2 h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-[#26201a] bg-slate-100 dark:bg-[#1c1713]">
                  <div v-html="workData.featuredProject.imageHtml" class="w-full h-full flex items-center justify-center"></div>
               </div>

            </div>

         </div>

         <!-- 3 Columns Standard Projects Grid -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            <div v-for="(project, pIdx) in workData.projects" :key="pIdx"
               class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:border-slate-300 dark:hover:border-[#382f25]">

               <div>
                  <!-- Project Image Preview -->
                  <div class="w-full h-52 rounded-2xl overflow-hidden border border-slate-200 dark:border-[#26201a] bg-slate-100 dark:bg-[#1c1713] mb-6">
                     <div v-html="project.imageHtml" class="w-full h-full flex items-center justify-center"></div>
                  </div>

                  <!-- Title & Sub-category badge -->
                  <div class="flex items-center justify-between mb-2">
                     <h3 class="text-2xl font-black text-slate-900 dark:text-white">{{ project.title }}</h3>
                     <span class="text-[11px] text-slate-600 dark:text-slate-400 font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#1c1713] border border-slate-200 dark:border-[#2d2620]">{{ project.category || 'Store' }}</span>
                  </div>

                  <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{{ project.description }}</p>

                  <!-- Challenge / Solution / Result Structured Rows -->
                  <div class="space-y-3 mb-6 bg-slate-50 dark:bg-[#1c1713]/60 p-4 rounded-2xl border border-slate-200 dark:border-[#2d2620]/60">
                     <div class="flex items-start gap-2 text-xs">
                        <span class="font-black text-emerald-700 dark:text-emerald-400 shrink-0 w-20">CHALLENGE</span>
                        <span class="text-slate-700 dark:text-slate-300">{{ project.challenge || 'Low conversion rate and poor product discovery.' }}</span>
                     </div>
                     <div class="flex items-start gap-2 text-xs">
                        <span class="font-black text-emerald-700 dark:text-emerald-400 shrink-0 w-20">SOLUTION</span>
                        <span class="text-slate-700 dark:text-slate-300">{{ project.solution || 'Custom sections, product bundles, and subscription app integration.' }}</span>
                     </div>
                     <div class="flex items-start gap-2 text-xs">
                        <span class="font-black text-emerald-700 dark:text-emerald-400 shrink-0 w-20">RESULT</span>
                        <span class="text-emerald-700 dark:text-emerald-400 font-bold">{{ project.result || '+55% conversion rate and +40% subscription sales.' }}</span>
                     </div>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 mb-8">
                     <span v-for="(tag, tgIdx) in project.tags" :key="tgIdx"
                        class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#1c1713] border border-slate-200 dark:border-[#2d2620] text-slate-700 dark:text-slate-300 text-xs font-bold">
                        {{ tag }}
                     </span>
                  </div>
               </div>

               <!-- Case Study Link -->
               <div class="pt-4 border-t border-slate-100 dark:border-[#26201a]">
                  <a :href="project.caseStudyLink"
                     class="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors group">
                     <span>{{ project.caseStudyText || 'VIEW CASE STUDY' }}</span>
                     <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
               </div>

            </div>

         </div>

         <!-- Bottom CTA Banner Card -->
         <div
            class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-8">

            <div class="flex items-center gap-6">
               <div
                  class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center shrink-0 text-emerald-700 dark:text-emerald-400">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24">
                     <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
               </div>
               <div>
                  <h3 class="text-2xl font-black text-slate-900 dark:text-white mb-1">{{ workData.ctaBox?.title || 'HAVE A SIMILAR PROJECT IN MIND?' }}</h3>
                  <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">{{ workData.ctaBox?.description || 'I help brands build Shopify stores that are fast, scalable and focused on driving real results.' }}</p>
               </div>
            </div>

            <div>
               <a :href="workData.ctaBox?.buttonLink || '#contact'"
                  class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-800 dark:bg-emerald-600 hover:bg-emerald-900 dark:hover:bg-emerald-500 text-white font-bold text-sm transition-all duration-300 shadow-md">
                  <span>{{ workData.ctaBox?.buttonText || 'START A PROJECT' }}</span>
                  <span>→</span>
               </a>
            </div>

         </div>

      </div>
   </section>
</template>