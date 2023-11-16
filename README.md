# E-Commerce Backend (Using Object-Relational Mapping)

By `Shane Mindreau`

## Description

This is a small project where I have built the backend of an e-commerce site by modifying some very basic starter code. The importance of such an exercise, is with all the businesses having transferred these past couple years to e-commerce sites and the like, it become more and more important to understand the structure of digital platform businesses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Tests](#tests)

## Installation

1. Installation is simple. All you need to do is clone the GitHub repository (and install Node if you do not already have it).

2. From there, do an npm install to get the necessary packages if you are running the app locally.

3. Next you will need to set up your database. I used 'MySQL Workbench 8.0 CE' but you may use whatever you have that can set up a MySQL database. Once you have set up the 'MySQL Connection'/'instance' in Workbench or your platform, run the code in the schema.sql file (located in the db folder) within Workbench/your platform. This will create the database that the app will run on.

4. If you are running it locally you will also need to create a .env and in it assign values to the keys DB_NAME, DB_PASSWORD, DB_USER. The DB_NAME will be the name of the database you created. If you ran the code in schema.sql within Workbench or your platform, then the database's name will be 'ecommerce_db'. So, you would set DB_NAME='ecommerce_db'. The DB_PASSWORD and DB_USER will be what you set as the password and username for your 'MySQL Connection'/'instance'.

   - If you are planning on deploying the app, then you will need to make sure your .env values are included some hosting sites like Heroku will need you to set these up in the config settings of the deployed app.

5. If you would like, you can seed the database by running the code `npm run seed` in the terminal (make sure you are in the correct directory).

6. Then to run the app locally type the command `node server.js` into the terminal (make sure you are in the correct directory). Once live, the API routes can be accessed.

## Usage

The following is a video of the application being setup and tested on a local machine:

**[Demo Video](https://drive.google.com/file/d/18W9NFdU3Lpa7vQFp7yGjvy_bYhnMKvID/view?usp=sharing)**

## Credits

For this project we utilized Node.js, using the npm packages:

- dotenv: 8.2.0
- express: 4.17.1
- mysql2: 2.1.0
- sequelize: 5.21.7

The starter code was provided by Colombia University's Full Stack Flex Web Development Bootcamp.

## License

MIT License

## Badges

N/A

## Tests

There currently are no tests set up for this app's code.
