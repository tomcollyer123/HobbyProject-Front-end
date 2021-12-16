# Hobby Project 

Tom Collyer

## Introduction

This project specification was to create an application in which we design and create a database, a functioning back-end in Java, a designed and functional front-end and an intgrated API.

The database we used was MySQL and this allowed us to create a relational database which will store information from the project.

For the back-end, we used Java and Spring to allow us to create a functioning back-end and communicate effectively with the database.

For the front end, we used JavaScript, HTML, HTTP requests and css in the form of bootstrap. JavaScript allows our front-end to generate HTTP requests which enable us to pull information from the back-end. HTML is used for structuring the page and adding functionality between the JavaScript and the user interaction on the website. CSS and BootStrap enable us to style the website and create a more user friendly website.

For testing, I used intergration tests to enable me to get the greatest test coverage over my application.



## The planning phase

The first part of my planning process was organising my work into sections and deciding which tasks to tackle in which order. To do this I created a project management board using Jira. I initially created a Scrum and then within that, I created Epics and User stories. The Epics are a great way to group tasks together, for example, grouping the creation of all back-end CRUD functions into an Epic. 

![jira board](https://user-images.githubusercontent.com/93253032/146449569-553947e2-6bfb-4466-8722-aeb81d6e0e0c.png)

When using user stories, I try to fill these with as much information as possible. This information includes any possible child tasks, labels (must,should etc.), story points to show the importance of the task in relation to others within the Sprint. I also created a sepearte document with acceptance criteria for each function. 

![child tasks](https://user-images.githubusercontent.com/93253032/146449944-a071f456-b612-4822-884e-efcaf86cf2ed.png)


The next part of my planning phase was to set up 2 GitHub repositories. I created one for all back-end work and one for all front-end work. Within these 2 repo's I have stuck to the feature branch model. I made an initial commit to the main branch in both repo's and then started my branch models by creating a dev branch initially and then continuing with various other feature branches. I was also able to link my Jira board and my Git Repo's to enable me to do smart commits.

![feature branch model](https://user-images.githubusercontent.com/93253032/146454293-5029f40e-c005-4de9-ab85-798c13476143.png)


## Database

Within the project we used 2 different types of database. The MySQL database was created by me and is the database used within the application. The other database used was an H2 database which is generated through the 2 .sql files within the Java project. These files autogenerate the and populate the database fields. This H2 database is essential as it is used for testsing that that the actual database is not effected whilst the system tests. 

![MySQL screenshot](https://user-images.githubusercontent.com/93253032/146450222-b6e95ba7-1220-4aae-ada8-e566cd51fad9.png)


## Back-end

The back-end softare was created by using Java and SpringBoot. I needed to make sure that all CRUD functions were created and all requests were written and used the correct mapping. I was able to check the mapping was correct using an application called posman which enabled me to check all of my requests. 

![back-end](https://user-images.githubusercontent.com/93253032/146450436-8660da77-a7e1-4f88-ba71-9eb71c7f5dff.png)


## Back-end Testing

I used intergration tests to try and gain as much coverage as I could over my application. This enabled me to test as much of my code as possible. My final result was 74.2% which is close to the industry standard of 80%. This coverage tests all my functions and requests and all tests pass. 

![test coverage](https://user-images.githubusercontent.com/93253032/146451112-6ba57c8a-4630-4860-a9d8-a446602598c7.png)


## Front-end

I used front-end development softwares to help create a professional looking website. I used JavaScript to perform requests to get information from the back-end and print it into the web console. I then used HTML and CSS in the form of bootstrap to manipulate the data and present it on the webpage. HTML and CSS are were also used to take user input off the webpage and link with JS for the requests. 

![post request](https://user-images.githubusercontent.com/93253032/146451372-8f4bcefd-3be8-4396-8ab2-5752212486aa.png)


## Extra functions

I was also able to add some additional functions to my webpage including searching for individual fields like genre and title. I was also able to create a mock carousel to show most listened to artists. Finally I was able to create a gradient background which added a bit of colour to the page.

![carousel snippet](https://user-images.githubusercontent.com/93253032/146451511-bac46fca-4d8c-4ccb-8fc1-7e1faec56d6a.png)
