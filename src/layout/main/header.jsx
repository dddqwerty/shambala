import React from 'react'
<<<<<<< HEAD
import { Typography } from 'components'
import { handleIcon } from 'utils'
import Link from 'next/link'
export const Header = () => {
  return (
    <div
      id="header background"
      style={{
        backgroundColor: 'rgba(32, 33, 33, 0.5)',
      }}
      className="fixed z-50 flex justify-between backdrop-blur-[20px]  items-center w-full h-[70px]"
    >
      <div className="h-10 ml-28 ">
        <Link href={'/'}>
          <a>
            <img className="h-full w-full" src="assets/mainlogo1.png" />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-between h-full">
        <div className="h-full flex items-center">
          <div className="flex items-center border-transparent h-full px-[35px] hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              Who we are
            </Typography>
          </div>
          <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              What are we doing
            </Typography>
          </div>
          <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              Who we work with
            </Typography>
          </div>
          <div className="flex items-center h-full px-[35px] border-transparent hover: text-white border-b-2 hover:border-primary-yellow   hover:bg-textColor-secondary-darkGray hover:cursor-pointer">
            <Typography variant="p-small" className="text-textColor-secondary-lightGray">
              Naadam
            </Typography>
          </div>
        </div>

        <div id="icons" className="flex gap-[30px] ml-20 mr-20">
          {handleIcon({
            icon: 'facebook',
            size: 16,
            className: 'text-white',
          })}
          {handleIcon({
            icon: 'twitter',
            size: 16,
            className: 'text-white',
          })}
          {handleIcon({
            icon: 'mail',
            size: 16,
            className: 'text-white',
          })}
          {handleIcon({
            icon: 'instagram',
            size: 16,
            className: 'text-white',
          })}
=======

export const Header = () => {
  return (
    <div className=" header-wrapper">
      <div className="Logo"></div>
      <div> Who are we</div>
      <div> What are we doing</div>
      <div> Who we work with</div>
      <div>Naadam</div>

      <div className="Socials">
        <div>
          {' '}
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8.71538C0 13.0243 3.03645 16.6074 7.00773 17.334V11.0742H4.90541V8.66699H7.00773V6.74075C7.00773 4.574 8.36232 3.37074 10.2782 3.37074C10.8851 3.37074 11.5396 3.4668 12.1465 3.56285V5.77799H11.0722C10.0442 5.77799 9.81082 6.3074 9.81082 6.98198V8.66699H12.0533L11.6798 11.0742H9.81082V17.334C13.7821 16.6074 16.8185 13.025 16.8185 8.71538C16.8185 3.92181 13.0344 0 8.40927 0C3.78417 0 0 3.92181 0 8.71538Z"
              fill="#C5C6CD"
            />
          </svg>
        </div>
        <div>
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.2267 2.56526C15.6415 2.8325 15.013 3.01306 14.3521 3.09467C15.034 2.67417 15.5441 2.01236 15.7873 1.23271C15.1467 1.62489 14.4456 1.90094 13.7144 2.04886C13.2227 1.50779 12.5715 1.14917 11.8618 1.02866C11.1521 0.908152 10.4237 1.0325 9.78956 1.3824C9.15546 1.7323 8.65118 2.28818 8.35502 2.96373C8.05885 3.63928 7.98738 4.39671 8.15168 5.11841C6.85363 5.05124 5.58379 4.70352 4.42457 4.09781C3.26535 3.4921 2.24266 2.64194 1.42286 1.60251C1.14255 2.10086 0.981376 2.67866 0.981376 3.29401C0.981064 3.84798 1.11342 4.39345 1.36672 4.88205C1.62001 5.37064 1.9864 5.78724 2.43338 6.09489C1.915 6.0779 1.40806 5.93353 0.954747 5.67382V5.71716C0.954695 6.49411 1.21546 7.24716 1.69279 7.84851C2.17012 8.44987 2.83462 8.8625 3.57354 9.01639C3.09265 9.15053 2.58849 9.17028 2.09911 9.07417C2.30759 9.74269 2.71368 10.3273 3.26055 10.7461C3.80741 11.165 4.46766 11.3971 5.14887 11.4099C3.99248 12.3455 2.56434 12.853 1.0942 12.8508C0.83378 12.8509 0.57358 12.8352 0.314941 12.8039C1.80722 13.7928 3.54434 14.3176 5.31846 14.3155C11.3241 14.3155 14.6072 9.18901 14.6072 4.74284C14.6072 4.59839 14.6037 4.4525 14.5974 4.30805C15.236 3.83207 15.7872 3.24266 16.2253 2.56743L16.2267 2.56526Z"
              fill="#C5C6CD"
            />
          </svg>
        </div>
        <div>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.4395 0.90725L11.5425 1.6295L7.72327 4.55461L3.90406 1.60061L3.00707 0.87836C2.79576 0.698192 2.5378 0.585878 2.26516 0.555335C1.99251 0.524791 1.71717 0.577359 1.47323 0.706526C1.22929 0.835693 1.02748 1.03578 0.892799 1.28201C0.758121 1.52823 0.696491 1.80977 0.715546 2.09174V10.4626C0.715546 10.7231 0.815956 10.973 0.994688 11.1572C1.17342 11.3414 1.41583 11.4449 1.6686 11.4449H3.90406V5.8691L7.72327 8.8231L11.5425 5.8691V11.4449H13.7779C14.0307 11.4449 14.2731 11.3414 14.4519 11.1572C14.6306 10.973 14.731 10.7231 14.731 10.4626V2.09174C14.7442 1.8122 14.6782 1.53474 14.5413 1.29309C14.4043 1.05144 14.2021 0.856004 13.9594 0.730538C13.7167 0.605072 13.4438 0.55498 13.174 0.586351C12.9042 0.617723 12.649 0.729206 12.4395 0.90725Z"
              fill="#C5C6CD"
            />
          </svg>
        </div>
        <div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.65309 5.41093C6.40865 5.41093 5.3931 6.4249 5.3931 7.66739C5.3931 8.90988 6.40865 9.92385 7.65309 9.92385C8.89753 9.92385 9.91309 8.90988 9.91309 7.66739C9.91309 6.4249 8.89753 5.41093 7.65309 5.41093ZM14.4314 7.66739C14.4314 6.73298 14.4399 5.80703 14.3873 4.87432C14.3347 3.79094 14.0872 2.82945 13.2938 2.03723C12.4986 1.24332 11.5373 0.99787 10.4522 0.945394C9.51636 0.892919 8.58897 0.901382 7.65479 0.901382C6.71892 0.901382 5.79152 0.892919 4.85734 0.945394C3.77227 0.99787 2.80927 1.24501 2.01582 2.03723C1.22066 2.83114 0.974829 3.79094 0.922271 4.87432C0.869713 5.80873 0.87819 6.73467 0.87819 7.66739C0.87819 8.60011 0.869713 9.52775 0.922271 10.4605C0.974829 11.5438 1.22236 12.5053 2.01582 13.2975C2.81097 14.0915 3.77227 14.3369 4.85734 14.3894C5.79322 14.4419 6.72061 14.4334 7.65479 14.4334C8.59066 14.4334 9.51806 14.4419 10.4522 14.3894C11.5373 14.3369 12.5003 14.0898 13.2938 13.2975C14.0889 12.5036 14.3347 11.5438 14.3873 10.4605C14.4416 9.52775 14.4314 8.6018 14.4314 7.66739ZM7.65309 11.1393C5.72879 11.1393 4.17578 9.58869 4.17578 7.66739C4.17578 5.74609 5.72879 4.19552 7.65309 4.19552C9.5774 4.19552 11.1304 5.74609 11.1304 7.66739C11.1304 9.58869 9.5774 11.1393 7.65309 11.1393ZM11.2728 4.86416C10.8235 4.86416 10.4607 4.50191 10.4607 4.05332C10.4607 3.60474 10.8235 3.24249 11.2728 3.24249C11.7221 3.24249 12.0849 3.60474 12.0849 4.05332C12.0851 4.15984 12.0641 4.26534 12.0234 4.36378C11.9826 4.46221 11.9228 4.55165 11.8474 4.62697C11.7719 4.70229 11.6823 4.76201 11.5838 4.80271C11.4852 4.84341 11.3795 4.86429 11.2728 4.86416Z"
              fill="#C5C6CD"
            />
          </svg>
>>>>>>> this commit has the MainLayout file set up for the header and the footer. The header has also been made. Only thing left to compleat the header is the css.
        </div>
      </div>
    </div>
  )
}

export default Header
