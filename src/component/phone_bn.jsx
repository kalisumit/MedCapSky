import BookBtn from '../component/book_btn';
import Group_25 from '../assets/Group_25.png';
import Group_49 from '../assets/Group_49.png';
import Group_51 from "../assets/Group_51.png";
import Group_50 from '../assets/Group_50.png';

function PhoneBn(){
    return(
        <>
            
            <div>
            {/* First banner */}  
            <div className="flex flex-col items-center w-full md:flex md:flex-row md:justify-around my-10  md:p-8">
                {/* Left side content */}
                <div className="
                md:flex md:flex-col md:max-w-[50%] md:mx-8 md:items-center md:justify-around md:gap-4">
                       
                        {/* heading */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl md:text-5xl font-bold text-center my-4"> Personalised <span className="text-blue-500">Baby Care</span> at Home</h1>
                        <img src = {Group_25} alt="Phone Banner" className="w-[50%] md:hidden " />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Get expert care for your infant or toddler at home with our trained and loving caregivers. From feeding and hygiene to play and comfort, we ensure gentle, reliable support tailored to your child’s needs. Flexible schedules, personalized plans, and regular updates—so you can focus on what matters most.</p>
                    </div>
                    <BookBtn name="Book Caretaker"/>
                </div>
                
                {/* Right side content */}
                <div className="md:max-w-[30%] md:flex" >
                    {/* Phone banner */}
                    <img src={Group_25} alt="Phone Banner" className="hidden md:block md:w-full md:justify-center md:h-auto md:object-cover" />
                </div>
            </div>




            {/* Second banner */}  
            <div className="flex flex-col items-center w-full md:flex md:flex-row md:justify-around my-10  md:p-8">
                {/* Right side content */}
                <div className="md:max-w-[30%] md:flex" >
                    {/* Phone banner */}
                    <img src={Group_49} alt="Phone Banner" className="hidden md:block md:w-full md:justify-center md:h-auto md:object-cover" />
                </div>
                {/* Left side content */}
                <div className="
                md:flex md:flex-col md:max-w-[50%] md:mx-8 md:items-center md:justify-around md:gap-4">
                       
                        {/* heading */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl md:text-5xl font-bold text-center my-4"> Select <span className="text-blue-500">Baby Care</span> at Home</h1>
                        <img src={Group_49} alt="Phone Banner" className="w-[50%] md:hidden " />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Choose the perfect care plan tailored to meet your baby’s unique needs at every stage of growth. From newborn support to toddler assistance, our services ensure safety, comfort, and expert attention. We’re here to walk with you through every milestone of your child’s early journey with care you can trust.</p>
                    </div>
                    <BookBtn name="Book Baby Care"/>
                       
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
                        <h1 className="text-2xl md:text-5xl font-bold text-center my-4"> Personalised <span className="text-blue-500">Schedule an appointment</span> with your caretaker</h1>
                        <img src={Group_50} alt="Phone Banner" className="w-[50%] md:hidden " />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Get expert care for your infant or toddler at home with our trained and loving caregivers. From feeding and hygiene to play and comfort, we ensure gentle, reliable support tailored to your child’s needs. Flexible schedules, personalized plans, and regular updates—so you can focus on what matters most.</p>
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
                        <h1 className="text-2xl md:text-5xl font-bold text-center my-4"> Select <span className="text-blue-500">Baby Care</span> at Home</h1>
                        <img src={Group_51} alt="Phone Banner" className="w-[50%] md:hidden " />
                    </div>
                       
                        {/* written content */}
                    <div className=" p-4">
                        <p className="md:text-xl text-center">Choose a dedicated baby caretaker to ensure your little one receives personalized, loving care at home. Our trained professionals support feeding, hygiene, sleep routines, and playtime with attention and compassion. Enjoy peace of mind knowing your child is in safe hands, growing happily in a nurturing and familiar environment.</p>
                    </div>
                    <BookBtn name="Select Caretaker"/>
                       
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

export default PhoneBn;