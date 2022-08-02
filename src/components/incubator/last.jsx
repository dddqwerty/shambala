import Typography from 'components/typography/index'

export const Last = (props) => {
  const { vari, className, children } = props

  return (
    <div className="flex justify-center items-center">
      <div className="absolute z-30 mb-96 right-[calc(50%+300px)] hidden md:block">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1355_18515)">
            <circle cx="25" cy="25" r="5" fill="#FFD217" />
          </g>
          <defs>
            <filter
              id="filter0_d_1355_18515"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1355_18515" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1355_18515" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="absolute mb-[500px] hidden md:block opacity-50">
        <svg width="496" height="830" viewBox="0 0 496 830" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="148.5" ry="317" transform="matrix(-1 0 0 1 347.5 317)" fill="url(#paint0_linear_452_1383)" />
          <ellipse rx="148.5" ry="317" transform="matrix(-1 0 0 1 148.5 513)" fill="url(#paint1_linear_452_1383)" />
          <defs>
            <linearGradient
              id="paint0_linear_452_1383"
              x1="148.5"
              y1="0"
              x2="149.057"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_452_1383"
              x1="148.5"
              y1="0"
              x2="149.057"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Typography variant={vari} className={className}>
        {children}
      </Typography>
    </div>
  )
}
