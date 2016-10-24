# Student Draw
An app for randomly drawing (picking) students and showing their name drawings (images) for the [Digital Literacty Project](https://github.com/DigitalLiteracyProject).

## Getting Started for Users
*Coming Soon!*

## Getting Started for Developers
**Student Draw** uses a client-server WebSockets-based architecture built on full-stack JavaScript.

### Client
The client is built with [React](https://facebook.github.io/react/) using boilerplate from [create-react-app](https://github.com/facebookincubator/create-react-app). Follow the steps below to get started with development.

1. Ensure you have [Node](https://nodejs.org/en/) version 4.6 or later. You may check by running the following commands in a Terminal or Command Prompt.

        node --version  # should output v4.6 or later
        npm --version  # should output some version (i.e. should not error)

2. Clone this repo, and cd to the `client/` directory.

        git clone 'git@github.com:icasdri/student-draw.git'
        cd 'student-draw/client'

3. Install the required dependencies locally into `node_modules`.

        npm install

4. Start the development server with `npm start`.

        npm start

5. Using a browser, go to whatever address got printed (usually `http://localhost:3000/`).
6. Start hacking on the source code! The development server and browser should live-update as you edit and save.
7. To compile and create a *production* build suitable for deployment, run the following (the built client files will be placed in `build/`).

        npm run build

### Server
*Coming Soon!*
