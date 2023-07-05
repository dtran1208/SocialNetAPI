# SocialNetAPI

Welcome to SocialNetAPI, a social media API for handling large amounts of unstructured data. This API allows you to manage users, thoughts, reactions, and friend lists.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

https://github.com/dtran1208/SocialNetAPI

2. Install the dependencies:

npm install


3. Configure the MongoDB connection:
   - Update the MongoDB connection string in `index.js` to match your MongoDB instance.

## Usage

1. Start the server:

npm start

2. Use a tool like Insomnia or Postman to interact with the API endpoints.
   - The API will be available at `http://localhost:3001`.

## API Routes

### Users

- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.

### Friends

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thoughts

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.

### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Create a reaction for a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Delete a reaction from a thought.

For more detailed information on each route and the expected request/response formats, please refer to the API documentation.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.

## License

[MIT License]
