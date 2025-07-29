function CareSol(src, heading, content) {
    return(
        <>
                <h1 className="text-center text-3xl md:text-5xl pt-5 font-semibold">Complete Medical Care Solutions</h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 py-5">
            
            {/* first Card */}
            <div className="flex justify-center items-end ">
                <div className=" flex justify-around items-center ">
                    <div className="max-w-[30%] flex items-center justify-center ">
                        {/* image */}
                        {/* <img src={src} className="w-full" /> */}
                        <img src="src\assets\nursing logo.png"/>

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
            <div className="flex justify-center items-center ">
                <div className=" flex justify-around items-center">
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src="src\assets\medical_staf logo.png"/>

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
                        <p className="md:text-xl text-left text-gray-500 ">Empowering hospitals, clinics, and care centers with verified, on-demand healthcare professional — including nurses, caretakers, and paramedics.</p>
                        {/* <p>{content}</p> */}
                    </div>
                </div>
                </div>
            </div>

            {/* third Card */}
            <div className="flex justify-center items-center ">
                <div className=" flex justify-around items-center">
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src="src\assets\Elderly logo.png"/>

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
            <div className="flex justify-center items-center ">
                <div className=" flex justify-around items-center">
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src="src\assets\physio logo.png"/>

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
            <div className="flex justify-center items-center ">
                
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src="src\assets\post_surgery logo.png"/>

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
            <div className="flex justify-center items-center ">
                
                <div className="max-w-[30%] flex items-center justify-center ">
                    {/* image */}
                    {/* <img src={src} className="w-full" /> */}
                    <img src="src\assets\logo_mobile.png"/>

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

