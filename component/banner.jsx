function Banner() {
  return (
    <>
        <div className="bg-gradient-to-r from-[#2331F3] to-[#009FE8] w-full" >
            <div className="banner-content flex justify-around items-center text-white py-10">
                <div className>
                    <img src="src\assets\Screenshot 2025-07-04 124303 1.png" alt="MedGapSky Logo" className="mx-auto my-1 w-[90%]" />
                </div>
                <div>
                    <img src="src\assets\Group 19.png" alt="MedGapSky Logo" className="mx-auto my-1 w-[90%]" />

                </div>
                <div>
                    <img src="src\assets\Screenshot 2025-07-04 130045 1.png" alt="MedGapSky Logo" className="mx-auto my-1 w-[90%]" />
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
    // <div className="bg-gradient-to-r from-blue-700 to-cyan-500 w-full py-10 text-white text-center">
    //   <h2 className="text-3xl font-bold">Welcome to Medcapsky!</h2>
    // </div>
  );
}

export default Banner;