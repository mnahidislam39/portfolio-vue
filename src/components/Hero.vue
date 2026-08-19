<script setup>
import { heroData } from '../data';
import { Icon } from '@iconify/vue';

const hero = heroData;
</script>

<template>
  <section id="home"
    class="hero-section relative  bg-transparent text-slate-900 dark:text-white pt-32 md:pt-40 pb-0 md:pb-20  px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between transition-colors duration-300">
    <div
      class="hero-bg-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]">
    </div>

    <div class="hero-container flex flex-col max-w-[1400px] mx-auto w-full relative z-10 my-0">

      <div class="hero-grid grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative w-full text-center md:text-left">

        <div class="hero-left-content  lg:col-span-6 flex flex-col items-center md:items-start gap-8 z-20">
          
          <!-- টপ ব্যাজ -->
          <div class="hero-top-wrapper relative flex justify-center items-center">
            <div
              class="hero-badge-box inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-900/60 shadow-sm text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors duration-300">
              <span
                class="hero-badge-icon w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs animate-pulse">🛡️</span>
              <span class="hero-badge-text uppercase">{{ hero.badge }}</span>
            </div>
          </div>

          <!-- মেইন টাইটেল এবং সাবটাইটেল -->
          <div class="hero-main-title-box text-center md:text-left">
            <h1
              class="hero-main-title text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors duration-300">
              {{ hero.titlePrefix }} <span class="hero-highlight-name text-emerald-600 dark:text-emerald-400">{{
                hero.highlightName }}</span>
            </h1>
            <p
              class="hero-subtitle max-w-[600px] text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg mt-4 transition-colors duration-300">
              {{ hero.subtitle }}
            </p>
            <p
              class="hero-subtitle max-w-[600px] text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg mt-2 transition-colors duration-300">
              {{ hero.heroDescription }}
            </p>
          </div>

         
          <!-- অ্যাকশন বাটন গ্রুপ -->
          <div class="hero-cta-group flex flex-wrap items-center gap-4 relative z-30">
            <a class="hero-primary-btn flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
              :href="hero.primaryCta.link">
              <span>{{ hero.primaryCta.text }}</span>
              <div
                class="hero-btn-arrow-box w-6 h-6 rounded-full bg-black/20 text-white flex items-center justify-center text-xs">
                <Icon icon="lucide:arrow-right" />
              </div>
            </a>
            <a class="hero-secondary-btn px-8 py-3.5 rounded-full bg-white dark:bg-[#0f1715] border border-slate-300 dark:border-emerald-900/60 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-[#16221f] transition-all shadow-md cursor-pointer"
              :href="hero.secondaryCta.link">
              {{ hero.secondaryCta.text }}
            </a>
          </div>

             <div class="skills-wrapper relative flex flex-row items-center">
              <div
                class="skill-icon-item relative flex items-center justify-center cursor-pointer group [&:not(:first-child)]:-ml-4"
                v-for="(skill, sIdx) in hero.skillIcons" :key="sIdx" :title="skill.name">
                <div class="skill-ping-ring absolute inset-0 rounded-full bg-[#e5e0d3] ">
                </div>
                <div
                  class="skill-circle-box relative flex items-center justify-center w-11 h-11 transition-transform border-2 border-[#e5e0d3] dark:border-[#fcfcfc] rounded-full shadow-lg group-hover:scale-110 group-hover:z-30 transition-colors duration-300"
                  :class="[skill.style === 'amber' ? ' text-black' : 'bg-[#e5e0d3]  text-slate-900 dark:text-white ']">
                  <Icon class="skill-svg-icon text-lg" :icon="skill.icon" />
                </div>
              </div>
            </div>

          <div class="flex flex-wrap items-center md:items-start justify-center md:justify-start w-full pt-6 border-t border-slate-200 dark:border-emerald-900/60 gap-6">
            
            <!-- <div class="social-wrapper space-y-2">
              <p class="social-title text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Follow
                Me On</p>
              <div class="social-icons-box flex items-center gap-3">
                <a class="social-icon-item w-11 h-11 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-900/60 shadow-sm flex items-center justify-center text-slate-800 dark:text-slate-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all"
                  v-for="(social, sIdx) in hero.socials" :key="sIdx" :href="social.link">
                  <Icon class="text-sm" :icon="social.icon" />
                </a>
              </div>
            </div> -->

            <div class="review-wrapper justify-center md:justify-start flex items-center  gap-4">
              <div class="review-avatars flex items-center -space-x-2">
                <img
                  class="avatar-img w-9 h-9 rounded-full border-2 border-[#fbf9f4] dark:border-[#0b0f0e] object-cover shadow-sm transition-colors duration-300"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                  alt="Client">
                <img
                  class="avatar-img w-9 h-9 rounded-full border-2 border-[#fbf9f4] dark:border-[#0b0f0e] object-cover shadow-sm transition-colors duration-300"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt="Client">
                <img
                  class="avatar-img w-9 h-9 rounded-full border-2 border-[#fbf9f4] dark:border-[#0b0f0e] object-cover shadow-sm transition-colors duration-300"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                  alt="Client">
                <img
                  class="avatar-img w-9 h-9 rounded-full border-2 border-[#fbf9f4] dark:border-[#0b0f0e] object-cover shadow-sm transition-colors duration-300"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                  alt="Client">
              </div>
              <div class="review-content-box">
                <h4
                  class="review-count text-base font-black text-slate-900 dark:text-white transition-colors duration-300">
                  {{ hero.reviewCount }} <span class="review-rating text-slate-600 dark:text-slate-400 font-semibold">{{
                    hero.reviewRating }}</span>
                </h4>
                <p class="review-subtext text-xs text-slate-500 dark:text-slate-400 font-medium">{{ hero.reviewSubtext }}
                </p>
              </div>
            </div>

          </div>

        </div>

        <!-- রাইট কলাম: ফ্লোটিং ব্যাজ সহ ছবি সেকশন -->
        <div class="hero-right-col  lg:col-span-6 flex flex-col items-center justify-center relative min-h-[500px]">
          
          <!-- ব্যাকগ্রাউন্ড গ্লো এবং রিং ইফেক্ট -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div class="w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl"></div>
            <div class="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-emerald-500/20 animate-spin-slow"></div>
          </div>

          <!-- মূল ছবি -->
          <div class="reative w-full max-w-[380px] sm:max-w-[450px] flex justify-center">
            <img class="absolute bottom-[60px]  md:bottom-[-10%]  hero-main-image w-full max-h-[400px] md:max-h-[500px] h-full md:h-full md:bottom-0 object-cover md:object-contain md:transform scale-[1.5]  md:scale-[1.55]  object-top drop-shadow-2xl " :src="hero.image"
              alt="Nahid">
          </div>

          <!-- ফ্লোটিং ব্যাজ ১: Top Left (Shopify Development) -->
          <div class="absolute left-2 sm:left-6 top-60 md:top-16 sm:top-24 bg-white dark:bg-[#121a18] border border-slate-200 dark:border-emerald-900/50 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
            <div class=" w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-pulse">
              <Icon icon="lucide:shopping-bag" class="text-base" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-900 dark:text-white uppercase">Shopify Development</p>
            </div>
          </div>

          <!-- ফ্লোটিং ব্যাজ ২: Top Right (Custom Liquid) -->
          <div class="absolute right-2 sm:right-6 top-75 md:top-32 bg-white dark:bg-[#121a18] border border-slate-200 dark:border-emerald-900/50 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-pulse">
              <Icon icon="lucide:code" class="text-base" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-900 dark:text-white uppercase">Custom Liquid</p>
            </div>
          </div>

          <!-- ফ্লোটিং ব্যাজ ৩: Bottom Left (Performance Focused) -->
          <div class="absolute left-2 sm:left-4 bottom-20 md:bottom-28 bg-white dark:bg-[#121a18] border border-slate-200 dark:border-emerald-900/50 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20 ">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-pulse">
              <Icon icon="lucide:zap" class="text-base" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-900 dark:text-white uppercase">Performance Focused</p>
            </div>
          </div>

          <!-- ফ্লোটিং ব্যাজ ৪: Bottom Right (eCommerce Solutions) -->
          <div class="absolute right-2 sm:right-4 bottom-5 sm:bottom-20 bg-white dark:bg-[#121a18] border border-slate-200 dark:border-emerald-900/50 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-pulse">
              <Icon icon="lucide:layers" class="text-base" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-900 dark:text-white uppercase">eCommerce Solutions</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slowSpin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: slowSpin 20s linear infinite;
}
</style>