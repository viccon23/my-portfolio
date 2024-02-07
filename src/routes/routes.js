import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from '../components/App';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;