
//vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
          src: "/src",
           base: '/peSport-eSport/', 
        },
      },
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            },
        },
    }
})

