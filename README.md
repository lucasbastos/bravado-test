# Bravado - Frontend Technical Assessment

To execute this project, simple run `yarn` or `npm i` to install all dependencies. Once finished installing, run `yarn dev` or `npm run dev` to run locally

## Stack and tools used

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

## How I made it

First, I mocked some users info and created a static version of the page, focusing on the styling and the behaviour. Then I created a service to fetch the users in the `users.json` file, so the store can the filled.
After that, I created a route to search by the parameter in the url.
The last thing was to create a SFC to handle the search text highlighting, so the user could type anything (with a debounce effect, so the server isn't overloaded with requests) and the matches will highlight on the screen.

## What could be improved

- Because of the inconstancy of the strings sizes in the json file, the styling is a little bit off.
- Testing is a must. I had to cut it off due to problems with the build for production
