# Exchange screen
## how to use it
 - run ```npm i```
 - for dev run ```npm run dev``` => it will launch the example app
 - for prod run ``` npm run build```
 
 ## Folder Structure
 ```
base/
     build-utils/ => all webpack config are living here
         presets/ => webpack presets are living her
             webpack.analyze.js // analyze of the build display in a graph
             webpack.compress.js // compress build when used
         loadPresets.js // load webpack presets
         records.json // json of stats from the last webpack build
     node_modules/
     Notes/
         general-notes 
     public/
         index.html
     src/
         shared/ => code for the app
             __tests__/ => test files for js files at this folder level
                 utils.js // test code for the utils file
             assets/ => assets folder such as fonts, svg, gif etc...
                 images/ 
             components/ => ui components code
             styles/ => Sass files
             utils.js // Utils functions for the main app
         App.js
         index.js
         main.scss
     test/ => jest helpers and test utils
         file-mock.js // mock file utils
         jest-client.js // jest config for client test
         jest.lint.js // jest config for jest running eslint
         jest.server.js // jest config for server test
         jest-common.js // jest config shared by client and server 
         style-mock.js // jest util to mock css module, can be removed if not needed
     .babelrc.js // babel config file
     .eslintrc.js // eslint config file
     .gitignore // file to be ignored by git
     .huskyrc// husky setting (run some check before commit)
     .lintstagedrc // lint staged config (run linter only on file that are going to be commited)
     .prettierrc // prettier config (formatting )
     .travils.yml // travis config for ci integration
     jest.config.js // jest config entry point
     package.json // mother of all truth
     postcss.config.js // post css config file, (uglyfy css for prod)
     webpack.config.js // webpack config entry point
 ```

## Technologies used
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/) 
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Travis](https://travis-ci.com/)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro)




