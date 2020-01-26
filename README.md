# **Work in Progress: react-sequelize-template**

## A full-stack application template complete with passport local strategy authentication
### **Stack:**
* node and express 
* sequelize ORM
* passport js authentication
* create-react-app

### **How to Use This Template**
* click "use template" next to the clone button, this will create a new repository on *your* github account
* clone the repository down to your machine
* create a mySql database named as you like
* run &nbsp; `npm install`
* run &nbsp; `touch .env` &nbsp;in the root of your repository
* open the .env file
* add the four environmental variables that will be used to connect to the database:
    <br/>       `DB_PASSWORD=yourpassword`
    <br/>       `DB_HOST=127.0.0.1`
    <br/>       `DB_USER=root`
    <br/>       `DB_NAME=yourDBname`
* run &nbsp; `npm start` to start the server with nodemon which will automatically refresh after any server-side code changes

