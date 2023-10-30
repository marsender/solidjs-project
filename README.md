# tailwind-project

## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

### Cloudflare Pages deployment ###

- Log in to the Cloudflare dashboard and select your account in Account Home > Pages.
- Select Create a new Project and the Connect Git option.
- Select the git project you want to deploy and click Begin setup
- Set build command: npm run build
- Set build output directory: /dist

Learn more about deploying your application with [Vite documentations](https://vitejs.dev/guide/static-deploy.html)
