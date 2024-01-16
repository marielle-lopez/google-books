export const getBooks = async (searchTerm) => {
  const transformedSearchTerm = searchTerm.toLowerCase().replace(" ", "+");

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${transformedSearchTerm}`
  );

  if (!response.ok) {
    console.want("Something went wrong.");
    throw new Error("Could not retrieve data.");
  }

  const data = await response.json();
  const booksData = data.items;
  const resultsCount = data.totalItems;
  const pageCount = Math.ceil(data.totalItems / 10);

  const cleanedData = booksData.map((bookData) => {
    return {
      id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      imageURL: bookData.volumeInfo.imageLinks?.thumbnail
        ? bookData.volumeInfo.imageLinks.thumbnail
        : "src\\assets\\not-found.png",
    };
  });

  return {
    resultsCount: resultsCount,
    data: cleanedData,
    pageCount: pageCount,
  };
};
