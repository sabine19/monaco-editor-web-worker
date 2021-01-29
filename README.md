# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Trials to get web workers running

## npm install monaco-editor-webpack-plugin

```terminal
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: monaco-editor-rewired@0.1.0
npm ERR! Found: monaco-editor@0.21.3
npm ERR! node_modules/monaco-editor
npm ERR!   monaco-editor@"^0.21.2" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer monaco-editor@"0.22.x" from monaco-editor-webpack-plugin@3.0.0
npm ERR! node_modules/monaco-editor-webpack-plugin
npm ERR!   monaco-editor-webpack-plugin@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\birnc\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\birnc\AppData\Local\npm-cache\_logs\2021-01-29T18_23_24_734Z-debug.log
```

## npm install copy-webpack-plugin --save-dev

```terminal
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! Found: webpack@5.18.0
npm ERR! node_modules/webpack
npm ERR!   peer webpack@">=4.43.0 <6.0.0" from @pmmmwh/react-refresh-webpack-plugin@0.4.2
npm ERR!   node_modules/@pmmmwh/react-refresh-webpack-plugin
npm ERR!     @pmmmwh/react-refresh-webpack-plugin@"0.4.2" from react-scripts@4.0.1
npm ERR!     node_modules/react-scripts
npm ERR!       peer react-scripts@">=2.1.3" from react-app-rewired@2.1.8
npm ERR!       node_modules/react-app-rewired
npm ERR!         dev react-app-rewired@"^2.1.8" from the root project
npm ERR!       1 more (the root project)
npm ERR!   peer webpack@">=2" from babel-loader@8.1.0
npm ERR!   node_modules/babel-loader
npm ERR!     babel-loader@"8.1.0" from react-scripts@4.0.1
npm ERR!     node_modules/react-scripts
npm ERR!       peer react-scripts@">=2.1.3" from react-app-rewired@2.1.8
npm ERR!       node_modules/react-app-rewired
npm ERR!         dev react-app-rewired@"^2.1.8" from the root project
npm ERR!       1 more (the root project)
npm ERR!   12 more (css-loader, eslint-webpack-plugin, file-loader, ...)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer webpack@"^4.0.0" from optimize-css-assets-webpack-plugin@5.0.4
npm ERR! node_modules/optimize-css-assets-webpack-plugin
npm ERR!   optimize-css-assets-webpack-plugin@"5.0.4" from react-scripts@4.0.1
npm ERR!   node_modules/react-scripts
npm ERR!     peer react-scripts@">=2.1.3" from react-app-rewired@2.1.8
npm ERR!     node_modules/react-app-rewired
npm ERR!       dev react-app-rewired@"^2.1.8" from the root project
npm ERR!     1 more (the root project)
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\birnc\AppData\Local\npm-cache\eresolve-report.txt for a full report.
```
