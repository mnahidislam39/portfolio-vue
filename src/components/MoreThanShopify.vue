<script setup>
import { portfolioData } from '../data/portfolioData.js';
import { Icon } from '@iconify/vue';
const data = portfolioData.moreThanShopify;
</script>

<template>
   <section :id="data.id" class="more-than-shopify-section bg-[#fbf9f4] dark:bg-[#0f0d0b] py-24 px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">

      <!-- Max width container with custom class -->
      <div id="more-than-shopify-container" class="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-8 lg:px-12">

         <!-- Section Header Top Layout -->
         <div id="section-header-wrapper" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">

            <!-- Left Title & Description -->
            <div id="header-title-col" class="lg:col-span-7">
               <div id="section-tag-wrapper" class="flex flex-col items-start mb-6">
                  <span id="section-number-tag"
                     class="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">{{ data.sectionNumber
                     }}</span>
                  <div id="section-line-indicator" class="relative flex items-center justify-start w-36">
                     <div class="absolute w-full h-[1.5px] bg-gradient-to-r from-emerald-600/40 to-transparent"></div>
                     <span class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 relative z-10"></span>
                  </div>
               </div>

               <h2 id="section-main-heading" class="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
                  Shopify is my specialty. <br class="hidden sm:inline" />
                  <span class="text-emerald-600 dark:text-emerald-400">Full-stack development</span> <br class="hidden sm:inline" />
                  is my foundation.
               </h2>

               <p id="section-description"
                  class="text-slate-500 dark:text-slate-400 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
                  {{ data.description }}
               </p>
            </div>

            <!-- Right Side: Circular Diagram Illustration Area -->
            <div id="header-graphic-col" class="lg:col-span-5 flex justify-center lg:justify-end">
               <div id="circular-diagram-wrapper"
                  class="relative w-full max-w-[420px] h-[320px] flex items-center justify-center">

                  <!-- Circular Dashed Orbit Ring -->
                  <div id="dashed-orbit-ring"
                     class="absolute w-[260px] h-[260px] rounded-full border border-dashed border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center">
                     <span
                        class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#fbf9f4] dark:ring-[#0f0d0b]"></span>
                     <span
                        class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#fbf9f4] dark:ring-[#0f0d0b]"></span>
                     <span
                        class="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#fbf9f4] dark:ring-[#0f0d0b]"></span>
                     <span
                        class="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#fbf9f4] dark:ring-[#0f0d0b]"></span>
                  </div>

                  <!-- Central Shopify Bag Icon -->
                  <div id="central-shopify-badge"
                     class="relative z-10 w-24 h-24 bg-white dark:bg-[#16120e] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-[#26201a] flex items-center justify-center">
                     <div class="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-md">
                        <span class="text-white font-black text-3xl tracking-tight">S</span>
                     </div>
                  </div>

                  <!-- Floating Card 1: Clean Code -->
                  <div id="floating-badge-cleancode"
                     class="absolute top-4 left-0 sm:-left-4 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-2xl px-3.5 py-2 shadow-sm flex items-center gap-2.5 z-20">
                     <span class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">&lt;/&gt;</span>
                     <span class="text-xs font-black text-slate-800 dark:text-slate-200">Clean Code</span>
                  </div>

                  <!-- Floating Card 2: Problem Solver -->
                  <div id="floating-badge-problemsolver"
                     class="absolute top-4 right-0 sm:-right-4 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-2xl px-3.5 py-2 shadow-sm flex items-center gap-2.5 z-20">
                     <span class="text-emerald-600 dark:text-emerald-400 text-xs">💡</span>
                     <span class="text-xs font-black text-slate-800 dark:text-slate-200">Problem Solver</span>
                  </div>

                  <!-- Floating Card 3: Performance Focused -->
                  <div id="floating-badge-performance"
                     class="absolute bottom-4 left-0 sm:-left-4 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-2xl px-3.5 py-2 shadow-sm flex items-center gap-2.5 z-20">
                     <span class="text-emerald-600 dark:text-emerald-400 text-xs">⚡</span>
                     <span class="text-xs font-black text-slate-800 dark:text-slate-200">Performance Focused</span>
                  </div>

                  <!-- Floating Card 4: Business Focused -->
                  <div id="floating-badge-business"
                     class="absolute bottom-4 right-0 sm:-right-4 bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-2xl px-3.5 py-2 shadow-sm flex items-center gap-2.5 z-20">
                     <span class="text-emerald-600 dark:text-emerald-400 text-xs">🎯</span>
                     <span class="text-xs font-black text-slate-800 dark:text-slate-200">Business Focused</span>
                  </div>

               </div>
            </div>

         </div>

         <!-- 3 Columns Capability Cards Grid -->
         <div id="capability-cards-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            <!-- Card 01: Shopify -->
            <div id="card-shopify"
               class="bg-[#f4faf6] dark:bg-[#131b15] border border-emerald-100 dark:border-emerald-950/60 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300">
               <div id="card-shopify-content">
                  <div id="card-shopify-header" class="flex items-center justify-between mb-6">
                     <span
                        class="text-xs font-black text-emerald-700 dark:text-emerald-300 tracking-wider uppercase bg-white dark:bg-[#1a261e] px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/50">Primary
                        Expertise</span>
                     <span class="text-2xl font-black text-emerald-200 dark:text-emerald-900/50">01</span>
                  </div>

                  <div id="card-shopify-title-row" class="flex items-center gap-3 mb-3">
                     <div
                        class="w-10 h-10 rounded-xl bg-white dark:bg-[#1a261e] border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center shadow-sm">
                        <span class="text-emerald-600 dark:text-emerald-400 font-black text-lg">S</span>
                     </div>
                     <h3 class="text-3xl font-black text-slate-900 dark:text-white">Shopify</h3>
                  </div>

                  <p id="card-shopify-desc" class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">End-to-end Shopify
                     development and customization that drives results for eCommerce businesses.</p>

                  <div class="Features mx-h-[80%] flex gap-6 items-start justify-between">
                     <!-- Features List Below -->
                     <ul id="card-shopify-list" class="space-y-2.5">
                        <li v-for="(feature, fIdx) in [
                           'Shopify Store Development',
                           'Theme Development & Customization',
                           'Liquid Programming',
                           'Shopify 2.0 Development',
                           'Custom Sections & Templates',
                           'App Integration',
                           'Performance Optimization'
                        ]" :key="fIdx" class="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                           <span
                              class="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] shrink-0 font-black">✓</span>
                           <span>{{ feature }}</span>
                        </li>
                     </ul>

                     <!-- Preview Image First -->
                     <div id="card-shopify-preview"
                        class="bg-white dark:bg-[#1a261e] border border-emerald-100/80 dark:border-emerald-900/50 rounded-2xl p-3 shadow-sm mb-6 h-full">
                        <img
                           src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                           alt="Shopify Preview" class="w-full h-full object-cover rounded-xl" />
                     </div>
                  </div>
               </div>
            </div>

            <!-- Card 02: WordPress -->
            <div id="card-wordpress"
               class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300">
               <div id="card-wordpress-content">
                  <div id="card-wordpress-header" class="flex items-center justify-between mb-6">
                     <span
                        class="text-xs font-black text-sky-600 dark:text-sky-400 tracking-wider uppercase bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-100 dark:border-sky-900/50">CMS
                        Development</span>
                     <span class="text-2xl font-black text-slate-200 dark:text-slate-800">02</span>
                  </div>

                  <div id="card-wordpress-title-row" class="flex items-center gap-3 mb-3">
                     <div
                        class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-900/50 flex items-center justify-center shadow-sm">
                        <span class="text-sky-600 dark:text-sky-400 font-bold text-lg">W</span>
                     </div>
                     <h3 class="text-3xl font-black text-slate-900 dark:text-white">WordPress</h3>
                  </div>

                  <p id="card-wordpress-desc" class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Custom WordPress
                     solutions that are fast, secure and easy to manage.</p>

                  <!-- Features List & Preview Image -->
                  <div id="card-wordpress-inner" class="space-y-4">
                     <ul id="card-wordpress-list" class="space-y-2.5">
                        <li v-for="(feature, fIdx) in [
                           'WordPress Development',
                           'WooCommerce Solutions',
                           'Custom Theme Development',
                           'Plugin Customization',
                           'Elementor Development',
                           'Speed Optimization',
                           'Website Maintenance'
                        ]" :key="fIdx" class="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                           <span
                              class="w-4 h-4 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center text-[10px] shrink-0 font-black">✓</span>
                           <span>{{ feature }}</span>
                        </li>
                     </ul>

                     <div id="card-wordpress-preview"
                        class="bg-slate-50 dark:bg-[#1c1713] border border-slate-200/80 dark:border-[#2b241d] rounded-2xl p-3 shadow-sm mt-4">
                        <img
                           src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                           alt="WordPress Preview" class="w-full h-28 object-cover rounded-xl" />
                     </div>
                  </div>
               </div>
            </div>

            <!-- Card 03: Full-Stack -->
            <div id="card-fullstack"
               class="bg-[#fcf7f2] dark:bg-[#191512] border border-amber-100/80 dark:border-amber-950/50 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300">
               <div id="card-fullstack-content">
                  <div id="card-fullstack-header" class="flex items-center justify-between mb-6">
                     <span
                        class="text-xs font-black text-amber-700 dark:text-amber-400 tracking-wider uppercase bg-white dark:bg-[#221c17] px-3 py-1 rounded-full border border-amber-100 dark:border-amber-900/50">Custom
                        Solutions</span>
                     <span class="text-2xl font-black text-amber-200 dark:text-amber-900/40">03</span>
                  </div>

                  <div id="card-fullstack-title-row" class="flex items-center gap-3 mb-3">
                     <div
                        class="w-10 h-10 rounded-xl bg-white dark:bg-[#221c17] border border-amber-100 dark:border-amber-900/50 flex items-center justify-center shadow-sm">
                        <span class="text-amber-600 dark:text-amber-400 font-mono text-sm font-bold">&lt;/&gt;</span>
                     </div>
                     <h3 class="text-3xl font-black text-slate-900 dark:text-white">Full-Stack</h3>
                  </div>

                  <p id="card-fullstack-desc" class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">Custom web
                     applications and solutions using modern technologies.</p>

                  <ul id="card-fullstack-list" class="space-y-2.5 mb-6">
                     <li v-for="(feature, fIdx) in [
                        'HTML, CSS, SCSS, Tailwind CSS',
                        'JavaScript & jQuery',
                        'Vue.js Development',
                        'PHP Development',
                        'Laravel Development',
                        'API Development',
                        'MySQL Database Design'
                     ]" :key="fIdx" class="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                        <span
                           class="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] shrink-0 font-black">✓</span>
                        <span>{{ feature }}</span>
                     </li>
                  </ul>

                  <!-- Code Editor Terminal Box -->
                  <div id="card-fullstack-terminal"
                     class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm text-emerald-400 font-mono text-[11px] overflow-hidden relative">
                     <div id="terminal-header"
                        class="flex items-center justify-between mb-2 pb-2 border-b border-slate-800 text-slate-400">
                        <span class="flex gap-1.5"><span
                              class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span><span
                              class="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span><span
                              class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span></span>
                        <span>api.js</span>
                     </div>
                     <code>// Full-stack architecture<br/>const app = express();<br/>app.use(router);<br/>export default app;</code>
                  </div>
               </div>
            </div>

         </div>

         <!-- Bottom CTA Banner Card -->
         <div id="bottom-cta-banner"
            class="bg-white dark:bg-[#16120e] border border-slate-200/90 dark:border-[#26201a] rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-6">

            <div id="cta-left-content" class="flex items-center gap-5">
               <div
                  class="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center shrink-0">
                  <svg class="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" stroke-width="2"
                     viewBox="0 0 24 24">
                     <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
               </div>
               <div>
                  <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-1">{{ data.ctaBox.title }}</h3>
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{{ data.ctaBox.description }}</p>
               </div>
            </div>

            <div id="cta-right-content"
               class="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100 dark:border-[#26201a]">
               <div class="hidden sm:block text-right">
                  <p class="text-xs font-bold text-slate-900 dark:text-white">The right solution for every need.</p>
                  <p class="text-xs text-slate-400 dark:text-slate-500 font-medium">The best results for your business.</p>
               </div>
               <a :href="data.ctaBox.buttonLink" id="cta-action-button"
                  class="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0d2318] dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-slate-900 font-bold text-sm transition-all duration-300 shadow-md">
                  <span>{{ data.ctaBox.buttonText }}</span>
                  <span>→</span>
               </a>
            </div>

         </div>

      </div>
   </section>
</template>