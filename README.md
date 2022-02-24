# Music Library API

A Manchester Codes Back-End project - a music library API built with Express(Node.js); it uses Sequalise ORM to interact with the MySQL database.

## Description

The purpose of this project is to learn how to design and implement an API which can perform CRUD (Create, Read, Update and Delete) operations on a database via HTTP requests.

## Features

This API is designed by following the REST paradigm.

The API was developed by using Test Driven Development approach - integration test. These tests check if our application is communicating with a database in the way we expect. Mocha, Chai and Supertest are used for automated testing. 

**The API has the following functionality:**

- Create new artists, albums or songs
- Get a list of all artists and all albums in the database
- Query the data to retrieve specific artists, or albums by specific artists, or individual albums or songs
- Update artist and album in the database
- Delete artist and album from the database

## Concepts

- Relational Database Management System
- SQL, MySQL and MySQL Workbench
- Container & Docker
- Node.js
- Asynchronous JavaScript 
- Web API development
- RESTful system and CRUD operations
- Test Driven Development (TDD)

## Languages

- JavaScript
- SQL

## Technologies 


**Node.Js**: JavaScript backend runtime environment.

**MySQL**: One of the most popular databases. 

**Docker**: The container engine used for running a MySQL server in a container in this project. This is for creating a local database to test the web APIs against.

**MySQL Workbench**: The GUI used to interact with MySQL database directly. 

**Heroku**: Web applications hosting platform (PaaS).

**Postman**: An easy use tool for developers to create, share, test and document APIs.



| Application Dependencies | Description |
| ------------------------ | ----------- |
| Express                  | A Node.js web application framework for setting up servers and making APIs.
| mysql2                   | A MySQL driver used in Node.js to connect to the MySQL database.|

| Development Dependencies | Description |
| ------------------------ | ----------- |
| Nodemon                  | A npm package which will watch our project files and wait for them to be updated - will automatically restart the app when every time when developers make any changes to the code.|
| Dotenv                   | A npm module that loads environment variables from a .env file into process.env. |
| Mocha                    | A JavaScript testing framework for asynchronous testing. |
| Chai                     | Assertion library.| 
| SuperTest                | Library for testing HTTP servers.|


## Status

Ongoing...