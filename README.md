# rallystarter_client

> Frontend Vue ap for use with Rally Starter API

* [Project Board](https://app.asana.com/0/694004602771533/board)

## Developers

An overview of the app structure and recommendations for development.

Request access to credentials from project lead(s).

__Resources:__
* [ERDs](https://www.dropbox.com/sh/3tloq9k7lwvd93s/AABOeQRViL_qlET9SyT04bdWa?dl=0)
* [Mockups](https://projects.invisionapp.com/share/MFIYWL1HGA6#/screens/297295391)
* [Test server](https://mcrallytest.herokuapp.com/)
* [API Docs](https://rallystarter.docs.apiary.io/)
* [Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)

### Client Structure

Below is a list of pages (components) and all the components they should have.
- App: Navbar, Footer
- Home component: Header.vue, Search.vue, RallyList.vue
- RallyForm: A form for creating a rally. Target.vue, Action.vue, Event.vue, Rally.vue

### Workflow

Developing new content and features for the client is fairly straight-forward. Use a component driven approach, supported by technical mockups.

First, create a technical mockup for the layout of a new page. In it:
- Breakdown each section of the page
- Identify the components that make it up

From there, begin creating each individual component. Create new visual aids as necessary from that point.
- Identify test cases
- Write unit tests as necessary for each component.
- Frequently commit to a feature branch for testing on test server (if available)

Once all the components are created, begin adding them to the new page.
- Create integration tests as necessary.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
