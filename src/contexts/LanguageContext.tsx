import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Auth
    login: 'Login',
    register: 'Register',
    phone: 'Phone Number',
    otp: 'OTP',
    name: 'Full Name',
    enterPhone: 'Enter your phone number',
    enterOtp: 'Enter OTP (use 1234 for demo)',
    enterName: 'Enter your full name',
    loginBtn: 'Login',
    registerBtn: 'Register',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    signUp: 'Sign up',
    signIn: 'Sign in',
    
    // Navigation
    home: 'Home',
    mangalDosh: 'Mangal Dosh',
    shaniSadeSathi: 'Shani Sade Sathi',
    ishtDevta: 'Isht Devta',
    logout: 'Logout',
    
    // Main Content
    welcome: 'Welcome to 91Astro',
    welcomeDesc: 'Discover the hidden meanings in numbers and unlock your destiny through ancient numerology wisdom.',
    
    // Calculator Titles
    mangalDoshTitle: 'Mangal Dosh Calculator',
    mangalDoshDesc: 'Check if you have Mangal Dosh in your horoscope and get remedies',
    shaniSadeTitle: 'Shani Sade Sathi Calculator',
    shaniSadeDesc: 'Find out if you are under Shani Sade Sathi period and its effects',
    ishtDevtaTitle: 'Isht Devta Calculator',
    ishtDevtaDesc: 'Discover your personal deity based on your birth chart',
    
    // Common Form Fields
    name: 'Full Name',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    dateOfBirth: 'Date of Birth',
    timeOfBirth: 'Time of Birth',
    placeOfBirth: 'Place of Birth',
    calculate: 'Calculate',
    result: 'Result',
    
    // Mangal Dosh
    aboutMangalDosh: 'About Mangal Dosh',
    mangalDoshExplanation: 'Mangal Dosh, also known as Manglik Dosh or Kuja Dosh, is an astrological condition that occurs when Mars (Mangal) is placed in certain houses of the birth chart. This condition is believed to affect marriage and relationships.',
    howMangalDoshCalculated: 'How is Mangal Dosh Calculated?',
    mangalDoshCalculation: 'Mangal Dosh is calculated based on the position of Mars in the birth chart. If Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house from the Ascendant, Moon, or Venus, it creates Mangal Dosh.',
    mangalDoshUse: 'What is the use of Mangal Dosh Calculator?',
    mangalDoshUseAnswer: 'The Mangal Dosh calculator helps determine if a person has this astrological condition, which is crucial for marriage compatibility and understanding potential challenges in relationships.',
    
    // Shani Sade Sathi
    aboutShaniSade: 'About Shani Sade Sathi',
    shaniSadeExplanation: 'Shani Sade Sathi is a 7.5-year period when Saturn transits through the 12th, 1st, and 2nd houses from the natal Moon. This period is considered challenging and transformative in Vedic astrology.',
    howShaniSadeCalculated: 'How is Shani Sade Sathi Calculated?',
    shaniSadeCalculation: 'Shani Sade Sathi is calculated based on the current position of Saturn in relation to your natal Moon sign. The period begins when Saturn enters the 12th house from your Moon sign and ends when it exits the 2nd house.',
    shaniSadeUse: 'What is the use of Shani Sade Sathi Calculator?',
    shaniSadeUseAnswer: 'This calculator helps you understand if you are currently under Shani Sade Sathi influence, allowing you to prepare for challenges and perform appropriate remedies.',
    
    // Isht Devta
    aboutIshtDevta: 'About Isht Devta',
    ishtDevtaExplanation: 'Isht Devta refers to your personal deity or the divine form that is most suitable for your spiritual growth. It is determined based on the strongest planet in your birth chart and provides guidance for worship and spiritual practices.',
    howIshtDevtaCalculated: 'How is Isht Devta Calculated?',
    ishtDevtaCalculation: 'Isht Devta is calculated by analyzing the strongest planet in your birth chart, considering factors like planetary strength, dignity, and position. Each planet corresponds to a specific deity.',
    ishtDevtaUse: 'What is the use of Isht Devta Calculator?',
    ishtDevtaUseAnswer: 'Knowing your Isht Devta helps you focus your spiritual practices, choose appropriate mantras, and connect with the divine energy that resonates most with your soul.',
    
    // FAQ
    faq: 'Frequently Asked Questions',
    faqMangal1: 'Can Mangal Dosh be cancelled?',
    faqMangal1Answer: 'Yes, Mangal Dosh can be cancelled or reduced through various astrological combinations, remedies, and rituals.',
    faqMangal2: 'Should Manglik marry only Manglik?',
    faqMangal2Answer: 'While traditionally recommended, it is not mandatory. Proper matching and remedies can help non-Manglik marriages succeed.',
    
    faqShani1: 'Is Shani Sade Sathi always bad?',
    faqShani1Answer: 'Not necessarily. While challenging, Shani Sade Sathi can bring important life lessons, spiritual growth, and positive transformations.',
    faqShani2: 'How to reduce Shani Sade Sathi effects?',
    faqShani2Answer: 'Regular prayers to Lord Shani, charity, helping the needy, and following dharmic principles can help reduce negative effects.',
    
    faqIsht1: 'Can Isht Devta change over time?',
    faqIsht1Answer: 'Your primary Isht Devta remains the same, but you may connect with different deities at different life stages based on your spiritual needs.',
    faqIsht2: 'How to worship Isht Devta?',
    faqIsht2Answer: 'Worship through specific mantras, prayers, offerings, and meditation practices associated with your Isht Devta for maximum spiritual benefit.',
    
    // Form
    getReading: 'Get Your Reading',
    fullName: 'Full Name',
    dateOfBirth: 'Date of Birth',
    language: 'Language',
    english: 'English',
    hindi: 'Hindi',
    generateReport: 'Generate Report',
    downloadPdf: 'Download PDF',
    
    // Report
    yourReport: 'Your Numerology Report',
    generating: 'Generating your personalized report...',
    
    // Errors
    fillAllFields: 'Please fill all fields',
    invalidDate: 'Please enter a valid date',
    errorGenerating: 'Error generating report. Please try again.',
  },
  hi: {
    // Auth
    login: 'लॉगिन',
    register: 'रजिस्टर',
    phone: 'फोन नंबर',
    otp: 'ओटीपी',
    name: 'पूरा नाम',
    enterPhone: 'अपना फोन नंबर दर्ज करें',
    enterOtp: 'ओटीपी दर्ज करें (डेमो के लिए 1234 का उपयोग करें)',
    enterName: 'अपना पूरा नाम दर्ज करें',
    loginBtn: 'लॉगिन करें',
    registerBtn: 'रजिस्टर करें',
    dontHaveAccount: 'खाता नहीं है?',
    alreadyHaveAccount: 'पहले से खाता है?',
    signUp: 'साइन अप करें',
    signIn: 'साइन इन करें',
    
    // Navigation
    home: 'होम',
    mangalDosh: 'मंगल दोष',
    shaniSadeSathi: 'शनि साढ़े साती',
    ishtDevta: 'इष्ट देवता',
    logout: 'लॉगआउट',
    
    // Main Content
    welcome: 'ज्योतिष अंकशास्त्र में आपका स्वागत है',
    welcomeDesc: 'संख्याओं के छिपे अर्थों की खोज करें और प्राचीन अंकशास्त्र ज्ञान के माध्यम से अपनी नियति को खोलें।',
    
    // Calculator Titles
    mangalDoshTitle: 'मंगल दोष कैलकुलेटर',
    mangalDoshDesc: 'जांचें कि क्या आपकी कुंडली में मंगल दोष है और उपाय प्राप्त करें',
    shaniSadeTitle: 'शनि साढ़े साती कैलकुलेटर',
    shaniSadeDesc: 'पता करें कि क्या आप शनि साढ़े साती की अवधि में हैं और इसके प्रभाव',
    ishtDevtaTitle: 'इष्ट देवता कैलकुलेटर',
    ishtDevtaDesc: 'अपनी जन्म कुंडली के आधार पर अपने व्यक्तिगत देवता की खोज करें',
    
    // Common Form Fields
    name: 'पूरा नाम',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    dateOfBirth: 'जन्म तिथि',
    timeOfBirth: 'जन्म समय',
    placeOfBirth: 'जन्म स्थान',
    calculate: 'गणना करें',
    result: 'परिणाम',
    
    // Mangal Dosh
    aboutMangalDosh: 'मंगल दोष के बारे में',
    mangalDoshExplanation: 'मंगल दोष, जिसे मांगलिक दोष या कुज दोष भी कहा जाता है, एक ज्योतिषीय स्थिति है जो तब होती है जब मंगल ग्रह जन्म कुंडली के कुछ विशेष घरों में स्थित होता है। यह स्थिति विवाह और रिश्तों को प्रभावित करती है।',
    howMangalDoshCalculated: 'मंगल दोष की गणना कैसे की जाती है?',
    mangalDoshCalculation: 'मंगल दोष की गणना जन्म कुंडली में मंगल की स्थिति के आधार पर की जाती है। यदि मंगल लग्न, चंद्र या शुक्र से 1, 2, 4, 7, 8, या 12वें घर में स्थित है, तो मंगल दोष बनता है।',
    mangalDoshUse: 'मंगल दोष कैलकुलेटर का क्या उपयोग है?',
    mangalDoshUseAnswer: 'मंगल दोष कैलकुलेटर यह निर्धारित करने में मदद करता है कि क्या किसी व्यक्ति में यह ज्योतिषीय स्थिति है, जो विवाह की अनुकूलता और रिश्तों में संभावित चुनौतियों को समझने के लिए महत्वपूर्ण है।',
    
    // Shani Sade Sathi
    aboutShaniSade: 'शनि साढ़े साती के बारे में',
    shaniSadeExplanation: 'शनि साढ़े साती 7.5 साल की अवधि है जब शनि ग्रह जन्म चंद्र से 12वें, 1ले और 2रे घर से गुजरता है। वैदिक ज्योतिष में इस अवधि को चुनौतीपूर्ण और परिवर्तनकारी माना जाता है।',
    howShaniSadeCalculated: 'शनि साढ़े साती की गणना कैसे की जाती है?',
    shaniSadeCalculation: 'शनि साढ़े साती की गणना आपके जन्म चंद्र राशि के संबंध में शनि की वर्तमान स्थिति के आधार पर की जाती है। यह अवधि तब शुरू होती है जब शनि आपकी चंद्र राशि से 12वें घर में प्रवेश करता है।',
    shaniSadeUse: 'शनि साढ़े साती कैलकुलेटर का क्या उपयोग है?',
    shaniSadeUseAnswer: 'यह कैलकुलेटर आपको यह समझने में मदद करता है कि क्या आप वर्तमान में शनि साढ़े साती के प्रभाव में हैं, जिससे आप चुनौतियों के लिए तैयार हो सकें और उचित उपाय कर सकें।',
    
    // Isht Devta
    aboutIshtDevta: 'इष्ट देवता के बारे में',
    ishtDevtaExplanation: 'इष्ट देवता आपके व्यक्तिगत देवता या उस दिव्य रूप को संदर्भित करता है जो आपकी आध्यात्मिक वृद्धि के लिए सबसे उपयुक्त है। यह आपकी जन्म कुंडली के सबसे मजबूत ग्रह के आधार पर निर्धारित होता है।',
    howIshtDevtaCalculated: 'इष्ट देवता की गणना कैसे की जाती है?',
    ishtDevtaCalculation: 'इष्ट देवता की गणना आपकी जन्म कुंडली के सबसे मजबूत ग्रह का विश्लेषण करके की जाती है, जिसमें ग्रहों की शक्ति, गरिमा और स्थिति जैसे कारकों पर विचार किया जाता है।',
    ishtDevtaUse: 'इष्ट देवता कैलकुलेटर का क्या उपयोग है?',
    ishtDevtaUseAnswer: 'अपने इष्ट देवता को जानना आपकी आध्यात्मिक प्रथाओं को केंद्रित करने, उपयुक्त मंत्र चुनने और उस दिव्य ऊर्जा से जुड़ने में मदद करता है जो आपकी आत्मा के साथ सबसे अधिक मेल खाती है।',
    
    // FAQ
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    faqMangal1: 'क्या मंगल दोष को रद्द किया जा सकता है?',
    faqMangal1Answer: 'हां, मंगल दोष को विभिन्न ज्योतिषीय संयोजनों, उपायों और अनुष्ठानों के माध्यम से रद्द या कम किया जा सकता है।',
    faqMangal2: 'क्या मांगलिक को केवल मांगलिक से ही शादी करनी चाहिए?',
    faqMangal2Answer: 'पारंपरिक रूप से सुझाया गया है, लेकिन यह अनिवार्य नहीं है। उचित मिलान और उपायों से गैर-मांगलिक विवाह भी सफल हो सकते हैं।',
    
    faqShani1: 'क्या शनि साढ़े साती हमेशा बुरी होती है?',
    faqShani1Answer: 'जरूरी नहीं। चुनौतीपूर्ण होने के बावजूद, शनि साढ़े साती महत्वपूर्ण जीवन सबक, आध्यात्मिक विकास और सकारात्मक परिवर्तन ला सकती है।',
    faqShani2: 'शनि साढ़े साती के प्रभावों को कैसे कम करें?',
    faqShani2Answer: 'भगवान शनि की नियमित प्रार्थना, दान, जरूरतमंदों की मदद और धार्मिक सिद्धांतों का पालन नकारात्मक प्रभावों को कम करने में मदद कर सकता है।',
    
    faqIsht1: 'क्या इष्ट देवता समय के साथ बदल सकते हैं?',
    faqIsht1Answer: 'आपके प्राथमिक इष्ट देवता वही रहते हैं, लेकिन आप अपनी आध्यात्मिक आवश्यकताओं के आधार पर जीवन के विभिन्न चरणों में अलग-अलग देवताओं से जुड़ सकते हैं।',
    faqIsht2: 'इष्ट देवता की पूजा कैसे करें?',
    faqIsht2Answer: 'अधिकतम आध्यात्मिक लाभ के लिए अपने इष्ट देवता से जुड़े विशिष्ट मंत्रों, प्रार्थनाओं, प्रसाद और ध्यान प्रथाओं के माध्यम से पूजा करें।',
    
    // Form
    getReading: 'अपनी रीडिंग प्राप्त करें',
    fullName: 'पूरा नाम',
    dateOfBirth: 'जन्म तिथि',
    language: 'भाषा',
    english: 'अंग्रेजी',
    hindi: 'हिंदी',
    generateReport: 'रिपोर्ट जेनरेट करें',
    downloadPdf: 'पीडीएफ डाउनलोड करें',
    
    // Report
    yourReport: 'आपकी अंकशास्त्र रिपोर्ट',
    generating: 'आपकी व्यक्तिगत रिपोर्ट जेनरेट की जा रही है...',
    
    // Errors
    fillAllFields: 'कृपया सभी फील्ड भरें',
    invalidDate: 'कृपया एक मान्य तिथि दर्ज करें',
    errorGenerating: 'रिपोर्ट जेनरेट करने में त्रुटि। कृपया पुनः प्रयास करें।',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const value = {
    language,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};