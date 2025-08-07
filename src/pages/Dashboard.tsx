import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import { Heart, Clock, Target, Star, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const DashboardFaqs = () => {
    const faqStyle: React.CSSProperties = {
      background: "#fff7ec",
      borderLeft: "4px solid #ec6608",
      borderRadius: "16px",
      padding: "20px 24px",
      marginBottom: "16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    };
  
    const questionStyle: React.CSSProperties = {
      fontWeight: 700,
      fontSize: "16px",
      color: "#2d3748",
      marginBottom: "6px",
    };
  
    const answerStyle: React.CSSProperties = {
      fontSize: "14px",
      color: "#4a5568",
      lineHeight: 1.6,
    };
  
    const faqs = [
      {
        question: "What can I use this dashboard for?",
        answer:
          "This dashboard gives you quick access to Mangal Dosh, Shani Sade Sathi, and Isht Devta calculators, helping you understand your astrological profile instantly.",
      },
      {
        question: "Are my results personalized?",
        answer:
          "Yes. All calculations are based on your date and time of birth, delivering highly personalized numerology and astrology insights.",
      },
      {
        question: "How do I interpret my results?",
        answer:
          "Each tool offers detailed explanations for your planetary positions, doshas, and remedies. Use the descriptions or consult an expert for deeper understanding.",
      },
      {
        question: "Can I use the dashboard on mobile?",
        answer:
          "Absolutely. The dashboard is fully responsive and works smoothly on desktops, tablets, and smartphones.",
      },
    ];
  
    return (
      <div
        className='container'
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          marginTop: "40px",
          border: "1px solid rgba(46, 3, 101, 0.1)",
        }}
      >
        <h2 style={{ color: "#2d3748", textAlign: "center", marginBottom: "30px" }}>
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} style={faqStyle}>
            <div style={questionStyle}>Q: {faq.question}</div>
            <div style={answerStyle}>A: {faq.answer}</div>
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="page-header">
            <h1>{t('welcome')}, {user?.name}!</h1>
            <p>{t('welcomeDesc')}</p>
          </div>

          <div className="divider"></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1px solid rgba(46, 3, 101, 0.1)'
            }}>
              <Heart size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
              <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '20px' }}>
                {t('mangalDoshTitle')}
              </h3>
              <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '20px' }}>
                {t('mangalDoshDesc')}
              </p>
              <Link to="/mangal-dosh" className="btn btn-primary" style={{ maxWidth: '200px' }}>
                {t('calculate')}
              </Link>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1px solid rgba(46, 3, 101, 0.1)'
            }}>
              <Clock size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
              <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '20px' }}>
                {t('shaniSadeTitle')}
              </h3>
              <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '20px' }}>
                {t('shaniSadeDesc')}
              </p>
              <Link to="/shani-sade-sathi" className="btn btn-primary" style={{ maxWidth: '200px' }}>
                {t('calculate')}
              </Link>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1px solid rgba(46, 3, 101, 0.1)'
            }}>
              <Target size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
              <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '20px' }}>
                {t('ishtDevtaTitle')}
              </h3>
              <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '20px' }}>
                {t('ishtDevtaDesc')}
              </p>
              <Link to="/isht-devta" className="btn btn-primary" style={{ maxWidth: '200px' }}>
                {t('calculate')}
              </Link>
            </div>

            {/* <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1px solid rgba(46, 3, 101, 0.1)'
            }}>
              <Star size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
              <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '20px' }}>
                Personalized Insights
              </h3>
              <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '20px' }}>
                Get detailed insights about your life path, personality traits, and future possibilities.
              </p>
              <button className="btn btn-secondary" style={{ maxWidth: '200px' }} disabled>
                Coming Soon
              </button>
            </div> */}
          </div>

          <div style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            marginTop: '40px',
            border: '1px solid rgba(46, 3, 101, 0.1)'
          }}>
            <h2 style={{ color: '#2d3748', textAlign: 'center', marginBottom: '30px' }}>
              Why Choose 91Astro?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <Users size={32} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
                <h4 style={{ color: '#2d3748', marginBottom: '10px' }}>Expert Guidance</h4>
                <p style={{ color: '#718096', fontSize: '14px' }}>
                  Based on ancient numerological wisdom combined with modern AI technology
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Zap size={32} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
                <h4 style={{ color: '#2d3748', marginBottom: '10px' }}>Instant Results</h4>
                <p style={{ color: '#718096', fontSize: '14px' }}>
                  Get your personalized numerology report instantly with detailed analysis
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Star size={32} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
                <h4 style={{ color: '#2d3748', marginBottom: '10px' }}>Accurate Insights</h4>
                <p style={{ color: '#718096', fontSize: '14px' }}>
                  Precise calculations and interpretations tailored to your unique profile
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardFaqs />
      </div>
    </>
  );
};

export default Dashboard;