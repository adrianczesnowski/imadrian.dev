'use client'

import {ConfettiButton} from "@/components/magicui/confetti";
import {CopyIcon, Check} from "lucide-react";
import React, {useState} from "react";
import Link from "next/link";

export default function Navbar() {
    const [isEmailCopied, setIsEmailCopied] = useState(false);

    function copyEmail() {
        setIsEmailCopied(true);
        navigator.clipboard.writeText("adrian.czesnowski22@gmail.com")
            .then(() => {
            })
            .catch(err => console.error(err));
        setTimeout(() => setIsEmailCopied(false), 3000);
    }

    return (
        <aside className="-ml-[8px] mb-16 tracking-tightpx-2 pl-2">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row gap-8 items-center justify-between space-x-0 w-full">
                        <div className="relative flex gap-8">
                            <Link href={'/'}>
                                <span className="relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-200">
                                    Home
                                </span>
                            </Link>
                            <Link href={'/blog'}>
                                 <span className="relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-200">
                                    Blog
                                </span>
                            </Link>
                        </div>
                        <ConfettiButton onButtonClick={copyEmail}>
                            <span>Get my email</span>
                            {isEmailCopied ? <Check size={16}/> : <CopyIcon size={16}/>}
                        </ConfettiButton>
                    </div>
                </nav>
            </div>
        </aside>
    );
}
