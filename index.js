const express = require('express');
const PORT = 8080;
const new_router = require('./routes/routes');
const app = express();

app.listen(PORT, () => { console.log(`App running on port ${PORT}.`) })

app.use(express.json())
app.use('/api', new_router)

app.get('/', (req, res) => { res.send('Hello blyat') })

