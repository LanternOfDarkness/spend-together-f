import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header title="Spend Together" />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
