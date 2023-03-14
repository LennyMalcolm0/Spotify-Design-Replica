import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import './Reusable.css';
import HomePage from './Home/Home';
import StoriesPage from './Stories/Stories';
import ListenPage from './Listen/Listen';
import TeamsPage from './Team/Team';
import ToolsPage from './Tools/Tools';

function App() {
  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });

  // const hiddenEls = document.querySelectorAll(".srollView");
  // hiddenEls.forEach(el => observer.observe(el));
  
  useEffect(() => {
    const desktopLinkTitle = document.querySelectorAll(".desktop-nav-menu a"),
    mobileLinkTitle = document.querySelectorAll(".mobile-nav-menu a"),
    desktopLinks = document.querySelectorAll(".desktop-nav-menu .nl-link"),
    mobileLinks = document.querySelectorAll(".mobile-nav-menu .nl-link");

    desktopLinkTitle.forEach(linkTitle => {
      const navLink = linkTitle.parentElement as HTMLElement,
      desktopNavDot = linkTitle.nextElementSibling as HTMLElement;
      linkTitle.addEventListener("mouseover", () => {
        desktopNavDot.style.transform = "scale(1)"
      });
      linkTitle.addEventListener("mouseout", () => {
        if (!navLink.classList.contains("nl-link-active")) {
          desktopNavDot.style.transform = "scale(0)"
        }
      });

      linkTitle.addEventListener("click", () => {
        desktopLinks.forEach(titles => {
          titles.classList.remove("nl-link-active");
          const desktopNavDots = titles.children[1] as HTMLElement;
          desktopNavDots.style.transform = "scale(0)"
        });
        navLink.classList.add("nl-link-active");
        desktopNavDot.style.transform = "scale(1)";

        // Reflecting changes in Mobile Menu
        mobileLinkTitle.forEach(mobileTitle => {
          const mobileNavDot = mobileTitle.previousElementSibling as HTMLElement;
          mobileNavDot.style.display = "none";
          if (mobileTitle.textContent === linkTitle.textContent) {
            mobileNavDot.style.display = "block";
          }
        })
      });
    });
  
    const openMenuButton = document.querySelector(".nav-icon .fa-bars") as HTMLElement,
    closeMenuButton = document.querySelector(".nav-icon .fa-xmark") as HTMLElement,
    appBody = document.querySelector("body") as HTMLElement,
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

    mobileLinkTitle.forEach(mobileTitle => {
      mobileTitle.addEventListener("click", () => {
        mobileLinks.forEach(mobileLink => {
          const mobileNavDot = mobileLink.children[0] as HTMLElement;
          mobileNavDot.style.display = "none";
        });

        const mobileNavDot = mobileTitle.previousElementSibling as HTMLElement;
        mobileNavDot.style.display = "block";

        // Closing Menu
        closeMenuButton.style.display = "none";
        openMenuButton.style.display = "block";
        appBody.style.overflowY = "scroll";
        mobileMenu.classList.add("closed");
        mobileMenu.style.animation = "mobileMenuOutro 0.4s linear 0s 1 normal forwards";
        menuBackground.style.animation = "menuBackgroundOutro 0.5s linear 0s 1 normal forwards";

        // Reflecting changes in Desktop Menu
        desktopLinkTitle.forEach(linkTitle => {
          const navLink = linkTitle.parentElement as HTMLElement,
          desktopNavDot = linkTitle.nextElementSibling as HTMLElement;

          if (linkTitle.textContent === mobileTitle.textContent) {
            desktopLinks.forEach(titles => {
              titles.classList.remove("nl-link-active");
              const desktopNavDots = titles.children[1] as HTMLElement;
              desktopNavDots.style.transform = "scale(0)"
            });
            navLink.classList.add("nl-link-active");
            desktopNavDot.style.transform = "scale(1)";
          }
        })
      });
    });

    const min600 = window.matchMedia("(min-width: 600px)"),
    spotifyNavLogo = document.querySelector(".nav-bar img") as HTMLElement;
    spotifyNavLogo.addEventListener("click", () => {
      if (mobileMenu.classList.contains("closed")) {
        desktopLinks.forEach(titles => {
          titles.classList.remove("nl-link-active");
          const desktopNavDots = titles.children[1] as HTMLElement;
          desktopNavDots.style.transform = "scale(0)"
        })
        mobileLinks.forEach(mobileLink => {
          const mobileNavDot = mobileLink.children[0] as HTMLElement;
          mobileNavDot.style.display = "none";
        })
      };
    });
    
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
    <div className="App font-bold">
      <BrowserRouter>
        <div className="nav-bar-container">
          <div className="nav-bar">
              <Link to="/"><img src="Images/Spotify Logo.svg" alt="" /></Link>

            <div className="desktop-nav-menu">
              <div className="nl-link">
                <Link to="/stories"><div className="nl-link-title">Stories</div></Link>
                <div className="nl-dot"></div>
              </div>

              <div className="nl-link">
                <Link to="/listen"><div className="nl-link-title">Listen</div></Link>
                <div className="nl-dot"></div>
              </div>

              <div className="nl-link">
                <Link to="/team"><div className="nl-link-title">Team</div></Link>
                <div className="nl-dot"></div>
              </div>

              <div className="nl-link">
                <Link to="/tools"><div className="nl-link-title">Tools</div></Link>
                <div className="nl-dot"></div>
              </div>
            </div>

            <div className="nav-icon">
              <i className="fa-solid fa-bars"></i>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <div className="mobile-menu-background"></div>
        <div className="mobile-nav-menu closed">
          <div className="links">
              <div className="nl-link">
                <div className="nl-dot"></div>
                <Link to="/stories"><div className="nl-link-title">Stories</div></Link>
              </div>

              <div className="nl-link">
                <div className="nl-dot"></div>
                <Link to="/listen"><div className="nl-link-title">Listen</div></Link>
              </div>

              <div className="nl-link">
                <div className="nl-dot"></div>
                <Link to="/team"><div className="nl-link-title">Team</div></Link>
              </div>

              <div className="nl-link">
                <div className="nl-dot"></div>
                <Link to="/tools"><div className="nl-link-title">Tools</div></Link>
              </div>
          </div>
          <div className="menu-extra-container">
            <div className="menu-extra">
              <div className="socials">
                <div>Instagram</div>
                <div>Twitter</div>
              </div>
              <div className="place-time">
                <div className="place">
                  <div>SE</div>
                  <div>UK</div>
                  <div>US</div>
                </div>
                <div className="time">
                  <div>06:09:28</div>
                  <div>05:09:28</div>
                  <div>12:09:28</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/stories" element={<StoriesPage/>} />
          <Route path="/listen" element={<ListenPage/>} />
          <Route path="/team" element={<TeamsPage/>} />
          <Route path="/tools" element={<ToolsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
