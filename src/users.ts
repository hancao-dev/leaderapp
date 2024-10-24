export interface User {
  id: number;
  name: string;
  predictedChampion: string;
  countryCode: string;  // ISO 2-letter country code for flag images
  points: number;
  rankChange?: 'up' | 'down' | 'same';
}

export const users: User[] = [
  {
    id: 30,
    name: "Fatima Al-Mansoori",
    predictedChampion: "United Arab Emirates",
    countryCode: "ae",  // Correct ISO 2-letter code for UAE
    points: 21,
    rankChange: 'up',
  },
  {
    id: 1,
    name: "Wade Warren",
    predictedChampion: "Argentina",
    countryCode: "ar",  // Correct ISO 2-letter code for Argentina
    points: 61,
    rankChange: 'up',
  },
  {
    id: 2,
    name: "Dianne Russell",
    predictedChampion: "France",
    countryCode: "fr",  // Correct ISO 2-letter code for France
    points: 54,
    rankChange: 'down',
  },
  {
    id: 3,
    name: "Esther Howard",
    predictedChampion: "Brazil",
    countryCode: "br",  // Correct ISO 2-letter code for Brazil
    points: 52,
    rankChange: 'same',
  },
  {
    id: 4,
    name: "Robert Fox",
    predictedChampion: "Spain",
    countryCode: "es",  // Correct ISO 2-letter code for Spain
    points: 49,
    rankChange: 'same',
  },
  {
    id: 5,
    name: "Jan Kowalski",
    predictedChampion: "Poland",
    countryCode: "pl",  // Correct ISO 2-letter code for Poland
    points: 49,
    rankChange: 'up',
  },
  {
    id: 6,
    name: "Angela Matthews",
    predictedChampion: "Germany",
    countryCode: "de",  // Correct ISO 2-letter code for Germany
    points: 47,
    rankChange: 'up',
  },
  {
    id: 7,
    name: "Markus Müller",
    predictedChampion: "Germany",
    countryCode: "de",  // Correct ISO 2-letter code for Germany
    points: 45,
    rankChange: 'same',
  },
  {
    id: 8,
    name: "Samuel Green",
    predictedChampion: "England",
    countryCode: "gb",  // ISO code for the United Kingdom (England uses 'gb')
    points: 43,
    rankChange: 'down',
  },
  {
    id: 9,
    name: "John Doe",
    predictedChampion: "USA",
    countryCode: "us",  // Correct ISO 2-letter code for USA
    points: 42,
    rankChange: 'up',
  },
  {
    id: 10,
    name: "Emily Smith",
    predictedChampion: "Netherlands",
    countryCode: "nl",  // Correct ISO 2-letter code for Netherlands
    points: 41,
    rankChange: 'same',
  },
  {
    id: 11,
    name: "Hiroshi Tanaka",
    predictedChampion: "Japan",
    countryCode: "jp",  // Correct ISO 2-letter code for Japan
    points: 40,
    rankChange: 'up',
  },
  {
    id: 12,
    name: "Maria Garcia",
    predictedChampion: "Spain",
    countryCode: "es",  // Correct ISO 2-letter code for Spain
    points: 39,
    rankChange: 'down',
  },
  {
    id: 13,
    name: "Alejandro Pérez",
    predictedChampion: "Argentina",
    countryCode: "ar",  // Correct ISO 2-letter code for Argentina
    points: 38,
    rankChange: 'same',
  },
  {
    id: 14,
    name: "Sophia Zhang",
    predictedChampion: "China",
    countryCode: "cn",  // Correct ISO 2-letter code for China
    points: 37,
    rankChange: 'up',
  },
  {
    id: 15,
    name: "Carlos Hernandez",
    predictedChampion: "Brazil",
    countryCode: "br",  // Correct ISO 2-letter code for Brazil
    points: 36,
    rankChange: 'down',
  },
  {
    id: 16,
    name: "Anna Ivanova",
    predictedChampion: "Russia",
    countryCode: "ru",  // Correct ISO 2-letter code for Russia
    points: 35,
    rankChange: 'same',
  },
  {
    id: 17,
    name: "David Brown",
    predictedChampion: "Australia",
    countryCode: "au",  // Correct ISO 2-letter code for Australia
    points: 34,
    rankChange: 'same',
  },
  {
    id: 18,
    name: "Isabella Rossi",
    predictedChampion: "Italy",
    countryCode: "it",  // Correct ISO 2-letter code for Italy
    points: 33,
    rankChange: 'up',
  },
  {
    id: 19,
    name: "Yusuf Ahmed",
    predictedChampion: "Egypt",
    countryCode: "eg",  // Correct ISO 2-letter code for Egypt
    points: 32,
    rankChange: 'down',
  },
  {
    id: 20,
    name: "Lina Johansson",
    predictedChampion: "Sweden",
    countryCode: "se",  // Correct ISO 2-letter code for Sweden
    points: 31,
    rankChange: 'same',
  },
  {
    id: 21,
    name: "Omar Hassan",
    predictedChampion: "Morocco",
    countryCode: "ma",  // Correct ISO 2-letter code for Morocco
    points: 30,
    rankChange: 'same',
  },
  {
    id: 22,
    name: "Victor Silva",
    predictedChampion: "Portugal",
    countryCode: "pt",  // Correct ISO 2-letter code for Portugal
    points: 29,
    rankChange: 'up',
  },
  {
    id: 23,
    name: "Eve Müller",
    predictedChampion: "Germany",
    countryCode: "de",  // Correct ISO 2-letter code for Germany
    points: 28,
    rankChange: 'down',
  },
  {
    id: 24,
    name: "Chloe Dubois",
    predictedChampion: "France",
    countryCode: "fr",  // Correct ISO 2-letter code for France
    points: 27,
    rankChange: 'up',
  },
  {
    id: 25,
    name: "Igor Petrov",
    predictedChampion: "Russia",
    countryCode: "ru",  // Correct ISO 2-letter code for Russia
    points: 26,
    rankChange: 'same',
  },
  {
    id: 26,
    name: "Mohammed Khan",
    predictedChampion: "Qatar",
    countryCode: "qa",  // Correct ISO 2-letter code for Qatar
    points: 25,
    rankChange: 'same',
  },
  {
    id: 27,
    name: "Grace Thompson",
    predictedChampion: "Canada",
    countryCode: "ca",  // Correct ISO 2-letter code for Canada
    points: 24,
    rankChange: 'down',
  },
  {
    id: 28,
    name: "Miguel Ramirez",
    predictedChampion: "Mexico",
    countryCode: "mx",  // Correct ISO 2-letter code for Mexico
    points: 23,
    rankChange: 'same',
  },
  {
    id: 29,
    name: "Li Wei",
    predictedChampion: "China",
    countryCode: "cn",  // Correct ISO 2-letter code for China
    points: 22,
    rankChange: 'up',
  },
  
];
