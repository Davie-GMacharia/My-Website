import { Certificate, Skill, Project } from './types';

export const personalInfo = {
  name: "David Macharia",
  title: "Full Stack & Mobile Developer | Network Engineer",
  subtitle: "Computer Science Student @ Murang'a University of Technology",
  email: "davidmacharia692@gmail.com",
  phone: "+254706827318",
  location: "Murang'a, Kenya",
  avatarUrl: "/src/assets/images/david_profile_neon_1783061282564.jpg",
  bio: "Pursuing a Bachelor of Science in Computer Science at Murang'a University of Technology. A versatile, tech-driven professional combining full-stack and mobile development expertise with strong foundations in Cisco networking, computer hardware maintenance, systems troubleshooting, and desktop publishing.",
  githubUrl: "https://github.com/gachemadavid448", // inferred from email
  linkedinUrl: "https://linkedin.com",
};

export const education = {
  institution: "Murang'a University of Technology",
  degree: "Bachelor of Science in Computer Science",
  duration: "Ongoing",
  details: [
    "Core coursework in Data Structures, Algorithms, Software Engineering, Database Systems, and Network Protocols.",
    "Active participant in tech community meetups, coding challenges, and system design groups."
  ]
};

export const certificates: Certificate[] = [
  {
    id: "cisco-networking",
    title: "Cisco Networking Certificate",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description: "Certified competence in IP subnetting, routing protocols (OSPF, RIP), switching mechanics, VLANs, ACLs, and network infrastructure design.",
    type: 'cisco'
  },
  {
    id: "comp-troubleshooting",
    title: "Computer Maintenance & Troubleshooting",
    issuer: "Cisco Networking Academy / IT Essentials",
    date: "2024",
    description: "Certified expertise in diagnostic troubleshooting, hardware configuration, operating systems installation (Windows/Linux), and hardware security protocols.",
    type: 'cisco'
  },
  {
    id: "fullstack-dev-cert",
    title: "Full Stack Web Development Certificate",
    issuer: "Cisco Networking Academy Program",
    date: "2025",
    description: "Full-stack software engineering certification covering web technologies, robust APIs, Node.js runtime, relational databases, and secure authentication flows.",
    type: 'cisco'
  },
  {
    id: "mobile-app-dev-cert",
    title: "Mobile App Development & Architecture",
    issuer: "Cisco Partner Academy / Tech-Minds",
    date: "2025",
    description: "Specialized certification in cross-platform mobile app development with React Native, state management, offline database storage, and push notification architectures.",
    type: 'cisco'
  },
  {
    id: "js-essentials-3",
    title: "JavaScript Essentials 3 (Advanced)",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description: "Advanced JavaScript development, object-oriented programming, asynchronous JS, APIs, design patterns, and application architecture.",
    type: 'cisco'
  },
  {
    id: "comp-packages",
    title: "Certificate in Computer Packages (Distinction)",
    issuer: "Technical Training Center",
    date: "2023",
    description: "Completed comprehensive training in all 12 computer packages, scoring Distinction in every module.",
    type: 'packages'
  }
];

export const packagesList = [
  "Introduction to Computers",
  "Operating Systems (Windows/Linux)",
  "Microsoft Word",
  "Microsoft Excel",
  "Microsoft Access (Database)",
  "Microsoft PowerPoint",
  "Microsoft Publisher",
  "Desktop Publishing (PageMaker/InDesign)",
  "Internet & Email Administration",
  "Word Processing & Typing Speed",
  "Computer Security & Antivirus Administration",
  "Information Communication Technology (ICT) Integration"
];

export const skills: Skill[] = [
  {
    name: "Full Stack Web Development",
    category: "Full Stack",
    level: 92,
    icon: "Layers",
    details: ["React / Vite / Next.js", "Node.js / Express / APIs", "TypeScript & ES6+ JavaScript", "SQL & NoSQL (PostgreSQL, MongoDB)"]
  },
  {
    name: "Mobile App Development",
    category: "Mobile Development",
    level: 88,
    icon: "Smartphone",
    details: ["React Native & Expo", "Flutter & Dart", "Mobile UI/UX Optimization", "Offline Persistence & Sync"]
  },
  {
    name: "Cisco Networking & Routing",
    category: "Networking",
    level: 90,
    icon: "Network",
    details: ["Routing & Switching", "VLAN & Subnetting", "Network Topology Design", "Cisco Packet Tracer Simulations"]
  },
  {
    name: "Computer Maintenance",
    category: "Internet Admin",
    level: 89,
    icon: "Globe",
    details: ["Hardware Troubleshooting", "OS Installation (Linux/Windows)", "Network Interface Configuration", "Security & System Hardening"]
  },
  {
    name: "Professional Office Suites",
    category: "Office Suites",
    level: 100,
    icon: "Monitor",
    details: ["Advanced MS Excel & Macros", "MS Access Database Queries", "Desktop Publishing Layouts", "Operating System Maintenance"]
  }
];

export const projects: Project[] = [
  {
    id: "net-sim",
    title: "Campus Network Architecture Layout",
    description: "A simulated high-availability campus network designed for Murang'a University using Cisco solutions, integrating multiple subnets, VLANs, and redundant OSPF routing.",
    tech: ["Cisco iOS", "Packet Tracer", "Subnetting", "OSPF"],
    category: "network",
    highlights: ["Configured 15 virtual subnets serving over 2,000 simulated nodes", "Implemented ACL security rules for departmental isolation", "Achieved sub-second failover using redundant trunk lines"]
  },
  {
    id: "port-site",
    title: "Interactive Interactive Bio Hub",
    description: "The very portfolio you are browsing, featuring interactive terminals, a virtual networking sandbox, and a direct AI interviewer proxying Gemini 3.5.",
    tech: ["React", "TypeScript", "Express", "Tailwind CSS", "Motion", "Vite"],
    category: "web",
    highlights: ["Interactive JS code testing sandbox built-in", "Dynamic chat client using Express backend proxy", "100% responsive fluid UI designed with custom typography"]
  },
  {
    id: "access-db",
    title: "Student Enrollment Database Management System",
    description: "A comprehensive local database system designed using MS Access to register, grade, and audit student package records across multiple colleges.",
    tech: ["MS Access", "SQL", "VBA scripting", "Entity Relationship Diagrams"],
    category: "system",
    highlights: ["Created complex relational schemas for 500+ records", "Automated certificate of completion generation", "Engineered parameterized search macros for rapid queries"]
  }
];

export const jsQuiz = [
  {
    question: "Which of the following is correct about JavaScript closures?",
    options: [
      "A closure is the combination of a function bundled together with references to its surrounding state.",
      "A closure is a function that can only be called once.",
      "A closure deletes all outer variables to save memory.",
      "A closure is another term for an ES6 class definition."
    ],
    answer: 0,
    explanation: "A closure gives you access to an outer function's scope from an inner function."
  },
  {
    question: "What is the primary function of a Router in networking?",
    options: [
      "To connect different networks and forward data packets between them.",
      "To power up computers on a local network.",
      "To compile JavaScript code on a client browser.",
      "To print documents over a local wireless connection."
    ],
    answer: 0,
    explanation: "Routers route traffic between different IP subnets or distinct networks."
  },
  {
    question: "Which of the following Microsoft Excel functions is used to search for a value in the leftmost column of a table?",
    options: [
      "VLOOKUP",
      "CONCATENATE",
      "SUMIF",
      "COUNTIF"
    ],
    answer: 0,
    explanation: "VLOOKUP stands for Vertical Lookup and searches down the first column of a range."
  }
];
