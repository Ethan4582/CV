import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ashirwad Singh  ",
  initials: "AS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary: `
Full Stack Engineer building fast, functional web experiences with Next.js, TS, Postgres, Framer Motion. Think technical precision meets creative problem-solving.

Currently, I'm "innovating" RepoSense, a Next.js 15 app with LangChain and Gemini AI. Real-time Q&A. Groundbreaking.


Competitive coder? Sure. CodeForces Specialist, CodeChef 4-Star, LeetCode Guardian. Apparently, complex algorithms are my jam.

Certified MongoDB Database Administrator. Twice. Because one certification is clearly insufficient.

And for fun? State-level boxer. Gold and Bronze. Bringing that same discipline (and punchline) to code.
`,
  avatarUrl: "/p2.png",
  skills: [
    "C++",
    "TypeScript",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "TailwindCSS",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Socket.IO",
    "LangChain",
    "Docker",
    "Git",
    "Cypress",
    "Stripe",
    "VS Code",
    "MongoDB",
    "NeonDB",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Drizzle ORM",
    "NextAuth.js",
    "JWT",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "singhashirwad2003@gmail.com |",
    tel: "+918421933430",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ethan4582",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashirwad08singh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SinghAshir65848",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1jabVTSbxp8QAOeHu2gYX-qozCvOtFvpx/view?usp=sharing",
        icon: NotebookIcon,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Maven Silicon",
      href: "https://www.maven-silicon.com/",
      badges: [],
      location: "Remote",
      title: "Vlsi Design Intern",
      logoUrl: "/Maven.png",
      start: "Jan 2025",
      end: "March 2025",
    description: `
Engineered Verilog HDL RTL for a 32-bit RISC-V RV32I processor with a 3-stage pipeline, integrating submodules into a unified top module.

