// App.tsx
import './App.css';
import ChatvoiooLanding from './pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Tạo một QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ChatvoiooLanding />
      </div>
    </QueryClientProvider>
  );
}

export default App;
