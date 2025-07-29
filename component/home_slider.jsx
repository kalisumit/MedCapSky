import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function HomeSlider() {
    var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // fade: true,  
    // cssEase: "linear"

    };
    return (
        <div className="home-slider">
            {/* Slider content goes here */}
            
            <Slider {...settings}>
            {data.map((d) => (
            <div className="flex justify-evenly  items-center  ">
                <img src={d.img} className="mx-auto my-1 w-full" alt="MedGapSky Logo" />
                   
            </div>
            )
            )}
            </Slider> 
        </div>
    );
}

const data = [
    {
        
        img: "src/assets/Desktop - 21.png",
        
    },
    {
    img: "src/assets/Desktop - 16.png",
    }]

export default HomeSlider;