## EmployeePolls 🗳️

This React-Redux app allows users to to vote on and create polling questions. Users have access to new and previously-answered polling questions, and a leaderboard that ranks users by aggregating the amount of questions that they have created with the amount of questions that they have answered. This app's state is fully managed by redux. There is a file that initializes the state with some preset data, but once a user logs in and interacts with the app (by voting and creating questions), all interactions will persist solely  via the redux store state.


## Table of Contents
- [Notes and Design Decisions](#notes-and-design-decisions)
- [Get Setup and Running](#get-setup-and-running)
- [Using the App](#using-the-app)


## Notes and Design Decisions
1. I wanted to use some custom eslint configurations for the first time in a project. I created a .eslintrc.js file with different plugins and rules. Some of the plugind and rules might be depricated, but it was good practice.

2. This project was built with Node v18.16.0 and NPM 9.5.1. Hopefully that doesn't affect your ability to install the dependencies on your local machine...

3. In order to use the react-redux-loading-bar library with this app, I had to downgrade react-redux to 8.1.3
 https://github.com/mironov/react-redux-loading-bar/issues/136

## Get Setup and Running

1. Clone the repository:

    $`git clone git@github.com:Todd-Estes/EmployeePolls.git`

2. Install dependencies:

    **First, cd into employee-polls!**
   
    $`npm install`

4. Start the app:

    $`npm start`

    The app should run on localhost:3000
   
## Using the App
1. `You should see the home page. Impersonate a user from the drop down and log in:`


![Screenshot 2024-10-08 at 5 17 27 PM](https://github.com/user-attachments/assets/409121c7-6977-4c47-949d-fe48e4890e63)


   
2. `On  the Home page, you should see New Questions - these are poll questions that the authed (logged-in) user has yet to answer. If you select the Show Answered Button, you will see a list of poll questions that the authed user has already completed. At the top nav bar you should see Home, Leaderboard, New, along with Log Out:`
   
![Screenshot 2024-10-09 at 11 14 50 AM](https://github.com/user-attachments/assets/4009757c-459b-41cc-9f3e-6bc1d914d930)


3. `Select the Leaderboard link on the nav bar. You should see a leaderboard ranking all of the app users:`

   ![Screenshot 2024-10-09 at 11 15 07 AM](https://github.com/user-attachments/assets/d4e29c94-eb74-46a0-847b-d4b8c3c08450)

4. `Take note of the scores for the authed user. Select home again, and select Show for one of the New Questions. Vote on the question, and you should see some information on the poll according to your vote, along with other users:`

![Screenshot 2024-10-09 at 11 15 39 AM](https://github.com/user-attachments/assets/374e73ec-ea85-492f-92e5-6bb0832ba522)

5. `Go back to the Home page. The poll you just answered should not be on the New Questions list, but rather the Answered Questions list. Go to the Leaderboard, and your vote should be reflected in the authed user score total:`




6. ` Select New, and create a new polling question. After submitting, you should be taken back to the Home page, and you will see the new question render in the New Questions page. Click Show for the new question, and reload the page. You should be asked to log back in, and then you should see a 404 error:`

   ![Screenshot 2024-10-09 at 11 16 14 AM](https://github.com/user-attachments/assets/1c993e6a-828b-4179-851f-b313ab287946)

  <img width="638" alt="Screenshot 2024-10-09 at 12 00 15 PM" src="https://github.com/user-attachments/assets/be3ed7ff-7d66-4485-8eab-bf835231c706">


7. `When a page is reloaded, or an authed user trys to navigate the page via the URL bar, the redux store's state is automatically reset. Log in again, vote on some questions, and select the Log Out link in the nav bar. You should be asked to log in again, but all of actions made by the authed user previously will persist in the state. Check this by inspecting New/ Answered questions, along with the Leaderboard.`
