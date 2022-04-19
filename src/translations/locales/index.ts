import { ITranslations } from '../namepaces';
import { Locale } from '../types';

import en from './en';
import fr from './fr';

const locales: Record<Locale, ITranslations> = {
  fr,
  en,
};

export default locales;