export const STRAPI_API_ENDPOINTS = {
  ARTICLES: 'ideas',
  AUDIOVISUAL_PRODUCTION: 'audiovisual-productions'
};

export const CATEGORIES = {
  ARTICLES: 'Articles',
  AUDIOVISUAL_PRODUCTION: 'Production Audiovisuelle',
  EVENTS: 'Évènements'
};

export const SUBCATEGORIES = {
  CRAZY: 'Sommes-nous tous fous ?',
  CULTURE: 'Culture',
  DIGITAL: 'Numérique',
  EXTERNAL_CONTRIBUTIONS: 'Contributions externes',
  FRENCH_PORTRAITS: 'Portraits de Français',
  IDEAS: 'Idées',
  INTERVIEWS: 'Interviews',
  NEWS: 'Actualités',
  SOCIETY: 'Société'
};

export const FORMATTED_SUBCATEGORY_NAME = {
  CRAZY: 'sommes-nous-tous-fous',
  CULTURE: 'culture',
  DIGITAL: 'numerique',
  EXTERNAL_CONTRIBUTIONS: 'contributions-externes',
  FRENCH_PORTRAITS: 'portraits-de-francais',
  IDEAS: 'idees',
  INTERVIEWS: 'interviews',
  NEWS: 'actualites',
  SOCIETY: 'Societe'
} as const;

export type FormattedSubcategoryName = typeof FORMATTED_SUBCATEGORY_NAME[keyof typeof FORMATTED_SUBCATEGORY_NAME];
