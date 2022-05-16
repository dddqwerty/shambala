import { handleIcon } from "utils";
import GantsBonus from ".";

const Bonusnuud = () => {
    return(

        <div className="bg-backgroundColor-darkGra flex flex-col">
            <div className="flex flex-row mr-[147px] gap-[140px]">

                <GantsBonus
                    headerEl={handleIcon({ icon: 'users', size: 30 })}
                    title={"Мод эзэмшигчийн дижитал гэрчилгээ"} />

                <GantsBonus
                    headerEl={handleIcon({ icon: 'creditcard', size: 30 })}
                    title={"Ухаалаг нэрийн хуудас"} />
            </div>
            <div className=" flex flex-row gap-[140px]">

                <GantsBonus
                    headerEl={handleIcon({ icon: 'heart', size: 30 })}
                    title={"Модны 35 жилийн арчилгаа усалгаа, харуул хамгаалалт"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'star', size: 30 })}
                    title={"Худалдаа Хөгжлийн банкны БРИТТО классик карт"} />

            </div>
            <div className=" gap-[140px]">

                <GantsBonus
                    headerEl={handleIcon({ icon: 'pulse', size: 30 })}
                    title={"2 настай хайлаас мод"} />

            </div>

        </div >
    )
}
export default Bonusnuud