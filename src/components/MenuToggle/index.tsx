import { type FC } from "react";

interface MenuToggleProps {
    opened?: boolean,
    onClick?: () => void,
}

const MenuToggle: FC<MenuToggleProps> = ({
    opened = false,
    onClick = () => null,
}) => {
    return (
        <button
            onClick={() => onClick()}
            style={{
                backgroundImage: `url(/images/icons/icon-${opened ? 'close-menu' : 'menu'}.svg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: 32,
                height: 32,
            }}
        />
    )
}

export default MenuToggle