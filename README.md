# E-commerce API

This project is a Node.js and Express-based API for managing products and carts in an e-commerce application. The server listens on port 8080 and provides the following endpoints:

## Features

- **Products**
  - List all products with optional limit
  - Get a single product by ID
  - Create a new product
  - Update an existing product
  - Delete a product

- **Carts**
  - Create a new cart
  - Get products in a cart by ID
  - Add a product to a cart

## Installation

1. Clone the repository:
    ```bash
    git clone [<repository_url>](https://github.com/GuzmanOlivera/PreEntrega1OliveraFervenzaAlvaroGuzman)
    cd [<repository_directory>]./PreEntrega1OliveraFervenzaAlvaroGuzman)
    ```

2. Initialize `package.json`:
    ```bash
    npm init -y
    ```

3. Install dependencies:
    ```bash
    npm install express
    npm install nodemon -D
    ```

4. Update `package.json`:
    ```json
    {
      "name": "preentrega1oliverafervenzaalvaroguzman",
      "version": "1.0.0",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "dev": "nodemon src/app.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "description": "",
      "devDependencies": {
        "nodemon": "^3.1.3"
      },
      "dependencies": {
        "express": "^4.19.2"
      }
    }
    ```

5. Create the directory structure:
    ```
    .
    ├── src
    │   ├── app.js
    │   ├── routes
    │   │   ├── products.router.js
    │   │   └── carts.router.js
    │   └── managers
    │       ├── productManager.js
    │       └── cartManager.js
    ├── data
    │   ├── products.json
    │   └── carts.json
    └── package.json
    ```

6. Start the server:
    ```bash
    npm run dev
    ```

## API Endpoints

### Products

#### List all products
- **Endpoint:** `GET /api/products`
- **Query Params:** `limit` (optional)
- **Example:**
  ```bash
  curl http://localhost:8080/api/products
  curl http://localhost:8080/api/products?limit=2
  ```

#### Get a product by ID
- **Endpoint:** GET /api/products/:pid
- **Example:**
 ```bash
 curl http://localhost:8080/api/products/1
 ```

#### Create a new product
- **Endpoint:** POST /api/products
- **Body:**
 ```json
{
  "title": "New Product",
  "description": "Description of the new product",
  "code": "ABC123",
  "price": 100,
  "stock": 50,
  "category": "Category",
  "thumbnails": ["url1", "url2"]
}
 ```

 ```bash
curl -X POST http://localhost:8080/api/products \
  -H "Content-Type: application/json" \
  -d '{"title": "New Product", "description": "Description of the new product", "code": "ABC123", "price": 100, "stock": 50, "category": "Category", "thumbnails": ["url1", "url2"]}'
 ```
#### Update a product
- **Endpoint:** PUT /api/products/:pid
- **Body:**

 ```json
{
  "price": 150,
  "stock": 40
}
 ```
- **Example:**
 ```bash
   curl -X PUT http://localhost:8080/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 150, "stock": 40}'
 ```

#### Delete a product
- **Endpoint:** DELETE /api/products/:pid
- **Example:**
 ```bash
curl -X DELETE http://localhost:8080/api/products/1
 ```

### Carts
#### Create a new cart
- **Endpoint:** POST /api/carts
- **Example:**
 ```bash
curl -X POST http://localhost:8080/api/carts
 ```
#### Get products in a cart by ID
- **Endpoint:** GET /api/carts/:cid
- **Example:**
 ```bash
curl http://localhost:8080/api/carts/1
 ```

#### Add a product to a cart
- **Endpoint:** POST /api/carts/:cid/product/:pid
- **Example:**
 ```bash
curl -X POST http://localhost:8080/api/carts/1/product/1
 ```

### Using Postman

Postman is a useful tool for testing and interacting with APIs. Here are some example requests you can make using Postman:

#### Products

**List all products**

- Method: GET
- URL: `http://localhost:8080/api/products`

**List products with limit**

- Method: GET
- URL: `http://localhost:8080/api/products?limit=2`

**Get a product by ID**

- Method: GET
- URL: `http://localhost:8080/api/products/1`

**Create a new product**

- Method: POST
- URL: `http://localhost:8080/api/products`
- Body:
  ```json
  {
    "title": "New Product",
    "description": "Description of the new product",
    "code": "ABC123",
    "price": 100,
    "stock": 50,
    "category": "Category",
    "thumbnails": ["url1", "url2"]
  }

### Update a product

- **Method**: PUT
- **URL**: `http://localhost:8080/api/products/1`
- **Body**:
  ```json
  {
    "price": 150,
    "stock": 40
  }

### Delete a product

- **Method**: DELETE
- **URL**: `http://localhost:8080/api/products/1`

### Carts

**Create a new cart**

- **Method**: POST
- **URL**: `http://localhost:8080/api/carts`

**Get products in a cart by ID**

- **Method**: GET
- **URL**: `http://localhost:8080/api/carts/1`

**Add a product to a cart**

- **Method**: POST
- **URL**: `http://localhost:8080/api/carts/1/product/1`

### Notes

Ensure that the `products.json` and `carts.json` files exist in the data directory before starting the server. This API uses file-based persistence. The data is stored in JSON files, which serve as the database.