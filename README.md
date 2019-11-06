
# React + Firebase Boilerplate

Save time starting your React + Firebase project using this simple boilerplate. This template contains setup for Firebase, Auth, Firestore, Analytics, Cloud Functions & Hosting.

## Getting Started

Simply drop in your Firebase config in the /src/config/fbConfig.js file and begin building. This boilerplate uses the [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase) and [redux-firestore](https://github.com/prescottprue/redux-firestore) packages to handle Firebase integration.

## Deploying to Firebase

**First, build your React application:**
`npm run build`
**Then, set up Firebase Hosting:**
`firebase init` *Make sure hosting is selected. Firestore is already set up.*
When given the option for your public directory, set this to **build**.
`firebase deploy`
