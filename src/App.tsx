import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Home/Home';
import FetchData from './General-Components/Fetch-data';

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
  let cars = 1;

  const { data: person, loading, error } = FetchData("http://localhost:8000/designers")
  
  return (
    <div className="App">
      <div className="nav-bar-container">
        <div className="nav-bar">
          <img src="GenImages\Spotify Logo.svg" alt="" />

          <div className="nav-links">
            <div className="nl-link">
              <div className="nl-link-title">Stories</div>
              <div className="nl-dot"></div>
            </div>

            <div className="nl-link">
              <div className="nl-link-title">Listen</div>
              <div className="nl-dot"></div>
            </div>

            <div className="nl-link">
              <div className="nl-link-title">Team</div>
              <div className="nl-dot"></div>
            </div>

            <div className="nl-link">
              <div className="nl-link-title">Tools</div>
              <div className="nl-dot"></div>
            </div>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-bars"></i>

    </div>
  );
}

export default App;
