import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Female from '../assets/female_user_image-removebg-previewf.png';
import Male from "../assets/male_user_image-remove-1.png";

function Sliders(){

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
    };
    return(
        <div className="  md:w-[80%] mx-5 md:mx-auto bg-gray-100 md:p-8 rounded-lg shadow-lg">
        <Slider {...settings}>
            {data.map((d) => (
            <div className=" flex  justify-center  items-center ">
                <div className=" flex flex-col items-center justify-center
                    md:flex-row  md:justify-around md:items-center">
                    <div className="flex flex-col justify-center text-[0.8rem] items-center md:text-xl w-[50%] md:w-[50%] overflow-x-auto">
                        <img src={d.img} className="w-[50%] mb-1.5"/>
                        <div className="hidden md:block">{d.name}</div>
                    </div>
                    <div className="font-medium w-[90%] text-[0.8rem] md:text-[1rem]  text-gray-700 overflow-y-auto">
                        {d.review}  <br/>
                        <div className="md:hidden">{d.name}</div>
                    </div>
                </div>
                    
            </div>
            )
            )}
            </Slider> 
        </div>
    )
}

const data = [
    {
        name: `— Ujjawal Gupta, Patient, Noida`,
        img: Male,
        review: `After my surgery, I needed regular nursing and physiotherapy support at home. I found Medcapsky (GoMedGo) online and decided to try it. The platform was easy to use, and within hours, I was connected with a qualified nurse and physiotherapist. Their care helped me recover much faster than expected. The nurse was punctual, kind, and professional, and the physiotherapist tailored every session to my specific condition. I felt cared for, respected, and safe in my own home. Medcapsky (GoMedGo) is a game-changer for people like me who want quality medical attention without visiting a hospital every day.`,
    },
    {
        name: `— Bhanu, Son of Patient, Noida`,
        img: Male,
        review: `We booked a nurse and physiotherapist from Medcapsky (GoMedGo) for my father after he was discharged from the ICU (Discharge Against Medical Advice). The service was booked from 9th June 2025 to 15th June 2025, and overall, the care quality was excellent. While one or two staff members were average, most were well-trained, compassionate, and respectful. Some even went the extra mile for my father's comfort and recovery. Medcapsky's (GoMedGo) team was responsive and professional throughout. They made us feel heard and supported, which matters a lot in stressful medical situations. I will definitely recommend Medcapsky (GoMedGo) to anyone looking for reliable home healthcare.`,
    },
    {
        name: `— Sweta Yadav, Critical Care Nurse, Gr. Noida`,
        img: Female,
        review: `Working with Medcapsky (GoMedGo) has been a turning point in my career. As a registered nurse, I wanted more flexibility and control over my schedule. Medcapsky (GoMedGo) allows me to choose shifts, locations, and patients according to my availability. The platform ensures timely payments and provides direct access to patients in need of at-home care. I’ve been able to build meaningful relationships and offer support where it’s truly needed — right in the comfort of patients' homes. If you’re a nurse looking to earn extra income or take your skills into the community, Medcapsky (GoMedGo) is the right platform for you.`,
    },
    {
        name: `— Dr. Rohit (MPT), Physiotherapist, Delhi NCR`,
        img: Male,
        review: `I joined Medcapsky (GoMedGo) to expand my physiotherapy practice, and it’s been a great experience so far. The platform connects me directly with patients who need therapy at home, including post-operative care, neurological rehab, and elderly mobility issues. Medcapsky (GoMedGo)handles all the backend work like appointment management, payments, and support, so I can focus on giving the best possible care. I’ve received great feedback from patients, and it's fulfilling to know I'm helping people recover faster in their home environment. For physiotherapists who want to reach more patients and grow their income, I highly recommend Medcapsky (GoMedGo).`,
    },
   
]

export default Sliders;