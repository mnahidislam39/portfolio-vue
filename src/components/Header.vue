<script setup>
   import { ref, onMounted, onUnmounted } from 'vue';
   import { headerData } from '../data'; 
   import { Icon } from '@iconify/vue';
   import { useDark } from '../composables/useDark.js';

   const header = headerData;

   const { isDark, toggleDark } = useDark();

   const isOpen = ref(false);

   const activeSection = ref('home');
   const isScrolled = ref(false);

const toggleMenu = () => {
   isOpen.value = !isOpen.value;
};

const handleNavClick = (href) => {
   activeSection.value = href.substring(1);
   isOpen.value = false;
};

const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }

  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 200; 

  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.offsetHeight;
    const sectionId = sec.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = sectionId;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
   <header id="site-header-wrapper"
      :class="[
         'fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 pointer-events-none',
         isScrolled 
            ? (isDark ? 'pt-0 px-0 bg-[#120f0c] text-white border-[#26211c] shadow-[0_15px_35px_rgba(0,0,0,0.25)] ' : 'pt-0 px-0 bg-[#fbf9f4] text-slate-900 border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.06)] ') 
            : 'pt-4 px-4'
      ]"
   >
      <div id="site-nav-container"
         :class="[
            isDark ? 'bg-[#120f0c] text-white border-[#26211c] shadow-[0_15px_35px_rgba(0,0,0,0.25)]' : 'bg-[#fbf9f4] text-slate-900 border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.06)]',
            isScrolled ? 'w-full max-w-[1440px] rounded-none border-x-0 border-t-0 px-6 sm:px-12 py-3.5 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95 shadow-md' : 'w-full max-w-[1440px] rounded-full px-4 py-2.5 sm:px-6 sm:py-3 border '
         ]"
         class="pointer-events-auto flex items-center justify-between transition-all duration-300 relative">

         <!-- Logo (Image convert & redirect to #home) -->
         <a id="site-logo-link" href="/" @click="handleNavClick('#home')" class="flex items-center gap-3 cursor-pointer group">
            <img id="site-logo-image"
              :src="headerData.logoImg" 
              alt="Logo" 
              class="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <!-- <span v-if="headerData.logoText" :class="isDark ? 'text-white' : 'text-slate-900'" class="text-xl font-black tracking-tight transition-colors duration-300">
               {{ headerData.logoText }}
            </span> -->
         </a>

         <!-- Desktop Nav Links (Dynamic Active Color) -->
         <nav id="desktop-nav-menu" :class="isDark ? 'text-slate-300' : 'text-slate-600'" class="items-center hidden gap-8 text-xs font-bold lg:flex transition-colors duration-300">
            <a id="desktop-nav-link-item"
               v-for="(link, idx) in headerData.navLinks" 
               :key="idx" 
               :href="link.href" 
               @click="handleNavClick(link.href)"
               :class="[
                  'transition-colors relative py-1 text-sm uppercase',
                  activeSection === link.href.substring(1)
                     ? 'text-[#009966]' 
                     : (isDark ? 'hover:text-[#009966]' : 'hover:text-[#009966]')
               ]"
            >
               {{ link.name }}
               <span id="desktop-nav-active-indicator"
                  v-if="activeSection === link.href.substring(1)" 
                  class="absolute bottom-0 left-0 w-full h-[2px] bg-[#009966] rounded-full"
               ></span>
            </a>
         </nav>

         <!-- Actions (Theme Toggle, CTA Button & Mobile Hamburger) -->
         <div id="header-actions-group" class="flex items-center gap-3">
            <button id="theme-toggle-button" @click="toggleDark"
               class="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#1b1713] border border-slate-200 dark:border-[#2d2620] flex items-center justify-center text-[#009966] hover:bg-slate-200 dark:hover:bg-[#26211c] transition-all cursor-pointer shadow-inner">
               <Icon :icon="isDark ? 'lucide:sun' : 'lucide:moon'" class="text-base" />
            </button>

            <!-- Desktop CTA -->
            <a id="desktop-cta-button" :href="headerData.ctaLink"
               :class="isDark ? 'bg-white text-black hover:bg-[#009966] hover:text-white' : 'bg-slate-900 text-white hover:bg-[#009966] hover:text-white'"
               class="hidden px-6 py-2.5 rounded-full font-bold transition-all shadow-md cursor-pointer sm:inline-block">
               {{ headerData.ctaText }}
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button id="mobile-menu-toggle-button" @click="toggleMenu"
               class="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#1b1713] border border-slate-200 dark:border-[#2d2620] flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-[#26211c] transition-all cursor-pointer shadow-inner lg:hidden">
               <Icon :icon="isOpen ? 'lucide:x' : 'lucide:menu'" class="text-xl" />
            </button>
         </div>

      </div>

      <!-- Mobile Dropdown Menu -->
      <transition
         enter-active-class="transition duration-200 ease-out"
         enter-from-class="transform -translate-y-2 opacity-0"
         enter-to-class="transform translate-y-0 opacity-100"
         leave-active-class="transition duration-150 ease-in"
         leave-from-class="transform translate-y-0 opacity-100"
         leave-to-class="transform -translate-y-2 opacity-0">
         <div id="mobile-dropdown-container" v-if="isOpen" 
            :class="[
               isDark ? 'bg-[#120f0c] text-white border-[#26211c] shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'bg-[#fbf9f4] text-slate-900 border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.1)]',
               isScrolled ? 'top-16 rounded-b-3xl rounded-t-none border-t-0' : 'top-20 rounded-3xl border'
            ]"
            class="absolute left-4 right-4 z-40 p-6 flex flex-col gap-4 pointer-events-auto lg:hidden transition-all duration-300">
            
            <nav id="mobile-nav-links-list" class="flex flex-col gap-3 text-sm font-bold">
               <a id="mobile-nav-link-item"
                  v-for="(link, idx) in headerData.navLinks" 
                  :key="idx" 
                  :href="link.href" 
                  @click="handleNavClick(link.href)"
                  :class="[
                     'py-2 px-4 rounded-xl transition-colors',
                     activeSection === link.href.substring(1) 
                        ? 'bg-[#009966]/10 text-[#009966]' 
                        : (isDark ? 'hover:bg-[#1b1713] hover:text-[#009966]' : 'hover:bg-slate-100 hover:text-[#009966]')
                  ]"
               >
                  {{ link.name }}
               </a>
            </nav>

            <a id="mobile-cta-button" :href="headerData.ctaLink" @click="handleNavClick(headerData.ctaLink)"
               :class="isDark ? 'bg-white text-black hover:bg-[#009966] hover:text-white' : 'bg-slate-900 text-white hover:bg-[#009966] hover:text-white'"
               class="w-full py-3 rounded-full font-bold text-xs text-center transition-all shadow-md cursor-pointer sm:hidden">
               {{ headerData.ctaText }}
            </a>
         </div>
      </transition>
   </header>
</template>