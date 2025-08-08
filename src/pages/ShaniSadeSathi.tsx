import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import { Clock, Loader2 } from 'lucide-react';
import OpenAI from "openai"; // Install: npm install openai

const ShaniSadeSathi: React.FC = () => {
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

  // const generateShaniSadeReport = async (
  //   data: typeof formData
  // ): Promise<JSX.Element> => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  
  //   const isUnderSadeSathi = Math.random() > 0.4;
  //   const phase = ["First Phase", "Second Phase", "Third Phase"][
  //     Math.floor(Math.random() * 3)
  //   ];
  //   const durationYears = Math.floor(Math.random() * 3) + 1;
  //   const upcomingYears = Math.floor(Math.random() * 10) + 5;
  
  //   const cardStyle: React.CSSProperties = {
  //     background: "#f5f3ff",
  //     padding: "24px",
  //     borderRadius: "16px",
  //     color: "#2d3748",
  //     fontFamily: "Arial, sans-serif",
  //     lineHeight: 1.6,
  //     fontSize: "15px",
  //   };
  
  //   const headingStyle: React.CSSProperties = {
  //     fontSize: "18px",
  //     fontWeight: 700,
  //     marginBottom: "16px",
  //   };
  
  //   const sectionTitleStyle: React.CSSProperties = {
  //     fontWeight: 600,
  //     color: "#4b0082",
  //     marginTop: "20px",
  //     marginBottom: "8px",
  //     fontSize: "16px",
  //   };
  
  //   const paragraphStyle: React.CSSProperties = {
  //     margin: "8px 0",
  //   };
  
  //   const listStyle: React.CSSProperties = {
  //     marginLeft: "20px",
  //     paddingLeft: "0",
  //   };
  
  //   const renderPhaseDetails = () => {
  //     switch (phase) {
  //       case "First Phase":
  //         return (
  //           <>
  //             <li>Focus on health and personal challenges</li>
  //             <li>Changes in lifestyle and habits</li>
  //             <li>Need for self-discipline</li>
  //           </>
  //         );
  //       case "Second Phase":
  //         return (
  //           <>
  //             <li>Career and financial challenges</li>
  //             <li>Major life decisions</li>
  //             <li>Transformation period</li>
  //           </>
  //         );
  //       case "Third Phase":
  //         return (
  //           <>
  //             <li>Relationship and family matters</li>
  //             <li>Completion of karmic lessons</li>
  //             <li>Preparation for new beginnings</li>
  //           </>
  //         );
  //       default:
  //         return null;
  //     }
  //   };
  
  //   if (isUnderSadeSathi) {
  //     return (
  //       <div style={cardStyle}>
  //         <div style={headingStyle}>
  //           🪔 Shani Sade Sathi Report for {data.name}
  //         </div>
  
  //         <p style={paragraphStyle}>📅 <strong>Date:</strong> {data.dateOfBirth}</p>
  //         <p style={paragraphStyle}>⏰ <strong>Time:</strong> {data.timeOfBirth}</p>
  //         <p style={paragraphStyle}>📍 <strong>Place:</strong> {data.placeOfBirth}</p>
  
  //         <div style={sectionTitleStyle}>📉 Status:</div>
  //         <p style={paragraphStyle}>
  //           You are currently experiencing <strong>Shani Sade Sathi</strong>.
  //         </p>
  
  //         <div style={sectionTitleStyle}>🔄 Current Phase:</div>
  //         <p style={paragraphStyle}><strong>{phase}</strong></p>
  
  //         <div style={sectionTitleStyle}>⚠️ General Effects:</div>
  //         <ul style={listStyle}>
  //           <li>Life lessons and spiritual growth</li>
  //           <li>Challenges that build character</li>
  //           <li>Delays in life areas</li>
  //           <li>Need for patience and perseverance</li>
  //         </ul>
  
  //         <div style={sectionTitleStyle}>📌 Phase-Specific Effects:</div>
  //         <ul style={listStyle}>{renderPhaseDetails()}</ul>
  
  //         <div style={sectionTitleStyle}>🛠️ Remedies:</div>
  //         <ul style={listStyle}>
  //           <li>Recite Shani Chalisa daily</li>
  //           <li>Donate black sesame seeds on Saturdays</li>
  //           <li>Light mustard oil lamp for Lord Shani</li>
  //           <li>Help the elderly and disabled</li>
  //           <li>Practice patience and humility</li>
  //           <li>Avoid major decisions during peak periods</li>
  //         </ul>
  
  //         <div style={sectionTitleStyle}>✨ Positive Outcomes:</div>
  //         <ul style={listStyle}>
  //           <li>Spiritual awakening</li>
  //           <li>Inner strength development</li>
  //           <li>Karmic cleansing</li>
  //           <li>Preparation for future success</li>
  //         </ul>
  
  //         <p style={paragraphStyle}>
  //           🕒 <strong>Duration:</strong> Approx. {durationYears} more years
  //         </p>
  
  //         <p style={{ ...paragraphStyle, fontStyle: "italic", color: "#555" }}>
  //           Note: Shani Sade Sathi is a transformative period. Embrace the journey
  //           with patience and wisdom.
  //         </p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div style={cardStyle}>
  //         <div style={headingStyle}>
  //           🪔 Shani Sade Sathi Report for {data.name}
  //         </div>
  
  //         <p style={paragraphStyle}>📅 <strong>Date:</strong> {data.dateOfBirth}</p>
  //         <p style={paragraphStyle}>⏰ <strong>Time:</strong> {data.timeOfBirth}</p>
  //         <p style={paragraphStyle}>📍 <strong>Place:</strong> {data.placeOfBirth}</p>
  
  //         <div style={sectionTitleStyle}>✅ Result:</div>
  //         <p style={paragraphStyle}>
  //           You are <strong>not currently under</strong> Shani Sade Sathi.
  //         </p>
  
  //         <div style={sectionTitleStyle}>🌟 Current Benefits:</div>
  //         <ul style={listStyle}>
  //           <li>Stable phase in life</li>
  //           <li>Favorable for new beginnings</li>
  //           <li>Supportive for career and relationships</li>
  //           <li>Positive outcomes in spiritual practices</li>
  //         </ul>
  
  //         <p style={paragraphStyle}>
  //           🔮 <strong>Next Sade Sathi may begin in:</strong> {upcomingYears} years
  //         </p>
  
  //         <div style={sectionTitleStyle}>📌 Recommendations:</div>
  //         <ul style={listStyle}>
  //           <li>Use this time to build foundations</li>
  //           <li>Strengthen spiritual disciplines</li>
  //           <li>Support others in their hard times</li>
  //           <li>Prepare mentally for future challenges</li>
  //         </ul>
  
  //         <div style={sectionTitleStyle}>🔆 Saturn Remedies:</div>
  //         <ul style={listStyle}>
  //           <li>Saturday fasting (if health permits)</li>
  //           <li>Charity and service to others</li>
  //           <li>Live honestly and ethically</li>
  //           <li>Respect elders and mentors</li>
  //         </ul>
  
  //         <p style={{ ...paragraphStyle, fontStyle: "italic", color: "#555" }}>
  //           Note: Even outside Sade Sathi, Saturn influences karma. Stay
  //           disciplined and spiritual.
  //         </p>
  //       </div>
  //     );
  //   }
  // };

const generateShaniSadeReport = async (data: typeof formData): Promise<JSX.Element> => {
  try {
    const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // stored in Vercel
});

    // Call ChatGPT for real Sade Sati calculation
    const prompt = `
      Given the following birth details:
      Name: ${data.name}
      Date of Birth: ${data.dateOfBirth}
      Time of Birth: ${data.timeOfBirth}
      Place of Birth: ${data.placeOfBirth}

      Determine:
      1. Whether the person is currently under Shani Sade Sati.
      2. If yes, the current phase (First, Second, Third).
      3. Approximate remaining duration in years.
      4. If not under Sade Sati, approximate years until next occurrence.

      Return JSON in this format:
      {
        "isUnderSadeSati": boolean,
        "phase": "First Phase" | "Second Phase" | "Third Phase" | null,
        "durationYears": number | null,
        "upcomingYears": number | null
      }
    `;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    });

    const rawContent = response.choices[0]?.message?.content ?? "{}";
    const cleaned = rawContent.replace(/```json|```/g, "").trim();
    const { isUnderSadeSati, phase, durationYears, upcomingYears } = JSON.parse(cleaned);

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

    const renderPhaseDetails = () => {
      switch (phase) {
        case "First Phase":
          return (
            <>
              <li>Saturn in 12th from Moon – emotional stress, isolation tendencies</li>
              <li>Possible relocation or change in residence</li>
              <li>Health of elders may need attention</li>
            </>
          );
        case "Second Phase":
          return (
            <>
              <li>Saturn over Moon – peak karmic challenges</li>
              <li>High emotional and mental strain</li>
              <li>Career obstacles and financial slowdowns</li>
              <li>Tests of patience and emotional endurance</li>
            </>
          );
        case "Third Phase":
          return (
            <>
              <li>Saturn in 2nd from Moon – financial restructuring</li>
              <li>Gradual end of karmic challenges</li>
              <li>Improved family stability and emotional clarity</li>
            </>
          );
        default:
          return null;
      }
    };

    if (isUnderSadeSati) {
      return (
        <div style={cardStyle}>
          <div style={headingStyle}>🪔 Shani Sade Sati Report for {data.name}</div>
          <p style={paragraphStyle}>📅 <strong>Date:</strong> {data.dateOfBirth}</p>
          <p style={paragraphStyle}>⏰ <strong>Time:</strong> {data.timeOfBirth}</p>
          <p style={paragraphStyle}>📍 <strong>Place:</strong> {data.placeOfBirth}</p>

          <div style={sectionTitleStyle}>📉 Status:</div>
          <p style={paragraphStyle}>You are currently experiencing <strong>Shani Sade Sati</strong>.</p>

          <div style={sectionTitleStyle}>🔄 Current Phase:</div>
          <p style={paragraphStyle}><strong>{phase}</strong></p>

          <div style={sectionTitleStyle}>📌 Phase-Specific Effects:</div>
          <ul style={listStyle}>{renderPhaseDetails()}</ul>

          <p style={paragraphStyle}>🕒 <strong>Duration:</strong> Approx. {durationYears} more years</p>
        </div>
      );
    } else {
      return (
        <div style={cardStyle}>
          <div style={headingStyle}>🪔 Shani Sade Sati Report for {data.name}</div>
          <p style={paragraphStyle}>📅 <strong>Date:</strong> {data.dateOfBirth}</p>
          <p style={paragraphStyle}>⏰ <strong>Time:</strong> {data.timeOfBirth}</p>
          <p style={paragraphStyle}>📍 <strong>Place:</strong> {data.placeOfBirth}</p>

          <div style={sectionTitleStyle}>✅ Result:</div>
          <p style={paragraphStyle}>You are <strong>not currently under</strong> Shani Sade Sati.</p>

          <p style={paragraphStyle}>🔮 <strong>Next Sade Sati may begin in:</strong> {upcomingYears} years</p>
        </div>
      );
    }
  } catch (error) {
    console.error("Error generating Sade Sati report:", error);
    return <p>⚠️ Could not generate report. Please try again later.</p>;
  }
};
  
  const FaqSection = () => {
    const faqs = [
      {
        question: "What is Shani Sade Sathi?",
        answer:
          "Shani Sade Sathi is a 7.5-year transit of Saturn through the 12th, 1st, and 2nd houses from your Moon sign. It is often a challenging period meant to teach discipline, karma, and endurance.",
      },
      {
        question: "Is Shani Sade Sathi always negative?",
        answer:
          "No, while it is commonly feared, its effects depend on your birth chart. For some, it can bring major transformations, spiritual growth, and maturity. The hardships are meant to shape and strengthen the individual.",
      },
      {
        question: "How can I reduce the negative impact of Shani Sade Sathi?",
        answer:
          "You can reduce its impact through remedies like chanting the Hanuman Chalisa, wearing recommended gemstones, engaging in disciplined behavior, and serving others. Consulting a Vedic astrologer can help tailor specific practices to your chart.",
      },
      {
        question: "Does everyone go through Shani Sade Sathi?",
        answer:
          "Yes, everyone experiences Sade Sathi at least once or twice in a lifetime, depending on Saturn's transit and their Moon sign. The timing and effects vary based on individual karma and planetary strength.",
      },
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
      const report = await generateShaniSadeReport(formData);
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
            <Clock size={48} style={{ color: '#8f6eeb', margin: '0 auto 20px' }} />
            <h1>{t('shaniSadeTitle')}</h1>
            <p>{t('shaniSadeDesc')}</p>
          </div>

          <div className="divider"></div>

          <div className="content-section">
            <div className="content-left">
              <h2>{t('aboutShaniSade')}</h2>
              <p>{t('shaniSadeExplanation')}</p>
              
              <h3 style={{ color: '#2d3748', fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>
                {t('howShaniSadeCalculated')}
              </h3>
              <p>{t('shaniSadeCalculation')}</p>

              <h3 style={{ color: '#2d3748', fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>
                {t('shaniSadeUse')}
              </h3>
              <p>{t('shaniSadeUseAnswer')}</p>

              <h3 style={{ color: '#2d3748', fontSize: '20px', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>
                {t('faq')}
              </h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#4a5568', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  {t('faqShani1')}
                </h4>
                <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6' }}>
                  {t('faqShani1Answer')}
                </p>
              </div>
              <div>
                <h4 style={{ color: '#4a5568', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  {t('faqShani2')}
                </h4>
                <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6' }}>
                  {t('faqShani2Answer')}
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

export default ShaniSadeSathi;