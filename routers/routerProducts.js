const express = require('express');
const { Producto } = require('../dataProductos');

const routerProducts = express.Router();

routerProducts.get('/', function (req, res) {
    res.send(Producto)
})

routerProducts.get('/:id', async (req, res) => {
    let negocioId = parseInt(req.params.id);
    let negocio = await negocios.find(n => n._id === negocioId);

    if (negocio) {
        res.send(negocio);
    } else {
        res.status(404).send({ message: 'Negocio no encontrado' });
    }
});

routerProducts.post('/', async (req, res) => {

    let { _id, name, datetime, img } = req.body;

    let negocio = { _id, name, datetime, img };
    await negocios.push(negocio);
    res.status(201).json({ message: 'Negocio agregado con éxito', agregado: negocio.name });
}
)

routerProducts.delete('/:id', async (req, res) => {
    const negocioId = parseInt(req.params.id);

    const index = await negocios.findIndex(n => n._id === negocioId);

    if (index === -1) {
        return res.status(404).json({ message: 'Negocio no encontrado' });
    }

    // Eliminar el negocio directamente del array usando splice
    negocios.splice(index, 1);

    res.status(200).json({ message: 'Negocio eliminado con éxito' });
});

module.exports = routerProducts;