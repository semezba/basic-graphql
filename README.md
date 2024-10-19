## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Mutation

```bash

mutation {
  register(registerUser: {
    name: "John Doe",
    email: "john@example.com",
    mobile: "0183456784",
    hashPassword: "test#1234",
    role: "admin"
  }) {
    name
    email
    mobile
    role
  }
}

mutation {
  login(loginUser: {
    email: "john@example.com",
    hashPassword: "test#1234",
  }) {
    token
    user {
      name
      email
      mobile
      role
    }
  }
}

```

## Query

```bash

query {
  getUsers {
    name
    email
    mobile
    role
  }
}

query {
  nodes {
    _id
    name
    trigger {
      name
      description
      functionString
      resourceTemplateId{
        name
        description
        integrationId
        schema
      }
    }
    responses {
      name
      description
      platforms
    }
    actions {
      name
    }
  }
}

query {
  node(id: "671004620cf8e15e4a8ca29e") {
    _id
    name
    trigger {
      name
      description
      functionString
      resourceTemplateId{
        name
        description
        integrationId
        schema
      }
    }
    responses {
      name
      description
      platforms
    }
    actions {
      name
    }
  }
}

```

## Note

- First of all, Register a new user
- Login user with valid email and password
- Fetch all users or single user if needed (!! role must be 'admin' !!)
- Fetch all Nodes or single node with authorized user.
