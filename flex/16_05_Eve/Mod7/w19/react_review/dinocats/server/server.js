const express = require('express')
const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 5050;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const dinoRoutes = require('./routes/dinocats')

app.use('/dinocats', dinoRoutes)

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})