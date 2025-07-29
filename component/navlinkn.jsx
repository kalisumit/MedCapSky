function Navlinkn(){
    return(
        <>
            <nav className="flex justify-between px-8 items-center py-6" >
                <section className="flex items-center gap-4">{/* menu*/}
                    <a href="/"><img src="src\assets\logo-no-background 3.png"/></a>
                    {/* <button><img src="src\assets\menu_48dp_000000_FILL0_wght700_GRAD200_opsz48.png"></img> </button> */}
                </section>
                <section className="flex items-center gap-4">{/* menu*/}
                    {/* <a href="/"><img src="src\assets\logo-no-background 3.png"/></a> */}
                    <button><img src="src\assets\menu_48dp_000000_FILL0_wght700_GRAD200_opsz48.png"></img> </button>
                    <div className="align-center mb-2">
                    <ul className="flex justify-evenly text-3xl font-semibold flex-row space-x-4 px-5">
                        <li class="px-1"><a href="/">Home</a></li>
                        <li class="px-1"><a href="/contact">Job Search</a></li>    
                        <li class="px-1"><a href="/about">About</a></li>     
                        <li><button class="rounded-4xl bg-[#0492fe] px-2.5 py-1 font-bold justify-self-center">Get Started</button></li>
                    </ul>
                </div>
                </section>
            </nav><hr/>
        </>
    )
}

export default Navlinkn;