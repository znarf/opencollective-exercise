# OpenCollective exercise

## Run in development

```
npm install
npm run dev
```

## Run in production

```
npm install
npm run build
npm start
```

## Design Decisions

My first obvious decision was to do the application in Javascript and base the project on Express and React. It's my current personal preference and it's used at OpenCollective.

I initially considered doing a full backend application without other frameworks but then didn't want to setup `babel` and `webpack` for the JSX support. I finally settled on Next.js, as it would provide a good basis and help keep the codebase simple. It's also used for the OpenCollective frontend which was a plus.

There are just two pages, an index page, and a search page.

There is an API endpoint to return the search results. For that, I had to go a bit out of the Next.js default setup and provide a custom index.js with an Express server.

The search endpoint is relying on a search function that is doing everything in memory, based on the CSV file:

1. file is read from disk
2. parsed as CSV
3. data is transformed in objects
4. there is a simple score system based on case-insensitive matching of the query against key fields
5. results are sorted by their score
6. there is a hard limit of 10 results

The final step was to wire the API data in the search page.

## Live Version

This app was deployed with `now` on this URL: https://znarf-opencollective-exercise.now.sh/
