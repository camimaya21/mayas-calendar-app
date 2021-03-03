import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend) // load translation using http -> see /public/locales
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
