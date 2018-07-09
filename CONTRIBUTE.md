# Developer Guide

You can find instructions about how to submit code changes below.

__Resources:__
* [ERDs/Technical Diagrams](https://www.dropbox.com/sh/3tloq9k7lwvd93s/AABOeQRViL_qlET9SyT04bdWa?dl=0)
* [Mockups](https://projects.invisionapp.com/share/MFIYWL1HGA6#/screens/297295391)
* [Test server](https://mcrallytest.herokuapp.com/)
* [API Docs](https://rallystarter.docs.apiary.io/)
* [Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-)

**Table of Contents:**

* [Code Guidelines](#guidelines)
* [Pull Requests](#pullrequests)
* [Project Settings](#settings)
* [Development Tips](#devtips)
* [How to create new components](#workflow)
* [Setting up the API](#api-config)
* [Testing Your Code](#testing)
* [Using the Issue Tracker](#issues)

## Submitting Code

To submit code, use Pull Requests. They should be used for basically all changes made to the repository whether you're just looking for feedback, asking a question, giving a demonstration or just for discussions sake. Talking in the context of code is easier than trying to pen a code description in English. Use Pull Requests liberally for all conversations about development.

<a name="guidelines"></a>
## Code Guidelines

- Base your changes on the `develop` branch
- Fork this repository and then submit a pull requests (PR) to submit changes.
- Ask another contributors to review and merge your PRs.
- Run the tests before submitting a PR and make them pass
- Lint before submitting a PR. Aim for a score of at least 7
- Never store sensitive credentials in the repository


<a name="pullrequests"></a>
## Submitting Pull Requests (PRs)

All code changes should be submitted via PRs. Squash commits. PRs should have 1 commit

__Commit message format__
Before submitting a pull request, create a good commit message for your changes. The message will become the title and description of your PR later.

* ISSUE_TYPE ISSUE_NUMBER -- Description of the work done*</br>
    - Example: `Fix #269 -- Adjust button width on contact form`
* Add a detailed description to your commit. Include references to related issues

__Pull Request Format__
- Title: Same as commit message above.
- Description: Add some details about the code changes. Include links or references that will help other developers review the code!
- Checklist: Make sure to hit all the marks!
- Code Failures: [Travis](https://docs.travis-ci.com/user/getting-started/) will automatically test the PR. If there are any test failures, review the code and fix the errors. If it's unclear what's wrong, leave a comment on the PR and other developers will help.

**More Documentation**
- [Github Docs](https://help.github.com/articles/about-pull-requests/)
- [ES6 Lint Guide](https://eslint.org/docs/rules/)


<a name="settings"></a>
## Setting Up Local

```bash
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

<a name="devtips"></a>
## Development Tips

An overview of the app structure and recommendations for development.

Request access to credentials from project lead(s).

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

<a name="workflow"></a>
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

<a name="testing"></a>
#### Testing

When time permits, write tests for your components. More info coming soon ...

<a name="api-config"></a>
#### Setup API

Get the Rails API setup so that you can use it to make requests with the client! Instructions on setting it up are available in the README of that repository.

<a name="issues"></a>
## Issue Tracker

Use the tracker to report bugs, request features, or just as a discussion forum about development in general. There will usually be an issue associated with pull requests.
