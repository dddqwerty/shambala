import Typography from 'components/typography'
import Emphasis from 'components/ligature'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { PADDINGX } from 'constants/layout'

export const HeadTextOfIcubator = (props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const { title, body } = props

  return (
    <div className={` ${PADDINGX} flex flex-col justify-center`}>
      <div className="absolute z-20 md:block hidden">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18101)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18101"
              x="0"
              y="0"
              width="64"
              height="64"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18101" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18101" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="block md:hidden absolute left-[calc(50%+50px)] mb-80">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18204)">
            <circle r="5" transform="matrix(-1 0 0 1 25 25)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18204"
              x="0"
              y="0"
              width="50"
              height="50"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18204" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18204" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="block md:hidden absolute mt-72">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18205)">
            <circle r="3" transform="matrix(-1 0 0 1 23 23)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18205"
              x="0"
              y="0"
              width="46"
              height="46"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.972549 0 0 0 0 0.815686 0 0 0 0 0.294118 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18205" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18205" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <Emphasis className=" justify-center text-white z-10 " left={false} right={false}>
        <Typography variant={matches ? 'title-big' : 'h1'}>{title}</Typography>
      </Emphasis>
      <div className="h-10"></div>
      <Typography className=" z-20 text-primary-white opacity-60 max-w-[800px] text-center" variant={'body-web'}>
        {body}
      </Typography>
    </div>
  )
}
