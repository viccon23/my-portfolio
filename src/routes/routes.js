import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from '../components/App';
import Wordle from '../components/Wordle';
import DiscordMessageBot from '../components/DiscordMessageBot';
import CPPMusicPlaylist from '../components/CPPMusicPlaylist';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Wordle" element={<Wordle />} />
        <Route path="/DiscordMessageBot" element={<DiscordMessageBot />} />
        <Route path="/CPPMusicPlaylist" element={<CPPMusicPlaylist />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;