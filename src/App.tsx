import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import './App.css';
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

  return (
    <div className="App w-screen overflow-hidden font-bold tracking-tight">
      <BrowserRouter>
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
