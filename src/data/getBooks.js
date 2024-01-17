export const getBooks = async (searchTerm, startIndex, maxResults) => {
  const transformedSearchTerm = searchTerm.toLowerCase().replace(" ", "+");

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${transformedSearchTerm}&maxResults=${maxResults}&startIndex=${startIndex}`
  );

  if (!response.ok) {
    console.warn("Something went wrong.");
    throw new Error("Could not retrieve data.");
  }

  const data = await response.json();

  console.log(data);

  const booksData = data.items;
  const resultsCount = data.totalItems;
  const pageCount = Math.ceil(data.totalItems / 10);

  const cleanedData = booksData.map((bookData) => {
    return {
      id: bookData.id,
      title: bookData.volumeInfo.title ? bookData.volumeInfo.title : "No title",
      authors: bookData.volumeInfo.authors
        ? bookData.volumeInfo.authors
        : ["No authors"],
      description: bookData.volumeInfo.description
        ? bookData.volumeInfo.description
        : "No description",
      imageURL: bookData.volumeInfo.imageLinks?.thumbnail
        ? bookData.volumeInfo.imageLinks.thumbnail
        : "src\\assets\\not-found.png",
    };
  });

  console.log(cleanedData);

  return {
    resultsCount: resultsCount,
    data: cleanedData,
    pageCount: pageCount,
  };
};
