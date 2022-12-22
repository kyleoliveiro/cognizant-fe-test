import { FC } from "react";

interface ButtonProps {
    children: React.ReactNode,
    href: string,
    size?: 'md' | 'lg',
    variant?: 'default' | 'primary'
}

const Button: FC<ButtonProps> = ({
    children,
    href,
    size = 'md',
    variant = 'default'
}) => {
    const variantClasses = {
        default: 'bg-transparent rounded-2xl text-gray border-2',
        primary: 'bg-offblack rounded-2xl text-offwhite border-2 border-black hover:text-offblack hover:bg-transparent',
    }

    const sizeClasses = {
        md: 'text-sm px-5 py-3',
        lg: 'text-md px-6 py-3',
    }

    return (
        <a href={href} className={`inline-flex font-700 ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {children}
        </a>
    )
}

export default Button