import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'Real-estate-webapp', // Replace <repo-name> with your actual GitHub repository name
});
