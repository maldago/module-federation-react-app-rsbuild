import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  output: {
    target: 'web',
    distPath: {
      root: './dist/mf',
    },
    filename: {},
    cleanDistPath: true,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      exposes: {
        './remote-entry': './src/remote-entry',
      },
      name: 'react_app',
      dts: false
    }),
  ],
  server: {
    port: 3004,
    cors: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
});
