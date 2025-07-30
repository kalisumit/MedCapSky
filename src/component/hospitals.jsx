import apollo from '../assets/apollo-logo.svg'
import Care from '../assets/CareYouDeserve.png'
import Kailash from '../assets/logo.png'
import Felix from '../assets/felix.png'
import Fortis from '../assets/fortis.png'
import MediMax from '../assets/mediMax.png'
import Neo from '../assets/neo.jpeg'
import Yashoda from '../assets/yashodha.png'
import Yatharth from '../assets/yatharth.png'

function Hospitals(){
    return(
        <>
        <h1 className="text-center py-10 text-3xl md:text-4xl font-bold">Trusted by hospitals &amp; clinics</h1>
        <div className='hidden md:block'>
        <div className="grid grid-cols-5 items-center justify-center">
            <img src={apollo} alt="Apollo Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Care} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Kailash} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Felix} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Fortis} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
        </div>
        <div className="grid grid-cols-4 items-center justify-center">
            <img src={MediMax} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Neo} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Yashoda} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Yatharth} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
        </div>
        </div>


        <div className="md:hidden grid grid-cols-3 items-center justify-center">
            <img src={apollo} alt="Apollo Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Care} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Kailash} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Felix} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Fortis} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={MediMax} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Neo} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Yashoda} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
            <img src={Yatharth} alt="CareYouDeserve Logo" className="w-[50%]  mx-auto my-5" />
        </div>
        </>
    )
}

export default Hospitals;