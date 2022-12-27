import { FC } from "react";

interface LogoListItem {
    title: string,
    image: string,
    height: number,
    width: number,
}

interface LogoListProps {
    items: LogoListItem[]
}

const LogoList: FC<LogoListProps> = ({
    items,
}) => {
    return (
        <ul className="grid grid-cols-4 gap-4">
            {items.map(item => (
                <li className="flex items-center justify-center" key={item.title}>
                    <img src={item.image} alt={item.title} height={item.height} width={item.width} />
                </li>
            ))}
        </ul>
    )
}

export default LogoList