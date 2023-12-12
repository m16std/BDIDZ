const db = require('../db')

class controller {

    async getBookings(req, res) {
        try {
            const select = await db.query('SELECT * FROM booking order by bkg_num');
            const data = select.rows;
            res.render('../pages/booking_page', { data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
        }
    }

    async addBooking(req, res) {
        try {
            const result = await db.query('CALL public.create_booking($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [req.body.surname, req.body.name, req.body.patronimus, req.body.pasport, req.body.phone, req.body.sex, req.body.date_brth, req.body.apt_num, req.body.date_in, req.body.date_out, req.body.price, req.body.pay_type]);
            //res.status(200).send('Record added successfully');
            console.log(`Record added successfully`)
            res.redirect('/booking')
        } catch (error) {
            console.error('Error adding record:', error);
            res.status(500).send('Error adding record');
        }
    }

    async editBooking(req, res) {
        try {
            const result = await db.query('update booking set apt_num = $1, bkg_status = $2, bkg_date_in = $3, bkg_date_out = $4,  bkg_full_price = $5, bkg_pay_type = $6 WHERE bkg_num = $7', [req.body.apt_num, req.body.bkg_status, req.body.date_in, req.body.date_out, req.body.price, req.body.pay_type, req.body.bkg_num]);
            //res.status(200).send('Record added successfully');
            console.log(`Record edited successfully`)
            res.redirect('/booking')
        } catch (error) {
            console.error('Error editing record:', error);
            res.status(500).send('Error editing record');
        }
    }

    async findBooking(req, res) {
        const select = await db.query('SELECT * FROM booking WHERE bkg_num = $1', [req.body.bkg_num])
        const data = select.rows;
        res.render('../pages/booking_page', { data });
    }
}

module.exports = new controller()
