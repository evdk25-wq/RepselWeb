import { getLandingCopy as selectCopy } from '../../domain/landing/content.js';

export function getLandingCopy(locale) {
  return selectCopy(locale);
}
