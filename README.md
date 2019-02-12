# graphql-explore
Allows anyone to explore **graphql** know-hows with zero setup needed (except for pre-requisites stated below).

Uses graphpack (https://github.com/glennreyes/graphpack) as the zero-config graphql server / runtime to kick-start
** There is no need to install graphpack and related dependencies; the git clone would provide the entire packages required

### Pre-requisites
1. Install nodejs if you haven't, which also installs npm

## Execution
1. Git clone the entire repo
2. On your terminal, `npm run dev`
3. You should see message 🚀 Server ready at http://localhost:4000/
4. Point your  browser to the above URL and you will see graphql playground being launched.
5. Enjoy your queries, mutations and exploration!

## Your own self-exploration
1. `./src/schema.graphql` - defines the SDL for your types, query, mutation, subscription, enums etc
2. `./src/resolvers.js` - logic to handle query, mutation, subscription
3. `./src/db/js` - simple JSON based data source for your own crafting; remmber to change the `type` definition in `schema.graphql` if you define more datasets.
