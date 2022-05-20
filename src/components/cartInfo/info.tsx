import Typography from '../typography'
import CountUp from 'react-countup'
const Info = () => {
  return (
    <div className=" bg-[#202121] flex flex-row w-[1200px]">
      <div className=" bg-components-30 h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center  items-center rounded-[8px]  ">
        <Typography variant="h2" className=" text-primary-white ">
          <CountUp start={0} end={2832000} duration={1} separator="," decimals={0} decimal=",">
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography variant="title-small" className=" text-components-50 ">
          ГАРГАСАН ХҮЧИЛТӨРӨГЧ
        </Typography>
      </div>
      <div className=" bg-components-30 h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center items-center rounded-[8px] mx-[50px]  ">
        <Typography variant="h2" className=" text-primary-white ">
          <CountUp start={0} end={494} duration={1} separator="," decimals={0} decimal="," suffix='тн'>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography variant="title-small" className=" text-components-50 ">
        БИОМАСС ҮҮСГЭСЭН
        </Typography>
      </div>
      <div className=" bg-components-30 h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center items-center rounded-[8px]  ">
        <Typography variant="h2" className=" text-primary-white ">
          <CountUp start={0} end={539726} duration={1} separator="," decimals={0} decimal="," suffix='кг'>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography variant="title-small" className=" text-components-50 ">
        CO2 ШИНГЭЭСЭН
        </Typography>
      </div>
    </div>
  )
}
export default Info
