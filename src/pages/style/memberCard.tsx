import { MemberCard } from 'components'

export default function Home() {
    return (
        <div className="bg-backgroundColor-darkGray h-screen flex items-center justify-center">
            <MemberCard picture={`https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=`} name={`Шижирбат Бямбасүрэн`} job={`CEO`}></MemberCard>
            <MemberCard picture={`https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=`} name={`бадамсэрээжид Энхтүвшин`} job={`Архитетурын менежер`}></MemberCard>
            <MemberCard picture={`https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=`} name={`Хулан гансүх`} job={`Үйл ажиллагаа хариуцсан менежер`}></MemberCard>
            <MemberCard picture={`https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=`} name={`Ганчимэг Ганзориг`} job={`Үйл ажиллагааны ажилтан`}></MemberCard>
        </div>
    )
}
