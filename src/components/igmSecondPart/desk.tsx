import { Cells } from "components/Pictures/cells";
import { IgmSecondPartPictureData } from "../../../public/assets/IgmSecondPartPictureData";

const DeskIgmSecondPart = () => {

    return (
        <div className="max-w-shambWidth w-screen invisible md:visible -z-50 md:z-0 absolute md:relative flex justify-center items-center top-0 ">
            <div className="grid grid-cols-3 gap-y-[34px] gap-x-[25px]">
                <img src="assets/IgmSecondPartPictures/lifeOnLand.jpg" alt="" />
                {IgmSecondPartPictureData.map((el) => {
                    return <Cells pic={el.picture} text={el.text} textClassName={"px-[18px]"} />
                })}
            </div>
        </div>
    )
}

export default DeskIgmSecondPart;