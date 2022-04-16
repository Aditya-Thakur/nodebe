require('./db/db');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const userRouter = require('./router/user.router');
const coachingCenterRouter = require('./router/coachingCenter.router');


const cookieParser = require("cookie-parser");
const app = express();

app.listen(properties.port, () => {
    console.log('Express is serving at port: ', properties.port);
});

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/user', userRouter);
app.use('/coachingCenter', coachingCenterRouter);

//app.use('/coachingCenter', userRouter);
app.get('/', (req, res) => { res.json({ msg: 'RPA is up and live.' }) })