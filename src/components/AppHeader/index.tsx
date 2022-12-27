import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useScrollLock } from "../../hooks/useScrollLock";
import NavMenu from "../NavMenu";
import MenuToggle from "../MenuToggle";

const AppHeader: FC = () => {
    const [isNavOpened, setIsNavOpened] = useState<boolean>(false);
    const [isScrollLocked, setIsScrollLocked] = useScrollLock()

    const toggleMenu = () => {
        setIsNavOpened(!isNavOpened)
    }

    useEffect(() => {
        setIsScrollLocked(isNavOpened)
    }, [isNavOpened])

    return (
        <nav className="p-4 lg:px-8" aria-label="Navigation menu" role="navigation">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <img src="/images/logo.svg" width={84} height={27} alt="Snap Logo" />
                </Link>

                <div className={`${isNavOpened ? 'block' : 'hidden'} lg:block flex-1`}>
                    <NavMenu
                        items={[
                            {
                                text: 'Features',
                                menuAlign: 'right',
                                children: [
                                    {
                                        text: 'Todo List',
                                        icon: 'todo',
                                        href: '/#todo-list'
                                    },
                                    {
                                        text: 'Calendar',
                                        icon: 'calendar',
                                        href: '/#calendar'
                                    },
                                    {
                                        text: 'Reminders',
                                        icon: 'reminders',
                                        href: '/#reminders'
                                    },
                                    {
                                        text: 'Planning',
                                        icon: 'planning',
                                        href: '/#planning'
                                    },
                                ],
                            },
                            {
                                text: 'Company',
                                children: [
                                    {
                                        text: 'History',
                                        href: '/#history'
                                    },
                                    {
                                        text: 'Our Team',
                                        href: '/#our-team'
                                    },
                                    {
                                        text: 'Blog',
                                        href: '/#blog'
                                    },
                                ],
                            },
                            {
                                text: 'Careers',
                                href: '/#careers',
                            },
                            {
                                text: 'About',
                                href: '/#about',
                            },
                        ]}
                    />
                </div>
                <div className="relative z-50 lg:hidden">
                    <MenuToggle opened={isNavOpened} onClick={toggleMenu} />
                </div>
            </div>

            {isNavOpened ? (
                <div
                    className="inset-0 fixed z-30"
                    style={{
                        backgroundColor: `rgba(0,0,0,0.8)`
                    }}
                    onClick={toggleMenu}
                />
            ) : (
                <></>
            )}
        </nav>
    )
}

export default AppHeader