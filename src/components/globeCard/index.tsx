import Typography from "components/typography";

type Props = {
    headerEl: React.ReactNode,
    title: string,
    desc: string,
}

const GlobeCard = (props: Props) => {
    const { headerEl, title, desc } = props;
    return <div className="w-[585px] leading-8 gap-12 ">
        <div className="w-[330px] mb-[48px] mobile:mb-[60px] flex items-center gap-6 mobile:gap-4 mobile:h-[52px] mobile:w-[252px]">
            <div className="bg-[#404040] w-[60px] h-[60px] rounded-[8px] mobile:w-[48px] mobile:h-[48px]  ">
                <p className="text-primary-white m-[15px] flex mobile:m-[12px] ">{headerEl}</p>
            </div>
            <Typography
                className="mobile:text-[14px]"
                variant="body-web"
            ><p className=" opacity-[.85] text-primary-white mobile:leading-[26px]">{title}</p>
            </Typography>
        </div>
        <div className="mobile:hidden">
            <Typography
                variant="body-web"
            ><p className=" opacity-60 text-primary-white ">{desc}</p>
            </Typography>
        </div>

    </div>
}
export default GlobeCard;