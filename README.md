# Front End Tech Test

## Background information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) including the TypeScript template.

This project is supported by a basic backend using [JSON Server](https://www.npmjs.com/package/json-server).


## Running the project

If you run the following command:

`npm run start`

This will run the backend server on `http://localhost:4000` and it will start the React project on `http://localhost:3000`.

You will find that the backend has a single endpoint:

`GET` `/companies`

This endpoint will return an array of 200 fake companies. You can verify that this is working and running correctly by using your preferred API client such as Postman, Insomnia, etc.

If you want to see the tests, run the following command

 `npm run test`

## Structure of the project
- All of the code that I wrote is in the src folder
- The hooks folder contains the use type selector
- The redux folder contains everything about state management
- There is a file called `CompanyListCard.test.tsx` for testing this component

## What I have done
- Displaying a big list of companies on the homepage
- Limiting the list by 10 using `react-paginate`
- Testing the CompanyListCard with `react-testing-library`

I would still work on separating the styles in its own folders and improving it if I still had more time. Apart from that, I'd like to extend this a bit by showing more details on a different page(company details page for example) when clicking on its list.