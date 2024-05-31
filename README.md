# `react-scripts-ts` [![npm version](https://badge.fury.io/js/react-scripts-ts.svg)](https://badge.fury.io/js/react-scripts-ts) [![Build Status](https://travis-ci.org/wmonk/create-react-app-typescript.svg?branch=master)](https://travis-ci.org/wmonk/create-react-app-typescript)

Create React apps (with Typescript) with no build configuration.

 * [Getting Started](#tldr) – How to create a new app.
 * [User Guide](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with react scripts ts.

_Do you know react and want to try out typescript? Or do you know typescript and want to try out react?_ Get all the benefits from `create-react-app` but you use typescript! 🚀

## tl;dr

```sh
npm install -g create-react-app

create-react-app my-app --scripts-version=react-scripts-ts
cd my-app/
npm start
```

## Migration

In general, most upgrades won't require any migration steps to work, but if you experience problems after an upgrade, please file an issue, and we'll add it to the list of migration steps below.

### From `<2.16.0` to `>=2.16.0`

Since `2.16.0`, the template uses different `tsconfig` files for both development and production mode. For the latter, unfortunately, the path resolver is not smart enough to fall back to the basic `tsconfig.json` in case the expected `tsconfig.prod.json` is not present, so you have to create this file manually like shown [here](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/tsconfig.prod.json).

### From `<2.13.0` to `>=2.13.0`

Since `2.13.0`, `typescript` is listed as a peer dependency of `react-scripts-ts`. For projects generated with at least this version, the init script takes care of properly installing it as dev dependency to the generated projects. Older projects require manual installation, in case you have not already done that.

Using `npm`:
```
npm i -D typescript
```

Using `yarn`:
```
yarn add -D typescript
```

### From `<2.5.0` to `>=2.5.0`

Version `2.5.0` introduces a new config file for jest, that is necessary for the tests to run. If you were previously running a version older than `v2.5.0` and upgraded to `v2.5.0` or newer, you need to manually add the new file, or else you'll get an error similar to this when trying to run your tests:

```javascript
Test suite failed to run

{
    "messageText": "Cannot read file 'C:\\[project]\\tsconfig.test.json': ENOENT: no such file or directory, open 'C:\\[project]\\tsconfig.test.json'.",
    "category": 1,
    "code": 5012
}
```

To fix this, create a new file *in the root of the project* called `tsconfig.test.json`, and paste [the content of this file into it](https://raw.githubusercontent.com/wmonk/create-react-app-typescript/master/packages/react-scripts/template/tsconfig.test.json). Everything should work now. For more info, please see [this issue](https://github.com/wmonk/create-react-app-typescript/issues/141).
