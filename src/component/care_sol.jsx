import Nursing from '../assets/nursing_logo.png';
import MedicalStaf from '../assets/medical_staf_logo.png';
import Elderly_logo from '../assets/Elderly_logo.png';
import physio_logo from '../assets/physio_logo.png';
import post_surgery_logo from '../assets/post_surgery_logo.png';
import logo_mobile from '../assets/logo_mobile.png';

function CareSol() {
    return(
        <>
                <h1 className="text-center text-3xl md:text-5xl pt-5 font-semibold">Complete Medical Care Solutions</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 py-5">
            
            {/* first Card */}
            <div className="flex justify-center items-end pt-5 ">
                <div className=" flex justify-around items-start">
                    <div className="max-w-[30%] flex items-start justify-center ">
                        {/* image */}
                        {/* <img src={src} className="w-full" /> */}
                        <img src={Nursing}/>

                    </div>
                    <div className="w-[70%]">
                        {/* Written content */}
                        <div>
                            {/* Heading */}
                            <h1 className="text-2xl md:text-4xl font-semibold text-left my-4 ">Nursing Care at Home</h1>
                            {/* <h1>{heading}</h1> */}
                        </div>
                        <div className="">
                            {/* Content */}
                            <p className="md:text-xl text-left text-gray-500 ">Providing compassionate, professional nursing support directly to your doorstep. Whether it's post-hospital care, elderly support, or chronic illness management.</p>
                            {/* <p>{content}</p> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* second Card */}
            <div className="flex justify-center items-center pt-5 ">
                <div className=" flex justify-around items-start">
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src={MedicalStaf}/>

                </div>
                <div className="w-[70%]">
                    {/* Written content */}
                    <div>
                        {/* Heading */}
                        <h1 className="text-2xl md:text-4xl font-semibold text-left my-4 ">Medical Staffing Solutions</h1>
                        {/* <h1>{heading}</h1> */}
                    </div>
                    <div className=" ">
                        {/* Content */}
                        <p className="md:text-xl text-left text-gray-500 ">Empowering hospitals, clinics, and care centers with verified, on-demand healthcare professionals — including nurses, caretakers, and paramedics.</p>
                        {/* <p>{content}</p> */}
                    </div>
                </div>
                </div>
            </div>

            {/* third Card */}
            <div className="flex justify-center items-center pt-5 ">
                <div className=" flex justify-around items-start">
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src={Elderly_logo}/>

                </div>
                <div className="w-[70%]">
                    {/* Written content */}
                    <div>
                        {/* Heading */}
                        <h1 className="text-2xl md:text-4xl font-semibold text-left my-4 ">Elderly & Long-Term Care</h1>
                        {/* <h1>{heading}</h1> */}
                    </div>
                    <div className=" ">
                        {/* Content */}
                        <p className="md:text-xl text-left text-gray-500 ">Dedicated caregivers trained to provide daily support, emotional companionship, and medical supervision for seniors in the comfort of their homes.</p>
                        {/* <p>{content}</p> */}
                    </div>
                </div>
                </div>
            </div>

             {/* Fourth Card */}
            <div className="flex justify-center items-center pt-5 ">
                <div className=" flex justify-around items-start">
                <div className="max-w-[25%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src={physio_logo}/>

                </div>
                <div className="w-[70%]">
                    {/* Written content */}
                    <div>
                        {/* Heading */}
                        <h1 className="text-2xl md:text-4xl font-semibold text-left my-4 ">Physiotherapy Services</h1>
                        {/* <h1>{heading}</h1> */}
                    </div>
                    <div className="">
                        {/* Content */}
                        <p className="md:text-xl text-left text-gray-500 ">Our licensed physiotherapists help you recover faster with personalized therapy sessions delivered at home for maximum comfort and convenience.</p>
                        {/* <p>{content}</p> */}
                    </div>
                </div>
                </div>
            </div>

             {/* fifth Card */}
            <div className="flex justify-center items-start pt-12 ">
                
                <div className="max-w-[25%] flex items-start justify-center mr-5 ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src={post_surgery_logo}/>

                </div>
                <div className="w-[70%]">
                    {/* Written content */}
                    <div>
                        {/* Heading */}
                        <h1 className="text-2xl md:text-4xl font-semibold text-left my-4 ">Post-Surgery Care at Home</h1>
                        {/* <h1>{heading}</h1> */}
                    </div>
                    <div className="">
                        {/* Content */}
                        <p className="md:text-xl text-left text-gray-500 ">Complete after-surgery support services including wound dressing, medication management, mobility assistance, and more — with expert supervision.</p>
                        {/* <p>{content}</p> */}
                    </div>
                </div>
                
            </div>


            {/* Sixth Card */}
            <div className="flex justify-center items-start pt-10 ">
                
                <div className="max-w-[25%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src={logo_mobile}/>

                </div>
                <div className="w-[70%]">
                    {/* Written content */}
                    <div>
                        {/* Heading */}
                        <h1 className="text-2xl md:text-4xl font-semibold text-left my-4 ">GoMedGo Mobile App</h1>
                        {/* <h1>{heading}</h1> */}
                    </div>
                    <div className="">
                        {/* Content */}
                        <p className="md:text-xl text-left text-gray-500 ">Our health, now in your hands. One app — multiple services:  Book nurses  Schedule physiotherapy  Request medical staff  Get real-time support  Secure & convenient</p>
                        {/* <p>{content}</p> */}
                    </div>
                </div>
            
        </div>
        </div>
        </>
    )
}
export default CareSol;

