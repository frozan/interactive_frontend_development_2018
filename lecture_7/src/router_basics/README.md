# Routing and history in React

## Running the application

```
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

* [React Router](https://reacttraining.com/react-router)

_async_process_with_middleware_ example is continued from.

### React Router

React Router provides an abstraction over the [DOM history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) by providing declarative links and routing.

All routes and links must be enclosed in a `Router` component which provides _context_ to children similary to redux `Provider`.

`Link` elements render anchors (<a>) to URLs which navigate without triggering a page refresh. Links use the DOM history API to achieve this.

`Route` elements map URLs to components and provide URL parameters (if any) to those components.

`Route` elements can be at any level of the application.

### Webpack and History API

[webpack.config.js](../../webpack.config.js) has been configured
to not look for static files, but to show a landing page when an
unknown URL is encountered. This allows in-app routing to be
performed, otherwise a 404 Not Found response would be given.

```
  devServer: {
    historyApiFallback: true
  }
```

### Links

[AppHeader](./components/AppHeader) has been changed to show links to application sub-sections.

### Routes

[App](./containers/App) has been changed to show different
components on different routes.

### Containers

[CommentFormContainer](./containers/CommentFormContainer) automatically
navigates to `/comments` after submitting a comment.

[CommentContainer](./containers/CommentContainer) has been added to be able to
show individual comments (there are no in-app links for this).

[_Back_](../../README.md)
