<script setup>
import { processData as centralProcessData } from '../data'; 
import { Icon } from '@iconify/vue';

const processData = centralProcessData;
</script>

<template>
   <section id="process-section"
      class="relative px-4 py-20  overflow-hidden bg-[#fbf9f4] dark:bg-[#0f0d0b] process-section sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <!-- Main Container Div -->
      <div id="process-container" class="max-w-[1440px] mx-auto relative z-10 ">

         <!-- Top Header & Quote/Laptop Grid Div -->
         <div class="process-header-quote-grid flex items-center items-center justify-center gap-8 ">

            <!-- Left Title & Description Div -->
            <div class="process-title-wrapper text-center max-w-2xl">
               <div id="section-tag-wrapper" class="section-tag-container flex flex-col items-center mb-4">
                  <span id="section-number-tag"
                     class="section-number-text text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">
                     {{ processData.sectionTag }}
                  </span>
                  <div id="section-line-indicator" class="section-line-wrapper relative flex items-center justify-start w-36">
                     <div class="section-line-bg absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent"></div>
                     <span class="section-line-dot relative z-10 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                  </div>
               </div>

               <h2 class="process-main-title mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900 dark:text-white" v-html="processData.title">
               </h2>
               <p class="process-main-desc text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">{{ processData.description }}</p>
            </div>

          

         </div>

         <!-- 3 Process Cards Grid Container Div (Equal Serial) -->
         <div class="process-cards-wrapper relative mb-16 pt-6">
            <div class="process-cards-grid grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">

               <div v-for="(step, sIdx) in processData.steps" :key="sIdx"
                  class="process-card-item bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full hover:border-emerald-500/50 transition-all">
                  
                  <div class="process-card-top-content">
                     <!-- Step Number & Icons Div -->
                     <div class="process-card-header-flex flex items-center justify-between mb-6">
                        <span class="process-card-number text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">{{ step.number }}</span>
                        <div class="process-card-icons-flex flex items-center gap-2">
                           <div v-for="(iconName, iIdx) in step.icons" :key="iIdx"
                              class="process-card-icon-box flex items-center justify-center w-10 h-10 text-lg shadow-sm rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                              <Icon :icon="iconName" />
                           </div>
                        </div>
                     </div>

                     <h3 class="process-card-title mb-3 text-lg font-black text-slate-900 dark:text-white">{{ step.title }}</h3>
                     <p class="process-card-desc mb-8 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {{ step.description }}
                     </p>
                  </div>

                  <!-- Feature Tags Div -->
                  <div class="process-card-features-flex flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-[#26201a]">
                     <span v-for="(feat, fIdx) in step.features" :key="fIdx"
                        class="process-feature-tag px-3 py-1.5 text-xs font-semibold rounded-full bg-slate-100 dark:bg-[#221c16] text-slate-700 dark:text-slate-300">
                        {{ feat }}
                     </span>
                  </div>

               </div>

            </div>
         </div>

       

         <!-- Bottom CTA Banner Bar Container Div -->
         <div class="process-cta-banner bg-[#0d2318] dark:bg-[#141b16] border border-emerald-900/40 rounded-[2rem] p-6 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div class="process-cta-left-flex flex items-center gap-4 text-center sm:text-left">
               <div class="process-cta-icon-box flex items-center justify-center w-12 h-12 mx-auto text-2xl rounded-2xl bg-[#132c1f] dark:bg-[#1a261e] text-emerald-400 shrink-0 sm:mx-0">
                  <Icon :icon="processData.cta.icon" />
               </div>
               <span class="process-cta-text text-sm font-bold text-white sm:text-base">{{ processData.cta.text }}</span>
            </div>
            <a :href="processData.cta.buttonLink"
               class="process-cta-btn flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all bg-white dark:bg-emerald-500 shadow-md hover:bg-slate-100 dark:hover:bg-emerald-400 text-slate-900 dark:text-slate-950 rounded-xl shrink-0">
               {{ processData.cta.buttonText }}
               <Icon icon="lucide:arrow-right" />
            </a>
         </div>

      </div>
   </section>
</template>