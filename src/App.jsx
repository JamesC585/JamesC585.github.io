import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Main from './assets/Main';
import Portfolio from './assets/Portfolio';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}