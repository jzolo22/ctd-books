import { filterArrayByTerm } from './filterArrayByTerm';
import { books } from '../books';

describe('filterArrayByTerm', () => {
  const searchTerm = 'a';

  test('will return an array of correctly filtered values', () => {
    expect(filterArrayByTerm(books, searchTerm, 'title')).toBe([]);
  });
});
