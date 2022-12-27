import Link from "next/link";
import { FC } from "react";
import Button from "../Button";
import NavItem, { NavItemProps } from '../NavItem'

interface AppNavProps {
    items: NavItemProps[]
}

const AppNav: FC<AppNavProps> = ({
    items
}) => {
    return (
        <div className="fixed top-0 right-0 h-screen z-40 bg-offwhite w-56 px-6 py-20 overflow-scroll">
            <ul className="space-y-5">
                {items.map(item => (
                    <li key={item.text}>
                        <NavItem
                            {...item}
                        />
                    </li>
                ))}
            </ul>
            <div className="mt-10">
                <Button variant="text" href="/#login" size="lg" block>Login</Button>
                <Button href="/#login" size="lg" block>Register</Button>
            </div>
        </div>
    )
}

export default AppNav