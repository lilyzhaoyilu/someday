# Someday

### Someday

Someday is a collaborative MERN project, using MongoDB, Express, React, and NodeJS. It helps users to keep track of the movies and TV shows that they have watched and want to watch. 

## Background and Overview
We often have TV shows and movies that we want to watch and have watched but do not have a simple tool to keep track of them, and Someday is here for that. In Someday, you can keep track the TV shows and movies that you want to and have already watched easily.

## Functionality & MVP
- [ ] User Authentication
- [ ] User Info, including profile and lists
- [ ] Movie Info Page with "add to my watched/to watch list"
- [ ] Search
- [ ] Comments underneath the movie/tvshow's page

## Technologies & Challenges

### Architecture 
The overall application architecture is geared toward a light and simple application.

To that end, Someday is built with the MERN stack (MongoDB, Express, React, and Node). It features a frontend API to fetch the information of movies and TV shows. 

##### Backend: Node, Express, and MongoDB
The backend is mainly used to store user related data. The separation of frontend and backend allows a faster and easier development. 

##### Frontend: Node.js, React
The frontend part will mainly be handled by using React and Redux. 

##### Challenges

* the media database/API
Since we are offering a search function of all movies and TV shows, we need to deal with handle a big amount of data. This challenges both the backend and frontend to consider their time complexity and query times when coding. 
Also, since we are using a API for gathering all the data, we need try to minimize our API requests numbers. 

* Implementing effective search
* Utilizing MongoDB database 

## WireFrames and Mocks
Login, sign up, and Splash
![Login and Splash](https://github.com/lilyzhaoyilu/someday/blob/main/assets/Login%20%26%20Splash.png)

Media Page
![Media Page and search page](https://github.com/lilyzhaoyilu/someday/blob/main/assets/media%20page%20and%20search%20result.png)

User Profile Page
![User Profile Page](https://github.com/lilyzhaoyilu/someday/blob/main/assets/userpage.png)

## Group Members and Work Breakdown
Website wireframes - Lily   
Sample state - Michael   
Sample database /sample schema - Rex   
API routes - Rex   
Frontend routes -Michael   
Sam helps Michael and Rex   
