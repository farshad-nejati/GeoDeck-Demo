const path = require('path');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    ['snowpack-plugin-less', {javascriptEnabled: true}],
    // 'snowpack-plugin-less',
    // [
    //   'snowpack-plugin-less',
    //   {
    //     compilerOptions: {
    //       loadPath: './node_modules',
    //     },
    //   },
    // ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
  ],
  alias: {
    // Type 1: Package Import Alias
    // "lodash": "lodash-es",
    // Type 2: Local Directory Import Alias (relative to cwd)
    '@app': './src',
    "@pages": './src/pages',
    "@components": './src/components',
    '@api': './src/api',
    '@redux': './src/store',
    '@less': './src/less',
    '@static': './src/static',
    '@test': './src/test',
  },

  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
    // {"match": "all", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
