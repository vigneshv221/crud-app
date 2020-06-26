# crud-app
CRUD api with nodejs, express, mongodb

This project is hosted at 
https://mongocrudapp.herokuapp.com/

## How to run this project locally

Clone this repository and inside the project folder,
run npm init.
After all the dependencies are installed, create a 
.env file in th root of th project folder
and create environment variable 

MONGO_URL = mongodb://localhost:27017/myapp

If you have a cluster in MongoDB Atlas, replace the
localhost address with the connection string given for
connecting the cluster with the application.

## Routes 

## /api/products
  
  ### GET
    GET method return list of all products stored in database
  ### POST
    POST method creates a product document in the database.
    The body of the request must contain 
      -productId (unique) (int32)
      -name (string)
      -description (string)
      -price (int32)

## /api/products/:id
    
   ### PUT 
      productId is passed in as parameter. 
      Request body must contain the value of 
      the fileds that need to be changed
      Updates the product document with the 
      given productId
    
   ### DELETE
    productId is passed in as parameter.
    Deletes the product document with the 
    given productId
   
    
      
