import Typography from "components/typography";

type Props = {
    headerEl: React.ReactNode,
    title: string,
    desc: string,
}

const GlobeCard = (props: Props) => {
    const { headerEl, title, desc } = props;
    return <div className="md:max-w-[585px] md:gap-30 leading-8 gap-12">
        <div className=" mb-[60px] md:mb-[48px] flex items-center gap-6">
            <div className="bg-[#404040] w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-[8px]">
                <p className="text-primary-white m-[11px] md:m-[15px]">{headerEl}</p>
            </div>
            <Typography
                variant="body-web"
                className="text-[14px] md:text-[16px]"
            ><p className=" opacity-[.85]  text-primary-white">{title}</p>
            </Typography>
        </div>

        <Typography
            variant="body-web"
        ><p className="hidden md:block opacity-60 text-primary-white">{desc}</p>
        </Typography>

    </div>
}
export default GlobeCard;