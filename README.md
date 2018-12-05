# RoboContacts API

Returns a list of dummy contacts. Originally built as an API endpoint to use with the accompanying [React Native training course](https://github.com/studiozeffa/react-native-training-course).

## Installation

```
npm install
```

## Usage

Use npm scripts to work with the API as follows:

- `npm run dev`: runs the express server in development mode, using [`nodemon`](https://nodemon.io) and [`ts-node`](https://github.com/TypeStrong/ts-node) to automatically restart the Express server as necessary.
- `npm run build`: compiles the TypeScript files from the `src/` folder into the `lib` folder.
- `npm start`: starts the Express server using the compiled files in `lib/`. Use this in production.

## License

[ISC](https://choosealicense.com/licenses/isc/)