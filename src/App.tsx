import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import HomePage from './Home/Home';
// import FetchData from './General-Components/Fetch-data';

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
  
  const linkTitle = document.querySelectorAll(".nl-link-title");
  linkTitle.forEach(title => {
    const dot = title.nextElementSibling as HTMLElement;
    title.addEventListener("mouseover", () => {
      dot.style.opacity = "0.6";
    })
    title.addEventListener("mouseout", () => {
      dot.style.opacity = "0";
    })
  });

  const openMenuButton = document.querySelector(".nav-icon .fa-bars") as HTMLElement,
  closeMenuButton = document.querySelector(".nav-icon .fa-xmark") as HTMLElement,
  mobileMenu = document.querySelector(".mobile-nav-menu") as HTMLElement,
  menuBackground = document.querySelector(".mobile-menu-background") as HTMLElement;

  openMenuButton.addEventListener("click", () => {
    openMenuButton.style.display = "none";
    mobileMenu.style.display = "block";
    closeMenuButton.style.display = "block";
    menuBackground.style.display = "block";
    menuBackground.style.animation = "menuBackgroundIntro 0.5s linear 0s 1 normal forwards";
  });
  closeMenuButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    closeMenuButton.style.display = "none";
    openMenuButton.style.display = "block";
    menuBackground.style.animation = "menuBackgroundOutro 0.5s linear 0s 1 normal forwards";
    setInterval(() => {
      menuBackground.style.display = "none";
    }, 500);
  });

  
  return (
    <div className="App">
      <div className="nav-bar-container">
        <div className="nav-bar">
          <img src="GenImages\Spotify Logo.svg" alt="" />

          <div className="desktop-nav-menu">
            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Stories</div>
            </div>

            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Listen</div>
            </div>

            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Team</div>
            </div>

            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Tools</div>
            </div>
          </div>

          <div className="nav-icon">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      <div className="mobile-menu-background"></div>
      <div className="mobile-nav-menu">
        <div className="links">
            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Stories</div>
            </div>

            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Listen</div>
            </div>

            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Team</div>
            </div>

            <div className="nl-link">
              <div className="nl-dot"></div>
              <div className="nl-link-title">Tools</div>
            </div>
        </div>
        <div className="flex-wrapper">
          <div className="flex">
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
    </div>
  );
}

export default App;
