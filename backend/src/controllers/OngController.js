const database = require('../database/database');
const genereteUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(req, res){
        const ongs = await database('ongs').select('*');

        return res.json(ongs);
    },

    async create(req, res){
        const { name, email, whatsapp, city, uf} = req.body;

        const id = genereteUniqueId(); 
        
        await database('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        
        return res.json({ id });
    }
}