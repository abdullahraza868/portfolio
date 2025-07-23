/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdullah Raza",
  title: "Hi, I'm Abdullah",
  subTitle: emoji(
    "Full-Stack Software Engineer delivering scalable web & mobile solutions that drive business growth. 3+ years transforming ideas into high-performance applications with React, Node.js, and cloud technologies. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FHVhDnh4QkdfhV9Y6R2DH5EznINkokSP/view?usp=sharing", // Set to empty to hide the button
  profilePicture: require("./assets/images/abdullah.jpg"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdullahraza868",
  linkedin: "https://www.linkedin.com/in/abdullah-raza-454b84242/",
  gmail: "abdullahraza868@gmail.com",
  facebook: "https://web.facebook.com/abdullah.gujjar.359778/",
  stackoverflow: "https://stackoverflow.com/users/19455464/abdullah-raza",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Deliver",
  subTitle: "FULL-STACK DEVELOPER SPECIALIZING IN SCALABLE SOLUTIONS THAT CONVERT",
  skills: [
    emoji(
      "⚡ Build high-converting web & mobile applications with modern React/Next.js frontends and robust Node.js backends"
    ),
    emoji("⚡ Create Progressive Web Apps (PWAs) that boost user engagement and drive conversions"),
    emoji(
      "⚡ Integrate enterprise-grade services (AWS, Firebase, Stripe) to scale your business operations efficiently"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fab fa-nextjs"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "openai",
      fontAwesomeClassname: "fab fa-openai"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Lahore",
      logo: require("./assets/images/uol_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2021 - August 2025",
      desc: "Graduated in top 10% of class. Mastered software engineering principles, advanced programming concepts, and modern development practices including web security, database design, and scalable architecture.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Devaxl",
      companylogo: require("./assets/images/devaxl_logo.jpeg"),
      date: "January 2023 – Present",
      descBullets: [
        "Led development of 5+ scalable web applications, resulting in 40% faster user engagement and 25% increase in conversion rates",
        "Architected cloud-based solutions using AWS, achieving 99.9% uptime and reducing infrastructure costs by 30%",
        "Mentored 3 junior developers, improving team productivity by 35% and reducing bug reports by 50%",
        "Delivered projects 20% under budget while maintaining high code quality standards and client satisfaction",
        "Implemented CI/CD pipelines that reduced deployment time from 2 hours to 15 minutes"
      ]
    },
    {
      role: "Assistant Software Engineer",
      company: "Devaxl",
      companylogo: require("./assets/images/devaxl_logo.jpeg"),
      date: "August 2022 – January 2023",
      descBullets: [
        "Built responsive front-end interfaces that improved user experience scores by 45% across 3 major projects",
        "Integrated Strapi CMS solutions that reduced content management time by 60% for marketing teams",
        "Developed reusable component libraries that accelerated development speed by 40% for future projects",
        "Collaborated with UX designers to implement pixel-perfect interfaces, achieving 95% design accuracy",
        "Participated in agile ceremonies that improved sprint completion rates from 70% to 90%"
      ]
    },
    {
      role: "React Developer Intern",
      company: "Devaxl",
      companylogo: require("./assets/images/devaxl_logo.jpeg"),
      date: "May 2022 – August 2022",
      descBullets: [
        "Contributed to 4 production React applications, learning enterprise-level development practices",
        "Assisted in building Next.js projects that improved page load speeds by 50% and SEO rankings",
        "Implemented responsive design principles that increased mobile user engagement by 35%",
        "Debugged and optimized existing features, reducing application crashes by 80%",
        "Demonstrated rapid learning ability by mastering new technologies within 2 weeks of introduction"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "ENTERPRISE SOLUTIONS THAT DRIVE REAL BUSINESS RESULTS",
  projects: [
    {
      image: require("./assets/images/aNinja.png"),
      projectName: "aNinja AI",
      projectDesc: "Revolutionary sales CRM platform that increased client revenue by 200% through AI-powered lead scoring and automated follow-ups. Built with Next.js, Node.js, and machine learning integration. Features include intelligent lead prioritization, automated email campaigns, and real-time analytics dashboard.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aninja.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/apolloe_logo.png"),
      projectName: "Apollo-E",
      projectDesc: "Next-generation dispatch management system that reduced operational costs by 40% and improved response times by 60%. Built with React, Node.js, Strapi, and real-time GPS tracking. Features include intelligent route optimization, real-time fleet management, and automated dispatch algorithms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apolloe.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognition & Impact 🏆 "),
  subtitle:
    "Industry recognition and measurable achievements that demonstrate proven expertise",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "Recognized for exceptional problem-solving skills and innovative approach to open-source development.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action Developer",
      subtitle: "Created JavaScript Guru Assistant Action reaching 2+ billion devices worldwide. Demonstrated expertise in conversational AI and voice interface development, achieving 4.8/5 user rating.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Certified Progressive Web App developer with expertise in creating offline-capable, app-like web experiences that boost user engagement and conversion rates by up to 300%.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Thought Leadership",
  subtitle:
    "Sharing insights and expertise to help businesses leverage technology for growth",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "How to Win $200 and Google Assistant T-Shirt in 30 Minutes",
      description:
        "Step-by-step guide to creating a Google Assistant Action that can generate revenue and recognition for developers"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why React.js Delivers Superior Business Value",
      description:
        "Comprehensive analysis of how React.js drives faster development, better user experience, and higher ROI for businesses"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaking Engagements",
  subtitle: emoji(
    "Sharing expertise and insights with the developer community 🎤"
  ),

  talks: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Professional Resume",
  subtitle: "Download my comprehensive resume to see how I can add value to your next project",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Build Something Amazing ☎️"),
  subtitle:
    "Ready to transform your business with cutting-edge technology? Let's discuss how I can help you achieve your goals.",
  number: "+92-3214975065",
  email_address: "abdullahraza868@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
