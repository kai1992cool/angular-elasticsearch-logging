// import { Configuration } from 'webpack';
// import * as nodeExternals from 'webpack-node-externals';

// export default (config: Configuration): Configuration => {
//   if (config.resolve) {
//     config.resolve.fallback = {
//       "querystring": false,
//       "os": false,
//       "zlib": false,
//       "util": false,
//       "http": false,
//       "https": false,
//       "stream": false,
//       "url": false,
//       "assert": false,
//       "console": false,
//       "crypto-browserify": false,
//       "crypto": false,
//       "async_hooks": false,
//       "net": false,
//       "tls": false,
//       "worker_threads": false,
//       "perf_hooks": false,
//       "diagnostics_channel": false
//     };
//   }
//   config.externals = [
//     nodeExternals({
//       allowlist: [
//       ]
//     })
//   ]
//   return config;
// };
