import { copyFile, mkdir } from 'node:fs/promises'

const routes = ['who', 'what', 'why', 'projects']
const entryFile = new URL('../dist/index.html', import.meta.url)

for (const route of routes) {
  const routeDirectory = new URL(`../dist/${route}/`, import.meta.url)
  await mkdir(routeDirectory, { recursive: true })
  await copyFile(entryFile, new URL('index.html', routeDirectory))
}
