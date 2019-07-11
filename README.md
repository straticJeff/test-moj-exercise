# moj-test

Implementation of an anagram web service from the spec in `asset/README.markdown`.

## Requirements

- Node 8.x (tested with 8.15.1)

## Installation and build

- Run `npm install`
- Run `npm run build`
- If the application should run on a different port, please create a `.env` file with the `PORT` variable, e.g. `PORT=80`. It runs on port `8080` by default.

## Startup

- `npm start` - starts up the compiled service from the `dist/` folder - requires a build
- `npm start-dev` - starts up the service via babel-node from the `src/` folder - requires dev dependencies

Requests can be made to `http://localhost:8080/{word,word2}` by default. 

## Test

- `npm test` - runs unit tests in Jest
- `npm test-coverage` - runs tests and creates a coverage report in `coverage/`

## Notes

The requirements are a little loose. I would expect the following points to be clarified before implementing this service:

- **Unclear what to return when requested word is missing from the list.** For now words not on the list do not have their anagrams returned.
- **Unclear how to deal with invalid request paths, e.g. `/cat/mouse`.** For now, anything after a second slash is ignored.  
