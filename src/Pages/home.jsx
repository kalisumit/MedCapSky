
import Card from '../component/card.jsx'

import PhoneBn from '../component/phone_bn.jsx' 
import CareSol from '../component/care_sol';
import Sliders from '../component/slider';
import HomeSlider from '../component/home_slider.jsx';
import Footer from '../component/footer';

function Home(){
    return (
        <>
        <div className="pt-20">
        <h1 className="text-center py-3 text-3xl md:text-4xl font-bold">Trusted by Families in India</h1>
        <HomeSlider/>
        {/* <img src="src/assets/Desktop - 19.png" className="mx-auto my-1 w-full" alt="MedGapSky Logo" /> */}
        <Card/>
        <h1 className="text-center text-4xl md:text-5xl py-8 font-semibold">What Our Patients Say</h1>
       
        <Sliders/>
        {/* <Banner/> */}
        <PhoneBn/>
        <CareSol
           
        />
        <Footer/>
        

        </div>
        </>
    )
}
export default Home;    