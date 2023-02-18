import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "complete your profile": "Complete Profile",
      "get started profile": "Get Started by Completing your Profile",
      "personal profile": "Personal Details",
      "allergies profile": "Allergies",
      "illnesses profile": "Chronic Illnesses",
      "history profile": "Family History",
      "vaccination profile": "Vaccination Records",
      "surgeries profile": "Previous Surgeries",
      "insurance profile": "Insurance Details",
      "emergency profile": "Emergency Contacts",
      "complete profile": "Complete",

      "namaste": "Namaste",
      "namaste bharti": "I am Bharti, your Personal Chat Assistant",
      "ask bharti": "Ask Bharti anything that will help you",
      "ask doubt": "Ask Bharti",

      "hi" : "Please Specify your Allergies",
    },
  },
  hi: {
    translation: {
      "complete your profile": "प्रोफ़ाइल पूरा करें",
      "get started profile": "प्रोफ़ाइल पूरा करके शुरू करें",
      "personal profile": "व्यक्तिगत विवरण",
      "allergies profile": "एलर्जी",
      "illnesses profile": "अस्थमा",
      "history profile": "परिवार का इतिहास",
      "vaccination profile": "टीकाकरण रिकॉर्ड",
      "surgeries profile": "पिछले सर्जरी",
      "insurance profile": "बीमा विवरण",
      "emergency profile": "आपातकालीन संपर्क",
      "complete profile": "पूरा करें",

      "namaste": "नमस्ते",
      "namaste bharti": "मैं भारती हूँ, आपका व्यक्तिगत चैट सहायक",
      "ask bharti": "भारती से जो भी पूछें जो आपकी मदद करेगा",
      "ask doubt": "भारती से पूछें",

      "hi" : "कृपया अपनी एलर्जी निर्दिष्ट करें",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
