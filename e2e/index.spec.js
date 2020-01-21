describe('Google', () => {
  beforeAll(async () => {
    // Intercept API response and pass mock data for Puppeteer
    await page.setRequestInterception(true)
    page.on('request', (request) => {
      if (request.url() === 'http://localhost:5000/api/profile/skills') {
        request.respond({
          content: 'application/json',
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify(require('@/e2e/fixtures/skills.json'))
        })
      } else {
        request.continue()
      }
    })
    await page.goto('http://localhost:3000/')
  })

  it('should be titled "Google"', async () => {
    // const data = await page.$eval('.skill-name', (item) => {
    //   return item.textContent
    // })
    // console.log(data)
    await expect(page.title()).resolves.toMatch('斉藤育男のプロフィール')
  })
})
