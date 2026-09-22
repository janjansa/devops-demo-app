const request = require("supertest")
const app = require("./server")

describe("GET /", () => {
    test('returns expected homepage message', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('Hello from my Node.js application v.1.5!')
    })
})

describe("GET /info", () => {
    test('returns application information', async () => {
        const response = await request(app).get('/info');

        expect(response.statusCode).toBe(200)
        expect(response.body.application).toBe('DevOps Docker Demo')
    })
})