<script setup>
import { ref } from 'vue';
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';

const faqData = portfolioData.faq;
const activeIndex = ref(null);

const toggleAccordion = (index) => {
   activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
   <section id="faq-section" class="relative px-4 py-24 overflow-hidden bg-[#fbf9f4] dark:bg-[#0f0d0b] sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Top Grid: Left Column & Right Accordion -->
         <div class="grid items-start grid-cols-1 gap-12 mb-16 lg:grid-cols-12">

            <!-- Left Column -->
            <div class="flex flex-col gap-8 lg:col-span-5">

               <!-- Heading & Description -->
               <div>
                  <div class="flex flex-col items-start mb-4">
                     <span class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
                        faqData.sectionTag }}</span>
                     <div class="relative flex items-center justify-start w-36">
                        <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent">
                        </div>
                        <span class="relative z-10 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                     </div>
                  </div>

                  <h2 class="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900 dark:text-white" v-html="faqData.title">
                  </h2>
                  <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">{{ faqData.description }}</p>
               </div>

               <!-- Still Have Questions Box -->
               <div
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 relative">
                  <div class="flex items-start gap-4">
                     <div
                        class="flex items-center justify-center w-12 h-12 text-2xl text-white dark:text-slate-950 rounded-2xl bg-emerald-950 dark:bg-emerald-500 shrink-0">
                        <Icon icon="lucide:message-square-question" />
                     </div>
                     <div>
                        <h3 class="mb-1 text-base font-black text-slate-900 dark:text-white">{{ faqData.helpBox.title }}</h3>
                        <p class="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{{ faqData.helpBox.description }}</p>
                     </div>
                  </div>
                  <a :href="faqData.helpBox.buttonLink"
                     class="flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold text-white dark:text-slate-950 transition-all shadow-md bg-emerald-950 dark:bg-emerald-500 hover:bg-emerald-900 dark:hover:bg-emerald-400 rounded-xl w-fit">
                     {{ faqData.helpBox.buttonText }}
                     <Icon icon="lucide:arrow-right" class="text-base" />
                  </a>
               </div>

               <!-- 4 Trust Features Card (Exact layout with vertical dividers inside a single container) -->
               <div
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                  <div v-for="(badge, bIdx) in faqData.features" :key="bIdx"
                     class="flex flex-col items-center px-2 py-1 text-center"
                     :class="{ 'border-r border-slate-100 dark:border-[#26201a]': bIdx < 3 }">
                     <div
                        class="flex items-center justify-center w-10 h-10 mb-2 text-lg rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                        <Icon :icon="badge.icon" />
                     </div>
                     <h4 class="text-[11px] font-black text-slate-900 dark:text-white mb-0.5 whitespace-nowrap">{{ badge.title }}</h4>
                     <p class="text-[9px] text-slate-400 dark:text-slate-500 leading-tight">{{ badge.description }}</p>
                  </div>
               </div>

            </div>

            <!-- Right Column: FAQ Accordion List -->
            <div class="flex flex-col gap-4 lg:col-span-7">
               <div v-for="(item, idx) in faqData.questions" :key="idx"
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2rem] p-6 sm:p-7 shadow-[0_5px_20px_rgba(0,0,0,0.02)] transition-all hover:border-emerald-500/50">
                  <!-- Accordion Header -->
                  <button @click="toggleAccordion(idx)"
                     class="flex items-center justify-between w-full gap-4 text-left cursor-pointer">
                     <div class="flex items-center gap-4">
                        <div
                           class="flex items-center justify-center w-10 h-10 text-lg rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                           <Icon :icon="item.icon" />
                        </div>
                        <h3 class="text-sm font-black sm:text-base text-slate-900 dark:text-white">{{ item.question }}</h3>
                     </div>

                     <!-- Plus Toggle Icon -->
                     <div
                        class="flex items-center justify-center w-8 h-8 transition-transform border rounded-full bg-slate-50 dark:bg-[#1f1a15] border-slate-200 dark:border-[#26201a] text-slate-700 dark:text-slate-300 shrink-0"
                        :class="{ 'rotate-45 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 border-emerald-600 dark:border-emerald-500': activeIndex === idx }">
                        <Icon icon="lucide:plus" class="text-lg" />
                     </div>
                  </button>

                  <!-- Accordion Body / Answer -->
                  <div v-show="activeIndex === idx" class="pt-4 mt-4 border-t border-slate-100 dark:border-[#26201a] pl-14">
                     <p class="text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">{{ item.answer }}</p>
                  </div>
               </div>
            </div>

         </div>

         <!-- Bottom CTA Banner Bar -->
         <div
            class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            <!-- Left Icon & Heading -->
            <div class="flex items-center gap-4 lg:col-span-4">
               <div
                  class="flex items-center justify-center text-2xl text-white dark:text-slate-950 shadow-md w-14 h-14 rounded-2xl bg-emerald-950 dark:bg-emerald-500 shrink-0">
                  <Icon icon="lucide:send" />
               </div>
               <div>
                  <h3 class="mb-1 text-base font-black text-slate-900 dark:text-white">{{ faqData.ctaBanner.title }}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">{{ faqData.ctaBanner.description }}</p>
               </div>
            </div>

            <!-- Center Highlights -->
            <div
               class="grid grid-cols-3 gap-4 px-0 py-4 text-center border-t lg:col-span-5 lg:border-t-0 lg:border-x border-slate-100 dark:border-[#26201a] lg:py-0 lg:px-6 lg:text-left">
               <div v-for="(high, hIdx) in faqData.ctaBanner.highlights" :key="hIdx"
                  class="flex flex-col items-center lg:items-start">
                  <div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-0.5">
                     <Icon :icon="high.icon" /> {{ high.title }}
                  </div>
                  <span class="text-[10px] text-slate-400 dark:text-slate-500">{{ high.desc }}</span>
               </div>
            </div>

            <!-- Right Button -->
            <div class="flex justify-end lg:col-span-3">
               <a :href="faqData.ctaBanner.buttonLink"
                  class="flex items-center justify-center w-full gap-2 px-6 py-4 text-xs font-bold text-white dark:text-slate-950 transition-all shadow-md lg:w-auto bg-emerald-950 dark:bg-emerald-500 hover:bg-emerald-900 dark:hover:bg-emerald-400 rounded-xl">
                  {{ faqData.ctaBanner.buttonText }}
                  <Icon icon="lucide:arrow-right" class="text-base" />
               </a>
            </div>

         </div>

      </div>
   </section>
</template>