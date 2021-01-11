const request = require('supertest')
const create = require('../films/create')

describe('Get Endpoints', () => {
    it('should get a film', async () => {
      const res = await request(app)
        .get('/films/1')        
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('get')
    })
})