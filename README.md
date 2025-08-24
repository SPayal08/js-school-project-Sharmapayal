Timeline App (TypeScript Refactor)

This project introduces static typing and modular code structure by converting the JavaScript-based timeline app into TypeScript with strict mode enabled.

Key Changes

TypeScript Initialization

Added tsconfig.json with "strict": true.

Configured compiler to output compiled files into dist/.

File Conversion

script.js → src/index.ts.

Defined interfaces/types for timeline event data.

Code split into ES modules:

fetcher.ts → Handles loading event data.

renderer.ts → Renders timeline markers.

modal.ts → Controls modal open/close logic.

Build Scripts

Compile TypeScript → JavaScript using tsc.

Bundler support (Vite/Webpack/Rollup) can also be added for production builds.
