import { Bonusnuud, GarchigBonus, Mod } from 'components'
import { PADDINGX } from 'constants/layout'

const Bonuss = () => {
    return (
        <div className={`flex flex-col md:flex-row relative py-10`}>
            <div
                style={{
                    background: 'linear-gradient(180deg, rgba(248, 208, 75, 0) 0%, rgba(248, 208, 75, 0.21) 100%)',
                }}
                className="absolute w-full h-[656px] bottom-0  md:hidden"
            />

            <div className={`flex z-40 flex-col h-screen max-w-shambWidth mx-auto ${PADDINGX} w-full`}>
                <div className="flex space-x-4">
                    <div className="flex flex-col items-start gap-28">
                        <GarchigBonus />
                        <Bonusnuud />
                    </div>
                </div>
            </div>
            <Mod />
        </div>
    )
}
export default Bonuss
