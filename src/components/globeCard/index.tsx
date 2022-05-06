import Typography from "components/typography";

type Props = {
    headerEl: React.ReactNode,
    title: string,
    desc: string,
}

const GlobeCard = (props: Props) => {
    const { headerEl, title, desc } = props;
    return <div className="w-[585px] mr-[123px] leading-8 gap-12">
        <div className="w-[330px] mb-[48px] flex items-center gap-6">
            <div className="bg-[#404040] w-[60px] h-[60px] rounded-[8px]">
                <p className="text-primary-white m-[15px]">{headerEl}</p>
            </div>
            <Typography
                variant="body-web"
            ><p className=" opacity-[.85] text-primary-white">{title}</p>
            </Typography>
        </div>

        <Typography
            variant="body-web"
        ><p className=" opacity-60 text-primary-white">{desc}</p>
        </Typography>

    </div>
}
export default GlobeCard;