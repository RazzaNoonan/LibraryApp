[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/HTlAZVnP)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13064466)
# Final Project

**Title:** Library App  
**Name:** Ronan Noonan
**Student ID:** G00384824 

## Application npm install --legacy-peer-deps

The Book Finder app simplifies book discovery by enabling users to search for books using ISBN numbers or by scanning ISBN barcodes. It utilizes the Open Library API to fetch detailed book information, including titles, authors, and covers. Users can also register, log in, and customize their profiles with profile images. The app offers real-time data updates for a great user experience.

## How to Run the App

**Note:** If you encounter any issues with dependencies, try running `npm install --legacy-peer-deps` to resolve them.

Follow these steps to run the app locally on your machine:
```

    1. Clone the repository to your local machine using Git: 
    * Clone repo - git clone https://github.com/DanielCreggOrganization/acpad-project-2023-RazzaNoonan.git

    2. Change directory to the app - cd Libary-App

    3. npm install:
    * Make sure you have node installed - node -v or npm -v (Checks if installed)
    * npm install -g @angular/cli
    * npm install -g firebase-tools
    * npm install @angular/fire
    * npm install firebase
    * npm install -g @ionic/cli native-run cordova-res
    * npm install @capacitor-community/barcode-scanner



    4. ionic serve - **If it doesn't work** 'npm install --legacy-peer-deps' and then it should work
```

## Minimum Project Requirments

- Git Repository Usage: All project code and documentation are fully contained within the provided Git repository.
- Ionic Angular App: The project consists of a working Ionic Angular app that aligns with the chosen application concept.
- **Key Features:**
- Angular Router: Utilized for navigation between different pages of the app.
- Backend Connection: Integrated with Firebase for backend services including data storage and retrieval.
- Capacitor Plugin: Successfully integrated a Capacitor native plugin for scanning books' ISBN numbers and finding them.
- Originality: The app is unique and does not resemble any previously developed apps for other modules or projects.
- Code Compilation: The code is structured to compile without errors.



## Enhanced Features

**Advanced Search Functionality:** The app implements a sophisticated book search feature using ISBN numbers. Example ISBNs to search for are: 978-3-16-148410-0, 978-0-596-52068-7.

**Real-time Data Sync:** It enables real-time data updates from Firebase, ensuring up-to-date information is always presented to the user.

**Interactive User Interface:** The app offers an intuitive and user-friendly interface, providing a good user experience. 

**Scanning ISBNs:** The app also features a barcode scanner for ISBNs using Capacitor. Users can scan ISBN barcodes to search for books seamlessly.


## Structure Overview
- Home Page: Includes user profile information and a button to view book details.
- Search Page: Allows users to manually search for books using ISBN numbers or scan ISBN barcodes.
- Book Details Page: Displays detailed information about selected books, including the book cover, title, authors, and ISBN.

## Methods and Functionalities
- `searchBook(isbn)`: Searches for books based on ISBN numbers. This function can be found in the `BookDetailsPage` component.
- `getBookDetails(id)`: Retrieves and displays detailed information about a book. This function can also be found in the `BookDetailsPage` component.
- `scanISBN()`: Utilizes the Capacitor barcode scanner to scan ISBN barcodes and then search for books using the scanned ISBN. This function is available in the `BookDetailsPage` component.
- User Authentication: The app provides user registration, login, and logout functionality using Firebase Authentication. It uses the `AuthService` service for user management.
- Profile Image Upload: Users can upload and change their profile images. The `AddImageService` service handles the image upload process.
- Angular Pipes: The app utilizes custom Angular pipes, such as `joinAuthors`, to format and display data.
- HTTP Requests: To fetch book data, the app sends HTTP requests to the Open Library API. This functionality is provided by the `BookService` service.



## Roadblocks and Unfinished Functionality

**Challenges Faced**
- Capacitor Integration Issues: Initially faced difficulties integrating Capacitor, specifically with `ionic serve`.

**Solution Attempts**
- Tried various dependency resolutions, including using `--force` and `--legacy-peer-deps` flags.

**Reflective Thoughts**
- If Done Again: Would allocate more time for dealing with Capacitor integration and its dependencies.

**Note**: Some classmates created new projects to resolve similar issues, ended up fixing these problems 


## Resources

- [YouTube](https://www.youtube.com/watch?v=Y0vH5Cm3HAk): Video tutorial for Firebase integration.
- [Canva](https://www.canva.com/): Used for creating the app logo.