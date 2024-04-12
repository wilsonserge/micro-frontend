---
name: Microfrontends
slug: microfrontends
description: Microfrontends allow teams to work independently of each other by splitting the application into smaller, shareable, and modular components.
framework: Next.js
useCase: Monorepos
css: Tailwind

relatedTemplates:
  - monorepo-turborepo
  - turborepo-next-basic
  - turborepo-sveltekit-starter
---

# Microfrontends

Microfrontends allow teams to work independently of each other by splitting the application into smaller, shareable, and modular components. The primary goal for a microfrontend strategy is to improve collaboration across teams of developers.

## How to use

You can choose from one of the following two methods to use this repository:

Next, run the included Next.js apps in development mode:

```bash
pnpm dev
```

## What's Included?

The example is a monorepo built with [Turborepo](https://turborepo.org/) with the following setup:

- Everything is in [TypeScript](https://www.typescriptlang.org/)
- Next.js is used for the applications in [./apps](./apps)
- Shared packages used by the apps in [./packages](./packages)
- [Tailwind CSS](https://tailwindcss.com) for utility CSS in React components and to build the design system
- Storybook is used for the components that are part of the [`acme-design-system`](./packages/acme-design-system) package and its setup is shared in the [`acme-storybook`](./packages/acme-storybook) package
- The ESLint config lives in [eslint-config-acme](./packages/eslint-config-acme)
- [Changesets](https://github.com/changesets/changesets) to manage versioning and publishing of packages. Learn more in the [Versioning & Publishing Packages](#versioning--publishing-packages) section.

## How it Works

There are many strategies for designing microfrontends and your approach will be dictated by how you want to structure your applications and teams. We'll share a few different approaches and how they work.

### Monorepo Support

One of the challenges of building microfrontends is dependency management and build systems. In the packages and apps in this monorepo, we'll be using [Turborepo](https://turborepo.org/) and Changesets to earn great developer experience for our teams with minimal configuration.

### Design System with Tailwind and CSS Modules

[./packages/acme-design-system](./packages/acme-design-system) features multiple components with CSS Modules and [Tailwind](https://tailwindcss.com/). The components are installed in the app as a dependency and the compilation step is handled by [SWC](https://swc.rs/).

All the CSS used by the app and components is unified by Tailwind, so having components outside the app doens't increase the CSS bundle size.

HMR and React Fast Refresh work as expected even though the components live outside the app and have a different build process.

### Pages Living Outside the Next.js App

[./packages/acme-pages](./packages/acme-pages) contains all the pages that are used in the Next.js app. They are compiled with [SWC](https://swc.rs/) and work in the same way as [./packages/acme-design-system](./packages/acme-design-system).

With this approach, we will need to be mindful of dead code elimination when there is server-only code (e.g. `getStaticProps`, `getStaticPaths` or `getServerSideProps`) which can't be properly distinguished by the Next.js app. To avoid including server code in pages, it's recommended to have data fetching methods in a different file and import them from the page in the Next.js app.
