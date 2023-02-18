import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "welcome": "Welcome Back",
      "Login to your account": "Login to your account",
      "Phone Number": "Phone Number",
      "Password": "Password",
      "Forgot Password": "Forgot Password",
      "Don't have an account": "Don't have an account",
      "Login": "Login",
      "Register": "Register"
    },
  },
  hi: {
    translation: {
      "welcome": "स्वागत है",
      "Login to your account": "अपने अकाउंट में लॉग इन करें",
      "Phone Number": "फ़ोन नंबर",
      "Password": "पासवर्ड",
      "Forgot Password": "पासवर्ड भूल गए",
      "Don't have an account": "खाता नहीं है",
      "Login": "लॉग इन",
        "Register": "साइन अप"
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
