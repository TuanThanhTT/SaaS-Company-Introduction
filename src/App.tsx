import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- CẬP NHẬT IMPORT ---
// 1. Import LandingPage (thay vì HomePage nếu bạn muốn dùng LandingPage làm trang chủ)
// Hãy chắc chắn đường dẫn './pages/landing/LandingPage' đúng với nơi bạn lưu file.
import LandingPage from './pages/landing/LandingPage';

import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import OrgAdminLayout from './pages/orgadmin/OrgAdminLayout';

// 2. Kiểm tra kỹ đường dẫn này. 
// Nếu file nằm ở src/components/TechHub/ProductShowcase.tsx thì phải sửa đường dẫn lại cho đúng
import ProductShowcase from './pages/landing/ProductShowcase';
import Sidebar from './pages/landing/Sidebar';
import Header from './pages/landing/Header';
// -----------------------

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* Đổi element thành LandingPage */}
            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/orgadmin/*" element={<OrgAdminLayout />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<div>Trang Quên mật khẩu</div>} />

            {/* Route này để xem riêng component showcase nếu muốn */}
            <Route path="/product-showcase" element={<ProductShowcase />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/header" element={<Header />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;