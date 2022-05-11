import { Goals } from "components/goals";
import { } from 'react';

export default function Home() {
	return (
		<div className='bg-black h-[1000px]'>
			<Goals title={'Company goals'}
				desc={'NОНГОЛ УПСЫН ГАЗАР НУТГИЙН 76.8% НЬ Х6РСНV1Й ДОРОЙТОЛД ОРСОН БАV1НА. БV1Д Ц6ЛХV1Х БУЙ ГАЗАР ХУТАГТ НеХеН СЭРГЭЭПТ ХИ Й Н vОД ТАРЬХ Х6РСНИV1 ДОРОЙТОПТОV1 ТЭИЦДЭГ. VАНАЙ ХАХ/Т ОЛОН УРТ ХУГАЦААНЫ ТУРШ БV1ДЭНТЭV1 ХАУТРАН АХИЛЛАН, БАЙ ГАП Ь ОРЧ И НДОО ХУВЬ НЭМ РЭЭ ОРУУПАХ ХУВЬ ХУН, АЛ БАН БАЙ ГУУЛЛАГА ТА БУХНИЙГУРЬХ БАV1НА.' }>
				
			{/* <Typography variant='h1' className='text-primary-white align-middle' >Company goals</Typography> */}
			</Goals>
		</div>
	)
}