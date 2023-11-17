import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      "NavBar": "NavBar",
      "Home":"Home",
      "Features":"Features",
      "Pricing":"Pricing",
    }
  },
  hi: {
    translation: {
      "NavBar": "नेवबार",
      "Home":"घर",
      "Features":"विशेषताएं",
      "Pricing":"मूल्य निर्धारण",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;