# Full Stack Project

The application designed to display reviews of different hotels.

Client side: implement with react and redux. 
The components in the implementation are:

  •	**App component:** the root component that load the hotels list, users list and all the location for initial the app.
  
  •	**Bar component:** the app menu that allows you to navigate between the various paths and components
  
  •	**Register component:** fill out forms to be registered for the app
  
  •	**Login component:** registered users can log in to their account
  
  •	**Hotels component:** Displays all the different hotels available in the app. Name, location, general rating, photo, average rating of the hotel, a link to view all the detailed reviews and a link to make reservations through the original site.
      
  •	**View Reviews component:** Displays all reviews written about a particular hotel.
  
  •	**Add Hotel component:** only available to logged in users: possibility to add a new hotel to the existing hotel list. When you have finished filling in the hotel details, go directly to the updated list of hotels
      
  •	**Add review component:** for a particular hotel with a particular id. Possibility to add a review to the existing reviews list of the hotel.
  
  •	**Users component:** Displays all the registering users
  
  •	**profilePicture** component and **picturers component**: Auxiliary components for saving and displaying the images in the app
  

The different components manage their state by the different reducers and when it is necessary to send requests to the server they do so with the help of the different sags

Server side: implemented by Node.js and MongoDB. it keeps all the users, all the hotels and all the reviews in the data base. Depending on the request sent from the client, the server returns the data to display.
