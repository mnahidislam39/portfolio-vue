<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';
const servicesData = portfolioData.services;
</script>

<template>
   <section :id="servicesData.id" class="services-section bg-[#fbf9f4] dark:bg-[#0f0d0b] py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">

      <div class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Header -->
         <div class="services-header flex flex-col items-center justify-center mb-6">
            <span class="services-badge-text text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">
               {{ servicesData.sectionNumber }}
            </span>
            <div class="relative flex items-center justify-center w-48">
               <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-emerald-600/40 dark:via-emerald-400/40 to-transparent"></div>
               <span class="services-dot w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 relative z-10"></span>
            </div>
         </div>

         <h2 class="services-title text-4xl sm:text-5xl lg:text-6xl font-black text-center tracking-tight mb-6 max-w-4xl mx-auto leading-tight text-slate-900 dark:text-white">
            WHAT I CAN <span class="text-emerald-600 dark:text-emerald-400">BUILD</span> FOR YOU
         </h2>

         <p class="services-description text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg mb-16 font-normal leading-relaxed">
            From Shopify storefronts to custom web solutions,<br class="hidden sm:inline" /> I help businesses grow with clean design and powerful development.
         </p>

         <!-- Cards Grid -->
         <div class="services-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

            <div v-for="(card, index) in servicesData.cards" :key="index" :class="[
               'service-card flex flex-col justify-between rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 relative bg-white dark:bg-[#16120e]',
               card.isPrimary
                  ? 'border-2 border-emerald-600/80 dark:border-emerald-500/80 shadow-[0_0_50px_rgba(16,185,129,0.08)]'
                  : 'border border-slate-200/90 dark:border-[#26201a] hover:border-slate-300 dark:hover:border-[#382f25]'
            ]">

               <div>
                  <!-- Primary Badge -->
                  <div v-if="card.isPrimary"
                     class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-400 text-[11px] font-extrabold tracking-wider mb-6">
                     <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                     PRIMARY EXPERTISE
                  </div>

                  <!-- Card Header Content -->
                  <div class="flex items-start justify-between gap-4 mb-6">
                     <div class="flex items-start gap-4">
                        <div
                           class="service-icon-box flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#1c1713] border border-slate-200 dark:border-[#2d2620] shrink-0"
                           :class="card.isPrimary ? 'text-emerald-700 dark:text-emerald-400' : (index === 1 ? 'text-blue-600 dark:text-blue-500' : 'text-purple-600 dark:text-purple-400')">
                           <div v-html="card.icon" class="flex items-center justify-center text-2xl"></div>
                        </div>
                        <div>
                           <h3 class="service-card-title text-2xl font-black text-slate-900 dark:text-white leading-tight" v-html="card.title"></h3>
                        </div>
                     </div>
                     
                     <!-- Shopify Bag Illustration for Primary Card -->
                     <div v-if="card.isPrimary" class="hidden sm:block shrink-0 -mt-2">
                        <div class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                           <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                              <line x1="3" y1="6" x2="21" y2="6" />
                              <path d="M16 10a4 4 0 01-8 0" />
                           </svg>
                        </div>
                     </div>
                  </div>

                  <!-- Card Sub-description -->
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-normal">
                     {{ card.cardDescription || (index === 0 ? 'I build high-converting, scalable Shopify stores with custom features that drive sales and deliver exceptional user experience.' : index === 1 ? 'Custom WordPress websites that are fast, secure, and easy to manage.' : 'Modern, high-performance websites and custom web applications built with latest technologies.') }}
                  </p>

                  <!-- Features List -->
                  <div :class="card.isPrimary ? 'grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8' : 'space-y-3 mb-8'">
                     <div v-for="(feature, fIndex) in card.features" :key="fIndex"
                        class="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                        <span
                           class="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                           :class="card.isPrimary ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400' : (index === 1 ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400')">
                           <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5"
                              viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7" />
                           </svg>
                        </span>
                        <span>{{ feature }}</span>
                     </div>
                  </div>
               </div>

               <!-- Bottom Button -->
               <div class="pt-6 border-t border-slate-100 dark:border-[#26201a]">
                  <a :href="card.buttonLink || '#contact'"
                     class="service-btn inline-flex items-center gap-2 text-xs sm:text-sm font-bold transition-colors group text-slate-900 dark:text-white"
                     :class="card.isPrimary ? 'hover:text-emerald-700 dark:hover:text-emerald-400' : (index === 1 ? 'hover:text-blue-600 dark:hover:text-blue-400' : 'hover:text-purple-600 dark:hover:text-purple-400')">
                     <span>{{ card.buttonText }}</span>
                     <span class="transition-transform group-hover:translate-x-1">→</span>
                  </a>
               </div>

            </div>

         </div>

         <!-- Bottom Feature Bar -->
         <div
            class="services-footer-bar bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

               <div v-for="(item, iIndex) in servicesData.featuresBottom" :key="iIndex" class="flex items-start gap-4">
                  <div
                     class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-center shrink-0 text-emerald-700 dark:text-emerald-400 text-xl">
                     <div v-html="item.icon"></div>
                  </div>
                  <div>
                     <h4 class="text-base font-extrabold text-slate-900 dark:text-white mb-1">{{ item.title }}</h4>
                     <p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{{ item.desc }}</p>
                  </div>
               </div>

            </div>
         </div>

      </div>
   </section>
</template>