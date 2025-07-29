import { Link } from 'react-router-dom'
import { useState } from 'react';
// import BookBtn from '../component/book_btn.jsx';
import PopupModel from './popup_model';
import logo from '../assets/MedcapLogo.png';
function Navlink(){
    const [open, setOpen] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const closePopupModal = () => {
        setIsPopupOpen(false);
    }

    return(
        <nav className="fixed top-0 left-0 w-full z-50 border-b-2 bg-[rgba(255,255,255,0.88)] border-gray-200 backdrop-blur-md shadow-lg mt-0">
            <div className="flex items-center justify-between p-4">
                <img
                    src={logo}
                    alt="MedCapSky Logo" 
                    className="max-w-[13rem] "
                />
                {/* Hamburger button */}
                <button
                    className="md:hidden text-3xl"
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >&#9776;</button>


                {/* Desktop menu */}
                <ul className="hidden md:flex justify-evenly items-center text-xl font-semibold flex-row space-x-4 px-5">
                <li className="px-1"><Link to="/">Home</Link></li>
                <li className="px-1"><Link to="/jobSearch">Job Search</Link></li>
                <li className="px-1"><Link to="/about">About</Link></li>
                <li>
                <button className="bg-[#0492fe] hover:bg-blue-600 px-4 py-2 rounded-4xl text-white font-bold transition-colors duration-300" onClick={() => setIsPopupOpen(true)}>
                Get Started
                </button>
                <PopupModel
                isOpen={isPopupOpen}
                onClose={closePopupModal}
                />
                </li>
                </ul>
            </div>



            {/* Mobile menu */}
                {open && (
                    <ul className="md:hidden flex flex-col items-center bg-white text-xl font-semibold space-y-2 py-2 shadow">
                    <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link to="/jobSearch" onClick={() => setOpen(false)}>Job Search</Link></li>
                    <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                    <li>
                        <button className="bg-[#0492fe] hover:bg-blue-600 px-4 py-2 rounded-4xl text-white font-bold transition-colors duration-300" onClick={() => setIsPopupOpen(true)}>
                Get Started
                </button>
                <PopupModel
                isOpen={isPopupOpen}
                onClose={closePopupModal}
                />
                    </li>
                    </ul>
                )}
        </nav>
    )
}

export default Navlink;