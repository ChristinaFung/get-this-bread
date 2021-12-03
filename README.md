# get-this-bread

Let's get this bread! A fun little web app to explore React and GraphQL, using the Yelp API. Designed and built by yours truly.

## Quick Start

1. run `npm install`
2. run `npm run start` in project root
3. `cd` into `node_modules/cors-anywhere` and run `node server.js` (This will allow us to fetch data from the Yelp API during local dev)

Dev build will load on [http://localhost:3000](http://localhost:3000)!

## Tech Stack

This web app is built with the following frameworks and dependencies:

- [React.js](https://reactjs.org/)
- [Yelp API](https://www.yelp.ca/developers/documentation/v3/get_started)
- [graphql-request](https://www.npmjs.com/package/graphql-request)
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere)

## Deployment

The production build is served via [Netlify](https://www.netlify.com/) and uses a self-served [Heroku](https://heroku.com) instance of [cors-anywhere](https://github.com/Rob--W/cors-anywhere) to enable our Yelp API queries.

To trigger a new production build, merge changes from `develop` into `release`.

Check it out here:  [https://get-this-bread.netlify.app/](https://get-this-bread.netlify.app/)

## Task Tracking

Please check out the [Issues](https://github.com/ChristinaFung/get-this-bread/issues) page and [project board](https://github.com/ChristinaFung/get-this-bread/projects/1) for ongoing progress with features!

## Misc. Credits

Header background: [Subtle Patterns by Toptal](https://www.toptal.com/designers/subtlepatterns/)