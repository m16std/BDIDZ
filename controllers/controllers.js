const db = require('../db')

class controller {
    async getBookings(req, res) {
        const bookings = await db.query('SELECT * FROM booking ORDER BY bkg_num')
        res.json(bookings.rows)
    }
    async getOneBooking(req, res) {
        const id = req.params.id
        const booking = await db.query('SELECT * FROM booking WHERE bkg_num = $1', [id])
        res.json(booking.rows[0])
    }
}

module.exports = new controller()