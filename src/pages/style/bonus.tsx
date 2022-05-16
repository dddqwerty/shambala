import { Bonusnuud, GarchigBonus } from "components";

const Bonuss = () => {
    return (
        <div className="flex ">

            <div className="grid gap-[120px] w-full">
                <GarchigBonus />
                <Bonusnuud />

            </div>

            <img src="/assets/mod.svg" className="w-[1057.53px] h-auto" alt="" />
        </div>
    )
}
export default Bonuss