import { FC, useState } from "react";
import NavLink, { NavLinkProps } from "../NavLink";

export interface NavItemProps {
    text: string,
    href?: string,
    children?: NavLinkProps[],
}

const NavItem: FC<NavItemProps> = ({
    text,
    href = '',
    children = [],
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleOpened = () => {
        setIsOpened(!isOpened)
    }

    return children.length > 0 ? (
        <>
            <button onClick={toggleOpened} aria-expanded={isOpened ? 'true' : 'false'}>
                <div className="flex items-center space-x-3">
                    <div className="text-gray hover:text-offblack transition text-md">{text}</div>
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
                <ul className="mt-5 pl-5 space-y-5">
                    {children.map(child => (
                        <li key={child.text}>
                            <NavLink {...child} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    ) : (
        <NavLink text={text} href={href} />
    )
}

export default NavItem