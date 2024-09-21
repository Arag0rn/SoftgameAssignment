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
- **TypeScript/TSX**: Language for implementing React components.
- **Node.js** & **npm**: Used for package management and running the project.
- **Vite**: Used for fast development server and build tool.

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
```

---

## Features

- **Table View**
The app displays a list of games in a tabular format using an unordered list (ul) to mimic rows and columns. Each game has several attributes displayed:

*Name*
*Release Year*
*Players (min - max)*
*Publisher*
*Type*
*Sorting*


Users can click on the column headers to sort the games by different attributes


- **Filtering**
Users can type in a filter input field, and the table will display only games whose name or publisher matches the search input. Filtering is case-insensitive and only triggers after the user has entered more than two characters.

Dynamic Emoji Icons
Each game can display one of the following emoji icons:

<BsEmojiGrin />
<BsEmojiHeartEyes />
<BsEmojiLaughing />
<BsEmojiWink />
The icons are either chosen randomly or based on specific game properties.


## How to Run the Project

### Prerequisites
Ensure that you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation
Clone the repository:

```bash
git clone https://github.com/your-repo/game-list-table.git
cd game-list-table
```
Install dependencies:



Copy code
```bash
npm install
```

Running the App
Start the development server:



Copy code
```bash
npm start
```

Open the app in the browser: Navigate to http://localhost:3000 to see the app running.




### Future Improvements

**Here are some potential features that can be added in future iterations:**

-*Pagination:* If the game list grows, implement pagination to improve performance and user experience.

-*Responsive Design*

-*Editable Table:* Allow users to edit game data directly from the table.

-*Local Storage:* Save filter/sort settings to local storage so users can preserve their preferences.



### Conclusion
This project demonstrates how to build a dynamic,  and interactive game list table using React and TailwindCSS. By incorporating filtering, sorting, and icon rendering, the project offers a clean and efficient way to manage and view game data.