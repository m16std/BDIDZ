const db = require('../db')

class controller {

    async getFullBkg(req, res) {
        try {
            const select = await db.query('SELECT * FROM booking LEFT JOIN rsd_list ON booking.bkg_num = rsd_list.bkg_num LEFT JOIN resident ON rsd_list.rsd_pasport = resident.rsd_pasport ORDER BY booking.bkg_num');
            const data = select.rows;
            res.render('../pages/bkg_full_page', { data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        }
    }

    async findFullBkg(req, res) {
        const select = await db.query('SELECT * FROM booking LEFT JOIN rsd_list ON booking.bkg_num = rsd_list.bkg_num LEFT JOIN resident ON rsd_list.rsd_pasport = resident.rsd_pasport WHERE booking.bkg_num = $1 ORDER BY booking.bkg_num', [req.body.bkg_num])
        const data = select.rows;
        res.render('../pages/bkg_full_page', { data });
    }

    async findFullBkgCheck(req, res) {
        const select = await db.query('SELECT *, bkg_full_price::numeric as full_price FROM booking LEFT JOIN rsd_list ON booking.bkg_num = rsd_list.bkg_num LEFT JOIN resident ON rsd_list.rsd_pasport = resident.rsd_pasport WHERE booking.bkg_num = $1 ORDER BY booking.bkg_num', [req.body.bkg_num])
        const data = select.rows;
        res.render('../pages/check_page', { data });
    }


}

module.exports = new controller()
