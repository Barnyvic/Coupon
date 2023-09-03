# flexible coupon system API

`Description`

a flexible coupon system for an e-commerce website using Express.js and Sequelize ORM

## Features
* An endpoint `/coupon` that accepts a coupon code, checks its validity, and returns the total adjusted price and discount
amount.
* An endpoint `/cart `that shows a small list of items by default with each item having a name and price. The list should be just
big enough to showcase your coupon system. It should also return the total price.

## Getting Started
    Prerequisites
 * Node.js (Install from https://nodejs.org/)
 * npm (Comes bundled with Node.js)
  
  Installation
  1. Clone the repo to your local machine using git  
```
git clone https://github.com/Barnyvic/Coupon
```
2. Navigate into project directory and install dependencies
 ```
   cd Coupon
```
3. Install node modules
  ```
yarn 
   ```
## Usage
```
yarn start to start server using node
yarn start:dev to start server using nodemon
```
* The server will start on port 3000. You can access the API at http://localhost:3000.

* Use a tool like Postman or curl to make API requests to the available endpoints.
*  Link to live site  https://coupon-zoqh.onrender.com. 
  

## Endpoints
 Get items in a cart
 ` GET /api/v1/e-commerce/cart`
* Response:
   ``` 
   {
    "statusCode": 200,
    "message": "Cart Items",
    "data": [
        {
            "name": "Smartphone",
            "price": 49.99
        },
        {
            "name": "Laptop",
            "price": 9.99
        },
        {
            "name": "Headphones",
            "price": 9.99
        },
        {
            "name": "Tablet",
            "price": 9.99
        },
        {
            "name": "Camera",
            "price": 59.99
        },
        {
            "name": "Smartwatch",
            "price": 14.99
        },
        {
            "name": "Wireless Mouse",
            "price": 29.99
        }
    ]}
      
   ```
Get coupon discount `/api/v1/e-commerce/coupon/:coupon_code`

* Request Param:
  ```
  /coupon/PERCENT10
  ```
* Response:
```
{
    "statusCode": 200,
    "message": "You received a discount of $18.49. Your adjusted price is $166.44.",
    "data": {
        "adjustedPrice": "166.44",
        "discountAmount": "18.49"
    }
}
```