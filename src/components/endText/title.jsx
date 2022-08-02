import Emphasis from 'components/ligature'
import Typography from 'components/typography'

export const Title = (props) => {
  const { title, subTitle } = props

  return (
    <div className="  flex flex-col items-center  justify-center z-20 ">
      <div className=" block md:hidden absolute left-0 mt-36">
        <svg width="209" height="288" viewBox="0 0 209 288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="65" cy="144" r="144" fill="url(#paint0_linear_1355_18142)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18142"
              x1="65"
              y1="0"
              x2="65.1186"
              y2="234.373"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute right-[calc(50%+100px)] mb-[250px] block md:hidden">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18217)">
            <circle r="3" transform="matrix(-1 0 0 1 23 23)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18217"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18217" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18217" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute left-[calc(50%+100px)] mb-[300px] block md:hidden">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18215)">
            <circle r="5" transform="matrix(-1 0 0 1 25 25)" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18215"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18215" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18215" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute mb-[470px] right-[calc(50%+100px)] hidden md:flex">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18511)">
            <circle cx="32" cy="32" r="8" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18511"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18511" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18511" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[calc(50%+350px)] hidden md:flex">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18512)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18512"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18512" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18512" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <Emphasis className=" max-w-[700px] z-20">{title}</Emphasis>
      <div className=" h-8"></div>
      <Typography className="text-white/60 max-w-[700px] text-center z-20" variant="body-web">
        {subTitle}
      </Typography>
    </div>
  )
}
