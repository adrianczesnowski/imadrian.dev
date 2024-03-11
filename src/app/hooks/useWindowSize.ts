import {useEffect, useState} from "react";

interface IWindowSize {
    width: number | undefined;
    height: number | undefined;
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<IWindowSize>({
        height: undefined,
        width: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        ...windowSize,
    }
}