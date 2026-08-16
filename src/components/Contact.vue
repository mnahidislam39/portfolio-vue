<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';

const contact = portfolioData.contact;
</script>

<template>
   <section id="contact"
      class="relative px-4 py-24 overflow-hidden bg-[#fbf9f4] dark:bg-[#0f0d0b] sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <div id="contact-container" class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Main Grid Layout (Left Info & Right Form) -->
         <div id="contact-grid-layout" class="grid items-start grid-cols-1 gap-12 mb-16 lg:grid-cols-12">

            <!-- Left Column: Heading & Contact Info (5 Cols) -->
            <div id="contact-left-col" class="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-8">

               <div>
                  <div id="section-tag-wrapper" class="flex flex-col items-start mb-4">
                     <span id="section-number-tag"
                        class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{ contact.sectionTag }}</span>
                     <div id="section-line-indicator" class="relative flex items-center justify-start w-36">
                        <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent"></div>
                        <span class="relative z-10 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                     </div>
                  </div>

                  <h2 id="section-main-heading" class="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900 dark:text-white"
                     v-html="contact.title"></h2>

                  <p id="section-description" class="text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
                     {{ contact.description }}
                  </p>
               </div>

               <!-- Contact Details List -->
               <div id="contact-info-list" class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-6">
                  <div v-for="(item, index) in contact.infoList" :key="index" class="flex items-start gap-4">
                     <span
                        class="flex items-center justify-center w-12 h-12 text-xl rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Icon :icon="item.icon" />
                     </span>
                     <div>
                        <p class="mb-1 text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">{{ item.label }}</p>
                        <a v-if="item.href" :href="item.href"
                           class="text-sm font-bold transition-colors text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400">{{
                              item.value }}</a>
                        <p v-else class="text-sm font-bold text-slate-900 dark:text-white">{{ item.value }}</p>
                     </div>
                  </div>
               </div>

               <!-- Schedule a Call Box -->
               <div id="schedule-call-box"
                  class="flex flex-col items-center justify-between gap-6 p-8 border bg-white dark:bg-[#16120e] border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:flex-row">
                  <div class="flex items-center gap-4">
                     <span
                        class="flex items-center justify-center w-12 h-12 text-xl bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Icon icon="lucide:calendar-days" />
                     </span>
                     <div>
                        <h4 class="text-sm font-bold text-slate-900 dark:text-white">{{ contact.scheduleCall.title }}</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400">{{ contact.scheduleCall.subtitle }}</p>
                     </div>
                  </div>
                  <a :href="contact.scheduleCall.href"
                     class="flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold text-white dark:text-slate-950 transition-all shadow-md bg-emerald-950 dark:bg-emerald-500 hover:bg-emerald-900 dark:hover:bg-emerald-400 rounded-xl w-full sm:w-auto shrink-0">
                     <Icon icon="lucide:calendar" /> {{ contact.scheduleCall.buttonText }}
                  </a>
               </div>

            </div>

            <!-- Right Column: Form (7 Cols) -->
            <div id="contact-right-col" class="lg:col-span-7">

               <div id="contact-form-wrapper"
                  class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">

                  <div class="flex items-center gap-4 pb-6 mb-8 border-b border-slate-100 dark:border-[#26201a]">
                     <span
                        class="flex items-center justify-center w-12 h-12 text-xl rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                        <Icon :icon="contact.form.headerIcon || 'lucide:send'" />
                     </span>
                     <div>
                        <h3 class="text-xl font-black text-slate-900 dark:text-white">{{ contact.form.title }}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400">{{ contact.form.subtitle }}</p>
                     </div>
                  </div>

                  <form @submit.prevent class="space-y-6">

                     <!-- Name & Email -->
                     <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                           <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                              {{ contact.form.fields.nameLabel }} <span class="text-red-500">*</span>
                           </label>
                           <input type="text" :placeholder="contact.form.fields.namePlaceholder"
                              class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all"
                              required />
                        </div>
                        <div>
                           <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                              {{ contact.form.fields.emailLabel }} <span class="text-red-500">*</span>
                           </label>
                           <input type="email" :placeholder="contact.form.fields.emailPlaceholder"
                              class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all"
                              required />
                        </div>
                     </div>

                     <!-- Company / Brand & Website -->
                     <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                           <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                              {{ contact.form.fields.companyLabel }}
                           </label>
                           <input type="text" :placeholder="contact.form.fields.companyPlaceholder"
                              class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all" />
                        </div>
                        <div>
                           <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                              {{ contact.form.fields.websiteLabel }}
                           </label>
                           <input type="url" :placeholder="contact.form.fields.websitePlaceholder"
                              class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all" />
                        </div>
                     </div>

                     <!-- Project Type -->
                     <div>
                        <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                           {{ contact.form.fields.projectTypeLabel }} <span class="text-red-500">*</span>
                        </label>
                        <select
                           class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all"
                           required>
                           <option disabled value="">{{ contact.form.fields.projectTypeDefault }}</option>
                           <option v-for="(opt, idx) in contact.form.projectTypes" :key="idx">{{ opt }}</option>
                        </select>
                     </div>

                     <!-- What do you need? (Requirements/Scope) -->
                     <div>
                        <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                           {{ contact.form.fields.needLabel }} <span class="text-red-500">*</span>
                        </label>
                        <textarea rows="3"
                           :placeholder="contact.form.fields.needPlaceholder"
                           class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all"
                           required></textarea>
                     </div>

                     <!-- Budget & Timeline -->
                     <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                           <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                              {{ contact.form.fields.budgetLabel }} <span class="text-red-500">*</span>
                           </label>
                           <select
                              class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all"
                              required>
                              <option disabled value="">{{ contact.form.fields.budgetDefault }}</option>
                              <option v-for="(budget, idx) in contact.form.budgetRanges" :key="idx">{{ budget }}</option>
                           </select>
                        </div>
                        <div>
                           <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                              {{ contact.form.fields.timelineLabel }}
                           </label>
                           <select
                              class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all">
                              <option disabled value="">{{ contact.form.fields.timelineDefault }}</option>
                              <option v-for="(time, idx) in contact.form.timelines" :key="idx">{{ time }}</option>
                           </select>
                        </div>
                     </div>

                     <!-- Additional Details -->
                     <div>
                        <label class="block mb-2 text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-300">
                           {{ contact.form.fields.detailsLabel }}
                        </label>
                        <textarea rows="3"
                           :placeholder="contact.form.fields.detailsPlaceholder"
                           class="w-full bg-slate-50 dark:bg-[#1f1a15] border border-slate-200 dark:border-[#26201a] rounded-2xl px-4 py-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-[#16120e] transition-all"></textarea>
                     </div>

                     <!-- File Upload & Submit Row -->
                     <div class="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                        <label
                           class="flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 w-full sm:w-auto">
                           <span
                              class="flex items-center justify-center w-10 h-10 border rounded-xl bg-slate-50 dark:bg-[#1f1a15] border-slate-200 dark:border-[#26201a] text-slate-700 dark:text-slate-300 shrink-0">
                              <Icon icon="lucide:paperclip" />
                           </span>
                           <span>{{ contact.form.uploadText }} <br /><span class="text-[10px] text-slate-400 dark:text-slate-500 font-normal">{{ contact.form.uploadSubtext }}</span></span>
                           <input type="file" class="hidden" />
                        </label>

                        <button type="submit"
                           class="flex items-center justify-center w-full gap-2 px-6 py-4 text-xs font-bold text-white dark:text-slate-950 transition-all shadow-md sm:w-auto bg-emerald-950 dark:bg-emerald-500 hover:bg-emerald-900 dark:hover:bg-emerald-400 rounded-xl">
                           <Icon icon="lucide:send" /> {{ contact.form.submitButtonText }}
                        </button>
                     </div>

                  </form>

               </div>

            </div>

         </div>

         <!-- Bottom Footer Info (Process & Commitment) -->
         <div id="contact-bottom-grid"
            class="grid items-center grid-cols-1 gap-8 pt-12 border-t lg:grid-cols-12 border-slate-100 dark:border-[#26201a]">

            <!-- Process (7 Cols) -->
            <div id="contact-process-box"
               class="lg:col-span-7 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
               <h4 class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-6">{{ contact.processHeading }}</h4>
               <div class="grid grid-cols-2 gap-4 text-center sm:grid-cols-5">
                  <div v-for="(proc, index) in contact.processSteps" :key="index" class="flex flex-col items-center">
                     <span
                        class="flex items-center justify-center w-10 h-10 mb-2 text-lg rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                        <Icon :icon="proc.icon" />
                     </span>
                     <p class="text-xs font-bold text-slate-800 dark:text-slate-200">{{ proc.step }}. {{ proc.title }}</p>
                  </div>
               </div>
            </div>

            <!-- Commitment (5 Cols) -->
            <div id="contact-commitment-box"
               class="lg:col-span-5 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6">
               <div>
                  <h4 class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-4">{{ contact.commitmentHeading }}
                  </h4>
                  <ul class="space-y-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                     <li v-for="(commit, index) in contact.commitments" :key="index" class="flex items-center gap-2">
                        <Icon icon="lucide:check-circle-2" class="text-base text-emerald-600 dark:text-emerald-400" /> {{ commit }}
                     </li>
                  </ul>
               </div>
               <div class="text-center sm:text-right shrink-0">
                  <h3 class="mb-1 text-2xl italic font-bold font-script text-emerald-700 dark:text-emerald-400">{{ contact.author.name }}</h3>
                  <p class="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">{{ contact.author.title }}
                  </p>
               </div>
            </div>

         </div>

      </div>
   </section>
</template>