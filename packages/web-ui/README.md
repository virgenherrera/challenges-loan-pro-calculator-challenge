# Description

basic [React](https://reactjs.org/) Vite TypeScript starter repository.

## Feature libraries

- Vite
- React
- Typescript
- Jest
- testing-library
- eslint

## Installation

```bash
npm install
```

## Running the app

### development with watch mode

```bash
npm run dev
```

### production mode

```bash
npm run build && npx http-server ./dist/
```

## Testing the app

### run unit tests with coverage

```bash
npm run test:unit
```

### detect current changes and execute just the involved Test Suites

```bash
npm run UT:develop
```

### Local Full build (emulates locally the CI pipeline)

```bash
npm run local:ci
```
