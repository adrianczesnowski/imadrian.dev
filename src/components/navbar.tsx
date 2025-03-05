"use client";

import { ConfettiButton } from "@/components/magicui/confetti";
import { CopyIcon, Check } from "lucide-react";
import React, { useState } from "react";
import { DATA } from "@/data/resume";

export default function Navbar() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  function copyEmail() {
    setIsEmailCopied(true);
    navigator.clipboard
      .writeText(DATA.contact.email)
      .then(() => {})
      .catch((err) => console.error(err));
    setTimeout(() => setIsEmailCopied(false), 3000);
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row gap-2 justify-end space-x-0 w-full">
            <ConfettiButton onButtonClick={copyEmail}>
              <span>Get my email</span>
              {isEmailCopied ? <Check size={16} /> : <CopyIcon size={16} />}
            </ConfettiButton>
          </div>
        </nav>
      </div>
    </aside>
  );
}
