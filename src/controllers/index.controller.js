const controller = {};

const conn = require('../db/connection');

controller.index = async (req, res) => {
    try {
        const title = 'index';
        await conn();
        console.log('DB SUCCESS CONNECTION!');
        res.render('index', { title });
    } catch (error) {
        console.error(error);
    }
}

module.exports = controller;