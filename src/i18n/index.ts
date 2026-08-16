import PL from '../../locales/PL/translation.json';
import EN from '../../locales/EN/translation.json';
import DE from '../../locales/DE/translation.json';
import IT from '../../locales/IT/translation.json';

export type Lang = 'PL' | 'EN' | 'DE' | 'IT';
export const translations: Record<Lang, Record<string, any>> = { PL, EN, DE, IT };
export const defaultLang: Lang = 'PL';
