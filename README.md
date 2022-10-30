<img src="public/icon-128.png" alt="logo"/>
<h1> Chrome Extension Boilerplate with<br/>React + Vite + TypeScript + Tailwind</h1>

This boilerplate is originally from [Jonghakseo](https://github.com/Jonghakseo).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Intro <a name="intro"></a>](#intro-)
- [Features <a name="features"></a>](#features-)
- [Installation <a name="installation"></a>](#installation-)
  - [Procedures <a name="procedures"></a>](#procedures-)
- [Screenshots <a name="screenshots"></a>](#screenshots-)
  - [New Tab <a name="newtab"></a>](#new-tab-)
  - [Popup <a name="popup"></a>](#popup-)
- [Documents <a name="documents"></a>](#documents-)

## Intro <a name="intro"></a>

This boilerplate is made for creating chrome extensions using React, Typescript, and Tailwind.

> The focus was on improving the build speed and development experience with Vite.

## Features <a name="features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Run `yarn` or `npm i` (check your node version >= 16)
4. Run `yarn dev` or `npm run dev`
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `yarn build` or `npm run build`.

## Screenshots <a name="screenshots"></a>

### New Tab <a name="newtab"></a>

<img width="971" alt="스크린샷 2022-04-11 오전 2 22 00" src="https://user-images.githubusercontent.com/53500778/162631646-cd40976b-b737-43d0-8e6a-6ac090a2e2d4.png">

### Popup <a name="popup"></a>

<img width="305" alt="스크린샷 2022-04-11 오전 2 22 11" src="https://user-images.githubusercontent.com/53500778/162631660-d35c5f12-e0d7-4431-a020-97024cdda7a7.png">

## Documents <a name="documents"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)

---
