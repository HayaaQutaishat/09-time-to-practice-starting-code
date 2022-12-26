# Multi-Pages-React-App

Welcome to the Quotes React App!

This is a multi-page React app that allows users to view some quotes, sort the quotes, dive into specific quotes and add new quotes.
It has been built using HTML, CSS, Javascript, React and React Router. This application is structured into a number of pages which are "All Quotes" page which is a page shows all the quotes were added by different users. "Add Quote" page for adding a brand new quote. And a "Quote Detailed" page, which is the page we go to when click on a signle quote. This application uses Firebase as a backend for storing and retrieving data.



<img width="1440" alt="Screen Shot 2022-12-23 at 12 57 33 PM" src="https://user-images.githubusercontent.com/95029840/209332602-ca1da96f-53d0-4beb-99c2-a266285703cd.png">


### Project purpose :

This multi-page React app uses React Router to navigate between different pages. React Router allows us to define the routes for the application, and to specify which components should be rendered for each route. Users can navigate between those pages by entering different paths manually in the URL or by simply clicking on the links shown in the navigation bar.

Clicking on "view full screen" button will take the user to the "Quote detail" page. 

<img width="1440" alt="Screen Shot 2022-12-23 at 5 13 04 PM" src="https://user-images.githubusercontent.com/95029840/209365767-a63ffa05-7e93-4c19-a9a5-bffa878d009b.png">


Clicking on "Add a Quote" in the nav bar will load this page which is responsible for rendering a form that allows users to add a new quote. Clicking on that link will directly change the URL into domain/new-quote. 

<img width="1440" alt="Screen Shot 2022-12-23 at 1 48 43 PM" src="https://user-images.githubusercontent.com/95029840/209338965-b9c838ae-93b0-4bf7-b3ea-64f2e370f0f6.png">

If users start filling the form and accidentally try to navigate away from the current route I display a message to them in order to prevented any possibly unwanted route transitions.

<img width="1440" alt="Screen Shot 2022-12-23 at 1 57 15 PM" src="https://user-images.githubusercontent.com/95029840/209340457-ddb5589c-7d3b-49fd-b4f8-d0f3e133cc15.png">

When the user done filling the form and clicks on "Add Quote" button, I've Implemented a programmatic (Imperative) navigation so that the user will be directly navigated to different page or route, in this  case the user will benavigated to "All Quotes" page.


I've also added a loading spinner to the application to provide visual feedback to the user while the request is being sent to the backend.


## React Router techniques used in this app:

- Setting up Routes
- Navigating between different routes
- Nested routes
- URL query parameters
- Accessing route parameters
- Redirecting users
- Handling dynamic routes
- Implementing programmatic navigation




## Backend :


In this application, I'm using Firebase to store and retrieve data for our application. It provides a simple, flexible, and reliable backend for our app, allowing us to focus on building a great user experience.

In API JS file in the lib folder, you just need to insert your own Firebase URL instead of mine.

Afterwards, you'll be able to use these functions to send requests to Firebase and use them in conjunction with the custom HTTP hookto reuse certain functionality across components.




## Technologies used :

-  React
-  React Router version 5
-  Redux DevTools
-  Lazy Loading


## Prerequisites :

Before you can run this app, you will need to have the following software installed on your machine:

- Node.js
- npm (which comes with Node)


## Setting up the app :

- Clone the repository: git clone https://github.com/[USERNAME]/react-product-ordering.git
- Navigate to the project directory: cd react-product-ordering
- Install all dependencies: run npm install (when you run npm install, you already installed React Router version 5. No need to install it separately)
- Start the development server: run npm start


This will install all necessary dependencies and start the development server. The app will be available at http://localhost:3000 in your browser.



