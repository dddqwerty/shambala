import DeskIgmSecondPart from "./desk";
import MobileIgmSecondPart from "./mobile";
import IgmSecondPartText from "./text";

const IgmSecondPart = () => {
    return (
        <div className="flex items-center flex-col justify-center">
            <IgmSecondPartText />
            <DeskIgmSecondPart />
            <MobileIgmSecondPart />
        </div>
    )
}

export default IgmSecondPart;