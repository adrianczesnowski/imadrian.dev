import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
    name: "Adrian Czesnowski",
    initials: "AC",
    url: "https://imadrian.dev",
    location: "Ostrow Wlkp.",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description:
        "Currently Flutter developer. I love building things and helping people. Sometimes I go to the gym.",
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
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "firebase",
        "vercel",
        "git",
        "jira",
        "github",
        "figma",
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
            description:
                "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
            image:
                "/thoc.jpeg",
            links: [],
        },
        {
            title: "Freelancer",
            dates: "May 2023 - Dec 2023",
            position: "React / React Native Developer",
            description:
                "Developed a mobile application which delivers university campus wide events in real time to all students.",
            links: [],
        },
        {
            title: "Qodeca Sp. z o.o.",
            dates: "June 2021 - Apr 2023",
            position: "Junior React / React Native Developer",
            description:
                "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
            image:
                "qodeca.jpeg",
            links: [],
        },
    ],
} as const;
