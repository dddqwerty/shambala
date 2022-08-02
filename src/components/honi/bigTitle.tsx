import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type Props = {
  titleTop: string
  titleBtm: string
  category1: string
  category2: string
  category3: string
}

const BigTitle = (props: Props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const { titleTop, titleBtm, category1, category2, category3 } = props

  return (
    <div className={matches ? 'flex flex-col max-w-[340px]' : 'flex flex-col max-w-[700px]'}>
      <div className={matches ? 'mb-[6px]' : 'flex'}>
        <Typography variant={matches ? 'p-small' : 'p-big'} className="text-[#B6A358] uppercase">
          {category1}
        </Typography>
        <Typography
          variant={matches ? 'p-small' : 'p-big'}
          className={matches ? 'text-[#B6A358] uppercase' : 'text-[#B6A358] uppercase mx-[16px]'}
        >
          {category2}
        </Typography>
        <Typography variant={matches ? 'p-small' : 'p-big'} className="text-[#B6A358] uppercase">
          {category3}
        </Typography>
      </div>
      <div>
        <h1
          className={
            matches
              ? 'font-bold text-5xl text-primary-white uppercase'
              : 'font-extrabold text-8xl text-primary-white uppercase z-4'
          }
        >
          {titleTop}
        </h1>
        <h1
          className={
            matches
              ? 'font-bold text-5xl text-primary-white uppercase'
              : 'font-extrabold text-8xl text-primary-white uppercase z-4'
          }
        >
          {titleBtm}
        </h1>
      </div>

      <div className={matches ? 'hidden' : 'w-[85%] flex justify-end'}>
        <svg width="290" height="24" viewBox="0 0 290 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M289.061 13.0607C289.646 12.4749 289.646 11.5251 289.061 10.9393L279.515 1.3934C278.929 0.807611 277.979 0.807611 277.393 1.3934C276.808 1.97919 276.808 2.92893 277.393 3.51472L285.879 12L277.393 20.4853C276.808 21.0711 276.808 22.0208 277.393 22.6066C277.979 23.1924 278.929 23.1924 279.515 22.6066L289.061 13.0607ZM0 13.5H288V10.5H0V13.5Z"
            fill="#B6A358"
          />
        </svg>
      </div>
      <div className={matches ? 'flex justify-end w-[90%]' : 'hidden'}>
        <svg width="168" height="8" viewBox="0 0 168 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M167.354 4.35357C167.549 4.15831 167.549 3.84172 167.354 3.64646L164.172 0.46448C163.976 0.269218 163.66 0.269218 163.464 0.46448C163.269 0.659743 163.269 0.976325 163.464 1.17159L166.293 4.00001L163.464 6.82844C163.269 7.0237 163.269 7.34029 163.464 7.53555C163.66 7.73081 163.976 7.73081 164.172 7.53555L167.354 4.35357ZM-4.37114e-08 4.5L167 4.50001L167 3.50001L4.37114e-08 3.5L-4.37114e-08 4.5Z"
            fill="#B6A358"
          />
        </svg>
      </div>
    </div>
  )
}

export default BigTitle
