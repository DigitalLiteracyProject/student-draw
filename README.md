# Student Draw
An app for randomly drawing (picking) students and showing their name drawings (images) for the [Digital Literacy Project](https://github.com/DigitalLiteracyProject).

## Design

### General Workflow

1. The teacher logs in at `/admin`.
2. The teacher creates a "class" using the interface at `/admin/create`.
3. A class link `/class/<id>` is generated (e.g. `/class/vGq2fp`) and the teacher is redirected to admin interface at `/admin/class/<id>`.
4. Students go to the link `/class/<id>`. Or go to `/` and enter class id there.
5. Students input their name, customize it to their liking, and submit it to the server for approval using the interface at `/class/<id>`.
6. The teacher either approves or denies (prompting students to try again) the drawings of names as they come in live at `/admin/class/<id>` admin interface.
7. The teacher includes/excludes (e.g. for attendance) students at `/admin/class/<id>`, and configures how the random drawing will work (e.g. whether students should only ever be called once, etc.)
8. The teacher (on own or different computer) goes to `/draw/<id>`, which presents the cold calling (drawing) interface.
9. The teacher performs random drawings at `/draw/<id>`, causing names to animate in.

### Additions

* Allow students to customize their name *after* the intitial submission, potentially with **processingJS**.

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

The server is built with [Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/), and [Sequelize](http://docs.sequelizejs.com/en/v3/). This makes this app full-stack JavaScript and therefore the process for getting started with the server is similar to that of the client:

1. Ensure you have Node.
2. Clone this repo (or cd to the already cloned repo).
3. cd to the `server/` directory.
3. Install the required dependencies with `npm install`.
4. Start the server with `npm start`.

*Proxying requests*: As this is a client-side inflated app, the server essentially has no interface and only exposes an API at `/api` by default on `localhost:3001`. As the React (Webpack-based) development server is nice for developing the client and due to the Same-Origin policy of browsers, it is desirable/necessary to proxy requests to the server API through the React development server. This has been set up in `client/package.json` appropriately for the server running at `localhost:3001`.

*Database*: The server stores (creates/updates as necessary) an SQLite database file `student_draw.db` in the working directory. In order to aid development, an SQLite database viewer such as [DB Browser for SQLite](http://sqlitebrowser.org/) may be handy to verify server workings.
