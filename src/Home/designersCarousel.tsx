import { useEffect } from 'react';
import './Home.css';

const Designers = () => {
    useEffect(() => {
        const carouselMouse = document.querySelector(".carousel-mouse") as HTMLElement;
        document.addEventListener("mousemove", function(event) {
			// Get the coordinates of the mouse pointer
			let x = event.clientX;
			let y = event.clientY;
            // console.log(x + "  " + y);

            carouselMouse.style.left = `${x}px`;
            carouselMouse.style.top = `${y}px`;
		});
    }, [])

    return ( 
        <div className="Designers w-full group relative">
            <div className="w-fit flex cursor-grab select-none">
                <div className="text-black">
                    <div className="profile group/profile relative w-[500px] cursor-pointer">
                        <img src="Images\Designers\Tobi.svg" alt="" className="w-fit" draggable="false" />

                        <div className="bio hidden group-hover/profile:flex h-[500px] w-[300px] absolute left-[15px] bottom-[15px] p-[25px] bg-black text-white font-normal flex-col justify-between ">
                            <div className="text-[24px] leading-[28px]">If you'd asked the kid version of me what I wanted to be when I grew up,
                                I would've definitely told you “teddy bear surgeon”. If you'd asked me to be serious, I'd tell you “someone who designs things”.</div>
                            <div className="text-[16px] underline opacity-0">READ MORE</div>
                        </div>

                        <div className="flex items-center rotate-[-90deg] absolute top-[37px] -right-[60px]">
                            <div className="bg-black h-2 w-2 rounded-full mr-1 "></div>
                            <div className="text-sm uppercase">Stockholm</div>
                        </div>
                    </div>

                    <div className="text-[24px] leading-[28px] mt-[5px]">
                        <div>Tobi Oyadiran</div>
                        <div className="font-normal">Product Designer II</div>
                    </div>
                </div>
            </div>
                
            {/* <div className="carousel-mouse hidden group-hover:block absolute">
                <div className="h-[100px] w-[100px] border-2 border-black border-opacity-10 rounded-full flex items-center justify-between px-[20px] ">
                    <i className="fa-solid fa-play rotate-[180deg]"></i>
                    <i className="fa-solid fa-play"></i>
                </div>
            </div> */}
        </div>
     );
}
 
export default Designers;