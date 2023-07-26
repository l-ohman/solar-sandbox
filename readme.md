# solar sandbox
## Overview
Solar sandbox is an interactive single-page-application that allows users to customize their own solar system with a node graph editor and view their changes in 3D in realtime. I had 2 main goals when creating this project: the first was to learn some new and interesting frameworks such as React-Flow, Three.js, and Zustand, and the second was to build an application that is fun, immersive, and responsive to use.

**Features**
* Realtime editing of 3D view
* User-friendly node graph editor
* Procedurally generated star system

**Learning outcomes:**
While working on this project, I learned a great deal about React and its Hooks API. React-Flow in particular challenged me to learn much more about how hooks such as useEffect, useCallback, and useMemo work behind the scenes. I also learned a great deal about Three.js. I already had a bit of experience with 3D modeling in the past, so learning Three felt somewhat intuitive. However, my interaction with Three was primarily through react-three-fiber - so diagnosing issues turned out to be quite challenging, as it was often difficult to determine the root cause of any bugs. As a result, I believe working on this project improved my debugging ability tremendously.

## Technologies used
* [React](https://www.npmjs.com/package/react) - the foundation for this project
* [React-Flow](https://www.npmjs.com/package/react-flow) - basis for node graph editor
* [Three.js](https://www.npmjs.com/package/three) - general purpose 3D library
* [react-three-fiber](https://www.npmjs.com/package/@react-three/fiber) - helps integrate React and Three.js
* [zustand](https://www.npmjs.com/package/zustand) - global state management

 ## Setup this repository locally
Clone and setup the repository with the following commands:
```
git clone git@github.com:l-ohman/solar-sandbox.git
cd solar-sandbox
npm install
npm run build
npm run start
```
View the project on http://localhost:3000
