# RevivalTV - Frontend - Test

RevivalTV Frontend Test main platform Frontend built with [Next.js](https://nextjs.org/) and [Storybook](https://storybookjs.org).

## Table of Content

- [Demo with vercel](#Demo-with-vercel)
- [Prerequisite](#Prerequisite)
- [Getting started](#Getting-started)
- [Build to production](#Build-to-production)

## Demo with vercel

- https://ecommerce-storybook-nextjs-tailwindcss.vercel.app/


## Prerequisite

- NodeJS
- NextJS
- Storybook
- TailwindCSS

## Getting started

- Install dependencies

  ```bash
  npm install
  ```

- Start `Next` development server

  ```bash
  npm run dev
  ```

  This will start a web server at `http://localhost:3000`

- Start `Storybook` development server

  ```bash
  npm run storybook
  ```

  This will start a web server at `http://localhost:6006`

## Build to production

- Build the `Next` app

  ```bash
  npm run build
  ```

  This will generate directory `.next`

- Build the `Storybook` app
  ```bash
  npm run build-storybook
  ```
  This will generate directory `storybook-static`