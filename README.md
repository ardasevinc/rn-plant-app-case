# Plant App Case

**Status**: The project could not be completed within the deadline.

## Starting the dev server

- clone the repository
- `yarn install`
- `yarn start` -> starts the expo dev server.
- Install the Expo Go app and scan the QR code on the terminal.

## Project Description

- This is a React Native app created with [Expo](https://expo.dev/).
- Styling is done mostly with tailwind through [tailwind-react-native-classnames package - twrnc](https://github.com/jaredh159/tailwind-react-native-classnames)
- Redux store and Redux toolkit query is set up but not yet implemented in the home page
- Routing is done with Expo Router, following a file based routing pattern.
  - /onboarding screens are handled with Stack routing pattern
  - index route `/` is handled as a Tab layout.
- Onboard completion state is handled with **AsyncStorage**
- Configured font loading and onboard redirections in `app/_layout.ts`. Splash screen does not hide until initial loading is complete.

### File-Folder Layout

All the source code is under `src/` directory.

- `app` -> screens and routing logic
- `assets` -> static assets (images and fonts)
- `components` -> react components
- `constants` -> planned to hold theme variables
- `hooks` -> react hooks
- `services` -> business logic & api services
- `types` -> typescript type & interface definitions
- `utils` -> utility functions

## TODO

- [ ] For some reason I can't style the `Pressable` component. Fix it so it is styled according to design requirements.
- [ ] Finish styling all the screens.
- [ ] Screens have too much JSX, split up into reusable components.
- [ ] Implement API fetching in home `/` screen with rtk-query
