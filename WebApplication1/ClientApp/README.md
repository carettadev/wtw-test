# ClientApp

NOTES On Solution:


Server Side
  - Only basic unit tests
  - Made an assumption that the repository code could not be changed
  - Doesn't return any detailed errors/HTTP Codes to client when an exception occurs
  - No exception logging
  - No server side validation
Client Side
  - Needs more validation on inputs and better user error messages
  - Needs warning dialog on delete to confirm action with user
  - better error logging required. just logging to console at the moment
  - Was going to use NgRx but thought it overkill for this
  - Could write more unit tests but ran out of time
  - Had many issues with getting e2e tests working due to npm/node/package version clashses. Should be OK now.
  - protractor tests should be against mocks. disabled CORS on server side to get around this



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
