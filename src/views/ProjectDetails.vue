<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { singleProjectData } from '../data/singleProjectData.js';
import { Icon } from '@iconify/vue';

const route = useRoute();
const router = useRouter();
const projectId = route.params.id;

// singleProjectData.js থেকে ডায়নামিকভাবে প্রজেক্ট ডাটা খুঁজে বের করা (Featured বা Projects লিস্ট থেকে)
const projectData = computed(() => {
   // ১. প্রথমে ফিচারড প্রজেক্টের সাথে আইডি মিলছে কিনা চেক করা
   if (
      singleProjectData.selectedWork?.featuredProject &&
      (singleProjectData.selectedWork.featuredProject.id === projectId || 
       singleProjectData.selectedWork.featuredProject.projectId === projectId)
   ) {
      return singleProjectData.selectedWork.featuredProject;
   }
   
   // ২. না পেলে সাধারণ প্রজেক্টগুলোর লিস্ট থেকে খোঁজা
   if (singleProjectData.selectedWork?.projects) {
      return singleProjectData.selectedWork.projects.find(p => p.id === projectId) || null;
   }

   return null;
});

// ডায়নামিক ব্যাক বাটন (যে সেকশন থেকে এসেছে সেখানেই ফিরিয়ে নিয়ে যাবে)
const goBack = () => {
   router.back();
};
</script>

