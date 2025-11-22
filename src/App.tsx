// src/App.tsx
import React from 'react';
import TechHubLayout from './components/TechHub';
import TechHubHome from './pages/TechHubHome';
import './index.css';

function App() {
  return (
    <div className="App">
      <TechHubLayout>
        <TechHubHome />
      </TechHubLayout>
    </div>
  );
}

export default App;