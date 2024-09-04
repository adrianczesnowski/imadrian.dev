import {WorkCard} from "@/components/work-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import {DATA} from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import IconCloud from "@/components/magicui/cloud-icon";
import {Badge} from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                            />
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl"
                                delay={BLUR_FADE_DELAY}
                                text={DATA.description}
                            />
                            <BlurFade>
                                <Badge className="inline-flex px-3 py-1 text-sm mt-2 font-normal gap-2">
                                    <span className="relative flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    Available for additional work
                                </Badge>
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown
                        className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.summary}
                    </Markdown>
                </BlurFade>
            </section>
            <section id="work">
                <div className="space-y-12 w-full">
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div
                                    className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Work
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Work Experience
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    My experience spans both web and mobile technologies, giving me a versatile skill set. I am committed to continuous learning and growth, with a current focus on expanding my proficiency in Flutter and Dart while leveraging my background in web development.                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                            {DATA.work.map((project, id) => (
                                <BlurFade
                                    key={project.title + project.dates}
                                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                                >
                                    <WorkCard
                                        title={project.title}
                                        description={project.description}
                                        position={project.position}
                                        dates={project.dates}
                                        tags={project.tags}
                                        image={project.image}
                                        links={project.links}
                                    />
                                </BlurFade>
                            ))}
                        </ul>
                    </BlurFade>
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div
                                    className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    Skills
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    What I&apos;m Working With
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    In the course of my work, I work with different tools, people from different
                                    departments, so I need to be able to adapt and learn new tools for my work, if
                                    necessary.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 12}>
                        {/*@ts-ignore*/}
                        <IconCloud iconSlugs={DATA.skillsCloud}/>
                    </BlurFade>
                </div>
            </section>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="space-y-3">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Contact
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Want to chat? Just shoot me a dm{" "}
                                <Link
                                    target="_blank"
                                    href={DATA.contact.social.LinkedIn.url}
                                    className="text-blue-500 hover:underline"
                                >
                                    with a direct question on LinkedIn
                                </Link>{" "}
                                and I&apos;ll respond whenever I can.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
