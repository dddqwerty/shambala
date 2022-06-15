import { height, style } from '@mui/system'
import React from 'react'
type Props = {
    size: number,
    tsatsrag: number,
}
const Shartseg = (props: Props) => {
    const { size, tsatsrag } = props
    return (
        <span className={`bg-primary-yellow rounded-full shadow-[0_0_${tsatsrag}px_#F8D04B] block`} style={{width: size + 'px', height: size + 'px'}} />
    )
}
export default Shartseg;