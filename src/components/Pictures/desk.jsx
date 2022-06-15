import { Cells } from './cells'

const data = [
  {
    pic: 'assets/trashCans.png',
    text: 'There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live.',
  },
  {
    pic: 'assets/pond4.png',
    text: 'There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live.',
  },
  {
    pic: 'assets/taiz2.png',
    text: 'There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live.',
  },
  {
    pic: 'assets/PondHoloos4.png',
    text: 'There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live.',
  },
  {
    pic: 'assets/OdHarahHesegShono4.png',
    text: 'There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live.',
  },
  {
    pic: 'assets/zadgaiKino1.png',
    text: 'There are also three types of competitions and technologies from traditional festivals Exhibitions, comedies and podcasts will be broadcast live.',
  },
]

export const Desk = () => {
  return (
    <div className="max-w-shambWidth w-screen invisible md:visible -z-50 md:z-0 absolute md:relative flex justify-center items-center top-0 ">
      <div className="w-[90%] flex flex-wrap">
        {data.map((el) => {
          return <Cells pic={el.pic} text={el.text} className="m-[30px]" />
        })}
      </div>
    </div>
  )
}
