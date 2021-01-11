const request = require('supertest')
const create = require('../films/create')

describe('Post Endpoints', () => {
    it('should create a new film', async () => {
      const res = await request(app)
        .post('/films')
        .send({
          userId: 1,
          title: 'test is cool',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    })
})