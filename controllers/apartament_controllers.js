const db = require('../db')

class controller {

    async getApartaments(req, res) {
        try {
            const select = await db.query('SELECT * FROM apartament');
            const data = select.rows;
            res.render('../pages/apartament_page', { data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        }
    }

    async getOneApartament(req, res) {
        const id = req.params.id
        const select = await db.query('SELECT * FROM apartament WHERE apt_num = $1', [id])
        res.json(select.rows[0])
    }
}

module.exports = new controller()
