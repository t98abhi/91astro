import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Stars } from 'lucide-react';

const Login: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(phone, otp);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid phone number or OTP. Make sure you are registered.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="cosmic-background"></div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Stars size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
            <h1>{t('login')}</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">{t('phone')}</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder={t('enterPhone')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="otp">{t('otp')}</label>
              <input
                type="text"
                id="otp"
                className="form-control"
                placeholder={t('enterOtp')}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            {error && (
              <div style={{ color: '#e53e3e', fontSize: '14px', marginBottom: '20px' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Logging in...' : t('loginBtn')}
            </button>
          </form>

          <div className="auth-link">
            {t('dontHaveAccount')} <Link to="/register">{t('signUp')}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;