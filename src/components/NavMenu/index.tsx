import { FC } from "react";
import Button from "../Button";
import NavItem, { NavItemProps } from '../NavItem';

interface AppNavProps {
    items: NavItemProps[]
}

const AppNav: FC<AppNavProps> = ({
    items
}) => {
    return (
        <div className="fixed top-0 right-0 h-screen z-40 bg-offwhite w-56 px-6 py-20 overflow-scroll lg:static lg:w-full lg:h-auto lg:px-0 lg:py-0 lg:overflow-auto lg:bg-transparent lg:flex lg:items-center lg:justify-between lg:overflow-visible">
            <ul className="space-y-5 lg:space-y-0 lg:space-x-10 lg:ml-16 lg:flex lg:items-center leading-none">
                {items.map(item => (
                    <li key={item.text}>
                        <NavItem
                            {...item}
                        />
                    </li>
                ))}
            </ul>
            <div className="mt-10 lg:mt-0 lg:flex lg:items-center">
                <Button variant="text" href="/#login" size="md" block>Login</Button>
                <Button href="/#login" size="md" block>Register</Button>
            </div>
        </div>
    )
}

export default AppNav