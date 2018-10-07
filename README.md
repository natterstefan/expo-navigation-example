# Expo Navigation Example

[Expo](https://expo.io) is an awesome tool when it comes to developing native
Android and iOS Apps with Javascript. One of the major things developers have
to take care of when creating the app is the in-app navigation. Most developers
use [react-navigation](https://reactnavigation.org) to handle this task.

Once you understand how react-navigation works it is super easy and simple to
navigate users through the several flows of the app. But I had troubles at
first to understand the different types of navigators: [Stack Navigator](https://reactnavigation.org/docs/en/stack-navigator.html),
[Switch Navigator](https://reactnavigation.org/docs/en/switch-navigator.html) or
[Drawer Navigator](https://reactnavigation.org/docs/en/drawer-navigator.html) are
just three of them.

That is why I created this basic and supe simple example illustrating how to
create an "Authenticated" and "NotAuthenticated" navigation stack, with an App
Header and Drawer in the "Authenticated" stack.

Check out the [setup](#setup) instructions and [start app](#start-app) section
to get the example running.

## Setup

Install the target node version with nvm (eg. `nvm install 8.12.0 && nvm use`).

Then run the following installation command

```sh
# or yarn
npm install
```

## Start App

Start the app and run it in an simulator or on your device by following the
steps below:

For iOS devices:

- create an account on expo.io (required for iOS, because of [this issue](https://blog.expo.io/upcoming-limitations-to-ios-expo-client-8076d01aee1a))
- download the Expo app from the App or Google Play Store
- open the app on your phone and log in with your expo account

For all devices:

- install expo-cli with `npm i expo-cli -g`
- clone this repository and follow the [Setup](#setup) instructions
- start the project with `npm start` (which will invoke `expo start`)
- open your browser [Expo Developer Tools](http://localhost:19002)
- either start the app by clicking on one of the "start with simulator" links
- or open the expo app on your device and click on the project name. You should
  see it in the list of apps when you are in the same network.

## Theme - React-Native-Paper

This app usees the great work of callstack for the base material ui components.

- [GitHub Repository](https://github.com/callstack/react-native-paper)
- [Docs](https://callstack.github.io/react-native-paper)
- [View and edit react-native-paper with this Expo Snack](https://snack.expo.io/@satya164/github.com-callstack-react-native-paper:example)

## Licence

[Apache License 2.0](LICENCE)

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/natterstefan">
          <img width="150" height="150" src="https://github.com/natterstefan.png?v=3&s=150">
          </br>
          Stefan Natter
        </a>
        <div>
          <a href="https://twitter.com/natterstefan">
            <img src="https://img.shields.io/twitter/follow/natterstefan.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
