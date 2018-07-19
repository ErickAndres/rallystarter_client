# Rallystarter Client

> Frontend Vue ap for use with Rally Starter API

* [Project Board](https://app.asana.com/0/694004602771533/board)

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

## Development Tips

An overview of the app structure and recommendations for development. All code changes should be based on the `develop` branch. It's the branch used to integrate all changes for a release.

Request access to credentials from project lead(s) as needed.

__Resources:__
* [ERDs/Technical Diagrams](https://www.dropbox.com/sh/3tloq9k7lwvd93s/AABOeQRViL_qlET9SyT04bdWa?dl=0)
* [Mockups](https://projects.invisionapp.com/share/MFIYWL1HGA6#/screens/297295391)
* [Test server](https://mcrallytest.herokuapp.com/)
* [API Docs](https://rallystarter.docs.apiary.io/)
* [Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)
* [How to Document](http://usejsdoc.org/about-getting-started.html)

The test server is a live server where you can manually test features.

### Client Structure

The site is made up of many components. There are two main component types in this client: page components and basic components.

The `src/views/` folder contains the pages components. Each component in this folder represents a page on the the site. For example, there's a Home page, Contact page, Start Rally page, etc. Pages can contain many other componenets. See the ERDs link above for pictures.

The `src/components` folder contains individual elements of a page. An example would be a button, a list, a container, a form. These components can be used in any of the page components in `src/views/`.

#### Components

Componets are organized by object. Each component contains:

* HTML template
* Javascript code
* CSS styling

...all in the same file. This coupling is intentional to make development transparent, fast and simple.

Materialize CSS is also included in the app. Use this to create a responsive site. You can learn more about it in [the documentation](https://materializecss.com).

Below is an incomplete list of pages (components) to get started. You'll add/remove components as needed to complete each page.

- **App.vue**: Global component wrapped around ALL other componenets on the site. *Contains: Navbar.vue, Footer.vue*
- **Home.vue**: Landing page. *Contains: Header.vue, Search.vue, RallyList.vue, Login.vue (modal), Signup.vue (modal)*
- **StartRally.vue**: A form for creating a rally. *Contains: Target.vue, Action.vue, Event.vue, Rally.vue*
- **Dashboard.vue**: User detail view when they're logged in. *Contains: RallyList.vue (created), RallyList.vue (joined rallies), Profile.vue.*
- **RallyPage.vue**: Rally view. *Contains: Rally.vue*

### Workflow

Developing new content and features for the client is fairly straight-forward. Use a component driven approach, supported by technical mockups like the ones linked in the resources above. Its good to have even a very basic visual aid, it doesn't need to be highly elaborate. It should be just enough to help you visualize what you're creating.

First, create a technical diagram for the layout of a new page. In it:

- Breakdown each section of the page
- Identify the components that make it up
- Create one component at a time

From there, begin creating each individual component. Create new diagrams as necessary from that point. Once the components are created, it's time to make a page and display them.

- Create a new page in `src/views/`
- Add a route for the new page
- Test it in your browser to make sure it displays

Finally, it's times to style it and make it look good! Once your components are displaying, continue tweaking the styles.

Push PRs frequently to get feedback and direction. When the PR is complete, it'll be merged and launched on the test site where you can further test it.

#### Testing

When time permits, write tests for your components. More info coming soon ...
