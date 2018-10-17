# Project Over View 
Nyjahwood is a eCommerce plaform built on the MEAN (MongoDb, Express, Angular, Node.js) stack. The platform is designed with intutitive user and administrative functionalities. The design is simple and powerful making for a great user experience. 

## Table of Contents
* [Configuration Instructions](#configuration-instructions)
* [Installation Instructions](#installation-instructions)
* [Features](#features)


## Configuration Instructions

* **MEAN stack** - This applicaiton is built with the MEAN stack. It is recommended to  install, at a minium, the Angular CLI (Command Line Interface), and Node.Js.

## Installation Instructions
* git clone the respository here:  https://github.com/LostAnchovy/nyjahwood.git
* npm (Node Package Manager) install dependencies on client and server side
* create a .env file in the root folder with the the following and add your own credientials. This is necessary to make t
  * CONFIG_DB = mongodb://localhost:27017/ "Your mongoDB DB name here"
  * USER_NAME = "Username for Email address" for SendGrid. 
  * CREDENTIALS = "Password" for SendGrid
  * SECRET = "Your Secret Key/ Make up anything for yourself" for JWT tokens
* To access the admin level a user must be created with an isAdmin boolean == true. Default user rights is set to false. Admin rights will be routed to the Admin Dashboard, else user will be routed to main page 
* From root directory run command line: Node or Nodemon server.js to start the server then go to localhost:3000 to view the project.

## Features:
* User and Admin authenication
* Custom Pipes
* Form validation & Authenication
* API routeGuards (Protected Routes based on user permissions)
* CRUD operations and RESTful Api 
* Integrated JWT token authenication technology