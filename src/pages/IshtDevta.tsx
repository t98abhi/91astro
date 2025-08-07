import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import { Target, Loader2 } from 'lucide-react';

const IshtDevta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { t } = useLanguage();

  const generateIshtDevtaReport = async (
    data: typeof formData
  ): Promise<JSX.Element> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    const deities = [
      { name: 'Lord Vishnu', planet: 'Sun', mantra: 'Om Namo Narayanaya', day: 'Sunday' },
      { name: 'Goddess Parvati', planet: 'Moon', mantra: 'Om Hreem Shreem Kleem Parvati Devyai Namaha', day: 'Monday' },
      { name: 'Lord Hanuman', planet: 'Mars', mantra: 'Om Hanumate Namaha', day: 'Tuesday' },
      { name: 'Lord Ganesha', planet: 'Mercury', mantra: 'Om Gam Ganapataye Namaha', day: 'Wednesday' },
      { name: 'Lord Krishna', planet: 'Jupiter', mantra: 'Om Kleem Krishnaya Namaha', day: 'Thursday' },
      { name: 'Goddess Lakshmi', planet: 'Venus', mantra: 'Om Shreem Mahalakshmyai Namaha', day: 'Friday' },
      { name: 'Lord Shiva', planet: 'Saturn', mantra: 'Om Namah Shivaya', day: 'Saturday' },
    ];
  
    const selectedDeity = deities[Math.floor(Math.random() * deities.length)];
  
    const cardStyle: React.CSSProperties = {
      background: "#f5f3ff",
      padding: "24px",
      borderRadius: "16px",
      color: "#2d3748",
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6,
      fontSize: "15px",
    };
    const headingStyle: React.CSSProperties = {
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "16px",
    };
  
    const sectionTitleStyle: React.CSSProperties = {
      fontWeight: 600,
      color: "#4b0082",
      marginTop: "20px",
      marginBottom: "8px",
      fontSize: "16px",
    };
  
    const paragraphStyle: React.CSSProperties = {
      margin: "8px 0",
    };
  
    const listStyle: React.CSSProperties = {
      marginLeft: "20px",
      paddingLeft: "0",
    };
  
    const getDeitySignificance = (name: string) => {
      switch (name) {
        case 'Lord Vishnu':
          return (
            <>
              <li>Preserver of the universe</li>
              <li>Brings stability and protection</li>
              <li>Helps in maintaining dharma</li>
              <li>Grants peace and prosperity</li>
            </>
          );
        case 'Goddess Parvati':
          return (
            <>
              <li>Divine mother energy</li>
              <li>Brings emotional balance</li>
              <li>Enhances intuition and creativity</li>
              <li>Provides nurturing and care</li>
            </>
          );
        case 'Lord Hanuman':
          return (
            <>
              <li>Symbol of strength and devotion</li>
              <li>Removes obstacles and fears</li>
              <li>Grants courage and determination</li>
              <li>Protects from negative energies</li>
            </>
          );
        case 'Lord Ganesha':
          return (
            <>
              <li>Remover of obstacles</li>
              <li>Lord of new beginnings</li>
              <li>Enhances wisdom and intelligence</li>
              <li>Brings success in endeavors</li>
            </>
          );
        case 'Lord Krishna':
          return (
            <>
              <li>Divine teacher and guide</li>
              <li>Brings wisdom and knowledge</li>
              <li>Enhances spiritual growth</li>
              <li>Grants divine love and devotion</li>
            </>
          );
        case 'Goddess Lakshmi':
          return (
            <>
              <li>Goddess of wealth and prosperity</li>
              <li>Brings abundance and beauty</li>
              <li>Enhances relationships</li>
              <li>Grants material and spiritual wealth</li>
            </>
          );
        case 'Lord Shiva':
          return (
            <>
              <li>Lord of transformation</li>
              <li>Brings spiritual awakening</li>
              <li>Helps in overcoming challenges</li>
              <li>Grants inner strength and wisdom</li>
            </>
          );
        default:
          return null;
      }
    };
  
    return (
      <div style={cardStyle}>
        <div style={headingStyle}>🕉️ Isht Devta Report for {data.name}</div>
  
        <p style={paragraphStyle}>📅 <strong>Date:</strong> {data.dateOfBirth}</p>
        <p style={paragraphStyle}>⏰ <strong>Time:</strong> {data.timeOfBirth}</p>
        <p style={paragraphStyle}>📍 <strong>Place:</strong> {data.placeOfBirth}</p>
  
        <div style={sectionTitleStyle}>🛐 Your Isht Devta:</div>
        <p style={paragraphStyle}><strong>{selectedDeity.name}</strong></p>
  
        <div style={sectionTitleStyle}>🔭 Ruling Planet:</div>
        <p style={paragraphStyle}>{selectedDeity.planet}</p>
  
        <div style={sectionTitleStyle}>📖 Significance of {selectedDeity.name}:</div>
        <ul style={listStyle}>{getDeitySignificance(selectedDeity.name)}</ul>
  
        <div style={sectionTitleStyle}>🕯️ Worship Practices:</div>
        <ul style={listStyle}>
          <li>Primary Mantra: <strong>{selectedDeity.mantra}</strong></li>
          <li>Best Day for Worship: <strong>{selectedDeity.day}</strong></li>
          <li>Recommended Time: Early morning or evening</li>
          <li>Offerings: Flowers, fruits, incense, and pure intentions</li>
        </ul>
  
        <div style={sectionTitleStyle}>🌅 Daily Practices:</div>
        <ul style={listStyle}>
          <li>Recite the mantra 108 times daily</li>
          <li>Light a lamp/diya during prayers</li>
          <li>Offer fresh flowers and water</li>
          <li>Read stories or scriptures of the deity</li>
          <li>Practice meditation focusing on their form</li>
        </ul>
  
        <div style={sectionTitleStyle}>📆 Special Observances:</div>
        <ul style={listStyle}>
          <li>Fast on <strong>{selectedDeity.day}s</strong> (if health permits)</li>
          <li>Celebrate festivals related to {selectedDeity.name}</li>
          <li>Visit temples regularly</li>
          <li>Perform charity in the name of the deity</li>
        </ul>
  
        <div style={sectionTitleStyle}>🌟 Benefits of Worship:</div>
        <ul style={listStyle}>
          <li>Enhanced spiritual connection</li>
          <li>Inner peace and clarity</li>
          <li>Protection from negative influences</li>
          <li>Fulfillment of righteous desires</li>
          <li>Spiritual evolution and growth</li>
        </ul>
  
        <div style={sectionTitleStyle}>💎 Gemstone Recommendation:</div>
        <p style={paragraphStyle}>
          Based on your ruling planet <strong>{selectedDeity.planet}</strong>, consider wearing a suitable gemstone after consulting an astrologer.
        </p>
  
        <p style={{ ...paragraphStyle, fontStyle: "italic", color: "#555" }}>
          Note: True devotion and sincerity matter more than rituals. Connect with your Isht Devta through love and surrender.
        </p>
      </div>
    );
  };

  const FaqSection = () => {
    const faqs = [
      {
        question: "What is an Isht Devta?",
        answer:
          "An Isht Devta is your personal deity in Vedic astrology — the divine form most aligned with your soul's journey. Worshipping your Isht Devta brings spiritual clarity, protection, and deeper self-realization."
      },
      {
        question: "How is my Isht Devta determined?",
        answer:
          "Your Isht Devta is typically identified through the 12th house, Atmakaraka planet, and its placement in the Navamsa chart. Astrologers analyze these aspects to suggest the deity closest to your spiritual nature."
      },
      {
        question: "Can my Isht Devta change over time?",
        answer:
          "Generally, your Isht Devta remains constant throughout life. However, during different planetary periods, other deities may become temporarily significant for support, protection, or lessons."
      },
      {
        question: "What are the benefits of worshipping my Isht Devta?",
        answer:
          "Worshipping your Isht Devta enhances inner peace, spiritual growth, emotional balance, and intuitive guidance. It aligns you with your higher self and protects you through life’s challenges."
      }
    ];
  
    const containerStyle: React.CSSProperties = {
      marginTop: "32px",
      fontFamily: "Arial, sans-serif",
    };
  
    const faqBoxStyle: React.CSSProperties = {
      background: "#fff7ec",
      borderLeft: "4px solid #ec6608",
      borderRadius: "16px",
      padding: "16px 20px",
      marginBottom: "16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    };
  
    const questionStyle: React.CSSProperties = {
      fontWeight: 700,
      marginBottom: "6px",
      fontSize: "16px",
      color: "#2d3748",
    };
  
    const answerStyle: React.CSSProperties = {
      fontSize: "14px",
      color: "#4a5568",
      lineHeight: 1.6,
    };
  
    return (
      <div className='container' style={containerStyle}>
        <h2 style={{ borderBottom: "3px solid #a084e8", paddingBottom: "8px", marginBottom: "20px", fontSize: "20px", color: "#2d2d2d" }}>
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} style={faqBoxStyle}>
            <div style={questionStyle}>Q: {faq.question}</div>
            <div style={answerStyle}>A: {faq.answer}</div>
          </div>
        ))}
      </div>
    );
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.gender || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const report = await generateIshtDevtaReport(formData);
      setResult(report);
    } catch (err) {
      setError('Error generating report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="page-header">
            <Target size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
            <h1>{t('ishtDevtaTitle')}</h1>
            <p>{t('ishtDevtaDesc')}</p>
          </div>

          <div className="divider"></div>

          <div className="content-section">
            <div className="content-left">
              <h2>{t('aboutIshtDevta')}</h2>
              <p>{t('ishtDevtaExplanation')}</p>
              
              <h3 style={{ color: '#2d3748', fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>
                {t('howIshtDevtaCalculated')}
              </h3>
              <p>{t('ishtDevtaCalculation')}</p>

              <h3 style={{ color: '#2d3748', fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>
                {t('ishtDevtaUse')}
              </h3>
              <p>{t('ishtDevtaUseAnswer')}</p>

              <h3 style={{ color: '#2d3748', fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>
                {t('faq')}
              </h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#4a5568', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  {t('faqIsht1')}
                </h4>
                <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6' }}>
                  {t('faqIsht1Answer')}
                </p>
              </div>
              <div>
                <h4 style={{ color: '#4a5568', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  {t('faqIsht2')}
                </h4>
                <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6' }}>
                  {t('faqIsht2Answer')}
                </p>
              </div>
            </div>

            <div className="numerology-form">
              {!result ? (
                <>
                  <h3>
                    {t("calculate")} {t("mangalDoshTitle")}
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">{t("name")}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">{t("gender")}</label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">{t("male")}</option>
                        <option value="female">{t("female")}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="dateOfBirth">
                        {t("dateOfBirth")} (DD/MM/YYYY)
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="form-control"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        placeholder="DD/MM/YYYY"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeOfBirth">
                        {t("timeOfBirth")} (HH:MM)
                      </label>
                      <input
                        type="time"
                        id="timeOfBirth"
                        name="timeOfBirth"
                        className="form-control"
                        value={formData.timeOfBirth}
                        onChange={handleInputChange}
                        placeholder="HH:MM"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="placeOfBirth">{t("placeOfBirth")}</label>
                      <input
                        type="text"
                        id="placeOfBirth"
                        name="placeOfBirth"
                        className="form-control"
                        value={formData.placeOfBirth}
                        onChange={handleInputChange}
                        placeholder="City, State, Country"
                        required
                      />
                    </div>

                    {error && (
                      <div
                        style={{
                          color: "#e53e3e",
                          fontSize: "14px",
                          marginBottom: "20px",
                        }}
                      >
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2
                            size={18}
                            style={{
                              marginRight: "8px",
                              verticalAlign: "middle",
                            }}
                          />
                          Calculating...
                        </>
                      ) : (
                        t("calculate")
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="report-content">
                  <h3>{t("result")}</h3>
                  {result}

                  <button
                    className="btn btn-secondary"
                    onClick={() => setResult("")}
                    style={{ marginTop: "20px" }}
                  >
                    {t("calculate")} Again
                  </button>
                </div>
              )}
            </div>
            
          </div>

      
        </div>
        <FaqSection />
      </div>
    </>
  );
};

export default IshtDevta;