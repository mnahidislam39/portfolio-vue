<script setup>
import { footerData } from '../data/';
import { Icon } from '@iconify/vue';

const footer = footerData;
</script>

<template>
   <footer
      class="bg-[#fbf9f4] dark:bg-[#0b0f0e] text-slate-600 dark:text-slate-300 pt-20 pb-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans border-t border-slate-200/90 dark:border-emerald-950/40 transition-colors duration-300">

      <div class="max-w-[1440px] mx-auto">

         <!-- Top CTA Card Banner -->
         <div
            class="bg-white dark:bg-[#0f1715] border border-slate-200/90 dark:border-emerald-900/40 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 mb-20 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">

            <!-- Left Side: Icon & Text -->
            <div class="flex items-center gap-6">
               <div
                  class="flex items-center justify-center w-16 h-16 text-3xl border shadow-inner rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-500 shrink-0">
                  <Icon icon="lucide:send" />
               </div>
               <div>
                  <p class="text-xs font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-500 uppercase mb-1">Have a Project in Mind?
                  </p>
                  <h3 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                     Let’s Build Something <span class="text-emerald-700 dark:text-emerald-500">Amazing</span> Together!
                  </h3>
                  <p class="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">I’m ready to help you turn your ideas into a
                     powerful digital experience.</p>
               </div>
            </div>

            <!-- Right Side: Button & Note -->
            <div class="flex flex-col items-center w-full lg:items-end shrink-0 lg:w-auto">
               <a href="#contact"
                  class="w-full lg:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-700 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-500 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] dark:shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 group">
                  Start Your Project
                  <Icon icon="lucide:arrow-right" class="text-lg transition-transform group-hover:translate-x-1" />
               </a>
               <span class="text-[11px] text-slate-400 dark:text-slate-500 mt-2">I’ll get back to you within <span
                     class="font-bold text-emerald-700 dark:text-emerald-400">24 hours!</span></span>
            </div>

         </div>

         <!-- Main Footer Columns Grid (4 Columns Layout matching the image) -->
         <div class="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

            <!-- Col 1: Brand Info & Quality Badges (Width: 3.5 cols -> col-span-4) -->
            <div class="flex flex-col gap-6 lg:col-span-4">

               <!-- Logo & Name -->
               <div class="flex items-center gap-3">
                  <div
                     class="flex items-center justify-center text-xl font-black border shadow-md w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400">
                     N
                  </div>
                  <div>
                     <h2 class="flex items-center gap-2 text-lg font-black tracking-tight text-slate-900 dark:text-white">
                        Nahid <span class="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-500">Islam</span>
                     </h2>
                     <p class="text-[11px] text-slate-400 dark:text-slate-400 font-medium">Shopify Expert & Full-Stack Developer</p>
                  </div>
               </div>

               <!-- Description -->
               <p class="pr-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  I help businesses build high-converting Shopify stores, stunning websites, and custom web solutions
                  that drive results and growth.
               </p>

               <!-- Feature Bullet Points -->
               <div class="flex flex-col gap-3 pt-2">
                  <div class="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                     <span
                        class="flex items-center justify-center w-5 h-5 text-xs border rounded-full bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold">✓</span>
                     Quality Focused
                  </div>
                  <div class="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                     <span
                        class="flex items-center justify-center w-5 h-5 text-xs border rounded-full bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold">✓</span>
                     On-Time Delivery
                  </div>
                  <div class="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                     <span
                        class="flex items-center justify-center w-5 h-5 text-xs border rounded-full bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold">✓</span>
                     Clear Communication
                  </div>
                  <div class="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                     <span
                        class="flex items-center justify-center w-5 h-5 text-xs border rounded-full bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 shrink-0 font-bold">✓</span>
                     100% Client Satisfaction
                  </div>
               </div>

            </div>

            <!-- Col 2: Quick Links (Width: 2 cols) -->
            <div class="flex flex-col gap-4 lg:col-span-2">
               <h3 class="mb-2 text-sm font-bold tracking-wide text-slate-900 dark:text-white">Quick Links</h3>
               <ul class="flex flex-col gap-3 text-xs">
                  <li><a href="#home"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Home
                        <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  <li><a href="#about"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">About
                        Me <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  <li><a href="#services"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Services
                        <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  <li><a href="#portfolio"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Portfolio
                        <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  <li><a href="#process"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">My
                        Process <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a>
                  </li>
                  <li><a href="#feedback"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Client
                        Feedback <span
                           class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  <li><a href="#faq"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">FAQ
                        <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  <li><a href="#contact"
                        class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Contact
                        <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
               </ul>
            </div>

            <!-- Col 3: Services (Width: 2.5 cols -> lg:col-span-3) -->
            <div class="flex flex-col gap-4 lg:col-span-3">
               <h3 class="mb-2 text-sm font-bold tracking-wide text-slate-900 dark:text-white">Services</h3>
               <ul class="flex flex-col gap-3 text-xs">
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="logos:shopify" class="text-sm shrink-0" /> Shopify Store Development
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="logos:shopify" class="text-sm shrink-0" /> Shopify Theme Customization
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="logos:shopify" class="text-sm shrink-0" /> Shopify App Integration
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="logos:wordpress-icon" class="text-sm shrink-0" /> WordPress Development
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="logos:webflow" class="text-sm shrink-0" /> Webflow Development
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="lucide:code" class="text-sm text-emerald-600 dark:text-emerald-500 shrink-0" /> Custom Web Development
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="lucide:zap" class="text-sm text-emerald-600 dark:text-emerald-500 shrink-0" /> Speed Optimization
                     </a></li>
                  <li><a href="#services" class="flex items-center gap-2 transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <Icon icon="lucide:headphones" class="text-sm text-emerald-600 dark:text-emerald-500 shrink-0" /> Maintenance &
                        Support
                     </a></li>
               </ul>
            </div>

            <!-- Col 4: Resources & Download Resource Card (Width: 3 cols -> lg:col-span-3) -->
            <div class="flex flex-col gap-6 lg:col-span-3">

               <div>
                  <h3 class="mb-2 text-sm font-bold tracking-wide text-slate-900 dark:text-white">Resources</h3>
                  <ul class="flex flex-col gap-3 text-xs">
                     <li><a href="#"
                           class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Blog
                           <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                     <li><a href="#"
                           class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Case
                           Studies <span
                              class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                     <li><a href="#"
                           class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Shopify
                           Tips <span class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a>
                     </li>
                     <li><a href="#"
                           class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Free
                           Resources <span
                              class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                     <li><a href="#"
                           class="flex items-center justify-between transition-colors text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 group">Tools
                           I Use <span
                              class="transition-colors text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">›</span></a></li>
                  </ul>
               </div>

               <!-- Free Resource Box -->
               <div
                  class="bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-950 rounded-2xl p-4 shadow-[0_5px_20px_rgba(0,0,0,0.02)] dark:shadow-sm flex flex-col gap-2 relative">
                  <div class="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                     <Icon icon="lucide:download" class="text-sm" /> Free Resource
                  </div>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-snug">Shopify Store Launch Checklist</p>
                  <a href="#"
                     class="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors flex items-center gap-1 mt-1">
                     Download Now →
                  </a>
               </div>

            </div>

         </div>

         <!-- Divider -->
         <div class="w-full h-[1px] bg-slate-200 dark:bg-emerald-950/60 mb-10"></div>

         <!-- Middle Contact & Socials Bar (Get In Touch & Follow Me matching image) -->
         <div class="grid items-center grid-cols-1 gap-8 mb-10 text-xs lg:grid-cols-12">

            <!-- Contact Details Left (Get In Touch) -->
            <div class="flex flex-col gap-4 lg:col-span-8">
               <h3 class="mb-1 text-sm font-bold tracking-wide text-slate-900 dark:text-white">Get In Touch</h3>
               <div class="flex flex-wrap items-center gap-6 sm:gap-8 text-slate-500 dark:text-slate-400">
                  <a href="mailto:hello@nahidislam.dev"
                     class="flex items-center gap-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                     <Icon icon="lucide:mail" class="text-base text-emerald-600 dark:text-emerald-500" /> hello@nahidislam.dev
                  </a>
                  <a href="tel:+8801712345678" class="flex items-center gap-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                     <Icon icon="lucide:phone" class="text-base text-emerald-600 dark:text-emerald-500" /> +880 1712 345 678
                  </a>
                  <div class="flex items-center gap-2">
                     <Icon icon="lucide:map-pin" class="text-base text-emerald-600 dark:text-emerald-500" /> Ishwardi, Pabna Bangladesh
                  </div>
                  <div class="flex items-center gap-2">
                     <Icon icon="lucide:clock" class="text-base text-emerald-600 dark:text-emerald-500" /> Response Time Within 24 Hours
                  </div>
               </div>
            </div>

            <!-- Social Icons Right (Follow Me) -->
            <div class="flex flex-col gap-3 lg:col-span-4 lg:items-end">
               <span class="mb-1 text-sm font-bold tracking-wide text-slate-900 dark:text-white">Follow Me</span>
               <div class="flex items-center gap-3">
                  <a href="#"
                     class="w-9 h-9 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-950 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-700 shadow-sm transition-all">
                     <Icon icon="lucide:linkedin" class="text-sm" />
                  </a>
                  <a href="#"
                     class="w-9 h-9 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-950 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-700 shadow-sm transition-all">
                     <Icon icon="lucide:github" class="text-sm" />
                  </a>
                  <a href="#"
                     class="w-9 h-9 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-950 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-700 shadow-sm transition-all">
                     <Icon icon="lucide:twitter" class="text-sm" />
                  </a>
                  <a href="#"
                     class="w-9 h-9 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-950 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-700 shadow-sm transition-all">
                     <Icon icon="lucide:globe" class="text-sm" />
                  </a>
                  <a href="#"
                     class="w-9 h-9 rounded-full bg-white dark:bg-[#0f1715] border border-slate-200 dark:border-emerald-950 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 dark:hover:border-emerald-700 shadow-sm transition-all">
                     <Icon icon="lucide:dribbble" class="text-sm" />
                  </a>
               </div>
            </div>

         </div>

         <!-- Divider -->
         <div class="w-full h-[1px] bg-slate-200 dark:bg-emerald-950/60 mb-8"></div>

         <!-- Bottom Copyright & Tech Stack Row -->
         <div class="flex flex-col items-center justify-between gap-6 text-xs md:flex-row text-slate-400 dark:text-slate-500">

            <!-- Copyright & Tagline -->
            <div class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
               <p>© 2026 Nahid Islam. All rights reserved.</p>
               <span class="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
               <p>Building Digital Experiences That Drive Results.</p>
            </div>

            <!-- Privacy & Legal Links -->
            <div class="flex items-center gap-4">
               <a href="#" class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">Privacy Policy</a>
               <span>|</span>
               <a href="#" class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">Terms of Service</a>
               <span>|</span>
               <a href="#" class="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">Refund Policy</a>
            </div>

            <!-- Proudly working with Tech Badges -->
            <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400">
               <span class="text-[11px]">Proudly working with</span>
               <div class="flex items-center gap-4 opacity-80">
                  <!-- Shopify -->
                  <span class="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-white">
                     <Icon icon="logos:shopify" class="text-base" /> shopify
                  </span>
                  <!-- WordPress -->
                  <span class="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-white">
                     <Icon icon="logos:wordpress-icon" class="text-base" />
                  </span>
                  <!-- Webflow -->
                  <span class="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-white">
                     <Icon icon="logos:webflow" class="text-base" /> webflow
                  </span>
                  <!-- Laravel -->
                  <span class="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-white">
                     <Icon icon="logos:laravel" class="text-base" /> Laravel
                  </span>
               </div>
            </div>

         </div>

      </div>
  
   </footer>
</template>