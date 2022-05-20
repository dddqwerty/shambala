import { Typography } from "components";
import { } from 'react';
type Props = {
    picture: string,
    text: string,
}

const HoveringCard = (props: Props) => {
    const { picture, text } = props;

    return <div className='group relative flex justify-center items-center'>
        <img src={picture} alt="" className="group-hover:opacity-[.56] duration-300" />
        <Typography variant="body-web" className="text-[#C0C0C0] absolute bottom-50% w-[60%] group-hover:block hidden duration-300">{text}</Typography>
    </div>
}

export default HoveringCard;