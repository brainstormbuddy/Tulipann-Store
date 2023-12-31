interface TitleBannerProps {
    title: string,
    subtitle: string,
    className?: string
}

export const TitleBanner = (props: TitleBannerProps) => {
    return (
        <div className={`px-8 md:px-40 lg:px-80 text-center flex flex-col gap-4 ${props.className}`}>
            <h2 className={"text-3xl md:text-5xl font-bold"}>{props.title}</h2>
            <p className={"text-sm md:text-base text-gray-400"}>{props.subtitle}</p>
        </div>
    )
}