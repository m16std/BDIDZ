const db = require('../db')

class controller {

    async getCleening(req, res) {
        try {
            const select = await db.query('SELECT * FROM cleening natural join staff');
            const data = select.rows;
            res.render('../pages/cln_page', { data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        }
    }

    async getOneCleening(req, res) {
        const id = req.params.id
        const select = await db.query('SELECT * FROM cleening natural join staff WHERE cln_id = $1', [id])
        const data = select.rows;
        res.render('../pages/cln_page', { data });
    }

    async findCleening(req, res) {
        const select = await db.query('SELECT * FROM cleening natural join staff WHERE cln_date > $1', [req.body.date])
        const data = select.rows;
        res.render('../pages/cln_page', { data });
    }

}

module.exports = new controller()
