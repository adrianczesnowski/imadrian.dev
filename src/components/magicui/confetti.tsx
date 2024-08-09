'use client'

import confetti from "canvas-confetti";

import {Button} from "@/components/ui/button";

export function ConfettiButton({
                                   children,
                                   onButtonClick,
                               }: Readonly<{
    children: React.ReactNode | JSX.Element;
    onButtonClick?: () => void;
}>) {
    const handleClick = () => {
        onButtonClick?.();

        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
        };

        const shoot = () => {
            confetti({
                ...defaults,
                particleCount: 40,
                scalar: 1.2,
            });

            confetti({
                ...defaults,
                particleCount: 10,
                scalar: 0.75,
            });
        };

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
    };

    return (
        <div className="relative">
            <Button variant="outline" onClick={handleClick}>{children}</Button>
        </div>
    );
}