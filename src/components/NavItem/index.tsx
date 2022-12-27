import { type FC, useState } from "react";
import NavLink, { type NavLinkProps } from "../NavLink";

export interface NavItemProps {
    text: string,
    href?: string,
    children?: NavLinkProps[],
    menuAlign?: 'left' | 'right'
}

const NavItem: FC<NavItemProps> = ({
    text,
    href = '',
    children = [],
    menuAlign = 'left'
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleOpened = () => {
        setIsOpened(!isOpened)
    }

    return children.length > 0 ? (
        <div className="lg:relative lg:z-50">
            <button onClick={toggleOpened} aria-expanded={isOpened ? 'true' : 'false'}>
                <div className="flex items-center space-x-2">
                    <div className="text-gray hover:text-offblack transition text-md lg:text-sm">{text}</div>
                    <div style={{
                        width: 12,
                        height: 12,
                        backgroundImage: `url(/images/icons/icon-arrow-${isOpened ? 'up' : 'down'}.svg)`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} />
                </div>
            </button>
            <div className={isOpened ? 'block' : 'hidden'}>
                <ul className={`mt-5 pl-5 space-y-5 lg:absolute lg:w-40 lg:rounded-xl lg:shadow-lg lg:p-6 lg:bg-white lg:${menuAlign}-0`}>
                    {children.map(child => (
                        <li key={child.text}>
                            <NavLink {...child} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ) : (
        <NavLink text={text} href={href} />
    )
}

export default NavItem