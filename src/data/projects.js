export const projects = [
  {
    id: "coffee-shop",
    title: "Coffee Shop",
    description: "A modern coffee shop interface built with React and Vite.",
    longDescription:
      "A responsive web application for a coffee shop featuring a clean menu layout, shopping cart functionality, and seamless ordering experience.",
    image: "/images/coffee.jpg",
    technologies: ["React", "Vite", "CSS"],
    githubUrl:
      "https://github.com/LevanRusishvili/levani-rusishvili-react-coffeeshop",
    liveUrl: "https://coffeeshoponlinee.netlify.app", // ← YOUR ACTUAL URL
    features: [
      "Interactive menu with categories",
      "Shopping cart management",
      "Responsive design",
      "Fast performance with Vite",
    ],
    lastUpdated: "Mar 4, 2026",
  },
  {
    id: "travel-planner",
    title: "TravelPlanner",
    description: "An application to plan your travel with intuitive interface.",
    longDescription:
      "TravelPlanner helps users organize trips, discover destinations, and manage itineraries.",
    image: "/images/travel.jpg",
    technologies: ["React", "Vite", "React Router"],
    githubUrl: "https://github.com/LevanRusishvili/TravelPlanner",
    liveUrl: "https://plantravelling.netlify.app/", // ← YOUR ACTUAL URL
    features: [
      "Trip creation and management",
      "Destination browsing",
      "Responsive UI",
      "Optimized performance",
    ],
    lastUpdated: "Mar 3, 2026",
  },

  {
    id: "pet-shop",
    title: "PetShop",
    description:
      "A bold, vibrant pet shop for managing pets and categories with a living design system.",
    longDescription:
      "PetShop  is a feature-rich dashboard that transforms inventory management into a visual experience. It features dynamic gradient backgrounds that follow mouse movement, glowing UI elements, real-time currency conversion (USD/GEL), and a fully responsive gallery-style layout for managing pets and categories.",
    image: "/images/Pet.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "Vite",
    ],
    githubUrl: "https://github.com/LevanRusishvili/PetShop",
    liveUrl: "https://petshoponlinee.netlify.app/",
    features: [
      "Dynamic mouse-following gradient backgrounds",
      "Complete CRUD operations for pets and categories",
      "Automatic USD/GEL currency conversion",
      "Glowing neon UI with smooth micro-animations",
      "Fully responsive gallery-style card layout",
      "Dark theme with electric coral, cyan, and gold accents",
    ],
    lastUpdated: "Apr 6, 2026",
  },

  {
    id: "snake-game",
    title: "Snake Game",
    description:
      "A classic Snake game built with React, TypeScript, and Tailwind CSS.",
    longDescription:
      "A fully responsive Snake game where you control a snake to eat food and grow longer. The game features smooth keyboard controls, score tracking, increasing difficulty, and classic arcade styling. Built with modern web technologies for optimal performance.",
    image: "/images/snakegame.webp", // Make sure to add a snake game screenshot to your public/images folder
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LevanRusishvili/SnakeGame",
    liveUrl: "https://snakegamesn.netlify.app/", // Your provided URL
    features: [
      "Classic snake movement and growth mechanics",
      "Score tracking with local high score persistence",
      "Progressive difficulty (speed increases as you eat)",
      "Responsive design works on desktop and mobile",
      "Smooth keyboard controls (arrow keys)",
      "Space bar to start/restart the game",
      "Clean, minimal retro-inspired UI",
    ],
    lastUpdated: "Apr 14, 2026",
  },

  {
    id: "smartcourier",
    title: "SmartCourier",
    description:
      "A complete delivery management platform with Admin, User, and Courier dashboards built with React, TypeScript, and Tailwind CSS.",
    longDescription:
      "SmartCourier is a full-stack delivery management system connecting customers, couriers, and administrators through three distinct dashboards. Users can browse available couriers, schedule deliveries, and track their requests in real-time. Couriers can manage their schedule, update delivery statuses, and view their earnings. Admins have full control over user management, courier approval, and system oversight. The application features JWT authentication, role-based access control, persistent storage with Zustand, and seamless API integration.",
    image: "/images/smartCourier.avif",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Zustand",
      "Axios",
      "React Router DOM",
    ],
    githubUrl:
      "https://github.com/LevanRusishvili/levani-rusishvili-smartcourier",
    liveUrl: "https://smartcourierapp.netlify.app/",
    features: [
      "Three role-specific dashboards (Admin, User, Courier)",
      "JWT authentication with persistent login (Zustand + localStorage)",
      "Role-based access control (different views for each user type)",
      "User can browse couriers and schedule deliveries with conflict detection",
      "Courier can manage delivery requests and update status (pending/confirmed/completed/cancelled)",
      "Admin can manage all users and couriers (view, edit, delete)",
      "Working days configuration for couriers (minimum 5 days required)",
      "Courier vehicle information tracking",
      "Call logs history accessible by Admin",
      "Profile editing for all user types",
      "Responsive design with Tailwind CSS",
      "Custom form components with validation",
    ],
    lastUpdated: "Apr 25, 2026",
  },
  {
    id: "coupleverse",
    title: "CoupleVerse",
    description:
      "A romantic couple's memory management app built with React, TypeScript, and Firebase.",
    longDescription:
      "CoupleVerse is a dedicated platform for couples to store and cherish their shared memories. Partners can upload photos, create memory entries, and build a beautiful digital timeline of their relationship. The app features Firebase authentication, real-time database synchronization, and Cloudinary integration for seamless photo uploads. Perfect for capturing and reliving special moments together.",
    image: "/images/couples.webp",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Vite",
      "Cloudinary",
      "React Router DOM",
    ],
    githubUrl:
      "https://github.com/LevanRusishvili/levani-rusishvili-coupleverse-demo",
    liveUrl: "https://coupleverse-demo.netlify.app/",
    features: [
      "Firebase Authentication (sign in as a couple)",
      "Create, view, edit, and delete memory entries",
      "Photo upload integration with Cloudinary",
      "Real-time data sync with Firebase Realtime Database",
      "Beautiful timeline view of all memories",
      "Responsive design optimized for mobile and desktop",
      "Private - each couple sees only their own data",
    ],
    lastUpdated: "Jul 17, 2026",
  },

  {
    id: "cinemanetwork",
    title: "Kino XII Cinema Network",
    description:
      "A cinema ticket booking app: browse films, pick a session, choose seats and buy tickets.",
    longDescription:
      "Kino XII is a cinema network app where users browse films, filter sessions across four venues, pick seats on an API-driven hall map and buy tickets in a two-step booking flow with a timed seat hold. It includes JWT-style token authentication with automatic replay of the interrupted action after login, URL-synced filters, profile management with age-based restrictions, and ticket refunds. Built with React, TypeScript and TanStack Query against a REST API.",
    image: "/images/cinemanetwork.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Axios",
      "Zustand",
      "TanStack Query",
      "React Router DOM",
      "React Hook Form",
    ],
    githubUrl: "https://github.com/LevanRusishvili/cinema-network",
    liveUrl: "https://cinemanetwork.netlify.app/",
    features: [
      "Login and registration modals with blur validation and server error mapping",
      "Protected actions resume automatically after login (401 request replay)",
      "Animated hero slider, Now Playing, Coming Soon with Notify Me, Recently viewed",
      "Sessions page with filters, sorting and pagination stored in the URL",
      "Seat map rendered entirely from API data (sections, rows, aisles)",
      "Two-step booking with 8-minute seat hold and server-based countdown",
      "Seat conflict (409) handling that keeps the remaining selection",
      "Profile with completeness status and age-based ticket restrictions",
      "My Tickets with Upcoming/Past tabs and refunds",
      "Header search with debounced typeahead",
    ],
    lastUpdated: "Oct 11, 2026",
  },
];
