import Footer from '../component/footer';
import About_bn from '../assets/about_bn.png';
import Intro_abt from '../assets/intro_abt.png';
import Mission_abt from '../assets/mission_abt.png';
import Vision_abt from '../assets/vision_abt.png';
import work_abt from '../assets/work_abt.png';
function About() {
  return(
    <> 
      <div className="w-full  bg-center relative">
        <img src={About_bn} alt="About Us" className="mt-20 w-full h-auto max-w-full object-contain mb-8" />
      </div>

      <div className=" mx-auto px-4 py-8">
        

          {/* Introduction  */}
        <div className="mb-8 ">
          <h1 className="
          text-4xl font-bold text-center text-[#545454] 
          mb-4 md:mx-[50%] md:text-6xl">Introduction</h1>

          {/* image and content  */}
          <div className="
          flex flex-col items-center justify-center text-center
          md:flex-row md:justify-around md:items-start ">

            {/* image  */}
            <img src={Intro_abt} alt="About Logo" 
            className="
            h-[60vh] mx-auto my-4 mb-6 
            md:h-[80vh]  " />

            {/* content  */}
            <p className="
            text-xl text-[#7c7c7c] 
            md:w-[60%] md: not-open:mx-auto  md:mt-10 md:text-3xl md:px-8 ">

            At (GoMedGo), MedCapSky Private Limited, we are dedicated to transforming the healthcare industry by providing high-quality paramedical staffing solutions, professional education, and innovative technology-driven services. With a deep understanding of the healthcare sector’s challenges, we connect skilled paramedics with hospitals, clinics, and healthcare institutions, ensuring efficient workforce management and improved patient care. Our approach combines recruitment expertise, upskilling programs, and advanced digital solutions to bridge the gap between talent and opportunity in the healthcare ecosystem. With a mission to empower healthcare professionals and a vision to revolutionize paramedical workforce solutions, we are committed to delivering excellence, trust, and innovation in every aspect of our services.</p>
          
          </div>
        </div> 
          {/* Our Mission  */}
        <div className="mb-8">
          <h1 className="
          text-4xl font-bold text-center text-[#545454] 
          mb-4 md:ml-[40%] md:text-5xl">Our Mission</h1>

          {/* image and content  */}
          <div className="
          flex flex-col items-center justify-center text-center
          md:flex-row md:justify-around md:items-start ">

            {/* image  */}
            <img src={Mission_abt} alt="About Logo" 
            className="
            h-[60vh] mx-auto pr-10 
            md:h-[80vh] pl-10 " />

            {/* content  */}
            <p className="
            text-xl text-[#7c7c7c] 
            md:w-[60%] md:mx-auto md:mt-[5%] md:text-3xl mb-6 pl-5">

            Our mission is to provide equitable, compassionate, and high-quality healthcare services directly to patients’ homes, ensuring that every individual receives the care they deserve, regardless of their background or circumstances. Simultaneously, we are dedicated to empowering underpaid nursing professionals by offering fair employment opportunities, recognizing their invaluable contributions, and ensuring they receive the respect and compensation they rightfully earn.</p>
          
          </div>
        </div> 
          {/* Our Vision */}
        <div className="py-2 mb-14">
          <h1 className="
          text-4xl font-bold text-center text-[#545454] 
          mb-4 md:ml-[40%] md:text-5xl">Vision</h1>

          {/* image and content  */}
          <div className="
          flex flex-col items-center justify-center text-center
          md:flex-row md:justify-around md:items-start ">

            {/* image  */}
            <img src={Vision_abt} alt="About Logo" 
            className="
            h-[60vh] mx-auto my-4 mb-6 
            md:h-[80vh]  " />

            {/* content  */}
            <p className="
            text-xl text-[#7c7c7c] 
            md:w-[60%] md:mx-auto md:mt-[5%] md:text-3xl">

            To transform healthcare delivery by bridging gaps in access, quality, and equity—bringing compassionate, patient-centered care directly to homes while strengthening healthcare systems worldwide. In India and beyond, we envision:<br/>For Patients: A future where no one is denied medical attention due to location, mobility, or socioeconomic status—where hospital-level care seamlessly extends into homes.<br/>For Healthcare Institutions: Reliable, skilled staffing solutions that elevate patient outcomes, reduce burnout, and optimize workforce efficiency in hospitals, clinics, and remote settings.<br/>For Nursing Professionals: A global movement that recognizes, fairly compensates, and empowers caregivers—ensuring their expertise fuels sustainable healthcare ecosystems everywhere.</p>
          
          </div>
        </div> 
        

          {/*Work Activity  */}
        <div className="py-2">
          <h1 className="text-5xl font-bold text-center text-[#545454] mb-4">Work Activity (2019-2025 & Ongoing )</h1>
          {/* image and content  */}
          <div className="flex flex-col items-center justify-center text-center">
            <img src={work_abt} alt="About Logo" className=" mx-auto my-4 mb-6 md:my-15" />
            <p className="text-xl md:text-3xl text-[#7c7c7c]">Over the past 6+ years, we have successfully deployed highly trained medical professionals to various home care and hospitals, fulfilling critical, Emergency, ACLS & BCLS staffing gaps in the healthcare sector. Our services have directly contributed to improving hospital operations, patient care standards, and overall healthcare efficiency.<br/>By building strong relationships with leading hospitals and healthcare facilities, we have established ourselves as a trusted staffing provider capable of delivering qualified professionals on time and as per demand.

</p>
          </div>
        </div> 
      </div>
      <Footer/>
    </>
  )
}   
export default About;