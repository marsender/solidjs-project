# solidjs-project

![Tests](https://github.com/marsender/solidjs-project/actions/workflows/node.js.yml/badge.svg?branch=main)

This is a test project with

- [Vite](https://vitejs.dev/)
- [Solid JS](https://solidjs.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [InversifyJS](https://inversify.io/)
- [TanStack Query](https://tanstack.com/query/latest)

## Install

Clone [SolidJS project repository](https://github.com/marsender/solidjs-project)

```bash
git clone https://github.com/marsender/solidjs-project.git
cd solidjs-project
```

```bash
npm install # or pnpm install or yarn install
```

## Build for dev

```bash
npm run dev
```

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build for prod

```bash
npm run build
```

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Run tests

```bash
npm run test
```

## Deploy

### Cloudflare Pages deployment

- Log in to the Cloudflare dashboard and select your account in Account Home > Pages.
- Select Create a new Project and the Connect Git option.
- Select the git project you want to deploy and click Begin setup
- Set build command: npm run build
- Set build output directory: /dist

Learn more about deploying your application with [Vite documentation](https://vitejs.dev/guide/static-deploy.html)
