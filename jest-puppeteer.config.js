module.exports = {
  launch: {
    headless: true,
    slowMo: 1000
  },
  server: {
    command: 'BROWSER=none npm run dev',
    port: 3000,
    launchTimeout: 50000
  }
}