Used ModelSim for RTL simulation and design verification, and developed interrupt logic with real-time performance counters; validated design via comprehensive Verilog testbenches.
`,
    },
  ],
  education: [
    {
      school: "Vit Bhopal University",
      href: "https://vitbhopal.ac.in/",
      degree: "B.Tech in Computer Science (Cyber Security and Digital Forensics)",
      logoUrl: "/VIT.png",
      start: "2022",
      end: "2026",
    },
     {
      school: "Relaince Foundation ",
      href: "https://www.rfs.edu.in/Lodhivali-EM/",
      degree: "Class 12 ",
      logoUrl: "/R3.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Yak Public School",
      href: "https://yakschool.com/",
      degree: "Class 10 ",
      logoUrl: "/49.png",
      start: "2017",
      end: "2019",
    },

  ],
  projects: [
  //    {
  //   "title": "RepoSense",
  //   "href": "https://github.com/Ethan4582/RepoSense",
  //   "dates": "June 2025 - July 2025",
  //   "active": true,
  //   "description": "Chat with GitHub repos using RAG-powered AI (LangChain + Gemini) and get meeting summaries via Assembly AI. Built with Next.js 15, Stripe credits, and optimized for low-latency QA",
  //   "technologies": [
  //     "Next.js",
  //     "TypeScript",
  //     "PostgreSQL",
  //     "LangChain",
  //     "Gemini AI",
  //     "Assembly AI",
  //     "Stripe",
  //     "TailwindCSS",
  //     "Shadcn UI"
  //   ],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/Ethan4582/RepoSense",
  //       icon: <Icons.github className="size-3" />
  //     }
  //   ],
  //   image: "/41.png",
  //   video: ""
  // },
  {
  "title": "DevRooms",
  "href": "https://dev-finder-amber-chi.vercel.app",
  "dates": "March 2025 - April 2025",
  "active": true,
  "description": "DevRooms enables real-time developer collaboration with shared coding environments, integrated video conferencing via GetStream.io, and GitHub integration, built with Next.js 14 and a responsive UI.",
  "technologies": [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "TailwindCSS",
    "Shadcn UI",
    "Framer Motion",
    "NextAuth",
    "GetStream SDK"
  ],
  links: [
    {
      type: "Website",
      href: "https://dev-finder-amber-chi.vercel.app",
      icon: <Icons.github className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/Ethan4582/dev-rooms",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/img2.png",
  video: ""
},
   
    {
  "title": "Gemini AI Chatbot",
  "href": "https://gemini-ai-chatbot-zeta-sepia.vercel.app",
  "dates": "May 2025 - July 2025",
  "active": true,
  "description": "A modern Next.js 14+ chatbot powered by Google Gemini 1.5 Flash, with real-time streaming, multi-session chat, code editing, and a responsive UI with dark/light mode.",
  "technologies": [
    "Next.js",
    "TypeScript",
    "Gemini AI",
    "Shadcn UI",
    "TailwindCSS",
    "next-themes",
    "Lucide React",
    "Framer Motion"
  ],
  links: [
    {
      type: "Website",
      href: "https://gemini-ai-chatbot-zeta-sepia.vercel.app",
      icon: <Icons.github className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Gemini-AI-Chatbot",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/99.png",
  video: ""
},
{
  "title": "Chess Master",
  "href": "https://chess-com-v8tt.onrender.com",
  "dates":  "March 2025 - April 2025",
  "active": true,
  "description": "A real-time multiplayer chess platform with modern UI, move history, and spectator mode. Features Socket.IO for live updates, chess.js for move validation, and responsive design with light/dark mode.",
  "technologies": [
    "Node.js",
    "Express",
    "Socket.IO",
    "chess.js",
    "EJS",
    "TailwindCSS",
    "JavaScript",
    "MongoDB"
  ],
  links: [
    {
      type: "Website",
      href: "https://chess-com-v8tt.onrender.com",
      icon: <Icons.github className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/Ethan4582/chess.com-",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/img9.png",
  video: ""
},
{
  "title": "Multi-Threaded Proxy Server",
  "href": "https://github.com/Ethan4582/Multi-Threaded-Proxy-Server",
  "dates":  "May 2025 - July 2025",
  "active":  true,
  "description": "A multi-threaded HTTP proxy server in C with an LRU cache, supporting concurrent client connections using POSIX threads, semaphores, and mutexes for efficient response caching.",
  "technologies": [
    "C++",
    "POSIX Threads",
    "Semaphores",
    "Mutexes"
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Multi-Threaded-Proxy-Server",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/Mul.png",
video: ""
},
{
  "title": "Google Docs Clone",
  "href": "https://google-doc-frontend-3z2r.onrender.com",
  "dates": "Feb 2024 - March 2024",
  "active":  true,
  "description": "A real-time collaborative document editing platform inspired by Google Docs, enabling simultaneous editing, rich text formatting, and cursor synchronization using WebSocket.",
  "technologies": [
    "React",
    "Node.js",
    "Express",
    "Socket.IO",
    "Quill.js",
    "MongoDB"
  ],
  links: [
    {
      type: "Website",
      href: "https://google-doc-frontend-3z2r.onrender.com",
      icon: <Icons.github className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Google-Doc-Clone",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/52.png",
  video: ""
},
{
  "title": "CryptoPlace",
  "href": "https://github.com/Ethan4582/Crypto-tracker",
  "dates": "July 2024 - October 2024",
  "active": true,
  "description": "A React-based app for real-time cryptocurrency data, fetching market rankings, prices, and 24-hour fluctuations from CoinGecko API with an interactive UI and chart.",
  "technologies": [
    "React",
    "Node.js",
    "Framer Motion",
    "CoinGecko API"
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Crypto-tracker",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/39.png",
  video: ""
},
{
  "title": "Streamerzz",
  "href": "https://streamerzz-indol.vercel.app",
  "dates": "September 2024 - December 2024",
  "active":  true,
  "description": "A sleek, animated, and responsive landing page for Streamerzz, a next-gen streaming toolkit. Built with React, Tailwind CSS, and Framer Motion, featuring dynamic animations, pricing plans, and testimonials.",
  "technologies": [
    "React",
    "Vite",
    "TailwindCSS",
    "Framer Motion",
    "JavaScript"
  ],
  links: [
    {
      type: "Website",
      href: "https://streamerzz-indol.vercel.app",
      icon: <Icons.github className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Streamerzz",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/img16.png",
  video: ""
},
{
  "title": "Nike Landing Page",
  "href": "https://github.com/Ethan4582/Nike_landing-Page",
  "dates": "November 2024 - December 2024",
  "active": true,
  "description": "A sleek, animated Nike-inspired landing page built with Next.js 15 and Framer Motion, showcasing responsive design and modern UI for an engaging user experience.",
  "technologies": [
    "Next.js",
    "TypeScript",
    "Framer Motion",
    "TailwindCSS"
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Nike_landing-Page",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/img21.png",
  video: ""
},
{
  "title": "Gotham Legends",
  "href": "https://gotham-legends.vercel.app",
  "dates": "January 2024 - February 2024",
  "active": true,
  "description": "A web-based platform featuring interactive 3D models and animations of Gotham's characters, optimized for smooth performance in local and cloud environments.",
  "technologies": [
    "React",
    "Three.js",
    "TailwindCSS"
  ],
  links: [
    {
      type: "Website",
      href: "https://gotham-legends.vercel.app",
      icon: <Icons.github className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/Ethan4582/Gotham-Legends",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/7.png",
  video: ""
}

   
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
