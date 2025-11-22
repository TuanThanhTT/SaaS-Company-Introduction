// src/App.tsx
import React from 'react';
import TechHubLayout from './components/TechHub';

import './index.css';
import TechHubHome from './pages/TechHubHome';

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