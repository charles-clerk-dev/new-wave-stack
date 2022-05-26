# New Wave Stack

![The New Wave Stack](https://user-images.githubusercontent.com/96198083/170412378-b529b437-cd82-4fd4-add7-4abcfd64997c.png)

Learn more about [Remix Stacks](https://remix.run/stacks).

## What's in the stack

- [Netlify Deployment](https://www.netlify.com/)
- Email/Password Authentication with [Clerk](https://clerk.dev/)
- Document-relational database with [Fauna](https://fauna.com)
- Styling with [Tailwind](https://tailwindcss.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Unit testing with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

## Development

### Sign Up with Clerk

**[Sign up with Clerk](https://dashboard.clerk.dev/sign-up)** if you haven't already.

### Create a new Clerk application

Create a new application from the Clerk dashboard. Check out the Clerk docs for more information about **[setting up your Clerk application.](https://clerk.dev/docs/how-to/set-up-your-application)**

### Create a new application using the New Wave Stack Template:

```sh
npx create-remix@latest --template charles-clerk-dev/new-wave-stack <your-app>
```

### Navigate into your project directory

```sh
cd <your-app>
```

### Create a `.env` file.

```sh
  touch .env
```

### Find your **[Frontend API key and Backend API key](https://dashboard.clerk.dev/last-active?path=api-keys)** on the Dashboard and add them to that file like this:

```
CLERK_FRONTEND_API=<YOUR_FRONTEND_API>
CLERK_API_KEY=<YOUR_CLERK_API_KEY>
```

### Install Netlify CLI

If you don't already have the Netlify CLI downloaded, run:

```she
npm i -g netlify-cli@latest
```

### Trigger an initial build

```sh
npm run build
```

### Start your development instance

```sh
npm run dev
```

Visit http://localhost:3000/. If everything is set up correctly, you should see something that looks like this:

<img width="1771" alt="Screen Shot 2022-05-25 at 9 52 23 PM" src="https://user-images.githubusercontent.com/96198083/170412460-f1b7884e-f1bc-445e-bc1d-79691fc1dafb.png">

That's it! You're all set to start building your Remix application with complete user management provided by Clerk.

## Database

This template comes pre-configured to make calls to a **[Fauna database](https://fauna.com/)**

To make authenticated calls to a Fauna database, you'll need to use one of Clerk's handy **[JWT Templates](https://clerk.dev/docs/how-to/jwt-templates)**. Check out our **[detailed instructions about setting up Clerk and Fauna](https://clerk.dev/docs/integration/fauna)**).

For a better understanding about how Fauna works with Remix and Clerk, it is highly recommend to work through Clerk's **[Remix/Clerk/Fauna Tutorial](https://clerk.dev/tutorials/build-movie-emoji-quiz-with-remix-fauna-and-clerk)**

## Styling

This template is pre-configured to use Tailwind styling. For more information about Tailwind classes and core concepts, check out the **[Tailwind documentation](https://tailwindcss.com/docs)**.

## Deployment

This template uses Netlify for deployment. Setting up your Remix app to deploy with Netlify couldn't be easier. **[Step by step instructions can be found here](https://www.netlify.com/blog/how-to-deploy-remix-apps-on-netlify/)**, and deployment only takes minutes.

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. We've included Cypress's example files to help you on your way, but for more information on Cypress, **[check out their official documentation](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)**.

### Jest/Testing Library

For lower level tests of utilities and individual components, we use [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
