import { Certificate, Skill, Project } from './types';

export const personalInfo = {
  name: "David Macharia",
  title: "Full Stack Developer & Network Engineer",
  subtitle: "Computer Science Student @ Murang'a University of Technology",
  email: "davidmacharia692@gmail.com",
  phone: "+254706827318",
  location: "Murang'a, Kenya",
  avatarUrl: "/src/assets/images/david_profile_neon_1783061282564.jpg",
  bio: "Pursuing a Bachelor of Science in Computer Science at Murang'a University of Technology. A versatile, tech-driven professional combining full stack development expertise with strong foundations in networking, Cisco administration, and desktop publishing.",
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
    id: "js-essentials-3",
    title: "JavaScript Essentials 3 (Advanced)",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description: "Advanced JavaScript development, object-oriented programming, asynchronous JS, APIs, design patterns, and application architecture.",
    type: 'cisco'
  },
  {
    id: "js-essentials-2",
    title: "JavaScript Essentials 2 (Intermediate)",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description: "Scope, closures, DOM manipulation, event handling, prototypes, and intermediate web application structures.",
    type: 'cisco'
  },
  {
    id: "js-essentials-1",
    title: "JavaScript Essentials 1 (Foundations)",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Core JS concepts including variables, operators, control flow, functions, arrays, and basic programming logic.",
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
    name: "Full Stack Development",
    category: "Full Stack",
    level: 90,
    icon: "Layers",
    details: ["React / Vite / Next.js", "Node.js / Express", "TypeScript & ES6+ JavaScript", "SQL & NoSQL Databases (Drizzle, MongoDB)"]
  },
  {
    name: "Cisco Networking",
    category: "Networking",
    level: 85,
    icon: "Network",
    details: ["Routing & Switching", "VLAN & Subnetting", "Network Topology Design", "Cisco Packet Tracer / GNS3 Simulation"]
  },
  {
    name: "Internet & System Admin",
    category: "Internet Admin",
    level: 88,
    icon: "Globe",
    details: ["Server Configuration", "Domain & DNS Mapping (Namecheap/Cloudflare)", "Cloud Deployment (Vercel, Railway, Render)", "Security & Firewall Policies"]
  },
  {
    name: "Professional Office Suites",
    category: "Office Suites",
    level: 100,
    icon: "Monitor",
    details: ["Advanced MS Excel Sheets & Formulas", "Database Management with MS Access", "Desktop Publishing & Material Layout", "Operating System Maintenance & Security"]
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
