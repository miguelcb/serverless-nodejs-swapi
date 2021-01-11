const request = require('supertest')
const create = require('../films/create')

describe('Delete Endpoints', () => {
    it('should delete a film', async () => {
      const res = await request(app)
        .delete('/films/20')        
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('delete')
    })
})