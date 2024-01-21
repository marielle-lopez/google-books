export const getBooks = async (searchTerm, startIndex, maxResults) => {
  const transformedSearchTerm = searchTerm.toLowerCase().replace(" ", "+");

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${transformedSearchTerm}&maxResults=${maxResults}&startIndex=${startIndex}`
  );

  if (!response.ok) {
    throw new Error(
      `Sorry, couldn't process your request. Error code: ${response.status}`
    );
  }

  const data = await response.json();

  const booksData = data.items;
  const resultsCount = data.totalItems;
  const pageCount = Math.ceil(data.totalItems / 10);

  if (resultsCount === 0) {
    throw new Error(
      "Oh no... We've searched far and wide, but couldn't find any books matching your search."
    );
  }

  console.log(booksData);

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
        : "src\\assets\\missing-book-cover.png",
      rating: bookData.volumeInfo.averageRating
        ? bookData.volumeInfo.averageRating
        : null,
      numberOfPages: bookData.volumeInfo.pageCount
        ? bookData.volumeInfo.pageCount
        : null,
      datePublished: bookData.volumeInfo.publishedData
        ? bookData.volumeInfo.publishedData
        : "No publication date",
      publisher: bookData.volumeInfo.publisher
        ? bookData.volumeInfo.publisher
        : "No publisher",
    };
  });

  // console.log(cleanedData);

  return {
    resultsCount: resultsCount,
    data: cleanedData,
    pageCount: pageCount,
  };
};
