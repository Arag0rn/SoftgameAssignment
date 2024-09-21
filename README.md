# Game List Table

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Features](#features)
   - [Table View](#table-view)
   - [Sorting](#sorting)
   - [Filtering](#filtering)
   - [Responsive Design](#responsive-design)
   - [Dynamic Emoji Icons](#dynamic-emoji-icons)
5. [How to Run the Project](#how-to-run-the-project)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
6. [Components Overview](#components-overview)
   - [App.js](#appjs)
   - [Table.js](#tablejs)
   - [Filter.js](#filterjs)
   - [Sort.js](#sortjs)
7. [Customization](#customization)
8. [Future Improvements](#future-improvements)

---

## Project Overview

This project is a **Game List Table** implemented in **React** and styled with **TailwindCSS**. It provides a user-friendly interface to view, filter, and sort a list of games. It supports the display of essential game data (name, release year, players, publisher, and type) along with dynamic emoji icons. The table rows alternate in background color to enhance readability, and users can sort the list by clicking on the headers.

---

## Technologies Used

- **React**: Core library for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Icons**: For emoji icons and sorting indicators.
- **JavaScript/JSX**: Language for implementing React components.
- **Node.js** & **npm**: Used for package management and running the project.

---

## Project Structure

```bash
.
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── Table.js
│   │   ├── Filter.js
│   │   └── Sort.js
│   ├── assets
│   ├── styles
│   └── index.js
├── public
├── package.json
└── README.md

src/components: Contains all the main components used in the application.
assets: Contains static assets such as images.
utils: Utility functions used across the application.
index.js: Entry point of the React application.
Features
Table View
The app displays a list of games in a tabular format using an unordered list (ul) to mimic rows and columns. Each game has several attributes displayed:

Name
Release Year
Players (min - max)
Publisher
Type
Sorting
Users can click on the column headers to sort the games by different attributes:

Name
Release Year
Players
Publisher
Type
The sorting is handled dynamically, and the sorted column is visually indicated using icons (<BsSortAlphaDown />, <BsSortAlphaDownAlt />, <BsSortNumericDown />, etc.).

Filtering
Users can type in a filter input field, and the table will display only games whose name or publisher matches the search input. Filtering is case-insensitive and only triggers after the user has entered more than two characters.

Responsive Design
The table layout adapts to different screen sizes using TailwindCSS classes, ensuring it is usable on both mobile and desktop devices.

Dynamic Emoji Icons
Each game can display one of the following emoji icons:

<BsEmojiGrin />
<BsEmojiHeartEyes />
<BsEmojiLaughing />
<BsEmojiWink />
The icons are either chosen randomly or based on specific game properties.

How to Run the Project
Prerequisites
Ensure that you have the following installed on your system:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/game-list-table.git
cd game-list-table
Install dependencies:

bash
Copy code
npm install
Running the App
Start the development server:

bash
Copy code
npm start
Open the app in the browser: Navigate to http://localhost:3000 to see the app running.

Components Overview
App.js
The root component that initializes the game list, sorting order, and filtering mechanism. It manages the state and passes down relevant data and functions to other components like Table.

Table.js
The component responsible for rendering the list of games. It handles the following:

Rendering the table header with sortable columns.
Displaying each game’s information in rows.
Managing alternating row colors for better readability.
Filter.js
A filter input component that allows users to search for games by their name or publisher. It updates the filtered game list dynamically as the user types.

Sort.js
Contains the sorting logic and icon rendering. This component handles sorting based on column headers and updates the display accordingly.

Customization
You can easily customize the application by adjusting the following:

Game Data: You can modify the list of games passed into the app, adding or removing fields like name, release year, etc.
Styling: TailwindCSS classes can be modified or replaced to suit your design needs. You can change colors, sizes, or layout behavior.
Icons: You can replace the current emoji or sorting icons by importing different icons from the react-icons package or using custom SVGs.
Filters: The filtering logic can be expanded to include more fields, such as filtering by release year or game type.
Future Improvements
Here are some potential features that can be added in future iterations:

Pagination: If the game list grows, implement pagination to improve performance and user experience.
Advanced Filtering: Add multi-field filtering (e.g., filter by release year, number of players, etc.).
Editable Table: Allow users to edit game data directly from the table.
Local Storage: Save filter/sort settings to local storage so users can preserve their preferences.
API Integration: Connect the game list to a live API to fetch dynamic game data instead of using static data.
Example Screenshot

This image gives an example of how the game list table looks with alternate row colors, sorting icons, and dynamic emoji icons.

Conclusion
This project demonstrates how to build a dynamic, responsive, and interactive game list table using React and TailwindCSS. By incorporating filtering, sorting, and icon rendering, the project offers a clean and efficient way to manage and view game data.