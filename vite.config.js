import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['@digitalpersona/fingerprint', '@digitalpersona/websdk'],
      output: {
        globals: {
          '@digitalpersona/fingerprint': 'Fingerprint.WebApi',
          '@digitalpersona/websdk': 'WebSdk'
        }
      }
    }
  }
})