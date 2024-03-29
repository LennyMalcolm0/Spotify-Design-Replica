import { useEffect } from 'react';
import './Home.css';
import { designersProfile } from '../AppData/Data';

const Designers = () => {
    useEffect(() => {
        const carouselMouse = document.querySelector(".carousel-mouse") as HTMLElement;
        // const area = document.querySelector(".carousel") as HTMLElement;
        // area.addEventListener("mousemove", function(event) {
		// 	// Get the coordinates of the mouse pointer
		// 	let x = event.pageX;
		// 	let y = event.pageY;
        //     // console.log(x + "  " + y);

        //     carouselMouse.style.left = `${x}px`;
        //     carouselMouse.style.top = `${y}px`;
		// });

        const profiles = document.querySelectorAll(".profile");
        function imageClass() {
            for (let i = 0; i < profiles.length; i+=3) {
                const profile = profiles[i].firstElementChild as HTMLElement;
                profile.classList.add("position1-profile")
    
                const profileBio = profiles[i].firstElementChild?.children[1] as HTMLElement;
                profileBio.classList.add("position1-bio")
            }
            for (let i = 1; i < profiles.length; i+=3) {
                const profile = profiles[i].firstElementChild as HTMLElement;
                profile.classList.add("position2-profile")
    
                const profileBio = profiles[i].firstElementChild?.children[1] as HTMLElement;
                profileBio.classList.add("position2-bio")
            }
            for (let i = 2; i < profiles.length; i+=3) {
                const profile = profiles[i].firstElementChild as HTMLElement;
                profile.classList.add("position3-profile");
    
                const profileBio = profiles[i].firstElementChild?.children[1] as HTMLElement;
                profileBio.classList.add("position3-bio")
            }
        }
        imageClass();

        const carousel = document.querySelector(".carousel") as HTMLElement;
        let mouseDown = false, prevPageX: any, prevScrollLeft: any, positionDiff;
        
        function dragStart(e: any) { 
            mouseDown = true;
            prevPageX = e.pageX;
            prevScrollLeft = carousel.scrollLeft;
        }
        function dragStop() {
            mouseDown = false;
        }
        document.addEventListener("mousemove", (e: any) => {
            let outside = document.querySelector(".Designers");

            if (!outside?.contains(e.target)) {
                mouseDown = false;
            };
        })
        function dragging(e: any) {
            if (!mouseDown) return;
            e.preventDefault();
            positionDiff = e.pageX - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
        }
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mouseup", dragStop);
    }, [])

    return ( 
        <div className="Designers w-full group relative">
            <div className="carousel w-screen flex items-center cursor-grab select-none overflow-hidden overflow-x-scroll ">
                {designersProfile.map((detail, index) => (
                    <div className="profile text-black mr-[150px] md:mr-[100px] sm:mr-[50px] " key={index}>
                        <div className="relative cursor-pointer">
                            <img src={detail.imageSrc} alt="" className="w-full h-full object-cover peer" draggable="false" />

                            <div className="bio hidden peer-hover:flex hover:flex md:peer-hover:hidden md:hover:hidden absolute left-[15px] bottom-[15px] p-[25px] bg-black text-white font-normal flex-col justify-between ">
                                <div className="text-[24px] leading-[28px]">{`"${detail.bio}"`}</div>
                                <div className="text-[16px] underline opacity-0">READ MORE</div>
                            </div>

                            <div className="flex items-center rotate-[-90deg] absolute top-[37px] -right-[60px]">
                                <div className="bg-black h-2 w-2 rounded-full mr-1 "></div>
                                <div className="text-sm uppercase">{detail.city}</div>
                            </div>
                        </div>

                        <div className="text-[24px] leading-[28px] md:text-[20px] md:leading-[21px] sm:text-[18px] smm:leading-[19px] mt-[5px]">
                            <div className="sm:font-semibold">{detail.name}</div>
                            <div className="font-normal">{detail.role}</div>
                        </div>
                    </div>
                ))}
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