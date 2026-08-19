export const contactData = {
   sectionTag: "Get In Touch",
   title: "Let's Build Something <span class='text-emerald-600 dark:text-emerald-400'>Amazing</span> Together",
   description: "Tell me what you're building, what needs improvement, or what needs fixing.",
   infoList: [
      {
         icon: "lucide:mail",
         label: "Email Me",
         value: "devnahidislam4@gmail.com",
         href: "mailto:devnahidislam4@gmail.com"
      },
      {
         icon: "lucide:phone",
         label: "Call / WhatsApp",
         value: "+8801761005639",
         href: "tel:+8801761005639"
      },
      {
         icon: "lucide:map-pin",
         label: "Location",
         value: "Rajshahi, Bangladesh",
         href: null
      }
   ],
   scheduleCall: {
      title: "Prefer a Quick Chat?",
      subtitle: "Book a 15-minute discovery call.",
      buttonText: "Schedule a Call",
      href: "#discuss"
   },
   form: {
      headerIcon: "lucide:send",
      title: "Project Inquiry / Contact",
      subtitle: "Fill out the form below with your project details and budget.",
      fields: {
         nameLabel: "Name",
         namePlaceholder: "Enter your full name",
         emailLabel: "Email",
         emailPlaceholder: "Enter your email",
         companyLabel: "Company / Brand",
         companyPlaceholder: "Enter your company or brand name",
         websiteLabel: "Website",
         websitePlaceholder: "https://yourwebsite.com",
         projectTypeLabel: "Project Type",
         projectTypeDefault: "Select project type",
         needLabel: "What do you need?",
         needPlaceholder: "Describe the core scope or services you need...",
         budgetLabel: "Budget",
         budgetDefault: "Select your budget range",
         timelineLabel: "Timeline",
         timelineDefault: "Select expected timeline",
         detailsLabel: "Additional details",
         detailsPlaceholder: "Any extra information, references, or specific features..."
      },
    projectTypes: [
   // Shopify
   "Shopify Store Development",
   "Shopify Design & Redesign",
   "Shopify Theme Customization",
   "Shopify Liquid Development",
   "Shopify Bug Fixing",
   "Shopify Migration",
   "Shopify App Integration",
   "Shopify Performance Optimization",
   "Dropshipping Store Setup",
   "Shopify Product Sync",

   // WordPress
   "WordPress Development",
   "WooCommerce Development",
   "Custom WordPress Development",

   // Custom Development
   "Front-End Development",
   "Landing Page Design & Development",
   "API Integration",
   "Workflow Automation",
   "Custom Web Development"
],

budgetRanges: [
   "Under $100",
   "$100 - $300",
   "$300 - $500",
   "$500 - $1,000",
   "$1,000 - $1,500",
   "$1,500 - $2,000",
   "$2,000 - $3,000",
   "$3,000+"
],

budgetMapping: {

   // =========================
   // SHOPIFY
   // =========================

   "Shopify Store Development": [
      "Under $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000+"
   ],

   "Shopify Design & Redesign": [
      "Under $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500+"
   ],

   "Shopify Theme Customization": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],

   "Shopify Liquid Development": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],

   "Shopify Bug Fixing": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500+"
   ],

   "Shopify Migration": [
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000+"
   ],

   "Shopify App Integration": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],

   "Shopify Performance Optimization": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],

   "Dropshipping Store Setup": [
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000+"
   ],

   "Shopify Product Sync": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],


   // =========================
   // WORDPRESS
   // =========================

   "WordPress Development": [
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000+"
   ],

   "WooCommerce Development": [
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000+"
   ],

   "Custom WordPress Development": [
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000+"
   ],


   // =========================
   // CUSTOM DEVELOPMENT
   // =========================

   "Front-End Development": [
      "Under $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500+"
   ],

   "Landing Page Design & Development": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],

   "API Integration": [
      "Under $100",
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000+"
   ],

   "Workflow Automation": [
      "$100 - $300",
      "$300 - $500",
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500+"
   ],

   "Custom Web Development": [
      "$500 - $1,000",
      "$1,000 - $1,500",
      "$1,500 - $2,000",
      "$2,000 - $3,000",
      "$3,000+"
   ]
},
      timelines: [
         "Under a Week",
         "1-2 Weeks",
         "1 Month",
         "Flexible"
      ],
      uploadText: "Attach Files (Optional)",
      uploadSubtext: "Max file size: 10MB",
      submitButtonText: "Submit Inquiry"
   },
   processHeading: "Our Simple Process",
   processSteps: [
      { step: "01", title: "Discovery", icon: "lucide:search" },
      { step: "02", title: "Strategy", icon: "lucide:lightbulb" },
      { step: "03", title: "Development", icon: "lucide:code" },
      { step: "04", title: "Testing", icon: "lucide:check-circle" },
      { step: "05", title: "Launch", icon: "lucide:rocket" }
   ],
   commitmentHeading: "My Commitment to You",
   commitments: [
      "Clear & transparent communication",
      "On-time delivery guaranteed",
      "High-quality clean code standards"
   ],
   author: {
      name: "Nahid",
      title: "Lead Developer"
   }
};