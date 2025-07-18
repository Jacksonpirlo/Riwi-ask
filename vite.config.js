import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: 'all'  // Permitir todos los dominios (útil para ngrok)
  }
});
