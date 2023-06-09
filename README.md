# Table of contents

1. [Summary](#introduction)
2. [Lessons Learned](#lessons)

   1. [Create a react project with vite](#lesson1)
   2. [Including various resources](#lesson2)
   3. [Routing](#lesson3)
   4. [useState](#lesson4)
   5. [useEffect](#lesson5)
   6. [Slider Control](#lesson6)
   7. [Adaptive Box Sizing](#lesson7)

3. [Gotchas](#gotchas)
4. [React Boilerplate](#react)

# <a name="introduction">Summary</a>

Used React to create a fairly complicated, responsive order form maintaining state across pages.

# <a name="lessons">Lessons Learned</a>

The purpose of this section is to memorialize those lessons. I'm also going to include a smaller discussion about the slider section since that comes up a bit.

### <a name="lesson1">Creating a react project using vite </a>

1. npm create vite@latest (use . to give project same name as folder)
2. choose JS & SWC
3. cd into folder
4. npm install
5. npm run dev to get it up and running

### <a name="lesson2">Including Various Resources</a>

1. `import App from "./App"` - include jsx
2. `import "./css/style.css"` - include css
3. `import { BrowserRouter } from "react-router-dom"` - include top-level routing in index.js
4. `import { Routes, Route } from "react-router-dom"` - include routing switch (Routes) in App.jsx
5. `import { useState, useEffect } from "react"` - include hooks for state and effect
6. Adaptive option sizing

### <a name="lesson3">Routing: how to switch between pages</a>

### <a name="lesson4">useState hook: how to set and recall variables</a>

#### Import useState and then destructure for var and setVar

`import {useState} from "react" `  
`-----------------------------`  
`const [yearlyTerm] = useState(() => {`  
`let temp = localStorage.getItem("yearlyTerm")`  
`return temp === "true" ? "true" : "false"})`

### <a name="lesson5">useEffect hook: how to create side-effects</a>

### <a name="lesson6">Slider Control: how to create a slider switch</a>

1. sliderComponent: top-level container for slider mechanism: set width of slider here
2. `<p> <label> <p>`: left \<p> - then slider wrapped in \<label> - then right \<p>
   - \<input checkbox> wrapped inside label
   - \<b> wrapped next - ball with sliderBall:before
   - ball animation css: `input:checked + .sliderBall:before { translate: 16px;}`

### <a name="lesson7">Adaptive Box Sizing: box will shrink and grow for content</a>

1. set min-height: 160px;
2. set max-height: 183px;
3. set height: max-content;

# <a name="gotchas">Gotchas</a>

## React-isms that trip me up.

1. Strict typing: you must compare with === and string to string
2. Pass props down from high up
3. useEffect - if you setSomething(foo) - the updated foo value won't be available in the current useEffect block. It will become available next call.

## Getting Started with Create React App <a name="react"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
