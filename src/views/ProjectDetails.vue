<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { portfolioData } from '../data/portfolioData'; // আপনার ডেটা ফাইল থেকে ডেটা ইম্পোর্ট করা হলো

const route = useRoute();
const router = useRouter();

// রাউটার থেকে প্রজেক্টের আইডি (যেমন: /project/kangroute) নেওয়া
const projectId = computed(() => route.params.id);

// portfolioData থেকে আইডি অনুযায়ী নির্দিষ্ট প্রজেক্টের অবজেক্ট খুঁজে বের করা
const project = computed(() => {
   return portfolioData[projectId.value] || null;
});

// হোম পেজে বা আগের পেজে ফিরে যাওয়ার ফাংশন
const goBack = () => {
   router.push('/');
};
</script>

<template>
   <div class="min-h-screen bg-[#fbf9f4] dark:bg-[#0f0d0b] text-slate-900 dark:text-slate-100 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div class="max-w-4xl mx-auto" v-if="project">

         <!-- ব্যাক বাটন -->
         <button @click="goBack"
            class="inline-flex items-center gap-2 px-4 py-2 mb-8 transition-all border rounded-full bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:text-slate-900 dark:hover:text-white group">
            <Icon icon="lucide:arrow-left" class="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
         </button>

         <!-- প্রজেক্ট হেডার -->
         <div class="mb-8 space-y-4">
            <div class="flex items-center gap-3">
               <span
                  class="px-3 py-1 text-xs font-medium border rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20">
                  {{ project.category }}
               </span>
               <span class="text-sm text-slate-400 dark:text-slate-500">ID: {{ projectId }}</span>
            </div>
            <h1 class="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
               {{ project.title }}
            </h1>
         </div>

         <!-- প্রজেক্ট মেটা ইনফো (Client, Duration ইত্যাদি) -->
         <div
            class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-[2rem] bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] shadow-[0_10px_30px_rgba(0,0,0,0.03)] mb-10">
            <div>
               <p class="text-xs tracking-wider uppercase text-slate-400 dark:text-slate-500">Client</p>
               <p class="mt-1 font-bold text-slate-900 dark:text-white">{{ project.client }}</p>
            </div>
            <div>
               <p class="text-xs tracking-wider uppercase text-slate-400 dark:text-slate-500">Duration</p>
               <p class="mt-1 font-bold text-slate-900 dark:text-white">{{ project.duration }}</p>
            </div>
            <div>
               <p class="text-xs tracking-wider uppercase text-slate-400 dark:text-slate-500">Live Preview</p>
               <a :href="project.liveUrl" target="_blank"
                  class="inline-flex items-center gap-1 mt-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Visit Site
                  <Icon icon="lucide:external-link" class="text-xs" />
               </a>
            </div>
            <div>
               <p class="text-xs tracking-wider uppercase text-slate-400 dark:text-slate-500">Source Code</p>
               <a :href="project.githubUrl" target="_blank"
                  class="inline-flex items-center gap-1 mt-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                  GitHub
                  <Icon icon="lucide:github" class="text-xs" />
               </a>
            </div>
         </div>

         <!-- ব্যানার ইমেজ -->
         <div class="mb-12 overflow-hidden border shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-[2.5rem] border-slate-200/90 dark:border-[#26201a] bg-white dark:bg-[#16120e]">
            <img :src="project.bannerImage" :alt="project.title" class="w-full h-[350px] sm:h-[480px] object-cover" />
         </div>

         <!-- প্রজেক্ট ওভারভিউ -->
         <div class="space-y-12 text-slate-600 dark:text-slate-300">
            <section class="space-y-4">
               <h2 class="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-white">
                  <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Project Overview
               </h2>
               <p class="text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                  {{ project.overview }}
               </p>
            </section>

            <!-- চ্যালেঞ্জ ও সলিউশন -->
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
               <div class="p-6 sm:p-8 space-y-3 border rounded-[2.5rem] bg-white dark:bg-[#16120e] border-slate-200/90 dark:border-[#26201a] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                  <h3 class="flex items-center gap-2 text-xl font-black text-red-600 dark:text-red-400">
                     <Icon icon="lucide:alert-circle" /> The Challenge
                  </h3>
                  <p class="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                     {{ project.challenge }}
                  </p>
               </div>
               <div class="p-6 sm:p-8 space-y-3 border rounded-[2.5rem] bg-white dark:bg-[#16120e] border-slate-200/90 dark:border-[#26201a] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                  <h3 class="flex items-center gap-2 text-xl font-black text-emerald-600 dark:text-emerald-400">
                     <Icon icon="lucide:check-circle-2" /> Our Solution
                  </h3>
                  <p class="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                     {{ project.solution }}
                  </p>
               </div>
            </div>

            <!-- মূল ফিচারসমূহ -->
            <section class="space-y-4" v-if="project.keyFeatures && project.keyFeatures.length > 0">
               <h2 class="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-white">
                  <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Key Features
               </h2>
               <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <li v-for="(feature, index) in project.keyFeatures" :key="index"
                     class="flex items-start gap-3 p-5 rounded-[2rem] bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] shadow-[0_5px_20px_rgba(0,0,0,0.02)]">
                     <Icon icon="lucide:check" class="flex-shrink-0 mt-1 text-emerald-600 dark:text-emerald-400" />
                     <span class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">{{ feature }}</span>
                  </li>
               </ul>
            </section>

            <!-- টেক স্ট্যাক -->
            <section class="space-y-4" v-if="project.techStack && project.techStack.length > 0">
               <h2 class="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-white">
                  <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Technologies Used
               </h2>
               <div class="flex flex-wrap gap-3">
                  <span v-for="(tech, index) in project.techStack" :key="index"
                     class="px-4 py-2 text-xs font-bold border rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300">
                     {{ tech }}
                  </span>
               </div>
            </section>

         </div>

         <!-- ফুটার কল টু অ্যাকশন -->
         <div class="flex items-center justify-between pt-8 mt-16 border-t border-slate-200 dark:border-[#26201a]">
            <button @click="goBack"
               class="flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold text-white dark:text-slate-950 transition-all shadow-md bg-emerald-950 dark:bg-emerald-500 hover:bg-emerald-900 dark:hover:bg-emerald-400 rounded-xl">
               <Icon icon="lucide:arrow-left" /> Explore More Projects
            </button>
         </div>

      </div>

      <!-- যদি ভুল আইডি দিয়ে কেউ প্রবেশ করে -->
      <div v-else class="max-w-md py-24 mx-auto space-y-6 text-center">
         <div
            class="flex items-center justify-center w-20 h-20 mx-auto text-3xl text-red-500 border rounded-full bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20">
            <Icon icon="lucide:file-question" />
         </div>
         <h2 class="text-3xl font-black text-slate-900 dark:text-white">Project Not Found</h2>
         <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">The project you are looking for does not exist or has been removed.</p>
         <button @click="goBack"
            class="flex items-center justify-center w-full gap-2 px-6 py-4 text-xs font-bold text-white dark:text-slate-950 transition-all shadow-md bg-emerald-950 dark:bg-emerald-500 hover:bg-emerald-900 dark:hover:bg-emerald-400 rounded-xl">
            <Icon icon="lucide:arrow-left" /> Back to Home
         </button>
      </div>

   </div>
</template>