/// <reference types="vite/client" />
/// <reference types="node" />

import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslint()]
})
