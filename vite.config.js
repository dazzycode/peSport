
//vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
  const repoName = 'eSport'

export default defineConfig({

    plugins: [react()],
    resolve: {
        alias: {
          src: "/src",
              base: `/${repoName}/`,

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

