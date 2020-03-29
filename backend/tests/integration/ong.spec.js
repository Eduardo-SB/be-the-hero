const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/database');

describe('ONG', () => {
    beforeEach(async () => {
        await conn.migrate.rollback();
        await conn.migrate.latest();
    });

    afterEach(async () => {
        await conn.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
            email: "contato@email.com.br",
            whatsapp: "55419999999",
            city: "Curitiba",
            uf: "PR"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});