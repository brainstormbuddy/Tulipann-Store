import {Link} from "react-router-dom";
import {routes} from "../routes/routes";
import {FaUserCircle} from "react-icons/all";
import {OptimizedImage} from './OptimizedImage';
import {Image} from "../models";

interface DiscoverCardProps {
    id: number,
    title: string,
    summary: string,
    banner: Image,
    date: string,
    tags: string[],
    author: string,
    className?: string
}

export const DiscoverCard = (props: DiscoverCardProps) => {
    return (
        <Link
            to={`${routes.discover.path}/${props.id}`}
            className={`h-full w-full overflow-hidden rounded-lg flex flex-col shadow-lg ${props.className} hover:scale-110`}
        >
            <div className={"h-52 w-full"}>
                <OptimizedImage image={props.banner}/>
            </div>
            <div className={"h-full px-6 pt-6 pb-4 flex flex-col justify-between"}>
                <div className={"flex flex-col gap-2"}>
                    <div className={"flex gap-2"}>
                        {
                            props.tags.map((tag) => (
                                <span className={"text-sm text-red-500"}>
                                    {tag}
                                </span>
                            ))
                        }
                    </div>
                    <h1 className={"font-bold mb-1 text-xl"}>{props.title}</h1>
                    <p className={''}>{props.summary}</p>
                </div>
                <div className={"flex gap-2 items-center mt-6"}>
                    <FaUserCircle
                        size={30}
                        color={'text-gray-400'}
                    />
                    <div className={"flex flex-col text-sm"}>
                        <span className={"font-medium"}>{props.author}</span>
                        <span className={"text-gray-400"}>{props.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}