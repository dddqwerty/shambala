import { Title, BidYuHiijBainaVeCard, Buurunhii } from "components";

const WhatAreWeDoing = () => {
    return (
        <div className="grid place-items-center h-screen mobile:flex mobile:flex-col items-center gap-[130px]">
            <Buurunhii />
            <div className="max-w-shambWidth mobile:max-w-xs">
                <img src="/assets/davalgaa.svg" className="w-full mobile:hidden" alt="" />
                <div className="flex flex-col">
                    <Title></Title>
                    <div>
                        <BidYuHiijBainaVeCard></BidYuHiijBainaVeCard>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatAreWeDoing