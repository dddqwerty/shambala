import { handleIcon } from "utils";
import GantsBonus from ".";

const Bonusnuud = () => {
    return(

        <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[154px] gap-y-[58px] md:gap-y-[97px]">
                <GantsBonus
                    headerEl={handleIcon({ icon: 'users', size: 30 })}
                    title={"Мод эзэмшигчийн дижитал гэрчилгээ"} />

                <GantsBonus
                    headerEl={handleIcon({ icon: 'creditcard', size: 30 })}
                    title={"Ухаалаг нэрийн хуудас"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'heart', size: 30 })}
                    title={"Модны 35 жилийн арчилгаа усалгаа, харуул хамгаалалт"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'star', size: 30 })}
                    title={"Худалдаа Хөгжлийн банкны БРИТТО классик карт"} />
                <GantsBonus
                    headerEl={handleIcon({ icon: 'pulse', size: 30 })}
                    title={"2 настай хайлаас мод"} />

            </div>
        </div >
    )
}
export default Bonusnuud