<script setup>
import { clientReviewData } from '../data'; 
import { Icon } from '@iconify/vue';

// Swiper Vue.js components & modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialsData = clientReviewData; 
const modules = [Navigation, Pagination];
</script>

<template>
   <section id="testimonials"
      class="relative px-4 py-20 overflow-hidden bg-[#fbf9f4] dark:bg-[#0f0d0b] testimonials-section sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <div id="testimonials-container" class="testimonials-main-container max-w-[1440px] mx-auto relative z-10 flex flex-col justify-center align-center gap-10">

         <!-- Top Section: Header & Featured Testimonial Banner Grid -->
         <div class="testimonials-top-grid flex items-center justify-center gap-8">
            <div class="testimonials-left-wrapper flex flex-col justify-center text-center items-center">
               <div class="testimonials-title-desc-box flex flex-col items-center justify-center text-center max-w-2xl">
                  <div id="section-tag-wrapper" class="section-tag-container flex flex-col items-start mb-4">
                     <span id="section-number-tag"
                        class="section-number-text text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{
                           testimonialsData.sectionTag }}</span>
                     <div id="section-line-indicator" class="section-line-wrapper relative flex items-center justify-start w-36">
                        <div class="section-line-bg absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent">
                        </div>
                        <span class="section-line-dot relative z-10 w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                     </div>
                  </div>

                  <h2 class="testimonials-main-title mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900 dark:text-white"
                     v-html="testimonialsData.title"></h2>
                  <p class="testimonials-main-desc mb-8 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">{{ testimonialsData.description }}
                  </p>
               </div>

               <!-- Rating Box (5.0 with Stars) -->
               <div class="testimonials-rating-box flex items-center gap-4 p-4 bg-white dark:bg-[#16120e] border shadow-sm border-slate-200/90 dark:border-[#26201a] rounded-3xl w-fit">
                  <div
                     class="testimonials-rating-badge flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-2 rounded-2xl text-emerald-800 dark:text-emerald-400 font-black text-lg">
                     <Icon icon="lucide:star" class="text-xl text-emerald-600 dark:text-emerald-400 fill-emerald-600 dark:fill-emerald-400" /> {{
                        testimonialsData.rating }}
                  </div>
                  <div class="testimonials-rating-info-box">
                     <div class="testimonials-stars-flex flex items-center gap-1 mb-1 text-emerald-600 dark:text-emerald-400">
                        <Icon v-for="i in 5" :key="i" icon="lucide:star" class="w-4 h-4 fill-emerald-600 dark:fill-emerald-400" />
                     </div>
                     <p class="testimonials-review-count text-xs font-bold text-slate-500 dark:text-slate-400">{{ testimonialsData.reviewCount }}</p>
                  </div>
               </div>
            </div>          
         </div>

         <!-- Testimonial Cards Slider (4 Cards per row on Large screens) -->
         <div class="testimonials-slider-wrapper relative px-2">
            <Swiper :modules="modules" :slides-per-view="1" :space-between="24" :navigation="{
               nextEl: '.testimonial-next-btn',
               prevEl: '.testimonial-prev-btn',
            }" :breakpoints="{
               640: { slidesPerView: 2 },
               1024: { slidesPerView: 4 },
            }" class="testimonials-swiper pb-12 overflow-visible">
               <SwiperSlide v-for="(review, rIdx) in testimonialsData.reviews" :key="rIdx" class="h-auto">
                  <div
                     class="testimonials-card-item bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full hover:border-emerald-500/50 transition-all">
                     <div class="testimonials-card-top-content">
                        <span class="testimonials-card-quote-symbol block mb-3 font-serif text-2xl font-bold leading-none text-emerald-600 dark:text-emerald-400">“</span>
                        <p class="testimonials-card-quote mb-6 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{{ review.quote }}</p>

                        <div class="testimonials-card-stars-flex flex items-center gap-1 mb-6 text-emerald-600 dark:text-emerald-400">
                           <Icon v-for="i in 5" :key="i" icon="lucide:star" class="w-3.5 h-3.5 fill-emerald-600 dark:fill-emerald-400" />
                        </div>
                     </div>

                     <div class="testimonials-card-footer-flex flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-[#26201a]">
                        <div class="testimonials-card-user-info flex items-center gap-3">
                           <img :src="review.avatar" :alt="review.name" class="testimonials-card-avatar object-cover w-10 h-10 rounded-full" />
                           <div class="testimonials-card-text-box">
                              <h4 class="testimonials-card-name text-xs font-black text-slate-900 dark:text-white">{{ review.name }}</h4>
                              <p class="testimonials-card-role text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{{ review.role }}</p>
                           </div>
                        </div>
                        <div
                           class="testimonials-card-icon-badge flex items-center justify-center w-8 h-8 text-sm rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400">
                           <Icon :icon="review.icon" />
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>

            <!-- Slider Navigation Buttons -->
            <div class="testimonials-nav-buttons-flex flex items-center justify-center gap-3 mt-4">
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

    

      </div>
   </section>
</template>