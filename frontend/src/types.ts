export interface User {
    id: number;
    name: string;
    predictedChampion: string;
    countryCode: string;  // ISO 2-letter country code (e.g., 'ar' for Argentina, 'fr' for France)
    points: number;
    rankChange?: 'up' | 'down' | 'same';
  }