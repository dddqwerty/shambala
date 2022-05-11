import { Card, Button, Typography } from 'components'
// import { } from 'components'

export default function Gurvaljinurd() {
    return (
        <div className="bg-textColor-secondary-darkGray h-screen flex justify-around items-center ">
                <div className="bg-textColor-secondary-darkGray h-[70vh] flex justify-around items-center ">
                <Card
                headerEl={`our new project`}
                title={`Art Tech Empire`}
                desc={`Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.`}
                buttonEl={
                    <Button variant="primary">
                        <Typography variant="p-big">See more</Typography>
                    </Button>
                }
                className="self-start"

            />
            <Card
                headerEl={`our new project`}
                title={`Why Gobi ?`}
                desc={`Монгол орны нийт нутаг дэвсгэрийн 77% нь цөлжилтөд нэрвэгдсэн тул, цаг тухайд нь зохих арга хэмжээ авахгүй бол 2080 он гэхэд нийт газар нутгийн 92 хувь нь цөлжих төлөвтэй байна. `}
                buttonEl={
                    <Button variant="primary">
                        <Typography variant="p-big">See more</Typography>
                    </Button>
                }
                className="self-end mr-[60px]"
            />
                </div>
        

       
        </div>
    )
}
