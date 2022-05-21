import { handleIcon } from "utils";
import GantsBonus from ".";

const Bonusnuud = () => {
    return(

        <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[154px] gap-y-[58px] md:gap-y-[97px]">
                <GantsBonus
                    headerEl={handleIcon({ icon: 'users', size: 30 })}
                    title={"Digital certificate of the tree owner"} />

                <GantsBonus
                    headerEl={handleIcon({ icon: 'creditcard', size: 30 })}
                    title={"Smart name card"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'heart', size: 30 })}
                    title={"35 years of tree care, watering and guarding"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'star', size: 30 })}
                    title={"Trade and Development Bank BRITTO classic card"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'pulse', size: 30 })}
                    title={"2-year-old elm tree"} />

            </div>
        </div >
    )
}
export default Bonusnuud