export const books = [
  {
    author: 'Chinua Achebe',
    country: 'Nigeria',
    imageLink: 'https://images.randomhouse.com/cover/9780385667838',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
    pages: 209,
    title: 'Things Fall Apart',
    year: 1958,
  },
  {
    author: 'Jane Austen',
    country: 'United Kingdom',
    imageLink:
      'https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Pride_and_Prejudice',
    pages: 226,
    title: 'Pride and Prejudice',
    year: 1813,
  },
  {
    author: 'Dante Alighieri',
    country: 'Italy',
    imageLink:
      'https://images-na.ssl-images-amazon.com/images/I/91vybHeMSxL.jpg',
    language: 'Italian',
    link: 'https://en.wikipedia.org/wiki/Divine_Comedy',
    pages: 928,
    title: 'The Divine Comedy',
    year: 1315,
  },
];

export const getBooksPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ data: books }), 3000));
