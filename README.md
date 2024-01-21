# The Library

## To-Do

- Add loading message when search term is submitted
- Pagination of search results
- Modify `alt` for book cover images that are not provided
- Add styling to text for descriptions not provided
- Add conditional rendering for author and description text in card components based on text length
- Create an enum for button types

### Optional

- Modal for selected book
- Utilise external library (e.g., MUI) for components (i.e., Spinner)
- Add animations on window load

## Resources

- Playfair Display font
  - https://fonts.google.com/specimen/Playfair+Display
- Roboto font
  - https://fonts.google.com/specimen/Roboto
- Colour palette inspiration
  - https://dribbble.com/tags/book_ordering_app
- Icons8
  - https://icons8.com/
- A Complete Guide to CSS Grid
  - https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-properties
- Character counter
  - https://www.charactercountonline.com/

## Task Completion History

### January 21, 2024

- Moved pagination and modal features to a separate Git branch
- Implemented media queries to ensure application responsiveness

As I'm approaching the deadline for this project, I'm going to need to move the pagination and modal feature to separate branches due to lack of time. This is so I can show a functional application that doesn't appear half-finished! Additionally, I've changed the maximum number of results to show from 10 to 40.

To satisfy the minimum viable product requirements, the last point to address and implement was to make the application responsive. I've added media queries for phone, tablet, and small laptop sizes.

I've also added a 'Reset search' button when a successful search has occurred to improve user experience.

### January 17, 2024

- Added error handling in data fetching function
- Begun creating a modal to show extra information on a book a user has clicked on

I'm currently experiencing an issue with the pagination feature, which I've only noticed until now. At the moment, the last few pages return no results (i.e., `totalItems` value is 0). I've calculated the total number of pages to show for the pagination feature by observing the `totalItems` property in the response from the Google Books API based on the user's search terms. However, I've noticed that every time the same search terms are entered, the Google Books API returns a different value assigned to the `totalItems` property.

In addition to this, I'm now seeing the pagination feature not working as intended; when a page number is clicked, the selected page is not updated in the pagination component, but it still shows the results of such page.

I've also started thinking about adding a modal that displays more information on a book the user has clicked. It's probably best to utilise the React hook `useContext`, as it looks like I'll be falling into a scenario that involves prop drilling.

### January 16, 2024

- Implemented data fetching from Google Books API based on user's input
- Created card component to display search results
- Added styling to card and search bar component according to design mockup
- Made MUI pagination component functional

### January 15, 2024

- Created design mockup in Figma of the web application
- Added variables for color palette and typography
- Created foundational components for the header
