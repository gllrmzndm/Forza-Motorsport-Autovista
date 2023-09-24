# Guillermo's Forza Motorsport Autovista project

## Project story

In the first few tutorial articles we will define a simple browse-only library that library members can use to find out what books are available. This allows us to explore the operations that are common to almost every website: reading and displaying content from a database.

As we progress, the library example naturally extends to demonstrate more advanced features. For example we can extend the library to allow users to reserve books, and use this to demonstrate how to use forms, and support user authentication.

## Disciplines


### Folder structure

```
root
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

### Libraries being used

React for the interface https://react.dev/

Prisma databse https://www.prisma.io/nextjs

NextJS framework https://react.dev/

Tailwind CSS https://tailwindcss.com/

React-player https://yarnpkg.com/package/react-player

### Tested Devices

### Notes

- JSXReact
- Tailwind CSS
- Prettier
- Tailwind formatter
- Prettier linting