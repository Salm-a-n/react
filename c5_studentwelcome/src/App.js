import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Student from './components/student';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student/:name" element={<Student />} />
    </Routes>
  );
}

export default App;