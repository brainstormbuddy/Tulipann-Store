import {NavCard} from "./NavCard";
import {Image} from "../models";

interface NavItem {
    img: Image,
    title: string,
    subtitle: string,
    to: string
}

interface NavbarMenuProps {
    items?: NavItem[],
    className?: string
}

export const NavbarMenu = (props: NavbarMenuProps) => {
    return (
        <div
            className={`grid lg:grid-cols-4 gap-12 w-full px-8 py-6 ${props.className}`}
        >
            {
                props.items?.map((item) => (
                    <NavCard
                        img={item.img}
                        title={item.title}
                        subtitle={item.subtitle}
                        to={item.to}
                        key={item.title}
                    />
                ))
            }
        </div>
    )
}