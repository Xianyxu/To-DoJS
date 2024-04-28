// vite.config.js
import { defineConfig } from 'vite'
import { nodePolyfills } from "vite-plugin-node-polyfills";
nodePolyfills();
// export default {
    
// }

export default defineConfig({
    plugins: [
        nodePolyfills({
            overrides: {
                // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
                fs: 'memfs',
            },
        }),
    ],
})