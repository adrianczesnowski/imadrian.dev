import { Icons } from "@/components/icons";

export const DATA = {
  name: "Adrian Czesnowski",
  initials: "AC",
  url: "https://imadrian.dev",
  description:
    "Currently Full-stack Developer passionate about creating cutting-edge mobile experiences.",
  summary:
    "I graduated from high school in May 2021. After a month, I started working as a Junior Front-end Developer at Qodeca. For less than two years there I gained experience under the guidance of great people, experts in their fields. A few months later I ended up full-time at THOC Ltd. where I slightly changed my direction and started working with Flutter.",
  avatarUrl: "/me.jpg",
  skillsCloud: [
    "flutter",
    "dart",
    "swift",
    "ios",
    "android",
    "firebase",
    "supabase",
    "nextdotjs",
    "react",
    "vuedotjs",
    "typescript",
    "git",
    "figma",
    "postgresql",
  ],
  contact: {
    email: "adrian.czesnowski22@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adrianczesnowski",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adrian-czesnowski/",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
      },
    },
  },
  work: [
    {
      title: "THOC Ltd.",
      dates: "Dec 2023 - Now",
      position: "Full-stack Developer (with Mobile)",
      description:
        "At THOC, my career took an exciting new direction as I ventured into mobile development with Flutter and Dart. This strategic move has proven to be a pivotal decision in my professional journey, opening up new opportunities and challenges. While I maintain my expertise in Web Development, I am particularly enthusiastic about further advancing my skills in mobile app development using Flutter.",
      image: "/thoc.jpeg",
      tags: [
        "Flutter",
        "React",
        "React Native",
        "VueJS",
        "Node.js",
        "TypeScript",
        "Dart",
        "Firebase",
        "Supabase",
        "PostgreSQL",
        "CI/CD",
      ],
      links: [],
    },
    {
      title: "Freelancer",
      dates: "May 2023 - Now",
      description:
        "Creating websites, mobile and web applications from scratch.",
      position: "",
      image: "",
      tags: [
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Firebase",
        "Supabase",
        "PostgreSQL",
        "CI/CD",
      ],
      links: [],
    },
    {
      title: "Qodeca Sp. z o.o.",
      dates: "June 2021 - Apr 2023",
      position: "Junior Front-end Developer",
      description:
        "I began my programming career working on three major projects for international clients in the finance and insurance sectors. This experience marked my first encounter with real-world project challenges, allowing me to develop problem-solving skills in a professional environment. These projects provided invaluable insights into the practical aspects of software development and prepared me for future career growth.",
      image: "qodeca.jpeg",
      tags: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Firebase",
      ],
      links: [],
    },
  ],
} as const;
