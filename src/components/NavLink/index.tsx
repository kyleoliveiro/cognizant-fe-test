import Link from "next/link";
import { type FC } from "react";

export interface NavLinkProps {
    text: string,
    href?: string,
    icon?: string,
}

const NavLink: FC<NavLinkProps> = ({
    text,
    href = '',
    icon = '',
}) => {
    return (
        <Link href={href}>
            <div className="flex items-center space-x-3">
                {icon ? (
                    <div style={{
                        width: 24,
                        height: 24,
                        backgroundImage: `url(/images/icons/icon-${icon}.svg)`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }} />
                ) : (<></>)}
                <div className="text-gray hover:text-offblack transition text-md lg:text-sm">
                    {text}
                </div>
            </div>
        </Link>
    )
}

export default NavLink