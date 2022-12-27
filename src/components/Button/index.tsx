import { FC } from "react";

interface ButtonProps {
    children: React.ReactNode,
    href: string,
    block?: boolean,
    size?: 'md' | 'lg',
    variant?: 'default' | 'primary' | 'text',
}

const Button: FC<ButtonProps> = ({
    children,
    href,
    block = false,
    size = 'md',
    variant = 'default'
}) => {
    const variantClasses = {
        default: 'bg-transparent rounded-2xl text-gray hover:text-offblack border-2',
        primary: 'bg-offblack rounded-2xl text-offwhite border-2 border-black hover:text-offblack hover:bg-transparent font-700',
        text: 'bg-transparent text-gray hover:text-offblack',
    }

    const sizeClasses = {
        md: 'text-sm px-5 py-2',
        lg: 'text-md px-6 py-3',
    }

    return (
        <a href={href} className={`transition ${variantClasses[variant]} ${sizeClasses[size]} ${block ? 'block w-full text-center' : 'inline-flex'}`}>
            {children}
        </a>
    )
}

export default Button