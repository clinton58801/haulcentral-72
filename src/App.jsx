import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#111', color: '#fff' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
        <Link to="/help" style={{ color: '#fff' }}>Help</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 style={{ padding: '2rem' }}>Welcome to HaulCentral</h1>} />
        <Route path="/help" element={<p style={{ padding: '2rem' }}>Help & Support at support@haulcentral.com</p>} />
      </Routes>
    </Router>
  );
}

export default App;
