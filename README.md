# Edene

Edene aims to give you everything you need to create and build top class products. It contains completely customizable and reusable React components, animations or hooks written entirely in Typescript.

It actually contains the foundations (_core_) and _three_ different implementations:

-   Foundations: Includes all the necessary to be used as a Design System for your applications. It contains tokens, which represent the shared values that maintain consistency across our system
-   Components: a list of reusable React components
-   Animations: a list of animations to use along with the React components
-   Hooks: a list of hooks which will help _components_ and your applications

Edene is not only a component library, goes far beyond that.

## Installation

We recommend installing the following packages first:

-   `react`
-   `@emotion/react`
-   `@emotion/styled`

```shell
$ yarn add react @emotion/react @emotion/styled
```

> See [Using Emotion](https://guardian.github.io/source/?path=/docs/docs-04-using-emotion--page) for guidance on how to configure Babel to use Emotion's css prop.

We publish the library with components written in [React](https://reactjs.org/) and [Emotion](https://emotion.sh/). You can use your favourite package manager.

```shell
$ yarn add @edene/foundations @edene/components @edene/hooks
```

_Foundations & hooks libraries have to be installed along components at this point. If you want to use the animations libraries, you can also add it to your dependencies (@edene/animations)._

Then use to import the Accordion:

```typescript
import { Accordion, AccordionRow } from '@edene/components';
```

For most of the components you also need to add support for [Google Icons](https://fonts.google.com/icons?selected=Material+Icons). Add to your HTML.

```html
<link
    rel="stylesheet"
    type="text/css"
    href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
/>
```

Or optionally to your SCSS.

```scss
@import url('https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined');
```

## Use it anywhere

Following is a project application working in different modern environments

| Environment           |      App name       |                                                                           Github repository |
| --------------------- | :-----------------: | ------------------------------------------------------------------------------------------: |
| create-react-app (Js) |      Todo-list      |                                [Todo-list on Github](https://github.com/aLosada7/todo-list) |
| Next.js               | My personal webpage |               [My personal webpage on Github](https://github.com/aLosada7/personal-webpage) |
| React app (Nx)        |    food-delivery    | [Food-delivery on Github](https://github.com/aLosada7/edene/tree/master/apps/food-delivery) |
