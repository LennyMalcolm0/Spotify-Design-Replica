import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface NavProps {
    logoUrl: string;
    color: string;
    activeLink: string;
}
const NavBar = ({logoUrl, color, activeLink}: NavProps) => {

    useEffect(() => {
        const desktopLinkTitle = document.querySelectorAll(".desktop-nav-menu a"),
        mobileLinkTitle = document.querySelectorAll(".mobile-nav-menu a"),
        appBody = document.querySelector("body") as HTMLElement;
    
        desktopLinkTitle.forEach(linkTitle => {
            const navLink = linkTitle.parentElement as HTMLElement,
            desktopNavDot = linkTitle.nextElementSibling as HTMLElement;

            if (linkTitle.textContent === activeLink) {
                navLink.classList.add("nl-link-active");
                desktopNavDot.style.transform = "scale(1)";
            }

            linkTitle.addEventListener("mouseover", () => {
                desktopNavDot.style.transform = "scale(1)"
            });
            linkTitle.addEventListener("mouseout", () => {
                if (!navLink.classList.contains("nl-link-active")) {
                    desktopNavDot.style.transform = "scale(0)"
                }
            });
        });
      
        const openMenuButton = document.querySelector(".nav-icon .fa-bars") as HTMLElement,
        closeMenuButton = document.querySelector(".nav-icon .fa-xmark") as HTMLElement,
        mobileMenu = document.querySelector(".mobile-nav-menu") as HTMLElement,
        menuBackground = document.querySelector(".mobile-menu-background") as HTMLElement;
      
        openMenuButton.addEventListener("click", () => {
            openMenuButton.style.display = "none";
            closeMenuButton.style.display = "block";
            appBody.style.overflowY = "hidden";
            mobileMenu.style.display = "block";
            mobileMenu.classList.remove("closed");
            mobileMenu.style.animation = "mobileMenuIntro 0.5s linear 0s 1 normal forwards";
            menuBackground.style.display = "block";
            menuBackground.style.animation = "menuBackgroundIntro 0.5s linear 0s 1 normal forwards";
        });
        function closeMenu() {
            closeMenuButton.style.display = "none";
            openMenuButton.style.display = "block";
            appBody.style.overflowY = "scroll";
            mobileMenu.classList.add("closed");
            mobileMenu.style.animation = "mobileMenuOutro 0.4s linear 0s 1 normal forwards";
            menuBackground.style.animation = "menuBackgroundOutro 0.5s linear 0s 1 normal forwards";
        }
        closeMenuButton.addEventListener("click", closeMenu);

        mobileLinkTitle.forEach(linkTitle => {
            const mobileNavDot = linkTitle.previousElementSibling as HTMLElement;
            if (linkTitle.textContent === activeLink) {
                mobileNavDot.style.display = "block";
            };

            linkTitle.addEventListener("click", closeMenu);
        });
        
        const min600 = window.matchMedia("(min-width: 600px)");
        window.addEventListener("resize", () => {
            if (min600.matches) {
                if (mobileMenu.style.display === "block") {
                    openMenuButton.style.display = "none";
                    closeMenuButton.style.display = "none";
                    appBody.style.overflowY = "scroll";
                    mobileMenu.style.display = "none";
                    mobileMenu.classList.add("closed");
                    menuBackground.style.display = "none";
                }
            } else {
                if (closeMenuButton.style.display === "none") {
                    openMenuButton.style.display = "block";
                }
            }
        })
    }, []);
      
    return (
        <div className="Nav-bar">
            <div className="w-full absolute top-0 z-[9999]">
                <div className="nav-bar max-w-[1400px] flex items-center justify-between px-[60px] md:px-[30px] sm:px-[20px] mt-[30px] sm:mt-[20px] 2xl:mx-auto">
                    <Link to="/"><img src={logoUrl} alt="" className="h-[35px] cursor-pointer" /></Link>
        
                    <div className="desktop-nav-menu flex text-[18px] md:text-[16px] sm:hidden">
                        <div className="nl-link hover:opacity-60">
                            <Link to="/stories"><div className={`nl-link-title text-${color}`}>Stories</div></Link>
                            <div className={`nl-dot bg-${color}`}></div>
                        </div>
            
                        <div className="nl-link">
                            <Link to="/listen"><div className={`nl-link-title text-${color}`}>Listen</div></Link>
                            <div className={`nl-dot bg-${color}`}></div>
                        </div>
            
                        <div className="nl-link">
                            <Link to="/team"><div className={`nl-link-title text-${color}`}>Team</div></Link>
                            <div className={`nl-dot bg-${color}`}></div>
                        </div>
            
                        <div className="nl-link">
                            <Link to="/tools"><div className={`nl-link-title text-${color}`}>Tools</div></Link>
                            <div className={`nl-dot bg-${color}`}></div>
                        </div>
                    </div>
        
                    <div className="nav-icon">
                        <i className={`fa-solid fa-bars cursor-pointer text-${color}`}></i>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>

            <div className="mobile-menu-background h-full w-full bg-white fixed inset-0"></div>
            <div className="mobile-nav-menu closed w-full h-full absolute">
                <div className="links mt-[140px]">
                    <div className="nl-link">
                        <div className="nl-dot bg-black"></div>
                        <Link to="/stories"><div className="nl-link-title">Stories</div></Link>
                    </div>
        
                    <div className="nl-link">
                        <div className="nl-dot bg-black"></div>
                        <Link to="/listen"><div className="nl-link-title">Listen</div></Link>
                    </div>
        
                    <div className="nl-link">
                        <div className="nl-dot bg-black"></div>
                        <Link to="/team"><div className="nl-link-title">Team</div></Link>
                    </div>
        
                    <div className="nl-link">
                        <div className="nl-dot bg-black"></div>
                        <Link to="/tools"><div className="nl-link-title">Tools</div></Link>
                    </div>
                </div>
                <div className="menu-extra w-full absolute bottom-[40px] z-[999]">
                    <div className="flex items-center justify-between px-[15px]">
                        <div className="text-[24px] font-medium">
                            <div>Instagram</div>
                            <div>Twitter</div>
                        </div>
                        <div className="flex text-[17px]">
                            <div className="font-semibold mr-[15px]">
                                <div>SE</div>
                                <div>UK</div>
                                <div>US</div>
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
        </div>
    );
}
 
export default NavBar;