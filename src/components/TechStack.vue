<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';
const techData = portfolioData.techStack;
</script>

<template>
   <section :id="techData.id"
      class="tech-stack-section bg-[#fbf9f4] dark:bg-[#0f0d0b] py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">

      <div class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <div class="absolute left-4 top-10 hidden lg:flex items-center justify-center pointer-events-none">
            <div class="relative w-40 h-40 flex items-center justify-center">
               <div class="absolute inset-0 rounded-full border border-emerald-500/10"></div>
               <div class="absolute inset-4 rounded-full border border-emerald-500/20"></div>
               <div class="absolute inset-9 rounded-full border border-emerald-500/30"></div>
               <div
                  class="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-full flex items-center justify-center shadow-sm border border-emerald-100 dark:border-emerald-900/50">
                  <svg class="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd"
                        d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                        clip-rule="evenodd" />
                  </svg>
               </div>
            </div>
         </div>

         <div class="absolute right-4 top-10 hidden lg:grid grid-cols-5 gap-2.5 opacity-30 pointer-events-none">
            <div class="w-1 h-1 rounded-full bg-emerald-700 dark:bg-emerald-500" v-for="i in 25" :key="i"></div>
         </div>

         <div class="tech-stack-header flex flex-col items-center justify-center mb-6">
            <span class="tech-stack-badge-text text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
               techData.sectionNumber }}</span>
            <div class="relative flex items-center justify-center w-48">
               <div
                  class="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent">
               </div>
               <span class="tech-stack-dot w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 relative z-10"></span>
            </div>
         </div>

         <h2 class="tech-stack-title text-4xl sm:text-5xl lg:text-6xl font-black text-center tracking-tight mb-6 max-w-4xl mx-auto leading-tight text-slate-900 dark:text-white"
            v-html="techData.headline"></h2>

         <p
            class="tech-stack-description text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg mb-16 font-normal leading-relaxed">
            {{ techData.description }}
         </p>

         <div class="tech-stack-container max-w-6xl mx-auto rounded-[2.5rem] p-6 lg:pt-0 sm:p-10">
            <div class="tech-stack-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">

               <div v-for="(tech, index) in techData.skills" :key="index"
                  class="tech-stack-item flex flex-col items-center justify-center py-6 px-3 rounded-2xl bg-white dark:bg-[#16120e] border border-slate-100 dark:border-[#26201a] hover:bg-slate-50 dark:hover:bg-[#1e1813] transition-all duration-300 group shadow-sm">

                  <div
                     class="tech-stack-icon-box flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-white dark:bg-[#1c1713] border border-slate-100 dark:border-[#2d2620] shadow-sm group-hover:scale-105 transition-transform">
                     <Icon :icon="tech.icon" class="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <span class="tech-stack-name text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200">{{ tech.name }}</span>
               </div>

            </div>
         </div>

         <div class="tech-stack-footer flex flex-col items-center justify-center mt-16">
            <span class="tech-stack-footer-dot w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 mb-3"></span>
            <div class="tech-stack-footer-line-wrapper flex items-center gap-4 w-full max-w-xs justify-center">
               <span class="tech-stack-footer-line-left h-[1px] w-full bg-emerald-600/30"></span>
               <span class="tech-stack-footer-text text-slate-500 dark:text-slate-400 text-xs font-medium whitespace-nowrap">{{
                  techData.footerText }}</span>
               <span class="tech-stack-footer-line-right h-[1px] w-full bg-emerald-600/30"></span>
            </div>
         </div>

      </div>
   </section>
</template>