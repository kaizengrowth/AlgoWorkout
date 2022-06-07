# Roadmap & Progress Log

### Description:
https://docs.google.com/document/d/1PuVTBu2CNC6ZLt0P0CWeue1tPP2sP9sweS5I7oEdl7w/edit?usp=sharing
## MVP Core Features
1. Function for choosing which problem a user should do next, based on their scores on previous problems across 15 categories.

2. Timer for logging a user’s practice session on a given day.

## Setup:
* [x] Package.json dependencies. NPM install.
* [x] Webpack setup and folder structure: backend (node / express), frontend (react/redux), database (mongoose)
* [x] Create database on MongoDB.com. Get Mongo_URI link string and place in repo.
* [ ] Design database schema: 
    * [x] server/models/algoModels --> Schema for an algo problem
    * [x] created [wireframes for dashboard & data models](/docs/wireframe_june7.png) using ExCaliber

## Task 1. AlgoModel / Controller / Component
* [x] Put 3 dummy problems in MongoDB database. 
* [x] Enable DataAPI in MongoDB database through Atlas UI: "read and write."
* [x] Create API key. Generate Axios snippet and put into codebase.
* [ ] Test GET/POST/PUT/DELETE routes for database in Postman
* [ ] Set up server.js & algoController to GET a problem.
* [ ] Display problem in front end, without Redux.js

* [ ] Multiple steps: Figure out Redux actions / dispatch / reducer for getting a problem... 

## Log
### Tue. 6/7/22 
* [1:53pm] -- Finished initial setup for app: webpack, Node/Express, React/Redux, MongoDB
* [3:47pm] -- Created [wireframe](/docs/wireframe_june7.png) in Excaliber, and roughly planned out database schema and React components
* [4:50pm] -- Messed around with MongoDB then Postgres then back to MongoDB. Will stick with MongoDB. Added 3 sample questions as documents to collection in database.
* [7:03pm] -- Really struggled with getting anything to work on remote MongoDB database. Won't let me change settings or add endpoints. Finally moved to local MongoDB database. Had to delete and reinstall node modules to get this to work. Very frustrating!!