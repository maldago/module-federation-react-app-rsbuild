# Rsbuild project

This project uses RsBuild to build the package. For more information see the [docs](https://rsbuild.dev/).

## Module Federation

Module federation plugin package is `@module-federation/rsbuild-plugin`. This supplies the `pluginModuleFederation` configuration for the `rsbuild.config.ts` file. Fore more details on module federation see [docs](https://module-federation.io/).

The configuration is quite light and is configured to run as a remote. Currently the generation of dts files is disabled.

```typescript
...
  plugins: [
    ...
    pluginModuleFederation({
      exposes: {
        './remote-entry': './src/remote-entry',
      },
      name: 'react_app',
      dts: false
    }),
    ...
  ],
```  

To make it possible that we can serve a different version of react than the host. The `React` libs are not shared. The `React` application needs to be wrapped in a web component. See the `remote-entry.tsx`. This is the entry point for the module.

Host of this remote will need to run the `init` code block to register the federated module. It will require the package `@module-federation/enhanced`. The naming used in the following example are just examples.

```typescript
init({
 name: 'react-mfe',
  remotes: [
    {
      name: 'remote-entry',
      entry: '<remote-url>/mf-manifest.json',
    },
  ],
})
...
// once initialized it will need to be loaded
loadRemote('remote-entry/remote-entry');

```

The component markup that was defined in the `remote-entry.tsx` can then be used in the angular application.

e.g.

```html
    ...
    <react-mfe></react-mfe>
    ...
```

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
