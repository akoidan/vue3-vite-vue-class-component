[![Github actions](https://github.com/akoidan/vue3-vite-vue-class-component/workflows/CI/badge.svg)](https://github.com/akoidan/vue3-vite-vue-class-component/actions)
# Vue-class-component vite

## Get started
 - Use specific node version specified in .nvmrc: `nvm use`
 - Install package libraries with **yarn** package manager `yarn install --frozen-lockfile`
 - Copy build configuration: `cp build/example.json build/local.json`.
 - To start dev server use `yarn start`. The app should be available on [http://localhost:8080](http://localhost:8080)
 - To lint and test use `yarn test` and `yarn lint`. To fix eslint errors use `yarn lint:es:fix`
 - To start cypress test locally halt the vite devserver and run `yarn test`.
 - For developing cypress test it's easier to the vite dev server `yarn start` and run `yarn cypress open`. In this configuration files `build/local.json` and  `build/test.json` should be alike. 

 
## Configuring local system

### Variables variables

- `BACKEND_ADDRESS` - Full url for the backend. E.g. https://localhost:8082
- `IS_DEBUG` - turn on logging and other features that are helfull for debug
- `PUBLIC_PATH` - string, e.g. `https://s3.amazonaws.com/`, url for images/js/css/fonts instead of relative path like './main.js. Can be used if you're using CDN that's on a different domain than `index.html`
- `PORT` - e.g. 8080 only for dev server to serve a port. If you run cypress against vite dev server instead of servor PORT should be the same as in `build/test.json`
- `BASE_URL` used in cypress test to determine which site to open

### Configuration files

- [.eslintrc.json](.eslintrc.json) is a [configuration](https://eslint.org/docs/user-guide/configuring) for ts linting
- [.stylelintrc](.stylelintrc) is a [configuration](https://stylelint.io/user-guide/configure/) for sass linting
- [cypress.config.ts](cypress.config.ts) is a [configuration](https://docs.cypress.io/guides/references/configuration.html#Global) for cypress e2e testing
- [package.json](package.json) is a [configuration](https://docs.npmjs.com/files/package.json) for yarn (npm), since it doesn't have versions of sublibs they are stored in [yarn.lock](yarn.lock)
- [tsconfig.json](tsconfig.json) is a [configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for typescript. While this files is used to build static files for FE, [cypress/tsconfig](cypress/tsconfig.json) is used to build files that would run test in cypress.
- [tsconfig.eslint.json](tsconfig.eslint.json) ts configuration used in eslint to ignore checks in node_modules types that are broken.
- [vite.config.ts](vite.config.ts) is vite [configurations](https://vitejs.dev/). [tsconfig.node.json](tsconfig.node.json) Is used for transpiling vite config, since it's in TS. 
- [patches](patches) directory is used by [patch-package](https://www.npmjs.com/package/patch-package) to fix issues in current version of libs atm (which is 09/2022)
- [build/development.json](build/development.json) configuration for build for development environment, same is for staging.json, production.json. If VITE_BUILD_ENV is not specified, build/local.json would be used. 


## Get familiar with stack

### [typescript](http://www.typescriptlang.org/docs/home.html)

Typescript (or ts shortly) allows to write typesafe code:

```typescript
const a: number = 3;
```

- To get started with ts I would recommend watching [this](https://www.youtube.com/watch?v=ahCwqrYpIuM) 10 minutes video
- To get started with decorators I recommend [this video](https://www.youtube.com/watch?v=O6A-u_FoEX8)
- For advanced learning I recommend checking [what's new](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html) in every version of typescript. You may find a lot of interesting things.

### [vue](https://vuejs.org/guide/introduction.html)

Vue  allows to write [SFC](https://vuejs.org/v2/guide/single-file-components.html) that would generate html to the page. Vue is only responsible for UI layer, this is not an MVC framework. The only thing that it does is creates `<div></div>` codeblocks. Everything else is handled by libraries below .

### [vuex](https://vuex.vuejs.org/)

Vuex is a state management pattern. It allows multiple vue components to have single model/data (source of truth). So if you have a user object like `{age: 3, name: 'eric'}` it can be accessible in multiple places. This is redux/mobx analogue for React.

### [vueRouter](https://router.vuejs.org/guide/#html)

Vue router  allows navigation across pages in vue, w/o sending get request to the server. And produces access to URL parameters. The examples of routes is [here](src/ts/instances/router):

```typescript
new VueRouter({
  routes: [{
    path: '/posts', // this is url address
    component: PostsPage // this is vue component
  }]
});
```

### [sass](https://sass-lang.com/guide)

Sass allows to write code that would be compiled into css

```sass
$font-stack:    Helvetica, sans-serif
body
  font: 100% $font-stack
  a
    display: block
```

### [vue-class-component](https://github.com/vuejs/vue-class-component)

Vue class component allows to write vue component in class manner instead of object:

```javascript
export default class App extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
```

### [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

Since vue-class-component forces you to have decorators above the class like this:

```javascript
@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {}
```

the following construction can be used instead:

```typescript
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export class MyComp extends Vue {

  @Ref
  button: HTMLInputElement;

  @Prop() readonly propA!: number;

  @Watch('child')
  onChildChanged(val: string, oldVal: string) { }

  @Emit()
  changedProps() {}
}
```

### [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators).

This is a wrapper with static getters for vuex. Check [store/users](src/store/store.ts) instead of writing vuex modules as a dict, for instance:

 ```typescript
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class UserState extends VuexModule {
  count = 0
  @Mutation
  increment(delta: number) {
    this.count += delta
  }
  // action 'decr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  decr() {
    return 5
  }
}
```

State can be injected into the vue component this way:

```typescript
class A extends Vue {
    @UserState
    public readonly count!: number;
}
```

### [lines-logger](https://github.com/akoidan/lines-logger)

This wrapper provides a single interface to console.log and displays the origin source file location:

```typescript
logger.log('Hello world')(); // pay attention to () in the end.
```

### [cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)

A testing framework that allows running test-cases directly in chrome (alternative to Selenium, that runs it on server)  That part you've already seen on mocha above can be appended with cypress assertions and helpers:

```typescript
it("should contain 5 elements", (): void => {
  cy.get("[data-cy=filtered-users-container]").children().should("have.length", 1);
});
```
Cypress policies are:
 - We mock every 3rd party dependnency, including backend and images for every test
 - Every single page (item imported to vue-router) should have at least one screenshot tests, one assertion for text it contains (e.g. cy.contains('home page'), one default action behaviour (e.g. login action resulting being logged in), if there are any and a few failed steps (e.g. incorrect password during login)
 - Screenshot match library has the fixed resolution defined in the figma which is 1280x720. If you run cyress in development mode, set chrome zoom exactly to 100% and iframe window with the app should fit it wihout scale as well (another zoom is specified in the right top corner and it should be 1280x928 wihtout percentage symbol)

## Development tips

### How to ignore linting errors

- Exclude from coverage: `/* istanbul ignore if */` [guide](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md)
- ignore tslint error: `// tslint:disable-next-line:variable-name` [guide](https://palantir.github.io/tslint/usage/rule-flags/)
- ignore eslint error:  `// eslint-disable-line no-prototype-builtins` [guide](https://eslint.org/docs/user-guide/configuring)
- ignore typescript error: `// @ts-ignore: next-line` [guide](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html#suppress-errors-in-ts-files-using--ts-ignore-comments)
- ignore stylelint error: `/* stylelint-disable-line */` [guide](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md)

### Debugging
 - Take a look at [vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
 - window has many useful objects like `consts`, `vue`, `store`, `router`, `api`, so you can do things like `store.dispatch('alertError', 'Hello')` directly from chrome dev console

### Logging
Every vue component has injected `.$logger` object, to log something to console use `this.logger.log('Hello {}', {1:'world'})();` Note calling function again in the end. Logger is disabled for production. For more info visit [lines-logger](https://github.com/akoidan/lines-logger)

### API
Every component has injected `$.api` object. You should do http calls with `$this.$api`. If you prefer redux style you can call http in vuex actions.


