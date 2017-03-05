# Typescript Spike

Proof-of-concept for a login page using Typescript+React+Redux.

## Setting up

Install dependencies:

```bash
$ npm install -g yarn # a more predicatable wrapper around npm
$ yarn                # install npm dependencies
```

## Building and previewing

Compile the code as follows:

```bash
$ npm run build               # compile the code once
```

Output from the typescript compiler and webpack goes into `./dist`.
The bundled executable is in `./dist/bundle.js`.

Start a dev webserver as follows:

```bash
$ npm start                    # run a web server on localhost
$ open 'http://localhost:8080' # view the app
```

## Continuous building

Watch and continuously recompile the code:

```bash
$ npm run watch                # watch and recompile the code
```

Note: This doesn't run `npm start`.
Do that in a different terminal.

## Tutorials and further reading

Based on the following example:

  - [Typescript + React + Redux][rjz-example]

Related articles by the author of the example:

  - [TypeScript and Redux: getting started][rjz-article-1]
  - [TypeScript and Redux: adding React][rjz-article-2]
  - [TypeScript and Redux: async actions][rjz-article-3]
  - [TypeScript and Redux: unit testing with Jest][rjz-article-4]
  - [Integrating TypeScript and redux-thunk][rjz-article-5]

[rjz-example]: https://github.com/rjz/typescript-react-redux
[rjz-article-1]: https://rjzaworski.com/2016/08/getting-started-with-redux-and-typescript
[rjz-article-2]: https://rjzaworski.com/2016/08/typescript-redux-and-react
[rjz-article-3]: https://rjzaworski.com/2016/09/typescript-redux-async-actions
[rjz-article-4]: https://rjzaworski.com/2016/12/testing-typescript-with-jest
[rjz-article-5]: https://rjzaworski.com/2017/01/typescript-redux-thunk
