// src/App.tsx
import React from 'react';
import Header from './components/header.tsx'; // .tsx added
import Timeline from './components/timeline.tsx'; // .tsx added
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Timeline />
      </main>
    </div>
  );
};

export default App;