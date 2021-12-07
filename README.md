# Fake server

In order to start JSON server:
```
npm run start
```

<br>

## Products structure:
```
{
  id: string;
  name: string;
  price: number; //format (regExp: /\d{2,3}\.00/) (example:670.00)
  description: string;
  category: {
   id: string;
   name: string;
  };
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: string; //format ISO string
  updatedAt: string; //format ISO string
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
      <td rowspan=4>GET</td>
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
      <td rowspan=3>Update info about an excisting user<br> <em>email and password are <b>required<b><em></td>
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

## Expample of POST request:

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