<template>
   <div class="bg-[#0f0d0b] min-h-screen text-slate-100 py-24 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-white">
      <div class="max-w-[1440px] mx-auto">

         <!-- Back Button -->
         <div class="mb-8">
            <button @click="goBack" class="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:underline cursor-pointer">
               <span>←</span> <span>Back to Previous Section</span>
            </button>
         </div>

         <div v-if="projectData">
            
            <!-- Top Hero Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
               
               <!-- Left Info -->
               <div class="lg:col-span-5 flex flex-col justify-between">
                  <div>
                     <span class="inline-block px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-900/50 text-emerald-400 text-xs font-extrabold tracking-widest uppercase mb-4">
                        {{ projectData.badge || projectData.category || 'FEATURED PROJECT' }}
                     </span>
                     <h1 class="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-white">
                        {{ projectData.title }}
                     </h1>
                     <p class="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
                        {{ projectData.description }}
                     </p>

                     <!-- Meta Details Grid (Dynamic) -->
                     <div class="grid grid-cols-2 gap-6 py-6 border-t border-b border-[#26201a] mb-8">
                        <div>
                           <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Industry</div>
                           <div class="text-sm font-bold text-slate-200">{{ projectData.industry || 'eCommerce' }}</div>
                        </div>
                        <div>
                           <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Platform</div>
                           <div class="text-sm font-bold text-slate-200">{{ projectData.platform || 'Shopify' }}</div>
                        </div>
                        <div>
                           <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Duration</div>
                           <div class="text-sm font-bold text-slate-200">{{ projectData.duration || '3 Weeks' }}</div>
                        </div>
                        <div>
                           <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">My Role</div>
                           <div class="text-sm font-bold text-slate-200">{{ projectData.myRole || 'Full-Stack Developer' }}</div>
                        </div>
                     </div>
                  </div>

                  <!-- CTAs -->
                  <div class="flex flex-wrap gap-4">
                     <a :href="projectData.liveUrl || projectData.link || '#'" target="_blank"
                        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/20">
                        <span>View Live Store</span>
                        <Icon icon="lucide:external-link" class="w-4 h-4" />
                     </a>
                     <a :href="projectData.videoUrl || '#'"
                        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#26201a] bg-[#16120e] hover:border-emerald-500 text-white font-bold text-sm transition-all">
                        <Icon icon="lucide:play" class="w-4 h-4 text-emerald-400" />
                        <span>View Case Study Video</span>
                     </a>
                  </div>
               </div>

               <!-- Right Preview Image/Mockup -->
               <div class="lg:col-span-7 bg-[#16120e] border border-[#26201a] rounded-[2.5rem] p-4 sm:p-6 shadow-2xl">
                  <div class="rounded-2xl overflow-hidden border border-[#26201a] bg-[#1c1713] aspect-video flex items-center justify-center">
                     <div v-html="projectData.imageHtml || projectData.image" class="w-full h-full flex items-center justify-center"></div>
                  </div>
               </div>
            </div>

            <!-- Metrics Bar -->
            <div v-if="projectData.metrics && projectData.metrics.length > 0" class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               <div v-for="(metric, mIdx) in projectData.metrics" :key="mIdx" class="bg-[#16120e] border border-[#26201a] rounded-3xl p-6 text-center">
                  <div class="text-3xl sm:text-4xl font-black text-emerald-400 mb-2">{{ metric.value }}</div>
                  <div class="text-xs font-medium text-slate-400">{{ metric.label }}</div>
               </div>
            </div>

            <!-- 4 Column Detailed Breakdown (Challenge, Approach, Solution, Result) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               
               <!-- Challenge -->
               <div class="bg-[#16120e] border border-[#26201a] rounded-3xl p-6">
                  <h3 class="text-xs font-black tracking-widest text-rose-400 uppercase mb-6 flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-rose-500"></span> THE CHALLENGE
                  </h3>
                  <ul class="space-y-4">
                     <li v-for="(item, idx) in projectData.challenges" :key="idx" class="flex items-start gap-3 text-sm text-slate-300">
                        <span class="text-rose-400 font-bold mt-0.5">✕</span>
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>

               <!-- Approach -->
               <div class="bg-[#16120e] border border-[#26201a] rounded-3xl p-6">
                  <h3 class="text-xs font-black tracking-widest text-amber-400 uppercase mb-6 flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-amber-500"></span> THE APPROACH
                  </h3>
                  <ul class="space-y-4">
                     <li v-for="(item, idx) in projectData.approach" :key="idx" class="flex items-start gap-3 text-sm text-slate-300">
                        <span class="text-amber-400 font-bold mt-0.5">✓</span>
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>

               <!-- Solution -->
               <div class="bg-[#16120e] border border-[#26201a] rounded-3xl p-6">
                  <h3 class="text-xs font-black tracking-widest text-sky-400 uppercase mb-6 flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-sky-500"></span> THE SOLUTION
                  </h3>
                  <ul class="space-y-4">
                     <li v-for="(item, idx) in projectData.solutions" :key="idx" class="flex items-start gap-3 text-sm text-slate-300">
                        <span class="text-sky-400 font-bold mt-0.5">✓</span>
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>

               <!-- Result -->
               <div class="bg-[#16120e] border border-[#26201a] rounded-3xl p-6">
                  <h3 class="text-xs font-black tracking-widest text-emerald-400 uppercase mb-6 flex items-center gap-2">
                     <span class="w-2 h-2 rounded-full bg-emerald-500"></span> THE RESULT
                  </h3>
                  <ul class="space-y-4">
                     <li v-for="(item, idx) in projectData.results" :key="idx" class="flex items-start gap-3 text-sm text-slate-300">
                        <span class="text-emerald-400 font-bold mt-0.5">★</span>
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>

            </div>

            <!-- Project Scope & Technologies Split Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
               
               <!-- Scope -->
               <div class="lg:col-span-6 bg-[#16120e] border border-[#26201a] rounded-3xl p-8">
                  <h3 class="text-xl font-black text-white mb-6">PROJECT SCOPE</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div v-for="(scope, sIdx) in projectData.scopes" :key="sIdx" class="flex items-center gap-3 text-sm text-slate-300">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{{ scope }}</span>
                     </div>
                  </div>
               </div>

               <!-- Technologies & Tools -->
               <div class="lg:col-span-6 bg-[#16120e] border border-[#26201a] rounded-3xl p-8">
                  <h3 class="text-xl font-black text-white mb-6">TECHNOLOGIES & TOOLS</h3>
                  <div class="flex flex-wrap gap-4">
                     <div v-for="(tool, tIdx) in projectData.tools" :key="tIdx" class="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#1c1713] border border-[#2d2620] text-slate-200 text-xs font-bold">
                        <Icon v-if="tool.icon" :icon="tool.icon" class="w-5 h-5" />
                        <span>{{ typeof tool === 'string' ? tool : tool.name }}</span>
                     </div>
                  </div>
               </div>

            </div>

            <!-- Testimonial Section -->
            <div v-if="projectData.testimonial" class="bg-[#16120e] border border-[#26201a] rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
               <div class="text-emerald-500 text-6xl font-serif shrink-0">“</div>
               <div>
                  <p class="text-lg sm:text-xl italic text-slate-300 mb-6 leading-relaxed">
                     "{{ projectData.testimonial.quote }}"
                  </p>
                  <div>
                     <div class="font-bold text-white text-base">{{ projectData.testimonial.author }}</div>
                     <div class="text-xs text-slate-400">{{ projectData.testimonial.title }}</div>
                  </div>
               </div>
            </div>

         </div>

         <!-- Not Found State -->
         <div v-else class="text-center py-32">
            <h2 class="text-3xl font-black mb-4">Project Not Found</h2>
            <p class="text-slate-400 mb-8">The project you are trying to view does not exist or has been removed.</p>
            <router-link to="/" class="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-sm">
               Return Home
            </router-link>
         </div>

      </div>
   </div>
</template>