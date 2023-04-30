import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  base:'https://dawmsi.github.io/pokedex/',
  build: {
    outDir: path.join(__dirname, "dist"),
  },
  plugins: [react()],
})
