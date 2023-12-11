const db = require('../db')

class controller {

    async getResidents(req, res) {
        try {
            const select = await db.query('SELECT * FROM resident');
            const data = select.rows;
            res.render('../pages/resident_page', { data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        }
    }

    async getOneResident(req, res) {
        const id = req.params.id
        const select = await db.query('SELECT * FROM resident WHERE apt_num = $1', [id])
        res.json(select.rows[0])
    }
}

module.exports = new controller()
