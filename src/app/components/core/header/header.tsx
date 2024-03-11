'use client'
import {routes} from "@/app/routes";
import Link from "next/link";
import {useEffect} from "react";
import {useWindowSize} from "@/app/hooks/useWindowSize";
import {usePathname} from "next/navigation";
import {useDisclosure} from "@nextui-org/react";
import NavigationModal from "@/app/components/core/header/navigation-modal";

export const Header = () => {
    const pathname = usePathname();
    const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
    const { width } = useWindowSize();

    useEffect(() => {
        onClose();
    }, [onClose, pathname]);

    return (
        <header className="absolute top-0 left-0 w-full">
            <div className="p-4">
                <div className="flex flex-row justify-between items-center">
                    <Link href={routes.home}>adrian</Link>
                    <button onClick={onOpen} className="lg:hidden">menu</button>
                </div>
            </div>
            {width && width < 1024 && (
                <NavigationModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    onClose={onClose}
                />
            )}
        </header>
    )
};
