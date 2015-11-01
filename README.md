# experiments

Collection of few ideas implemented using AngularJS:
* Actors Search - Given a movie name, find actors.

Implementation can be accessed at:

http://jahangirmohammed.github.io/angular-experiments/app/

### Install Dependencies

```
npm install
```

### Run the Application

The simplest way to start the server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
  actors-search/                --> the actors search view template and logic
    view.html            --> the partial template
    view.js              --> the controller logic
    view_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

### Running Unit Tests

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

To configure Karma to do a single run of the tests and then exit:

```
npm run test-single-run
```


### End to end testing

TODO
