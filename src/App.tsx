import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import HomePage from './Home/Home';
import StoriesPage from './Stories/Stories';
import ListenPage from './Listen/Listen';
import TeamsPage from './Team/Team';
import ToolsPage from './Tools/Tools';

function App() {
  
  return (
    <div className="App w-screen scroll-smooth overflow-hidden font-bold tracking-tight transition-all duration-300 ">
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
