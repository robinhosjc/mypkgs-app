# mypkgs :package:

Save and organize your favorites packages

## Design and methodologies :art:

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [BEM](http://getbem.com/introduction/)

## Structure :pushpin:

```
|-- src
|   |-- components
|   |   |-- atoms
|   |   |   |-- Button
|   |   |   |   |-- Button.tsx
|   |   |   |   |-- Button.stories.tsx
|   |   |   |   |-- index.ts
|   |   |   |   `-- styles.css
|   |   |   `-- index.ts
|   |   |-- molecules
|   |   |   |-- ...
|   |   |   `-- index.ts
|   |   |-- organisms
|   |   |   |-- ...
|   |   |   `-- index.ts
|   |   |-- pages
|   |   |   |-- ...
|   |   |   `-- index.ts
|   |   `-- templates
|   |       |-- ...
|   |       `-- index.ts
|   |-- utils
|   |   |-- ...
|   |   `-- index.ts
|   |-- store
|   |   |-- actions
|   |   |   |-- ...
|   |   |   `-- index.ts
|   |   |-- reducers
|   |   |   |-- ...
|   |   |   `-- index.ts
|   |   `-- index.ts
|   `-- assets
|       |-- images
|       `-- svgs
|-- App.tsx
|-- index.tsx
|-- index.css
```

## Dev :tada:

Storybook

```bash
yarn storybook
```

Development

```bash
yarn start
```

## Production :rocket:

```bash
yarn build
```

## Contribuition :sunglasses:

Branch structure:

- `master`: Main (production)
- `dev`: Development
- `feature/x`: Features
- `bugfix/x`: Bug fixes
- `hotfix/x`: Hot fixes

Example feature:

```bash
cd project
git checkout -b feature/x dev
```

As soon as you done, create a pull request to `dev` branch, describing the purpose of changes, as well as how to test and expected results.
