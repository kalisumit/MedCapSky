import close from '../assets/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';

function PopupModel({isOpen, onClose}) 
{
    if(!isOpen) return null;
  return (
    <>
        <div className="fixed h-screen inset-0 bg-black/30   flex justify-center items-center">
            <div className="w-lg bg-white  rounded-lg drop-shadow-xl-2xl text-center flex flex-col justify-center items-center gap-8 py-8">
                <div className="flex justify-between items-center w-[80%] px-4">
                <h2 className="text-lg font-bold ">LOGIN</h2>
                <button onClick={onClose} ><img src={close} className="bg-black rounded-full font-extrabold text-2xl"/></button>
                </div>
                <form className="w-4/5 flex flex-col  items-center h-[50%] gap-3">
                    <input type="email" placeholder="Enter Email" className="w-full rounded-2xl border-1 my-2 py-2 px-3"/>
                    <input type="password" placeholder="Password" className="w-full rounded-2xl border-1 my-2 py-2 px-3"/>
                    <button type="submit" className="my-3">SUBMIT</button>
                </form>

            </div>

        </div>
    </>

  )
}
export default PopupModel;

