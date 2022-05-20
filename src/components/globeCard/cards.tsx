import { GlobeCard } from 'components'
import { handleIcon } from 'utils'
import { PADDINGX } from 'constants/layout'


const BidYuHiijBainaVeCard = () => {
    return (

        <div className={`grid ${PADDINGX} `}>
            <div className="md:mb-[150px] mb-0 grid md:grid-cols-2  md:gap-30">

                <GlobeCard
                    headerEl={handleIcon({ className: 'h-[25px] md:h-[30px] ', icon: 'globe', size: 30 })}
                    title={"Agro-Tech research"}
                    desc={"The source of desertification caused by natural and other factors is studied by team researchers and engineers on site."} />

                <GlobeCard
                    headerEl={handleIcon({ className: 'h-[25px] md:h-[30px]', icon: 'globe', size: 30 })}
                    title={"Intersectoral integration"}
                    desc={"The tree irrigation system has been cleverly designed to provide automatic irrigation with minimal water consumption."} />

            </div>
            <div className="md:mb-[150px] mb-0 grid md:grid-cols-2 md:gap-30">

                <GlobeCard
                    headerEl={handleIcon({ className: 'h-[25px] md:h-[30px]', icon: 'globe', size: 30 })}
                    title={"Desertification rehabilitation // Land Art"}
                    desc={"At our project site, 24,000 elm trees are grown and irrigated away from the infrastructure. We are planting trees in the form of Land Art without compromising their ability to grow."} />

                <GlobeCard
                    headerEl={handleIcon({ className: 'h-[25px] md:h-[30px]', icon: 'globe', size: 30 })}
                    title={"Organic Marketing"}
                    desc={"Our customers and social media followers are an effective tool for promoting the products and services of our partners in the market. We have successfully organized a marketing campaign that highlights the joint efforts of our partners to address desertification in the arts."} />

            </div>
        </div >
    )
}

export default BidYuHiijBainaVeCard