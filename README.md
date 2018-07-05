# Welcome to node-temgen!

A node template generator for Rest Api application with Express.js, it is made as a boilerplate of initial setup for production, minimizing the effort of doing this time-consuming job.

It comes loaded and setup with moongose as a ORM for MongoDb Databases or Sequelize for SQL Databases, also have setup winston and morgan for handle logging, and a set of usefull dependecies that a web application in node should have.

Also comes with mocha, chai, supertest and nyc(istanbul) setup, for testing and code coverage, it have Airbnb javaScript style guide preset and Eslint configured, and a yaml file for CI/CD in gitlab, is ready to deploy in any cloud service prefered.

## Installation

    npm install -g node-temgen

## Quick Start

To get the base project of your choice generated, go to your terminal an cd to your projects folder then simply run:

    node-temgen

It will output:

    What base project template would you like to generate?
        >express-mongo
         express-sql

Use your arrows key to select up and down them input your project name like:

    Project name: my-awsome-app
Then cd to your `my-awsome-app` project folder and run:

    npm install
You can check if averything is correct by running `npm start` and visiting in your browser `http://localhost:3000/hello` if every thing is Ok you will see:

    { message: 'Hello World!!' }

And thats it, happy coding!!

------
**TODO**: add a template with view engine with hbs and any other usefull tool that i dont know yet xD.
