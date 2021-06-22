import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr';

i18n
    .use(initReactI18next)
    .init({
        resources: { fr },
        lng: 'fr',
        fallbackLng: 'fr',
        debug: true,
        interpolation: { escapeValue: false },
    }).then(() => {});

export default i18n;
