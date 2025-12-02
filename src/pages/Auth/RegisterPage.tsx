import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Đảm bảo đường dẫn tương đối đúng
import '../../assets/css/RegisterPage.css';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsLoading(true);

        // --- BẮT ĐẦU GIẢ LẬP API ---
        console.log("Registration data (Frontend Mock):", formData);

        // Kiểm tra validation đơn giản
        if (!formData.companyName || !formData.email || !formData.password) {
            setError('Vui lòng điền đầy đủ thông tin bắt buộc.');
            setIsLoading(false);
            return;
        }
        if (formData.password.length < 6) {
            setError('Mật khẩu phải có tối thiểu 6 ký tự.');
            setIsLoading(false);
            return;
        }

        // Giả lập thời gian chờ gọi API (2 giây)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Giả lập kết quả trả về
        if (formData.email.includes("fail")) {
            // Giả lập đăng ký thất bại
            setError('Đăng ký thất bại (giả lập). Email đã được sử dụng.');
        } else {
            // Đăng ký thành công (giả lập)
            setSuccess('Đăng ký công ty và tài khoản Admin thành công (giả lập)! Bạn sẽ được chuyển hướng đến trang Đăng nhập.');

            // Tự động chuyển hướng về trang đăng nhập sau 3 giây
            setTimeout(() => navigate('/login'), 3000);
        }

        setIsLoading(false);
        // --- KẾT THÚC GIẢ LẬP API ---
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Đăng ký Doanh nghiệp (Tenant)</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}

                    <div className="form-group">
                        <label htmlFor="companyName">Tên công ty:</label>
                        <input
                            id="companyName"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            placeholder="Ví dụ: Công ty Giải pháp ABC"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email (Admin):</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            placeholder="Email sẽ là tài khoản quản trị"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            placeholder="Tối thiểu 6 ký tự"
                        />
                    </div>

                    <button
                        type="submit"
                        className="register-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
                    </button>
                </form>

                <div className="form-links">
                    <p>
                        Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;