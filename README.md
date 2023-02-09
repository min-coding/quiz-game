# Project description

This project is a solo project from Scrimba. It does not have solutions provided.
The complexity of this project includes several things such as

- Data format from the API isn't ideal, so we need to manipulate the format (put answers together, decodeURI, random order)
- Each question can have only 1 selected answer, while having 4 options. Therefore, we need to create a relationship between the question and 4 answers, kinda like radio button.
  We do this by

  1. Adding extra property in state(card), 'selected'
  2. Sending question id to update state, so we know which question does the option belongs to.
  3. After user selected an option, the selected value will be updated -> update class to render selected button color

- Different visual with different conditions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
