import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import { Heart, Loader2 } from "lucide-react";
import OpenAI from "openai"; // Install: npm install openai

const MangalDosh: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });
  const [result, setResult] = useState<JSX.Element | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { t } = useLanguage();

  const generateMangalDoshReport = async (data: typeof formData) => {
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY, // replace with your real key or import.meta.env.VITE_OPENAI_API_KEY
      dangerouslyAllowBrowser: true, // for client-side usage
    });

    const prompt = `
You are a Vedic astrologer. 
Given the following birth details, check if the person has Mangal Dosh.
Return only valid JSON in the format:
{
  "isManglik": true/false,
  "description": "detailed explanation"
}

Full Name: ${data.name}
Gender: ${data.gender}
Date of Birth: ${data.dateOfBirth}
Time of Birth: ${data.timeOfBirth}
Place of Birth: ${data.placeOfBirth}
  `;

    let isManglik: boolean | null = null;
    let description = "";

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
      });

      // Extract content from OpenAI-like response
      let content = completion.choices?.[0]?.message?.content?.trim() || "";

      // Step 1: Remove the triple backticks and optional language tag (```json)
      content = content.replace(/```json|```/g, "").trim();

      // Try to parse JSON directly
      try {
        const parsed = JSON.parse(content);
        isManglik = parsed.isManglik ?? null;
        description = parsed.description ?? "";
      } catch {
        // If parsing fails, fall back to plain text
        isManglik = null;
        description = content;
      }
    } catch (err) {
      console.error("Error generating report:", err);
      isManglik = null;
      description = "Could not generate report.";
    }

    // Styles
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
    const paragraphStyle: React.CSSProperties = {
      margin: "8px 0",
    };
    const listStyle: React.CSSProperties = {
      marginLeft: "20px",
      paddingLeft: "0",
    };
    const sectionTitleStyle: React.CSSProperties = {
      fontWeight: 600,
      color: "#4b0082",
      marginTop: "20px",
      marginBottom: "8px",
      fontSize: "16px",
    };

    if (isManglik === true) {
      return (
        <div style={cardStyle}>
          <div style={headingStyle}>🪔 Mangal Dosh Report for {data.name}</div>
          <p style={paragraphStyle}>{description}</p>
          <div style={sectionTitleStyle}>⚠️ Effects:</div>
          <ul style={listStyle}>
            <li>Delays in marriage</li>
            <li>Conflicts in relationships</li>
            <li>Need for careful partner selection</li>
            <li>Importance of compatibility matching</li>
          </ul>
          <div style={sectionTitleStyle}>🛠️ Remedies:</div>
          <ul style={listStyle}>
            <li>Recite Hanuman Chalisa daily</li>
            <li>Fast on Tuesdays</li>
            <li>Donate red lentils and jaggery</li>
            <li>Wear red coral gemstone (with consultation)</li>
            <li>Perform Mangal Shanti Puja</li>
          </ul>
        </div>
      );
    } else if (isManglik === false) {
      return (
        <div style={cardStyle}>
          <div style={headingStyle}>🪔 Mangal Dosh Report for {data.name}</div>
          <p style={paragraphStyle}>{description}</p>
          <div style={sectionTitleStyle}>🌟 Benefits:</div>
          <ul style={listStyle}>
            <li>Smooth marriage prospects</li>
            <li>Harmonious relationships</li>
            <li>Good compatibility with partners</li>
          </ul>
        </div>
      );
    } else {
      // Unknown / parsing error
      return (
        <div style={cardStyle}>
          <div style={headingStyle}>🪔 Mangal Dosh Report for {data.name}</div>
          <p style={paragraphStyle}>{description}</p>
        </div>
      );
    }
  };

  const FaqSection = () => {
    const faqs = [
      {
        question: "What happens if you have Mangal Dosh?",
        answer:
          "Having Mangal Dosh can affect marriage timing and create relationship challenges. However, with proper remedies and compatible partner selection, you can lead a happy married life. Additionally, many successful people have Mangal Dosh and thrive in their personal relationships.",
      },
      {
        question: "At what age does Mangal Dosh end?",
        answer:
          "Mangal Dosh effects typically reduce after age 28 for most people, though this varies by individual chart. However, some placements may have lifelong influence requiring ongoing remedy practices. Moreover, planetary periods and transits can modify effects throughout your lifetime.",
      },
      {
        question: "Can Mangal Dosh be removed?",
        answer:
          "While Mangal Dosh cannot be completely removed from your birth chart, its negative effects can be significantly reduced through proper remedies. Additionally, certain planetary combinations and life circumstances can naturally neutralize many problematic influences over time.",
      },
      {
        question: "Does Mangal Dosh affect marriage?",
        answer:
          "Yes, Mangal Dosh can create delays, compatibility issues, or conflicts in marriage. However, proper matching with suitable partners and appropriate remedies help ensure successful relationships. Moreover, understanding your dosha helps you prepare better for married life challenges.",
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
      <div className="container" style={containerStyle}>
        <h2
          style={{
            borderBottom: "3px solid #a084e8",
            paddingBottom: "8px",
            marginBottom: "20px",
            fontSize: "20px",
            color: "#2d2d2d",
          }}
        >
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
    setError("");

    if (
      !formData.name ||
      !formData.gender ||
      !formData.dateOfBirth ||
      !formData.timeOfBirth ||
      !formData.placeOfBirth
    ) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const report = await generateMangalDoshReport(formData);
      setResult(report);
    } catch (err) {
      setError("Error generating report. Please try again.");
      console.error("Error generating report:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="page-header">
            <Heart
              size={48}
              style={{ color: "#8f6eeb", margin: "0 auto 20px" }}
            />
            <h1>{t("mangalDoshTitle")}</h1>
            <p>{t("mangalDoshDesc")}</p>
          </div>

          <div className="divider"></div>

          <div className="content-section">
            <div className="content-left">
              <h2>{t("aboutMangalDosh")}</h2>
              <p>{t("mangalDoshExplanation")}</p>

              <h3
                style={{
                  color: "#2d3748",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                {t("howMangalDoshCalculated")}
              </h3>
              <p>{t("mangalDoshCalculation")}</p>

              <h3
                style={{
                  color: "#2d3748",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                {t("mangalDoshUse")}
              </h3>
              <p>{t("mangalDoshUseAnswer")}</p>

              <h3
                style={{
                  color: "#2d3748",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                {t("faq")}
              </h3>
              <div style={{ marginBottom: "20px" }}>
                <h4
                  style={{
                    color: "#4a5568",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {t("faqMangal1")}
                </h4>
                <p
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {t("faqMangal1Answer")}
                </p>
              </div>
              <div>
                <h4
                  style={{
                    color: "#4a5568",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {t("faqMangal2")}
                </h4>
                <p
                  style={{
                    color: "#718096",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {t("faqMangal2Answer")}
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

          {/* {result && (
            <div className="report-container">
              <div className="report-header">
                <h2>{t("result")}</h2>
              </div>
              <div className="report-content">{result}</div>
            </div>
          )} */}
        </div>
        <FaqSection />
      </div>
    </>
  );
};

export default MangalDosh;
