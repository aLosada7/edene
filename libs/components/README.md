See full docs in [Storybook](https://main--62ed74f612c78f7bbe13743e.chromatic.com)

# Edene

Edene aims to give you everything you need to create and build top class products. It contains completely customizable and reusable React components, animations and hooks. It has been entirely written in Typescript.

Edene also comes with another library called **foundations**, a serie of guidelines and tokens, which give programmers all the necessary to create efficient and eye catching user interfaces, following design principles, and with a focus on user experience.

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
$ yarn add @edene/foundations @edene/components
```

_Foundations library have to be installed along components at this point_

Then, wrap your application with ThemeProvider, which comes from _@edene/foudations_. You can also override the theme through a parameter. See more on Theme docs.

Finally, import any of the components in your application and use it:

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
