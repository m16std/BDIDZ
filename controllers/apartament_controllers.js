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

    async findApartaments(req, res) {
        const select = await db.query('SELECT * FROM apartament WHERE  apartament.apt_num NOT IN (SELECT apartament.apt_num FROM apartament natural join booking WHERE bkg_date_in < $1 AND bkg_date_out > $2 AND bkg_status > 0 OR bkg_date_in < $1 AND bkg_date_out > $2 AND bkg_status > 0 ) AND apartament.apt_status <> 3 AND typ_name = $3 ORDER BY apartament.apt_num', [req.body.date_in, req.body.date_out, req.body.type])
        const data = select.rows;
        res.render('../pages/apartament_page', { data });
    }
}

module.exports = new controller()
