import { useEffect, useState } from 'react';

export function useScrollLock() {
    const [isScrollLocked, setIsScrollLocked] = useState<boolean>(false);

    useEffect(() => {
        if (isScrollLocked) {
            document.querySelector('body')?.classList.add('overflow-hidden')
        } else {
            document.querySelector('body')?.classList.remove('overflow-hidden')
        }
    }, [isScrollLocked])

    return [isScrollLocked, setIsScrollLocked] as const;
}

