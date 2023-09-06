# React + TypeScript + Vite + useState + useReducer

This template provides a setup to get React working in Vite with HMR, enables type aware lint rules and other recommendations for developing a production application, legacy plugin support for older browsers, env variable support in node when building the application, and https support for the application when building locally.

Based on the wonderful tool https://github.com/vitejs/vite/tree/main/packages/create-vite#readme using the following command:

```
npm create vite@latest react-typescript-vite -- --template react-ts
```

See https://github.com/vitejs/vite/tree/main/packages/create-vite#community-templates for more

## Installation

```
npm i
```

## Run in dev mode locally (http) with hot reload

```
npm run dev
```

## Run in dev mode locally (https) with hot reload

```
npm run dev-https
```

## Type checking live (run in another terminal with the previous run in dev mode locally options)

```
npm run dev-type-check
```

## Lint (--fix option to automatically fix if possible)

```
npm run lint
```

## Build for production

```
npm run build
```

## Preview build for production (first run previous build for production script)

```
npm run preview
```