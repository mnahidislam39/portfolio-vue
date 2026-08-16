<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';

// Swiper Vue.js components & modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialsData = portfolioData.testimonials;
const modules = [Navigation, Pagination];
</script>

<template>
   <section id="testimonials"
      class="relative px-4 py-24 overflow-hidden bg-[#fbf9f4] dark:bg-[#0f0d0b] testimonials-section sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <div id="testimonials-container" class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Top Section: Header & Featured Testimonial Banner Grid -->
         <div class="grid items-center grid-cols-1 gap-8 mb-16 lg:grid-cols-12">

            <!-- Left: Title, Description & Rating Badge -->
            <div class="flex flex-col justify-between lg:col-span-5">
               <div>
                  <div id="section-tag-wrapper" class="flex flex-col items-start mb-4">
                     <span id="section-number-tag"
                        class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
                           testimonialsData.sectionTag }}</span>
                     <div id="section-line-indicator" class="relative flex items-center justify-start w-36">
                        <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent">
                        </div>
                        <span class="relative z-10 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                     </div>
                  </div>

                  <h2 class="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900 dark:text-white"
                     v-html="testimonialsData.title"></h2>
                  <p class="mb-8 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">{{ testimonialsData.description }}
                  </p>
               </div>

               <!-- Rating Box (5.0 with Stars) -->
               <div class="flex items-center gap-4 p-4 bg-white dark:bg-[#16120e] border shadow-sm border-slate-200/90 dark:border-[#26201a] rounded-3xl w-fit">
                  <div
                     class="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-2 rounded-2xl text-emerald-800 dark:text-emerald-400 font-black text-lg">
                     <Icon icon="lucide:star" class="text-xl text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" /> {{
                        testimonialsData.rating }}
                  </div>
                  <div>
                     <div class="flex items-center gap-1 mb-1 text-emerald-600 dark:text-emerald-400">
                        <Icon v-for="i in 5" :key="i" icon="lucide:star" class="w-4 h-4 fill-emerald-600 dark:fill-emerald-400" />
                     </div>
                     <p class="text-xs font-bold text-slate-500 dark:text-slate-400">{{ testimonialsData.reviewCount }}</p>
                  </div>
               </div>
            </div>

            <!-- Right: Featured Testimonial Banner with Laptop Mockup -->
            <div
               class="lg:col-span-7 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-8 relative">

               <div class="flex-1">
                  <span class="block mb-4 font-serif text-4xl font-bold leading-none text-emerald-600 dark:text-emerald-400">“</span>
                  <p class="mb-6 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                     {{ testimonialsData.featuredReview.quote }}
                  </p>
                  <div>
                     <h4 class="text-sm font-black text-slate-900 dark:text-white">- {{ testimonialsData.featuredReview.author }}</h4>
                     <p class="text-xs font-bold text-slate-400 dark:text-slate-500">{{ testimonialsData.featuredReview.role }}</p>
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

         <!-- Testimonial Cards Slider (4 Cards per row on Large screens) -->
         <div class="relative px-2 mb-16">
            <Swiper :modules="modules" :slides-per-view="1" :space-between="24" :navigation="{
               nextEl: '.testimonial-next-btn',
               prevEl: '.testimonial-prev-btn',
            }" :breakpoints="{
               640: { slidesPerView: 2 },
               1024: { slidesPerView: 4 },
            }" class="pb-12 overflow-visible">
               <SwiperSlide v-for="(review, rIdx) in testimonialsData.reviews" :key="rIdx" class="h-auto">
                  <div
                     class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full hover:border-emerald-500/50 transition-all">
                     <div>
                        <span class="block mb-3 font-serif text-2xl font-bold leading-none text-emerald-600 dark:text-emerald-400">“</span>
                        <p class="mb-6 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{{ review.quote }}</p>

                        <div class="flex items-center gap-1 mb-6 text-emerald-600 dark:text-emerald-400">
                           <Icon v-for="i in 5" :key="i" icon="lucide:star" class="w-3.5 h-3.5 fill-emerald-600 dark:fill-emerald-400" />
                        </div>
                     </div>

                     <div class="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-[#26201a]">
                        <div class="flex items-center gap-3">
                           <img :src="review.avatar" :alt="review.name" class="object-cover w-10 h-10 rounded-full" />
                           <div>
                              <h4 class="text-xs font-black text-slate-900 dark:text-white">{{ review.name }}</h4>
                              <p class="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{{ review.role }}</p>
                           </div>
                        </div>
                        <div
                           class="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400">
                           <Icon :icon="review.icon" />
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>

            <!-- Slider Navigation Buttons -->
            <div class="flex items-center justify-center gap-3 mt-4">
               <button
                  class="flex items-center justify-center w-10 h-10 transition-all bg-white dark:bg-[#16120e] border rounded-full shadow-md cursor-pointer testimonial-prev-btn border-slate-200 dark:border-[#26201a] text-slate-700 dark:text-slate-300 hover:bg-emerald-800 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 hover:border-emerald-800 dark:hover:border-emerald-500">
                  <Icon icon="lucide:chevron-left" class="text-xl" />
               </button>
               <button
                  class="flex items-center justify-center w-10 h-10 transition-all bg-white dark:bg-[#16120e] border rounded-full shadow-md cursor-pointer testimonial-next-btn border-slate-200 dark:border-[#26201a] text-slate-700 dark:text-slate-300 hover:bg-emerald-800 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 hover:border-emerald-800 dark:hover:border-emerald-500">
                  <Icon icon="lucide:chevron-right" class="text-xl" />
               </button>
            </div>
         </div>

         <!-- Bottom Trust & Client Logos Bar -->
         <div
            class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            <!-- Left Trust Badge -->
            <div
               class="flex items-center gap-3 pb-4 pr-0 border-b lg:col-span-3 lg:border-b-0 lg:border-r border-slate-100 dark:border-[#26201a] lg:pb-0 lg:pr-4">
               <div
                  class="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Icon icon="lucide:shield-check" class="text-2xl" />
               </div>
               <div>
                  <h4 class="text-xs font-black text-slate-900 dark:text-white mb-0.5">Long-term Relationships</h4>
                  <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">I believe in building long-term relationships with
                     my clients through trust and results.</p>
               </div>
            </div>

            <!-- Center: Worked with Amazing Clients Logos -->
            <div class="flex flex-col items-center justify-center px-4 lg:col-span-6">
               <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4">Worked with Amazing
                  Clients</span>
               <div
                  class="flex flex-wrap items-center justify-center gap-8 transition-all sm:gap-12 opacity-70 grayscale hover:grayscale-0">
                  <span v-for="(logo, lIdx) in testimonialsData.clientLogos" :key="lIdx"
                     class="text-lg font-black tracking-wider text-slate-700 dark:text-slate-300">
                     {{ logo.name }}
                  </span>
               </div>
            </div>

            <!-- Right Satisfaction Badge -->
            <div
               class="flex items-center gap-3 pt-4 pl-0 border-t lg:col-span-3 lg:border-t-0 lg:border-l border-slate-100 dark:border-[#26201a] lg:pt-0 lg:pl-4">
               <div
                  class="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Icon icon="lucide:thumbs-up" class="text-2xl" />
               </div>
               <div>
                  <h4 class="text-xs font-black text-slate-900 dark:text-white mb-0.5">Client Satisfaction</h4>
                  <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Client satisfaction is my top priority. Their
                     success is mine.</p>
               </div>
            </div>

         </div>

      </div>
   </section>
</template>