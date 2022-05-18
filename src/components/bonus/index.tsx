import Typography from "components/typography";

type Props = {
    headerEl: React.ReactNode,
    title: string,
}

const GantsBonus = (props: Props) => {
    const { headerEl, title } = props;
    return <div className="leading-8 gap-12">
        <div className="w-[316px] mb-[97px] flex items-center gap-6">
            <div className="bg-[#404040] w-[60px] h-[60px] rounded-[8px]">
                <p className="text-primary-white m-[15px]">{headerEl}</p>
            </div>
            <Typography
                variant="body-web"
            ><p className=" opacity-[.85] text-primary-white">{title}</p>
            </Typography>
        </div>

    </div>
}
export default GantsBonus;