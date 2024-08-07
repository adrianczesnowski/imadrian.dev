import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
    name: "Adrian",
    initials: "AC",
    url: "https://imadrian.dev",
    location: "Ostrow Wlkp.",
    locationLink: "https://www.google.com/maps/place/sanfrancisco",
    description:
        "Currently Flutter developer. I love building things and helping people. Sometimes I go to the gym.",
    summary:
        "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
                url: "https://dub.sh/dillion-github",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://dub.sh/dillion-linkedin",
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
