# Fake server

In order to start JSON server:
```
npm run start
```
<br>

---
## User entity:
```
{
    id: number,
    email: string,
    password: string,
    role: string,
    gender: string;
    dateOfBirth: string, //format ISO string;
    phoneNumber: string;
    avatar: string;
    wishlist: array, // array of numbers for consumer and administrator roles only
}
```

## List of user roles:
```
- admin
- seller
- consumer
- guest
```

## Products structure:
```
{
  id: number,
  userId: number,
  name: string,
  price: number, //format (regExp: /\d{2,3}\.00/) (example:670.00)
  description: string,
  category: {
   id: string,
   name: string,
  },
  rating: number,
  images: array, //array of URLs
  createdAt: string, //format ISO string
  updatedAt: string, //format ISO string
}
```
## Feedbacks structure:
```
{
  id: number,
  userId: number,
  productId: number,
  rating: number,
  comment: string,
  displayedName: string,
  createdAt: string, //format ISO string
}
```

<br>

## Possible routes

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Path examples</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=6>GET</td>
      <td><b>/products</b></td>
      <td>Fetch all products</td>
    </tr>
    <tr>
      <td>/products/1</td>
      <td>Fetch the product by ID</td>
    </tr>
    <tr>
      <td>/products?name=stuff&<br>author.firstName=Rex</td>
      <td>Fetch the product by specific keys</td>
    </tr>
    <tr>
      <td><b>/categories</b></td>
      <td>Fetch all categories</td>
    </tr>
    <tr>
      <td><b>/feedbacks</b></td>
      <td>Fetch all feedbacks</td>
    </tr>
    <tr>
      <td>/user/feedbacks</td>
      <td>Fetch all feedbacks with productName</td>
    </tr>
    <tr>
      <td rowspan=5>POST</td>
      <td>/register</td>
      <td rowspan=3>Register a new user <br> <em>email and password are <b>required<b><em></td>
    </tr>
    <tr>
      <td>/signup</td>
    </tr>
    <tr>
      <td><b>/users</b></td>
    </tr>
    <tr>
      <td>/login</td>
      <td rowspan=2>Log an existing user in <br> <em>email and password are <b>required<b><em></td>
    </tr>
    <tr>
      <td>/signin</td>
    </tr>
      <td rowspan=5>PUT, <br> PATCH</td>
      <td>/register</td>
      <td rowspan=3>Update info about an existing user<br> <em>email and password are <b>required<b><em></td>
    </tr>
    <tr>
      <td>/signup</td>
    </tr>
    <tr>
      <td>/users</td>
    </tr>

  <tbody>
</table>

<br>

> - For more specific GET requests check <a href='https://github.com/typicode/json-server#routes'>official docs</a>
> - Other fields can be added to the `POST` method, but they won't be validated

<br>

## Example of POST request:

<br>

```
POST /register
{
  "email": "fedor_abrashin@epam.com",
  "password": "strong",
  "age": 21
}
```

<br>


## Responses for POST requests:

<br>

1. REGISTER (expiration time of 1 hour)
```
201 Created
{
  "accessToken": "xxx.xxx.xxx"
}
```

2. LOGIN (expiration time of 1 hour)
```
200 ОК
{
  "accessToken": "xxx.xxx.xxx"
}
```

<br>

> ### In order to change amount of posts or categories you can adjust constants in `data.js`

<br>

  <br>

---
## Protected routes list:
```
/comments
/products
/users
/feedbacks
```
<br>

> ### Protection rule:
> ### Anyone can view, only owner can make CRUD operations.

<br>

---
<br>

## [PATCH] products/\<ID>/upload

### Request

__Content-Type__: application/json

__Type__: object

__Properties__

* images: Array of \<Base64String>

### Example:

```
{
  "images": ["data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="]
}
```

### Response

__Content-Type__: application/json

__Type__: object


### Example:

```
{
  "id": 0,
  "userId": 5,
  "name": "Intelligent Cotton Pants",
  "price": "670.00",
  "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  "category": {
    "id": "e8d65a83-7e30-48ae-a786-2f3ccbfc51b8",
    "name": "Industrial"
  },
  "images": [
    "http://localhost:5000/photo_1.gif",
    "http://localhost:5000/photo_2.gif"
  ],
  "createdAt": "2021-11-23T21:43:58.126Z",
  "updatedAt": "2021-12-07T06:31:17.109Z"
}
```
