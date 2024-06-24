# Match Movies
This project is the monorepo from a platform that helps your group find the best Movie to watch.
Create a session, invite your friends, and swipe to the right and left until you've all matched.

This is still in progress.

# Projects

## core
Contains all the logic for the session handling and connection to the backend, the idea is to entirely separate the core functionalities from the visual interface so it can be extensible and reusable for other applications.

## web
Consumes the core project and contains the web client which the users will interact with.

## functions
Contains the Firebase Functions codebase, i.e. the backend microservice, which will mainly deal with the session management.

## firebase
Gathers all the Firebase configuration, like database rules.
