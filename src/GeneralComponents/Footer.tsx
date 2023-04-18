import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

interface Props {
    logoSrc: string;
    textColor: string;
    arrowHoverColor: string;
    bgImageSrc?: string;
}
const Footer = ({logoSrc, textColor, arrowHoverColor, bgImageSrc}: Props) => {
    // useEffect(() => {
    //   const BackToTop = document.querySelector(".scroll-up"),
    //   appBody = document.querySelector("body") as HTMLElement;
    //   const pageTop = document.querySelector(".Nav-bar") as HTMLElement;
    //   BackToTop?.addEventListener("click", () => {
    //     pageTop.scrollIntoView();
    //   })
    // }, [])

    return ( 
        <div className={`Footer text-${textColor}`}>
            <div className=" w-full max-w-[2000px] h-[650px] md:h-[500px] sm:h-[550px] mx-auto py-[40px] 
            px-[60px] md:px-[30px] sm:px-[15px] flex flex-col justify-between ">
                <div className="z-[9999] flex justify-between mt-[20px] md:block text-[24px] md:text-[20px] sm:text-[18px] font-normal sm:font-semibold">
                    <img src={logoSrc} alt="" className="h-[45px] md:h-[38px] sm:h-[32px] cursor-pointer" />

                    <div className="w-[65%] md:w-full flex justify-between whitespace-nowrap md:mt-[30px] ">
                        <div className="">
                            <div className="hover:underline cursor-pointer">Newsroom</div>
                            <div className="hover:underline cursor-pointer">Spotify Jobs</div>
                            <div className="hover:underline cursor-pointer">Spotify.com</div>
                            <div className="hover:underline cursor-pointer">Spotify R&D Engineering</div>
                            <div className="hover:underline cursor-pointer">Spotify R&D Research</div>
                            <div className="hover:underline cursor-pointer">Spotify R&D Insights</div>
                            <div className="hover:underline cursor-pointer hidden sm:block">Instagram</div>
                            <div className="hover:underline cursor-pointer hidden sm:block">Twitter</div>
                        </div>

                        <div className="flex justify-between w-[60%] ">
                            <div className="">
                                <div className="hover:underline cursor-pointer sm:hidden">Instagram</div>
                                <div className="hover:underline cursor-pointer sm:hidden">Twitter</div>
                            </div>
                            <div className="flex">
                                <div className="font-semibold mr-[25px]">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
                                        <div>SE</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
                                        <div>UK</div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
                                        <div>US</div>
                                    </div>
                                </div>
                                <div className="font-normal">
                                    <div>06:09:28</div>
                                    <div>05:09:28</div>
                                    <div>12:09:28</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z-[9999] flex items-center justify-between whitespace-nowrap ">
                    <div className="flex items-center md:block text-[18px] md:text-[16px] font-semibold ">
                        <div className="mr-5">© 2020 Spotify AB</div>
                        <div className="flex flex-wrap">
                            <div className="mr-5">Legal</div>
                            <div className="mr-5">Privacy</div>
                            <div className="mr-5">Cookies</div>
                            <div className="mr-5">Revoke access</div>
                            <div className="mr-5">RSS</div>
                        </div>
                    </div>
                    <Link to="#Nav-bar">
                        <div className="scroll-up group flex items-center cursor-pointer text-[14px] sm:translate-y-[-80px] ">
                            <span>BACK TO TOP</span>
                            <div className={`h-[60px] sm:h-[45px] w-[60px] sm:w-[45px] ml-[10px] border border-[#9c9797] 
                            rounded-full border-opacity-40 flex items-center justify-center group-hover:bg-${textColor} `}>
                                <i className={`fa-solid fa-arrow-up text-[18px] group-hover:text-${arrowHoverColor}`}></i>
                            </div>
                        </div>
                    </Link>
                </div>

                {bgImageSrc ? 
                    <div className="absolute bottom-0 right-0">
                        <img src={bgImageSrc} alt="" />
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
     );
}
 
export default Footer;