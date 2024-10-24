import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './pages/LeaderBoard';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Leaderboard />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
