<script setup>
import { experienceData as centralExperienceData } from '../data'; // সরাসরি index.js থেকে ইম্পোর্ট করা হলো
import { Icon } from '@iconify/vue';

const experienceData = centralExperienceData; // সঠিক ডেটা ভেরিয়েবল ব্যবহার করা হলো
</script>

<template>
   <section :id="experienceData.id"
      class="professional-experience-section bg-[#fbf9f4] dark:bg-[#0f0d0b] pb-30  px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">

      <div id="professional-experience-container" class="max-w-[1440px] mx-auto relative z-10 ">

         <div id="experience-grid-layout" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <!-- Left Column: Sticky Title, Info & Stats Box -->
            <div id="experience-left-col" class="lg:col-span-4 lg:sticky lg:top-24">

               <div id="section-tag-wrapper" class="flex flex-col items-start mb-6">
                  <span id="section-number-tag"
                     class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{ experienceData.sectionNumber
                     }}</span>
                  <div id="section-line-indicator" class="relative flex items-center justify-start w-36">
                     <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent"></div>
                     <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 relative z-10"></span>
                  </div>
               </div>

               <h2 id="section-main-heading" class="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
                  Professional <br />
                  Experience
               </h2>

               <p id="section-description" class="text-slate-500 dark:text-slate-400 text-base font-normal mb-8 leading-relaxed">
                  {{ experienceData.description }}
               </p>

               <div id="author-info-box" class="mb-8">
                  <h3 id="author-name" class="text-3xl font-script font-bold text-emerald-700 dark:text-emerald-400 italic mb-1">{{
                     experienceData.authorName }}</h3>
                  <p id="author-title" class="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">{{
                     experienceData.authorTitle }}</p>
               </div>

               <!-- Stats Grid with Iconify Icons -->
               <div id="stats-grid"
                  class="grid grid-cols-2 gap-4 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">

                  <div v-for="(stat, sIdx) in experienceData.stats" :key="sIdx" :id="'stat-item-' + sIdx" class="p-3">
                     <div class="flex items-center gap-2 mb-2">
                        <span
                           class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                           <Icon v-if="stat.icon === 'briefcase'" icon="lucide:briefcase" />
                           <Icon v-else-if="stat.icon === 'projects'" icon="lucide:users" />
                           <Icon v-else-if="stat.icon === 'code'" icon="lucide:code" />
                           <Icon v-else icon="lucide:smile" />
                        </span>
                     </div>
                     <p class="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">{{ stat.label }}</p>
                     <h4 class="text-xl font-black text-slate-900 dark:text-white">{{ stat.value }}</h4>
                  </div>

               </div>

            </div>

            <!-- Right Column: Timeline & Experience Cards -->
            <div id="experience-right-col" class="lg:col-span-8">

               <div id="timeline-wrapper"
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative">

                  <div id="timeline-line"
                     class="absolute left-10 sm:left-12 top-10 bottom-10 w-0.5 bg-emerald-100 dark:bg-emerald-950/60 hidden sm:block"></div>

                  <div id="experience-items-list" class="space-y-12 relative z-10">

                     <div v-for="(exp, eIdx) in experienceData.experiences" :key="eIdx" :id="'experience-item-' + eIdx"
                        class="flex flex-col sm:flex-row items-start gap-6 relative">

                        <!-- Timeline Icon Badge -->
                        <div id="timeline-icon-badge"
                           class="w-12 h-12 rounded-2xl bg-white dark:bg-[#1f1a15] border border-emerald-100 dark:border-emerald-950/60 shadow-sm flex items-center justify-center shrink-0 z-10 text-xl text-emerald-600 dark:text-emerald-400">
                           <Icon v-if="exp.icon === 'briefcase'" icon="lucide:briefcase" />
                           <Icon v-else-if="exp.icon === 'shopify'" icon="logos:shopify" class="w-6 h-6" />
                           <Icon v-else-if="exp.icon === 'wordpress'" icon="logos:wordpress-icon" class="w-6 h-6" />
                           <Icon v-else icon="lucide:code-2" />
                        </div>

                        <div id="experience-card-content"
                           class="flex-1 bg-white dark:bg-[#1f1a15] border border-slate-100 dark:border-[#2b241d] rounded-3xl p-6 sm:p-7 shadow-[0_5px_20px_rgba(0,0,0,0.02)] hover:border-slate-200 dark:hover:border-[#382f27] transition-all duration-300 w-full">

                           <div id="exp-header-row" class="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <div class="flex items-center gap-3">
                                 <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{{ exp.role }}</h3>
                                 <span v-if="exp.status"
                                    class="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/50">{{
                                       exp.status }}</span>
                              </div>
                              <span
                                 class="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-[#16120e] px-3 py-1 rounded-full border border-slate-100 dark:border-[#2b241d]">{{
                                    exp.duration }}</span>
                           </div>

                           <p v-if="exp.company" id="exp-company-name"
                              class="text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{ exp.company }}
                           </p>

                           <p id="exp-description" class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                              {{ exp.description }}
                           </p>

                           <div id="exp-skills-flex" class="flex flex-wrap gap-2">
                              <span v-for="(skill, sIdx) in exp.skills" :key="sIdx"
                                 class="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#16120e] border border-slate-200/80 dark:border-[#2b241d] px-3 py-1.5 rounded-xl">
                                 • {{ skill }}
                              </span>
                           </div>

                        </div>

                     </div>

                  </div>

                  <div id="timeline-footer-box"
                     class="mt-12 pt-8 border-t border-slate-100 dark:border-[#26201a] flex flex-col md:flex-row items-center justify-between gap-6">

                     <div id="footer-quote-left" class="flex items-start gap-4">
                        <span class="text-3xl text-emerald-600 dark:text-emerald-400 font-serif font-black leading-none">“</span>
                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium italic max-w-lg leading-relaxed">
                           {{ experienceData.footerQuote.quote }}
                        </p>
                     </div>

                     <div id="footer-quote-right"
                        class="flex items-center gap-3 bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 px-4 py-3 rounded-2xl shrink-0">
                        <span class="text-emerald-600 dark:text-emerald-400 text-lg flex items-center">
                           <Icon icon="lucide:calendar-days" />
                        </span>
                        <div class="text-xs font-bold text-slate-800 dark:text-slate-200">
                           <p>{{ experienceData.footerQuote.subText1 }}</p>
                           <p class="text-slate-400 dark:text-slate-500 font-medium">{{ experienceData.footerQuote.subText2 }}</p>
                        </div>
                     </div>

                  </div>

               </div>

            </div>

         </div>

      </div>
   </section>
</template>