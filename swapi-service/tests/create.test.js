const request = require('supertest')
const create = require('../films/create')

describe('Post Endpoints', () => {
    it('should create a new film', async () => {
      const res = await request(app)
        .post('/films')
        .send({
          titulo: 'episodio 2021',
          episodio_id: 20,
          sinopsis : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque urna, aliquet et lacus sed, lacinia aliquet est.',
          director : 'Miguel caballero',
          productor : 'Francisco Sagasti',
          fecha_lanzamiento : '2021-06-06',
          especies : 'https://swapi.py4e.com/api/species/1/',
          naves : 'https://swapi.py4e.com/api/starships/2/',
          vehiculos : 'https://swapi.py4e.com/api/vehicles/4/',
          personajes : 'https://swapi.py4e.com/api/people/1/',
          planetas : 'https://swapi.py4e.com/api/planets/1/',
          url : 'https://swapi.py4e.com/api/films/20/',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('post')
    })
})