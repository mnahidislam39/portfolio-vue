<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';

const processData = portfolioData.process;
</script>

<template>
   <section id="process-section"
      class="relative px-4 py-24 overflow-hidden bg-[#fbf9f4] dark:bg-[#0f0d0b] process-section sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <div id="process-container" class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Top Header & Quote/Laptop Section -->
         <div class="grid items-center grid-cols-1 gap-8 mb-16 lg:grid-cols-12">

            <!-- Left Title & Description -->
            <div class="lg:col-span-5">
               <div id="section-tag-wrapper" class="flex flex-col items-start mb-4">
                  <span id="section-number-tag"
                     class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
                        processData.sectionTag }}</span>
                  <div id="section-line-indicator" class="relative flex items-center justify-start w-36">
                     <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent"></div>
                     <span class="relative z-10 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                  </div>
               </div>

               <h2 class="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900 dark:text-white" v-html="processData.title">
               </h2>
               <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">{{ processData.description }}</p>
            </div>

            <!-- Right Quote & Laptop Banner -->
            <div
               class="lg:col-span-7 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-8 relative">

               <div class="flex-1">
                  <span class="block mb-4 font-serif text-4xl font-bold leading-none text-emerald-600 dark:text-emerald-400">“</span>
                  <p class="mb-6 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                     {{ processData.quote }}
                  </p>
                  <div>
                     <h4 class="text-base font-black text-emerald-800 dark:text-emerald-400 font-script italic mb-0.5">{{ processData.author }}
                     </h4>
                     <p class="text-xs font-bold text-slate-400 dark:text-slate-500">{{ processData.role }}</p>
                  </div>
               </div>

               <!-- Mockup Image Preview -->
               <div
                  class="w-full md:w-[320px] shrink-0 bg-slate-50 dark:bg-[#1f1a15] rounded-2xl p-2 border border-slate-100 dark:border-[#2b241d] overflow-hidden flex items-center justify-center">
                  <img
                     src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
                     alt="Workspace Mockup" class="object-cover w-full h-auto rounded-xl" />
               </div>

            </div>

         </div>

         <!-- 6-Steps Process Cards Grid with Connecting Line -->
         <div class="relative mb-16">

            <!-- Connecting Line behind step headers for desktop -->
            <div class="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-emerald-200/70 dark:bg-emerald-950/60 z-0"></div>

            <div class="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">

               <div v-for="(step, sIdx) in processData.steps" :key="sIdx"
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full hover:border-emerald-500/50 transition-all">

                  <div>
                     <!-- Step Number & Icon Header -->
                     <div class="flex items-center justify-between mb-6">
                        <span class="px-3 py-1 text-sm font-black rounded-full text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50">{{
                           step.number }}</span>
                        <div
                           class="flex items-center justify-center w-12 h-12 text-xl shadow-sm rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                           <Icon :icon="step.icon" />
                        </div>
                     </div>

                     <h3 class="mb-2 text-base font-black text-slate-900 dark:text-white">{{ step.title }}</h3>
                     <p class="mb-6 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{{ step.description }}</p>
                  </div>

                  <!-- Features List -->
                  <div class="flex flex-col gap-2 pt-4 mt-auto border-t border-slate-100 dark:border-[#26201a]">
                     <span v-for="(feat, fIdx) in step.features" :key="fIdx"
                        class="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <Icon icon="lucide:check-circle-2" class="text-sm text-emerald-600 dark:text-emerald-400 shrink-0" /> {{ feat }}
                     </span>
                  </div>

               </div>

            </div>

         </div>

         <!-- Bottom Goal & Key Metrics Banner -->
         <div
            class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">

            <!-- Left: Goal Header -->
            <div
               class="flex items-start gap-4 pb-6 pr-0 border-b lg:col-span-4 lg:border-b-0 lg:border-r border-slate-100 dark:border-[#26201a] lg:pb-0 lg:pr-6">
               <div
                  class="flex items-center justify-center text-2xl w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Icon icon="lucide:target" />
               </div>
               <div>
                  <h3 class="mb-1 text-base font-black text-slate-900 dark:text-white">Goal: Your Success</h3>
                  <p class="text-xs leading-relaxed text-slate-500 dark:text-slate-400">My process is designed to save your time, reduce
                     risks and deliver measurable results that grow your business.</p>
               </div>
            </div>

            <!-- Right: 4 Mini Process Highlights -->
            <div class="grid grid-cols-1 gap-6 lg:col-span-8 sm:grid-cols-2 lg:grid-cols-4">
               <div class="flex items-start gap-3">
                  <div class="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">
                     <Icon icon="lucide:clock" />
                  </div>
                  <div>
                     <h4 class="text-xs font-black text-slate-900 dark:text-white mb-0.5">On-Time Delivery</h4>
                     <p class="text-[11px] text-slate-400 dark:text-slate-500">I respect your time and always deliver on schedule.</p>
                  </div>
               </div>

               <div class="flex items-start gap-3">
                  <div class="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">
                     <Icon icon="lucide:shield-check" />
                  </div>
                  <div>
                     <h4 class="text-xs font-black text-slate-900 dark:text-white mb-0.5">Quality Focused</h4>
                     <p class="text-[11px] text-slate-400 dark:text-slate-500">Clean code, best practices and attention to detail.</p>
                  </div>
               </div>

               <div class="flex items-start gap-3">
                  <div class="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">
                     <Icon icon="lucide:users" />
                  </div>
                  <div>
                     <h4 class="text-xs font-black text-slate-900 dark:text-white mb-0.5">Transparent Process</h4>
                     <p class="text-[11px] text-slate-400 dark:text-slate-500">You'll always know the status of your project at every step.
                     </p>
                  </div>
               </div>

               <div class="flex items-start gap-3">
                  <div class="text-emerald-600 dark:text-emerald-400 text-xl mt-0.5">
                     <Icon icon="lucide:trending-up" />
                  </div>
                  <div>
                     <h4 class="text-xs font-black text-slate-900 dark:text-white mb-0.5">Results Driven</h4>
                     <p class="text-[11px] text-slate-400 dark:text-slate-500">Solutions that increase conversions and grow your revenue.
                     </p>
                  </div>
               </div>
            </div>

         </div>

         <!-- Bottom CTA Banner Bar -->
         <div
            class="bg-[#0d2318] dark:bg-[#141b16] border border-emerald-900/40 rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div class="flex items-center gap-4 text-center sm:text-left">
               <div
                  class="flex items-center justify-center w-12 h-12 mx-auto text-2xl rounded-2xl bg-[#132c1f] dark:bg-[#1a261e] text-emerald-400 shrink-0 sm:mx-0">
                  <Icon icon="lucide:message-square-text" />
               </div>
               <span class="text-sm font-bold text-white sm:text-base">Have a project in mind? Let's discuss how we can
                  work together.</span>
            </div>
            <a href="#contact"
               class="flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all bg-white dark:bg-emerald-500 shadow-md hover:bg-slate-100 dark:hover:bg-emerald-400 text-slate-900 dark:text-slate-950 rounded-xl shrink-0">
               Start a Project
               <Icon icon="lucide:arrow-right" />
            </a>
         </div>

      </div>
   </section>
</template>