import Typography from "components/typography";
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const GarchigBonus = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))    
    console.log(matches)
    return (

        <div className="md:flex-row flex-col flex md:items-center">
            <Typography variant={matches ? "title-big" : "h3"} className="text-primary-white">
                <p> Price per tree </p>
            </Typography>
            <span className="opacity-0 hidden md:block"> ts</span>
            <Typography variant={matches ? "h3" : "h2"} className="text-primary-white">
                80,000 MNT
            </Typography>
        </div>
    )
}
export default GarchigBonus;