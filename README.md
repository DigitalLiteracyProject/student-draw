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
*Coming Soon!*
