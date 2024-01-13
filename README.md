[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/HTlAZVnP)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13064466)
# Final Project

**Title:** Library App  
**Name:** Ronan Noonan
**Student ID:** G00384824 

## Application npm install --legacy-peer-deps

Discuss, in detail, what the application does. Add a screenshot image of the application in use. 

## How to Run the App

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
    * npm install @ionic-native/core --legacy-peer-deps
    * npm install @capacitor-community/barcode-scanner



    4. ionic serve - **If it doesn't work** 'npm install --legacy-peer-deps' and then it should work
```

## Minimum Project Requirments

* Git Repository Usage: All project code and documentation are fully contained within the provided Git repository.
* Ionic Angular App: The project consists of a working Ionic Angular app that aligns with the chosen application concept.
**Key Features:**
* Angular Router: Utilized for navigation between different pages of the app.
* Backend Connection: Integrated with Firebase for backend services including data storage and retrieval.
* Capacitor Plugin: Planned integration of a Capacitor native plugin for scanning books ISBN number and finding them (further details in the Roadblocks section).
* Originality: The app is unique and does not resemble any previously developed apps for other modules or projects.
* Code Compilation: The code is structured to compile without errors. (Note: Currently facing issues with ionic serve due to Capacitor integration, further discussed in the Roadblocks section.) - use "npm install --legacy-peer-deps" to fix
* Code Formatting and Comments: The application code adheres to standard formatting conventions and includes comments for classes, methods, and variables.


## Project Requirments above and beyond

**Enhanced Features**
*Advanced Search Functionality: Implemented a sophisticated book search feature using ISBN numbers. Example ISBNs to search use: 978-3-16-148410-0, 978-0-596-52068-7.
* Interactive User Interface: Developed an intuitive and user-friendly interface, providing a seamless user experience.
* Real-time Data Sync: Enabled real-time data updates from Firebase, ensuring up-to-date information is always presented to the user.

## Application Architecture

**Structure Overview**
Pages and Their Purposes:
* Home Page: Serves as the landing page and entry point to the app.
* Search Page: Allows users to search for books using ISBN numbers.
* Details Page: Displays detailed information about selected books.
* Methods and Functionalities:
* searchBook(isbn): Searches for books based on ISBN.
* getBookDetails(id): Retrieves and displays detailed information about a book.
* Data Structures: Utilizes Angular services and models to manage and store book data objects.
Screenshot
(application architecture here)
## Roadblocks and Unfinished Functionality

**Challenges Faced**
* Capacitor Integration Issues: Encountered difficulties integrating Capacitor, specifically with ionic serve. This has stoped testing on native platforms.
* Solution Attempts: Tried various dependency resolutions, including using --force and --legacy-peer-deps flags.
Unfinished Functionality
* Capacitor for Enhanced Book Search: Intended to use Capacitor for accessing native device features to scan ISBN codes directly, enhancing the book search functionality.
Reflective Thoughts
If Done Again: Would allocate more time for dealing with Capacitor integration and its dependencies.
Future Plans: Aim to resolve Capacitor issues for implementing the native scanner feature. 
**note** Was talking to class mates who had similar problems and they just created a new project but i was getting errors i could fix when i tried this


## Resources

* [YouTube](https://www.youtube.com/watch?v=Y0vH5Cm3HAk) - **Video for firebase**
* https://www.canva.com/ - **Link for logo creater** 