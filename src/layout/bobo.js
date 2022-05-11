// import Gurvaljinurd from "pages/style/card"
import { Card, Button, Typography } from 'components'

const Titi = () => {
  return (
    <div className="max-w-shambWidth relative h-screen mx-auto flex flex-col">
      <div className="absolute w-[90%] top-4 left-1/2 transform -translate-x-1/2">
        <img src="assets/trangle.svg" />
      </div>
      <div className="mt-[140px] flex flex-col gap-52">
        <div className="grid grid-cols-1">
          <Card
            headerEl={`our new project`}
            title={`Art Tech Empire`}
            desc={`Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.`}
            buttonEl={
              <Button variant="primary">
                <Typography variant="p-big">See more</Typography>
              </Button>
            }
          />
        </div>
        <div className="grid grid-cols-2">
          <div />
          <Card
            headerEl={`our new project`}
            title={`Why Gobi ?`}
            desc={`Монгол орны нийт нутаг дэвсгэрийн 77% нь цөлжилтөд нэрвэгдсэн тул, цаг тухайд нь зохих арга хэмжээ авахгүй бол 2080 он гэхэд нийт газар нутгийн 92 хувь нь цөлжих төлөвтэй байна. `}
            buttonEl={
              <Button variant="primary">
                <Typography variant="p-big">See more</Typography>
              </Button>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Titi
