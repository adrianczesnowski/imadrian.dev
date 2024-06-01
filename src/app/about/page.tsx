import Link from "next/link";

export default function AboutPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">about me</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">The House of Code</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Flutter Developer
                </p>
                <p>
                   Lorem ipsum dolor sit amet.
                </p>
                <ul>
                    <li>
                       Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet.
                    </li>
                    <li>
                        In 2023, I was promoted to VP of Product, now also leading Product
                        Management.
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Qodeca</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Junior Frontend Developer, 2021 - 2023
                </p>
                <p>
                   Lorem ipsum dolor sit amet.
                </p>
            </div>
        </section>
    );
}