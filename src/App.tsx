// src/App.tsx
import React from 'react';
import TechHubLayout from './components/TechHub';
<<<<<<< HEAD

import './index.css';
import TechHubHome from './pages/TechHubHome';
=======
import TechHubHome from './pages/TechHubHome';
import './index.css';
>>>>>>> 7363822f68218ea60bd1bfcf6a685b99ead9316b

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