/**
 *  const updatedFilteredBooks = filteredBooks.filter((book) => {
      const lowerCaseBookTitle = book.title.toLowerCase();
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return lowerCaseBookTitle.includes(lowerCaseSearchTerm);
    });
 */

// building a function that will take in an array, and a term, and object key if it's an array of objects
// lowercase the term and the arrayItem
// filter that array by the term
// return the filtered array

export const filterArrayByTerm = (array, term, arrayObjectKey) => {
  return array.filter((object) => {
    const lowerCaseObjectValue = object[arrayObjectKey].toLowerCase();
    const lowerCaseTerm = term.toLowerCase();
    return lowerCaseObjectValue.includes(lowerCaseTerm);
  });
};
// --> Error
