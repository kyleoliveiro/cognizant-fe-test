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
        primary: 'bg-offblack rounded-2xl text-offwhite',
    }

    const sizeClasses = {
        md: 'text-sm px-5 py-3',
        lg: 'text-lg px-8 py-4',
    }

    return (
        <a href={href} className={`inline-flex ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {children}
        </a>
    )
}

export default Button