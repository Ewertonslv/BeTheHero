const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) { //lista todas as ongs cadastradas
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },



    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //Gera id com 4 bytes hexadecimais aleatorios

        await connection('ongs').insert({
            id, 
            name,
            email,
            whatsapp,
            city,
            uf,

        })

        return response.json({ id });
        }
};