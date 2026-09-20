const request = require("supertest")
const app = require("./server")

describe("GET /info", () => {
    test('returns application information', async () => {
        const response = await request(app).get('/info');

        expect(response.statusCode).toBe(200)
        expect(response.body.application).toBe('DevOps Docker Demo')
    })
})