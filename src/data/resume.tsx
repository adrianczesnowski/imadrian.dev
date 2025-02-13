import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
    name: "Adrian Czesnowski",
    initials: "AC",
    url: "https://imadrian.dev",
    location: "Ostrow Wlkp.",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description:
        "Currently Flutter developer passionate about creating cutting-edge mobile experiences.",
    summary: "I graduated from high school in May 2021. After a month, I started working as a Junior Front-end Developer at Qodeca. For less than two years there I gained experience under the guidance of great people, experts in their fields. A few months later I ended up full-time at THOC Ltd. where I slightly changed my direction and started working with Flutter.",
    avatarUrl: "/me.jpg",
    skills: [
        "Flutter",
        "Dart",
        "Riverpod",
        "BLoC",
        "React",
        "Next.js",
        "Vue.js",
        "Typescript",
        "Node.js",
    ],
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
        "figma"
    ],
    navbar: [
        {href: "/", icon: HomeIcon, label: "Home"},
        // {href: "/blog", icon: NotebookIcon, label: "Blog"},
    ],
    contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/adrianczesnowski",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/adrian-czesnowski/",
                icon: Icons.linkedin,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
                navbar: false,
            },
        },
    },
    work: [
        {
            title: "THOC Ltd.",
            dates: "Dec 2023 - Now",
            position: "Flutter Developer",
            description: "At THOC, my career took an exciting new direction as I ventured into mobile development with Flutter and Dart. This strategic move has proven to be a pivotal decision in my professional journey, opening up new opportunities and challenges. While I maintain my expertise in Web Development, I am particularly enthusiastic about further advancing my skills in mobile app development using Flutter.",
            image: "/thoc.jpeg",
            tags: ["Flutter", "Dart", "Riverpod", "Hive", "dio", "Firebase", "VueJS", "React", "React Native", "TypeScript"],
            links: [],
        },
        {
            title: "Freelancer",
            dates: "May 2023 - Dec 2023",
            position: "React Developer",
            description: "",
            image: "",
            tags: ["React", "Next.js", "TypeScript", "Zustand", "HTML", "CSS"],
            links: [],
        },
        {
            title: "Qodeca Sp. z o.o.",
            dates: "June 2021 - Apr 2023",
            position: "Junior React / React Native Developer",
            description: "I began my programming career working on three major projects for international clients in the finance and insurance sectors. This experience marked my first encounter with real-world project challenges, allowing me to develop problem-solving skills in a professional environment. These projects provided invaluable insights into the practical aspects of software development and prepared me for future career growth.",
            image: "qodeca.jpeg",
            tags: ["React", "Next.js", "TypeScript", "ReactNative", "Redux", "ReactQuery", ".NET", "HTML", "CSS"],
            links: [],
        },
    ],
} as const;
