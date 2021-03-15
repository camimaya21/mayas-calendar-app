# :calendar: Maya's Calendar App

Manage your own events and display them into a calendar view.
This app has been built with React + Typescript :smile: 

<img width="1439" alt="Captura de pantalla 2021-03-15 a las 20 06 23" src="https://user-images.githubusercontent.com/31632069/111207449-eca3a380-85c9-11eb-9cec-6ad82a7976c4.png">

## The easy way to start :rocket:

Use `startDev.sh` script to easily start the project :wink:

```bash
$ chmod +x startDev.sh
$ sh startDev.sh
```

## How to start:

### 1. Install dependencies

```bash
$ yarn install
```

### 2. Pre-config: add a `.env` file in the project's root

`REACT_APP_API_BASE_URL` env variable should be where [mayas-calendar-api](https://github.com/camimaya21/mayas-calendar-api) is running

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

### 3. Run the app

In project's directory, you can run: 

```bash
$ yarn start
```

And then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

:warning: Remember to install the dependencies first


## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed! :rocket:


