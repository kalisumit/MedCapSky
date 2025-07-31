import BookBtn from '../component/book_btn';
import Group_25 from '../assets/down_GoMed.png';
import Group_51 from "../assets/at_home.png";
import Group_50 from '../assets/schedule_up.png';
import Select from '../assets/select_plan_ud.png'

function PhoneBnUpdated(){
    return(
        <>
            
        <div className="md:bg-gray-50 flex flex-col gap-6 items-center justify-center min-h-screen md:p-4 font-[Inter]">

            
             {/* First banner */}  
            <div className="flex flex-col items-center w-full md:flex md:flex-row md:justify-around my-10  md:p-8">
                {/* Left side content */}
                <div className="
                md:flex md:flex-col md:max-w-[50%] md:mx-8 md:items-center md:justify-around md:gap-4">
                       
                        {/* heading */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-5xl  font-bold text-center my-5">1. Download and Open <span className="text-blue-500">GoMedGo </span>app</h1>
                        <img src = {Group_25} alt="Phone Banner" className="w-[50%] md:hidden my-5" />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className=" md:text-xl text-center mt-5">GoMedGo by MedCapSky revolutionizes at home healthcare service with seamless paramedical recruitment, upskilling, and digital solutions. Our app connects skilled professionals to hospitals and clinics as well homes, ensuring efficient workforce management and better patient care.</p>
                    </div>
                    <BookBtn name="Download Now"/>
                </div>
                
                {/* Right side content */}
                <div className="md:max-w-[30%] md:flex" >
                    {/* Phone banner */}
                    <img src={Group_25} alt="Phone Banner" className="hidden md:block md:w-full md:justify-center md:h-auto md:object-cover" />
                </div>
            </div>


            {/* Second banner */}  
            <div className="flex flex-col items-center w-full md:flex md:flex-row md:justify-around my-12  md:p-8">
                {/* Right side content */}
                <div className="md:max-w-[30%] md:flex" >
                    {/* Phone banner */}
                    <img src={Select} alt="Phone Banner" className="hidden md:block md:w-full md:justify-center md:h-auto md:object-cover my-5" />
                </div>
                {/* Left side content */}
                <div className="
                md:flex md:flex-col md:max-w-[50%] md:mx-8 md:items-center md:justify-around md:gap-4">
                       
                        {/* heading */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-center my-5">2. Select <span className="text-blue-500">a Plan</span></h1>
                        <img src={Select} alt="Phone Banner" className="w-[50%] md:hidden my-5" />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Choose the perfect care plan tailored to meet patient’s unique needs at every stage of growth. From newborn support to elderly assistance, our services ensure safety, comfort, and expert attention. We’re here to walk with you through every milestone of your recovery.</p>
                    </div>
                    <BookBtn name="Select Plan"/>
                       
                        {/* button  */}
                    {/* <div className="w-full items-center justify-center flex"> */}
                        {/* <button className="max-w-[45%] bg-blue-500 hover:bg-blue-600 px-25 py-8 text-4xl rounded-4xl text-white font-extrabold">Book Caretaker</button> */}
                    {/* </div> */}
                </div>
                
            </div>



            {/* Third banner */}  
            <div className="flex flex-col items-center w-full md:flex md:flex-row md:justify-around my-10 md:my-0  md:p-8">
                {/* Left side content */}
                <div className="
                md:flex md:flex-col md:max-w-[50%] md:mx-8 md:items-center md:justify-around md:gap-4">
                       
                        {/* heading */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl md:text-5xl font-bold text-center my-4"> 3. Personalised <span className="text-blue-500">Schedule an appointment</span> with your caretaker</h1>
                        <img src={Group_50} alt="Phone Banner" className="w-[50%] md:hidden my-8 " />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Get expert care for your infant or elderly at home with our trained and loving caregivers at preferred timings. From feeding and hygiene to play and comfort, we ensure gentle and reliable support tailored to patient’s needs. Flexible schedules, personalized plans, and regular updates—so you can focus on what matters the most.</p>
                    </div>
                    <BookBtn name="Schedule Caretaker"/>
                       
                        {/* button  */}
                    {/* <div className="w-full items-center justify-center flex"> */}
                        {/* <button className="max-w-[45%] bg-blue-500 hover:bg-blue-600 px-25 py-8 text-4xl rounded-4xl text-white font-extrabold">Book Caretaker</button> */}
                    {/* </div> */}
                </div>
                
                {/* Right side content */}
                <div className="md:max-w-[30%] md:flex" >
                    {/* Phone banner */}
                    <img src={Group_50} alt="Phone Banner" className="hidden md:block md:w-full md:justify-center md:h-auto md:object-cover" />
                </div>
            </div>

            {/* Fourth banner */}
            <div className="flex flex-col items-center w-full md:flex md:flex-row md:justify-around my-10  md:p-8">
                {/* Right side content */}
                <div className="md:max-w-[30%] md:flex" >
                    {/* Phone banner */}
                    <img src={Group_51} alt="Phone Banner" className="hidden md:block md:w-full md:justify-center md:h-auto md:object-cover" />
                </div>
                {/* Left side content */}
                <div className="
                md:flex md:flex-col md:max-w-[50%] md:mx-8 md:items-center md:justify-around md:gap-4">
                       
                        {/* heading */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl md:text-5xl font-bold text-center my-4">4. Select <span className="text-blue-500">At Home</span> Service</h1>
                        <img src={Group_51} alt="Phone Banner" className="w-[50%] md:hidden my-8 " />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Choose a dedicated caretaker to ensure the patient receives personalized, loving care at home. Our trained professionals support feeding, hygiene, sleep routines, and playtime with attention and compassion. Enjoy peace of mind knowing the patient is in safe hands, growing happily in a nurturing and familiar environment.</p>
                    </div>
                    <BookBtn name="Home Care"/>
                       
                        {/* button  */}
                    {/* <div className="w-full items-center justify-center flex"> */}
                        {/* <button className="max-w-[45%] bg-blue-500 hover:bg-blue-600 px-25 py-8 text-4xl rounded-4xl text-white font-extrabold">Book Caretaker</button> */}
                    {/* </div> */}
                </div>
                
            </div>
        </div>
        </>
    )
}

export default PhoneBnUpdated;