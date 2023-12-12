const express = require('express');
const PORT = 8080;
const bkg_router = require('./routes/booking_router');
const apt_router = require('./routes/apartament_router');
const rsd_router = require('./routes/resident_router');
const cln_router = require('./routes/cln_router');
const bkg_full_router = require('./routes/bkg_full_router');
const app = express();


const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'scripts')));
//app.set('pages', path.join(__dirname, 'pages'));
app.set('view engine', 'pug'); // Используем Pug в качестве шаблонизатора
app.use(express.urlencoded({ extended: true }));
app.use(express.static('style'));

app.listen(PORT, () => { console.log(`App running on port ${PORT}.`) })

app.use(express.json())
app.use('/booking', bkg_router)
app.use('/apartament', apt_router)
app.use('/resident', rsd_router)
app.use('/cleening', cln_router)
app.use('/bkg_full', bkg_full_router)

app.get('/', (req, res) => {
    res.render('../pages/home_page');
}
)
