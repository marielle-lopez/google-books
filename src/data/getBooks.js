export const getBooks = async (searchTerm) => {
  const transformedSearchTerm = searchTerm.toLowerCase().replace(" ", "+");

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${transformedSearchTerm}`
  );

  const data = await response.json();
  const booksData = data.items;

  const cleanedData = booksData.map((bookData) => {
    return {
      id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
    };
  });

  return cleanedData;
};
