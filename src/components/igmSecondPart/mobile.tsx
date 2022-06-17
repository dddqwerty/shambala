import MobileSwiper from "components/mobileSwiper";
import { IgmSecondPartPictureData } from "../../../public/assets/IgmSecondPartPictureData";

const MobileIgmSecondPart = () => {
    return (
        <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0">
            <MobileSwiper data={IgmSecondPartPictureData} dataLength={5} slideClassName="px-[17px]" />
            <div className="h-[100px]"></div>
        </div>
    )
}

export default MobileIgmSecondPart;