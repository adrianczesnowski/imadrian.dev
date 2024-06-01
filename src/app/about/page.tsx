import Link from "next/link";

export default function AboutPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">about me</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Hey, here you will learn a few things about my career so far!
                </p>
                <p></p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">The House of Code</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Flutter Developer, 2023 - now
                </p>
                <p>
                    The House of Code - the place where my career took a slightly different direction.
                </p>
                <p>
                    Initially, I worked as a Frontend Developer with React, but I was also on many projects in React
                    Native.
                </p>
                <p>
                    After some time, I ended up on a project in Flutter. It was something new for me, something I had
                    never dealt with. But here, too, I was supported by super colleagues at work, who facilitated my
                    entry into this technology.
                </p>
                <p>
                    Today I just spend most of my time with Flutter, although occasionally a project in Vue.js will hit,
                    or after work I&apos;ll check what&apos;s new in React.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Qodeca</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Junior Frontend Developer, 2021 - 2023
                </p>
                <p>
                    I joined Qodeca right after graduating from high school. Here I collided with reality - the real
                    projects did not look like those on Udemy. I met a lot of people there, from whom I learned a lot as
                    a person with no experience. I worked there primarily as a Junior Frontend Developer with React and
                    TypeScript, but also with React Native and Angular.
                </p>
            </div>
        </section>
    );
}