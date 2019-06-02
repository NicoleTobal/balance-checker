## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
App runs in [http://localhost:3001](http://localhost:3001)

The endpoints are:

- **GET /balance/:address** : Returns the balance in dai and the total amount of USD in tokens for a given address

### `npm test`

### Deployment

The app was deployed with Heroku and runs in https://balance-checker-back.herokuapp.com

The stepts to deploy are:

- Log in to Heroku's CLI
- In the root directory of the repository run:
  > git subtree push --prefix back heroku master